"use client";

import React, { useState } from 'react';
import { Award, Zap } from 'lucide-react';

export default function AboutUs() {
  const [isHovered, setIsHovered] = useState(false);

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
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:ml-[250px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-start justify-center">
          
          {/* Empty space on left (1.5 cols) */}
          <div className="hidden lg:block lg:col-span-1.5"></div>

          {/* Image Column - Left (3 cols) */}
          <div className="lg:col-span-3 flex justify-center lg:justify-start">
            <div 
              className="relative w-full md:w-72 h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img 
                src="/images/mobile.jpeg"
                alt="Team collaboration and digital innovation"
                className="w-full h-full object-cover"
              />
              
              {/* Hover Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-5 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                <p className="text-white text-sm md:text-base leading-relaxed font-medium">
                  From stunning graphics to powerful applications, we help businesses thrive in the digital landscape with cutting-edge technology and creative excellence.
                </p>
              </div>
            </div>
          </div>

          {/* Text & Stats Column - Right (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <span className="text-orange-600 text-sm md:text-base font-semibold font-poppins uppercase tracking-widest mb-3 md:mb-4 block">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins text-black mb-4 md:mb-6 leading-tight">
              Transforming Ideas Into Digital Reality
            </h2>
            <p className="text-base md:text-lg text-gray-500 leading-relaxed mb-6 md:mb-8">
              We are a passionate team of technology experts committed to delivering 
              innovative digital solutions.
            </p>

            {/* Stats Grid - Vertical on Mobile, Flex on Desktop */}
            <div className="grid grid-cols-2 lg:flex lg:flex-wrap gap-3 md:gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-3 md:p-4 flex items-center gap-3 md:gap-4 hover:border-orange-600 hover:shadow-md transition-all duration-300 cursor-pointer flex-1 lg:flex-1 min-w-fit"
                  tabIndex={0}
                  role="button"
                  aria-label={`${stat.number} ${stat.label}`}
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600 flex-shrink-0 hover:bg-orange-600 hover:text-white transition-all duration-300">
                    {React.cloneElement(stat.icon, {
                      size: 20,
                      strokeWidth: 2
                    })}
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="text-lg md:text-xl font-bold font-poppins text-gray-900 leading-none">
                      {stat.number}
                    </div>
                    <div className="text-xs md:text-sm text-gray-600 font-medium leading-tight whitespace-nowrap">
                      {stat.label}
                    </div>
                  </div>
                </div>
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