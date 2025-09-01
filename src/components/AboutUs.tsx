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
      padding: 'var(--spacing-3xl) 0',
      background: '#ffffff',
      fontFamily: 'var(--font-sans)',
      position: 'relative',
      zIndex: 10,
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 var(--spacing-lg)',
    },
    content: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: 'var(--spacing-3xl)',
      alignItems: 'center',
    },
    textContent: {
      maxWidth: '600px',
      margin: '0 auto',
      textAlign: 'center',
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
      color: 'var(--text-primary)',
      marginBottom: 'var(--spacing-md)',
      lineHeight: '1.2',
      display: 'block',
    },
    description: {
      fontSize: '1.125rem',
      color: 'var(--text-secondary)',
      lineHeight: '1.7',
      marginBottom: 'var(--spacing-xl)',
      display: 'block',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: 'var(--spacing-lg)',
      marginTop: 'var(--spacing-xl)',
    },
    statCard: {
      background: 'var(--card)',
      padding: 'var(--spacing-lg)',
      borderRadius: 'var(--radius-lg)',
      textAlign: 'center',
      border: '1px solid var(--border-light)',
      transition: 'all var(--transition-default)',
      cursor: 'pointer',
      position: 'relative',
      zIndex: 1,
    },
    iconWrapper: {
      width: '60px',
      height: '60px',
      background: 'var(--color-primary-50)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto var(--spacing-md) auto',
      color: 'var(--color-primary-500)',
      transition: 'all var(--transition-default)',
    },
    statNumber: {
      fontSize: '2rem',
      fontWeight: '700',
      fontFamily: 'var(--font-heading)',
      color: '#1f2937',
      marginBottom: 'var(--spacing-xs)',
      display: 'block',
    },
    statLabel: {
      fontSize: '1rem',
      color: '#6b7280',
      fontWeight: '500',
      display: 'block',
    },
  };

  return (
    <>
      <style jsx>{`
        @media (min-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
        }
        
        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
          border-color: var(--color-primary-500);
        }
        
        .stat-card:hover .icon-wrapper {
          background: var(--color-primary-500);
          color: white;
          transform: scale(1.1);
        }
        
        .stat-card:hover .stat-number {
          color: var(--color-primary-500);
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
      `}</style>

      <section style={styles.section} id="about" className="about-section">
        <div style={styles.container}>
          <div style={styles.content} className="about-content">
            <div style={styles.textContent}>
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

          <div style={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div 
                key={index} 
                style={styles.statCard}
                className="stat-card"
              >
                <div style={styles.iconWrapper} className="icon-wrapper">
                  {stat.icon}
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