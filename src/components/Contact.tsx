"use client";

import React, { useState } from 'react';
import { Mail, Phone, Clock, Send, MessageSquare } from 'lucide-react';
import { CSSProperties } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      content: "ngumodaniel80@gmail.com",
    },
    {
      icon: <Phone size={24} />,
      title: "Call Us",
      content: "+254 742 580 239",
    },
    {
      icon: <Clock size={24} />,
      title: "Working Hours",
      content: "Mon - Sun: 24Hrs",
      subContent: "Sat: 9AM - 4PM",
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all fields before sending.');
      return;
    }

    setIsSubmitting(true);
    
    const whatsappMessage = `*New Contact Form Submission*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Subject:* ${formData.subject}%0A%0A` +
      `*Message:*%0A${formData.message}%0A%0A` +
      `----%0ASent from DigiKenya Contact Form`;

    const whatsappNumber = '254742580239';
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    
    setTimeout(() => {
      setIsSubmitting(false);
      window.open(whatsappURL, '_blank');
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Redirecting to WhatsApp! Your message will be sent when you click send in WhatsApp.');
    }, 1000);
  };

  const styles: { [key: string]: CSSProperties } = {
    section: {
      padding: 'clamp(2rem, 8vw, 6rem) 0',
      background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%)', // Original gradient restored
      fontFamily: 'var(--font-sans)',
      position: 'relative',
      zIndex: 10,
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 clamp(1rem, 4vw, 2rem)',
      width: '100%',
      boxSizing: 'border-box',
    },
    header: {
      textAlign: 'left',
      marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
      padding: '0',
    },
    tagline: {
      color: '#f26d26',
      fontSize: 'clamp(0.75rem, 2.5vw, 0.875rem)',
      fontWeight: '600',
      fontFamily: 'var(--font-heading)',
      marginBottom: 'clamp(0.5rem, 2vw, 0.75rem)',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      display: 'block',
    },
    title: {
      fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
      fontWeight: '700',
      fontFamily: 'var(--font-heading)',
      color: '#1f2937',
      marginBottom: 'clamp(0.75rem, 3vw, 1rem)',
      lineHeight: '1.2',
    },
    description: {
      fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
      color: '#4b5563', // Better contrast
      maxWidth: '100%',
      margin: '0',
      lineHeight: '1.6',
    },
    contentGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: 'clamp(1.5rem, 4vw, 2rem)',
      alignItems: 'start',
    },
    contactInfo: {
      background: '#ffffff',
      padding: 'clamp(1.25rem, 4vw, 1.75rem)',
      borderRadius: '0.5rem',
      border: '1px solid #e5e7eb',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
    },
    infoTitle: {
      fontSize: 'clamp(1rem, 3vw, 1.25rem)',
      fontWeight: '600',
      fontFamily: 'var(--font-heading)',
      color: '#1f2937',
      marginBottom: 'clamp(0.75rem, 3vw, 1rem)',
      display: 'flex',
      alignItems: 'center',
      gap: 'clamp(0.5rem, 2vw, 0.75rem)',
    },
    infoGrid: {
      display: 'grid',
      gap: 'clamp(0.75rem, 3vw, 1rem)',
    },
    infoItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'clamp(0.75rem, 2vw, 1rem)',
      padding: 'clamp(0.75rem, 2vw, 1rem)',
      borderRadius: '0.375rem',
      transition: 'all 0.3s ease',
    },
    iconWrapper: {
      width: 'clamp(36px, 8vw, 44px)',
      height: 'clamp(36px, 8vw, 44px)',
      background: 'rgba(242, 109, 38, 0.1)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#f26d26',
      flexShrink: 0,
    },
    infoContent: {
      flex: 1,
    },
    infoItemTitle: {
      fontSize: 'clamp(0.8rem, 2.5vw, 0.95rem)',
      fontWeight: '600',
      color: '#1f2937',
      marginBottom: '0.25rem',
    },
    infoItemContent: {
      fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
      color: '#4b5563', // Better contrast
      marginBottom: '0.125rem',
      lineHeight: '1.4',
    },
    formWrapper: {
      background: '#ffffff',
      padding: 'clamp(1.25rem, 4vw, 1.75rem)',
      borderRadius: '0.5rem',
      border: '1px solid #e5e7eb',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
    },
    formTitle: {
      fontSize: 'clamp(1rem, 3vw, 1.25rem)',
      fontWeight: '600',
      fontFamily: 'var(--font-heading)',
      color: '#1f2937',
      marginBottom: 'clamp(0.75rem, 3vw, 1rem)',
      display: 'flex',
      alignItems: 'center',
      gap: 'clamp(0.5rem, 2vw, 0.75rem)',
    },
    form: {
      display: 'grid',
      gap: 'clamp(0.875rem, 3vw, 1.25rem)',
    },
    inputGroup: {
      display: 'grid',
      gap: 'clamp(0.375rem, 2vw, 0.5rem)',
    },
    label: {
      fontSize: 'clamp(0.75rem, 2vw, 0.8rem)',
      fontWeight: '500',
      color: '#1f2937', // Stronger contrast
    },
    input: {
      padding: 'clamp(0.625rem, 2vw, 0.75rem) clamp(0.75rem, 2vw, 1rem)',
      borderRadius: '0.375rem',
      border: '1px solid #d1d5db',
      fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
      color: '#1f2937',
      background: '#ffffff',
      transition: 'all 0.3s ease',
      outline: 'none',
      width: '100%',
      boxSizing: 'border-box',
    },
    textarea: {
      padding: 'clamp(0.625rem, 2vw, 0.75rem) clamp(0.75rem, 2vw, 1rem)',
      borderRadius: '0.375rem',
      border: '1px solid #d1d5db',
      fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
      color: '#1f2937',
      background: '#ffffff',
      transition: 'all 0.3s ease',
      outline: 'none',
      minHeight: 'clamp(100px, 30vw, 140px)',
      resize: 'vertical',
      fontFamily: 'var(--font-sans)',
      width: '100%',
      boxSizing: 'border-box',
    },
    submitButton: {
      background: '#f26d26',
      color: '#ffffff',
      padding: 'clamp(0.625rem, 2vw, 0.75rem) clamp(1rem, 3vw, 1.5rem)',
      borderRadius: '0.375rem',
      border: 'none',
      fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.375rem',
      marginTop: 'clamp(0.75rem, 3vw, 1rem)',
      minHeight: '44px',
      boxShadow: '0 2px 8px rgba(242, 109, 38, 0.3)',
    },
  };

  return (
    <>
      <style jsx>{`
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Base responsive grid */
        .content-grid {
          grid-template-columns: 1fr !important;
          gap: clamp(1rem, 3vw, 1.5rem);
        }

        /* Input focus */
        .input-field:focus {
          border-color: #f26d26;
          box-shadow: 0 0 0 3px rgba(242, 109, 38, 0.1);
          background-color: #fffbf7;
        }

        /* Hover effects (desktop) */
        @media (hover: hover) and (pointer: fine) {
          .submit-button:hover:not(:disabled) {
            background: #e56320;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(242, 109, 38, 0.4);
          }

          .info-item:hover {
            background: #f8fafc;
            border-radius: 0.375rem;
          }
        }

        /* Active effects (touch) */
        @media (hover: none) and (pointer: coarse) {
          .submit-button:active:not(:disabled) {
            background: #e56320;
            transform: translateY(-1px);
          }

          .info-item:active {
            background: #f8fafc;
          }
        }

        .submit-button:disabled {
          background: #9ca3af !important;
          cursor: not-allowed;
          transform: none !important;
          box-shadow: none !important;
          opacity: 0.7;
        }

        .submit-button:focus,
        .input-field:focus {
          outline: 2px solid #f26d26;
          outline-offset: 2px;
        }

        /* Larger screens: switch to 2-column grid */
        @media (min-width: 769px) {
          .content-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: clamp(2rem, 5vw, 3rem);
            align-items: start;
          }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      <section style={styles.section} id="contact" className="contact-section">
        <div style={styles.container}>
          <div style={styles.header} className="contact-header">
            <span style={styles.tagline} className="contact-tagline">Contact Us</span>
            <h2 style={styles.title} className="contact-title">
              Let&apos;s Start Your Project
            </h2>
            <p style={styles.description} className="contact-description">
              Ready to transform your digital presence? Get in touch with us today 
              and let&apos;s discuss how we can help bring your vision to life.
            </p>
          </div>

          <div style={styles.contentGrid} className="content-grid">
            <div style={styles.contactInfo} className="contact-info">
              <h3 style={styles.infoTitle}>
                {React.cloneElement(<MessageSquare size={24} />, {
                  style: { width: 'clamp(18px, 5vw, 24px)', height: 'clamp(18px, 5vw, 24px)' }
                })}
                Get In Touch
              </h3>
              <div style={styles.infoGrid} className="infoGrid">
                {contactInfo.map((info, index) => (
                  <div key={index} style={styles.infoItem} className="info-item">
                    <div style={styles.iconWrapper} className="icon-wrapper">
                      {React.cloneElement(info.icon, {
                        style: { width: 'clamp(16px, 4vw, 22px)', height: 'clamp(16px, 4vw, 22px)' }
                      })}
                    </div>
                    <div style={styles.infoContent}>
                      <div style={styles.infoItemTitle} className="info-item-title">{info.title}</div>
                      <div style={styles.infoItemContent} className="info-item-content">{info.content}</div>
                      {info.subContent && (
                        <div style={styles.infoItemContent} className="info-item-content">{info.subContent}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={styles.formWrapper} className="form-wrapper">
              <h3 style={styles.formTitle}>
                {React.cloneElement(<Send size={24} />, {
                  style: { width: 'clamp(18px, 5vw, 24px)', height: 'clamp(18px, 5vw, 24px)' }
                })}
                Send Message
              </h3>
              <div style={styles.form} className="form">
                <div style={styles.inputGroup} className="input-group">
                  <label style={styles.label} htmlFor="name" className="label">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    style={styles.input}
                    className="input-field"
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div style={styles.inputGroup} className="input-group">
                  <label style={styles.label} htmlFor="email" className="label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={styles.input}
                    className="input-field"
                    required
                    placeholder="Enter your email address"
                  />
                </div>

                <div style={styles.inputGroup} className="input-group">
                  <label style={styles.label} htmlFor="subject" className="label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    style={styles.input}
                    className="input-field"
                    required
                    placeholder="What's this about?"
                  />
                </div>

                <div style={styles.inputGroup} className="input-group">
                  <label style={styles.label} htmlFor="message" className="label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    style={styles.textarea}
                    className="input-field textarea"
                    required
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  style={styles.submitButton}
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div style={{
                        width: '14px',
                        height: '14px',
                        border: '2px solid #ffffff',
                        borderTop: '2px solid transparent',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite'
                      }} />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;