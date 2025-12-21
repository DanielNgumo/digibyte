"use client";

import React, { useState, useMemo, memo } from 'react';
import Image from 'next/image';
import { ExternalLink, Eye, Code, Smartphone, Globe } from 'lucide-react';

// Memoized project card component
const ProjectDetails = memo(({ project }: { project: any }) => {
  const styles: { [key: string]: React.CSSProperties } = {
    projectDetails: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: 'clamp(1rem, 3vw, 2rem)',
      background: '#1f2937',
      borderRadius: 'clamp(0.5rem, 2vw, 1rem)',
      padding: 'clamp(1rem, 3vw, 2rem)',
      border: 'none',
      boxShadow: 'none',
      marginTop: '0.5rem',
      animation: 'slideIn 0.4s ease',
    },
    projectContent: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      order: 2,
    },
    projectImage: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      order: 1,
      width: '100%',
    },
    imageContainer: {
      position: 'relative',
      width: '100%',
      height: 'clamp(200px, 45vw, 350px)',
      borderRadius: 'clamp(0.375rem, 1.5vw, 0.75rem)',
      overflow: 'hidden',
      border: '1px solid #4b5563',
    },
    projectTitle: {
      fontSize: 'clamp(1.125rem, 3.5vw, 1.75rem)',
      fontWeight: '700',
      color: '#ffffff',
      marginBottom: 'clamp(0.5rem, 2vw, 0.875rem)',
      display: 'flex',
      alignItems: 'center',
      gap: 'clamp(0.375rem, 1.5vw, 0.625rem)',
      flexWrap: 'wrap',
    },
    projectDescription: {
      fontSize: 'clamp(0.875rem, 2vw, 1rem)',
      color: '#d1d5db',
      lineHeight: '1.6',
      marginBottom: 'clamp(0.875rem, 2vw, 1.25rem)',
    },
    tagsList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'clamp(0.375rem, 1.5vw, 0.5rem)',
      marginBottom: 'clamp(0.875rem, 2vw, 1.25rem)',
    },
    tag: {
      background: '#374151',
      color: '#d1d5db',
      padding: 'clamp(0.25rem, 1vw, 0.375rem) clamp(0.625rem, 1.5vw, 0.875rem)',
      borderRadius: 'clamp(0.25rem, 1vw, 0.375rem)',
      fontSize: 'clamp(0.6875rem, 1.5vw, 0.8125rem)',
      fontWeight: '500',
      border: '1px solid #4b5563',
      whiteSpace: 'nowrap',
    },
    projectActions: {
      display: 'flex',
      gap: 'clamp(0.5rem, 2vw, 0.75rem)',
      marginTop: 'auto',
      flexWrap: 'wrap',
    },
    actionBtn: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.375rem',
      padding: 'clamp(0.5rem, 1.5vw, 0.625rem) clamp(0.875rem, 2vw, 1.125rem)',
      borderRadius: 'clamp(0.375rem, 1vw, 0.5rem)',
      fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      border: 'none',
      textDecoration: 'none',
      flex: '1 1 auto',
      minWidth: 'clamp(100px, 30vw, 130px)',
    },
    primaryBtn: {
      background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
      color: '#ffffff',
      boxShadow: '0 2px 8px rgba(59, 130, 246, 0.3)',
    },
    secondaryBtn: {
      background: 'transparent',
      color: '#d1d5db',
      border: '1px solid #4b5563',
    },
  };

  return (
    <div style={styles.projectDetails} className="project-details">
      <div style={styles.projectImage} className="project-image">
        <div style={styles.imageContainer} className="image-container">
          <Image
            src={project.image}
            alt={`${project.title} - Project Screenshot`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 50vw"
            style={{ objectFit: 'cover' }}
            priority={false}
          />
        </div>
      </div>

      <div style={styles.projectContent}>
        <h3 style={styles.projectTitle} className="project-title">
          {React.cloneElement(project.icon as React.ReactElement<any>, { 
            size: typeof window !== 'undefined' && window.innerWidth < 640 ? 20 : 24 
          })}
          {project.title}
        </h3>
        <p style={styles.projectDescription} className="project-description">
          {project.description}
        </p>
        <div style={styles.tagsList}>
          {project.tags.map((tag: string, index: number) => (
            <span key={index} style={styles.tag}>{tag}</span>
          ))}
        </div>
        <div style={styles.projectActions}>
          <a
            href={project.liveUrl}
            style={{ ...styles.actionBtn, ...styles.primaryBtn }}
            className="action-btn primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Eye size={14} />
            View Live
          </a>
          <a
            href={project.codeUrl}
            style={{ ...styles.actionBtn, ...styles.secondaryBtn }}
            className="action-btn secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={14} />
            View Code
          </a>
        </div>
      </div>
    </div>
  );
});

ProjectDetails.displayName = 'ProjectDetails';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(1);

  const projects = useMemo(() => [
    {
      id: 1,
      title: "Before After School Limited",
      category: "web",
      description: "Responsive payment app website with server-side rendering for SEO using Next.js.",
      image: "/images/bas.jpeg",
      tags: ["Next.js", "TypeScript", "APIs"],
      liveUrl: "https://beforeafterschool.com/",
      codeUrl: "#",
      icon: <Globe size={32} />
    },
    {
      id: 2,
      title: "Wateramba",
      category: "web",
      description: "Aquatic services website with interactive UI using React and RESTful APIs.",
      image: "/images/wateramb.jpeg",
      tags: ["React", "APIs", "JavaScript"],
      liveUrl: "https://wateramba.com/",
      codeUrl: "#",
      icon: <Globe size={32} />
    },
    {
      id: 3,
      title: "Tranzit Mobile App",
      category: "mobile",
      description: "Transportation-of-goods app with real-time geolocation using Flutter.",
      image: "/images/tranzit.png",
      tags: ["Flutter", "Geolocation", "APIs"],
      liveUrl: "https://tranzit.cloud/",
      codeUrl: "#",
      icon: <Smartphone size={32} />
    },
    {
      id: 4,
      title: "Latisec",
      category: "web",
      description: "Cybersecurity website with secure API integration using Angular and PHP.",
      image: "/images/latisec.jpeg",
      tags: ["Angular", "PHP", "APIs"],
      liveUrl: "https://latisec.com/",
      codeUrl: "#",
      icon: <Code size={32} />
    },
    {
      id: 5,
      title: "Ibukatech",
      category: "web",
      description: "E-learning website with server-side rendering for SEO using Angular 17.",
      image: "/images/ibuka.jpeg",
      tags: ["Angular", "TypeScript", "SSR"],
      liveUrl: "https://ibukatech.com/",
      codeUrl: "#",
      icon: <Code size={32} />
    },
    {
      id: 6,
      title: "Paynasi",
      category: "web",
      description: "Responsive payment app website with server-side rendering for SEO using Next.js.",
      image: "/images/paynasi_logo.jpg",
      tags: ["Next.js", "TypeScript", "APIs"],
      liveUrl: "#",
      codeUrl: "https://paynasi-43tv.vercel.app/",
      icon: <Globe size={32} />
    },
  ], []);

  const filteredProjects = useMemo(() => projects, [projects]);

  const handleProjectClick = (projectId: number) => {
    setSelectedProject(selectedProject === projectId ? null : projectId);
  };

  const selectedProjectData = selectedProject
    ? filteredProjects.find(p => p.id === selectedProject)
    : null;

  const styles: { [key: string]: React.CSSProperties } = {
    section: {
      padding: 'clamp(1.5rem, 6vw, 4rem) 0',
      background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%)',
      position: 'relative',
      zIndex: 10,
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 clamp(0.875rem, 3vw, 1.5rem)',
      width: '100%',
      boxSizing: 'border-box',
    },
    header: {
      textAlign: 'center',
      marginBottom: 'clamp(1.25rem, 3vw, 2rem)',
      padding: '0 clamp(0.5rem, 2vw, 1rem)',
    },
    tagline: {
      color: '#f26d26',
      fontSize: 'clamp(0.6875rem, 2vw, 0.875rem)',
      fontWeight: '600',
      marginBottom: 'clamp(0.375rem, 1.5vw, 0.625rem)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      display: 'block',
    },
    title: {
      fontSize: 'clamp(1.375rem, 5vw, 2.5rem)',
      fontWeight: '700',
      color: '#1f2937',
      marginBottom: 'clamp(0.625rem, 2.5vw, 1rem)',
      lineHeight: '1.2',
    },
    description: {
      fontSize: 'clamp(0.875rem, 2vw, 1.0625rem)',
      color: '#4b5563',
      maxWidth: '100%',
      margin: '0 auto',
      lineHeight: '1.6',
    },
    timelineContainer: {
      position: 'relative',
      padding: 'clamp(0.875rem, 2.5vw, 1.5rem) 0 clamp(1.25rem, 3vw, 2rem)',
      marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
    },
    timelineWrapper: {
      position: 'relative',
      width: '100%',
      overflowX: 'auto',
      overflowY: 'visible',
      paddingBottom: '0.75rem',
      WebkitOverflowScrolling: 'touch',
    },
    timelineTrack: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      minWidth: '100%',
      padding: '0 clamp(0.75rem, 2.5vw, 1.5rem)',
    },
    timelineLine: {
      position: 'absolute',
      top: '50%',
      left: 'clamp(0.75rem, 2.5vw, 1.5rem)',
      right: 'clamp(0.75rem, 2.5vw, 1.5rem)',
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
      gap: 'clamp(0.5rem, 2vw, 1rem)',
    },
    timelinePoint: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      cursor: 'pointer',
      flex: '0 0 auto',
      minWidth: 'clamp(60px, 12vw, 85px)',
      transition: 'all 0.3s ease',
      padding: '0.25rem',
    },
    pointDot: {
      width: 'clamp(10px, 2.5vw, 14px)',
      height: 'clamp(10px, 2.5vw, 14px)',
      borderRadius: '50%',
      background: '#ffffff',
      border: '2px solid #e5e7eb',
      transition: 'all 0.3s ease',
      marginBottom: 'clamp(0.375rem, 1.5vw, 0.625rem)',
      zIndex: 3,
    },
    activeDot: {
      width: 'clamp(14px, 3.5vw, 18px)',
      height: 'clamp(14px, 3.5vw, 18px)',
      border: '3px solid transparent',
      background: 'linear-gradient(135deg, #3b82f6, #8b5cf6) padding-box, linear-gradient(135deg, #3b82f6, #8b5cf6) border-box',
      boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.2), 0 0 12px rgba(139, 92, 246, 0.4)',
    },
    pointLabel: {
      fontSize: 'clamp(0.5625rem, 1.25vw, 0.8125rem)',
      fontWeight: '600',
      color: '#64748b',
      textAlign: 'center',
      transition: 'all 0.3s ease',
      whiteSpace: 'normal',
      maxWidth: '100%',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      lineHeight: '1.2',
      wordBreak: 'break-word',
      hyphens: 'auto',
    },
    activeLabel: {
      color: '#f26d26',
      fontWeight: '700',
    },
  };

  const progressWidth = selectedProject
    ? `${((filteredProjects.findIndex(p => p.id === selectedProject) + 1) / filteredProjects.length) * 100}%`
    : '0%';

  return (
    <>
      <style jsx>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Extra small devices (phones in portrait, less than 375px) */
        @media (max-width: 374px) {
          .project-details { 
            grid-template-columns: 1fr !important; 
            padding: 0.875rem !important; 
            gap: 0.875rem !important;
          }
          .image-container { height: 180px !important; }
          .project-title { font-size: 1rem !important; gap: 0.375rem !important; }
          .project-description { font-size: 0.8125rem !important; }
          .tag { font-size: 0.625rem !important; padding: 0.1875rem 0.5rem !important; }
          .action-btn { padding: 0.4375rem 0.75rem !important; font-size: 0.6875rem !important; }
          .timeline-point { min-width: 50px !important; }
          .point-label { font-size: 0.5rem !important; }
        }

        /* Small devices (phones, 375px and up) */
        @media (min-width: 375px) and (max-width: 479px) {
          .project-details { 
            grid-template-columns: 1fr !important; 
            padding: 1rem !important;
            gap: 1rem !important;
          }
          .image-container { height: 200px !important; }
          .project-title { font-size: 1.0625rem !important; }
          .timeline-point { min-width: 55px !important; }
        }

        /* Medium-small devices (large phones, 480px to 639px) */
        @media (min-width: 480px) and (max-width: 639px) {
          .project-details { 
            grid-template-columns: 1fr !important; 
            gap: 1.125rem !important;
          }
          .image-container { height: 240px !important; }
          .timeline-point { min-width: 65px !important; }
        }

        /* Medium devices (tablets, 640px to 767px) */
        @media (min-width: 640px) and (max-width: 767px) {
          .project-details { 
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
          .image-container { height: 280px !important; }
          .timeline-point { min-width: 70px !important; }
        }

        /* Medium-large devices (tablets landscape, 768px to 1023px) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .project-details { 
            grid-template-columns: 1fr 1fr !important;
            gap: 1.5rem !important;
          }
          .project-content { order: 1; }
          .project-image { order: 2; }
          .image-container { height: 300px !important; }
        }

        /* Large devices (desktops, 1024px and up) */
        @media (min-width: 1024px) {
          .project-details { 
            grid-template-columns: 1fr 1fr !important; 
            gap: 2rem !important;
          }
          .project-content { order: 1; }
          .project-image { order: 2; }
          .image-container { height: 350px !important; }
        }

        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .timeline-point {
            min-height: 44px;
            min-width: 44px;
          }
          .action-btn {
            min-height: 44px;
          }
        }

        /* Hover effects for devices that support it */
        @media (hover: hover) and (pointer: fine) {
          .timeline-point:hover .point-dot { 
            transform: scale(1.15); 
            border-color: #f26d26; 
          }
          .timeline-point:hover .point-label { 
            color: #f26d26; 
          }
          .action-btn.primary:hover { 
            background: linear-gradient(135deg, #2563eb, #7c3aed); 
            transform: translateY(-2px); 
            box-shadow: 0 4px 12px rgba(59, 130, 246, 0.5); 
          }
          .action-btn.secondary:hover { 
            background: #374151; 
            border-color: #6b7280; 
            color: #ffffff; 
            transform: translateY(-2px); 
          }
        }

        /* Custom scrollbar styling */
        .timeline-wrapper::-webkit-scrollbar { 
          height: 5px; 
        }
        .timeline-wrapper::-webkit-scrollbar-track { 
          background: #f1f5f9; 
          border-radius: 2.5px; 
        }
        .timeline-wrapper::-webkit-scrollbar-thumb { 
          background: #cbd5e1; 
          border-radius: 2.5px; 
        }
        .timeline-wrapper::-webkit-scrollbar-thumb:hover { 
          background: #94a3b8; 
        }

        /* Smooth scrolling behavior */
        .timeline-wrapper {
          scroll-behavior: smooth;
          scroll-snap-type: x proximity;
        }

        .timeline-point {
          scroll-snap-align: center;
        }

        /* Focus styles for accessibility */
        .timeline-point:focus-visible {
          outline: 2px solid #f26d26;
          outline-offset: 4px;
          border-radius: 4px;
        }

        .action-btn:focus-visible {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }
      `}</style>

      <section style={styles.section} id="portfolio" className="portfolio-section">
        <div style={styles.container} className="portfolio-container">
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
                  <div style={{ ...styles.timelineProgress, width: progressWidth }} />
                </div>

                <div style={styles.timelinePoints}>
                  {filteredProjects.map((project) => (
                    <div
                      key={project.id}
                      style={styles.timelinePoint}
                      className="timeline-point"
                      onClick={() => handleProjectClick(project.id)}
                      onKeyPress={(e) => (e.key === 'Enter' || e.key === ' ') && handleProjectClick(project.id)}
                      tabIndex={0}
                      role="button"
                      aria-pressed={selectedProject === project.id}
                      aria-label={`Select ${project.title} project`}
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

          {selectedProjectData && <ProjectDetails project={selectedProjectData} />}
        </div>
      </section>
    </>
  );
};

export default memo(Portfolio);