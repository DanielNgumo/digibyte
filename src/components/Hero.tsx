"use client";

import React, { useState, useEffect } from 'react';
import { ArrowUp, ArrowLeft, ArrowRight } from 'lucide-react';
import { CSSProperties } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const totalSlides = 3;

  const slides = [
    {
      tagline: "Best IT Solutions",
      headline: "An Innovative IT Solutions Agency",
      subtitle: "Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Pellentesque aliquet dolor eget urna ultricies tincidunt.",
      background: "url('/images/slide1.jpg')",
    },
    {
      tagline: "Advanced Tech Services",
      headline: "Leading Digital Transformation",
      subtitle: "Explore cutting-edge solutions to boost your business efficiency and growth. Join us today!",
      background: "url('/images/slide2.jpg')",
    },
    {
      tagline: "Expert IT Support",
      headline: "Your Trusted IT Partner",
      subtitle: "Reliable support and innovative strategies for all your IT needs. Let's collaborate!",
      background: "url('/images/slide3.jpg')",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleReadMore = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactUs = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const styles: { [key: string]: CSSProperties } = {
    hero: {
      position: 'relative',
      minHeight: '100vh',
      background: 'var(--color-secondary-900)', // Using your dark blue color as fallback
      display: 'flex',
      alignItems: 'center',
      paddingTop: '80px', // Reduced for mobile
      color: 'var(--text-inverse)',
      overflow: 'hidden',
      fontFamily: 'var(--font-sans)',
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 16px', // Added horizontal padding for mobile
      position: 'relative',
      zIndex: 10,
      width: '100%',
    },
    carousel: {
      position: 'relative',
      width: '100%',
      height: '100%',
      display: 'flex',
      transition: 'transform 0.5s ease',
      transform: `translateX(-${currentSlide * 100}%)`,
    },
    slide: {
      minWidth: '100%',
      height: 'calc(100vh - 80px)', // Adjusted for mobile padding
      flexShrink: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'scroll',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    content: {
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'center',
      padding: '16px', // Mobile-first padding
      position: 'relative',
      zIndex: 2,
      width: '100%',
      boxSizing: 'border-box',
    },
    tagline: {
      color: 'var(--color-primary-500)', // Using your brand orange
      fontSize: 'clamp(1rem, 3vw, 1.25rem)', // More responsive sizing
      fontWeight: '600',
      marginBottom: '8px', // Reduced for mobile
      fontFamily: 'var(--font-heading)',
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      opacity: isVisible ? 1 : 0,
      transition: 'all 0.6s ease 0.1s',
    },
    headline: {
      fontSize: 'clamp(1.75rem, 8vw, 4rem)', // Better mobile scaling
      fontWeight: '800',
      lineHeight: '1.1', // Tighter for mobile
      marginBottom: '16px', // Reduced for mobile
      fontFamily: 'var(--font-heading)',
      color: '#ffffff',
      textShadow: '2px 2px 8px rgba(0, 0, 0, 0.9), 0 0 16px rgba(0, 0, 0, 0.7)',
      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      opacity: isVisible ? 1 : 0,
      transition: 'all 0.8s ease 0.2s',
    },
    subtitle: {
      fontSize: 'clamp(0.875rem, 3vw, 1.25rem)', // Better mobile readability
      color: 'var(--color-neutral-100)', // Light neutral for better contrast
      lineHeight: '1.5', // Adjusted for mobile
      marginBottom: '24px', // Reduced for mobile
      maxWidth: '100%', // Full width on mobile
      margin: '0 auto 24px auto',
      fontFamily: 'var(--font-sans)',
      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      opacity: isVisible ? 1 : 0,
      transition: 'all 0.8s ease 0.3s',
      paddingLeft: '8px',
      paddingRight: '8px',
    },
    ctaButtons: {
      display: 'flex',
      justifyContent: 'center',
      gap: '12px', // Reduced gap for mobile
      marginBottom: '32px', // Reduced for mobile
      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      opacity: isVisible ? 1 : 0,
      transition: 'all 0.8s ease 0.4s',
      flexWrap: 'wrap', // Allow wrapping on very small screens
    },
    primaryButton: {
      background: 'var(--color-primary-500)', // Brand orange
      color: 'var(--text-inverse)',
      padding: '10px 20px', // Smaller padding for mobile
      borderRadius: 'var(--radius-2xl)',
      fontSize: 'clamp(14px, 3vw, 16px)', // Responsive font size
      fontWeight: '600',
      fontFamily: 'var(--font-sans)',
      textDecoration: 'none',
      border: 'none',
      cursor: 'pointer',
      transition: 'all var(--transition-default)',
      boxShadow: 'var(--shadow-brand)',
      minWidth: '120px', // Ensure minimum touch target
      textAlign: 'center',
    },
    secondaryButton: {
      background: 'var(--color-secondary-500)', // Brand blue
      color: 'var(--text-inverse)',
      padding: '10px 20px', // Smaller padding for mobile
      borderRadius: 'var(--radius-2xl)',
      fontSize: 'clamp(14px, 3vw, 16px)', // Responsive font size
      fontWeight: '600',
      fontFamily: 'var(--font-sans)',
      textDecoration: 'none',
      border: 'none',
      cursor: 'pointer',
      transition: 'all var(--transition-default)',
      boxShadow: 'var(--shadow-brand-blue)',
      minWidth: '120px', // Ensure minimum touch target
      textAlign: 'center',
    },
    arrow: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'rgba(0, 0, 0, 0.5)',
      color: '#ffffff !important', // Force white color with !important
      border: 'none',
      borderRadius: '50%',
      width: 'clamp(36px, 8vw, 50px)', // Responsive arrow size
      height: 'clamp(36px, 8vw, 50px)', // Responsive arrow size
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      zIndex: 20,
      transition: 'all var(--transition-default)',
      backdropFilter: 'blur(10px)',
      touchAction: 'manipulation', // Better touch handling
    },
    leftArrow: {
      left: 'clamp(8px, 2vw, 16px)', // Responsive positioning
    },
    rightArrow: {
      right: 'clamp(8px, 2vw, 16px)', // Responsive positioning
    },
    scrollUp: {
      position: 'absolute',
      bottom: 'clamp(16px, 4vw, 24px)', // Responsive bottom spacing
      left: '50%',
      transform: isVisible ? 'translateX(-50%)' : 'translateX(-50%) translateY(20px)',
      width: 'clamp(36px, 8vw, 50px)', // Responsive size
      height: 'clamp(36px, 8vw, 50px)', // Responsive size
      background: 'var(--color-primary-500)', // Brand orange
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.6s ease 0.5s',
      opacity: isVisible ? 1 : 0,
      boxShadow: 'var(--shadow-brand)',
      touchAction: 'manipulation', // Better touch handling
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(45deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5))',
      zIndex: 1,
    },
  };

  return (
    <>
      <style jsx>{`
        /* Mobile First Responsive Styles */
        .hero-content { 
          padding: 16px;
        }
        
        .cta-buttons { 
          gap: 12px;
          flex-direction: column;
          align-items: center;
        }

        /* Small Mobile (up to 480px) */
        @media (max-width: 480px) {
          .hero-content {
            padding: 12px 8px;
          }
          
          .cta-buttons {
            gap: 8px;
          }
          
          .cta-buttons button {
            width: 100%;
            max-width: 200px;
          }
        }

        /* Large Mobile / Small Tablet (481px - 640px) */
        @media (min-width: 481px) and (max-width: 640px) {
          .hero-content { 
            padding: 20px 16px; 
          }
          
          .cta-buttons { 
            flex-direction: row;
            gap: 16px;
          }
        }

        /* Tablet (641px - 768px) */
        @media (min-width: 641px) and (max-width: 768px) {
          .hero-content { 
            padding: 24px 20px; 
          }
          
          .cta-buttons { 
            gap: 20px;
            flex-direction: row;
          }
        }

        /* Small Desktop / Large Tablet (769px - 1024px) */
        @media (min-width: 769px) and (max-width: 1024px) {
          .hero-content { 
            padding: 32px 24px; 
          }
          
          .cta-buttons { 
            gap: 24px;
          }
        }

        /* Desktop (1025px and up) */
        @media (min-width: 1025px) {
          .hero-content { 
            padding: var(--spacing-xl); 
          }
          
          .cta-buttons { 
            gap: var(--spacing-xl); 
          }
        }

        /* Large Desktop (1440px and up) */
        @media (min-width: 1440px) {
          .hero-content {
            padding: 48px;
          }
        }

        /* Hover Effects - Only on devices that support hover */
        @media (hover: hover) and (pointer: fine) {
          .primary-button:hover {
            transform: translateY(-2px);
            background: var(--color-primary-600);
            box-shadow: var(--shadow-brand);
          }
          
          .secondary-button:hover {
            transform: translateY(-2px);
            background: var(--color-secondary-600);
            box-shadow: var(--shadow-brand-blue);
          }
          
          .arrow:hover {
            background: rgba(0, 0, 0, 0.7);
            transform: translateY(-50%) scale(1.05);
            color: #ffffff !important;
          }
          
          .scroll-up:hover {
            transform: ${isVisible ? 'translateX(-50%) translateY(-3px)' : 'translateX(-50%) translateY(17px)'};
            background: var(--color-primary-600);
            box-shadow: var(--shadow-brand);
          }
        }

        /* Force white color for arrows - override any global styles */
        .arrow {
          color: #ffffff !important;
        }
        
        .arrow svg {
          color: #ffffff !important;
          fill: #ffffff !important;
        }
        
        .arrow svg path {
          stroke: #ffffff !important;
          fill: #ffffff !important;
        }

        /* Focus states for accessibility */
        .primary-button:focus,
        .secondary-button:focus,
        .arrow:focus,
        .scroll-up:focus {
          outline: 2px solid var(--color-primary-500);
          outline-offset: 2px;
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .arrow {
            background: rgba(0, 0, 0, 0.8);
            border: 1px solid #ffffff;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* Landscape orientation adjustments for mobile */
        @media (max-height: 600px) and (orientation: landscape) {
          .hero-content {
            padding: 8px 16px;
          }
          
          .hero-section {
            min-height: 100vh;
            padding-top: 60px;
          }
        }
      `}</style>

      <section style={styles.hero} className="hero-section">
        <div style={styles.overlay}></div>
        <div style={styles.container}>
          <div style={styles.carousel}>
            {slides.map((slide, index) => (
              <div
                key={index}
                style={{
                  ...styles.slide,
                  backgroundImage: slide.background,
                }}
              >
                <div style={styles.content} className="hero-content">
                  <div style={styles.tagline}>{slide.tagline}</div>
                  <h1 style={styles.headline}>{slide.headline}</h1>
                  <p style={styles.subtitle}>{slide.subtitle}</p>
                  <div style={styles.ctaButtons} className="cta-buttons">
                    <button 
                      style={styles.primaryButton} 
                      className="primary-button"
                      onClick={handleReadMore}
                    >
                      Read More
                    </button>
                    <button 
                      style={styles.secondaryButton} 
                      className="secondary-button"
                      onClick={handleContactUs}
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            style={{ ...styles.arrow, ...styles.leftArrow }}
            onClick={prevSlide}
            aria-label="Previous slide"
            className="arrow"
          >
            <ArrowLeft size="clamp(16, 4vw, 24)" style={{ color: '#ffffff', fill: '#ffffff' }} />
          </button>
          <button
            style={{ ...styles.arrow, ...styles.rightArrow }}
            onClick={nextSlide}
            aria-label="Next slide"
            className="arrow"
          >
            <ArrowRight size="clamp(16, 4vw, 24)" style={{ color: '#ffffff', fill: '#ffffff' }} />
          </button>
        </div>
        <div
          style={styles.scrollUp}
          className="scroll-up"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowUp size="clamp(16, 4vw, 24)" color="var(--text-inverse)" />
        </div>
      </section>
    </>
  );
};

export default Hero;