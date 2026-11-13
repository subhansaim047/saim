import React from "react";

interface FazierBadgeProps {
  className?: string;
}

/**
 * Self-contained Royal Blue & Obsidian Fazier Featured badge (avoids brittle external SVG timeouts).
 */
export const FazierBadge: React.FC<FazierBadgeProps> = ({ className = "" }) => (
  <a
    href="https://fazier.com"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Featured on Fazier"
    className={`inline-flex items-center gap-2.5 rounded-xl border border-[#2F6CE1]/35 bg-[#0A1328] px-3.5 py-2 text-left shadow-[0_8px_22px_-12px_rgba(47,108,225,0.45)] transition-all duration-200 hover:border-[#5B92F5] hover:bg-[#0F1C3A] ${className}`}
  >
    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#2F6CE1] text-white">
      <svg viewBox="0 0 20 20" className="h-4 w-4 fill-current" aria-hidden="true">
        <path d="M10 1.8l2.35 4.76 5.25.76-3.8 3.7.9 5.23L10 13.78l-4.7 2.47.9-5.23-3.8-3.7 5.25-.76L10 1.8z" />
      </svg>
    </span>
    <span className="flex flex-col leading-tight">
      <span className="text-[9px] font-mono uppercase tracking-[0.18em] text-[#93C5FD]">
        Featured on
      </span>
      <span className="text-sm font-bold tracking-tight text-white">
        Fazier
      </span>
    </span>
  </a>
);
