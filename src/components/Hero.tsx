"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleContactUs = useCallback(() => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  }, []);

  const handleScrollDown = useCallback(() => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  }, []);

  const heroWrapperStyle: React.CSSProperties = {
    position: 'relative',
    width: '100vw',
    left: '50%',
    right: '50%',
    marginLeft: '-50vw',
    marginRight: '-50vw',
    overflow: 'hidden',
  };

  const heroSectionStyle: React.CSSProperties = {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '120px',
    paddingBottom: '60px',
    color: 'white',
    overflow: 'hidden',
    fontFamily: "'Inter', system-ui, sans-serif",
    width: '100vw',
    margin: 0,
    backgroundImage: "url('/images/slide1.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  };

  const overlayStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(12, 74, 110, 0.95) 0%, rgba(242, 109, 38, 0.85) 100%)',
    zIndex: 1,
  };

  const heroContentStyle: React.CSSProperties = {
    textAlign: 'center',
    maxWidth: '1100px',
    width: '100%',
    padding: '0 1rem',
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const getAnimatedStyle = (delay: number): React.CSSProperties => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: `all 1s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
  });

  return (
    <div style={heroWrapperStyle}>
      <section style={heroSectionStyle}>
        <div style={overlayStyle}></div>
        
        <div style={heroContentStyle}>
          {/* Icon/Badge */}
          <div 
            className="mb-4 sm:mb-6 md:mb-8 px-4"
            style={{
              ...getAnimatedStyle(0.1),
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              borderRadius: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" color="#f26d26" />
            <span className="text-xs sm:text-sm md:text-base font-semibold" style={{ color: '#ffffff' }}>
              Transforming Ideas Into Digital Reality
            </span>
          </div>

          {/* Main Headline */}
          <h1 
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-3 sm:mb-4 md:mb-6 px-2"
            style={{
              fontFamily: "'Poppins', sans-serif",
              color: '#ffffff',
              textShadow: '2px 2px 20px rgba(0, 0, 0, 0.5)',
              ...getAnimatedStyle(0.2)
            }}
          >
            Innovative IT Solutions for
            <span style={{ 
              display: 'block',
              background: 'linear-gradient(to right, #ffffff, #f26d26)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginTop: '0.25rem',
            }}>
              Modern Businesses
            </span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed mb-6 sm:mb-8 md:mb-10 max-w-3xl px-4"
            style={{
              color: '#f3f4f6',
              fontWeight: '300',
              ...getAnimatedStyle(0.3)
            }}
          >
            We craft stunning graphic designs, build powerful digital experiences, 
            and provide expert IT solutions that elevate your brand and drive growth.
          </p>

          {/* Features Grid */}
          <div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-10 w-full max-w-4xl px-4"
            style={getAnimatedStyle(0.4)}
          >
            {[
              { title: 'Graphic Design', desc: 'Logos, branding & UI/UX' },
              { title: 'Web Development', desc: 'Modern, responsive websites' },
              { title: 'IT Support', desc: 'Reliable tech solutions' }
            ].map((item, index) => (
              <div
                key={index}
                className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-2" style={{ color: '#ffffff' }}>
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm" style={{ color: '#e5e7eb' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 w-full px-4"
            style={getAnimatedStyle(0.5)}
          >
            <button 
              className="px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-3.5 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-bold w-full sm:w-auto sm:min-w-[180px] transition-all duration-300"
              style={{
                background: '#f26d26',
                color: 'white',
                boxShadow: '0 10px 30px rgba(242, 109, 38, 0.4)',
                border: 'none',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(242, 109, 38, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(242, 109, 38, 0.4)';
              }}
              onClick={handleContactUs}
              type="button"
            >
              Get Started Today
            </button>
            <button 
              className="px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-3.5 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-bold w-full sm:w-auto sm:min-w-[180px] transition-all duration-300"
              style={{
                background: 'transparent',
                color: 'white',
                border: '2px solid rgba(255, 255, 255, 0.5)',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.8)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              onClick={() => window.location.href = '#services'}
              type="button"
            >
              Our Services
            </button>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <button
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 sm:gap-2 z-20 transition-all duration-300"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'white',
            opacity: isVisible ? 0.7 : 0,
            transitionDelay: '0.6s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '1';
            e.currentTarget.style.transform = 'translateX(-50%) translateY(5px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '0.7';
            e.currentTarget.style.transform = 'translateX(-50%) translateY(0)';
          }}
          onClick={handleScrollDown}
          type="button"
          aria-label="Scroll down"
        >
          <span className="text-xs sm:text-sm font-medium">Explore More</span>
          <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" />
        </button>
      </section>
    </div>
  );
};

export default Hero;