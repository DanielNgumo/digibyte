"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

const navLinks = [
  { name: "Work", href: "/#work" },
  { name: "Gallery", href: "/gallery" },
  { name: "Service", href: "/#service" },
  { name: "Experience", href: "/#experience" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleHashClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (!href.includes("#")) return;
      const hash = href.split("#")[1];
      if (pathname === "/") {
        e.preventDefault();
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
        setMobileOpen(false);
      }
    },
    [pathname]
  );

  const isActive = (href: string) => {
    if (href === "/gallery") return pathname === "/gallery";
    return false;
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-portfolio-border/60">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <nav className="flex items-center justify-between h-[64px] md:h-[72px]">
            <Link
              href="/"
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-portfolio-border bg-white text-xs font-medium text-portfolio-muted hover:text-portfolio-fg transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              Available for New Project
            </Link>

            <Link
              href="/"
              className="sm:hidden flex items-center gap-1.5 text-[11px] text-portfolio-muted font-medium"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Available
            </Link>

            <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleHashClick(e, link.href)}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    isActive(link.href)
                      ? "text-portfolio-fg underline underline-offset-4"
                      : "text-portfolio-fg/70 hover:text-portfolio-fg"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/#contact"
                onClick={(e) => handleHashClick(e, "/#contact")}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-portfolio-fg text-white text-sm font-medium hover:bg-portfolio-fg/90 transition-colors"
              >
                Let&apos;s Talk
                <ArrowIcon />
              </Link>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden flex flex-col justify-center gap-1.5 w-9 h-9"
                aria-label="Toggle menu"
              >
                <span
                  className={cn(
                    "block h-0.5 w-5 bg-portfolio-fg transition-all origin-center",
                    mobileOpen && "rotate-45 translate-y-2"
                  )}
                />
                <span
                  className={cn(
                    "block h-0.5 w-5 bg-portfolio-fg transition-all",
                    mobileOpen && "opacity-0"
                  )}
                />
                <span
                  className={cn(
                    "block h-0.5 w-5 bg-portfolio-fg transition-all origin-center",
                    mobileOpen && "-rotate-45 -translate-y-2"
                  )}
                />
              </button>
            </div>
          </nav>
        </div>

        <div
          className={cn(
            "md:hidden overflow-hidden border-t border-portfolio-border transition-all duration-300",
            mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="px-5 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleHashClick(e, link.href)}
                className={cn(
                  "px-3 py-3 text-base font-medium rounded-lg hover:bg-portfolio-surface transition-colors",
                  isActive(link.href)
                    ? "text-portfolio-fg bg-portfolio-surface"
                    : "text-portfolio-fg/80 hover:text-portfolio-fg"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={(e) => handleHashClick(e, "/#contact")}
              className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-portfolio-fg text-white text-sm font-medium"
            >
              Let&apos;s Talk
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
