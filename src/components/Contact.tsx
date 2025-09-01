"use client";

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from 'lucide-react';
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
      content: "hello@digitbye.com",
      subContent: "info@digitbye.com",
    },
    {
      icon: <Phone size={24} />,
      title: "Call Us",
      content: "+254 700 123 456",
      subContent: "+254 711 987 654",
    },
    {
      icon: <MapPin size={24} />,
      title: "Visit Us",
      content: "Nairobi, Kenya",
      subContent: "CBD, Kenyatta Avenue",
    },
    {
      icon: <Clock size={24} />,
      title: "Working Hours",
      content: "Mon - Fri: 8AM - 6PM",
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const styles: { [key: string]: CSSProperties } = {
    section: {
      padding: 'var(--spacing-3xl) 0',
      background: '#f8fafc',
      fontFamily: 'var(--font-sans)',
      position: 'relative',
      zIndex: 10,
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 var(--spacing-lg)',
    },
    header: {
      textAlign: 'center',
      marginBottom: 'var(--spacing-3xl)',
    },
    tagline: {
      color: 'var(--color-primary-500)',
      fontSize: '1rem',
      fontWeight: '600',
      fontFamily: 'var(--font-heading)',
      marginBottom: 'var(--spacing-sm)',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      display: 'block',
    },
    title: {
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      fontWeight: '700',
      fontFamily: 'var(--font-heading)',
      color: '#1f2937',
      marginBottom: 'var(--spacing-md)',
      lineHeight: '1.2',
    },
    description: {
      fontSize: '1.125rem',
      color: '#6b7280',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: '1.6',
    },
    contentGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--spacing-3xl)',
      alignItems: 'start',
    },
    contactInfo: {
      background: '#ffffff',
      padding: 'var(--spacing-xl)',
      borderRadius: 'var(--radius-xl)',
      border: '1px solid #e5e7eb',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    },
    infoTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      fontFamily: 'var(--font-heading)',
      color: '#1f2937',
      marginBottom: 'var(--spacing-lg)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--spacing-sm)',
    },
    infoGrid: {
      display: 'grid',
      gap: 'var(--spacing-lg)',
    },
    infoItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--spacing-md)',
      padding: 'var(--spacing-md)',
      borderRadius: 'var(--radius-md)',
      transition: 'all var(--transition-default)',
    },
    iconWrapper: {
      width: '48px',
      height: '48px',
      background: '#fef7f0',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--color-primary-500)',
      flexShrink: 0,
    },
    infoContent: {
      flex: 1,
    },
    infoItemTitle: {
      fontSize: '1rem',
      fontWeight: '600',
      color: '#1f2937',
      marginBottom: '4px',
    },
    infoItemContent: {
      fontSize: '0.975rem',
      color: '#6b7280',
      marginBottom: '2px',
    },
    formWrapper: {
      background: '#ffffff',
      padding: 'var(--spacing-xl)',
      borderRadius: 'var(--radius-xl)',
      border: '1px solid #e5e7eb',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    },
    formTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      fontFamily: 'var(--font-heading)',
      color: '#1f2937',
      marginBottom: 'var(--spacing-lg)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--spacing-sm)',
    },
    form: {
      display: 'grid',
      gap: 'var(--spacing-md)',
    },
    inputGroup: {
      display: 'grid',
      gap: 'var(--spacing-xs)',
    },
    label: {
      fontSize: '0.875rem',
      fontWeight: '500',
      color: '#374151',
    },
    input: {
      padding: '12px 16px',
      borderRadius: 'var(--radius-md)',
      border: '1px solid #d1d5db',
      fontSize: '1rem',
      color: '#1f2937',
      background: '#ffffff',
      transition: 'all var(--transition-default)',
      outline: 'none',
    },
    textarea: {
      padding: '12px 16px',
      borderRadius: 'var(--radius-md)',
      border: '1px solid #d1d5db',
      fontSize: '1rem',
      color: '#1f2937',
      background: '#ffffff',
      transition: 'all var(--transition-default)',
      outline: 'none',
      minHeight: '120px',
      resize: 'vertical',
      fontFamily: 'var(--font-sans)',
    },
    submitButton: {
      background: 'var(--color-primary-500)',
      color: '#ffffff',
      padding: '12px 24px',
      borderRadius: 'var(--radius-md)',
      border: 'none',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all var(--transition-default)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--spacing-xs)',
      marginTop: 'var(--spacing-md)',
    },
  };

  return (
    <>
      <style jsx>{`
        .input-field:focus {
          border-color: var(--color-primary-500);
          box-shadow: 0 0 0 3px rgba(242, 109, 38, 0.1);
        }
        
        .submit-button:hover {
          background: var(--color-primary-600);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(242, 109, 38, 0.3);
        }
        
        .submit-button:disabled {
          background: #9ca3af;
          cursor: not-allowed;
          transform: none;
        }
        
        .info-item:hover {
          background: #f8fafc;
        }

        /* Override global styles */
        .contact-section * {
          color: inherit !important;
        }
        
        .contact-tagline {
          color: var(--color-primary-500) !important;
        }
        
        .contact-title {
          color: #1f2937 !important;
        }
        
        .contact-description {
          color: #6b7280 !important;
        }

        @media (max-width: 768px) {
          .content-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-xl);
          }
        }
      `}</style>

      <section style={styles.section} id="contact" className="contact-section">
        <div style={styles.container}>
          <div style={styles.header}>
            <span style={styles.tagline} className="contact-tagline">Contact Us</span>
            <h2 style={styles.title} className="contact-title">
              Let's Start Your Project
            </h2>
            <p style={styles.description} className="contact-description">
              Ready to transform your digital presence? Get in touch with us today 
              and let's discuss how we can help bring your vision to life.
            </p>
          </div>

          <div style={styles.contentGrid} className="content-grid">
            <div style={styles.contactInfo}>
              <h3 style={styles.infoTitle}>
                <MessageSquare size={24} />
                Get In Touch
              </h3>
              <div style={styles.infoGrid}>
                {contactInfo.map((info, index) => (
                  <div key={index} style={styles.infoItem} className="info-item">
                    <div style={styles.iconWrapper}>
                      {info.icon}
                    </div>
                    <div style={styles.infoContent}>
                      <div style={styles.infoItemTitle}>{info.title}</div>
                      <div style={styles.infoItemContent}>{info.content}</div>
                      <div style={styles.infoItemContent}>{info.subContent}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={styles.formWrapper}>
              <h3 style={styles.formTitle}>
                <Send size={24} />
                Send Message
              </h3>
              <form style={styles.form} onSubmit={handleSubmit}>
                <div style={styles.inputGroup}>
                  <label style={styles.label} htmlFor="name">Full Name</label>
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

                <div style={styles.inputGroup}>
                  <label style={styles.label} htmlFor="email">Email Address</label>
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

                <div style={styles.inputGroup}>
                  <label style={styles.label} htmlFor="subject">Subject</label>
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

                <div style={styles.inputGroup}>
                  <label style={styles.label} htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    style={styles.textarea}
                    className="input-field"
                    required
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  style={styles.submitButton}
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div style={{
                        width: '16px',
                        height: '16px',
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
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;