"use client";

import React, { useRef, useEffect, useState } from 'react';
import { Palette, Smartphone, Globe, Code, Database, Shield } from 'lucide-react';

export default function Services() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const scrollStartRef = useRef(0);

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

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const cardWidth = 300; // Fixed card width + gap
    const scrollLeft = container.scrollLeft;
    const containerCenter = scrollLeft + container.offsetWidth / 2;
    
    let closestIndex = 0;
    let closestDistance = Infinity;
    
    services.forEach((_, index) => {
      // Calculate card position based on fixed width and padding
      const cardCenter = 2 * 16 + (index * (cardWidth + 16)) + cardWidth / 2;
      const distance = Math.abs(cardCenter - containerCenter);
      
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });
    
    setActiveIndex(closestIndex);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleMouseDown = (e: MouseEvent) => {
      setIsDragging(true);
      startXRef.current = e.clientX;
      scrollStartRef.current = container.scrollLeft;
      container.style.scrollBehavior = 'auto';
      container.classList.add('dragging');
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      
      const x = e.clientX - startXRef.current;
      container.scrollLeft = scrollStartRef.current - x;
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
          padding: clamp(3rem, 8vw, 6rem) 0;
          background: #f8fafc;
          font-family: 'Inter', system-ui, sans-serif;
        }

        .services-carousel-header {
          text-align: center;
          margin-bottom: clamp(2rem, 6vw, 4rem);
          padding: 0 clamp(0.5rem, 2vw, 1rem);
        }

        .services-carousel-tagline {
          color: #f26d26;
          font-size: clamp(0.875rem, 2.5vw, 1rem);
          font-weight: 600;
          font-family: 'Poppins', system-ui, sans-serif;
          margin-bottom: clamp(0.5rem, 2vw, 1rem);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          display: block;
        }

        .services-carousel-title {
          font-size: clamp(1.75rem, 6vw, 3rem);
          font-weight: 700;
          font-family: 'Poppins', system-ui, sans-serif;
          color: #1f2937;
          margin-bottom: clamp(1rem, 3vw, 1.5rem);
          line-height: 1.2;
        }

        .services-carousel-description {
          font-size: clamp(1rem, 3vw, 1.125rem);
          color: #6b7280;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .carousel-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 clamp(1rem, 4vw, 2rem);
          width: 100%;
          box-sizing: border-box;
        }

        .carousel-wrapper {
          overflow-x: auto;
          scroll-behavior: smooth;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding: 2rem 0;
          cursor: grab;
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
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
          gap: 1rem;
          padding: 0 2rem;
          width: fit-content;
          user-select: none;
          -webkit-user-select: none;
        }

        .service-card-carousel {
          flex: 0 0 300px;
          min-width: 300px;
          height: 420px;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: clamp(1.5rem, 4vw, 2rem);
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
        }

        .service-card-carousel.side {
          opacity: 0.5;
        }

        .icon-wrapper-carousel {
          width: 64px;
          height: 64px;
          background: #fef3e8;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #f26d26;
          margin-bottom: 1.5rem;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .service-card-carousel.active .icon-wrapper-carousel {
          background: #f26d26;
          color: white;
          transform: scale(1.1);
        }

        .service-card-title-carousel {
          font-size: 1.25rem;
          font-weight: 600;
          font-family: 'Poppins', system-ui, sans-serif;
          color: #1f2937;
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }

        .service-card-carousel.active .service-card-title-carousel {
          color: #f26d26;
        }

        .service-card-description-carousel {
          font-size: 0.95rem;
          color: #6b7280;
          line-height: 1.6;
          margin-bottom: 1rem;
          flex: 1;
        }

        .features-list-carousel {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: auto;
        }

        .feature-tag-carousel {
          background: #f1f5f9;
          color: #475569;
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid #e2e8f0;
          line-height: 1.2;
        }

        .carousel-indicators {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 2rem;
        }

        .indicator {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #d1d5db;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .indicator.active {
          background: #f26d26;
          width: 30px;
          border-radius: 5px;
        }

        @media (max-width: 1024px) {
          .service-card-carousel {
            flex: 0 0 45%;
            min-width: 280px;
            height: 380px;
          }

          .carousel-track {
            padding: 0 1rem;
          }
        }

        @media (max-width: 640px) {
          .service-card-carousel {
            flex: 0 0 80%;
            min-width: 280px;
            height: 360px;
            padding: 1.25rem;
          }

          .carousel-track {
            padding: 0 0.5rem;
            gap: 1rem;
          }

          .carousel-wrapper {
            padding: 1.5rem 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .carousel-wrapper {
            scroll-behavior: auto;
          }

          .service-card-carousel,
          .icon-wrapper-carousel {
            transition: none !important;
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
              succeed in the digital world. From design to development, we ve got you covered.
            </p>
          </div>

          <div 
            className="carousel-wrapper"
            ref={scrollContainerRef}
            onScroll={handleScroll}
          >
            <div className="carousel-track">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`service-card-carousel ${
                    index === activeIndex ? 'active' : 'side'
                  }`}
                  role="article"
                  aria-label={`${service.title} service`}
                >
                  <div className="icon-wrapper-carousel">
                    {React.cloneElement(service.icon, {
                      size: 32,
                      strokeWidth: 2
                    })}
                  </div>
                  <h3 className="service-card-title-carousel">
                    {service.title}
                  </h3>
                  <p className="service-card-description-carousel">
                    {service.description}
                  </p>
                  <div className="features-list-carousel">
                    {service.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="feature-tag-carousel">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-indicators">
            {services.map((_, index) => (
              <div
                key={index}
                className={`indicator ${index === activeIndex ? 'active' : ''}`}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    const cardWidth = 300;
                    const gap = 16;
                    const scrollPosition = index * (cardWidth + gap) + 2 * 16 - (scrollContainerRef.current.offsetWidth / 2 - cardWidth / 2);
                    scrollContainerRef.current.scrollTo({
                      left: scrollPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`Go to service ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}