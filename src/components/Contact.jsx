import { useState } from 'react'

const INITIAL_FORM = {
  name: '',
  email: '',
  phone: '',
  service: 'Residential Cleaning',
  message: '',
}

function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle')

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus('error')
      return
    }
    // No backend wired up yet; simulate a successful submission.
    setStatus('success')
    setForm(INITIAL_FORM)
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
            <li>📞 (800) 555-1234</li>
            <li>✉️ hello@bonanzacleaning.com</li>
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

          <button type="submit" className="btn btn--primary">
            Send Request
          </button>

          {status === 'success' && (
            <p className="form-status form-status--success">
              Thanks! We'll be in touch shortly.
            </p>
          )}
          {status === 'error' && (
            <p className="form-status form-status--error">
              Please fill out your name, email, and message.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
