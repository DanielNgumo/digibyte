"use client";

import React, { useRef, useEffect, useState, useCallback, memo } from 'react';
import { Palette, Smartphone, Globe, Code, Database, Shield } from 'lucide-react';

// Service type definition
interface Service {
  icon: React.ReactElement<any>;
  title: string;
  description: string;
  features: string[];
}

// Memoized service card component
const ServiceCard = memo(({ 
  service, 
  isActive 
}: { 
  service: Service; 
  isActive: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`service-card-carousel ${isActive ? 'active' : 'side'}`}
      role="article"
      aria-label={`${service.title} service`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        willChange: isActive ? 'transform, opacity' : 'auto',
      }}
    >
      <div className="icon-wrapper-carousel">
        {React.cloneElement(service.icon, {
          size: 32,
          strokeWidth: 2
        } as any)}
      </div>
      <h3 className="service-card-title-carousel">
        {service.title}
      </h3>
      <p className="service-card-description-carousel">
        {service.description}
      </p>
      <div className="features-list-carousel">
        {service.features.map((feature: string, featureIndex: number) => (
          <span key={featureIndex} className="feature-tag-carousel">
            {feature}
          </span>
        ))}
      </div>
    </div>
  );
});

ServiceCard.displayName = 'ServiceCard';

// Memoized indicator component
const Indicator = memo(({ 
  index, 
  isActive, 
  onClick 
}: { 
  index: number; 
  isActive: boolean; 
  onClick: () => void;
}) => {
  return (
    <div
      className={`indicator ${isActive ? 'active' : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`Go to service ${index + 1}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    />
  );
});

Indicator.displayName = 'Indicator';

const Services = memo(() => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const scrollStartRef = useRef(0);
  const dragThresholdRef = useRef(5);
  const hasDraggedRef = useRef(false);

  const services = [
    {
      icon: <Palette size={32} />,
      title: "Graphics Design",
      description: "Creative visual solutions, branding, and digital artwork that captivate your audience and strengthen your brand identity.",
      features: ["Logo Design", "Brand Identity", "Digital Art", "Print Design"]
    },
    {
      icon: <Smartphone size={32} />,
      title: "App Development",
      description: "Native and cross-platform mobile applications with seamless user experiences and robust functionality.",
      features: ["iOS Apps", "Android Apps", "Cross-Platform", "App Store Optimization"]
    },
    {
      icon: <Globe size={32} />,
      title: "Web Design",
      description: "Modern, responsive websites that engage users and convert visitors into customers with stunning designs.",
      features: ["Responsive Design", "UI/UX Design", "Landing Pages", "E-commerce Design"]
    },
    {
      icon: <Code size={32} />,
      title: "Web Development",
      description: "Robust, scalable web applications and systems built with the latest technologies and best practices.",
      features: ["Frontend Development", "Backend Systems", "API Integration", "Performance Optimization"]
    },
    {
      icon: <Database size={32} />,
      title: "Database Solutions",
      description: "Efficient data management systems and database architecture for optimal performance and security.",
      features: ["Database Design", "Data Migration", "Performance Tuning", "Backup Solutions"]
    },
    {
      icon: <Shield size={32} />,
      title: "IT Security",
      description: "Comprehensive security solutions to protect your digital assets and ensure business continuity.",
      features: ["Security Audits", "Data Protection", "Network Security", "Compliance"]
    },
  ];

  const handleScroll = useCallback(() => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const cardWidth = 300;
    const scrollLeft = container.scrollLeft;
    const containerCenter = scrollLeft + container.offsetWidth / 2;
    
    let closestIndex = 0;
    let closestDistance = Infinity;
    
    services.forEach((_, index) => {
      const cardCenter = 2 * 16 + (index * (cardWidth + 16)) + cardWidth / 2;
      const distance = Math.abs(cardCenter - containerCenter);
      
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });
    
    setActiveIndex(closestIndex);
  }, []);

  const scrollToIndex = useCallback((index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = 300;
      const gap = 16;
      const scrollPosition = index * (cardWidth + gap) + 2 * 16 - (scrollContainerRef.current.offsetWidth / 2 - cardWidth / 2);
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleMouseDown = (e: MouseEvent) => {
      hasDraggedRef.current = false;
      setIsDragging(true);
      startXRef.current = e.clientX;
      scrollStartRef.current = container.scrollLeft;
      container.style.scrollBehavior = 'auto';
      container.classList.add('dragging');
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      
      const x = e.clientX - startXRef.current;
      
      if (Math.abs(x) > dragThresholdRef.current) {
        hasDraggedRef.current = true;
        container.scrollLeft = scrollStartRef.current - x;
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      container.style.scrollBehavior = 'smooth';
      container.classList.remove('dragging');
    };

    const handleMouseLeave = () => {
      setIsDragging(false);
      container.style.scrollBehavior = 'smooth';
      container.classList.remove('dragging');
    };

    container.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isDragging]);

  return (
    <>
      <style>{`
        .services-carousel-section {
          padding: clamp(2rem, 8vw, 6rem) 0;
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
          font-family: 'Inter', system-ui, sans-serif;
          contain: layout style;
        }

        .services-carousel-header {
          text-align: center;
          margin-bottom: clamp(1.5rem, 6vw, 4rem);
          padding: 0 clamp(0.75rem, 4vw, 2rem);
        }

        .services-carousel-tagline {
          color: #f26d26;
          font-size: clamp(0.75rem, 2.5vw, 1rem);
          font-weight: 600;
          font-family: 'Poppins', system-ui, sans-serif;
          margin-bottom: clamp(0.5rem, 2vw, 1rem);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          display: block;
        }

        .services-carousel-title {
          font-size: clamp(1.5rem, 6vw, 3rem);
          font-weight: 700;
          font-family: 'Poppins', system-ui, sans-serif;
          color: #1f2937;
          margin-bottom: clamp(0.75rem, 3vw, 1.5rem);
          line-height: 1.2;
        }

        .services-carousel-description {
          font-size: clamp(0.9rem, 2.5vw, 1.125rem);
          color: #6b7280;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .carousel-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 clamp(0.75rem, 4vw, 2rem);
          width: 100%;
          box-sizing: border-box;
        }

        .carousel-wrapper {
          overflow-x: auto;
          scroll-behavior: smooth;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding: clamp(1rem, 4vw, 2rem) 0;
          cursor: grab;
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          will-change: scroll-position;
        }

        .carousel-wrapper::-webkit-scrollbar {
          display: none;
        }

        .carousel-wrapper.dragging {
          cursor: grabbing;
          user-select: none;
        }

        .carousel-track {
          display: flex;
          gap: clamp(0.75rem, 2vw, 1.5rem);
          padding: 0 clamp(1rem, 3vw, 2rem);
          width: fit-content;
          user-select: none;
          -webkit-user-select: none;
        }

        .service-card-carousel {
          flex: 0 0 clamp(250px, 80vw, 320px);
          min-width: clamp(250px, 80vw, 320px);
          height: auto;
          min-height: clamp(350px, 60vw, 450px);
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: clamp(0.75rem, 2vw, 1.25rem);
          padding: clamp(1rem, 3vw, 1.75rem);
          display: flex;
          flex-direction: column;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0.6;
          transform: scale(0.85) translateY(40px);
          pointer-events: none;
          user-select: none;
        }

        .service-card-carousel.active {
          opacity: 1;
          transform: scale(1) translateY(0);
          box-shadow: 0 20px 40px rgba(242, 109, 38, 0.15);
          border-color: #f26d26;
          pointer-events: auto;
        }

        .service-card-carousel.side {
          opacity: 0.5;
        }

        .icon-wrapper-carousel {
          width: clamp(48px, 10vw, 64px);
          height: clamp(48px, 10vw, 64px);
          background: #fef3e8;
          border-radius: clamp(0.625rem, 2vw, 1rem);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #f26d26;
          margin-bottom: clamp(1rem, 2vw, 1.5rem);
          flex-shrink: 0;
          transition: all 0.3s ease;
          contain: layout;
        }

        .service-card-carousel.active .icon-wrapper-carousel {
          background: #f26d26;
          color: white;
          transform: scale(1.1);
        }

        .service-card-title-carousel {
          font-size: clamp(1rem, 3vw, 1.375rem);
          font-weight: 600;
          font-family: 'Poppins', system-ui, sans-serif;
          color: #1f2937;
          margin-bottom: clamp(0.5rem, 1.5vw, 0.875rem);
          line-height: 1.3;
        }

        .service-card-carousel.active .service-card-title-carousel {
          color: #f26d26;
        }

        .service-card-description-carousel {
          font-size: clamp(0.85rem, 2vw, 1rem);
          color: #6b7280;
          line-height: 1.5;
          margin-bottom: clamp(0.75rem, 2vw, 1.25rem);
          flex: 1;
        }

        .features-list-carousel {
          display: flex;
          flex-wrap: wrap;
          gap: clamp(0.4rem, 1.5vw, 0.75rem);
          margin-top: auto;
        }

        .feature-tag-carousel {
          background: #f1f5f9;
          color: #475569;
          padding: clamp(0.3rem, 1vw, 0.5rem) clamp(0.6rem, 1.5vw, 0.875rem);
          border-radius: clamp(0.375rem, 1vw, 0.5rem);
          font-size: clamp(0.7rem, 1.5vw, 0.875rem);
          font-weight: 500;
          border: 1px solid #e2e8f0;
          line-height: 1.2;
          white-space: nowrap;
        }

        .carousel-indicators {
          display: flex;
          justify-content: center;
          gap: clamp(0.375rem, 1.5vw, 0.75rem);
          margin-top: clamp(1.5rem, 4vw, 2.5rem);
          flex-wrap: wrap;
        }

        .indicator {
          width: clamp(8px, 2vw, 10px);
          height: clamp(8px, 2vw, 10px);
          border-radius: 50%;
          background: #d1d5db;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid transparent;
          will-change: background-color, width;
        }

        .indicator.active {
          background: #f26d26;
          width: clamp(24px, 6vw, 30px);
          border-radius: 5px;
        }

        @media (max-width: 320px) {
          .services-carousel-section {
            padding: 1.5rem 0;
          }

          .carousel-wrapper {
            padding: 1rem 0;
          }

          .carousel-track {
            padding: 0 0.5rem;
            gap: 0.75rem;
          }

          .service-card-carousel {
            flex: 0 0 85vw;
            min-width: 85vw;
            height: auto;
            min-height: 340px;
            padding: 1rem;
          }

          .services-carousel-title {
            font-size: 1.375rem;
          }

          .services-carousel-description {
            font-size: 0.875rem;
          }
        }

        @media (min-width: 321px) and (max-width: 480px) {
          .services-carousel-section {
            padding: 2rem 0;
          }

          .carousel-wrapper {
            padding: 1.25rem 0;
          }

          .carousel-track {
            padding: 0 0.75rem;
            gap: 1rem;
          }

          .service-card-carousel {
            flex: 0 0 80vw;
            min-width: 80vw;
            height: auto;
            min-height: 350px;
            padding: 1.25rem;
          }

          .services-carousel-description {
            font-size: 0.9rem;
          }
        }

        @media (min-width: 481px) and (max-width: 640px) {
          .services-carousel-section {
            padding: 2.5rem 0;
          }

          .carousel-track {
            padding: 0 1rem;
            gap: 1rem;
          }

          .service-card-carousel {
            flex: 0 0 70vw;
            min-width: 260px;
            height: auto;
            min-height: 360px;
            padding: 1.25rem;
          }
        }

        @media (min-width: 641px) and (max-width: 768px) {
          .services-carousel-section {
            padding: 3.5rem 0;
          }

          .carousel-track {
            padding: 0 1.5rem;
            gap: 1.25rem;
          }

          .service-card-carousel {
            flex: 0 0 50%;
            min-width: 280px;
            height: auto;
            min-height: 380px;
            padding: 1.5rem;
          }

          .services-carousel-title {
            font-size: 2.25rem;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .services-carousel-section {
            padding: 4rem 0;
          }

          .carousel-track {
            padding: 0 1.5rem;
            gap: 1.25rem;
          }

          .service-card-carousel {
            flex: 0 0 45%;
            min-width: 280px;
            height: auto;
            min-height: 380px;
            padding: 1.5rem;
          }
        }

        @media (min-width: 1025px) and (max-width: 1439px) {
          .services-carousel-section {
            padding: 5rem 0;
          }

          .carousel-track {
            padding: 0 2rem;
            gap: 1.5rem;
          }

          .service-card-carousel {
            flex: 0 0 300px;
            min-width: 300px;
            height: auto;
            min-height: 420px;
            padding: 1.75rem;
          }
        }

        @media (min-width: 1440px) {
          .services-carousel-section {
            padding: 6rem 0;
          }

          .carousel-track {
            padding: 0 2rem;
            gap: 1.5rem;
          }

          .service-card-carousel {
            flex: 0 0 320px;
            min-width: 320px;
            height: auto;
            min-height: 450px;
            padding: 2rem;
          }
        }

        @media (max-height: 600px) and (orientation: landscape) {
          .services-carousel-section {
            padding: 1.5rem 0;
          }

          .carousel-wrapper {
            padding: 1rem 0;
          }

          .services-carousel-header {
            margin-bottom: 1.5rem;
          }

          .service-card-carousel {
            min-height: 300px;
          }

          .carousel-indicators {
            margin-top: 1rem;
          }
        }

        @media (hover: hover) and (pointer: fine) {
          .indicator:hover {
            background: #f26d26;
            transform: scale(1.1);
          }

          .carousel-wrapper {
            cursor: grab;
          }

          .carousel-wrapper.dragging {
            cursor: grabbing;
          }
        }

        @media (hover: none) and (pointer: coarse) {
          .carousel-wrapper {
            cursor: default;
          }

          .indicator:active {
            transform: scale(1.15);
          }
        }

        .indicator:focus {
          outline: 2px solid #f26d26;
          outline-offset: 2px;
        }

        @media (prefers-contrast: high) {
          .service-card-carousel {
            border: 2px solid #1f2937;
          }

          .feature-tag-carousel {
            border: 2px solid #475569;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .carousel-wrapper {
            scroll-behavior: auto;
          }

          .service-card-carousel,
          .icon-wrapper-carousel,
          .indicator {
            transition: none !important;
          }
        }

        @media (prefers-color-scheme: dark) {
          .services-carousel-section {
            background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
          }

          .services-carousel-title {
            color: #ffffff;
          }

          .services-carousel-description {
            color: #d1d5db;
          }

          .service-card-carousel {
            background: #374151;
            border-color: #4b5563;
          }

          .service-card-carousel.active {
            border-color: #f26d26;
          }

          .service-card-title-carousel {
            color: #ffffff;
          }

          .service-card-description-carousel {
            color: #d1d5db;
          }

          .feature-tag-carousel {
            background: #4b5563;
            color: #e5e7eb;
            border-color: #6b7280;
          }

          .icon-wrapper-carousel {
            background: rgba(242, 109, 38, 0.2);
          }
        }

        @media print {
          .carousel-wrapper {
            overflow: visible;
          }

          .carousel-track {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            width: 100%;
            padding: 0;
          }

          .service-card-carousel {
            flex: 1;
            transform: none !important;
            opacity: 1 !important;
          }

          .carousel-indicators {
            display: none;
          }
        }
      `}</style>

      <section className="services-carousel-section" id="services">
        <div className="carousel-container">
          <div className="services-carousel-header">
            <span className="services-carousel-tagline">Our Services</span>
            <h2 className="services-carousel-title">
              Comprehensive IT Solutions
            </h2>
            <p className="services-carousel-description">
              We offer a full range of technology services to help your business 
              succeed in the digital world. From design to development, we've got you covered.
            </p>
          </div>

          <div 
            className="carousel-wrapper"
            ref={scrollContainerRef}
            onScroll={handleScroll}
          >
            <div className="carousel-track">
              {services.map((service, index) => (
                <ServiceCard 
                  key={index}
                  service={service}
                  isActive={index === activeIndex}
                />
              ))}
            </div>
          </div>

          <div className="carousel-indicators">
            {services.map((_, index) => (
              <Indicator
                key={index}
                index={index}
                isActive={index === activeIndex}
                onClick={() => scrollToIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
});

Services.displayName = 'Services';

export default Services;