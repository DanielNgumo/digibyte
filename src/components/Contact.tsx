"use client";

import React, { useState, useCallback, memo } from 'react';
import { Mail, Phone, Clock, Send, MessageSquare } from 'lucide-react';
import { CSSProperties } from 'react';

// Type definitions
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactInfoItem {
  icon: React.ReactElement<any>;
  title: string;
  content: string;
  subContent?: string;
}

// Memoized info item component
const InfoItem = memo(({ 
  info, 
  styles 
}: { 
  info: ContactInfoItem; 
  styles: { [key: string]: CSSProperties };
}) => {
  return (
    <div style={styles.infoItem} className="info-item">
      <div style={styles.iconWrapper} className="icon-wrapper">
        {React.cloneElement(info.icon, {
          style: { width: 'clamp(16px, 4vw, 22px)', height: 'clamp(16px, 4vw, 22px)' } as any
        })}
      </div>
      <div style={styles.infoContent}>
        <div style={styles.infoItemTitle} className="info-item-title">
          {info.title}
        </div>
        <div style={styles.infoItemContent} className="info-item-content">
          {info.content}
        </div>
        {info.subContent && (
          <div style={styles.infoItemContent} className="info-item-content">
            {info.subContent}
          </div>
        )}
      </div>
    </div>
  );
});

InfoItem.displayName = 'InfoItem';

// Memoized form field component
const FormField = memo(({ 
  label, 
  name, 
  type = 'text', 
  value, 
  onChange, 
  placeholder, 
  styles,
  isTextarea = false
}: { 
  label: string; 
  name: string; 
  type?: string; 
  value: string; 
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void; 
  placeholder: string; 
  styles: { [key: string]: CSSProperties };
  isTextarea?: boolean;
}) => {
  return (
    <div style={styles.inputGroup} className="input-group">
      <label style={styles.label} htmlFor={name} className="label">
        {label}
      </label>
      {isTextarea ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          style={styles.textarea}
          className="input-field textarea"
          required
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          style={styles.input}
          className="input-field"
          required
          placeholder={placeholder}
        />
      )}
    </div>
  );
});

FormField.displayName = 'FormField';

// Memoized submit button component
const SubmitButton = memo(({ 
  isSubmitting, 
  onClick, 
  styles 
}: { 
  isSubmitting: boolean; 
  onClick: () => void; 
  styles: { [key: string]: CSSProperties };
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      style={styles.submitButton}
      className="submit-button"
      disabled={isSubmitting}
      aria-label="Send message"
    >
      {isSubmitting ? (
        <>
          <div
            style={{
              width: '14px',
              height: '14px',
              border: '2px solid #ffffff',
              borderTop: '2px solid transparent',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
            }}
            aria-hidden="true"
          />
          Sending...
        </>
      ) : (
        <>
          <Send size={16} />
          Send
        </>
      )}
    </button>
  );
});

SubmitButton.displayName = 'SubmitButton';

const Contact = memo(() => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo: ContactInfoItem[] = [
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      content: "dev@technasi.co.ke",
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

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleSubmit = useCallback(() => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all fields before sending.');
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission - replace with actual API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  }, [formData]);

  const styles: { [key: string]: CSSProperties } = {
    section: {
      padding: 'clamp(2rem, 8vw, 6rem) 0',
      background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%)',
      fontFamily: 'var(--font-sans)',
      position: 'relative',
      zIndex: 10,
      contain: 'layout style',
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
      color: '#4b5563',
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
      contain: 'layout',
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
      willChange: 'background-color',
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
      contain: 'layout',
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
      color: '#4b5563',
      marginBottom: '0.125rem',
      lineHeight: '1.4',
    },
    formWrapper: {
      background: '#ffffff',
      padding: 'clamp(1.25rem, 4vw, 1.75rem)',
      borderRadius: '0.5rem',
      border: '1px solid #e5e7eb',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
      contain: 'layout',
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
      color: '#1f2937',
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
      willChange: 'transform, box-shadow, background-color',
    },
  };

  return (
    <>
      <style jsx>{`
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .content-grid {
          grid-template-columns: 1fr !important;
          gap: clamp(1rem, 3vw, 1.5rem);
        }

        .input-field:focus {
          border-color: #f26d26;
          box-shadow: 0 0 0 3px rgba(242, 109, 38, 0.1);
          background-color: #fffbf7;
        }

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

        @media (min-width: 769px) {
          .content-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: clamp(2rem, 5vw, 3rem);
            align-items: start;
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .submit-button,
          .info-item,
          .input-field {
            transition: none !important;
          }

          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(0deg);
            }
          }
        }

        @media (prefers-color-scheme: dark) {
          section {
            background: linear-gradient(135deg, #1f2937 0%, #111827 50%, #0f172a 100%);
          }

          .input-field {
            background: #374151;
            border-color: #4b5563;
            color: #ffffff;
          }

          .input-field:focus {
            background: #1f2937;
          }

          .contact-info,
          .form-wrapper {
            background: #1f2937;
            border-color: #4b5563;
          }

          .contact-title,
          .contact-description,
          .info-item-title {
            color: #ffffff;
          }

          .contact-description,
          .info-item-content {
            color: #d1d5db;
          }

          .info-item:hover {
            background: #374151 !important;
          }
        }
      `}</style>

      <section style={styles.section} id="contact" className="contact-section">
        <div style={styles.container}>
          <div style={styles.header} className="contact-header">
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
            <div style={styles.contactInfo} className="contact-info">
              <h3 style={styles.infoTitle}>
                {React.cloneElement(<MessageSquare size={24} />, {
                  style: { width: 'clamp(18px, 5vw, 24px)', height: 'clamp(18px, 5vw, 24px)' } as any
                })}
                Get In Touch
              </h3>
              <div style={styles.infoGrid} className="infoGrid">
                {contactInfo.map((info, index) => (
                  <InfoItem key={index} info={info} styles={styles} />
                ))}
              </div>
            </div>

            <div style={styles.formWrapper} className="form-wrapper">
              <h3 style={styles.formTitle}>
                {React.cloneElement(<Send size={24} />, {
                  style: { width: 'clamp(18px, 5vw, 24px)', height: 'clamp(18px, 5vw, 24px)' } as any
                })}
                Send Message
              </h3>
              <div style={styles.form} className="form">
                <FormField
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  styles={styles}
                />

                <FormField
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  styles={styles}
                />

                <FormField
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                  styles={styles}
                />

                <FormField
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project..."
                  styles={styles}
                  isTextarea
                />

                <SubmitButton
                  isSubmitting={isSubmitting}
                  onClick={handleSubmit}
                  styles={styles}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

Contact.displayName = 'Contact';

export default Contact;