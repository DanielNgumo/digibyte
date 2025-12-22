"use client";

import React, { useCallback, memo, useMemo } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ArrowUp,
  Code
} from 'lucide-react';
import { CSSProperties } from 'react';

// Type definitions
interface LinkItem {
  name: string;
  href: string;
}

interface SocialLink {
  name: string;
  icon: React.ReactElement<any>;
  href: string;
}

interface ContactInfo {
  icon: React.ReactElement<any>;
  label: string;
  content: string;
}

// Memoized link item component
const LinkItem = memo(({ 
  link, 
  style 
}: { 
  link: LinkItem; 
  style: CSSProperties;
}) => (
  <a
    href={link.href}
    style={style}
    className="footer-link"
  >
    {link.name}
  </a>
));

LinkItem.displayName = 'LinkItem';

// Memoized link list component
const LinkList = memo(({ 
  links, 
  styles 
}: { 
  links: LinkItem[]; 
  styles: { [key: string]: CSSProperties };
}) => {
  return (
    <div style={styles.linkList}>
      {links.map((link, index) => (
        <LinkItem key={index} link={link} style={styles.link} />
      ))}
    </div>
  );
});

LinkList.displayName = 'LinkList';

// Memoized social link item
const SocialLinkItem = memo(({ 
  social, 
  style 
}: { 
  social: SocialLink; 
  style: CSSProperties;
}) => (
  <a
    href={social.href}
    style={style}
    className="social-link"
    aria-label={social.name}
    target="_blank"
    rel="noopener noreferrer"
  >
    {social.icon}
  </a>
));

SocialLinkItem.displayName = 'SocialLinkItem';

// Memoized social links component
const SocialLinks = memo(({ 
  links, 
  styles 
}: { 
  links: SocialLink[]; 
  styles: { [key: string]: CSSProperties };
}) => {
  return (
    <div style={styles.socialLinks} className="social-links">
      {links.map((social, index) => (
        <SocialLinkItem key={index} social={social} style={styles.socialLink} />
      ))}
    </div>
  );
});

SocialLinks.displayName = 'SocialLinks';

// Memoized contact info item
const ContactItem = memo(({ 
  contact, 
  style 
}: { 
  contact: ContactInfo; 
  style: CSSProperties;
}) => (
  <div style={style} className="contact-item">
    {React.cloneElement(contact.icon, {
      size: 16,
      style: { flexShrink: 0 } as any,
      'aria-hidden': 'true'
    })}
    <span>{contact.content}</span>
  </div>
));

ContactItem.displayName = 'ContactItem';

// Memoized contact info section
const ContactInfoSection = memo(({ 
  contacts, 
  styles 
}: { 
  contacts: ContactInfo[]; 
  styles: { [key: string]: CSSProperties };
}) => {
  return (
    <>
      {contacts.map((contact, index) => (
        <ContactItem key={index} contact={contact} style={styles.contactItem} />
      ))}
    </>
  );
});

ContactInfoSection.displayName = 'ContactInfoSection';

// Memoized footer column component
const FooterColumn = memo(({ 
  title, 
  children, 
  styles 
}: { 
  title?: string; 
  children: React.ReactNode; 
  styles: { [key: string]: CSSProperties };
}) => {
  return (
    <div style={styles.column}>
      {title && <h4 style={styles.columnTitle}>{title}</h4>}
      {children}
    </div>
  );
});

FooterColumn.displayName = 'FooterColumn';

// Memoized scroll to top button
const ScrollTopButton = memo(({ 
  onClick, 
  styles 
}: { 
  onClick: () => void; 
  styles: { [key: string]: CSSProperties };
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <button
      style={{
        ...styles.scrollTopButton,
        background: isHovered ? '#e56320' : '#f26d26',
        boxShadow: isHovered 
          ? '0 6px 16px rgba(242, 109, 38, 0.4)' 
          : '0 4px 12px rgba(242, 109, 38, 0.3)'
      }}
      className="scroll-top scroll-top-button"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Scroll to top"
      type="button"
    >
      <ArrowUp size={20} />
    </button>
  );
});

ScrollTopButton.displayName = 'ScrollTopButton';

// Memoized bottom footer section
const BottomFooter = memo(({ 
  currentYear, 
  styles 
}: { 
  currentYear: number; 
  styles: { [key: string]: CSSProperties };
}) => {
  return (
    <div style={styles.bottomFooter} className="bottom-footer">
      <div style={styles.container} className="footer-container">
        <div style={styles.bottomContent} className="bottom-content">
          <div style={styles.copyright}>
            © {currentYear} TechNasi. All rights reserved.
          </div>
          <div style={styles.bottomLinks} className="bottom-links">
            <a href="/privacy" style={styles.bottomLink} className="bottom-link">
              Privacy Policy
            </a>
            <a href="/terms" style={styles.bottomLink} className="bottom-link">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

BottomFooter.displayName = 'BottomFooter';

const Footer = memo(() => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const quickLinks = useMemo(() => [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ], []);

  const services = useMemo(() => [
    { name: 'Graphics Design', href: '#services' },
    { name: 'Web Design', href: '#services' },
    { name: 'Web Development', href: '#services' },
    { name: 'App Development', href: '#services' },
    { name: 'IT Security', href: '#services' },
    { name: 'Database Solutions', href: '#services' },
  ], []);

  const socialLinks = useMemo(() => [
    { name: 'LinkedIn', icon: <Linkedin size={20} aria-hidden="true" />, href: 'https://www.linkedin.com/in/daniel-ngumo-20960127b/' },
    { name: 'GitHub', icon: <Github size={20} aria-hidden="true" />, href: 'https://github.com/DanielNgumo' },
  ], []);

  const contactInfo = useMemo(() => [
    { icon: <Mail size={16} />, label: 'Email', content: 'dev@technasi.co.ke' },
    { icon: <Phone size={16} />, label: 'Phone', content: '+254 425 802 39' },
    { icon: <MapPin size={16} />, label: 'Location', content: 'Nairobi, Kenya' },
  ], []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const styles: { [key: string]: CSSProperties } = {
    footer: {
      background: '#1f2937',
      color: '#ffffff',
      fontFamily: 'var(--font-sans)',
      position: 'relative',
      contain: 'layout style',
    },
    mainFooter: {
      padding: 'clamp(2rem, 6vw, 4rem) 0 clamp(1.5rem, 4vw, 2rem) 0',
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 clamp(1rem, 4vw, 2rem)',
      width: '100%',
      boxSizing: 'border-box',
    },
    footerGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: 'clamp(1.5rem, 4vw, 2rem)',
      marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
    },
    column: {
      display: 'flex',
      flexDirection: 'column',
    },
    brandSection: {
      maxWidth: '100%',
    },
    logo: {
      fontSize: 'clamp(1.25rem, 4vw, 1.5rem)',
      fontWeight: '700',
      fontFamily: 'var(--font-heading)',
      color: '#ffffff',
      marginBottom: 'clamp(0.75rem, 3vw, 1rem)',
      display: 'flex',
      alignItems: 'center',
      gap: 'clamp(0.5rem, 2vw, 0.75rem)',
    },
    brandText: {
      fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
      color: '#d1d5db',
      lineHeight: '1.6',
      marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
    },
    columnTitle: {
      fontSize: 'clamp(1rem, 3vw, 1.125rem)',
      fontWeight: '600',
      fontFamily: 'var(--font-heading)',
      color: '#ffffff',
      marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
    },
    linkList: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'clamp(0.5rem, 2vw, 0.75rem)',
    },
    link: {
      color: '#d1d5db',
      textDecoration: 'none',
      fontSize: 'clamp(0.875rem, 2vw, 0.975rem)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      lineHeight: '1.4',
      willChange: 'color, transform',
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: 'clamp(0.5rem, 2vw, 0.75rem)',
      marginBottom: 'clamp(0.5rem, 2vw, 0.75rem)',
      color: '#d1d5db',
      fontSize: 'clamp(0.875rem, 2vw, 0.975rem)',
      lineHeight: '1.4',
    },
    socialLinks: {
      display: 'flex',
      gap: 'clamp(0.75rem, 3vw, 1rem)',
      marginTop: 'clamp(1rem, 3vw, 1.5rem)',
      flexWrap: 'wrap',
    },
    socialLink: {
      width: 'clamp(36px, 8vw, 40px)',
      height: 'clamp(36px, 8vw, 40px)',
      background: '#374151',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#d1d5db',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      flexShrink: 0,
      border: 'none',
      willChange: 'background-color, color, transform',
    },
    bottomFooter: {
      borderTop: '1px solid #374151',
      padding: 'clamp(1rem, 3vw, 1.5rem) 0',
    },
    bottomContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 'clamp(0.75rem, 3vw, 1rem)',
    },
    copyright: {
      fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
      color: '#9ca3af',
      lineHeight: '1.4',
    },
    bottomLinks: {
      display: 'flex',
      gap: 'clamp(1rem, 3vw, 1.5rem)',
      flexWrap: 'wrap',
    },
    bottomLink: {
      color: '#9ca3af',
      textDecoration: 'none',
      fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
      transition: 'all 0.3s ease',
      whiteSpace: 'nowrap',
      willChange: 'color',
    },
    scrollTopButton: {
      position: 'absolute',
      top: '-25px',
      right: 'clamp(1rem, 4vw, 2rem)',
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ffffff',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      border: 'none',
      touchAction: 'manipulation',
      zIndex: 1000,
      willChange: 'background-color, transform, box-shadow',
    },
  };

  return (
    <>
      <style jsx>{`
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Base/Mobile First Styles */
        .footer-grid {
          grid-template-columns: 1fr;
          text-align: left;
          gap: 1.5rem;
        }

        .brand-section {
          max-width: 100%;
          text-align: left;
        }

        .social-links {
          justify-content: flex-start;
        }

        .bottom-content {
          flex-direction: column;
          text-align: left;
          gap: 1rem;
        }

        .bottom-links {
          justify-content: flex-start;
        }

        /* Extra Small Devices (up to 320px) */
        @media (max-width: 320px) {
          .footer-container {
            padding: 0 0.75rem;
          }

          .footer-grid {
            gap: 1rem;
          }

          .social-links {
            gap: 0.5rem;
          }

          .bottom-links {
            gap: 0.25rem;
            flex-direction: column;
          }

          .scroll-top-button {
            right: 0.75rem;
            width: 45px;
            height: 45px;
          }
        }

        /* Small Mobile (321px - 480px) */
        @media (min-width: 321px) and (max-width: 480px) {
          .footer-container {
            padding: 0 1rem;
          }

          .footer-grid {
            text-align: left;
            gap: 1.5rem;
            grid-template-columns: 1fr;
          }

          .brand-section {
            text-align: left;
          }

          .social-links {
            justify-content: flex-start;
            gap: 0.75rem;
          }

          .bottom-links {
            flex-direction: column;
            gap: 0.5rem;
            align-items: flex-start;
          }

          .scroll-top-button {
            right: 1rem;
            width: 48px;
            height: 48px;
          }
        }

        /* Large Mobile (481px - 640px) */
        @media (min-width: 481px) and (max-width: 640px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            text-align: left;
            gap: 1.5rem;
          }

          .brand-section {
            grid-column: 1 / -1;
            text-align: left;
          }

          .social-links {
            justify-content: flex-start;
          }

          .bottom-content {
            flex-direction: column;
            text-align: left;
          }

          .bottom-links {
            justify-content: flex-start;
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
            text-align: left;
            max-width: 100%;
            margin-bottom: 0;
          }

          .social-links {
            justify-content: flex-start;
          }

          .bottom-content {
            flex-direction: column;
            text-align: left;
            gap: 1rem;
          }

          .bottom-links {
            justify-content: flex-start;
          }
        }

        /* Small Desktop (769px - 1024px) */
        @media (min-width: 769px) and (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(3, 1fr);
            text-align: left;
            gap: 2rem;
          }

          .brand-section {
            grid-column: 1 / -1;
            max-width: 100%;
            text-align: left;
          }

          .social-links {
            justify-content: flex-start;
          }

          .bottom-content {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
            gap: 1rem;
          }

          .bottom-links {
            justify-content: flex-end;
          }
        }

        /* Desktop (1025px - 1439px) */
        @media (min-width: 1025px) and (max-width: 1439px) {
          .footer-grid {
            grid-template-columns: repeat(4, 1fr);
            text-align: left;
            gap: 2.5rem;
          }

          .brand-section {
            max-width: 100%;
            text-align: left;
          }

          .social-links {
            justify-content: flex-start;
          }

          .bottom-content {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
          }

          .bottom-links {
            justify-content: flex-end;
          }
        }

        /* Large Desktop (1440px and up) */
        @media (min-width: 1440px) {
          .footer-grid {
            grid-template-columns: repeat(4, 1fr);
            text-align: left;
            gap: 3rem;
          }

          .brand-section {
            max-width: 100%;
            text-align: left;
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

        /* Landscape Mobile (small height) */
        @media (max-height: 500px) and (orientation: landscape) {
          .footer-main {
            padding: 1rem 0;
          }

          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
            margin-bottom: 1rem;
          }

          .brand-section {
            grid-column: 1 / -1;
          }
        }

        /* Hover Effects - Only on devices that support hover */
        @media (hover: hover) and (pointer: fine) {
          .footer-link {
            position: relative;
          }

          .footer-link:hover {
            color: #f26d26;
            transform: translateX(4px);
          }

          .social-link {
            position: relative;
          }

          .social-link:hover {
            background: #f26d26;
            color: #ffffff;
            transform: translateY(-3px);
            box-shadow: 0 4px 8px rgba(242, 109, 38, 0.4);
          }

          .bottom-link:hover {
            color: #f26d26;
          }

          .scroll-top:hover {
            transform: translateY(-3px);
          }
        }

        /* Touch devices - Active state */
        @media (hover: none) and (pointer: coarse) {
          .footer-link:active {
            color: #f26d26;
          }

          .social-link:active {
            background: #f26d26;
            color: #ffffff;
          }

          .scroll-top:active {
            transform: translateY(-2px);
          }
        }

        /* Focus states for accessibility */
        .footer-link:focus-visible,
        .social-link:focus-visible,
        .bottom-link:focus-visible,
        .scroll-top:focus-visible {
          outline: 2px solid #f26d26;
          outline-offset: 2px;
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .social-link {
            border: 2px solid #d1d5db;
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
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .bottom-links {
            display: none;
          }
        }
      `}</style>

      <footer style={styles.footer} className="footer">
        <ScrollTopButton onClick={scrollToTop} styles={styles} />

        <div style={styles.mainFooter} className="footer-main">
          <div style={styles.container} className="footer-container">
            <div style={styles.footerGrid} className="footer-grid">

              {/* Brand Section */}
              <div style={{ ...styles.column, ...styles.brandSection }} className="brand-section">
                <div style={styles.logo}>
                  <Code size={24} color="#f26d26" aria-hidden="true" />
                  <span>TechNasi</span>
                </div>
                <p style={styles.brandText}>
                  Transforming ideas into digital reality. We are your trusted partner
                  in navigating the digital landscape with innovative solutions and
                  creative excellence.
                </p>
                <SocialLinks links={socialLinks} styles={styles} />
              </div>

              {/* Quick Links */}
              <FooterColumn title="Quick Links" styles={styles}>
                <LinkList links={quickLinks} styles={styles} />
              </FooterColumn>

              {/* Services */}
              <FooterColumn title="Our Services" styles={styles}>
                <LinkList links={services} styles={styles} />
              </FooterColumn>

              {/* Contact Info */}
              <FooterColumn title="Contact Info" styles={styles}>
                <ContactInfoSection contacts={contactInfo} styles={styles} />
              </FooterColumn>

            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <BottomFooter currentYear={currentYear} styles={styles} />
      </footer>
    </>
  );
});

Footer.displayName = 'Footer';

export default Footer;