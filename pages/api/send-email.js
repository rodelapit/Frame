import nodemailer from 'nodemailer'
import sendgrid from '@sendgrid/mail'

export default async function handler(req, res) {
    function escapeHTML(str) {
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
    }

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { name, email, message, website } = req.body || {}

  // Simple honeypot: bots often fill hidden fields
  if (typeof website === 'string' && website.trim() !== '') {
    return res.status(200).json({ ok: true })
  }

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  // Basic validation and size limits to prevent abuse
  const trimmed = {
    name: String(name).trim(),
    email: String(email).trim(),
    message: String(message).trim()
  }
  if (trimmed.name.length < 2 || trimmed.name.length > 100) {
    return res.status(400).json({ error: 'Name must be 2-100 characters' })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed.email) || trimmed.email.length > 200) {
    return res.status(400).json({ error: 'Invalid email address' })
  }
  if (trimmed.message.length < 5 || trimmed.message.length > 5000) {
    return res.status(400).json({ error: 'Message must be 5-5000 characters' })
  }

  const toEmail = process.env.TO_EMAIL
  if (!toEmail) {
    return res.status(500).json({ error: 'Recipient not configured. Set TO_EMAIL.' })
  }

  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
  const FROM_EMAIL = process.env.FROM_EMAIL

  // Try SendGrid if configured (preferred)
  if (SENDGRID_API_KEY && FROM_EMAIL) {
    try {
      sendgrid.setApiKey(SENDGRID_API_KEY)
      const msg = {
        to: toEmail,
        from: FROM_EMAIL,
        subject: `Website message from ${trimmed.name}`,
        text: `${trimmed.message}\n\nFrom: ${trimmed.name} <${trimmed.email}>`,
        html: `<p>${escapeHTML(trimmed.message).replace(/\n/g, '<br/>')}</p><hr/><p>From: ${escapeHTML(trimmed.name)} &lt;${escapeHTML(trimmed.email)}&gt;</p>`,
        replyTo: trimmed.email
      }
      await sendgrid.send(msg)
      return res.status(200).json({ ok: true, provider: 'sendgrid' })
    } catch (err) {
      console.error('sendgrid error', err)
      // fallback to SMTP below if available
    }
  }

  // Fallback to SMTP via nodemailer
  const host = process.env.SMTP_HOST
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  if (!host || !port || !user || !pass) {
    return res.status(500).json({ error: 'Email server not configured. Set SENDGRID_API_KEY+FROM_EMAIL or SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS.' })
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass }
    })

    const mail = {
      from: `${trimmed.name} <${trimmed.email}>`,
      to: toEmail,
      subject: `Website message from ${trimmed.name}`,
      text: `${trimmed.message}\n\n---\nFrom: ${trimmed.name} <${trimmed.email}>`,
      html: `<p>${escapeHTML(trimmed.message).replace(/\n/g, '<br/>')}</p><hr/><p>From: ${escapeHTML(trimmed.name)} &lt;${escapeHTML(trimmed.email)}&gt;</p>`,
      replyTo: trimmed.email
    }

    await transporter.sendMail(mail)
    return res.status(200).json({ ok: true, provider: 'smtp' })
  } catch (err) {
    console.error('send-email error', err)
    if (process.env.NODE_ENV !== 'production') {
      return res.status(500).json({ error: 'Failed to send email', details: err.message, stack: err.stack })
    }
    return res.status(500).json({ error: 'Failed to send email' })
  }
}
