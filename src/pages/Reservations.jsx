import { useState } from 'react';

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  guests: '',
  message: '',
};

function Reservations() {
  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};

    ['name', 'email', 'phone', 'date', 'time', 'guests'].forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = 'This field is required.';
      }
    });

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setFormData(emptyForm);
    }
  };

  return (
    <>
      <section className="page-hero page-hero--reserve">
        <div className="container">
          <p className="eyebrow eyebrow--light">Reservations</p>

          <h1>
            Save your
            <br />
            <em>seat.</em>
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container reservation-layout">
          <div className="copy">
            <p className="eyebrow">Dine with us</p>
            <h2>We'd love to have you.</h2>

            <p>
              For parties of seven or more, please give us a call. We hold
              tables for 15 minutes after your reservation time.
            </p>

            <div className="reservation-notes">
              <p>
                <strong>Hours</strong>
                <br />
                Tue–Thu 12pm–10pm
                <br />
                Fri–Sat 12pm–11pm
              </p>

              <p>
                <strong>Call us</strong>
                <br />
                (415) 555-0184
              </p>
            </div>
          </div>

          <form
            className="form-card"
            onSubmit={handleSubmit}
            noValidate
          >
            {submitted && (
              <div className="success-message" role="status">
                Your reservation request has been submitted successfully!
              </div>
            )}

            <div className="form-grid">
              <label>
                Full name
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <small>{errors.name}</small>}
              </label>

              <label>
                Email
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <small>{errors.email}</small>}
              </label>

              <label>
                Phone
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <small>{errors.phone}</small>}
              </label>

              <label>
                Guests
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                >
                  <option value="">Select guests</option>

                  {[1, 2, 3, 4, 5, 6].map((number) => (
                    <option key={number} value={number}>
                      {number} {number === 1 ? 'guest' : 'guests'}
                    </option>
                  ))}
                </select>

                {errors.guests && <small>{errors.guests}</small>}
              </label>

              <label>
                Date
                <input
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                />
                {errors.date && <small>{errors.date}</small>}
              </label>

              <label>
                Time
                <input
                  name="time"
                  type="time"
                  value={formData.time}
                  onChange={handleChange}
                />
                {errors.time && <small>{errors.time}</small>}
              </label>
            </div>

            <label>
              Special request{' '}
              <span className="optional">(optional)</span>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Tell us anything we should know..."
              />
            </label>

            <button
              className="button button--primary"
              type="submit"
            >
              Request a table
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Reservations;