import { useState } from 'react'

const contactEmail = 'baskar@darpaengi.com'
const contactPhone = '+91-979-000-9817'
const usContactPhone = '+1 510 403 1789'

export default function Contact() {
  const [status, setStatus] = useState('')
  const [draft, setDraft] = useState('')

  function prepareEmail(event) {
    event.preventDefault()

    const element = event.currentTarget
    for (const fieldName of ['name', 'message']) {
      const field = element.elements.namedItem(fieldName)
      field.setCustomValidity(
        field.value.trim()
          ? ''
          : `Please enter your ${fieldName === 'name' ? 'name' : 'requirement'}.`,
      )
    }
    if (!element.reportValidity()) return
    const form = new FormData(element)
    const name = form.get('name').trim()
    const email = form.get('email').trim()
    const company = form.get('company').trim() || 'Not provided'
    const message = form.get('message').trim()
    const subject = `Manufacturing enquiry from ${name}`
    const body = [
      `Name: ${name}`,
      `Company: ${company}`,
      `Email: ${email}`,
      '',
      'Enquiry:',
      message,
    ].join('\n')

    setDraft(`To: ${contactEmail}\nSubject: ${subject}\n\n${body}`)

    setStatus(
      'Your email app should open with a draft. Review it and send it there; this website does not send the message.',
    )
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section
      className="section contact contact--closing"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="wrap">
        <div className="contact-heading" data-reveal>
          <div>
            <p className="eyebrow eyebrow--light section-marker">
              05 / Start a conversation
            </p>
            <h2 id="contact-heading">
              Tell us about
              <br />
              <span>your part.</span>
            </h2>
          </div>
          <p className="contact-lead">
            Talk with the team about a part, drawing, material or production
            requirement.
          </p>
        </div>

        <div className="contact-layout">
          <address className="contact-details" data-reveal>
            <div>
              <h3>Visit</h3>
              <p>
                DARPA Engineering
                <br />
                42-A3, SIPCOT Industrial Complex
                <br />
                SIPCOT-1, Hosur-635126
                <br />
                Tamil Nadu, India
              </p>
            </div>
            <div className="contact-details-us">
              <h3>United States</h3>
              <p>
                DARPA Engineering LLC
                <br />
                150 E B St Lbby #1810 SMB#28702
                <br />
                Casper, WY 82601, USA
              </p>
              <a href="tel:+15104031789">{usContactPhone}</a>
            </div>
            <div>
              <h3>Email</h3>
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </div>
            <div>
              <h3>Call</h3>
              <a href="tel:+919790009817">{contactPhone}</a>
            </div>
          </address>

          <form
            className="contact-form"
            onSubmit={prepareEmail}
            aria-describedby="form-note"
            data-reveal
          >
            <div className="form-field">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                maxLength="120"
                onInput={(event) => event.currentTarget.setCustomValidity('')}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-email">Work email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-company">
                Company <span>(optional)</span>
              </label>
              <input
                id="contact-company"
                name="company"
                type="text"
                autoComplete="organization"
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-message">Part or requirement</label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                maxLength="2000"
                onInput={(event) => event.currentTarget.setCustomValidity('')}
                required
              />
            </div>
            <p className="form-note" id="form-note">
              Submitting opens a draft in your email app. Nothing is sent
              automatically.
            </p>
            <button className="button button--primary" type="submit">
              Prepare email <span aria-hidden="true">→</span>
            </button>
            <p className="form-status" role="status" aria-live="polite">
              {status}
            </p>
            {draft && (
              <button
                className="draft-copy"
                type="button"
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(draft)
                    setStatus(
                      'Draft copied. Paste it into your email app and send it to baskar@darpaengi.com.',
                    )
                  } catch {
                    setStatus(
                      'Copy is unavailable. Select the draft text below and copy it into your email app.',
                    )
                  }
                }}
              >
                Email app didn’t open? Copy the draft
              </button>
            )}
            {draft && (
              <details className="email-draft">
                <summary>View the prepared draft</summary>
                <pre>{draft}</pre>
              </details>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
