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

  const styles: { [key: string]: CSSProperties } = {
    hero: {
      position: 'relative',
      minHeight: '100vh',
      background: 'var(--color-secondary-900)', // Using your dark blue color as fallback
      display: 'flex',
      alignItems: 'center',
      paddingTop: '100px',
      color: 'var(--text-inverse)',
      overflow: 'hidden',
      fontFamily: 'var(--font-sans)',
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0',
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
      height: 'calc(100vh - 100px)',
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
      padding: 'var(--spacing-lg)',
      position: 'relative',
      zIndex: 2,
    },
    tagline: {
      color: 'var(--color-primary-500)', // Using your brand orange
      fontSize: '1.25rem',
      fontWeight: '600',
      marginBottom: 'var(--spacing-sm)',
      fontFamily: 'var(--font-heading)',
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      opacity: isVisible ? 1 : 0,
      transition: 'all 0.6s ease 0.1s',
    },
    headline: {
      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
      fontWeight: '800',
      lineHeight: '1.2',
      marginBottom: 'var(--spacing-md)',
      fontFamily: 'var(--font-heading)',
      color: '#ffffff',
      textShadow: '2px 2px 8px rgba(0, 0, 0, 0.9), 0 0 16px rgba(0, 0, 0, 0.7)',
      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      opacity: isVisible ? 1 : 0,
      transition: 'all 0.8s ease 0.2s',
    },
    subtitle: {
      fontSize: 'clamp(1rem, 2vw, 1.25rem)',
      color: 'var(--color-neutral-100)', // Light neutral for better contrast
      lineHeight: '1.6',
      marginBottom: 'var(--spacing-xl)',
      maxWidth: '600px',
      margin: `0 auto var(--spacing-xl) auto`,
      fontFamily: 'var(--font-sans)',
      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      opacity: isVisible ? 1 : 0,
      transition: 'all 0.8s ease 0.3s',
    },
    ctaButtons: {
      display: 'flex',
      justifyContent: 'center',
      gap: 'var(--spacing-lg)',
      marginBottom: 'var(--spacing-xl)',
      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      opacity: isVisible ? 1 : 0,
      transition: 'all 0.8s ease 0.4s',
    },
    primaryButton: {
      background: 'var(--color-primary-500)', // Brand orange
      color: 'var(--text-inverse)',
      padding: '12px 24px',
      borderRadius: 'var(--radius-2xl)',
      fontSize: '16px',
      fontWeight: '600',
      fontFamily: 'var(--font-sans)',
      textDecoration: 'none',
      border: 'none',
      cursor: 'pointer',
      transition: 'all var(--transition-default)',
      boxShadow: 'var(--shadow-brand)',
    },
    secondaryButton: {
      background: 'var(--color-secondary-500)', // Brand blue
      color: 'var(--text-inverse)',
      padding: '12px 24px',
      borderRadius: 'var(--radius-2xl)',
      fontSize: '16px',
      fontWeight: '600',
      fontFamily: 'var(--font-sans)',
      textDecoration: 'none',
      border: 'none',
      cursor: 'pointer',
      transition: 'all var(--transition-default)',
      boxShadow: 'var(--shadow-brand-blue)',
    },
    arrow: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'rgba(0, 0, 0, 0.5)',
      color: 'var(--text-inverse)',
      border: 'none',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      zIndex: 20,
      transition: 'all var(--transition-default)',
      backdropFilter: 'blur(10px)',
    },
    leftArrow: {
      left: 'var(--spacing-lg)',
    },
    rightArrow: {
      right: 'var(--spacing-lg)',
    },
    scrollUp: {
      position: 'absolute',
      bottom: 'var(--spacing-lg)',
      left: '50%',
      transform: isVisible ? 'translateX(-50%)' : 'translateX(-50%) translateY(20px)',
      width: '40px',
      height: '40px',
      background: 'var(--color-primary-500)', // Brand orange
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.6s ease 0.5s',
      opacity: isVisible ? 1 : 0,
      boxShadow: 'var(--shadow-brand)',
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
        @media (min-width: 640px) {
          .hero-content { 
            padding: var(--spacing-xl); 
          }
          .cta-buttons { 
            gap: var(--spacing-xl); 
          }
        }
        .primary-button:hover {
          transform: translateY(-3px);
          background: var(--color-primary-600);
          box-shadow: var(--shadow-brand);
        }
        .secondary-button:hover {
          transform: translateY(-3px);
          background: var(--color-secondary-600);
          box-shadow: var(--shadow-brand-blue);
        }
        .arrow:hover {
          background: rgba(0, 0, 0, 0.7);
          transform: translateY(-50%) scale(1.1);
        }
        .scroll-up:hover {
          transform: ${isVisible ? 'translateX(-50%) translateY(-3px)' : 'translateX(-50%) translateY(17px)'};
          background: var(--color-primary-600);
          box-shadow: var(--shadow-brand);
        }
      `}</style>

      <section style={styles.hero}>
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
                    <button style={styles.primaryButton} className="primary-button">Read More</button>
                    <button style={styles.secondaryButton} className="secondary-button">Contact Us</button>
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
            <ArrowLeft size={20} />
          </button>
          <button
            style={{ ...styles.arrow, ...styles.rightArrow }}
            onClick={nextSlide}
            aria-label="Next slide"
            className="arrow"
          >
            <ArrowRight size={20} />
          </button>
        </div>
        <div
          style={styles.scrollUp}
          className="scroll-up"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowUp size={20} color="var(--text-inverse)" />
        </div>
      </section>
    </>
  );
};

export default Hero;