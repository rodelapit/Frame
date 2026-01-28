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

  export default function handler(req, res) {
    // Disabled: backend send-email removed in Formspree-only setup.
    res.status(410).json({
      ok: false,
      disabled: true,
      message: 'send-email endpoint removed. Using Formspree.',
    })
  }
