import { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setMessage('Please complete all fields before sending.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setMessage('Please enter a valid email address.');
      return;
    }

    setMessage(
      'Thanks! Your message has been sent. We’ll be in touch shortly.'
    );

    setForm({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow eyebrow--light">Say hello</p>
          <h1>Come by, stay awhile.</h1>
        </div>
      </section>

      <section className="section">
        <div className="container two-column">
          <div className="copy">
            <p className="eyebrow">Find us</p>
            <h2>We're right around the corner.</h2>

            <h3>Address</h3>
            <p>
              42 Connaught Place
              <br />
              New Delhi, India 110001
            </p>

            <h3>Phone & email</h3>
            <p>
              +91 11 5550 0184
              <br />
              <a href="mailto:hello@delicioushub.in">
                hello@delicioushub.in
              </a>
            </p>

            <h3>Opening hours</h3>
            <p>
              Tue–Thu: 12pm–10pm
              <br />
              Fri–Sat: 12pm–11pm
              <br />
              Sun: 12pm–9pm
            </p>
          </div>

          <div className="copy">
            <p className="eyebrow">Drop us a note</p>

            <form onSubmit={handleSubmit}>
              {message && (
                <div
                  className={
                    message.startsWith('Thanks')
                      ? 'success-message'
                      : 'error-message'
                  }
                  role="status"
                >
                  {message}
                </div>
              )}

              <label htmlFor="name">Name</label>
              <input
                id="name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />

              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
              />

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="5"
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
              />

              <button type="submit">Send message</button>
            </form>
          </div>
        </div>
      </section>

      <footer>
        <p>Delicious Hub</p>
        <p>Connaught Place, New Delhi</p>
      </footer>
    </>
  );
}

export default Contact;