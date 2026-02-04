// src/pages/ContactPage.js
import React, { useState, useRef, useEffect } from 'react';
import { Navbar, Footer } from '../components/Components';
import emailjs from '@emailjs/browser';
import emailIcon from '../images/email-icon.png';
import phoneIcon from '../images/mobile-icon.png';
import linkedinIcon from '../images/linkedin.png';
import githubIcon from '../images/github-icon.png';

// Add scroll animation hook
function useScrollAnimation() {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return [elementRef, isVisible];
}

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
  
  const [leftSideRef, leftSideVisible] = useScrollAnimation();
  const [rightSideRef, rightSideVisible] = useScrollAnimation();

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
    // You'll need to replace these with your actual EmailJS credentials
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
          <div className={`contact-info-side fade-in ${leftSideVisible ? 'visible' : ''}`} ref={leftSideRef}>
            <h1>Get In Touch</h1>
            <p className="contact-subtitle">
              Whether you have a question or just want to say hi, I'll get back to you!
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <img src={emailIcon} alt="Email" />
                </div>
                <p>
                  <a href="mailto:mohammed.danish.fikri@gmail.com">
                    mohammed.danish.fikri@gmail.com
                  </a>
                </p>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <img src={phoneIcon} alt="Phone" />
                </div>
                <p>
                  <a href="tel:+6582093990">
                    +65 82093990
                  </a>
                </p>
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
                    <img src={linkedinIcon} alt="LinkedIn" />
                  </div>
                  <p>LinkedIn</p>
                </a>
                
                <a 
                  href="https://github.com/Fikri-Danish"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <div className="social-icon">
                    <img src={githubIcon} alt="GitHub" />
                  </div>
                  <p>GitHub</p>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className={`contact-form-side fade-in ${rightSideVisible ? 'visible' : ''}`} ref={rightSideRef}>
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
