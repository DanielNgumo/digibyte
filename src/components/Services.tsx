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
      padding: 'var(--spacing-3xl) 0',
      background: '#f8fafc',
      fontFamily: 'var(--font-sans)',
      position: 'relative',
      zIndex: 10,
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 var(--spacing-lg)',
    },
    header: {
      textAlign: 'center',
      marginBottom: 'var(--spacing-3xl)',
    },
    tagline: {
      color: 'var(--color-primary-500)',
      fontSize: '1rem',
      fontWeight: '600',
      fontFamily: 'var(--font-heading)',
      marginBottom: 'var(--spacing-sm)',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      display: 'block',
    },
    title: {
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      fontWeight: '700',
      fontFamily: 'var(--font-heading)',
      color: '#1f2937',
      marginBottom: 'var(--spacing-md)',
      lineHeight: '1.2',
    },
    description: {
      fontSize: '1.125rem',
      color: '#6b7280',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: '1.6',
    },
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: 'var(--spacing-xl)',
      marginTop: 'var(--spacing-3xl)',
    },
    serviceCard: {
      background: '#ffffff',
      padding: 'var(--spacing-xl)',
      borderRadius: 'var(--radius-xl)',
      border: '1px solid #e5e7eb',
      transition: 'all var(--transition-default)',
      cursor: 'pointer',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      position: 'relative',
      zIndex: 1,
    },
    iconWrapper: {
      width: '64px',
      height: '64px',
      background: '#fef7f0',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 'var(--spacing-md)',
      color: 'var(--color-primary-500)',
      transition: 'all var(--transition-default)',
    },
    serviceTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      fontFamily: 'var(--font-heading)',
      color: '#1f2937',
      marginBottom: 'var(--spacing-sm)',
      display: 'block',
    },
    serviceDescription: {
      fontSize: '1rem',
      color: '#6b7280',
      lineHeight: '1.6',
      marginBottom: 'var(--spacing-md)',
    },
    featuresList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--spacing-xs)',
      marginTop: 'var(--spacing-md)',
    },
    featureTag: {
      background: '#f1f5f9',
      color: '#475569',
      padding: '4px 12px',
      borderRadius: 'var(--radius-md)',
      fontSize: '0.875rem',
      fontWeight: '500',
      border: '1px solid #e2e8f0',
    },
  };

  return (
    <>
      <style jsx>{`
        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
          border-color: var(--color-primary-500);
        }
        
        .service-card:hover .icon-wrapper {
          background: var(--color-primary-500);
          color: #ffffff;
          transform: scale(1.1);
        }
        
        .service-card:hover .service-title {
          color: var(--color-primary-500);
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

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section style={styles.section} id="services" className="services-section">
        <div style={styles.container}>
          <div style={styles.header}>
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
              >
                <div style={styles.iconWrapper} className="icon-wrapper">
                  {service.icon}
                </div>
                <h3 style={styles.serviceTitle} className="service-card-title service-title">
                  {service.title}
                </h3>
                <p style={styles.serviceDescription} className="service-card-description">
                  {service.description}
                </p>
                <div style={styles.featuresList}>
                  {service.features.map((feature, featureIndex) => (
                    <span key={featureIndex} style={styles.featureTag}>
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