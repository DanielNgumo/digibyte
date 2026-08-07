"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("success");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="relative bg-white py-20 md:py-28 overflow-hidden">
      <div
        className="section-bg-text absolute top-8 left-1/2 -translate-x-1/2 text-[clamp(4rem,15vw,12rem)] whitespace-nowrap"
        aria-hidden
      >
        CONTACT
      </div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-portfolio-fg mb-4">
              /CONTACT
            </h2>
            <p className="text-portfolio-muted text-sm md:text-base leading-relaxed mb-8 max-w-md">
              Have a project in mind? I&apos;d love to hear about it. Drop me a
              message and let&apos;s create something remarkable together.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-portfolio-muted">
                <Mail className="w-4 h-4 shrink-0" />
                <a
                  href="mailto:dev@technasi.co.ke"
                  className="hover:text-portfolio-fg transition-colors"
                >
                  dev@technasi.co.ke
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-portfolio-muted">
                <Phone className="w-4 h-4 shrink-0" />
                <a
                  href="tel:+254742580239"
                  className="hover:text-portfolio-fg transition-colors"
                >
                  +254 742 580 239
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-portfolio-muted">
                <MapPin className="w-4 h-4 shrink-0" />
                Nairobi, Kenya
              </li>
            </ul>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Your name"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                className="w-full px-0 py-3 bg-transparent border-b border-portfolio-border text-sm text-portfolio-fg placeholder:text-portfolio-muted/60 focus:outline-none focus:border-portfolio-fg transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="Your email"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                className="w-full px-0 py-3 bg-transparent border-b border-portfolio-border text-sm text-portfolio-fg placeholder:text-portfolio-muted/60 focus:outline-none focus:border-portfolio-fg transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                placeholder="Tell me about your project"
                value={formData.message}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, message: e.target.value }))
                }
                className="w-full px-0 py-3 bg-transparent border-b border-portfolio-border text-sm text-portfolio-fg placeholder:text-portfolio-muted/60 focus:outline-none focus:border-portfolio-fg transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-portfolio-fg text-white text-sm font-medium hover:bg-portfolio-fg/90 transition-colors group"
            >
              Send Message
              <ArrowIcon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {status === "success" && (
              <p className="text-sm text-emerald-600">
                Message sent! I&apos;ll get back to you soon.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
