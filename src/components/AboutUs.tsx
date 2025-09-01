"use client";

import React from 'react';
import { Users, Target, Award, Zap } from 'lucide-react';
import { CSSProperties } from 'react';

const AboutUs = () => {
  const stats = [
    {
      icon: <Users size={32} />,
      number: "50+",
      label: "Happy Clients"
    },
    {
      icon: <Target size={32} />,
      number: "100+",
      label: "Projects Completed"
    },
    {
      icon: <Award size={32} />,
      number: "5+",
      label: "Years Experience"
    },
    {
      icon: <Zap size={32} />,
      number: "24/7",
      label: "Support Available"
    },
  ];

  const styles: { [key: string]: CSSProperties } = {
    section: {
      padding: 'clamp(2rem, 8vw, 6rem) 0', // Responsive padding
      background: '#ffffff',
      fontFamily: 'var(--font-sans)',
      position: 'relative',
      zIndex: 10,
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 clamp(1rem, 4vw, 2rem)', // Responsive horizontal padding
      width: '100%',
      boxSizing: 'border-box',
    },
    content: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: 'clamp(1.5rem, 6vw, 3rem)', // Responsive gap
      alignItems: 'center',
    },
    textContent: {
      maxWidth: '100%', // Full width on mobile
      margin: '0 auto',
      textAlign: 'center',
      padding: '0 clamp(0.5rem, 2vw, 1rem)', // Responsive inner padding
    },
    tagline: {
      color: 'var(--color-primary-500)',
      fontSize: 'clamp(0.875rem, 2.5vw, 1rem)', // Responsive font size
      fontWeight: '600',
      fontFamily: 'var(--font-heading)',
      marginBottom: 'clamp(0.5rem, 2vw, 1rem)', // Responsive margin
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      display: 'block',
    },
    title: {
      fontSize: 'clamp(1.5rem, 6vw, 3rem)', // Better mobile scaling
      fontWeight: '700',
      fontFamily: 'var(--font-heading)',
      color: 'var(--text-primary)',
      marginBottom: 'clamp(1rem, 3vw, 1.5rem)', // Responsive margin
      lineHeight: '1.2',
      display: 'block',
    },
    description: {
      fontSize: 'clamp(1rem, 3vw, 1.125rem)', // Responsive description text
      color: 'var(--text-secondary)',
      lineHeight: '1.6', // Better mobile readability
      marginBottom: 'clamp(1.5rem, 4vw, 2rem)', // Responsive margin
      display: 'block',
      maxWidth: '100%', // Full width on mobile
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', // Smaller minimum for mobile
      gap: 'clamp(1rem, 3vw, 2rem)', // Responsive gap
      marginTop: 'clamp(1.5rem, 4vw, 2rem)', // Responsive margin
      width: '100%',
    },
    statCard: {
      background: 'var(--card)',
      padding: 'clamp(1rem, 4vw, 2rem)', // Responsive padding
      borderRadius: 'var(--radius-lg)',
      textAlign: 'center',
      border: '1px solid var(--border-light)',
      transition: 'all var(--transition-default)',
      cursor: 'pointer',
      position: 'relative',
      zIndex: 1,
      minHeight: 'auto', // Allow flexible height
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    iconWrapper: {
      width: 'clamp(48px, 12vw, 72px)', // Responsive icon container
      height: 'clamp(48px, 12vw, 72px)', // Responsive icon container
      background: 'var(--color-primary-50)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto clamp(0.75rem, 2vw, 1rem) auto', // Responsive margin
      color: 'var(--color-primary-500)',
      transition: 'all var(--transition-default)',
      flexShrink: 0, // Prevent shrinking
    },
    statNumber: {
      fontSize: 'clamp(1.25rem, 5vw, 2rem)', // Responsive number size
      fontWeight: '700',
      fontFamily: 'var(--font-heading)',
      color: '#1f2937',
      marginBottom: 'clamp(0.25rem, 1vw, 0.5rem)', // Responsive margin
      display: 'block',
      lineHeight: '1.2',
    },
    statLabel: {
      fontSize: 'clamp(0.75rem, 2.5vw, 1rem)', // Responsive label size
      color: '#6b7280',
      fontWeight: '500',
      display: 'block',
      lineHeight: '1.3',
      textAlign: 'center',
    },
  };

  return (
    <>
      <style jsx>{`
        /* Mobile First Responsive Styles */
        .about-content {
          grid-template-columns: 1fr;
          text-align: center;
          gap: clamp(1.5rem, 4vw, 2rem);
        }
        
        .stats-grid {
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        /* Small Mobile (up to 480px) */
        @media (max-width: 480px) {
          .about-text-content {
            padding: 0 0.5rem;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 0.75rem;
          }
          
          .stat-card {
            padding: 1rem 0.75rem;
            min-height: 120px;
          }
          
          .icon-wrapper svg {
            width: clamp(20px, 6vw, 24px) !important;
            height: clamp(20px, 6vw, 24px) !important;
          }
        }

        /* Large Mobile (481px - 640px) */
        @media (min-width: 481px) and (max-width: 640px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
          
          .stat-card {
            min-height: 140px;
          }
          
          .icon-wrapper svg {
            width: clamp(24px, 7vw, 28px) !important;
            height: clamp(24px, 7vw, 28px) !important;
          }
        }

        /* Tablet (641px - 768px) */
        @media (min-width: 641px) and (max-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
          
          .stat-card {
            min-height: 160px;
          }
          
          .icon-wrapper svg {
            width: clamp(28px, 8vw, 32px) !important;
            height: clamp(28px, 8vw, 32px) !important;
          }
        }

        /* Small Desktop / Large Tablet (769px - 1024px) */
        @media (min-width: 769px) and (max-width: 1024px) {
          .about-text-content {
            max-width: 700px;
          }
          
          .stats-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 1.5rem;
          }
          
          .stat-card {
            min-height: 180px;
          }
          
          .icon-wrapper svg {
            width: 32px !important;
            height: 32px !important;
          }
        }

        /* Desktop (1025px and up) */
        @media (min-width: 1025px) {
          .about-text-content {
            max-width: 800px;
          }
          
          .stats-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
          }
          
          .stat-card {
            min-height: 200px;
          }
          
          .icon-wrapper svg {
            width: 32px !important;
            height: 32px !important;
          }
        }

        /* Large Desktop (1440px and up) */
        @media (min-width: 1440px) {
          .about-text-content {
            max-width: 900px;
          }
          
          .stats-grid {
            gap: 2.5rem;
          }
        }

        /* Hover Effects - Only on devices that support hover */
        @media (hover: hover) and (pointer: fine) {
          .stat-card:hover {
            transform: translateY(-3px);
            box-shadow: var(--shadow-lg);
            border-color: var(--color-primary-500);
          }
          
          .stat-card:hover .icon-wrapper {
            background: var(--color-primary-500);
            color: white;
            transform: scale(1.05);
          }
          
          .stat-card:hover .stat-number {
            color: var(--color-primary-500);
          }
        }

        /* Touch devices - subtle hover alternative */
        @media (hover: none) and (pointer: coarse) {
          .stat-card:active {
            transform: translateY(-1px);
            box-shadow: var(--shadow-md);
          }
        }

        /* Focus states for accessibility */
        .stat-card:focus {
          outline: 2px solid var(--color-primary-500);
          outline-offset: 2px;
        }

        /* Override any global styles that might interfere */
        .about-section * {
          color: inherit !important;
        }
        
        .about-tagline {
          color: var(--color-primary-500) !important;
        }
        
        .about-title {
          color: #1f2937 !important;
        }
        
        .about-description {
          color: #6b7280 !important;
        }
        
        .about-stat-number {
          color: #1f2937 !important;
        }
        
        .about-stat-label {
          color: #6b7280 !important;
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .stat-card {
            border: 2px solid #1f2937;
          }
          
          .icon-wrapper {
            border: 1px solid var(--color-primary-500);
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .stat-card,
          .icon-wrapper {
            transition: none !important;
          }
          
          .stat-card:hover {
            transform: none !important;
          }
          
          .stat-card:hover .icon-wrapper {
            transform: none !important;
          }
        }

        /* Landscape orientation adjustments for mobile */
        @media (max-height: 600px) and (orientation: landscape) {
          .about-section {
            padding: clamp(1rem, 4vw, 2rem) 0;
          }
          
          .stats-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 0.75rem;
          }
          
          .stat-card {
            padding: 0.75rem;
            min-height: 100px;
          }
        }

        /* Dark mode adjustments */
        @media (prefers-color-scheme: dark) {
          .about-section {
            background: var(--background-secondary, #1f2937);
          }
          
          .about-title {
            color: #ffffff !important;
          }
          
          .about-description {
            color: #d1d5db !important;
          }
          
          .about-stat-number {
            color: #ffffff !important;
          }
          
          .about-stat-label {
            color: #d1d5db !important;
          }
          
          .stat-card {
            background: var(--card, #374151);
            border-color: var(--border-light, #4b5563);
          }
        }
      `}</style>

      <section style={styles.section} id="about" className="about-section">
        <div style={styles.container}>
          <div style={styles.content} className="about-content">
            <div style={styles.textContent} className="about-text-content">
              <span style={styles.tagline} className="about-tagline">About Us</span>
              <h2 style={styles.title} className="about-title">
                Transforming Ideas Into Digital Reality
              </h2>
              <p style={styles.description} className="about-description">
                We are a passionate team of technology experts committed to delivering 
                innovative digital solutions. From stunning graphics to powerful applications, 
                we help businesses thrive in the digital landscape with cutting-edge technology 
                and creative excellence.
              </p>
            </div>
          </div>

          <div style={styles.statsGrid} className="stats-grid">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                style={styles.statCard}
                className="stat-card"
                tabIndex={0}
                role="button"
                aria-label={`${stat.number} ${stat.label}`}
              >
                <div style={styles.iconWrapper} className="icon-wrapper">
                  {React.cloneElement(stat.icon, {
                    size: 'clamp(20, 6vw, 32)',
                    style: { 
                      width: 'clamp(20px, 6vw, 32px)', 
                      height: 'clamp(20px, 6vw, 32px)' 
                    }
                  })}
                </div>
                <div style={styles.statNumber} className="about-stat-number stat-number">
                  {stat.number}
                </div>
                <div style={styles.statLabel} className="about-stat-label">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;