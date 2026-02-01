// src/pages/ContactPage.js
import React, { useState, useRef } from 'react';
import { Navbar, Footer } from '../components/Components';
import emailjs from '@emailjs/browser';
import emailIcon from '../images/email-icon.png';
import phoneIcon from '../images/mobile-icon.png';
import linkedinIcon from '../images/linkedin-icon.png';

export function ContactPage() {
  const form = useRef();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // EmailJS configuration
    const serviceId = 'service_4bvhnof';
    const templateId = 'template_hevdg9i';
    const publicKey = 'd1GJTQ6SB-F8y7joh';

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log('SUCCESS!', result.text);
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          subject: '',
          message: ''
        });
        setIsSubmitting(false);
      }, (error) => {
        console.log('FAILED...', error.text);
        setSubmitStatus('error');
        setIsSubmitting(false);
      });
  };

  return (
    <div className="contact-page-wrapper">
      <Navbar />

      <section className="contact-page">
        <div className="contact-page-container">
          
          {/* Left Side - Contact Info */}
          <div className="contact-info-side">
            <h1>Get In Touch</h1>
            <p className="contact-subtitle">
              Whether you have a question or just want to say hi, I'll get back to you!
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <img src={emailIcon} alt="Email" />
                </div>
                <p>mohammed.danish.fikri@gmail.com</p>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <img src={phoneIcon} alt="Phone" />
                </div>
                <p>+65 82093990</p>
              </div>
            </div>

            <div className="social-media-section">
              <h3>FIND ME ON</h3>
              <div className="social-media-links">
                <a 
                  href="https://linkedin.com/in/danish-fikri" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <div className="social-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <p>LinkedIn</p>
                </a>
                
                <a 
                  href="mailto:mohammed.danish.fikri@gmail.com"
                  className="social-link"
                >
                  <div className="social-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <p>Email</p>
                </a>

                <a 
                  href="tel:+6582093990"
                  className="social-link"
                >
                  <div className="social-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <p>Phone</p>
                </a>

                <a 
                  href="https://github.com/Fikri-Danish"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <div className="social-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <p>GitHub</p>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-form-side">
            <form ref={form} onSubmit={handleSubmit} className="contact-form">
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {submitStatus === 'success' && (
                <div className="success-message">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="error-message">
                  ✗ Failed to send message. Please try again or email me directly.
                </div>
              )}

              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ContactPage;
