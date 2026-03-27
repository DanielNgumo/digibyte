"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Circle, ArrowDown, Sparkles, Monitor, Palette, Wrench } from "lucide-react";
import { useEffect, useState, useCallback, memo } from "react";
import { cn } from "@/lib/utils";

// ─── Floating Shape ────────────────────────────────────────────────────────────

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

// ─── Feature Card ──────────────────────────────────────────────────────────────

const features = [
  {
    icon: Palette,
    title: "Graphic Design",
    desc: "Logos, branding & UI/UX",
    accent: "from-rose-500/30",
  },
  {
    icon: Monitor,
    title: "Web Development",
    desc: "Powerful digital experiences",
    accent: "from-indigo-500/30",
  },
  {
    icon: Wrench,
    title: "IT Support",
    desc: "Reliable tech solutions",
    accent: "from-amber-500/30",
  },
];

const FeatureCard = memo(
  ({
    icon: Icon,
    title,
    desc,
    accent,
    delay,
  }: {
    icon: React.ElementType;
    title: string;
    desc: string;
    accent: string;
    delay: number;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className={cn(
        "group relative p-5 md:p-6 rounded-2xl cursor-default",
        "bg-white/[0.04] border border-white/[0.08]",
        "backdrop-blur-sm hover:bg-white/[0.08] transition-colors duration-300",
        "shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
      )}
    >
      {/* Subtle gradient orb */}
      <div
        className={cn(
          "absolute -top-4 -left-4 w-20 h-20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          `bg-gradient-to-br ${accent} to-transparent`
        )}
      />
      <div className="relative z-10 flex items-start gap-3">
        <div className="p-2 rounded-lg bg-white/[0.06] border border-white/[0.1] mt-0.5">
          <Icon className="w-4 h-4 text-white/70" />
        </div>
        <div>
          <h3 className="text-sm md:text-base font-semibold text-white/90 mb-1">
            {title}
          </h3>
          <p className="text-xs md:text-sm text-white/40 leading-relaxed">{desc}</p>
        </div>
      </div>
    </motion.div>
  )
);
FeatureCard.displayName = "FeatureCard";

// ─── Main Hero ─────────────────────────────────────────────────────────────────

const Hero = () => {
  const fadeUp = (delay: number) => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
    },
  });

  const handleContactUs = useCallback(() => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }, []);

  const handleScrollDown = useCallback(() => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  }, []);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">

      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c4a6e]/20 via-transparent to-[#f26d26]/10 blur-3xl pointer-events-none" />

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ElegantShape
          delay={0.3}
          width={620}
          height={140}
          rotate={12}
          gradient="from-[#0c4a6e]/40"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />
        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-[#f26d26]/30"
          className="right-[-5%] md:right-[0%] top-[68%] md:top-[73%]"
        />
        <ElegantShape
          delay={0.4}
          width={320}
          height={80}
          rotate={-8}
          gradient="from-sky-500/[0.18]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />
        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-[#f26d26]/25"
          className="right-[15%] md:right-[22%] top-[8%] md:top-[13%]"
        />
        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-cyan-400/[0.18]"
          className="left-[20%] md:left-[26%] top-[5%] md:top-[9%]"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 pt-24 pb-20">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

          {/* Badge */}
          <motion.div
            variants={fadeUp(0.4)}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] mb-10 md:mb-14"
          >
            <Circle className="h-2 w-2 fill-[#f26d26] text-[#f26d26]" />
            <span className="text-xs sm:text-sm text-white/55 tracking-widest uppercase font-medium">
              Transforming Ideas Into Digital Reality
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div
            variants={fadeUp(0.6)}
            initial="hidden"
            animate="visible"
            className="mb-6 md:mb-8"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05]">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/75">
                Innovative IT Solutions
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-white/90 to-[#f26d26]">
                for Modern Kenya
              </span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            variants={fadeUp(0.8)}
            initial="hidden"
            animate="visible"
            className="text-base sm:text-lg md:text-xl text-white/40 max-w-2xl leading-relaxed font-light tracking-wide mb-12 md:mb-16 px-2"
          >
            We craft stunning graphic designs, build powerful digital experiences,
            and provide expert IT support that elevate your brand and drive real growth.
          </motion.p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 w-full max-w-3xl mb-12 md:mb-14 text-left">
            {features.map((f, i) => (
              <FeatureCard key={i} {...f} delay={1.0 + i * 0.15} />
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp(1.5)}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4"
          >
            {/* Primary */}
            <motion.button
              onClick={handleContactUs}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 rounded-full text-sm sm:text-base font-bold text-white bg-[#f26d26] shadow-[0_10px_30px_rgba(242,109,38,0.4)] hover:shadow-[0_15px_40px_rgba(242,109,38,0.55)] transition-shadow duration-300 min-w-[180px]"
            >
              Get Started Today
            </motion.button>

            {/* Secondary */}
            <motion.a
              href="#services"
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 rounded-full text-sm sm:text-base font-bold text-white border border-white/25 hover:border-white/60 backdrop-blur-sm transition-colors duration-300 min-w-[180px] text-center"
            >
              Our Services
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.55 }}
        transition={{ delay: 2, duration: 1 }}
        whileHover={{ opacity: 1, y: 4 }}
        onClick={handleScrollDown}
        type="button"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white z-20 bg-transparent border-none cursor-pointer transition-all duration-300"
      >
        <span className="text-xs font-medium tracking-widest uppercase text-white/50">
          Explore
        </span>
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </motion.button>

      {/* Top & bottom fade vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/70 pointer-events-none" />
    </div>
  );
};

export default memo(Hero);