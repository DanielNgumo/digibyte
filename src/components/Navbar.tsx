"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── useScroll hook ───────────────────────────────────────────────────────────
function useScroll(threshold: number) {
  const [scrolled, setScrolled] = useState(false);

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > threshold);
  }, [threshold]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // check immediately on mount — prevents white flash on SSR hydration
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return scrolled;
}

// ─── Animated hamburger / close icon ─────────────────────────────────────────
function MenuToggleIcon({
  open,
  className,
  duration = 300,
}: {
  open: boolean;
  className?: string;
  duration?: number;
}) {
  return (
    <svg
      strokeWidth={2.5}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 32 32"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(
        "transition-transform ease-in-out",
        open && "-rotate-45",
        className
      )}
      style={{ transitionDuration: `${duration}ms` }}
    >
      <path
        className={cn(
          "transition-all ease-in-out",
          open
            ? "[stroke-dasharray:20_300] [stroke-dashoffset:-32.42px]"
            : "[stroke-dasharray:12_63]"
        )}
        style={{ transitionDuration: `${duration}ms` }}
        d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
      />
      <path d="M7 16 27 16" />
    </svg>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
const Navbar = () => {
  const scrolled = useScroll(60);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close mobile menu on desktop resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navLinks = [
    { name: "Home",      href: "#hero" },
    { name: "About",     href: "#about" },
    { name: "Services",  href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact",   href: "#contact" },
  ];

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const el = document.getElementById(href.substring(1));
      if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
      setMobileOpen(false);
    },
    []
  );

  return (
    <>
      {/*
        KEY FIX: The <header> itself is always fixed + always has an explicit
        background. We never let it be "bg-transparent" because that falls
        through to the page's default white background during the scroll
        transition. Instead we use bg-[#030303]/0 (fully transparent black)
        which is invisible on the hero but never shows white.
      */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50",
          "transition-colors duration-500 ease-out",
          // At the top: invisible over the dark hero (bg color = hero color, opacity 0)
          !scrolled && !mobileOpen && "bg-[#030303]/0",
          // Mobile open at top: show dark bg
          mobileOpen && !scrolled && "bg-[#030303]/95 backdrop-blur-xl",
          // Scrolled: dark glass — always dark, never white
          scrolled && "bg-[#030303]/80 backdrop-blur-xl border-b border-white/[0.07] shadow-[0_4px_40px_rgba(0,0,0,0.6)]",
        )}
      >
        {/*
          The pill wrapper shrinks width on scroll using max-w + mx-auto.
          Pill rounding lives here (not on the fixed header) so the fixed
          layer always fills full width — no page-bg bleed on the sides.
        */}
        <div
          className={cn(
            "mx-auto transition-all duration-500 ease-out",
            scrolled ? "max-w-5xl px-3" : "max-w-full px-4 md:px-8"
          )}
        >
          <div
            className={cn(
              "transition-all duration-500 ease-out",
              // Floating pill on scroll (desktop only)
              scrolled
                ? "md:mt-3 md:mb-1 md:rounded-2xl md:border md:border-white/[0.14] md:bg-[#0c4a6e]/75 md:backdrop-blur-2xl md:shadow-[0_8px_32px_rgba(0,0,0,0.45)] md:px-5"
                : ""
            )}
          >
            <nav
              className={cn(
                "flex items-center justify-between transition-all duration-500 ease-out",
                scrolled ? "h-[52px]" : "h-[70px]"
              )}
            >
              {/* ── Logo ───────────────────────────────────────────────── */}
              <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
                <div
                  className={cn(
                    "relative rounded-lg overflow-hidden border border-white/20 shadow-md",
                    "group-hover:scale-105 transition-all duration-300",
                    scrolled ? "w-8 h-8" : "w-9 h-9"
                  )}
                >
                  <Image
                    src="/logo.png"
                    alt="TechNasi Logo"
                    fill
                    className="object-contain p-1"
                    priority
                  />
                </div>
                <span
                  className={cn(
                    "font-extrabold text-white group-hover:text-[#f26d26]",
                    "transition-all duration-300 whitespace-nowrap tracking-tight",
                    scrolled ? "text-xl" : "text-2xl"
                  )}
                >
                  TechNasi
                </span>
              </Link>

              {/* ── Desktop links ──────────────────────────────────────── */}
              <div className="hidden lg:flex items-center gap-0.5">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={cn(
                      "relative px-4 py-2 rounded-lg text-sm font-medium",
                      "text-white/70 hover:text-white",
                      "transition-all duration-200 hover:bg-white/[0.07]",
                      "after:absolute after:bottom-1 after:left-4 after:right-4 after:h-[2px]",
                      "after:bg-[#f26d26] after:rounded-full after:scale-x-0",
                      "hover:after:scale-x-100 after:transition-transform after:duration-300"
                    )}
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* ── Desktop phone CTA ──────────────────────────────────── */}
              <div className="hidden md:flex items-center">
                <div
                  className={cn(
                    "flex items-center gap-2.5 px-4 py-2 rounded-xl",
                    "bg-white/[0.05] hover:bg-white/[0.10] border border-white/[0.10]",
                    "transition-all duration-300 cursor-default"
                  )}
                >
                  <Phone size={14} className="text-[#f26d26] flex-shrink-0" />
                  <div className="flex flex-col leading-none">
                    <span className="text-[10px] text-white/40 uppercase tracking-wider mb-[3px]">
                      Call us
                    </span>
                    <a
                      href="tel:+254742580239"
                      className="text-sm font-bold text-[#f26d26] hover:text-white transition-colors duration-200"
                    >
                      +254 742 580 239
                    </a>
                  </div>
                </div>
              </div>

              {/* ── Mobile toggle ──────────────────────────────────────── */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={cn(
                  "lg:hidden flex items-center justify-center w-10 h-10 rounded-xl",
                  "bg-white/[0.07] hover:bg-white/[0.14] border border-white/[0.12]",
                  "text-white transition-all duration-200"
                )}
                aria-label="Toggle menu"
              >
                <MenuToggleIcon open={mobileOpen} className="size-5" duration={300} />
              </button>
            </nav>
          </div>
        </div>

        {/* ── Mobile drawer ────────────────────────────────────────────── */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-out",
            "border-t border-white/[0.07]",
            mobileOpen
              ? "max-h-[440px] opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          )}
        >
          <div className="px-4 py-3 flex flex-col gap-0.5">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  "flex items-center px-4 py-3.5 rounded-xl",
                  "text-white/75 font-medium text-base",
                  "hover:bg-white/[0.08] hover:text-white hover:pl-6",
                  "transition-all duration-200",
                  "border-b border-white/[0.05] last:border-0"
                )}
                style={{ transitionDelay: mobileOpen ? `${i * 35}ms` : "0ms" }}
              >
                {link.name}
              </a>
            ))}

            {/* Mobile phone CTA */}
            <div className="mt-3 pt-3 border-t border-white/[0.08] flex justify-center pb-2">
              <a
                href="tel:+254742580239"
                className={cn(
                  "inline-flex items-center gap-2 px-6 py-3 rounded-full",
                  "bg-[#f26d26] text-white font-bold text-sm",
                  "hover:bg-[#e05c18] hover:-translate-y-0.5",
                  "shadow-[0_6px_20px_rgba(242,109,38,0.35)]",
                  "transition-all duration-300"
                )}
              >
                <Phone size={15} />
                +254 742 580 239
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile backdrop overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden backdrop-blur-[2px]"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/*
        No height spacer here — the hero section is min-h-screen and the
        navbar floats over it transparently. Add pt-[70px] to the first
        non-hero section if needed.
      */}
    </>
  );
};

export default Navbar;