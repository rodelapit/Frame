export default function handler(req, res) {
  // Disabled: backend send-email removed in Formspree-only setup.
  res.status(410).json({
    ok: false,
    disabled: true,
    message: 'send-email endpoint removed. Using Formspree.',
  })
}
