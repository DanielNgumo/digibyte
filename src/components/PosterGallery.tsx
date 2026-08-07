"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  POSTERS,
  POSTER_CATEGORIES,
  type PosterCategory,
} from "@/data/posters";

export default function PosterGallery() {
  const [filter, setFilter] = useState<PosterCategory>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    filter === "All"
      ? POSTERS
      : POSTERS.filter((p) => p.category === filter);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i + 1) % filtered.length
    );
  }, [filtered.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + filtered.length) % filtered.length
    );
  }, [filtered.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxIndex, goNext, goPrev]);

  useEffect(() => {
    setLightboxIndex(null);
  }, [filter]);

  const activePoster =
    lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <>
      {/* Page header */}
      <section className="relative pt-[64px] md:pt-[72px] overflow-hidden">
        <div
          className="section-bg-text absolute top-24 left-1/2 -translate-x-1/2 text-[clamp(4rem,14vw,11rem)] whitespace-nowrap"
          aria-hidden
        >
          POSTERS
        </div>

        <div className="relative max-w-7xl mx-auto px-5 md:px-8 pt-12 md:pt-16 pb-10 md:pb-14">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-portfolio-muted hover:text-portfolio-fg transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-portfolio-fg mb-4">
              /POSTER GALLERY
            </h1>
            <p className="text-sm md:text-base text-portfolio-muted max-w-lg leading-relaxed">
              A collection of poster graphics, event flyers, and campaign visuals
              crafted for brands, ministries, and community initiatives.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap gap-2 md:gap-3 mt-8 md:mt-10"
          >
            {POSTER_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-xs md:text-sm font-medium border transition-all",
                  filter === cat
                    ? "bg-portfolio-fg text-white border-portfolio-fg"
                    : "bg-white text-portfolio-muted border-portfolio-border hover:border-portfolio-fg hover:text-portfolio-fg"
                )}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((poster, index) => (
                <motion.button
                  key={poster.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, delay: index * 0.03 }}
                  onClick={() => openLightbox(index)}
                  className="group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-fg focus-visible:ring-offset-2 rounded-sm"
                >
                  <div className="relative aspect-[3/4] bg-portfolio-surface overflow-hidden rounded-sm border border-portfolio-border/60 group-hover:border-portfolio-fg/30 transition-colors">
                    <Image
                      src={poster.image}
                      alt={poster.title}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-contain p-2 md:p-3 transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-portfolio-fg/0 group-hover:bg-portfolio-fg/5 transition-colors" />
                  </div>
                  <div className="mt-3 px-0.5">
                    <p className="text-xs md:text-sm font-medium text-portfolio-fg line-clamp-2 group-hover:opacity-70 transition-opacity">
                      {poster.title}
                    </p>
                    <p className="text-[11px] text-portfolio-muted mt-0.5">
                      {poster.category} · {poster.year}
                    </p>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-center text-portfolio-muted py-20 text-sm">
              No posters in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {activePoster && lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 md:top-8 md:right-8 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {filtered.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goPrev();
                  }}
                  className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goNext();
                  }}
                  className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
                  aria-label="Next"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-lg md:max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[3/4] w-full bg-white rounded-sm overflow-hidden">
                <Image
                  src={activePoster.image}
                  alt={activePoster.title}
                  fill
                  sizes="(max-width: 768px) 90vw, 672px"
                  className="object-contain p-4"
                  priority
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-white font-display text-lg font-bold">
                  {activePoster.title}
                </p>
                <p className="text-white/50 text-sm mt-1">
                  {activePoster.category} · {activePoster.year}
                </p>
                <p className="text-white/30 text-xs mt-3">
                  {lightboxIndex + 1} / {filtered.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
