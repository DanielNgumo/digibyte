"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    const targetId = href.substring(1); // Remove the # from href
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 120; // Account for fixed navbar height
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          background: ${isScrolled ? 'rgba(0, 48, 135, 0.95)' : 'var(--color-secondary-600)'};
          backdrop-filter: ${isScrolled ? 'blur(10px)' : 'none'};
          box-shadow: ${isScrolled ? 'var(--shadow-lg)' : 'none'};
          transition: all var(--transition-default);
          font-family: var(--font-sans);
        }

        .top-bar {
          background: var(--color-neutral-900);
          color: #ffffff;
          padding: 8px 1rem;
          font-size: 14px;
          font-weight: 400;
        }

        .top-bar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1280px;
          margin: 0 auto;
        }

        .top-bar-left {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .top-bar-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .top-bar-highlight {
          color: var(--color-primary-500);
          font-weight: 500;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .nav-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 60px;
        }

        .logo {
          color: #ffffff;
          font-size: 28px;
          font-weight: 800;
          font-family: var(--font-heading);
          text-decoration: none;
          transition: all var(--transition-default);
        }

        .logo:hover {
          color: var(--color-primary-500);
          transform: scale(1.05);
        }

        .desktop-nav {
          display: none;
          align-items: center;
          gap: 32px;
        }

        .nav-link {
          color: #ffffff;
          font-weight: 500;
          font-size: 16px;
          text-decoration: none;
          padding: 8px 0;
          position: relative;
          transition: all var(--transition-default);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--color-primary-500);
          transition: width var(--transition-default);
        }

        .nav-link:hover {
          color: var(--color-primary-500);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .contact-section {
          display: none;
          align-items: center;
          gap: 16px;
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-md);
          backdrop-filter: blur(10px);
        }

        .contact-text {
          color: #ffffff;
          font-size: 14px;
          font-weight: 500;
          margin: 0;
        }

        .phone-link {
          color: var(--color-primary-500);
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all var(--transition-default);
        }

        .phone-link:hover {
          color: var(--text-inverse);
          transform: scale(1.05);
        }

        .mobile-button {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
          border-radius: var(--radius-md);
          color: var(--text-inverse);
          background: none;
          border: none;
          cursor: pointer;
          transition: all var(--transition-default);
        }

        .mobile-button:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: scale(1.1);
        }

        .mobile-menu {
          max-height: ${isMobileMenuOpen ? '400px' : '0'};
          opacity: ${isMobileMenuOpen ? 1 : 0};
          overflow: hidden;
          transition: all var(--transition-slow);
          background: var(--color-secondary-600);
        }

        .mobile-menu-content {
          padding: 16px;
        }

        .mobile-nav-link {
          display: block;
          color: var(--text-inverse);
          font-weight: 500;
          font-size: 16px;
          text-decoration: none;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: all var(--transition-default);
        }

        .mobile-nav-link:hover {
          color: var(--color-primary-500);
          padding-left: 8px;
        }

        .social-link {
          color: var(--text-inverse);
          font-size: 18px;
          text-decoration: none;
          transition: all var(--transition-default);
          opacity: 0.8;
        }

        .social-link:hover {
          color: var(--color-primary-500);
          opacity: 1;
          transform: scale(1.2);
        }

        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 40;
          background-color: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          opacity: ${isMobileMenuOpen ? 1 : 0};
          visibility: ${isMobileMenuOpen ? 'visible' : 'hidden'};
          transition: all var(--transition-default);
        }

        @media (min-width: 768px) {
          .contact-section {
            display: flex;
          }
          .top-bar-left {
            gap: 32px;
          }
        }

        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex;
          }
          .mobile-button {
            display: none;
          }
          .container {
            padding: 0 2rem;
          }
        }

        @media (max-width: 768px) {
          .top-bar-left {
            gap: 16px;
          }
          .top-bar-left span:nth-child(2) {
            display: none;
          }
          .logo {
            font-size: 24px;
          }
        }

        @media (max-width: 640px) {
          .top-bar-left span:nth-child(3) {
            display: none;
          }
        }
      `}</style>

      <nav className="navbar">
        {/* Top Bar */}
        <div className="top-bar">
          <div className="top-bar-content">
            <div className="top-bar-left">
              <span>📍 23 Ranking Street, New York</span>
              <span>✉️ Email@Example.com</span>
              <span className="top-bar-highlight">Note: We help you to Grow your Business</span>
            </div>
            <div className="top-bar-right">
              <a href="https://facebook.com" className="social-link" aria-label="Facebook">
                🌐
              </a>
              <a href="https://twitter.com" className="social-link" aria-label="Twitter">
                🐦
              </a>
              <a href="https://instagram.com" className="social-link" aria-label="Instagram">
                📸
              </a>
              <a href="https://linkedin.com" className="social-link" aria-label="LinkedIn">
                💼
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="container">
          <div className="nav-content">
            <a href="/" className="logo">HighTech</a>
            
            <div className="desktop-nav">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="nav-link"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="contact-section">
              <p className="contact-text">Have any questions?</p>
              <a href="tel:+0114567890" className="phone-link">
                <Phone size={16} />
                Call: +011 456 7890
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="mobile-button"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="mobile-nav-link"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <div style={{ 
              marginTop: '16px', 
              paddingTop: '16px', 
              borderTop: '1px solid rgba(255, 255, 255, 0.1)' 
            }}>
              <a href="tel:+0114567890" className="phone-link">
                <Phone size={16} />
                Call: +011 456 7890
              </a>
            </div>
          </div>
        </div>

        {/* Overlay */}
        <div
          className="overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      </nav>
    </>
  );
};

export default Navbar;