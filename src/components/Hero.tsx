"use client";

import React, { useState, useEffect, useCallback, memo } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import Image from 'next/image';

// Memoized feature card component
const FeatureCard = memo(({ title, desc }: { title: string; desc: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl transition-all duration-300"
      style={{
        background: isHovered ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
        willChange: 'transform',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-2 text-white">
        {title}
      </h3>
      <p className="text-xs sm:text-sm text-gray-200">
        {desc}
      </p>
    </div>
  );
});

FeatureCard.displayName = 'FeatureCard';

// Memoized button component
const CTAButton = memo(({ 
  onClick, 
  variant = 'primary',
  children 
}: { 
  onClick: () => void; 
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseStyle: React.CSSProperties = {
    cursor: 'pointer',
    border: variant === 'primary' ? 'none' : '2px solid rgba(255, 255, 255, 0.5)',
    background: variant === 'primary' ? '#f26d26' : 'transparent',
    color: 'white',
    backdropFilter: variant === 'secondary' ? 'blur(10px)' : undefined,
    boxShadow: variant === 'primary' 
      ? (isHovered ? '0 15px 40px rgba(242, 109, 38, 0.5)' : '0 10px 30px rgba(242, 109, 38, 0.4)')
      : undefined,
    transform: isHovered 
      ? (variant === 'primary' ? 'translateY(-3px) scale(1.05)' : 'translateY(-3px)')
      : 'translateY(0) scale(1)',
    borderColor: variant === 'secondary' 
      ? (isHovered ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.5)')
      : undefined,
    willChange: 'transform',
  };

  return (
    <button 
      className="px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-3.5 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-bold w-full sm:w-auto sm:min-w-[180px] transition-all duration-300"
      style={baseStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
});

CTAButton.displayName = 'CTAButton';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Use requestAnimationFrame for smoother animation
    const timer = requestAnimationFrame(() => {
      setIsVisible(true);
    });
    return () => cancelAnimationFrame(timer);
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

  const handleServicesClick = useCallback(() => {
    window.location.href = '#services';
  }, []);

  const features = [
    { title: 'Graphic Design', desc: 'Logos, branding & UI/UX' },
    { title: 'Web Development', desc: 'Modern, responsive websites' },
    { title: 'IT Support', desc: 'Reliable tech solutions' }
  ];

  return (
    <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
      <section 
        className="relative min-h-screen flex items-center justify-center pt-[120px] pb-[60px] text-white overflow-hidden w-screen m-0"
      >
        {/* Background Image Container */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/slide1.jpg"
            alt="Hero Background"
            fill
            priority
            quality={80}
            className="object-cover"
            sizes="100vw"
          />
        </div>
        
        {/* Overlay */}
        <div 
          className="absolute inset-0 z-[1]"
          style={{
            background: 'linear-gradient(135deg, rgba(12, 74, 110, 0.95) 0%, rgba(242, 109, 38, 0.85) 100%)',
          }}
        />
        
        {/* Content */}
        <div className="text-center max-w-[1100px] w-full px-4 relative z-[2] flex flex-col items-center justify-center">
          {/* Badge */}
          <div 
            className="mb-4 sm:mb-6 md:mb-8 px-4 inline-flex items-center gap-2 py-2 rounded-full border"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.1s',
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              borderColor: 'rgba(255, 255, 255, 0.2)',
            }}
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" color="#f26d26" />
            <span className="text-xs sm:text-sm md:text-base font-semibold text-white">
              Transforming Ideas Into Digital Reality
            </span>
          </div>

          {/* Headline */}
          <h1 
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-3 sm:mb-4 md:mb-6 px-2"
            style={{
              color: '#ffffff',
              textShadow: '2px 2px 20px rgba(0, 0, 0, 0.5)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
            }}
          >
            Innovative IT Solutions for
            <span className="block mt-1" style={{ 
              background: 'linear-gradient(to right, #ffffff, #f26d26)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
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
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s',
            }}
          >
            We craft stunning graphic designs, build powerful digital experiences, 
            and provide expert IT solutions that elevate your brand and drive growth.
          </p>

          {/* Features */}
          <div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-10 w-full max-w-4xl px-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.4s',
            }}
          >
            {features.map((item, index) => (
              <FeatureCard key={index} title={item.title} desc={item.desc} />
            ))}
          </div>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 w-full px-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.5s',
            }}
          >
            <CTAButton onClick={handleContactUs} variant="primary">
              Get Started Today
            </CTAButton>
            <CTAButton onClick={handleServicesClick} variant="secondary">
              Our Services
            </CTAButton>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 sm:gap-2 z-20 transition-all duration-300 bg-transparent border-none cursor-pointer text-white"
          style={{
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
          aria-label="Scroll down to explore more content"
        >
          <span className="text-xs sm:text-sm font-medium">Explore More</span>
          <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" />
        </button>
      </section>
    </div>
  );
};

export default memo(Hero);