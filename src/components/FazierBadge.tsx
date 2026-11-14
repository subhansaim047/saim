import React from "react";

interface FazierBadgeProps {
  className?: string;
}

/**
 * Self-contained Monochrome & Lime Fazier Featured badge aligned with Saim Dev theme.
 */
export const FazierBadge: React.FC<FazierBadgeProps> = ({ className = "" }) => (
  <a
    href="https://fazier.com"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Featured on Fazier"
    className={`inline-flex items-center gap-2.5 rounded-xl border border-[#262626] bg-[#0D0D0D] px-3.5 py-2 text-left transition-all duration-200 hover:border-[#BAFF00]/60 hover:bg-[#161616] ${className}`}
  >
    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#BAFF00] text-[#0D0D0D]">
      <svg viewBox="0 0 20 20" className="h-4 w-4 fill-current" aria-hidden="true">
        <path d="M10 1.8l2.35 4.76 5.25.76-3.8 3.7.9 5.23L10 13.78l-4.7 2.47.9-5.23-3.8-3.7 5.25-.76L10 1.8z" />
      </svg>
    </span>
    <span className="flex flex-col leading-tight">
      <span className="text-[9px] font-mono-tech uppercase tracking-[0.18em] text-[#939393]">
        Featured on
      </span>
      <span className="text-sm font-semibold tracking-tight text-white">
        Fazier
      </span>
    </span>
  </a>
);
