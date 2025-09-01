"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';

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

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
          padding: 6px 1rem;
          font-size: 13px;
          font-weight: 400;
          line-height: 1.4;
        }

        .top-bar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1280px;
          margin: 0 auto;
          min-height: 32px;
        }

        .top-bar-left {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .top-bar-item {
          display: flex;
          align-items: center;
          gap: 4px;
          white-space: nowrap;
        }

        .top-bar-right {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
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
          font-size: 24px;
          font-weight: 800;
          font-family: var(--font-heading);
          text-decoration: none;
          transition: all var(--transition-default);
          flex-shrink: 0;
        }

        .logo:hover {
          color: var(--color-primary-500);
          transform: scale(1.05);
        }

        .desktop-nav {
          display: none;
          align-items: center;
          gap: 24px;
        }

        .nav-link {
          color: #ffffff;
          font-weight: 500;
          font-size: 15px;
          text-decoration: none;
          padding: 8px 12px;
          position: relative;
          transition: all var(--transition-default);
          border-radius: var(--radius-sm);
          white-space: nowrap;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 12px;
          right: 12px;
          height: 2px;
          background: var(--color-primary-500);
          transform: scaleX(0);
          transition: transform var(--transition-default);
          border-radius: 1px;
        }

        .nav-link:hover {
          color: var(--color-primary-500);
          background: rgba(255, 255, 255, 0.1);
        }

        .nav-link:hover::after {
          transform: scaleX(1);
        }

        .contact-section {
          display: none;
          align-items: center;
          gap: 12px;
          padding: 6px 12px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-md);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .contact-text {
          color: #ffffff;
          font-size: 13px;
          font-weight: 500;
          margin: 0;
          white-space: nowrap;
        }

        .phone-link {
          color: var(--color-primary-500);
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all var(--transition-default);
          white-space: nowrap;
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
          width: 40px;
          height: 40px;
        }

        .mobile-button:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: scale(1.1);
        }

        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          max-height: ${isMobileMenuOpen ? '500px' : '0'};
          opacity: ${isMobileMenuOpen ? 1 : 0};
          overflow: hidden;
          transition: all var(--transition-slow);
          background: var(--color-secondary-600);
          backdrop-filter: blur(10px);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }

        .mobile-menu-content {
          padding: 20px;
        }

        .mobile-nav-link {
          display: block;
          color: var(--text-inverse);
          font-weight: 500;
          font-size: 16px;
          text-decoration: none;
          padding: 14px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: all var(--transition-default);
          position: relative;
        }

        .mobile-nav-link:last-child {
          border-bottom: none;
        }

        .mobile-nav-link:hover {
          color: var(--color-primary-500);
          padding-left: 12px;
        }

        .mobile-contact {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
        }

        .social-link {
          color: var(--text-inverse);
          font-size: 16px;
          text-decoration: none;
          transition: all var(--transition-default);
          opacity: 0.8;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
        }

        .social-link:hover {
          color: var(--color-primary-500);
          opacity: 1;
          transform: scale(1.2);
          background: rgba(255, 255, 255, 0.2);
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

        /* Responsive breakpoints */
        
        /* Small mobile devices (320px - 480px) */
        @media (max-width: 480px) {
          .top-bar {
            padding: 4px 0.75rem;
            font-size: 11px;
          }
          
          .top-bar-left {
            gap: 12px;
            overflow: hidden;
          }
          
          .top-bar-item:nth-child(2) {
            display: none;
          }
          
          .top-bar-item:nth-child(3) {
            font-size: 10px;
          }
          
          .container {
            padding: 0 0.75rem;
          }
          
          .nav-content {
            height: 56px;
          }
          
          .logo {
            font-size: 20px;
          }
          
          .mobile-button {
            width: 36px;
            height: 36px;
          }
          
          .mobile-menu-content {
            padding: 16px;
          }
          
          .mobile-nav-link {
            font-size: 15px;
            padding: 12px 0;
          }
          
          .top-bar-right {
            gap: 6px;
          }
          
          .social-link {
            width: 24px;
            height: 24px;
            font-size: 14px;
          }
        }

        /* Mobile devices (481px - 768px) */
        @media (min-width: 481px) and (max-width: 768px) {
          .top-bar {
            font-size: 12px;
          }
          
          .top-bar-left {
            gap: 16px;
          }
          
          .top-bar-item:nth-child(3) {
            display: none;
          }
          
          .logo {
            font-size: 22px;
          }
          
          .nav-content {
            height: 58px;
          }
        }

        /* Tablet devices (769px - 1023px) */
        @media (min-width: 769px) and (max-width: 1023px) {
          .top-bar {
            font-size: 13px;
          }
          
          .top-bar-left {
            gap: 24px;
          }
          
          .logo {
            font-size: 26px;
          }
          
          .contact-section {
            display: flex;
          }
          
          .contact-text {
            font-size: 12px;
          }
          
          .phone-link {
            font-size: 13px;
          }
        }

        /* Small desktop (1024px - 1199px) */
        @media (min-width: 1024px) and (max-width: 1199px) {
          .desktop-nav {
            display: flex;
            gap: 20px;
          }
          
          .mobile-button {
            display: none;
          }
          
          .contact-section {
            display: flex;
          }
          
          .nav-link {
            font-size: 14px;
            padding: 8px 10px;
          }
          
          .container {
            padding: 0 1.5rem;
          }
        }

        /* Large desktop (1200px+) */
        @media (min-width: 1200px) {
          .desktop-nav {
            display: flex;
            gap: 32px;
          }
          
          .mobile-button {
            display: none;
          }
          
          .contact-section {
            display: flex;
          }
          
          .container {
            padding: 0 2rem;
          }
          
          .logo {
            font-size: 28px;
          }
          
          .nav-link {
            font-size: 16px;
          }
          
          .top-bar {
            font-size: 14px;
          }
        }

        /* Ultra-wide screens (1400px+) */
        @media (min-width: 1400px) {
          .container {
            padding: 0 3rem;
          }
          
          .top-bar-content {
            padding: 0 3rem;
          }
          
          .desktop-nav {
            gap: 40px;
          }
        }

        /* Landscape mobile orientation */
        @media (max-height: 500px) and (orientation: landscape) {
          .top-bar {
            padding: 3px 1rem;
            font-size: 11px;
          }
          
          .nav-content {
            height: 50px;
          }
          
          .logo {
            font-size: 20px;
          }
          
          .mobile-menu {
            max-height: ${isMobileMenuOpen ? '300px' : '0'};
          }
          
          .mobile-menu-content {
            padding: 12px;
          }
          
          .mobile-nav-link {
            padding: 10px 0;
            font-size: 14px;
          }
        }

        /* High DPI displays */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .logo {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          
          .nav-link {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        }

        /* Animation for smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Prevent body scroll when mobile menu is open */
        ${isMobileMenuOpen ? 'body { overflow: hidden; }' : ''}

        /* Focus states for accessibility */
        .nav-link:focus,
        .phone-link:focus,
        .mobile-button:focus {
          outline: 2px solid var(--color-primary-500);
          outline-offset: 2px;
        }

        /* Hover states with better touch support */
        @media (hover: hover) {
          .nav-link:hover {
            color: var(--color-primary-500);
            background: rgba(255, 255, 255, 0.1);
          }

          .nav-link:hover::after {
            transform: scaleX(1);
          }

          .mobile-button:hover {
            background: rgba(255, 255, 255, 0.1);
            transform: scale(1.1);
          }

          .social-link:hover {
            color: var(--color-primary-500);
            opacity: 1;
            transform: scale(1.2);
            background: rgba(255, 255, 255, 0.2);
          }

          .logo:hover {
            color: var(--color-primary-500);
            transform: scale(1.05);
          }

          .phone-link:hover {
            color: var(--text-inverse);
            transform: scale(1.05);
          }

          .mobile-nav-link:hover {
            color: var(--color-primary-500);
            padding-left: 12px;
          }
        }

        /* Touch devices - remove hover effects */
        @media (hover: none) {
          .nav-link:active {
            color: var(--color-primary-500);
            background: rgba(255, 255, 255, 0.1);
          }

          .mobile-button:active {
            background: rgba(255, 255, 255, 0.2);
          }
        }

        /* Print styles */
        @media print {
          .navbar {
            display: none;
          }
        }

        /* Reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
          
          .navbar {
            transition: none;
          }
          
          .mobile-menu {
            transition: none;
          }
        }

        /* Dark mode support for systems that prefer it */
        @media (prefers-color-scheme: dark) {
          .navbar {
            background: ${isScrolled ? 'rgba(15, 23, 42, 0.95)' : 'var(--color-secondary-600)'};
          }
        }

        /* Container query support for modern browsers */
        @container (max-width: 768px) {
          .contact-section {
            display: none;
          }
        }
      `}</style>

      <nav className="navbar">
        {/* Top Bar */}
        <div className="top-bar">
          <div className="top-bar-content">
            <div className="top-bar-left">
              <div className="top-bar-item">
                <span>📍</span>
                <span>Nairobi, Kenya</span>
              </div>
              <div className="top-bar-item">
                <span>✉️</span>
                <span>ngumodaniel80@gmail.com</span>
              </div>
              <div className="top-bar-item">
                <span className="top-bar-highlight">🚀 We help you grow your business</span>
              </div>
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
            <Link href="/" className="logo">DigiByte</Link>
            
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
              <p className="contact-text">Have questions?</p>
              <a href="tel:+254742580239" className="phone-link">
                <Phone size={14} />
                +254 742 580 239
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="mobile-button"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
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
            <div className="mobile-contact">
              <a href="tel:+254742580239" className="phone-link">
                <Phone size={16} />
                Call: +254 742 580 239
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