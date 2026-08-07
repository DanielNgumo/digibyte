"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
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

const SERVICES = [
  {
    id: "brand",
    title: "BRAND IDENTITY & LOGO",
    description:
      "Complete brand systems — from logo marks and color palettes to typography guidelines and brand books that give your business a cohesive, memorable presence.",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799314346d?w=600&q=80",
  },
  {
    id: "print",
    title: "PRINT & PACKAGING",
    description:
      "Business cards, brochures, posters, and packaging design that translate your brand into tangible, high-impact physical materials.",
    image:
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=600&q=80",
  },
  {
    id: "uiux",
    title: "UI/UX DESIGN",
    description:
      "User-centered digital interfaces for web and mobile — wireframes, prototypes, and polished UI that balances aesthetics with usability.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
  },
  {
    id: "social",
    title: "SOCIAL & MARKETING",
    description:
      "Scroll-stopping social media graphics, ad creatives, and campaign visuals designed to boost engagement and drive conversions.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e939e113?w=600&q=80",
  },
];

export default function Services() {
  const [expanded, setExpanded] = useState<string>("brand");

  return (
    <section id="service" className="relative bg-white py-20 md:py-28 overflow-hidden">
      <div
        className="section-bg-text absolute top-8 left-1/2 -translate-x-1/2 text-[clamp(4rem,15vw,12rem)] whitespace-nowrap"
        aria-hidden
      >
        SERVICE
      </div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold tracking-tight text-portfolio-fg mb-10 md:mb-14"
        >
          /SERVICE
        </motion.h2>

        <div className="border-t border-portfolio-border">
          {SERVICES.map((service) => {
            const isOpen = expanded === service.id;

            return (
              <div key={service.id} className="border-b border-portfolio-border">
                <button
                  onClick={() => setExpanded(isOpen ? "" : service.id)}
                  className="w-full flex items-center justify-between py-5 md:py-6 text-left group"
                >
                  <span
                    className={cn(
                      "font-display text-lg md:text-2xl font-bold tracking-tight transition-colors",
                      isOpen ? "text-portfolio-fg" : "text-portfolio-fg/80 group-hover:text-portfolio-fg"
                    )}
                  >
                    {service.title}
                  </span>
                  <span className="shrink-0 ml-4">
                    {isOpen ? (
                      <X className="w-5 h-5 text-portfolio-muted" />
                    ) : (
                      <ArrowIcon className="text-portfolio-muted group-hover:text-portfolio-fg transition-colors" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 md:pb-8">
                        <div className="bg-portfolio-fg rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-10 items-center">
                          <p className="flex-1 text-sm md:text-base text-white/80 leading-relaxed">
                            {service.description}
                          </p>
                          <div className="relative w-full md:w-48 h-36 md:h-44 shrink-0 rounded-xl overflow-hidden">
                            <Image
                              src={service.image}
                              alt={service.title}
                              fill
                              sizes="200px"
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
