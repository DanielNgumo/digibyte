"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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

type ProjectCategory = "All" | "Real Project" | "Exploration";

const PROJECTS = [
  {
    id: 1,
    title: "BloomCare — Mental Health App Landing Page",
    tags: ["Landing Page", "UI Design"],
    category: "Real Project" as const,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
  },
  {
    id: 2,
    title: "Lumière — Luxury Fragrance Brand Identity",
    tags: ["Branding", "Packaging"],
    category: "Real Project" as const,
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80",
  },
  {
    id: 3,
    title: "CryptoVault — Investment Dashboard UI",
    tags: ["Dashboard", "Web Design"],
    category: "Exploration" as const,
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
  },
  {
    id: 4,
    title: "FinAI — Personal Finance App Concept",
    tags: ["Mobile App", "UI/UX"],
    category: "Exploration" as const,
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
  },
  {
    id: 5,
    title: "VeriStay — Property Booking Brand System",
    tags: ["Brand Identity", "Real Project"],
    category: "Real Project" as const,
    image: "/images/veristay.png",
  },
  {
    id: 6,
    title: "Soomoja — E-commerce Visual Language",
    tags: ["Brand Design", "Real Project"],
    category: "Real Project" as const,
    image: "/images/soomoja.png",
  },
];

const FILTERS: ProjectCategory[] = ["All", "Real Project", "Exploration"];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");

  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="relative bg-white py-20 md:py-28 overflow-hidden">
      {/* Background text */}
      <div
        className="section-bg-text absolute top-8 left-1/2 -translate-x-1/2 text-[clamp(4rem,15vw,12rem)] whitespace-nowrap"
        aria-hidden
      >
        PORTFOLIO
      </div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 md:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold tracking-tight text-portfolio-fg"
          >
            /SELECTED WORK
          </motion.h2>

          <div className="flex items-center gap-4 flex-wrap">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "text-sm font-medium transition-colors",
                  activeFilter === filter
                    ? "text-portfolio-fg underline underline-offset-4"
                    : "text-portfolio-muted hover:text-portfolio-fg"
                )}
              >
                {filter}
              </button>
            ))}
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 ml-0 md:ml-4 text-sm font-medium text-portfolio-fg hover:opacity-70 transition-opacity group"
            >
              Poster Gallery
              <ArrowIcon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {filtered.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-portfolio-surface mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-display text-lg md:text-xl font-bold text-portfolio-fg mb-2 group-hover:opacity-70 transition-opacity">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-portfolio-muted font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
