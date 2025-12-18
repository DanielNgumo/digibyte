"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { ArrowUp, ArrowLeft, ArrowRight } from 'lucide-react';

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
    
    // Auto-advance slides every 5 seconds
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides);
    }, 5000);
    
    return () => {
      clearInterval(interval);
    };
  }, [totalSlides]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const handleContactUs = useCallback(() => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  }, []);

  const handleScrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <style jsx>{`
        /* Hero Styles */
        .hero-wrapper {
          position: relative;
          width: 100vw;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          overflow: hidden;
        }

        .hero-section {
          position: relative;
          min-height: 100vh;
          background: #0c4a6e;
          display: flex;
          align-items: center;
          padding-top: 80px;
          color: white;
          overflow: hidden;
          font-family: 'Inter', system-ui, sans-serif;
          width: 100vw;
          margin: 0;
        }

        .hero-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1rem;
          position: relative;
          z-index: 10;
          width: 100%;
        }

        .hero-carousel {
          position: absolute;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          display: flex;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateX(-${currentSlide * 100}vw);
        }

        .hero-slide {
          flex: 0 0 100vw;
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
        }

        .hero-content {
          text-align: center;
          max-width: 1280px;
          width: 100%;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: calc(100vh - 160px);
        }

        .hero-tagline {
          color: #f26d26;
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          font-family: 'Poppins', sans-serif;
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? 'translateY(0)' : 'translateY(20px)'};
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;
        }

        .hero-headline {
          font-size: 2rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1rem;
          font-family: 'Poppins', sans-serif;
          color: #ffffff;
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9), 0 0 16px rgba(0, 0, 0, 0.7);
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? 'translateY(0)' : 'translateY(30px)'};
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
        }

        .hero-subtitle {
          font-size: 1rem;
          color: #f3f4f6;
          line-height: 1.5;
          margin-bottom: 2rem;
          max-width: 600px;
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? 'translateY(0)' : 'translateY(30px)'};
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
        }

        .hero-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? 'translateY(0)' : 'translateY(30px)'};
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s;
        }

        .hero-button {
          padding: 0.75rem 1.5rem;
          border-radius: 1.5rem;
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          min-width: 140px;
          text-align: center;
          display: inline-block;
        }

        .hero-button-primary {
          background: #f26d26;
          color: white;
          box-shadow: 0 4px 14px 0 rgba(242, 109, 38, 0.25);
        }

        .hero-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 20;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
        }

        .hero-arrow-left {
          left: 1rem;
        }

        .hero-arrow-right {
          right: 1rem;
        }

        .hero-scroll-up {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          width: 50px;
          height: 50px;
          background: #f26d26;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.5s;
          opacity: ${isVisible ? 1 : 0};
          border: none;
          box-shadow: 0 4px 14px 0 rgba(242, 109, 38, 0.25);
          z-index: 20;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4));
          z-index: 1;
        }

        .hero-indicators {
          position: absolute;
          bottom: 4rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.5rem;
          z-index: 20;
        }

        .hero-indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
        }

        .hero-indicator.active {
          background: #f26d26;
          transform: scale(1.2);
        }

        /* Mobile First Responsive Design */
        
        /* Small Mobile (up to 375px) */
        @media (max-width: 375px) {
          .hero-content {
            padding: 0 1rem;
          }
          
          .hero-tagline {
            font-size: 0.875rem;
            margin-bottom: 0.25rem;
          }
          
          .hero-headline {
            font-size: 1.5rem;
            margin-bottom: 0.75rem;
          }
          
          .hero-subtitle {
            font-size: 0.875rem;
            margin-bottom: 1.5rem;
          }
          
          .hero-buttons {
            flex-direction: column;
            align-items: center;
            gap: 0.75rem;
          }
          
          .hero-button {
            width: 90%;
            max-width: 280px;
            padding: 0.75rem 1rem;
            font-size: 0.9rem;
          }

          .hero-arrow {
            width: 40px;
            height: 40px;
          }

          .hero-arrow-left {
            left: 0.5rem;
          }

          .hero-arrow-right {
            right: 0.5rem;
          }

          .hero-scroll-up {
            width: 40px;
            height: 40px;
            bottom: 1rem;
          }

          .hero-indicators {
            bottom: 3rem;
          }
          
          .hero-indicator {
            width: 10px;
            height: 10px;
          }
        }

        /* Large Mobile (376px - 480px) */
        @media (min-width: 376px) and (max-width: 480px) {
          .hero-content {
            padding: 0 1.5rem;
          }
          
          .hero-tagline {
            font-size: 0.9375rem;
          }
          
          .hero-headline {
            font-size: 1.75rem;
            margin-bottom: 0.875rem;
          }
          
          .hero-subtitle {
            font-size: 0.9375rem;
            margin-bottom: 1.75rem;
          }
          
          .hero-buttons {
            flex-direction: column;
            align-items: center;
            gap: 0.875rem;
          }
          
          .hero-button {
            width: 85%;
            max-width: 250px;
            padding: 0.875rem 1.25rem;
          }
        }

        /* Small Tablet (481px - 640px) */
        @media (min-width: 481px) and (max-width: 640px) {
          .hero-content {
            padding: 0 2rem;
          }
          
          .hero-tagline {
            font-size: 1rem;
            margin-bottom: 0.5rem;
          }
          
          .hero-headline {
            font-size: 2.25rem;
            margin-bottom: 1rem;
          }
          
          .hero-subtitle {
            font-size: 1rem;
            margin-bottom: 1.875rem;
          }
          
          .hero-buttons {
            flex-direction: row;
            gap: 1rem;
          }
          
          .hero-button {
            width: auto;
            min-width: 140px;
            padding: 0.875rem 1.5rem;
          }
        }

        /* Tablet (641px - 768px) */
        @media (min-width: 641px) and (max-width: 768px) {
          .hero-content {
            padding: 0 2rem;
          }
          
          .hero-tagline {
            font-size: 1.125rem;
            margin-bottom: 0.625rem;
          }
          
          .hero-headline {
            font-size: 2.625rem;
            margin-bottom: 1.125rem;
          }
          
          .hero-subtitle {
            font-size: 1.125rem;
            margin-bottom: 2rem;
          }
          
          .hero-buttons {
            gap: 1.25rem;
          }
          
          .hero-button {
            min-width: 160px;
            padding: 1rem 1.75rem;
            font-size: 1rem;
          }
        }

        /* Large Tablet / Small Desktop (769px - 1024px) */
        @media (min-width: 769px) and (max-width: 1024px) {
          .hero-content {
            padding: 0 2rem;
          }
          
          .hero-tagline {
            font-size: 1.25rem;
            margin-bottom: 0.75rem;
          }
          
          .hero-headline {
            font-size: 3rem;
            margin-bottom: 1.25rem;
          }
          
          .hero-subtitle {
            font-size: 1.25rem;
            margin-bottom: 2.25rem;
          }
          
          .hero-buttons {
            gap: 1.5rem;
          }
          
          .hero-button {
            min-width: 180px;
            padding: 1.125rem 2rem;
            font-size: 1.0625rem;
          }
        }

        /* Desktop (1025px - 1439px) */
        @media (min-width: 1025px) and (max-width: 1439px) {
          .hero-content {
            padding: 0 2rem;
          }
          
          .hero-tagline {
            font-size: 1.375rem;
            margin-bottom: 0.875rem;
          }
          
          .hero-headline {
            font-size: 3.5rem;
            margin-bottom: 1.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.375rem;
            margin-bottom: 2.5rem;
          }
          
          .hero-buttons {
            gap: 1.75rem;
          }
          
          .hero-button {
            min-width: 200px;
            padding: 1.25rem 2.25rem;
            font-size: 1.125rem;
          }
        }

        /* Large Desktop (1440px and up) */
        @media (min-width: 1440px) {
          .hero-content {
            padding: 0 2rem;
          }
          
          .hero-tagline {
            font-size: 1.5rem;
            margin-bottom: 1rem;
          }
          
          .hero-headline {
            font-size: 4rem;
            margin-bottom: 1.75rem;
          }
          
          .hero-subtitle {
            font-size: 1.5rem;
            margin-bottom: 3rem;
          }
          
          .hero-buttons {
            gap: 2rem;
          }
          
          .hero-button {
            min-width: 220px;
            padding: 1.5rem 2.5rem;
            font-size: 1.1875rem;
          }
        }

        /* Hover effects (only on devices that support hover) */
        @media (hover: hover) and (pointer: fine) {
          .hero-button-primary:hover {
            transform: translateY(-2px);
            background: #e55a0f;
            box-shadow: 0 6px 20px 0 rgba(242, 109, 38, 0.4);
          }
          
          .hero-arrow:hover {
            background: rgba(0, 0, 0, 0.7);
            transform: translateY(-50%) scale(1.05);
          }
          
          .hero-scroll-up:hover {
            transform: translateX(-50%) translateY(-3px);
            background: #e55a0f;
            box-shadow: 0 6px 20px 0 rgba(242, 109, 38, 0.4);
          }

          .hero-indicator:hover {
            transform: scale(1.1);
          }
        }

        /* Landscape mobile adjustments */
        @media (max-height: 600px) and (orientation: landscape) {
          .hero-section {
            min-height: 100vh;
            padding-top: 60px;
          }
          
          .hero-content {
            padding: 0 1rem;
          }
          
          .hero-carousel {
            height: 100vh;
          }

          .hero-slide {
            height: 100vh;
          }
        }

        /* Accessibility */
        .hero-button:focus,
        .hero-arrow:focus,
        .hero-scroll-up:focus,
        .hero-indicator:focus {
          outline: 2px solid #f26d26;
          outline-offset: 2px;
        }

        @media (prefers-contrast: high) {
          .hero-arrow {
            background: rgba(0, 0, 0, 0.8);
            border: 1px solid white;
          }
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <div className="hero-wrapper">
        <section className="hero-section">
          <div className="hero-carousel">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="hero-slide"
                style={{ backgroundImage: slide.background }}
              >
                <div className="hero-overlay"></div>
                {index === currentSlide && (
                  <div className="hero-content">
                    <div className="hero-tagline">{slide.tagline}</div>
                    <h1 className="hero-headline">{slide.headline}</h1>
                    <p className="hero-subtitle">{slide.subtitle}</p>
                    <div className="hero-buttons">
                      <button 
                        className="hero-button hero-button-primary"
                        onClick={handleContactUs}
                        type="button"
                      >
                        Contact Us
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <button
            className="hero-arrow hero-arrow-left"
            onClick={prevSlide}
            aria-label="Previous slide"
            type="button"
          >
            <ArrowLeft size={20} />
          </button>
          
          <button
            className="hero-arrow hero-arrow-right"
            onClick={nextSlide}
            aria-label="Next slide"
            type="button"
          >
            <ArrowRight size={20} />
          </button>
          
          <div className="hero-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`hero-indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                type="button"
              />
            ))}
          </div>
          
          <button
            className="hero-scroll-up"
            onClick={handleScrollToTop}
            type="button"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </section>
      </div>
    </>
  );
};

export default Hero;