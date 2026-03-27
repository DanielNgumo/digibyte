"use client";

import React, { useState, useEffect, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Palette,
  Smartphone,
  Globe,
  Code,
  Database,
  Shield,
  Circle,
} from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Data ─────────────────────────────────────────────────────────────────────
const SERVICES = [
  {
    id: "design",
    label: "Graphic Design",
    icon: Palette,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200",
    description: "Creative visual solutions, branding, and digital artwork that captivate your audience.",
    features: ["Logo Design", "Brand Identity", "Digital Art", "Print Design"],
    accent: "#f26d26",
  },
  {
    id: "mobile",
    label: "App Development",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200",
    description: "Native and cross-platform mobile apps with seamless UX and robust functionality.",
    features: ["iOS Apps", "Android Apps", "Cross-Platform", "App Store Optimization"],
    accent: "#0c4a6e",
  },
  {
    id: "webdesign",
    label: "Web Design",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1200",
    description: "Modern, responsive websites that engage users and convert visitors into customers.",
    features: ["Responsive Design", "UI/UX Design", "Landing Pages", "E-commerce"],
    accent: "#f26d26",
  },
  {
    id: "webdev",
    label: "Web Development",
    icon: Code,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200",
    description: "Robust, scalable web applications built with the latest technologies and best practices.",
    features: ["Frontend Dev", "Backend Systems", "API Integration", "Performance"],
    accent: "#0c4a6e",
  },
  {
    id: "database",
    label: "Database Solutions",
    icon: Database,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200",
    description: "Efficient data management and database architecture for optimal performance.",
    features: ["Database Design", "Data Migration", "Performance Tuning", "Backups"],
    accent: "#f26d26",
  },
  {
    id: "security",
    label: "IT Security",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200",
    description: "Comprehensive security solutions to protect your digital assets and ensure continuity.",
    features: ["Security Audits", "Data Protection", "Network Security", "Compliance"],
    accent: "#0c4a6e",
  },
];

const AUTO_PLAY_INTERVAL = 3500;
const ITEM_HEIGHT = 62;

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

// ─── Services Component ───────────────────────────────────────────────────────
const Services = memo(() => {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentIndex = ((step % SERVICES.length) + SERVICES.length) % SERVICES.length;
  const current = SERVICES[currentIndex];

  const nextStep = useCallback(() => setStep((s) => s + 1), []);

  const handleChipClick = useCallback(
    (index: number) => {
      const diff = (index - currentIndex + SERVICES.length) % SERVICES.length;
      if (diff > 0) setStep((s) => s + diff);
    },
    [currentIndex]
  );

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => clearInterval(id);
  }, [nextStep, isPaused]);

  return (
    <section
      id="services"
      className="relative w-full bg-[#030303] py-20 md:py-28 overflow-hidden"
    >
      {/* Ambient bleed — mirrors hero gradient mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#030303] to-transparent z-10" />
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#0c4a6e]/10 blur-[120px]" />
        <div className="absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full bg-[#f26d26]/8 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">

        {/* ── Section header ─────────────────────────────────────────────── */}
        <div className="text-center mb-14 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] mb-6"
          >
            <Circle className="h-2 w-2 fill-[#f26d26] text-[#f26d26]" />
            <span className="text-xs text-white/50 tracking-widest uppercase font-medium">
              What We Offer
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/75">
              Comprehensive IT
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-white/90 to-[#f26d26]">
              Solutions for Kenya
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 text-base md:text-lg text-white/40 max-w-xl mx-auto leading-relaxed font-light"
          >
            From design to development — full-spectrum technology services that
            help your business thrive in the digital world.
          </motion.p>
        </div>

        {/* ── Carousel ───────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className={cn(
            "relative overflow-hidden rounded-[2rem] md:rounded-[3rem]",
            "flex flex-col lg:flex-row",
            "min-h-[580px] lg:min-h-0 lg:aspect-video",
            "border border-white/[0.08]",
            "shadow-[0_0_80px_rgba(0,0,0,0.6)]"
          )}
        >
          {/* ── LEFT: scrolling pill selector ──────────────────────────── */}
          <div
            className={cn(
              "w-full lg:w-[38%] relative z-30",
              "flex flex-col items-start justify-center",
              "min-h-[300px] lg:h-full overflow-hidden",
              "px-8 md:px-14 lg:pl-14",
              "bg-gradient-to-br from-[#0c4a6e] via-[#0a3d5c] to-[#061f30]"
            )}
          >
            {/* top + bottom fade masks */}
            <div className="absolute inset-x-0 top-0 h-16 md:h-24 bg-gradient-to-b from-[#0c4a6e] to-transparent z-40 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-16 md:h-24 bg-gradient-to-t from-[#061f30] to-transparent z-40 pointer-events-none" />

            {/* Subtle texture dots */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />

            {/* Pill list */}
            <div className="relative w-full h-full flex items-center justify-center lg:justify-start z-20">
              {SERVICES.map((service, index) => {
                const Icon = service.icon;
                const isActive = index === currentIndex;
                const distance = index - currentIndex;
                const wrappedDistance = wrap(
                  -(SERVICES.length / 2),
                  SERVICES.length / 2,
                  distance
                );

                return (
                  <motion.div
                    key={service.id}
                    style={{ height: ITEM_HEIGHT, width: "fit-content" }}
                    animate={{
                      y: wrappedDistance * ITEM_HEIGHT,
                      opacity: 1 - Math.abs(wrappedDistance) * 0.28,
                    }}
                    transition={{ type: "spring", stiffness: 85, damping: 20, mass: 1 }}
                    className="absolute flex items-center justify-start"
                  >
                    <button
                      onClick={() => handleChipClick(index)}
                      onMouseEnter={() => setIsPaused(true)}
                      onMouseLeave={() => setIsPaused(false)}
                      className={cn(
                        "relative flex items-center gap-3.5 px-6 md:px-8 py-3.5 rounded-full",
                        "transition-all duration-500 text-left border",
                        isActive
                          ? "bg-[#f26d26] text-white border-[#f26d26] shadow-[0_6px_24px_rgba(242,109,38,0.45)] scale-105"
                          : "bg-transparent text-white/50 border-white/[0.15] hover:border-white/30 hover:text-white/80"
                      )}
                    >
                      <Icon
                        size={16}
                        strokeWidth={2}
                        className={cn(
                          "flex-shrink-0 transition-colors duration-300",
                          isActive ? "text-white" : "text-white/40"
                        )}
                      />
                      <span className="text-sm font-medium tracking-wide whitespace-nowrap">
                        {service.label}
                      </span>
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ── RIGHT: animated image card ─────────────────────────────── */}
          <div
            className={cn(
              "flex-1 relative bg-[#06141d]",
              "flex items-center justify-center",
              "min-h-[360px] md:min-h-[480px] lg:h-full",
              "py-12 md:py-20 px-6 md:px-12 lg:px-10",
              "overflow-hidden border-t lg:border-t-0 lg:border-l border-white/[0.06]"
            )}
          >
            {/* faint grid lines */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />

            <div className="relative w-full max-w-[380px] aspect-[4/5] flex items-center justify-center">
              {SERVICES.map((service, index) => {
                const diff = index - currentIndex;
                const len = SERVICES.length;
                let normalizedDiff = diff;
                if (diff > len / 2) normalizedDiff -= len;
                if (diff < -len / 2) normalizedDiff += len;

                const isActive = normalizedDiff === 0;
                const isPrev = normalizedDiff === -1;
                const isNext = normalizedDiff === 1;
                const Icon = service.icon;

                return (
                  <motion.div
                    key={service.id}
                    initial={false}
                    animate={{
                      x: isActive ? 0 : isPrev ? -90 : isNext ? 90 : 0,
                      scale: isActive ? 1 : isPrev || isNext ? 0.86 : 0.72,
                      opacity: isActive ? 1 : isPrev || isNext ? 0.35 : 0,
                      rotate: isPrev ? -4 : isNext ? 4 : 0,
                      zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 26, mass: 0.8 }}
                    className="absolute inset-0 rounded-[1.8rem] overflow-hidden border-4 border-[#030303] bg-[#030303] origin-center"
                  >
                    {/* Image */}
                    <img
                      src={service.image}
                      alt={service.label}
                      className={cn(
                        "w-full h-full object-cover transition-all duration-700",
                        isActive ? "grayscale-0 brightness-90" : "grayscale blur-[2px] brightness-50"
                      )}
                    />

                  {/* Top scrim — keeps "Featured" badge readable */}
<div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

{/* Bottom overlay with info */}
<AnimatePresence>
  {isActive && (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.4 }}
      className="absolute inset-x-0 bottom-0 p-7 pt-36 bg-gradient-to-t from-black via-black/90 via-[55%] to-transparent pointer-events-none"
    >
      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-[#f26d26] text-white px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest mb-3 shadow-lg">
        <Icon size={10} strokeWidth={2.5} />
        {service.label}
      </div>

      <p className="text-white font-light text-lg md:text-xl leading-snug tracking-tight mb-4">
        {service.description}
      </p>

      {/* Feature tags */}
      <div className="flex flex-wrap gap-1.5">
        {service.features.map((f) => (
          <span
            key={f}
            className="px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-white/70 text-[10px] font-medium tracking-wide backdrop-blur-sm"
          >
            {f}
          </span>
        ))}
      </div>
    </motion.div>
  )}
</AnimatePresence>

                    {/* Live indicator */}
                    <div
                      className={cn(
                        "absolute top-6 left-6 flex items-center gap-2 transition-opacity duration-300",
                        isActive ? "opacity-100" : "opacity-0"
                      )}
                    >
                      <span className="w-2 h-2 rounded-full bg-[#f26d26] shadow-[0_0_8px_#f26d26] animate-pulse" />
                      <span className="text-white/60 text-[10px] font-medium uppercase tracking-[0.25em] font-mono">
                        Featured
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* ── Dot indicators ─────────────────────────────────────────────── */}
        <div className="flex justify-center gap-2 mt-8">
          {SERVICES.map((_, i) => (
            <button
              key={i}
              onClick={() => handleChipClick(i)}
              aria-label={`Go to ${SERVICES[i].label}`}
              className={cn(
                "h-[6px] rounded-full transition-all duration-400",
                i === currentIndex
                  ? "w-8 bg-[#f26d26]"
                  : "w-[6px] bg-white/20 hover:bg-white/40"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

Services.displayName = "Services";
export default Services;