"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { CSSProperties } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pages = [
    { name: 'Page 1', href: '/pages/page1' },
    { name: 'Page 2', href: '/pages/page2' },
    { name: 'Page 3', href: '/pages/page3' },
  ];

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Pages', href: '/pages', hasDropdown: true },
    { name: 'Contact', href: '/contact' },
  ];

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const styles: { [key: string]: CSSProperties } = {
    navbar: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      background: isScrolled ? 'rgba(0, 48, 135, 0.9)' : '#003087',
      boxShadow: isScrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
      transition: 'all 0.3s ease',
    },
    topBar: {
      background: '#1a1a1a',
      color: '#fff',
      padding: '8px 1rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '14px',
    },
    topBarContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      maxWidth: '1280px',
      margin: '0 auto',
    },
    topBarLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
    },
    topBarRight: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 1rem',
    },
    navContent: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '60px',
    },
    logo: {
      color: '#fff',
      fontSize: '24px',
      fontWeight: 'bold',
      textDecoration: 'none',
    },
    desktopNav: {
      display: 'none',
      alignItems: 'center',
      gap: '24px',
    },
    navLink: {
      color: '#fff',
      fontWeight: '500',
      textDecoration: 'none',
      padding: '8px 0',
      fontSize: '16px',
      transition: 'color 0.2s ease',
    },
    dropdownButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      color: '#fff',
      fontWeight: '500',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '8px 0',
      fontSize: '16px',
      transition: 'color 0.2s ease',
    },
    dropdown: {
      position: 'absolute',
      top: '100%',
      left: '0',
      marginTop: '8px',
      width: '200px',
      backgroundColor: '#fff',
      borderRadius: '4px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      padding: '8px 0',
      zIndex: 60,
    },
    dropdownItem: {
      display: 'block',
      color: '#000',
      padding: '8px 16px',
      textDecoration: 'none',
      fontSize: '14px',
      transition: 'background 0.2s ease',
    },
    contactSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
    },
    contactText: {
      color: '#00C853',
      fontSize: '14px',
      margin: 0,
    },
    phone: {
      color: '#00C853',
      fontSize: '16px',
      textDecoration: 'none',
    },
    mobileButton: {
      display: 'block',
      padding: '8px',
      borderRadius: '8px',
      color: '#fff',
      background: 'none',
      border: 'none',
    },
    mobileMenu: {
      maxHeight: isMobileMenuOpen ? '600px' : '0',
      opacity: isMobileMenuOpen ? 1 : 0,
      overflow: 'hidden',
      transition: 'all 0.3s ease',
    },
  };

  return (
    <>
      <style jsx>{`
        @media (min-width: 1024px) {
          .desktop-nav { display: flex !important; }
          .mobile-button { display: none !important; }
        }
        .nav-link:hover { color: #00C853 !important; }
        .dropdown-item:hover { background: #f0f0f0 !important; }
        .mobile-button:hover { background: rgba(255, 255, 255, 0.1) !important; }
      `}</style>

      <nav style={styles.navbar}>
        {/* Top Bar */}
        <div style={styles.topBar}>
          <div style={styles.topBarContent}>
            <div style={styles.topBarLeft}>
              <span>📍 23 Ranking Street, New York</span>
              <span>✉️ Email@Example.com</span>
              <span style={{ color: '#00C853' }}>Note : We help you to Grow your</span>
            </div>
            <div style={styles.topBarRight}>
              <a href="https://facebook.com"><span role="img" aria-label="facebook">🌐</span></a>
              <a href="https://twitter.com"><span role="img" aria-label="twitter">🐦</span></a>
              <a href="https://instagram.com"><span role="img" aria-label="instagram">📸</span></a>
              <a href="https://linkedin.com"><span role="img" aria-label="linkedin">💼</span></a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div style={styles.container}>
          <div style={styles.navContent}>
            <a href="/" style={styles.logo}>HighTech</a>
            <div style={styles.desktopNav} className="desktop-nav">
              {navLinks.map((link) => (
                <div key={link.name} style={{ position: 'relative' }}>
                  {link.hasDropdown ? (
                    <button
                      onClick={() => toggleDropdown(link.name)}
                      style={styles.dropdownButton}
                      className="nav-link"
                    >
                      <span>{link.name}</span>
                      <ChevronDown style={{ width: '16px', height: '16px', color: '#fff' }} />
                    </button>
                  ) : (
                    <a href={link.href} style={styles.navLink} className="nav-link">
                      {link.name}
                    </a>
                  )}
                  {link.hasDropdown && activeDropdown === link.name && (
                    <div style={styles.dropdown}>
                      {pages.map((page) => (
                        <a
                          key={page.name}
                          href={page.href}
                          style={styles.dropdownItem}
                          className="dropdown-item"
                          onClick={closeDropdown}
                        >
                          {page.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div style={styles.contactSection}>
              <p style={styles.contactText}>Have any questions?</p>
              <a href="tel:+0114567890" style={styles.phone}>Call: +011 456 7890</a>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={styles.mobileButton}
              className="mobile-button"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div style={styles.mobileMenu}>
          <div style={{ background: '#003087', padding: '16px' }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{ ...styles.navLink, display: 'block', marginBottom: '12px' }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Overlay for dropdown close */}
      {(activeDropdown || isMobileMenuOpen) && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 40,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
          onClick={() => {
            closeDropdown();
            setIsMobileMenuOpen(false);
        }}
        />
      )}
    </>
  );
};

export default Navbar;