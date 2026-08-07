"use client";

import { Instagram, Linkedin } from "lucide-react";

function DribbbleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.152-.136-.306-.209-.459-.232-.491-.481-.98-.744-1.459 2.284-1.003 4.862-2.988 4.966-3.125zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.129-2.576 1.924-4.942 2.888-.845-1.521-1.781-2.989-2.775-4.361A8.686 8.686 0 0112 3.475zm-3.633.803a53.896 53.896 0 012.816 4.247c-3.511 1.055-6.635 1.011-6.929 1.007a8.523 8.523 0 014.113-5.254zM3.475 12c0-.084.002-.168.007-.252.291.005 3.912.051 6.7-1.276.187.363.366.728.535 1.092-.076.024-.15.049-.224.075-3.341 1.137-5.717 4.243-5.898 4.519a8.445 8.445 0 01-2.12-3.158zm8.522 8.523a8.445 8.445 0 01-3.158-2.12c.276-.182 3.382-2.557 4.519-5.898.026-.074.051-.148.075-.224.364.169.729.348 1.092.535-1.327 2.788-1.281 6.409-1.276 6.7-.084.005-.168.007-.252.007zm4.847-1.235c-.131-.233-2.116-2.682-4.966-3.125a49.106 49.106 0 011.311-3.497 8.523 8.523 0 013.655 6.622zm-2.829-7.785a50.334 50.334 0 00-1.214-3.587c.293-.015.588-.023.884-.023 2.48 0 4.814.722 6.788 1.962-.912 1.175-2.831 2.414-5.458 2.648z" />
    </svg>
  );
}

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/daniel-ngumo-20960127b/" },
  { name: "Dribbble", icon: DribbbleIcon, href: "https://dribbble.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-portfolio-border">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-8 md:py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="font-display text-lg font-bold text-portfolio-fg">
              Daniel Ngumo
            </p>
            <p className="text-xs text-portfolio-muted mt-1">
              © {year} All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ name, icon: Icon, href }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-portfolio-border text-portfolio-muted hover:text-portfolio-fg hover:border-portfolio-fg transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 text-xs text-portfolio-muted">
            <a href="/privacy" className="hover:text-portfolio-fg transition-colors">
              Privacy
            </a>
            <a href="/terms" className="hover:text-portfolio-fg transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
