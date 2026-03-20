"use client";

import { useState } from "react";

const css = `
  .contact-page {
    min-height: 100vh;
    background: #f8fafc;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0 16px 40px;
    font-family: 'Segoe UI', 'Nunito', sans-serif;
  }
  .contact-hero {
    width: 100%;
    max-width: 700px;
    margin: 0 auto 32px;
    background: #fff;
    color: #1e293b;
    border-radius: 24px;
    padding: 36px 20px 28px;
    box-shadow: 0 2px 24px rgba(37,99,235,0.06);
    text-align: center;
  }
  .contact-title {
    font-size: clamp(26px, 4vw, 38px);
    font-weight: 900;
    margin-bottom: 8px;
    color: #2563eb;
  }
  .contact-sub {
    font-size: clamp(13px, 2vw, 17px);
    color: #64748b;
    margin-bottom: 0;
  }
  .contact-form {
    width: 100%;
    max-width: 480px;
    background: #fff;
    border-radius: 14px;
    padding: 28px 16px 20px;
    box-shadow: 0 1px 10px rgba(0,0,0,0.05);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  .contact-label {
    font-weight: 700;
    color: #334155;
    margin-bottom: 4px;
    font-size: 14px;
  }
  .contact-input, .contact-textarea {
    width: 100%;
    padding: 9px 11px;
    border-radius: 7px;
    border: 1.2px solid #cbd5e1;
    font-size: 14px;
    font-family: inherit;
    margin-bottom: 6px;
    background: #f1f5f9;
    transition: border 0.2s;
  }
  .contact-input:focus, .contact-textarea:focus {
    border-color: #2563eb;
    outline: none;
    background: #fff;
  }
  .contact-btn {
    background: #2563eb;
    color: white;
    border: none;
    border-radius: 7px;
    padding: 11px 0;
    font-weight: 800;
    font-size: 15px;
    cursor: pointer;
    margin-top: 8px;
    transition: background 0.2s;
  }
  .contact-btn:hover {
    background: #1e40af;
  }
  .contact-success {
    color: #16a34a;
    font-weight: 700;
    text-align: center;
    margin-top: 10px;
    font-size: 15px;
  }
  .contact-consent {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    font-size: 13px;
    color: #64748b;
    margin-top: 2px;
  }
`;

export default function ContactUs() {
  const [form, setForm] = useState({
    email: "",
    childName: "",
    childAge: "",
    message: "",
    consent: false,
  });
  const [success, setSuccess] = useState("");

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.consent) {
      setSuccess("Please provide consent to receive updates.");
      return;
    }
    setSuccess("Thank you for contacting us! We'll get back to you soon.");
    setForm({ email: "", childName: "", childAge: "", message: "", consent: false });
  }

  return (
    <div className="contact-page">
      <style>{css}</style>
      <div className="contact-hero">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-sub">
          We'd love to hear from you! Please fill out the form below and our team will reach out to you soon.
        </p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div>
          <label className="contact-label" htmlFor="email">Your Email</label>
          <input
            className="contact-input"
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="you@email.com"
          />
        </div>
        <div>
          <label className="contact-label" htmlFor="childName">Child's Name</label>
          <input
            className="contact-input"
            type="text"
            id="childName"
            name="childName"
            value={form.childName}
            onChange={handleChange}
            required
            placeholder="Your Child's Name"
          />
        </div>
        <div>
          <label className="contact-label" htmlFor="childAge">Child's Age</label>
          <input
            className="contact-input"
            type="number"
            id="childAge"
            name="childAge"
            value={form.childAge}
            onChange={handleChange}
            min="0"
            max="18"
            required
            placeholder="Your Child's Age"
          />
        </div>
        <div>
          <label className="contact-label" htmlFor="message">Message</label>
          <textarea
            className="contact-textarea"
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
            placeholder="How can we help you?"
          />
        </div>
        <div className="contact-consent">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={form.consent}
            onChange={handleChange}
            required
            style={{ marginTop: 2 }}
          />
          <label htmlFor="consent">
            I agree to receive updates and promotional content from Little Berries, including advertisements and important notifications in the future.
          </label>
        </div>
        <button className="contact-btn" type="submit">Send Message</button>
        {success && <div className="contact-success">{success}</div>}
      </form>
    </div>
  );
}
