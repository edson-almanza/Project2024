import { useState } from "react";
import './Contact.css'

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};


    if (!name.trim()) {
      newErrors.name = "Name is required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "The email is not valid.";
    }

    if (!message.trim()) {
      newErrors.message = "The message is required.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert('Formulario enviado:', { name, email, message });
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
    }
  };

  return <>
    <div className="contact-container">
      <div className="contact-left">
        <h1 className="contact-title">CONTACT</h1>
        <p>I would love to hear about your project and how I could help. Please fill in the form, and I'll get back to you as soon as possible.</p>
      </div>
      <div className="contact-right">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input className="contact-input" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}  />
          {errors.name && <p className="error-message">{errors.name}</p>}

          <label htmlFor="email">Email:</label>
          <input className="contact-input" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}  />
          {errors.email && <p className="error-message">{errors.email}</p>}

          <label htmlFor="message">Message:</label>
          <textarea className="contact-input" id="message" value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
          {errors.message && <p className="error-message">{errors.message}</p>}

          <div className="contact-button-container">
            <button className="contact-button" type="submit">SEND MESSAGE</button>
          </div>

        </form>
      </div>
    </div>
  </>
}

export default Contact;
