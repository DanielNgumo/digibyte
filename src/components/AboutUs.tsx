"use client";

import React, { useState, memo } from 'react';
import { Award, Zap } from 'lucide-react';

// Memoized stat card component
const StatCard = memo(({ icon, number, label }: { icon: React.ReactElement<any>; number: string; label: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white border border-gray-200 rounded-lg p-3 md:p-4 flex items-center gap-3 md:gap-4 transition-all duration-300 cursor-pointer flex-1 lg:flex-1 min-w-fit"
      style={{
        borderColor: isHovered ? '#f26d26' : '#e5e7eb',
        boxShadow: isHovered ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' : 'none',
        willChange: 'border-color, box-shadow',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      tabIndex={0}
      role="button"
      aria-label={`${number} ${label}`}
    >
      <div 
        className="w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
        style={{
          backgroundColor: isHovered ? '#f26d26' : '#fff7ed',
          color: isHovered ? '#ffffff' : '#f26d26',
          willChange: 'background-color, color',
        }}
      >
        {React.cloneElement(icon as React.ReactElement<any>, {
          size: 20,
          strokeWidth: 2
        })}
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-lg md:text-xl font-bold text-gray-900 leading-none">
          {number}
        </div>
        <div className="text-xs md:text-sm text-gray-600 font-medium leading-tight whitespace-nowrap">
          {label}
        </div>
      </div>
    </div>
  );
});

StatCard.displayName = 'StatCard';

export default function AboutUs() {
  const [isImageHovered, setIsImageHovered] = useState(false);

  const stats = [
    {
      icon: <Award size={20} />,
      number: "5+",
      label: "Years Experience"
    },
    {
      icon: <Zap size={20} />,
      number: "24/7",
      label: "Support Available"
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-white">
      <style jsx>{`
        @media (max-width: 640px) {
          .image-wrapper {
            max-width: min(100%, 280px);
            height: auto;
            aspect-ratio: 3/4;
          }

          .title {
            font-size: clamp(1.5rem, 5vw, 2.5rem);
          }

          .tagline {
            font-size: clamp(0.75rem, 2vw, 0.875rem);
          }

          .description {
            font-size: clamp(0.95rem, 2.5vw, 1.05rem);
          }

          .stats-grid {
            grid-template-columns: 1fr;
            gap: clamp(0.75rem, 2vw, 1rem);
          }
        }

        @media (min-width: 641px) and (max-width: 768px) {
          .image-wrapper {
            max-width: 100%;
            height: auto;
            aspect-ratio: 3/4;
          }

          .title {
            font-size: 2.25rem;
          }

          .description {
            font-size: 1rem;
          }

          .stats-grid {
            grid-template-columns: 1fr 1fr;
            gap: 1.25rem;
          }
        }

        @media (min-width: 769px) {
          .image-wrapper {
            width: 100%;
            max-width: 100%;
            height: auto;
            aspect-ratio: 3/4;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:ml-[250px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-start justify-center">
          
          {/* Empty space on left (1.5 cols) */}
          <div className="hidden lg:block lg:col-span-1.5"></div>

          {/* Image Column - Left (3 cols) */}
          <div className="lg:col-span-3 flex justify-center lg:justify-start">
            <div 
              className="relative w-full md:w-72 h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg group cursor-pointer image-wrapper"
              style={{ willChange: 'transform' }}
              onMouseEnter={() => setIsImageHovered(true)}
              onMouseLeave={() => setIsImageHovered(false)}
            >
              <img 
                src="/images/mobile.jpeg"
                alt="Team collaboration and digital innovation"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              
              {/* Hover Overlay */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-5 transition-opacity duration-300"
                style={{
                  opacity: isImageHovered ? 1 : 0,
                  willChange: 'opacity',
                }}
              >
                <p className="text-white text-sm md:text-base leading-relaxed font-medium">
                  From stunning graphics to powerful applications, we help businesses thrive in the digital landscape with cutting-edge technology and creative excellence.
                </p>
              </div>
            </div>
          </div>

          {/* Text & Stats Column - Right (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <span className="text-orange-600 text-sm md:text-base font-semibold uppercase tracking-widest mb-3 md:mb-4 block tagline">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 md:mb-6 leading-tight title">
              Transforming Ideas Into Digital Reality
            </h2>
            <p className="text-base md:text-lg text-gray-500 leading-relaxed mb-6 md:mb-8 description">
              We are a passionate team of technology experts committed to delivering 
              innovative digital solutions.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:flex lg:flex-wrap gap-3 md:gap-4 stats-grid">
              {stats.map((stat, index) => (
                <StatCard 
                  key={index}
                  icon={stat.icon}
                  number={stat.number}
                  label={stat.label}
                />
              ))}
            </div>
          </div>

          {/* Empty space on right (2.5 cols) */}
          <div className="hidden lg:block lg:col-span-2.5"></div>
        </div>
      </div>
    </section>
  );
}