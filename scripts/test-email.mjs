// Simple local smoke test for the contact API
// Usage:
// 1) Start dev server: npm run dev
// 2) In another terminal: npm run test:email

const endpoint = process.env.TEST_ENDPOINT || 'http://localhost:3000/api/send-email'

async function main(){
  const payload = {
    name: 'Test Sender',
    email: 'sender@example.com',
    message: 'Hello from the local test script!\nThis is only a test.'
  }
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  const text = await res.text()
  console.log('Status:', res.status)
  console.log('Body  :', text)
}

main().catch(err => {
  console.error('Test failed:', err)
  process.exit(1)
})
