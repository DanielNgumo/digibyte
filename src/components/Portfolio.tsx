"use client";

import React, { useState, useMemo } from 'react';
import { ExternalLink, Eye, Code, Smartphone, Globe } from 'lucide-react';
import { CSSProperties } from 'react';
import Image from 'next/image';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(1);

  const projects = useMemo(() => [
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
  ], []);

  const filteredProjects = useMemo(() => {
    return projects;
  }, [projects]);

  const handleProjectClick = (projectId: number) => {
    setSelectedProject(selectedProject === projectId ? null : projectId);
  };

  const selectedProjectData = selectedProject 
    ? filteredProjects.find(p => p.id === selectedProject) 
    : null;

  const styles: { [key: string]: CSSProperties } = {
    section: {
      padding: 'clamp(2rem, 8vw, 6rem) 0',
      background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%)',
      fontFamily: 'var(--font-sans)',
      position: 'relative',
      zIndex: 10,
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 clamp(70px, 8vw, 140px)',
      width: '100%',
      boxSizing: 'border-box',
    },
    header: {
      textAlign: 'center',
      marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
      padding: '0 clamp(0.5rem, 2vw, 1rem)',
    },
    tagline: {
      color: 'var(--color-primary-500)',
      fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
      fontWeight: '600',
      fontFamily: 'var(--font-heading)',
      marginBottom: 'clamp(0.5rem, 2vw, 1rem)',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      display: 'block',
    },
    title: {
      fontSize: 'clamp(1.75rem, 6vw, 3rem)',
      fontWeight: '700',
      fontFamily: 'var(--font-heading)',
      color: '#1f2937',
      marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
      lineHeight: '1.2',
    },
    description: {
      fontSize: 'clamp(1rem, 3vw, 1.125rem)',
      color: '#6b7280',
      maxWidth: '100%',
      margin: '0 auto',
      lineHeight: '1.6',
    },
    timelineContainer: {
      position: 'relative',
      padding: '1rem 0 2rem',
      marginBottom: '1.5rem',
    },
    timelineWrapper: {
      position: 'relative',
      width: '100%',
      overflowX: 'auto',
      overflowY: 'visible',
      paddingBottom: '1rem',
    },
    timelineTrack: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      minWidth: '100%',
      padding: '0 2rem',
    },
    timelineLine: {
      position: 'absolute',
      top: '50%',
      left: '2rem',
      right: '2rem',
      height: '2px',
      background: '#e5e7eb',
      transform: 'translateY(-50%)',
      zIndex: 1,
    },
    timelineProgress: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #8b5cf6, #3b82f6)',
      backgroundSize: '200% 100%',
      animation: 'gradientShift 3s ease infinite',
      transition: 'width 0.5s ease',
      zIndex: 2,
      boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)',
    },
    timelinePoints: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      zIndex: 3,
    },
    timelinePoint: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      cursor: 'pointer',
      flex: '0 0 auto',
      minWidth: '80px',
      transition: 'all 0.3s ease',
    },
    pointDot: {
      width: '16px',
      height: '16px',
      borderRadius: '50%',
      background: '#ffffff',
      border: '3px solid #e5e7eb',
      transition: 'all 0.3s ease',
      marginBottom: '0.75rem',
      zIndex: 3,
    },
    activeDot: {
      width: '20px',
      height: '20px',
      border: '3px solid transparent',
      background: 'linear-gradient(135deg, #3b82f6, #8b5cf6) padding-box, linear-gradient(135deg, #3b82f6, #8b5cf6) border-box',
      boxShadow: '0 0 0 4px rgba(59, 130, 246, 0.2), 0 0 15px rgba(139, 92, 246, 0.4)',
    },
    pointLabel: {
      fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
      fontWeight: '600',
      color: '#6b7280',
      textAlign: 'center',
      transition: 'all 0.3s ease',
      whiteSpace: 'nowrap',
      maxWidth: '120px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    activeLabel: {
      color: 'var(--color-primary-500)',
      fontWeight: '700',
    },
    projectDetails: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'clamp(2rem, 4vw, 3rem)',
      background: '#1f2937',
      borderRadius: 'var(--radius-xl)',
      padding: 'clamp(1.5rem, 4vw, 2.5rem)',
      border: 'none',
      boxShadow: 'none',
      marginTop: '0.5rem',
      animation: 'slideIn 0.4s ease',
    },
    projectContent: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    projectImage: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageContainer: {
      position: 'relative',
      width: '100%',
      height: '400px',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      border: '1px solid #4b5563',
    },
    projectTitle: {
      fontSize: 'clamp(1.5rem, 4vw, 2rem)',
      fontWeight: '700',
      fontFamily: 'var(--font-heading)',
      color: '#ffffff',
      marginBottom: '1rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
    },
    projectDescription: {
      fontSize: 'clamp(0.975rem, 2.5vw, 1.125rem)',
      color: '#d1d5db',
      lineHeight: '1.6',
      marginBottom: '1.5rem',
    },
    tagsList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
      marginBottom: '1.5rem',
    },
    tag: {
      background: '#374151',
      color: '#d1d5db',
      padding: '4px 12px',
      borderRadius: 'var(--radius-md)',
      fontSize: '0.875rem',
      fontWeight: '500',
      border: '1px solid #4b5563',
    },
    projectActions: {
      display: 'flex',
      gap: '1rem',
      marginTop: 'auto',
    },
    actionBtn: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.375rem',
      padding: '0.5rem 1rem',
      borderRadius: 'var(--radius-md)',
      fontSize: '0.875rem',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      border: 'none',
      textDecoration: 'none',
    },
    primaryBtn: {
      background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
      color: '#ffffff',
      boxShadow: '0 2px 8px rgba(59, 130, 246, 0.3)',
    },
    secondaryBtn: {
      background: 'transparent',
      color: '#64748b',
      border: '1px solid #e2e8f0',
    },
  };

  const progressWidth = selectedProject 
    ? `${((filteredProjects.findIndex(p => p.id === selectedProject) + 1) / filteredProjects.length) * 100}%`
    : '0%';

  return (
    <>
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        /* Scrollbar styling for timeline */
        .timeline-wrapper::-webkit-scrollbar {
          height: 6px;
        }

        .timeline-wrapper::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 3px;
        }

        .timeline-wrapper::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
        }

        .timeline-wrapper::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }

        /* Mobile adjustments */
        @media (max-width: 768px) {
          .portfolio-section .container {
            padding: 0 clamp(1rem, 4vw, 2rem) !important;
          }

          .project-details {
            grid-template-columns: 1fr !important;
          }

          .project-image {
            order: -1;
          }

          .image-container {
            height: 250px !important;
          }

          .timeline-track {
            padding: 0 1rem !important;
          }

          .timeline-line {
            left: 1rem !important;
            right: 1rem !important;
          }

          .timeline-point {
            min-width: 60px !important;
          }

          .point-label {
            font-size: 0.625rem !important;
            max-width: 80px !important;
          }
        }

        /* Filter buttons mobile scroll */
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
        }

        /* Hover effects */
        @media (hover: hover) and (pointer: fine) {
          .timeline-point:hover .point-dot {
            transform: scale(1.2);
            border-color: var(--color-primary-500);
          }

          .timeline-point:hover .point-label {
            color: var(--color-primary-500);
          }

          .action-btn.primary:hover {
            background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(59, 130, 246, 0.5);
          }

          .action-btn.secondary:hover {
            background: #f8fafc;
            border-color: var(--color-primary-500);
            color: var(--color-primary-500);
            transform: translateY(-1px);
          }
        }

        /* Dark mode adjustments */
        @media (prefers-color-scheme: dark) {
          .portfolio-section {
            background: linear-gradient(135deg, #1f2937 0%, #111827 50%, #1f2937 100%);
          }
          
          .portfolio-title {
            color: #ffffff !important;
          }
          
          .portfolio-description {
            color: #d1d5db !important;
          }
          
          .timeline-line {
            background: #4b5563;
          }

          .point-dot {
            background: #374151;
            border-color: #4b5563;
          }

          .point-label {
            color: #d1d5db;
          }

          .active-label {
            color: var(--color-primary-400) !important;
          }
        }

        /* Accessibility */
        .timeline-point:focus {
          outline: 2px solid var(--color-primary-500);
          outline-offset: 4px;
          border-radius: 4px;
        }

        .action-btn:focus {
          outline: 2px solid var(--color-primary-500);
          outline-offset: 2px;
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .timeline-progress,
          .timeline-point,
          .point-dot,
          .project-details,
          .action-btn {
            transition: none !important;
          }
          
          .project-details {
            animation: none !important;
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
              Take a look at some of our recent work and see how we&apos;ve helped 
              businesses transform their digital presence.
            </p>
          </div>

          <div style={styles.timelineContainer}>
            <div style={styles.timelineWrapper} className="timeline-wrapper">
              <div style={styles.timelineTrack} className="timeline-track">
                <div style={styles.timelineLine} className="timeline-line">
                  <div 
                    style={{
                      ...styles.timelineProgress,
                      width: progressWidth
                    }}
                  />
                </div>
                
                <div style={styles.timelinePoints}>
                  {filteredProjects.map((project, index) => (
                    <div
                      key={project.id}
                      style={styles.timelinePoint}
                      className="timeline-point"
                      onClick={() => handleProjectClick(project.id)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          handleProjectClick(project.id);
                        }
                      }}
                      tabIndex={0}
                      role="button"
                      aria-pressed={selectedProject === project.id}
                    >
                      <div 
                        style={{
                          ...styles.pointDot,
                          ...(selectedProject === project.id ? styles.activeDot : {})
                        }}
                        className="point-dot"
                      />
                      <span 
                        style={{
                          ...styles.pointLabel,
                          ...(selectedProject === project.id ? styles.activeLabel : {})
                        }}
                        className="point-label"
                      >
                        {project.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {selectedProjectData && (
            <div style={styles.projectDetails} className="project-details">
              <div style={styles.projectContent}>
                <h3 style={styles.projectTitle} className="project-title">
                  {React.cloneElement(selectedProjectData.icon, { size: 28 })}
                  {selectedProjectData.title}
                </h3>
                <p style={styles.projectDescription} className="project-description">
                  {selectedProjectData.description}
                </p>
                <div style={styles.tagsList}>
                  {selectedProjectData.tags.map((tag, index) => (
                    <span key={index} style={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div style={styles.projectActions}>
                  <a 
                    href={selectedProjectData.liveUrl}
                    style={{...styles.actionBtn, ...styles.primaryBtn}}
                    className="action-btn primary"
                  >
                    <Eye size={16} />
                    View Live
                  </a>
                  <a 
                    href={selectedProjectData.codeUrl}
                    style={{...styles.actionBtn, ...styles.secondaryBtn}}
                    className="action-btn secondary"
                  >
                    <ExternalLink size={16} />
                    View Code
                  </a>
                </div>
              </div>
              
              <div style={styles.projectImage} className="project-image">
                <div style={styles.imageContainer} className="image-container">
                  <Image
                    src={selectedProjectData.image}
                    alt={selectedProjectData.title}
                    fill
                    style={{
                      objectFit: 'cover',
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      if (target.parentElement) {
                        target.parentElement.style.background = 'linear-gradient(135deg, var(--color-primary-500), var(--color-secondary-500))';
                        target.parentElement.style.display = 'flex';
                        target.parentElement.style.alignItems = 'center';
                        target.parentElement.style.justifyContent = 'center';
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Portfolio;