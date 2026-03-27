"use client";

import React, { useState, useEffect, useRef, memo } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Eye,
  Globe,
  Code,
  Smartphone,
  Circle,
  ArrowUpRight,
  ShoppingBag,
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// ─── Data ─────────────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 1,
    title: "Before After School",
    category: "Web App",
    icon: Globe,
    description:
      "Responsive payment app website with server-side rendering for SEO. Built with Next.js and TypeScript delivering lightning-fast load times and seamless UX.",
    image: "/images/bas.jpeg",
    tags: ["Next.js", "TypeScript", "APIs"],
    liveUrl: "https://beforeafterschool.com/",
    codeUrl: "#",
    accentFrom: "#0c4a6e",
    accentTo: "#f26d26",
  },
  {
    id: 2,
    title: "Wateramba",
    category: "Web Design",
    icon: Globe,
    description:
      "Aquatic services website with an interactive UI built on React. RESTful API integration ensures real-time data flows elegantly throughout the experience.",
    image: "/images/wateramb.jpeg",
    tags: ["React", "APIs", "JavaScript"],
    liveUrl: "https://wateramba.com/",
    codeUrl: "#",
    accentFrom: "#164e63",
    accentTo: "#0c4a6e",
  },
  {
    id: 3,
    title: "Tranzit Mobile App",
    category: "Mobile",
    icon: Smartphone,
    description:
      "Transportation-of-goods app with real-time geolocation tracking. Flutter-powered cross-platform delivery connecting drivers and customers instantly.",
    image: "/images/tranzit.png",
    tags: ["Flutter", "Geolocation", "APIs"],
    liveUrl: "https://tranzit.cloud/",
    codeUrl: "#",
    accentFrom: "#f26d26",
    accentTo: "#c2410c",
  },
  {
    id: 4,
    title: "Latisec",
    category: "Cybersecurity",
    icon: Code,
    description:
      "Enterprise cybersecurity website with secure API integration. Angular frontend paired with PHP backend delivers robust, penetration-tested architecture.",
    image: "/images/latisec.jpeg",
    tags: ["Angular", "PHP", "APIs"],
    liveUrl: "https://latisec.com/",
    codeUrl: "#",
    accentFrom: "#0c4a6e",
    accentTo: "#1d4ed8",
  },
  // {
  //   id: 5,
  //   title: "Ibukatech",
  //   category: "E-Learning",
  //   icon: Code,
  //   description:
  //     "Modern e-learning platform with server-side rendering for SEO dominance. Angular 17's latest features power a fast, accessible educational experience.",
  //   image: "/images/ibuka.jpeg",
  //   tags: ["Angular", "TypeScript", "SSR"],
  //   liveUrl: "https://ibukatech.com/",
  //   codeUrl: "#",
  //   accentFrom: "#f26d26",
  //   accentTo: "#0c4a6e",
  // },
  {
    id: 6,
    title: "Paynasi",
    category: "Fintech",
    icon: Globe,
    description:
      "Sleek payment app website built with Next.js and TypeScript. Optimised for conversion with SSR, blazing speed, and a polished mobile-first interface.",
    image: "/images/paynasi_logo.jpg",
    tags: ["Next.js", "TypeScript", "APIs"],
    liveUrl: "#",
    codeUrl: "https://paynasi-43tv.vercel.app/",
    accentFrom: "#0c4a6e",
    accentTo: "#f26d26",
  },
  {
    id: 7,
    title: "VeriStay",
    category: "Mobile & Fintech",
    icon: Smartphone, // Or use Home if you have it imported
    description:
      "Escrow-based property booking platform with automated M-Pesa integration. Built with Flutter and a Laravel backend, it features secure payment disbursements and real-time property management.",
    image: "/images/veristay.png", // Ensure this path matches your image folder
    tags: ["Flutter", "Laravel", "M-Pesa API"],
    liveUrl: "https://app.veristay.co.ke/",
    codeUrl: "#",
    accentFrom: "#0c4a6e", // Using your signature deep blue
    accentTo: "#16a34a",   // A "Success Green" to represent secure payments/growth
  },
  {
    id: 8,
    title: "Soomoja",
    category: "E-commerce & AI",
    icon: ShoppingBag, // Or use Sparkles if you emphasize the AI part
    description:
      "An AI-powered e-commerce aggregator designed to unify Kenya's fragmented shopping landscape. It features smart price comparison, 'Trusted Buyer' verification, and a streamlined checkout process to eliminate shopping friction.",
    image: "/images/soomoja.png", 
    tags: ["AI Integration", "React", "Next.js", "E-commerce"],
    liveUrl: "https://soomoja.com/",
    codeUrl: "#",
    accentFrom: "#4f46e5", // A vibrant indigo/purple for that 'AI' feel
    accentTo: "#06b6d4",   // A bright cyan to keep it modern and fresh
  },
];

const CARD_PEEK = 48;   // was 28 — more of each card peeks out
const NAV_HEIGHT = 88;

// ─── Intersection observer hook ───────────────────────────────────────────────
function useInView(threshold = 0.1) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView] as const;
}

// ─── Single project card ──────────────────────────────────────────────────────
const ProjectCard = memo(
  ({ project, index }: { project: (typeof PROJECTS)[0]; index: number }) => {
    const [ref, inView] = useInView(0.08);
    const Icon = project.icon;
    const isEven = index % 2 === 0;

    // Each card sticks progressively lower so they fan out like a deck
    const stickyTop = NAV_HEIGHT + index * CARD_PEEK;

    return (
      /*
       * FIX 1: The sticky wrapper MUST NOT have mb/padding on the inner card —
       * the margin lives here on the wrapper so the scroll container has real
       * height between sticking points.
       *
       * FIX 2: No overflow-hidden anywhere in the ancestor chain.
       */
     <div
  className="sticky"
  style={{ top: `${stickyTop}px`, marginBottom: "2.5rem" }}
>
  <div
    ref={ref}
    className={cn(
      "relative rounded-2xl md:rounded-3xl",
      "border border-white/[0.07]",
      "grid grid-cols-1 md:grid-cols-2",
      "shadow-[0_24px_80px_rgba(0,0,0,0.7)]",
      "transition-all duration-700 ease-out"
    )}
    style={{
      background: "linear-gradient(135deg, #0a1628 0%, #0d1f35 60%, #0a1220 100%)",
      zIndex: index + 1,
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(24px)",
      overflow: "hidden",
      // Scale down cards that are buried deeper in the stack
      scale: `${1 - index * 0.012}`,
      // Subtle rotation alternates left/right for a natural deck feel
      rotate: `${index % 2 === 0 ? -index * 0.3 : index * 0.3}deg`,
      transformOrigin: "top center",
      willChange: "transform",
    }}
  >
          {/* Gradient accent strip */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px] z-10"
            style={{
              background: `linear-gradient(90deg, transparent, ${project.accentFrom}, ${project.accentTo}, transparent)`,
            }}
          />

          {/* Ambient glow */}
          <div
            className="absolute -top-20 opacity-20 w-64 h-64 rounded-full blur-[80px] pointer-events-none"
            style={{
              background: project.accentFrom,
              left: isEven ? "-2rem" : "auto",
              right: isEven ? "auto" : "-2rem",
            }}
          />

          {/* ── Text side ──────────────────────────────────────────────── */}
          <div
            className={cn(
              "relative z-10 flex flex-col justify-center",
              "px-8 py-10 md:px-12 md:py-14",
              isEven ? "md:order-1" : "md:order-2"
            )}
          >
            {/* Badge row */}
            <div className="inline-flex items-center gap-2 w-fit mb-5">
              <span
                className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest border"
                style={{
                  color: project.accentFrom === "#f26d26" ? "#f26d26" : "#7dd3fc",
                  borderColor:
                    project.accentFrom === "#f26d26"
                      ? "rgba(242,109,38,0.25)"
                      : "rgba(125,211,252,0.2)",
                  background:
                    project.accentFrom === "#f26d26"
                      ? "rgba(242,109,38,0.08)"
                      : "rgba(12,74,110,0.25)",
                }}
              >
                <Icon size={10} strokeWidth={2.5} />
                {project.category}
              </span>
              <span className="text-white/20 text-[10px] font-mono">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(PROJECTS.length).padStart(2, "0")}
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
              {project.title}
            </h3>

            <p className="text-sm md:text-base text-white/45 leading-relaxed mb-7 max-w-sm font-light">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-full text-[11px] font-medium tracking-wide text-white/50 bg-white/[0.05] border border-white/[0.08]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-3 flex-wrap">
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white"
                style={{
                  background: `linear-gradient(135deg, ${project.accentFrom}, ${project.accentTo})`,
                  boxShadow: `0 6px 20px ${project.accentFrom}50`,
                }}
              >
                <Eye size={14} />
                View Live
                <ArrowUpRight size={13} strokeWidth={2.5} />
              </motion.a>

              <motion.a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white/60 border border-white/[0.12] hover:border-white/25 hover:text-white/80 transition-all duration-200"
              >
                <ExternalLink size={13} />
                Source
              </motion.a>
            </div>
          </div>

          {/* ── Image side ─────────────────────────────────────────────── */}
          <div
            className={cn(
              "relative min-h-[240px] md:min-h-0",
              isEven ? "md:order-2" : "md:order-1"
            )}
          >
            {/* Divider line */}
            <div
              className={cn(
                "absolute inset-y-0 w-px z-10 pointer-events-none",
                "bg-gradient-to-b from-transparent via-white/[0.08] to-transparent",
                isEven ? "left-0" : "right-0"
              )}
            />

            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              style={{ filter: "brightness(0.72) saturate(0.85)" }}
              loading="lazy"
            />

            {/* Bleed gradient toward text */}
            <div
              className={cn(
                "absolute inset-0",
                isEven
                  ? "bg-gradient-to-r from-[#0a1628]/80 via-[#0a1628]/20 to-transparent"
                  : "bg-gradient-to-l from-[#0a1628]/80 via-[#0a1628]/20 to-transparent"
              )}
            />

            {/* Live badge */}
            <div className="absolute top-5 right-5 z-20 flex items-center gap-1.5">
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{
                  background: project.accentTo,
                  boxShadow: `0 0 8px ${project.accentTo}`,
                }}
              />
              <span className="text-[9px] text-white/40 uppercase tracking-[0.25em] font-mono">
                Live
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
ProjectCard.displayName = "ProjectCard";

// ─── Portfolio section ────────────────────────────────────────────────────────
const Portfolio = memo(() => {
  const [headerRef, headerInView] = useInView(0.3);

  return (
    /*
     * FIX 3: section must NOT have overflow-hidden — that breaks sticky
     * on all descendant elements. Use overflow-visible (default) and
     * control visual bleed with pointer-events-none decorative layers only.
     */
    <section
      id="portfolio"
      className="relative w-full bg-[#030303] py-20 md:py-28"
      // no overflow-hidden here!
    >
      {/* Decorative ambient blobs — pointer-events-none so they don't block */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#030303] to-transparent z-10" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-[#0c4a6e]/8 blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-[#f26d26]/6 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8">

        {/* ── Section header ──────────────────────────────────────────── */}
        <div
          ref={headerRef}
          className={cn(
            "text-center mb-16 md:mb-20 transition-all duration-700 ease-out",
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] mb-6">
            <Circle className="h-2 w-2 fill-[#f26d26] text-[#f26d26]" />
            <span className="text-xs text-white/50 tracking-widest uppercase font-medium">
              Our Portfolio
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/75">
              Recent Projects
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-white/90 to-[#f26d26]">
              Built for Impact
            </span>
          </h2>

          <p className="text-base md:text-lg text-white/40 max-w-xl mx-auto leading-relaxed font-light">
            A selection of digital products we&apos;ve crafted for Kenyan and global
            businesses — from concept to launch.
          </p>
        </div>

        <div
          className="relative"
          style={{ paddingBottom: `${CARD_PEEK * 2}px` }}
        >
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
});

Portfolio.displayName = "Portfolio";
export default Portfolio;