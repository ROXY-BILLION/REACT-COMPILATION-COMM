import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <main className="page-container">
      <section className="page-hero">
        <p className="eyebrow">GET IN TOUCH</p>

        <h1>Let's talk.</h1>

        <p>
          Have a question about our products? Send us a
          message.
        </p>
      </section>

      <section className="contact-layout">
        <div className="contact-info">
          <h2>Contact Information</h2>

          <p>
            We're happy to help with product questions,
            general enquiries, and support.
          </p>

          <div className="contact-item">
            <div className="contact-icon">
              <i className="fa-solid fa-envelope"></i>
            </div>

            <div>
              <span>Email</span>
              <p>hello@nexastore.com</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <i className="fa-solid fa-phone"></i>
            </div>

            <div>
              <span>Phone</span>
              <p>+234 800 000 0000</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <i className="fa-solid fa-location-dot"></i>
            </div>

            <div>
              <span>Location</span>
              <p>Lagos, Nigeria</p>
            </div>
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >
          {submitted && (
            <div className="success-message">
              <i className="fa-solid fa-circle-check"></i>
              Message submitted successfully.
            </div>
          )}

          <div className="form-group">
            <label htmlFor="name">Name</label>

            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>

            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we help?"
              rows="6"
              required
            ></textarea>
          </div>

          <button className="primary-button" type="submit">
            Send Message
            <i className="fa-solid fa-paper-plane"></i>
          </button>
        </form>
      </section>
    </main>
  );
}

export default Contact;