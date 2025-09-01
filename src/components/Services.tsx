"use client";

import React from 'react';
import { Palette, Smartphone, Globe, Code, Database, Shield } from 'lucide-react';
import { CSSProperties } from 'react';

const Services = () => {
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

  const styles: { [key: string]: CSSProperties } = {
    section: {
      padding: 'clamp(2rem, 8vw, 6rem) 0', // Responsive section padding
      background: '#f8fafc',
      fontFamily: 'var(--font-sans)',
      position: 'relative',
      zIndex: 10,
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 clamp(1rem, 4vw, 2rem)', // Responsive container padding
      width: '100%',
      boxSizing: 'border-box',
    },
    header: {
      textAlign: 'center',
      marginBottom: 'clamp(2rem, 6vw, 4rem)', // Responsive header margin
      padding: '0 clamp(0.5rem, 2vw, 1rem)', // Inner padding for mobile
    },
    tagline: {
      color: 'var(--color-primary-500)',
      fontSize: 'clamp(0.875rem, 2.5vw, 1rem)', // Responsive tagline
      fontWeight: '600',
      fontFamily: 'var(--font-heading)',
      marginBottom: 'clamp(0.5rem, 2vw, 1rem)', // Responsive margin
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      display: 'block',
    },
    title: {
      fontSize: 'clamp(1.75rem, 6vw, 3rem)', // Better mobile scaling
      fontWeight: '700',
      fontFamily: 'var(--font-heading)',
      color: '#1f2937',
      marginBottom: 'clamp(1rem, 3vw, 1.5rem)', // Responsive margin
      lineHeight: '1.2',
    },
    description: {
      fontSize: 'clamp(1rem, 3vw, 1.125rem)', // Responsive description
      color: '#6b7280',
      maxWidth: '100%', // Full width on mobile
      margin: '0 auto',
      lineHeight: '1.6',
    },
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', // Smaller minimum for mobile
      gap: 'clamp(1rem, 4vw, 2rem)', // Responsive grid gap
      marginTop: 'clamp(2rem, 6vw, 3rem)', // Responsive top margin
    },
    serviceCard: {
      background: '#ffffff',
      padding: 'clamp(1.25rem, 5vw, 2rem)', // Responsive card padding
      borderRadius: 'var(--radius-xl)',
      border: '1px solid #e5e7eb',
      transition: 'all var(--transition-default)',
      cursor: 'pointer',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      position: 'relative',
      zIndex: 1,
      height: 'auto', // Allow flexible height
      display: 'flex',
      flexDirection: 'column',
    },
    iconWrapper: {
      width: 'clamp(48px, 12vw, 72px)', // Responsive icon container
      height: 'clamp(48px, 12vw, 72px)', // Responsive icon container
      background: '#fef7f0',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 'clamp(1rem, 3vw, 1.5rem)', // Responsive margin
      color: 'var(--color-primary-500)',
      transition: 'all var(--transition-default)',
      flexShrink: 0, // Prevent shrinking
    },
    serviceTitle: {
      fontSize: 'clamp(1.125rem, 4vw, 1.5rem)', // Responsive title
      fontWeight: '600',
      fontFamily: 'var(--font-heading)',
      color: '#1f2937',
      marginBottom: 'clamp(0.75rem, 2vw, 1rem)', // Responsive margin
      display: 'block',
      lineHeight: '1.3',
    },
    serviceDescription: {
      fontSize: 'clamp(0.875rem, 3vw, 1rem)', // Responsive description
      color: '#6b7280',
      lineHeight: '1.6',
      marginBottom: 'clamp(1rem, 3vw, 1.5rem)', // Responsive margin
      flex: '1', // Allow description to grow
    },
    featuresList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'clamp(0.5rem, 2vw, 0.75rem)', // Responsive gap
      marginTop: 'auto', // Push to bottom of card
    },
    featureTag: {
      background: '#f1f5f9',
      color: '#475569',
      padding: 'clamp(3px, 1vw, 6px) clamp(8px, 2vw, 12px)', // Responsive padding
      borderRadius: 'var(--radius-md)',
      fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', // Responsive font size
      fontWeight: '500',
      border: '1px solid #e2e8f0',
      lineHeight: '1.2',
      textAlign: 'center',
    },
  };

  return (
    <>
      <style jsx>{`
        /* Mobile First Responsive Styles */
        .services-grid {
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        
        .service-card {
          min-height: auto;
        }

        /* Small Mobile (up to 480px) */
        @media (max-width: 480px) {
          .services-header {
            margin-bottom: 2rem;
            padding: 0 0.5rem;
          }
          
          .services-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .service-card {
            padding: 1rem;
            margin: 0 0.25rem;
          }
          
          .features-list {
            gap: 0.375rem;
          }
          
          .feature-tag {
            font-size: 0.75rem;
            padding: 2px 6px;
          }
          
          .icon-wrapper svg {
            width: clamp(20px, 6vw, 24px) !important;
            height: clamp(20px, 6vw, 24px) !important;
          }
        }

        /* Large Mobile (481px - 640px) */
        @media (min-width: 481px) and (max-width: 640px) {
          .services-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
          
          .service-card {
            padding: 1.25rem;
          }
          
          .icon-wrapper svg {
            width: clamp(24px, 7vw, 28px) !important;
            height: clamp(24px, 7vw, 28px) !important;
          }
        }

        /* Tablet (641px - 768px) */
        @media (min-width: 641px) and (max-width: 768px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
          
          .service-card {
            padding: 1.5rem;
          }
          
          .icon-wrapper svg {
            width: clamp(28px, 8vw, 32px) !important;
            height: clamp(28px, 8vw, 32px) !important;
          }
        }

        /* Small Desktop / Large Tablet (769px - 1024px) */
        @media (min-width: 769px) and (max-width: 1024px) {
          .services-header {
            max-width: 700px;
            margin: 0 auto 3rem auto;
          }
          
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
          
          .service-card {
            padding: 1.75rem;
          }
          
          .icon-wrapper svg {
            width: 32px !important;
            height: 32px !important;
          }
        }

        /* Desktop (1025px - 1439px) */
        @media (min-width: 1025px) and (max-width: 1439px) {
          .services-header {
            max-width: 800px;
            margin: 0 auto 4rem auto;
          }
          
          .services-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
          }
          
          .service-card {
            padding: 2rem;
          }
          
          .icon-wrapper svg {
            width: 32px !important;
            height: 32px !important;
          }
        }

        /* Large Desktop (1440px and up) */
        @media (min-width: 1440px) {
          .services-header {
            max-width: 900px;
            margin: 0 auto 4rem auto;
          }
          
          .services-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 2.5rem;
          }
          
          .service-card {
            padding: 2.5rem;
          }
        }

        /* Hover Effects - Only on devices that support hover */
        @media (hover: hover) and (pointer: fine) {
          .service-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
            border-color: var(--color-primary-500);
          }
          
          .service-card:hover .icon-wrapper {
            background: var(--color-primary-500);
            color: #ffffff;
            transform: scale(1.05);
          }
          
          .service-card:hover .service-title {
            color: var(--color-primary-500);
          }
        }

        /* Touch devices - subtle hover alternative */
        @media (hover: none) and (pointer: coarse) {
          .service-card:active {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px -2px rgba(0, 0, 0, 0.1);
          }
        }

        /* Focus states for accessibility */
        .service-card:focus {
          outline: 2px solid var(--color-primary-500);
          outline-offset: 2px;
        }

        /* Override any global styles */
        .services-section * {
          color: inherit !important;
        }
        
        .services-tagline {
          color: var(--color-primary-500) !important;
        }
        
        .services-title {
          color: #1f2937 !important;
        }
        
        .services-description {
          color: #6b7280 !important;
        }
        
        .service-card-title {
          color: #1f2937 !important;
        }
        
        .service-card-description {
          color: #6b7280 !important;
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .service-card {
            border: 2px solid #1f2937;
          }
          
          .icon-wrapper {
            border: 1px solid var(--color-primary-500);
          }
          
          .feature-tag {
            border: 1px solid #475569;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .service-card,
          .icon-wrapper {
            transition: none !important;
          }
          
          .service-card:hover {
            transform: none !important;
          }
          
          .service-card:hover .icon-wrapper {
            transform: none !important;
          }
        }

        /* Landscape orientation adjustments for mobile */
        @media (max-height: 600px) and (orientation: landscape) {
          .services-section {
            padding: clamp(1rem, 4vw, 2rem) 0;
          }
          
          .services-header {
            margin-bottom: 1.5rem;
          }
          
          .services-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1rem;
          }
          
          .service-card {
            padding: 1rem;
          }
        }

        /* Dark mode adjustments */
        @media (prefers-color-scheme: dark) {
          .services-section {
            background: var(--background-secondary, #1f2937);
          }
          
          .services-title {
            color: #ffffff !important;
          }
          
          .services-description {
            color: #d1d5db !important;
          }
          
          .service-card-title {
            color: #ffffff !important;
          }
          
          .service-card-description {
            color: #d1d5db !important;
          }
          
          .service-card {
            background: var(--card, #374151);
            border-color: var(--border-light, #4b5563);
          }
          
          .feature-tag {
            background: #374151;
            color: #d1d5db;
            border-color: #4b5563;
          }
        }

        /* Print styles */
        @media print {
          .service-card {
            break-inside: avoid;
            page-break-inside: avoid;
          }
          
          .services-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }

        /* Ultra-wide screens (2560px and up) */
        @media (min-width: 2560px) {
          .services-container {
            max-width: 1600px;
          }
          
          .services-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 3rem;
          }
        }
      `}</style>

      <section style={styles.section} id="services" className="services-section">
        <div style={styles.container} className="services-container">
          <div style={styles.header} className="services-header">
            <span style={styles.tagline} className="services-tagline">Our Services</span>
            <h2 style={styles.title} className="services-title">
              Comprehensive IT Solutions
            </h2>
            <p style={styles.description} className="services-description">
              We offer a full range of technology services to help your business 
              succeed in the digital world. From design to development, we've got you covered.
            </p>
          </div>

          <div style={styles.servicesGrid} className="services-grid">
            {services.map((service, index) => (
              <div 
                key={index} 
                style={styles.serviceCard}
                className="service-card"
                tabIndex={0}
                role="button"
                aria-label={`${service.title} service`}
              >
                <div style={styles.iconWrapper} className="icon-wrapper">
                  {React.cloneElement(service.icon, {
                    size: 'clamp(20, 6vw, 32)',
                    style: { 
                      width: 'clamp(20px, 6vw, 32px)', 
                      height: 'clamp(20px, 6vw, 32px)' 
                    }
                  })}
                </div>
                <h3 style={styles.serviceTitle} className="service-card-title service-title">
                  {service.title}
                </h3>
                <p style={styles.serviceDescription} className="service-card-description">
                  {service.description}
                </p>
                <div style={styles.featuresList} className="features-list">
                  {service.features.map((feature, featureIndex) => (
                    <span key={featureIndex} style={styles.featureTag} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;