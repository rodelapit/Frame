import { useState } from 'react'

export default function ContactForm(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [trap, setTrap] = useState('') // honeypot
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e){
    e.preventDefault()
    setStatus(null)
    setLoading(true)

    try{
      const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || '/api/send-email'
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ name, email, message, website: trap })
      })
      const data = await res.json()
      if(res.ok) {
        setStatus({ type: 'success', text: 'Message sent — thank you!' })
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setStatus({ type: 'error', text: data.error || 'Failed to send message.' })
      }
    }catch(err){
      setStatus({ type: 'error', text: err.message || 'Failed to send message.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} aria-label="Contact form">
      {/* Honeypot field */}
      <label style={{ display: 'none' }} aria-hidden="true">
        Website
        <input type="text" tabIndex={-1} autoComplete="off" value={trap} onChange={(e) => setTrap(e.target.value)} />
      </label>
      <div className="form-row">
        <label>
          Name
          <input value={name} onChange={e => setName(e.target.value)} required />
        </label>
        <label>
          Email
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </label>
      </div>

      <label>
        Message
        <textarea value={message} onChange={e => setMessage(e.target.value)} rows={6} required />
      </label>

      <div className="form-actions">
        <button type="submit" disabled={loading}>{loading ? 'Sending…' : 'Send Message'}</button>
      </div>

      {status && (
        <p className={status.type === 'success' ? 'form-success' : 'form-error'}>{status.text}</p>
      )}
    </form>
  )
}
