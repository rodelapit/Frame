// Health check for email delivery
// Usage:
// 1) npm run dev
// 2) npm run test:health

const base = process.env.TEST_BASE || 'http://localhost:3000'
const token = process.env.HEALTH_EMAIL_SECRET || 'dev-health-secret-123'

async function main(){
  const url = `${base}/api/health-email?token=${encodeURIComponent(token)}`
  const res = await fetch(url, { method: 'GET' })
  const text = await res.text()
  console.log('GET', url)
  console.log('Status:', res.status)
  console.log('Body  :', text)
}

main().catch(err => { console.error(err); process.exit(1) })
