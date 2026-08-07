"use client";

import { motion } from "framer-motion";

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  url?: string;
}

const EXPERIENCE: ExperienceItem[] = [
  {
    period: "2026",
    role: "Lead Developer & Designer",
    company: "Veristay",
    url: "https://veristay.co.ke",
  },
  {
    period: "2026",
    role: "Lead Designer",
    company: "Wateramba",
    url: "https://wateramba.com",
  },
  {
    period: "2024 — 2026",
    role: "Media Role",
    company: "JKUAT Christian Union",
  },
];

const SKILLS = [
  "Adobe Illustrator",
  "Photoshop",
  "Figma",
  "InDesign",
  "Brand Strategy",
  "Typography",
  "Print Production",
  "UI Design",
];

export default function Experience() {
  return (
    <section id="experience" className="relative bg-white py-20 md:py-28 overflow-hidden">
      <div
        className="section-bg-text absolute top-8 left-1/2 -translate-x-1/2 text-[clamp(3rem,12vw,10rem)] whitespace-nowrap"
        aria-hidden
      >
        EXPERIENCE
      </div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-14"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-portfolio-fg">
            /EXPERIENCE
          </h2>
          <p className="mt-4 text-sm md:text-base text-portfolio-muted max-w-xl leading-relaxed">
            Have also developed logos and banners for clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Timeline */}
          <div className="lg:col-span-2 space-y-0">
            {EXPERIENCE.map((item, i) => (
              <motion.div
                key={item.company + item.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-2 sm:gap-8 py-6 border-b border-portfolio-border last:border-0"
              >
                <span className="text-xs md:text-sm text-portfolio-muted font-medium">
                  {item.period}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-portfolio-fg">
                    {item.role}
                  </h3>
                  <p className="text-sm text-portfolio-muted">
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-portfolio-fg transition-colors underline underline-offset-2"
                      >
                        {item.company}
                      </a>
                    ) : (
                      item.company
                    )}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-portfolio-fg mb-4">
              Tools & Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs font-medium text-portfolio-muted border border-portfolio-border rounded-full hover:border-portfolio-fg hover:text-portfolio-fg transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
