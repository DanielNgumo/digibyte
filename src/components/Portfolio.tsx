"use client";

import React, { useState } from 'react';
import { ExternalLink, Eye, Code, Palette, Smartphone, Globe } from 'lucide-react';
import { CSSProperties } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web-design', label: 'Web Design' },
    { id: 'web-development', label: 'Web Development' },
    { id: 'app-development', label: 'App Development' },
    { id: 'graphics', label: 'Graphics Design' },
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web-development",
      description: "Modern online shopping platform with payment integration and inventory management.",
      image: "/api/placeholder/400/300",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      codeUrl: "#",
      icon: <Code size={20} />
    },
    {
      id: 2,
      title: "Restaurant Website",
      category: "web-design",
      description: "Elegant restaurant website with online reservation system and menu showcase.",
      image: "/api/placeholder/400/300",
      tags: ["UI/UX", "Responsive", "WordPress", "SEO"],
      liveUrl: "#",
      codeUrl: "#",
      icon: <Globe size={20} />
    },
    {
      id: 3,
      title: "Mobile Banking App",
      category: "app-development",
      description: "Secure mobile banking application with biometric authentication and real-time transactions.",
      image: "/api/placeholder/400/300",
      tags: ["React Native", "Firebase", "Biometric", "Security"],
      liveUrl: "#",
      codeUrl: "#",
      icon: <Smartphone size={20} />
    },
    {
      id: 4,
      title: "Brand Identity Package",
      category: "graphics",
      description: "Complete brand identity design including logo, business cards, and marketing materials.",
      image: "/api/placeholder/400/300",
      tags: ["Logo Design", "Branding", "Print Design", "Adobe Suite"],
      liveUrl: "#",
      codeUrl: "#",
      icon: <Palette size={20} />
    },
    {
      id: 5,
      title: "Task Management System",
      category: "web-development",
      description: "Collaborative project management tool with real-time updates and team communication.",
      image: "/api/placeholder/400/300",
      tags: ["Vue.js", "Laravel", "MySQL", "Socket.io"],
      liveUrl: "#",
      codeUrl: "#",
      icon: <Code size={20} />
    },
    {
      id: 6,
      title: "Portfolio Website",
      category: "web-design",
      description: "Creative portfolio website for a photography studio with gallery and booking system.",
      image: "/api/placeholder/400/300",
      tags: ["Next.js", "Tailwind", "Framer Motion", "CMS"],
      liveUrl: "#",
      codeUrl: "#",
      icon: <Globe size={20} />
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
    filterButtons: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: 'var(--spacing-sm)',
      marginBottom: 'var(--spacing-3xl)',
    },
    filterButton: {
      background: '#f8fafc',
      color: '#64748b',
      border: '1px solid #e2e8f0',
      padding: '8px 16px',
      borderRadius: 'var(--radius-lg)',
      fontSize: '0.875rem',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all var(--transition-default)',
    },
    activeFilterButton: {
      background: 'var(--color-primary-500)',
      color: '#ffffff',
      border: '1px solid var(--color-primary-500)',
    },
    projectsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: 'var(--spacing-xl)',
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
      height: '240px',
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
      fontSize: '1.5rem',
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
      gap: 'var(--spacing-md)',
      opacity: 0,
      transition: 'all var(--transition-default)',
    },
    actionButton: {
      background: '#ffffff',
      color: '#1f2937',
      border: 'none',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all var(--transition-default)',
    },
    cardContent: {
      padding: 'var(--spacing-lg)',
    },
    projectTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      fontFamily: 'var(--font-heading)',
      color: '#1f2937',
      marginBottom: 'var(--spacing-xs)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--spacing-xs)',
    },
    projectDescription: {
      fontSize: '0.975rem',
      color: '#6b7280',
      lineHeight: '1.5',
      marginBottom: 'var(--spacing-md)',
    },
    tagsList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--spacing-xs)',
    },
    tag: {
      background: '#f1f5f9',
      color: '#475569',
      padding: '4px 8px',
      borderRadius: 'var(--radius-md)',
      fontSize: '0.75rem',
      fontWeight: '500',
      border: '1px solid #e2e8f0',
    },
  };

  return (
    <>
      <style jsx>{`
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

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
          .filter-buttons {
            justify-content: flex-start;
            overflow-x: auto;
            padding-bottom: 10px;
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
                  <div style={styles.imagePlaceholder}>
                    {project.icon}
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
                    {project.icon}
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