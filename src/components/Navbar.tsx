"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Menu, X, Phone, MapPin, Mail } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({ top: targetElement.offsetTop - 100, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50">
        {/* Top Bar */}
        <div className="bg-gray-900 text-white py-2 text-[13px]">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <div className="flex gap-6 text-white">
              <div className="flex items-center gap-1.5">
                <MapPin size={12} className="text-white" />
                <span className="hidden sm:inline">Nairobi, Kenya</span>
              </div>
              <div className="hidden md:flex items-center gap-1.5">
                <Mail size={12} className="text-white" />
                <span>dev@technasi.co.ke</span>
              </div>
            </div>
            <div className="hidden md:block text-white font-medium">
              🚀 We help you grow your business
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#048ccc]/95 backdrop-blur-md shadow-lg' 
            : 'bg-[#048ccc]'
        }`}>
          <div className="max-w-7xl mx-auto px-4 h-[70px] sm:h-[70px] flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <div className="flex items-center gap-3 transition-transform duration-300 hover:scale-105">
                <Image 
                  src="/logo.png" 
                  alt="TechNasi Logo" 
                  width={40}
                  height={40}
                  className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 object-contain rounded-md"
                  priority
                  quality={90}
                />
                <span className="text-[22px] sm:text-2xl lg:text-[28px] font-extrabold text-white whitespace-nowrap hover:text-yellow-300 transition-colors">
                  TechNasi
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex flex-1 justify-center gap-8 mx-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative text-white font-medium text-base px-4 py-2 rounded-lg transition-all duration-300 hover:text-yellow-300 hover:bg-white/10 hover:-translate-y-0.5 after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-yellow-300 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Contact Info */}
            <div className="hidden md:flex items-center gap-3 px-5 py-3 bg-white/10 rounded-xl backdrop-blur-md border border-white/20">
              <Phone size={16} className="text-white" />
              <div className="flex flex-col">
                <span className="text-[11px] text-white/80 leading-none">Call us:</span>
                <a href="tel:+254742580239" className="text-sm font-semibold text-yellow-300 hover:text-white leading-none transition-colors">
                  +254 742 580 239
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex items-center justify-center p-2 text-white rounded-lg hover:bg-white/10 transition-all"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`absolute top-full left-0 right-0 bg-[#048ccc] backdrop-blur-md border-t border-white/10 shadow-2xl transition-all duration-300 ${
          isMobileMenuOpen 
            ? 'translate-y-0 opacity-100 visible' 
            : '-translate-y-full opacity-0 invisible'
        }`}>
          <div className="p-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block text-white text-lg font-medium py-4 border-b border-white/10 last:border-0 hover:text-yellow-300 hover:pl-4 transition-all"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-6 pt-6 border-t border-white/10 text-center">
              <a 
                href="tel:+254742580239" 
                className="inline-flex items-center gap-2 text-yellow-300 font-semibold text-base px-6 py-3 bg-white/10 rounded-full hover:bg-white/20 hover:text-white hover:-translate-y-0.5 transition-all"
              >
                <Phone size={16} />
                +254 742 580 239
              </a>
            </div>
          </div>
        </div>

        {/* Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-[-1] animate-[fadeIn_0.3s_ease]"
            onClick={() => setIsMobileMenuOpen(false)} 
          />
        )}
      </nav>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default Navbar;