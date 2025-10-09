"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Phone, MapPin, Mail } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Optimized scroll handler with throttling
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 100;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }

    setIsMobileMenuOpen(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        {/* Top Bar */}
        <div className="top-bar">
          <div className="top-bar-content">
            <div className="top-bar-info">
              <div className="info-item">
                <MapPin size={12} />
                <span className="info-text">Nairobi, Kenya</span>
              </div>
              <div className="info-item">
                <Mail size={12} />
                <span className="info-text">ngumodaniel80@gmail.com</span>
              </div>
            </div>
            <div className="top-bar-cta">
              <span>🚀 We help you grow your business</span>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="nav-main">
          <div className="nav-container">
            <Link href="/" className="logo">
              <div className="logo-container">
                <img 
                  src="/logo.png" 
                  alt="DigiKenya Logo" 
                  className="logo-image" 
                  width={40}
                  height={40}
                />
                <span className="logo-text">DigiKenya</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="nav-links">
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

            {/* Contact Info */}
            <div className="nav-contact">
              <Phone size={16} />
              <div className="contact-info">
                <span className="contact-label">Call us:</span>
                <a href="tel:+254742580239" className="contact-number">
                  +254 742 580 239
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="mobile-toggle"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-content">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="mobile-link"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <div className="mobile-contact">
              <a href="tel:+254742580239" className="mobile-phone">
                <Phone size={16} />
                +254 742 580 239
              </a>
            </div>
          </div>
        </div>

        {/* Overlay */}
        {isMobileMenuOpen && (
          <div className="overlay" onClick={() => setIsMobileMenuOpen(false)} />
        )}
      </nav>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          font-family: var(--font-sans);
          will-change: transform;
        }

        .top-bar {
          background: #111827;
          color: #ffffff;
          padding: 8px 0;
          font-size: 13px;
        }

        .top-bar-content {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .top-bar-info {
          display: flex;
          gap: 24px;
          color: #ffffff;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #ffffff;
        }

        .info-item svg {
          color: #ffffff;
        }

        .top-bar-cta {
          color: #ffffff;
          font-weight: 500;
        }

        .nav-main {
          background: var(--color-secondary-500);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: background, backdrop-filter, box-shadow;
        }

        .navbar.scrolled .nav-main {
          background: rgba(4, 140, 204, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .nav-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1rem;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          text-decoration: none;
          flex-shrink: 0;
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: 12px;
          transition: all 0.3s ease;
        }

        .logo:hover .logo-container {
          transform: scale3d(1.05, 1.05, 1);
        }

        .logo-image {
          width: 40px;
          height: 40px;
          object-fit: contain;
          flex-shrink: 0;
          border-radius: 6px;
        }

        .logo-text {
          font-size: 28px;
          font-weight: 800;
          color: var(--text-inverse);
          font-family: var(--font-heading);
          transition: color 0.3s ease;
          white-space: nowrap;
        }

        .logo:hover .logo-text {
          color: #ffd700;
        }

        .nav-links {
          display: none;
          flex: 1;
          justify-content: center;
          gap: 32px;
          margin: 0 2rem;
        }

        .nav-link {
          color: var(--text-inverse);
          text-decoration: none;
          font-weight: 500;
          font-size: 16px;
          padding: 8px 16px;
          border-radius: 8px;
          transition: all 0.3s ease;
          position: relative;
          will-change: transform;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 16px;
          right: 16px;
          height: 2px;
          background: #ffd700;
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .nav-link:hover {
          color: #ffd700;
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-1px);
        }

        .nav-link:hover::after {
          transform: scaleX(1);
        }

        .nav-contact {
          display: none;
          align-items: center;
          gap: 12px;
          padding: 12px 20px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .contact-info {
          display: flex;
          flex-direction: column;
        }

        .contact-label {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1;
        }

        .contact-number {
          font-size: 14px;
          font-weight: 600;
          color: #ffd700;
          text-decoration: none;
          line-height: 1;
          transition: color 0.3s ease;
        }

        .contact-number:hover {
          color: var(--text-inverse);
        }

        .mobile-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          background: none;
          border: none;
          color: var(--text-inverse);
          cursor: pointer;
          padding: 8px;
          border-radius: 8px;
          transition: all 0.3s ease;
          touch-action: manipulation;
        }

        .mobile-toggle:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: var(--color-secondary-500);
          backdrop-filter: blur(10px);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          transform: translateY(-100%);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          will-change: transform, opacity;
        }

        .mobile-menu.open {
          transform: translateY(0);
          opacity: 1;
          visibility: visible;
        }

        .mobile-menu-content {
          padding: 24px;
        }

        .mobile-link {
          display: block;
          color: var(--text-inverse);
          text-decoration: none;
          font-size: 18px;
          font-weight: 500;
          padding: 16px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .mobile-link:last-of-type {
          border-bottom: none;
        }

        .mobile-link:hover {
          color: #ffd700;
          padding-left: 16px;
        }

        .mobile-contact {
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
        }

        .mobile-phone {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #ffd700;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          padding: 12px 24px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 25px;
          transition: all 0.3s ease;
          touch-action: manipulation;
        }

        .mobile-phone:hover {
          color: var(--text-inverse);
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 40;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* Mobile First Responsive Design */
        .info-text {
          display: none;
        }

        /* Small Mobile (up to 480px) */
        @media (max-width: 480px) {
          .top-bar {
            padding: 6px 0;
            font-size: 12px;
          }

          .top-bar-content {
            padding: 0 0.75rem;
          }

          .top-bar-cta {
            display: none;
          }

          .nav-container {
            height: 60px;
            padding: 0 0.75rem;
          }

          .logo-image {
            width: 32px;
            height: 32px;
          }

          .logo-text {
            font-size: 22px;
          }
        }

        /* Large Mobile (481px - 768px) */
        @media (min-width: 481px) and (max-width: 768px) {
          .info-text {
            display: inline;
          }

          .top-bar-info .info-item:nth-child(2) {
            display: none;
          }

          .logo-image {
            width: 36px;
            height: 36px;
          }

          .logo-text {
            font-size: 24px;
          }
        }

        /* Tablet (769px - 1023px) */
        @media (min-width: 769px) and (max-width: 1023px) {
          .info-text {
            display: inline;
          }

          .nav-contact {
            display: flex;
          }

          .top-bar-cta {
            display: block;
          }

          .logo-image {
            width: 38px;
            height: 38px;
          }

          .logo-text {
            font-size: 26px;
          }
        }

        /* Desktop (1024px and up) */
        @media (min-width: 1024px) {
          .info-text {
            display: inline;
          }

          .nav-links {
            display: flex;
          }

          .nav-contact {
            display: flex;
          }

          .mobile-toggle {
            display: none;
          }

          .top-bar-cta {
            display: block;
          }

          .logo-image {
            width: 40px;
            height: 40px;
          }

          .logo-text {
            font-size: 28px;
          }
        }

        /* Large Desktop (1200px and up) */
        @media (min-width: 1200px) {
          .nav-container,
          .top-bar-content {
            padding: 0 2rem;
          }

          .nav-links {
            gap: 40px;
          }
        }

        /* Accessibility */
        .nav-link:focus,
        .mobile-link:focus,
        .mobile-toggle:focus,
        .contact-number:focus {
          outline: 2px solid #ffd700;
          outline-offset: 2px;
        }

        /* Reduced Motion */
        @media (prefers-reduced-motion: reduce) {
          .nav-main,
          .mobile-menu,
          .nav-link,
          .mobile-link,
          .logo-container,
          .mobile-phone {
            transition: none !important;
            animation: none !important;
          }

          .logo:hover .logo-container {
            transform: none;
          }
        }

        /* High contrast mode */
        @media (prefers-contrast: high) {
          .nav-main {
            border-bottom: 2px solid #ffffff;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;