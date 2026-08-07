"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Linkedin } from "lucide-react";

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M1 13L13 1M13 1H4M13 1V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DribbbleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.152-.136-.306-.209-.459-.232-.491-.481-.98-.744-1.459 2.284-1.003 4.862-2.988 4.966-3.125zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.129-2.576 1.924-4.942 2.888-.845-1.521-1.781-2.989-2.775-4.361A8.686 8.686 0 0112 3.475zm-3.633.803a53.896 53.896 0 012.816 4.247c-3.511 1.055-6.635 1.011-6.929 1.007a8.523 8.523 0 014.113-5.254zM3.475 12c0-.084.002-.168.007-.252.291.005 3.912.051 6.7-1.276.187.363.366.728.535 1.092-.076.024-.15.049-.224.075-3.341 1.137-5.717 4.243-5.898 4.519a8.445 8.445 0 01-2.12-3.158zm8.522 8.523a8.445 8.445 0 01-3.158-2.12c.276-.182 3.382-2.557 4.519-5.898.026-.074.051-.148.075-.224.364.169.729.348 1.092.535-1.327 2.788-1.281 6.409-1.276 6.7-.084.005-.168.007-.252.007zm4.847-1.235c-.131-.233-2.116-2.682-4.966-3.125a49.106 49.106 0 011.311-3.497 8.523 8.523 0 013.655 6.622zm-2.829-7.785a50.334 50.334 0 00-1.214-3.587c.293-.015.588-.023.884-.023 2.48 0 4.814.722 6.788 1.962-.912 1.175-2.831 2.414-5.458 2.648z" />
    </svg>
  );
}

function BehanceIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-2.297-5.564-5.325 0-3.018 2.289-5.325 5.718-5.325 3.399 0 5.066 2.236 5.066 5.325 0 .391-.045.781-.135 1.164H15.97v-.098c-.001-1.406-1.001-2.49-2.789-2.49-1.789 0-2.789 1.084-2.789 2.49 0 1.406 1 2.49 2.789 2.49 1.789 0 2.789-1.084 2.789-2.49v-.098h3.756v.098zm-7.516 0c0 1.406-1 2.49-2.789 2.49-1.789 0-2.789-1.084-2.789-2.49 0-1.406 1-2.49 2.789-2.49 1.789 0 2.789 1.084 2.789 2.49zm-9.21-7.488H0V5.487h5.84c1.406 0 2.489 1.084 2.489 2.49 0 1.406-1.083 2.49-2.489 2.49zm0-3.488H2.63v1.996h3.001c.391 0 .781-.391.781-.781 0-.391-.39-.781-.781-.781zm-2.63 5.488h3.001c1.406 0 2.489 1.084 2.489 2.49 0 1.406-1.083 2.49-2.489 2.49H0v-4.98z" />
    </svg>
  );
}

const socialLinks = [
  { name: "Dribbble", icon: DribbbleIcon, href: "https://dribbble.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/daniel-ngumo-20960127b/",
  },
  { name: "Behance", icon: BehanceIcon, href: "https://behance.net" },
];

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-white pt-[64px] md:pt-[72px] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 pb-16 md:pb-24">
        {/* Giant name typography */}
        <div className="relative pt-8 md:pt-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="font-display font-extrabold text-[clamp(3.5rem,12vw,9rem)] leading-[0.9] tracking-tighter text-center select-none"
          >
            <span className="text-outline text-portfolio-fg">DANIEL</span>{" "}
            <span className="text-portfolio-fg">NGUMO</span>
          </motion.h1>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative z-10 mx-auto -mt-[clamp(2rem,8vw,5rem)] w-[clamp(200px,35vw,380px)] aspect-[3/4]"
          >
            <Image
              src="/images/daniel.png"
              alt="Daniel Ngumo — Graphic Designer"
              fill
              priority
              className="object-cover object-top grayscale"
              sizes="(max-width: 768px) 60vw, 380px"
            />
          </motion.div>
        </div>

        {/* Bottom content row */}
        <div className="relative z-20 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 mt-4 md:-mt-8 items-end">
          {/* Left — role & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="md:col-span-1 space-y-4"
          >
            <p className="text-sm font-semibold tracking-wide uppercase text-portfolio-fg">
              Graphic Designer
            </p>
            <p className="text-sm md:text-base text-portfolio-muted leading-relaxed max-w-xs">
              I craft visual identities, brand systems, and digital experiences
              that help brands stand out and connect with their audience.
            </p>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-portfolio-fg text-sm font-medium hover:bg-portfolio-fg hover:text-white transition-colors group"
            >
              Let&apos;s collaborate
              <ArrowIcon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </motion.div>

          {/* Center spacer */}
          <div className="hidden md:block" />

          {/* Right — social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="md:col-span-1 flex md:flex-col gap-4 md:gap-3 md:items-end"
          >
            {socialLinks.map(({ name, icon: Icon, href }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-portfolio-muted hover:text-portfolio-fg transition-colors group"
              >
                <Icon className="w-4 h-4" />
                <span>{name}</span>
                <ArrowIcon className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
