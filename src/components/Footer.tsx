"use client";

import React, { useCallback, useMemo, memo, type ComponentProps, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Facebook,
  ArrowUp,
  Code2,
  Circle,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string; size?: number }>;
}
interface FooterSection {
  label: string;
  links: FooterLink[];
}

// ─── AnimatedContainer (from footer-section prompt) ──────────────────────────
type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>["className"];
  children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) return <>{children}</>;
  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: 16, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const footerSections: FooterSection[] = [
  {
    label: "Quick Links",
    links: [
      { title: "Home",      href: "#hero" },
      { title: "About Us",  href: "#about" },
      { title: "Services",  href: "#services" },
      { title: "Portfolio", href: "#portfolio" },
      { title: "Contact",   href: "#contact" },
    ],
  },
  {
    label: "Our Services",
    links: [
      { title: "Graphic Design",     href: "#services" },
      { title: "Web Design",         href: "#services" },
      { title: "Web Development",    href: "#services" },
      { title: "App Development",    href: "#services" },
      { title: "IT Security",        href: "#services" },
      { title: "Database Solutions", href: "#services" },
    ],
  },
  {
    label: "Company",
    links: [
      { title: "Privacy Policy",   href: "/privacy" },
      { title: "Terms of Service", href: "/terms" },
    ],
  },
];

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin,  href: "https://www.linkedin.com/in/daniel-ngumo-20960127b/" },
  { name: "GitHub",   icon: Github,    href: "https://github.com/DanielNgumo" },
  { name: "Twitter",  icon: Twitter,   href: "#" },
  { name: "Facebook", icon: Facebook,  href: "#" },
];

const contactInfo = [
  { icon: Mail,   content: "dev@technasi.co.ke" },
  { icon: Phone,  content: "+254 742 580 239" },
  { icon: MapPin, content: "Nairobi, Kenya" },
];

// ─── Scroll-to-top button ─────────────────────────────────────────────────────
const ScrollTopButton = memo(({ onClick }: { onClick: () => void }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ y: -4, scale: 1.08 }}
    whileTap={{ scale: 0.95 }}
    aria-label="Scroll to top"
    type="button"
    className="absolute -top-6 right-6 md:right-12 w-12 h-12 rounded-full flex items-center justify-center
               bg-[#f26d26] text-white shadow-[0_6px_24px_rgba(242,109,38,0.45)]
               border border-[#f26d26]/30 transition-shadow duration-300
               hover:shadow-[0_10px_32px_rgba(242,109,38,0.6)]"
  >
    <ArrowUp size={20} />
  </motion.button>
));
ScrollTopButton.displayName = "ScrollTopButton";

// ─── Footer ───────────────────────────────────────────────────────────────────
const Footer = memo(() => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <footer className="relative w-full bg-[#030303] border-t border-white/[0.07] overflow-hidden">
      {/* Radial glow at top — mirrors the footer-section prompt effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-px bg-gradient-to-r from-transparent via-[#f26d26]/40 to-transparent" />
      <div
        className="absolute top-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 120px at 50% 0%, rgba(12,74,110,0.18) 0%, transparent 100%)",
        }}
      />

      {/* Ambient blobs */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full bg-[#0c4a6e]/8 blur-[100px] pointer-events-none" />
      <div className="absolute top-10 right-0 w-[300px] h-[250px] rounded-full bg-[#f26d26]/6 blur-[90px] pointer-events-none" />

      {/* Dot-grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <ScrollTopButton onClick={scrollToTop} />

      {/* ── Main content ──────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-10 md:pt-20 md:pb-12">
        <div className="grid xl:grid-cols-3 gap-10 xl:gap-12 mb-14">

          {/* Brand column */}
          <AnimatedContainer delay={0.05} className="xl:col-span-1 space-y-5">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#f26d26]/10 border border-[#f26d26]/20 flex items-center justify-center">
                <Code2 size={18} className="text-[#f26d26]" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                TechNasi
              </span>
            </div>

            {/* Tagline */}
            <p className="text-sm text-white/45 leading-relaxed max-w-xs">
              Transforming ideas into digital reality. Your trusted partner for
              innovative tech solutions and creative excellence in Kenya.
            </p>

            {/* Contact info */}
            <ul className="space-y-2.5 mt-2">
              {contactInfo.map(({ icon: Icon, content }) => (
                <li key={content} className="flex items-center gap-2.5 text-sm text-white/50 hover:text-white/80 transition-colors duration-200">
                  <Icon size={13} className="text-[#f26d26] flex-shrink-0" />
                  <span>{content}</span>
                </li>
              ))}
            </ul>

            {/* Social icons */}
            <div className="flex items-center gap-2 pt-1">
              {socialLinks.map(({ name, icon: Icon, href }) => (
                <motion.a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/[0.09] flex items-center justify-center
                             text-white/50 hover:text-white hover:bg-[#f26d26]/20 hover:border-[#f26d26]/30
                             transition-colors duration-200"
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </AnimatedContainer>

          {/* Link columns */}
          <div className="xl:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            {footerSections.map((section, i) => (
              <AnimatedContainer key={section.label} delay={0.12 + i * 0.08}>
                <div>
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40 mb-4">
                    {section.label}
                  </h3>
                  <ul className="space-y-2.5">
                    {section.links.map((link) => (
                      <li key={link.title}>
                        <a
                          href={link.href}
                          className="group inline-flex items-center gap-1.5 text-sm text-white/50
                                     hover:text-white transition-all duration-200
                                     hover:translate-x-1 transform"
                        >
                          {link.icon && (
                            <link.icon size={13} className="text-[#f26d26]/70 group-hover:text-[#f26d26]" />
                          )}
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedContainer>
            ))}
          </div>
        </div>

        {/* ── Divider ─────────────────────────────────────────────────────── */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-7" />

        {/* ── Bottom bar ──────────────────────────────────────────────────── */}
        <AnimatedContainer delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-xs text-white/30">
              <Circle className="w-1.5 h-1.5 fill-[#f26d26] text-[#f26d26]" />
              <span>© {currentYear} TechNasi. All rights reserved.</span>
            </div>

            {/* Legal links */}
            <div className="flex items-center gap-6">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-xs text-white/30 hover:text-white/70 transition-colors duration-200"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";
export default Footer;