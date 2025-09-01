"use client";

import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github,
  ArrowUp,
  ExternalLink,
  Code
} from 'lucide-react';
import { CSSProperties } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    { name: 'Graphics Design', href: '#services' },
    { name: 'Web Design', href: '#services' },
    { name: 'Web Development', href: '#services' },
    { name: 'App Development', href: '#services' },
    { name: 'IT Security', href: '#services' },
    { name: 'Database Solutions', href: '#services' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: <Facebook size={20} />, href: '#' },
    { name: 'Twitter', icon: <Twitter size={20} />, href: '#' },
    { name: 'Instagram', icon: <Instagram size={20} />, href: '#' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, href: '#' },
    { name: 'GitHub', icon: <Github size={20} />, href: '#' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const styles: { [key: string]: CSSProperties } = {
    footer: {
      background: '#1f2937',
      color: '#ffffff',
      fontFamily: 'var(--font-sans)',
      position: 'relative',
    },
    mainFooter: {
      padding: 'var(--spacing-3xl) 0 var(--spacing-xl) 0',
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 var(--spacing-lg)',
    },
    footerGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: 'var(--spacing-xl)',
      marginBottom: 'var(--spacing-xl)',
    },
    column: {
      display: 'flex',
      flexDirection: 'column',
    },
    brandSection: {
      maxWidth: '300px',
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: '700',
      fontFamily: 'var(--font-heading)',
      color: '#ffffff',
      marginBottom: 'var(--spacing-md)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--spacing-xs)',
    },
    brandText: {
      fontSize: '1rem',
      color: '#d1d5db',
      lineHeight: '1.6',
      marginBottom: 'var(--spacing-lg)',
    },
    columnTitle: {
      fontSize: '1.125rem',
      fontWeight: '600',
      fontFamily: 'var(--font-heading)',
      color: '#ffffff',
      marginBottom: 'var(--spacing-md)',
    },
    linkList: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-sm)',
    },
    link: {
      color: '#d1d5db',
      textDecoration: 'none',
      fontSize: '0.975rem',
      transition: 'all var(--transition-default)',
      cursor: 'pointer',
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--spacing-sm)',
      marginBottom: 'var(--spacing-sm)',
      color: '#d1d5db',
      fontSize: '0.975rem',
    },
    socialLinks: {
      display: 'flex',
      gap: 'var(--spacing-md)',
      marginTop: 'var(--spacing-lg)',
    },
    socialLink: {
      width: '40px',
      height: '40px',
      background: '#374151',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#d1d5db',
      textDecoration: 'none',
      transition: 'all var(--transition-default)',
      cursor: 'pointer',
    },
    bottomFooter: {
      borderTop: '1px solid #374151',
      padding: 'var(--spacing-lg) 0',
    },
    bottomContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 'var(--spacing-md)',
    },
    copyright: {
      fontSize: '0.875rem',
      color: '#9ca3af',
    },
    bottomLinks: {
      display: 'flex',
      gap: 'var(--spacing-lg)',
    },
    bottomLink: {
      color: '#9ca3af',
      textDecoration: 'none',
      fontSize: '0.875rem',
      transition: 'all var(--transition-default)',
    },
    scrollTopButton: {
      position: 'absolute',
      top: '-20px',
      right: 'var(--spacing-lg)',
      width: '40px',
      height: '40px',
      background: 'var(--color-primary-500)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ffffff',
      cursor: 'pointer',
      transition: 'all var(--transition-default)',
      border: 'none',
      boxShadow: '0 4px 12px rgba(242, 109, 38, 0.3)',
    },
  };

  return (
    <>
      <style jsx>{`
        .footer-link:hover {
          color: var(--color-primary-500);
          transform: translateX(4px);
        }
        
        .social-link:hover {
          background: var(--color-primary-500);
          color: #ffffff;
          transform: translateY(-2px);
        }
        
        .bottom-link:hover {
          color: var(--color-primary-500);
        }
        
        .scroll-top:hover {
          background: var(--color-primary-600);
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(242, 109, 38, 0.4);
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .bottom-content {
            flex-direction: column;
            text-align: center;
          }
          .social-links {
            justify-content: center;
          }
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>

      <footer style={styles.footer}>
        <button 
          style={styles.scrollTopButton} 
          className="scroll-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>

        <div style={styles.mainFooter}>
          <div style={styles.container}>
            <div style={styles.footerGrid} className="footer-grid">
              
              {/* Brand Section */}
              <div style={{ ...styles.column, ...styles.brandSection }}>
                <div style={styles.logo}>
                  <Code size={24} color="var(--color-primary-500)" />
                  DigibtYe
                </div>
                <p style={styles.brandText}>
                  Transforming ideas into digital reality. We are your trusted partner 
                  in navigating the digital landscape with innovative solutions and 
                  creative excellence.
                </p>
                <div style={styles.socialLinks} className="social-links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      style={styles.socialLink}
                      className="social-link"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div style={styles.column}>
                <h4 style={styles.columnTitle}>Quick Links</h4>
                <div style={styles.linkList}>
                  {quickLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      style={styles.link}
                      className="footer-link"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div style={styles.column}>
                <h4 style={styles.columnTitle}>Our Services</h4>
                <div style={styles.linkList}>
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href={service.href}
                      style={styles.link}
                      className="footer-link"
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div style={styles.column}>
                <h4 style={styles.columnTitle}>Contact Info</h4>
                <div style={styles.contactItem}>
                  <Mail size={16} />
                  <span>hello@digitbye.com</span>
                </div>
                <div style={styles.contactItem}>
                  <Phone size={16} />
                  <span>+254 700 123 456</span>
                </div>
                <div style={styles.contactItem}>
                  <MapPin size={16} />
                  <span>Nairobi, Kenya</span>
                </div>
                <div style={styles.contactItem}>
                  <ExternalLink size={16} />
                  <span>www.digitbye.com</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div style={styles.bottomFooter}>
          <div style={styles.container}>
            <div style={styles.bottomContent} className="bottom-content">
              <div style={styles.copyright}>
                © {currentYear} DigibtYe. All rights reserved.
              </div>
              <div style={styles.bottomLinks}>
                <a href="#" style={styles.bottomLink} className="bottom-link">
                  Privacy Policy
                </a>
                <a href="#" style={styles.bottomLink} className="bottom-link">
                  Terms of Service
                </a>
                <a href="#" style={styles.bottomLink} className="bottom-link">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;