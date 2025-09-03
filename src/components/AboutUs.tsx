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
      padding: 'clamp(2rem, 8vw, 6rem) 0',
      background: '#ffffff',
      fontFamily: 'Inter, system-ui, sans-serif',
      position: 'relative',
      zIndex: 10,
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 clamp(1rem, 4vw, 2rem)',
      width: '100%',
      boxSizing: 'border-box',
    },
    content: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: 'clamp(1.5rem, 6vw, 3rem)',
      alignItems: 'center',
    },
    textContent: {
      maxWidth: '100%',
      margin: '0 auto',
      textAlign: 'center',
      padding: '0 clamp(0.5rem, 2vw, 1rem)',
    },
    tagline: {
      color: '#f26d26',
      fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
      fontWeight: '600',
      fontFamily: 'Poppins, system-ui, sans-serif',
      marginBottom: 'clamp(0.5rem, 2vw, 1rem)',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      display: 'block',
    },
    title: {
      fontSize: 'clamp(1.5rem, 6vw, 3rem)',
      fontWeight: '700',
      fontFamily: 'Poppins, system-ui, sans-serif',
      color: '#000000',
      marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
      lineHeight: '1.2',
      display: 'block',
    },
    description: {
      fontSize: 'clamp(1rem, 3vw, 1.125rem)',
      color: '#787878',
      lineHeight: '1.6',
      marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
      display: 'block',
      maxWidth: '100%',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
      gap: 'clamp(1rem, 3vw, 2rem)',
      marginTop: 'clamp(1.5rem, 4vw, 2rem)',
      width: '100%',
    },
    statCard: {
      backgroundColor: '#ffffff',
      padding: 'clamp(1rem, 4vw, 2rem)',
      borderRadius: '12px',
      textAlign: 'center',
      border: '1px solid #e5e7eb',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      position: 'relative',
      zIndex: 1,
      minHeight: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    iconWrapper: {
      width: 'clamp(48px, 12vw, 72px)',
      height: 'clamp(48px, 12vw, 72px)',
      backgroundColor: '#fef3e8',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto clamp(0.75rem, 2vw, 1rem) auto',
      color: '#f26d26',
      transition: 'all 0.3s ease',
      flexShrink: 0,
    },
    statNumber: {
      fontSize: 'clamp(1.25rem, 5vw, 2rem)',
      fontWeight: '700',
      fontFamily: 'Poppins, system-ui, sans-serif',
      color: '#1f2937',
      marginBottom: 'clamp(0.25rem, 1vw, 0.5rem)',
      display: 'block',
      lineHeight: '1.2',
    },
    statLabel: {
      fontSize: 'clamp(0.75rem, 2.5vw, 1rem)',
      color: '#6b7280',
      fontWeight: '500',
      display: 'block',
      lineHeight: '1.3',
      textAlign: 'center',
    },
  };

  return (
    <div>
      <style>{`
        .white-card {
          background-color: #ffffff !important;
          background: #ffffff !important;
        }
        
        .white-card:hover {
          background-color: #ffffff !important;
          background: #ffffff !important;
        }
        
        @media (hover: hover) and (pointer: fine) {
          .white-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.1), 0 4px 10px 0 rgba(0, 0, 0, 0.05);
            border-color: #f26d26;
            background-color: #ffffff !important;
            background: #ffffff !important;
          }
          
          .white-card:hover .icon-wrapper {
            background-color: #f26d26;
            color: white;
            transform: scale(1.05);
          }
          
          .white-card:hover .stat-number {
            color: #f26d26;
          }
        }

        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 0.75rem;
          }
          
          .white-card {
            padding: 1rem 0.75rem;
            min-height: 120px;
          }
        }

        @media (min-width: 481px) and (max-width: 640px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
          
          .white-card {
            min-height: 140px;
          }
        }

        @media (min-width: 641px) and (max-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
          
          .white-card {
            min-height: 160px;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 1.5rem;
          }
          
          .white-card {
            min-height: 180px;
          }
        }

        @media (min-width: 1025px) {
          .stats-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
          }
          
          .white-card {
            min-height: 200px;
          }
        }

        /* Force white background even in dark mode */
        @media (prefers-color-scheme: dark) {
          .white-card {
            background-color: #ffffff !important;
            background: #ffffff !important;
            color: #1f2937 !important;
          }
          
          .white-card .stat-number {
            color: #1f2937 !important;
          }
          
          .white-card .stat-label {
            color: #6b7280 !important;
          }
        }
        
        /* Focus states for accessibility */
        .white-card:focus {
          outline: 2px solid #f26d26;
          outline-offset: 2px;
          background-color: #ffffff !important;
        }

        /* Touch devices */
        @media (hover: none) and (pointer: coarse) {
          .white-card:active {
            transform: translateY(-1px);
            box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
            background-color: #ffffff !important;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .white-card,
          .icon-wrapper {
            transition: none !important;
          }
          
          .white-card:hover {
            transform: none !important;
          }
          
          .white-card:hover .icon-wrapper {
            transform: none !important;
          }
        }
      `}</style>

      <section style={styles.section} id="about">
        <div style={styles.container}>
          <div style={styles.content}>
            <div style={styles.textContent}>
              <span style={styles.tagline}>About Us</span>
              <h2 style={styles.title}>
                Transforming Ideas Into Digital Reality
              </h2>
              <p style={styles.description}>
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
                className="white-card"
                tabIndex={0}
                role="button"
                aria-label={`${stat.number} ${stat.label}`}
              >
                <div style={styles.iconWrapper} className="icon-wrapper">
                  {React.cloneElement(stat.icon, {
                    size: 32,
                    style: { 
                      width: '32px', 
                      height: '32px' 
                    }
                  })}
                </div>
                <div style={styles.statNumber} className="stat-number">
                  {stat.number}
                </div>
                <div style={styles.statLabel}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;