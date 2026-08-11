import { useState } from 'react';

const initialForm = { name: '', email: '', message: '' };

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: '', text: '' });

  const handleSubmit = event => {
    event.preventDefault();
    if (!form.name || !form.email || !form.message) { setStatus({ type: 'error', text: 'Please complete all fields before sending.' }); return; }
    if (!/\S+@\S+\.\S+/.test(form.email)) { setStatus({ type: 'error', text: 'Please enter a valid email address.' }); return; }
    setStatus({ type: 'success', text: 'Thanks! Your message has been sent. We will be in touch shortly.' });
    setForm(initialForm);
  };

  return <>
    <section className="page-hero page-hero--contact"><div className="container"><p className="eyebrow eyebrow--light">Contact Delicious Hub</p><h1>Come by,<br /><em>stay awhile.</em></h1></div></section>
    <section className="section contact-section"><div className="container contact-layout"><aside className="contact-details"><p className="eyebrow">Find us</p><h2>We're right around the corner.</h2><p className="contact-intro">Whether you are planning dinner, a celebration, or simply have a question, our team would love to hear from you.</p><div className="contact-list"><div className="contact-item"><span aria-hidden="true">⌖</span><div><strong>Address</strong><p>42 Connaught Place<br />New Delhi, India 110001</p></div></div><div className="contact-item"><span aria-hidden="true">☎</span><div><strong>Call us</strong><p><a href="tel:+911155500184">+91 11 5550 0184</a></p></div></div><div className="contact-item"><span aria-hidden="true">✉</span><div><strong>Email us</strong><p><a href="mailto:hello@delicioushub.in">hello@delicioushub.in</a></p></div></div><div className="contact-item"><span aria-hidden="true">◷</span><div><strong>Opening hours</strong><p>Tue–Thu: 12pm–10pm<br />Fri–Sat: 12pm–11pm<br />Sun: 12pm–9pm</p></div></div></div></aside><form className="form-card contact-form" onSubmit={handleSubmit} noValidate><p className="eyebrow">Drop us a note</p><h2>Let's start a conversation.</h2>{status.text && <div className={status.type === 'success' ? 'success-message' : 'error-message'} role="status">{status.text}</div>}<label htmlFor="contact-name">Name<input id="contact-name" value={form.name} onChange={e => { setForm({ ...form, name: e.target.value }); setStatus({ type: '', text: '' }); }} placeholder="Your name" /></label><label htmlFor="contact-email">Email<input id="contact-email" type="email" value={form.email} onChange={e => { setForm({ ...form, email: e.target.value }); setStatus({ type: '', text: '' }); }} placeholder="you@example.com" /></label><label htmlFor="contact-message">Message<textarea id="contact-message" rows="6" value={form.message} onChange={e => { setForm({ ...form, message: e.target.value }); setStatus({ type: '', text: '' }); }} placeholder="How can we help?" /></label><button className="button button--primary" type="submit">Send message</button></form></div></section>
    <section className="map" aria-label="Map showing Delicious Hub in New Delhi, India"><iframe title="Map of Delicious Hub in Connaught Place, New Delhi" src="https://www.google.com/maps?q=Connaught%20Place%2C%20New%20Delhi%2C%20India&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><div className="map-label"><span>Delicious Hub</span><small>Connaught Place, New Delhi</small></div></section>
  </>;
}

export default Contact;
