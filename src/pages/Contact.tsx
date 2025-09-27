import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { BASE_TITLE, keywordsContent } from '../seo';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // Track field interaction
  const [touchedName, setTouchedName] = useState(false);
  const [touchedEmail, setTouchedEmail] = useState(false);
  const [touchedMessage, setTouchedMessage] = useState(false);

  const emailValid = useMemo(() => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  }, [email]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(false);
    setError(null);
    if (!name.trim() || !emailValid || !message.trim() || message.length > 1000) {
      setError('Please complete all fields correctly.');
      return;
    }
    try {
      setSubmitting(true);
      // No backend endpoint in this project; simulate async send
      await new Promise((res) => setTimeout(res, 700));
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  const nameInvalid = !name.trim();
  const emailInvalid = !emailValid;
  const messageInvalid = !message.trim() || message.length > 1000;
  const showNameError = (touchedName || submitted) && nameInvalid;
  const showEmailError = (touchedEmail || submitted) && emailInvalid;
  const showMessageError = (touchedMessage || submitted) && messageInvalid;

  return (
    <div className="container section">
      <Helmet>
        <title>Contact Us | {BASE_TITLE}</title>
        <meta name="description" content="Contact CTK – Croydon Tamil School (Croydon Tamizh Kazhagam). Get in touch, registered address, and school location." />
        <meta name="keywords" content={keywordsContent(['Contact', 'Croydon Tamil School'])} />
        <link rel="canonical" href="https://croydontamizhkazhagam.org.uk/contact" />
      </Helmet>
      <h2 className="title-bar">Contact Us</h2>
      <div className="contact-grid">
        {/* Left: Contact form */}
        <div>
          <p>Have questions? Send us a message and we'll get back to you.</p>
          <form className="form" onSubmit={onSubmit} noValidate>
            <input
              name="name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => setTouchedName(true)}
              className={showNameError ? 'invalid' : ''}
              required
            />
            {showNameError && <div className="hint">Name is required.</div>}

            <input
              name="email"
              placeholder="Your email"
              type="email"
              inputMode="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setTouchedEmail(true)}
              className={showEmailError ? 'invalid' : ''}
              required
              aria-describedby="emailHint"
            />
            {showEmailError && (
              <div id="emailHint" className="hint">
                Please enter a valid email address (e.g., name@example.com).
              </div>
            )}

            <textarea
              name="message"
              placeholder="Your message"
              rows={5}
              maxLength={1000}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onBlur={() => setTouchedMessage(true)}
              className={showMessageError ? 'invalid' : ''}
              required
            />
            {showMessageError && (
              <div className="hint">
                Message is required and must be at most 1000 characters.
              </div>
            )}
            <div className="counter">{message.length} / 1000</div>

            <button className="button title-bar title-button" disabled={submitting || nameInvalid || emailInvalid || messageInvalid} type="submit">
              <svg className="btn-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M3 11.5l17-8-7.5 17-1.8-6.2L3 11.5z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
              {submitting ? 'Sending…' : 'Send Message'}
            </button>
            {submitted && <div className="form-success">Thank you! Your message has been sent.</div>}
            {error && <div className="form-error">{error}</div>}
          </form>
        </div>

        {/* Right: Registered address and School place */}
        <aside className="contact-aside">
          <div className="contact-card">
            <h3 className="title-bar">Registered Address</h3>
            <p>
              Panneerselvam Thangavel<br/>
              44 Leechcroft Road<br/>
              Wallington<br/>
              SM6 7JF
            </p>
          </div>
          <div className="contact-card">
            <h3 className="title-bar">School Place</h3>
            <p>
              Harris Academy Purley School<br/>
              Kendra Hall Road<br/>
              South Croydon<br/>
              CR2 6DT
            </p>
          </div>
        </aside>
      </div>

      <div className="map-wrap">
        <h3>Find us</h3>
        <div className="map-frame">
          <iframe
            src="https://www.google.com/maps?q=Harris%20Academy%20Purley%2C%20Kendra%20Hall%20Road%2C%20South%20Croydon%20CR2%206DT&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="CTK Map"
          />
        </div>
      </div>
    </div>
  );
}
