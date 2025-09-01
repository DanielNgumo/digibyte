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
      padding: 'clamp(2rem, 6vw, 4rem) 0 clamp(1.5rem, 4vw, 2rem) 0', // Responsive padding
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 clamp(1rem, 4vw, 2rem)', // Responsive container padding
      width: '100%',
      boxSizing: 'border-box',
    },
    footerGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', // Smaller minimum for mobile
      gap: 'clamp(1.5rem, 4vw, 2rem)', // Responsive grid gap
      marginBottom: 'clamp(1.5rem, 4vw, 2rem)', // Responsive margin
    },
    column: {
      display: 'flex',
      flexDirection: 'column',
    },
    brandSection: {
      maxWidth: '100%', // Full width on mobile
    },
    logo: {
      fontSize: 'clamp(1.25rem, 4vw, 1.5rem)', // Responsive logo size
      fontWeight: '700',
      fontFamily: 'var(--font-heading)',
      color: '#ffffff',
      marginBottom: 'clamp(0.75rem, 3vw, 1rem)', // Responsive margin
      display: 'flex',
      alignItems: 'center',
      gap: 'clamp(0.5rem, 2vw, 0.75rem)', // Responsive gap
    },
    brandText: {
      fontSize: 'clamp(0.875rem, 2.5vw, 1rem)', // Responsive brand text
      color: '#d1d5db',
      lineHeight: '1.6',
      marginBottom: 'clamp(1rem, 3vw, 1.5rem)', // Responsive margin
    },
    columnTitle: {
      fontSize: 'clamp(1rem, 3vw, 1.125rem)', // Responsive column title
      fontWeight: '600',
      fontFamily: 'var(--font-heading)',
      color: '#ffffff',
      marginBottom: 'clamp(0.75rem, 2vw, 1rem)', // Responsive margin
    },
    linkList: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'clamp(0.5rem, 2vw, 0.75rem)', // Responsive link gap
    },
    link: {
      color: '#d1d5db',
      textDecoration: 'none',
      fontSize: 'clamp(0.875rem, 2vw, 0.975rem)', // Responsive link size
      transition: 'all var(--transition-default)',
      cursor: 'pointer',
      lineHeight: '1.4',
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: 'clamp(0.5rem, 2vw, 0.75rem)', // Responsive gap
      marginBottom: 'clamp(0.5rem, 2vw, 0.75rem)', // Responsive margin
      color: '#d1d5db',
      fontSize: 'clamp(0.875rem, 2vw, 0.975rem)', // Responsive font size
      lineHeight: '1.4',
    },
    socialLinks: {
      display: 'flex',
      gap: 'clamp(0.75rem, 3vw, 1rem)', // Responsive social gap
      marginTop: 'clamp(1rem, 3vw, 1.5rem)', // Responsive margin
      flexWrap: 'wrap', // Allow wrapping on very small screens
    },
    socialLink: {
      width: 'clamp(36px, 8vw, 40px)', // Responsive social button size
      height: 'clamp(36px, 8vw, 40px)', // Responsive social button size
      background: '#374151',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#d1d5db',
      textDecoration: 'none',
      transition: 'all var(--transition-default)',
      cursor: 'pointer',
      flexShrink: 0, // Prevent shrinking
    },
    bottomFooter: {
      borderTop: '1px solid #374151',
      padding: 'clamp(1rem, 3vw, 1.5rem) 0', // Responsive bottom padding
    },
    bottomContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 'clamp(0.75rem, 3vw, 1rem)', // Responsive gap
    },
    copyright: {
      fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', // Responsive copyright size
      color: '#9ca3af',
      lineHeight: '1.4',
    },
    bottomLinks: {
      display: 'flex',
      gap: 'clamp(1rem, 3vw, 1.5rem)', // Responsive bottom links gap
      flexWrap: 'wrap', // Allow wrapping
    },
    bottomLink: {
      color: '#9ca3af',
      textDecoration: 'none',
      fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', // Responsive bottom link size
      transition: 'all var(--transition-default)',
      whiteSpace: 'nowrap', // Prevent text wrapping within links
    },
    scrollTopButton: {
      position: 'absolute',
      top: '-25px', // Fixed position to ensure full visibility
      right: 'clamp(1rem, 4vw, 2rem)', // Responsive right position
      width: '50px', // Fixed size for consistent appearance
      height: '50px', // Fixed size for consistent appearance
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
      touchAction: 'manipulation', // Better touch handling
      zIndex: 1000, // Ensure it's above other elements
    },
  };

  return (
    <>
      <style jsx>{`
        /* Mobile First Responsive Styles */
        .footer-grid {
          grid-template-columns: 1fr;
          text-align: left;
          gap: 2rem;
        }
        
        .brand-section {
          max-width: 100%;
        }
        
        .social-links {
          justify-content: flex-start;
        }
        
        .bottom-content {
          flex-direction: column;
          text-align: center;
          gap: 1rem;
        }
        
        .bottom-links {
          justify-content: center;
        }

        /* Small Mobile (up to 480px) */
        @media (max-width: 480px) {
          .footer-container {
            padding: 0 1rem;
          }
          
          .footer-grid {
            text-align: center;
            gap: 1.5rem;
          }
          
          .social-links {
            justify-content: center;
            gap: 0.75rem;
          }
          
          .bottom-links {
            flex-direction: column;
            gap: 0.5rem;
            align-items: center;
          }
          
          .scroll-top-button {
            right: 1rem;
          }
        }

        /* Large Mobile (481px - 640px) */
        @media (min-width: 481px) and (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }
          
          .social-links {
            justify-content: center;
          }
          
          .bottom-content {
            flex-direction: column;
            text-align: center;
          }
        }

        /* Tablet (641px - 768px) */
        @media (min-width: 641px) and (max-width: 768px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            text-align: left;
            gap: 2rem;
          }
          
          .brand-section {
            grid-column: 1 / -1;
            text-align: center;
            max-width: 100%;
            margin-bottom: 1rem;
          }
          
          .social-links {
            justify-content: center;
          }
          
          .bottom-content {
            flex-direction: column;
            text-align: center;
          }
        }

        /* Small Desktop (769px - 1024px) */
        @media (min-width: 769px) and (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            text-align: left;
          }
          
          .brand-section {
            max-width: 300px;
          }
          
          .social-links {
            justify-content: flex-start;
          }
          
          .bottom-content {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
          }
        }

        /* Desktop (1025px and up) */
        @media (min-width: 1025px) {
          .footer-grid {
            grid-template-columns: repeat(4, 1fr);
            text-align: left;
          }
          
          .brand-section {
            max-width: 300px;
          }
          
          .social-links {
            justify-content: flex-start;
          }
          
          .bottom-content {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
          }
        }

        /* Large Desktop (1440px and up) */
        @media (min-width: 1440px) {
          .footer-grid {
            gap: 3rem;
          }
        }

        /* Hover Effects - Only on devices that support hover */
        @media (hover: hover) and (pointer: fine) {
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
        }

        /* Touch devices */
        @media (hover: none) and (pointer: coarse) {
          .footer-link:active {
            color: var(--color-primary-500);
          }
          
          .social-link:active {
            background: var(--color-primary-500);
            color: #ffffff;
          }
          
          .scroll-top:active {
            background: var(--color-primary-600);
            transform: translateY(-1px);
          }
        }

        /* Focus states for accessibility */
        .footer-link:focus,
        .social-link:focus,
        .bottom-link:focus,
        .scroll-top:focus {
          outline: 2px solid var(--color-primary-500);
          outline-offset: 2px;
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .social-link {
            border: 1px solid #d1d5db;
          }
          
          .scroll-top-button {
            border: 2px solid #ffffff;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .footer-link,
          .social-link,
          .scroll-top {
            transition: none !important;
          }
          
          .footer-link:hover,
          .social-link:hover,
          .scroll-top:hover {
            transform: none !important;
          }
          
          .scroll-top-button {
            scroll-behavior: auto !important;
          }
        }

        /* Print styles */
        @media print {
          .scroll-top-button {
            display: none;
          }
          
          .social-links {
            display: none;
          }
          
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
          }
          
          .bottom-links {
            display: none;
          }
        }

        /* Landscape orientation for mobile */
        @media (max-height: 600px) and (orientation: landscape) {
          .footer-main {
            padding: clamp(1rem, 4vw, 2rem) 0;
          }
          
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
          
          .brand-section {
            grid-column: 1 / -1;
          }
        }

        /* Loading animation for scroll button */
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        /* Extra small devices optimization */
        @media (max-width: 320px) {
          .footer-container {
            padding: 0 0.75rem;
          }
          
          .social-links {
            gap: 0.5rem;
          }
          
          .bottom-links {
            gap: 0.25rem;
          }
        }
      `}</style>

      <footer style={styles.footer}>
        <button 
          style={styles.scrollTopButton} 
          className="scroll-top scroll-top-button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          type="button"
        >
          <ArrowUp size={20} />
        </button>

        <div style={styles.mainFooter} className="footer-main">
          <div style={styles.container} className="footer-container">
            <div style={styles.footerGrid} className="footer-grid">
              
              {/* Brand Section */}
              <div style={{ ...styles.column, ...styles.brandSection }} className="brand-section">
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
                  <span>+254 425 802 39</span>
                </div>
                <div style={styles.contactItem}>
                  <MapPin size={16} />
                  <span>Nairobi, Kenya</span>
                </div>
                <div style={styles.contactItem}>
                  <ExternalLink size={16} />
                  <span>ngumodaniel80@gmail.com</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div style={styles.bottomFooter}>
          <div style={styles.container} className="footer-container">
            <div style={styles.bottomContent} className="bottom-content">
              <div style={styles.copyright}>
                © {currentYear} DigibtYe. All rights reserved.
              </div>
              <div style={styles.bottomLinks} className="bottom-links">
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