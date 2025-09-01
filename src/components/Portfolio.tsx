"use client";

import React, { useState, useMemo, useCallback } from 'react';
import { ExternalLink, Eye, Code, Palette, Smartphone, Globe } from 'lucide-react';
import { CSSProperties } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile App' },
  ];

  const projects = [
    {
      id: 1,
      title: "Paynasi",
      category: "web",
      description: "Responsive payment app website with server-side rendering for SEO using Next.js.",
      image: "/images/paynasi.png",
      tags: ["Next.js", "TypeScript", "APIs"],
      liveUrl: "#",
      codeUrl: "#",
      icon: <Globe size={32} />
    },
    {
      id: 2,
      title: "Latisec",
      category: "web",
      description: "Cybersecurity website with secure API integration using Angular and PHP.",
      image: "/images/latisec.png",
      tags: ["Angular", "PHP", "APIs"],
      liveUrl: "#",
      codeUrl: "#",
      icon: <Code size={32} />
    },
    {
      id: 3,
      title: "Wateramba",
      category: "web",
      description: "Aquatic services website with interactive UI using React and RESTful APIs.",
      image: "/images/wateramba.png",
      tags: ["React", "APIs", "JavaScript"],
      liveUrl: "#",
      codeUrl: "#",
      icon: <Globe size={32} />
    },
    {
      id: 4,
      title: "Tranzit Mobile App",
      category: "mobile",
      description: "Transportation-of-goods app with real-time geolocation using Flutter.",
      image: "/images/tranzit.png",
      tags: ["Flutter", "Geolocation", "APIs"],
      liveUrl: "#",
      codeUrl: "#",
      icon: <Smartphone size={32} />
    },
    {
      id: 5,
      title: "Ibukatech",
      category: "web",
      description: "E-learning website with server-side rendering for SEO using Angular 17.",
      image: "/images/ibuka.png",
      tags: ["Angular", "TypeScript", "SSR"],
      liveUrl: "#",
      codeUrl: "#",
      icon: <Code size={32} />
    },
    {
      id: 6,
      title: "Cargo Connect",
      category: "web",
      description: "Cargo logistics PWA with real-time pricing and tracking using Laravel and React.",
      image: "/images/cargo.png",
      tags: ["Laravel", "React", "PWA"],
      liveUrl: "#",
      codeUrl: "#",
      icon: <Globe size={32} />
    },
  ];

  const filteredProjects = useMemo(() => {
    return activeFilter === 'all' 
      ? projects 
      : projects.filter(project => project.category === activeFilter);
  }, [activeFilter]);

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
      padding: '0 clamp(1rem, 4vw, 2rem)', // Responsive container padding
      width: '100%',
      boxSizing: 'border-box',
    },
    header: {
      textAlign: 'center',
      marginBottom: 'clamp(2rem, 6vw, 3rem)', // Responsive margin
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
      fontSize: 'clamp(1.75rem, 6vw, 3rem)', // Responsive title
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
    filterButtons: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: 'clamp(0.5rem, 2vw, 1rem)', // Responsive gap
      marginBottom: 'clamp(2rem, 6vw, 3rem)', // Responsive margin
    },
    filterButton: {
      background: '#f8fafc',
      color: '#64748b',
      border: '1px solid #e2e8f0',
      padding: 'clamp(6px, 2vw, 8px) clamp(12px, 3vw, 16px)', // Responsive padding
      borderRadius: 'var(--radius-lg)',
      fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', // Responsive font size
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all var(--transition-default)',
      whiteSpace: 'nowrap', // Prevent text wrapping
    },
    activeFilterButton: {
      background: 'var(--color-primary-500)',
      color: '#ffffff',
      border: '1px solid var(--color-primary-500)',
    },
    projectsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', // Smaller minimum for mobile
      gap: 'clamp(1rem, 4vw, 2rem)', // Responsive grid gap
    },
    projectCard: {
      background: '#ffffff',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      border: '1px solid #e5e7eb',
      transition: 'all var(--transition-default)',
      cursor: 'pointer',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    },
    imageWrapper: {
      position: 'relative',
      width: '100%',
      height: 'clamp(180px, 40vw, 240px)', // Responsive image height
      background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    },
    imagePlaceholder: {
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, var(--color-primary-500), var(--color-secondary-500))',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ffffff',
      fontSize: 'clamp(1.25rem, 4vw, 1.5rem)', // Responsive placeholder text
      fontWeight: '600',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'clamp(1rem, 3vw, 1.5rem)', // Responsive button gap
      opacity: 0,
      transition: 'all var(--transition-default)',
    },
    actionButton: {
      background: '#ffffff',
      color: '#1f2937',
      border: 'none',
      borderRadius: '50%',
      width: 'clamp(36px, 8vw, 40px)', // Responsive button size
      height: 'clamp(36px, 8vw, 40px)', // Responsive button size
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all var(--transition-default)',
    },
    cardContent: {
      padding: 'clamp(1rem, 4vw, 1.5rem)', // Responsive card padding
    },
    projectTitle: {
      fontSize: 'clamp(1rem, 3.5vw, 1.25rem)', // Responsive title
      fontWeight: '600',
      fontFamily: 'var(--font-heading)',
      color: '#1f2937',
      marginBottom: 'clamp(0.5rem, 2vw, 0.75rem)', // Responsive margin
      display: 'flex',
      alignItems: 'center',
      gap: 'clamp(0.5rem, 2vw, 0.75rem)', // Responsive icon gap
    },
    projectDescription: {
      fontSize: 'clamp(0.875rem, 2.5vw, 0.975rem)', // Responsive description
      color: '#6b7280',
      lineHeight: '1.5',
      marginBottom: 'clamp(1rem, 3vw, 1.5rem)', // Responsive margin
    },
    tagsList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'clamp(0.375rem, 1.5vw, 0.5rem)', // Responsive tag gap
    },
    tag: {
      background: '#f1f5f9',
      color: '#475569',
      padding: 'clamp(2px, 1vw, 4px) clamp(6px, 2vw, 8px)', // Responsive tag padding
      borderRadius: 'var(--radius-md)',
      fontSize: 'clamp(0.625rem, 2vw, 0.75rem)', // Responsive tag font size
      fontWeight: '500',
      border: '1px solid #e2e8f0',
    },
  };

  return (
    <>
      <style jsx>{`
        /* Mobile First Responsive Styles */
        .filter-buttons {
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .projects-grid {
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        /* Small Mobile (up to 480px) */
        @media (max-width: 480px) {
          .filter-buttons {
            justify-content: flex-start;
            overflow-x: auto;
            padding-bottom: 10px;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          
          .filter-buttons::-webkit-scrollbar {
            display: none;
          }
          
          .filter-button {
            flex-shrink: 0;
          }
          
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }

        /* Tablet (641px - 768px) */
        @media (min-width: 641px) and (max-width: 768px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }

        /* Desktop (1025px and up) */
        @media (min-width: 1025px) {
          .projects-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
          }
        }

        /* Hover Effects - Only on devices that support hover */
        @media (hover: hover) and (pointer: fine) {
          .project-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
            border-color: var(--color-primary-500);
          }
          
          .project-card:hover .overlay {
            opacity: 1;
          }
          
          .action-button:hover {
            background: var(--color-primary-500);
            color: #ffffff;
            transform: scale(1.1);
          }
          
          .filter-button:hover:not(.active) {
            background: #f1f5f9;
            color: #475569;
          }
        }

        /* Touch devices - show overlay on tap */
        @media (hover: none) and (pointer: coarse) {
          .project-card:active .overlay {
            opacity: 1;
          }
        }

        /* Focus states for accessibility */
        .project-card:focus,
        .filter-button:focus,
        .action-button:focus {
          outline: 2px solid var(--color-primary-500);
          outline-offset: 2px;
        }

        /* Override global styles */
        .portfolio-section * {
          color: inherit !important;
        }
        
        .portfolio-tagline {
          color: var(--color-primary-500) !important;
        }
        
        .portfolio-title {
          color: #1f2937 !important;
        }
        
        .portfolio-description {
          color: #6b7280 !important;
        }
        
        .project-card-title {
          color: #1f2937 !important;
        }
        
        .project-card-description {
          color: #6b7280 !important;
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .project-card,
          .action-button,
          .overlay {
            transition: none !important;
          }
          
          .project-card:hover {
            transform: none !important;
          }
        }

        /* Dark mode adjustments */
        @media (prefers-color-scheme: dark) {
          .portfolio-section {
            background: var(--background-secondary, #1f2937);
          }
          
          .portfolio-title {
            color: #ffffff !important;
          }
          
          .portfolio-description {
            color: #d1d5db !important;
          }
          
          .project-card {
            background: var(--card, #374151);
            border-color: var(--border-light, #4b5563);
          }
          
          .project-card-title {
            color: #ffffff !important;
          }
          
          .project-card-description {
            color: #d1d5db !important;
          }
          
          .filter-button {
            background: #374151;
            color: #d1d5db;
            border-color: #4b5563;
          }
          
          .filter-button.active {
            background: var(--color-primary-500);
            color: #ffffff;
          }
          
          .tag {
            background: #374151;
            color: #d1d5db;
            border-color: #4b5563;
          }
        }
      `}</style>

      <section style={styles.section} id="portfolio" className="portfolio-section">
        <div style={styles.container}>
          <div style={styles.header}>
            <span style={styles.tagline} className="portfolio-tagline">Our Portfolio</span>
            <h2 style={styles.title} className="portfolio-title">
              Recent Projects
            </h2>
            <p style={styles.description} className="portfolio-description">
              Take a look at some of our recent work and see how we've helped 
              businesses transform their digital presence.
            </p>
          </div>

          <div style={styles.filterButtons} className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                style={{
                  ...styles.filterButton,
                  ...(activeFilter === category.id ? styles.activeFilterButton : {})
                }}
                className={`filter-button ${activeFilter === category.id ? 'active' : ''}`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div style={styles.projectsGrid} className="projects-grid">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                style={styles.projectCard}
                className="project-card"
              >
                <div style={styles.imageWrapper}>
                  <img 
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                    onError={(e) => {
                      // Fallback to gradient with icon if image fails to load
                      e.currentTarget.style.display = 'none';
                      if (e.currentTarget.nextElementSibling) {
                        (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                      }
                    }}
                  />
                  <div 
                    style={{
                      ...styles.imagePlaceholder,
                      display: 'none' // Hidden by default, shows on image error
                    }}
                    className="image-fallback"
                  >
                    {React.cloneElement(project.icon, {
                      size: 'clamp(24, 6vw, 32)',
                      style: { 
                        width: 'clamp(24px, 6vw, 32px)', 
                        height: 'clamp(24px, 6vw, 32px)' 
                      }
                    })}
                  </div>
                  <div style={styles.overlay} className="overlay">
                    <button style={styles.actionButton} className="action-button">
                      <Eye size={20} />
                    </button>
                    <button style={styles.actionButton} className="action-button">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
                <div style={styles.cardContent}>
                  <h3 style={styles.projectTitle} className="project-card-title">
                    {React.cloneElement(project.icon, { size: 16 })}
                    {project.title}
                  </h3>
                  <p style={styles.projectDescription} className="project-card-description">
                    {project.description}
                  </p>
                  <div style={styles.tagsList}>
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} style={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;