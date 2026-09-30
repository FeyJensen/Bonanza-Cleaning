import { useState } from 'react'

const INITIAL_FORM = {
  name: '',
  email: '',
  phone: '',
  service: 'Residential Cleaning',
  message: '',
}

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle')

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus('error')
      return
    }

    setStatus('sending')
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New quote request: ${form.service}`,
          ...form,
        }),
      })
      const result = await response.json()

      if (result.success) {
        setStatus('success')
        setForm(INITIAL_FORM)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container contact__inner">
        <div className="contact__info">
          <h2>Request a Free Quote</h2>
          <p>
            Tell us a bit about your space and we'll get back to you within
            one business day with a custom quote.
          </p>
          <ul className="contact__details">
            <li>📞 (503) 901-9256</li>
            <li>✉️ yolyespijime@yahoo.com</li>
            <li>📍 Serving the greater metro area</li>
          </ul>
        </div>

        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label htmlFor="service">Service Needed</label>
            <select id="service" name="service" value={form.service} onChange={handleChange}>
              <option>Residential Cleaning</option>
              <option>Commercial Cleaning</option>
              <option>Deep Cleaning</option>
              <option>Move In/Out Cleaning</option>
              <option>Window Cleaning</option>
              <option>Carpet & Upholstery</option>
            </select>
          </div>

          <div className="form-row">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Request'}
          </button>

          {status === 'success' && (
            <p className="form-status form-status--success">
              Thanks! We'll be in touch shortly.
            </p>
          )}
          {status === 'error' && (
            <p className="form-status form-status--error">
              Something went wrong. Please fill out your name, email, and
              message, or call us directly.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
