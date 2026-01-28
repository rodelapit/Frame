export default function handler(req, res) {
  // Disabled: backend email health checks removed in Formspree-only setup.
  // Keeping this file to avoid import errors during build.
  res.status(410).json({
    ok: false,
    disabled: true,
    message: 'health-email endpoint removed. Using Formspree.',
  })
}
