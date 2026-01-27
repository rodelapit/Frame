import nodemailer from 'nodemailer'
import sendgrid from '@sendgrid/mail'

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })

  const token = req.query.token || req.headers['x-health-token']
  if (!process.env.HEALTH_EMAIL_SECRET) {
    return res.status(500).json({ error: 'HEALTH_EMAIL_SECRET not set' })
  }
  if (!token || token !== process.env.HEALTH_EMAIL_SECRET) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const toEmail = process.env.TO_EMAIL
  if (!toEmail) {
    return res.status(500).json({ error: 'Recipient not configured. Set TO_EMAIL.' })
  }

  const now = new Date().toISOString()
  const subject = `Portfolio email health check (${now})`
  const text = `This is a test message from the health endpoint.\nTimestamp: ${now}`
  const html = `<p>This is a test message from the health endpoint.</p><p><strong>Timestamp:</strong> ${now}</p>`

  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
  const FROM_EMAIL = process.env.FROM_EMAIL

  // Try SendGrid if configured
  if (SENDGRID_API_KEY && FROM_EMAIL) {
    try {
      sendgrid.setApiKey(SENDGRID_API_KEY)
      await sendgrid.send({ to: toEmail, from: FROM_EMAIL, subject, text, html })
      return res.status(200).json({ ok: true, provider: 'sendgrid' })
    } catch (err) {
      console.error('health-email sendgrid error', err)
      // fall through to SMTP
    }
  }

  // Fallback to SMTP
  const host = process.env.SMTP_HOST
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  if (!host || !port || !user || !pass) {
    return res.status(500).json({ error: 'Email provider not configured. Set SENDGRID_API_KEY+FROM_EMAIL or SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS.' })
  }

  try {
    const transporter = nodemailer.createTransport({ host, port, secure: port === 465, auth: { user, pass } })
    await transporter.sendMail({ to: toEmail, from: FROM_EMAIL || user, subject, text, html })
    return res.status(200).json({ ok: true, provider: 'smtp' })
  } catch (err) {
    console.error('health-email smtp error', err)
    if (process.env.NODE_ENV !== 'production') {
      return res.status(500).json({ error: 'Failed to send health email', details: err.message })
    }
    return res.status(500).json({ error: 'Failed to send health email' })
  }
}
