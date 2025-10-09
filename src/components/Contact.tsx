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
      content: "ngumodaniel80@gmail.com",
      // subContent: "info@DigiKenya.com",
    },
    {
      icon: <Phone size={24} />,
      title: "Call Us",
      content: "+254 742 580 239",
      // subContent: "+254 711 987 654",
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
      content: "Mon - Fri: 24Hrs",
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
    // Validate required fields
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all fields before sending.');
      return;
    }

    setIsSubmitting(true);
    
    // Format the message for WhatsApp
    const whatsappMessage = `*New Contact Form Submission*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Subject:* ${formData.subject}%0A%0A` +
      `*Message:*%0A${formData.message}%0A%0A` +
      `----%0ASent from DigiKenya Contact Form`;

    // Your WhatsApp number (in international format without + sign)
    const whatsappNumber = '254742580239';
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    
    // Simulate brief loading then open WhatsApp
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Open WhatsApp in a new tab/window
      window.open(whatsappURL, '_blank');
      
      // Clear the form after successful "submission"
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Show success message
      alert('Redirecting to WhatsApp! Your message will be sent when you click send in WhatsApp.');
    }, 1000);
  };

  const styles: { [key: string]: CSSProperties } = {
    section: {
      padding: 'clamp(2rem, 8vw, 6rem) 0', // Responsive section padding
      background: '#f8fafc',
      fontFamily: 'var(--font-sans)',
      position: 'relative',
      zIndex: 10,
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 clamp(1rem, 4vw, 2rem)', // Responsive container padding
      width: '100%',
      boxSizing: 'border-box',
    },
    header: {
      textAlign: 'center',
      marginBottom: 'clamp(2rem, 6vw, 3rem)', // Responsive header margin
      padding: '0 clamp(0.5rem, 2vw, 1rem)', // Inner padding for mobile
    },
    tagline: {
      color: 'var(--color-primary-500)',
      fontSize: 'clamp(0.875rem, 2.5vw, 1rem)', // Responsive tagline
      fontWeight: '600',
      fontFamily: 'var(--font-heading)',
      marginBottom: 'clamp(0.5rem, 2vw, 1rem)', // Responsive margin
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      display: 'block',
    },
    title: {
      fontSize: 'clamp(1.75rem, 6vw, 3rem)', // Responsive title
      fontWeight: '700',
      fontFamily: 'var(--font-heading)',
      color: '#1f2937',
      marginBottom: 'clamp(1rem, 3vw, 1.5rem)', // Responsive margin
      lineHeight: '1.2',
    },
    description: {
      fontSize: 'clamp(1rem, 3vw, 1.125rem)', // Responsive description
      color: '#6b7280',
      maxWidth: '100%', // Full width on mobile
      margin: '0 auto',
      lineHeight: '1.6',
    },
    contentGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr', // Mobile first - single column
      gap: 'clamp(1.5rem, 4vw, 3rem)', // Responsive gap
      alignItems: 'start',
    },
    contactInfo: {
      background: '#ffffff',
      padding: 'clamp(1.25rem, 5vw, 2rem)', // Responsive padding
      borderRadius: 'var(--radius-xl)',
      border: '1px solid #e5e7eb',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    },
    infoTitle: {
      fontSize: 'clamp(1.125rem, 4vw, 1.5rem)', // Responsive info title
      fontWeight: '600',
      fontFamily: 'var(--font-heading)',
      color: '#1f2937',
      marginBottom: 'clamp(1rem, 3vw, 1.5rem)', // Responsive margin
      display: 'flex',
      alignItems: 'center',
      gap: 'clamp(0.5rem, 2vw, 1rem)', // Responsive gap
    },
    infoGrid: {
      display: 'grid',
      gap: 'clamp(1rem, 3vw, 1.5rem)', // Responsive grid gap
    },
    infoItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'clamp(0.75rem, 3vw, 1rem)', // Responsive gap
      padding: 'clamp(0.75rem, 3vw, 1rem)', // Responsive padding
      borderRadius: 'var(--radius-md)',
      transition: 'all var(--transition-default)',
    },
    iconWrapper: {
      width: 'clamp(40px, 10vw, 48px)', // Responsive icon wrapper
      height: 'clamp(40px, 10vw, 48px)', // Responsive icon wrapper
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
      fontSize: 'clamp(0.875rem, 2.5vw, 1rem)', // Responsive item title
      fontWeight: '600',
      color: '#1f2937',
      marginBottom: '4px',
    },
    infoItemContent: {
      fontSize: 'clamp(0.8rem, 2vw, 0.975rem)', // Responsive content
      color: '#6b7280',
      marginBottom: '2px',
      lineHeight: '1.4',
    },
    formWrapper: {
      background: '#ffffff',
      padding: 'clamp(1.25rem, 5vw, 2rem)', // Responsive padding
      borderRadius: 'var(--radius-xl)',
      border: '1px solid #e5e7eb',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    },
    formTitle: {
      fontSize: 'clamp(1.125rem, 4vw, 1.5rem)', // Responsive form title
      fontWeight: '600',
      fontFamily: 'var(--font-heading)',
      color: '#1f2937',
      marginBottom: 'clamp(1rem, 3vw, 1.5rem)', // Responsive margin
      display: 'flex',
      alignItems: 'center',
      gap: 'clamp(0.5rem, 2vw, 1rem)', // Responsive gap
    },
    form: {
      display: 'grid',
      gap: 'clamp(1rem, 3vw, 1.5rem)', // Responsive form gap
    },
    inputGroup: {
      display: 'grid',
      gap: 'clamp(0.5rem, 2vw, 0.75rem)', // Responsive input group gap
    },
    label: {
      fontSize: 'clamp(0.8rem, 2vw, 0.875rem)', // Responsive label
      fontWeight: '500',
      color: '#374151',
    },
    input: {
      padding: 'clamp(10px, 3vw, 12px) clamp(12px, 3vw, 16px)', // Responsive input padding
      borderRadius: 'var(--radius-md)',
      border: '1px solid #d1d5db',
      fontSize: 'clamp(0.875rem, 2.5vw, 1rem)', // Responsive input font size
      color: '#1f2937',
      background: '#ffffff',
      transition: 'all var(--transition-default)',
      outline: 'none',
      width: '100%',
      boxSizing: 'border-box',
    },
    textarea: {
      padding: 'clamp(10px, 3vw, 12px) clamp(12px, 3vw, 16px)', // Responsive textarea padding
      borderRadius: 'var(--radius-md)',
      border: '1px solid #d1d5db',
      fontSize: 'clamp(0.875rem, 2.5vw, 1rem)', // Responsive textarea font size
      color: '#1f2937',
      background: '#ffffff',
      transition: 'all var(--transition-default)',
      outline: 'none',
      minHeight: 'clamp(100px, 20vw, 120px)', // Responsive textarea height
      resize: 'vertical',
      fontFamily: 'var(--font-sans)',
      width: '100%',
      boxSizing: 'border-box',
    },
    submitButton: {
      background: 'var(--color-primary-500)',
      color: '#ffffff',
      padding: 'clamp(10px, 3vw, 12px) clamp(20px, 4vw, 24px)', // Responsive button padding
      borderRadius: 'var(--radius-md)',
      border: 'none',
      fontSize: 'clamp(0.875rem, 2.5vw, 1rem)', // Responsive button font size
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all var(--transition-default)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'clamp(0.5rem, 2vw, 0.75rem)', // Responsive gap
      marginTop: 'clamp(1rem, 3vw, 1.5rem)', // Responsive margin
      width: '100%',
      minHeight: '44px', // Minimum touch target
    },
    whatsappNotice: {
      background: '#dcfce7',
      border: '1px solid #bbf7d0',
      borderRadius: 'var(--radius-md)',
      padding: 'clamp(0.75rem, 3vw, 1rem)', // Responsive padding
      marginTop: 'clamp(1rem, 3vw, 1.5rem)', // Responsive margin
      fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', // Responsive font size
      color: '#166534',
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'clamp(0.5rem, 2vw, 0.75rem)', // Responsive gap
      lineHeight: '1.4',
    },
  };

  return (
    <>
      <style jsx>{`
        /* Mobile First Responsive Styles */
        .content-grid {
          grid-template-columns: 1fr !important;
          gap: clamp(1.5rem, 4vw, 2rem);
        }

        /* Small Mobile (up to 480px) */
        @media (max-width: 480px) {
          .contact-header {
            margin-bottom: 1.5rem;
            padding: 0 0.5rem;
          }
          
          .contact-info,
          .form-wrapper {
            padding: 1rem;
          }
          
          .info-item {
            flex-direction: row;
            align-items: flex-start;
            gap: 0.75rem;
          }
          
          .icon-wrapper {
            width: 36px;
            height: 36px;
          }
          
          .icon-wrapper svg {
            width: 18px !important;
            height: 18px !important;
          }
        }

        /* Large Mobile (481px - 640px) */
        @media (min-width: 481px) and (max-width: 640px) {
          .content-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem;
          }
          
          .contact-info,
          .form-wrapper {
            padding: 1.25rem;
          }
        }

        /* Tablet (641px - 768px) */
        @media (min-width: 641px) and (max-width: 768px) {
          .content-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem;
          }
          
          .contact-info,
          .form-wrapper {
            padding: 1.5rem;
          }
        }

        /* Small Desktop (769px - 1024px) */
        @media (min-width: 769px) and (max-width: 1024px) {
          .content-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem;
          }
          
          .contact-header {
            max-width: 700px;
            margin: 0 auto 2.5rem auto;
          }
        }

        /* Desktop (1025px and up) */
        @media (min-width: 1025px) {
          .content-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 3rem;
          }
          
          .contact-header {
            max-width: 800px;
            margin: 0 auto 3rem auto;
          }
          
          .contact-info,
          .form-wrapper {
            padding: 2rem;
          }
        }

        /* Large Desktop (1440px and up) */
        @media (min-width: 1440px) {
          .contact-header {
            max-width: 900px;
          }
        }

        /* Focus and Hover States */
        .input-field:focus {
          border-color: var(--color-primary-500);
          box-shadow: 0 0 0 3px rgba(242, 109, 38, 0.1);
        }
        
        /* Hover Effects - Only on devices that support hover */
        @media (hover: hover) and (pointer: fine) {
          .submit-button:hover:not(:disabled) {
            background: var(--color-primary-600);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(242, 109, 38, 0.3);
          }
          
          .info-item:hover {
            background: #f8fafc;
          }
        }

        /* Touch devices */
        @media (hover: none) and (pointer: coarse) {
          .submit-button:active:not(:disabled) {
            background: var(--color-primary-600);
            transform: translateY(-1px);
          }
        }
        
        .submit-button:disabled {
          background: #9ca3af !important;
          cursor: not-allowed;
          transform: none !important;
          box-shadow: none !important;
        }

        /* Focus states for accessibility */
        .submit-button:focus,
        .input-field:focus {
          outline: 2px solid var(--color-primary-500);
          outline-offset: 2px;
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

        /* Loading spinner animation */
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .contact-info,
          .form-wrapper {
            border: 2px solid #1f2937;
          }
          
          .input-field {
            border: 2px solid #6b7280;
          }
          
          .icon-wrapper {
            border: 1px solid var(--color-primary-500);
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .submit-button,
          .info-item,
          .input-field {
            transition: none !important;
          }
          
          .submit-button:hover {
            transform: none !important;
          }
        }

        /* Dark mode adjustments */
        @media (prefers-color-scheme: dark) {
          .contact-section {
            background: var(--background-secondary, #1f2937);
          }
          
          .contact-title {
            color: #ffffff !important;
          }
          
          .contact-description {
            color: #d1d5db !important;
          }
          
          .contact-info,
          .form-wrapper {
            background: var(--card, #374151);
            border-color: var(--border-light, #4b5563);
          }
          
          .input-field {
            background: #374151;
            color: #ffffff;
            border-color: #4b5563;
          }
          
          .input-field::placeholder {
            color: #9ca3af;
          }
          
          .label {
            color: #d1d5db !important;
          }
          
          .info-item-title {
            color: #ffffff !important;
          }
          
          .info-item-content {
            color: #d1d5db !important;
          }
        }

        /* Landscape orientation for mobile */
        @media (max-height: 600px) and (orientation: landscape) {
          .contact-section {
            padding: clamp(1rem, 4vw, 2rem) 0;
          }
          
          .contact-header {
            margin-bottom: 1.5rem;
          }
          
          .textarea {
            min-height: 80px;
          }
        }

        /* Print styles */
        @media print {
          .submit-button {
            display: none;
          }
          
          .whatsapp-notice {
            display: none;
          }
          
          .content-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }
      `}</style>

      <section style={styles.section} id="contact" className="contact-section">
        <div style={styles.container}>
          <div style={styles.header} className="contact-header">
            <span style={styles.tagline} className="contact-tagline">Contact Us</span>
            <h2 style={styles.title} className="contact-title">
              Lets Start Your Project
            </h2>
            <p style={styles.description} className="contact-description">
              Ready to transform your digital presence? Get in touch with us today 
              and lets discuss how we can help bring your vision to life.
            </p>
          </div>

          <div style={styles.contentGrid} className="content-grid">
            <div style={styles.contactInfo} className="contact-info">
              <h3 style={styles.infoTitle}>
                {React.cloneElement(<MessageSquare size={24} />, {
                  size: 'clamp(20, 5vw, 24)',
                  style: { 
                    width: 'clamp(20px, 5vw, 24px)', 
                    height: 'clamp(20px, 5vw, 24px)' 
                  }
                })}
                Get In Touch
              </h3>
              <div style={styles.infoGrid}>
                {contactInfo.map((info, index) => (
                  <div key={index} style={styles.infoItem} className="info-item">
                    <div style={styles.iconWrapper}>
                      {React.cloneElement(info.icon, {
                        size: 'clamp(18, 4vw, 24)',
                        style: { 
                          width: 'clamp(18px, 4vw, 24px)', 
                          height: 'clamp(18px, 4vw, 24px)' 
                        }
                      })}
                    </div>
                    <div style={styles.infoContent}>
                      <div style={styles.infoItemTitle} className="info-item-title">{info.title}</div>
                      <div style={styles.infoItemContent} className="info-item-content">{info.content}</div>
                      <div style={styles.infoItemContent} className="info-item-content">{info.subContent}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={styles.formWrapper} className="form-wrapper">
              <h3 style={styles.formTitle}>
                {React.cloneElement(<Send size={24} />, {
                  size: 'clamp(20, 5vw, 24)',
                  style: { 
                    width: 'clamp(20px, 5vw, 24px)', 
                    height: 'clamp(20px, 5vw, 24px)' 
                  }
                })}
                Send Message
              </h3>
              <div style={styles.form}>
                <div style={styles.inputGroup}>
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

                <div style={styles.inputGroup}>
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

                <div style={styles.inputGroup}>
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

                <div style={styles.inputGroup}>
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
                        width: '16px',
                        height: '16px',
                        border: '2px solid #ffffff',
                        borderTop: '2px solid transparent',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite'
                      }} />
                      Opening WhatsApp...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send via WhatsApp
                    </>
                  )}
                </button>

                <div style={styles.whatsappNotice} className="whatsapp-notice">
                  <MessageSquare size={16} />
                  This form will open WhatsApp with your message pre-filled. Just click send in WhatsApp to deliver your message.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;