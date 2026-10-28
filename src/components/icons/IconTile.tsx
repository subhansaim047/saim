"use client";

import React from "react";

export type IconColor =
  | "amber"
  | "vermilion"
  | "emerald"
  | "sky"
  | "blue"
  | "purple"
  | "cyan"
  | "teal"
  | "rose"
  | "indigo";

interface IconTileProps {
  color?: IconColor;
  size?: "sm" | "md" | "lg";
  className?: string;
  tileClassName?: string;
  iconHover?: string;
  children: React.ReactNode;
}

export const COLOR_CONFIG: Record<
  IconColor,
  {
    glow: string;
    color: string;
    borderHover: string;
    pillBg: string;
    pillText: string;
    dot: string;
  }
> = {
  amber: {
    glow: "from-amber-500/35 to-transparent",
    color: "text-amber-400",
    borderHover:
      "group-hover:border-amber-400/50 group-hover:shadow-[0_0_24px_rgba(245,158,11,0.25)]",
    pillBg: "bg-amber-400/10 border-amber-400/25",
    pillText: "text-amber-300",
    dot: "bg-amber-400 shadow-[0_0_8px_#f59e0b]",
  },
  vermilion: {
    glow: "from-[#FF4A1C]/35 to-transparent",
    color: "text-[#FF4A1C]",
    borderHover:
      "group-hover:border-[#FF4A1C]/50 group-hover:shadow-[0_0_24px_rgba(255,74,28,0.25)]",
    pillBg: "bg-[#FF4A1C]/10 border-[#FF4A1C]/30",
    pillText: "text-orange-300",
    dot: "bg-[#FF4A1C] shadow-[0_0_8px_#FF4A1C]",
  },
  emerald: {
    glow: "from-emerald-500/35 to-transparent",
    color: "text-emerald-400",
    borderHover:
      "group-hover:border-emerald-400/50 group-hover:shadow-[0_0_24px_rgba(52,211,153,0.25)]",
    pillBg: "bg-emerald-500/10 border-emerald-500/25",
    pillText: "text-emerald-300",
    dot: "bg-emerald-400 shadow-[0_0_8px_#10b981]",
  },
  sky: {
    glow: "from-sky-500/35 to-transparent",
    color: "text-sky-400",
    borderHover:
      "group-hover:border-sky-400/50 group-hover:shadow-[0_0_24px_rgba(56,189,248,0.25)]",
    pillBg: "bg-sky-500/10 border-sky-500/25",
    pillText: "text-sky-300",
    dot: "bg-sky-400 shadow-[0_0_8px_#38bdf8]",
  },
  blue: {
    glow: "from-sky-500/35 to-transparent",
    color: "text-sky-400",
    borderHover:
      "group-hover:border-sky-400/50 group-hover:shadow-[0_0_24px_rgba(56,189,248,0.25)]",
    pillBg: "bg-sky-500/10 border-sky-500/25",
    pillText: "text-sky-300",
    dot: "bg-sky-400 shadow-[0_0_8px_#38bdf8]",
  },
  purple: {
    glow: "from-purple-500/35 to-transparent",
    color: "text-purple-400",
    borderHover:
      "group-hover:border-purple-400/50 group-hover:shadow-[0_0_24px_rgba(192,132,252,0.25)]",
    pillBg: "bg-purple-500/10 border-purple-500/25",
    pillText: "text-purple-300",
    dot: "bg-purple-400 shadow-[0_0_8px_#a855f7]",
  },
  cyan: {
    glow: "from-cyan-500/35 to-transparent",
    color: "text-cyan-400",
    borderHover:
      "group-hover:border-cyan-400/50 group-hover:shadow-[0_0_24px_rgba(34,211,238,0.25)]",
    pillBg: "bg-cyan-500/10 border-cyan-500/25",
    pillText: "text-cyan-300",
    dot: "bg-cyan-400 shadow-[0_0_8px_#06b6d4]",
  },
  teal: {
    glow: "from-teal-500/35 to-transparent",
    color: "text-teal-400",
    borderHover:
      "group-hover:border-teal-400/50 group-hover:shadow-[0_0_24px_rgba(20,184,166,0.25)]",
    pillBg: "bg-teal-500/10 border-teal-500/25",
    pillText: "text-teal-300",
    dot: "bg-teal-400 shadow-[0_0_8px_#14b8a6]",
  },
  rose: {
    glow: "from-rose-500/35 to-transparent",
    color: "text-rose-400",
    borderHover:
      "group-hover:border-rose-400/50 group-hover:shadow-[0_0_24px_rgba(244,63,94,0.25)]",
    pillBg: "bg-rose-500/10 border-rose-500/25",
    pillText: "text-rose-300",
    dot: "bg-rose-400 shadow-[0_0_8px_#f43f5e]",
  },
  indigo: {
    glow: "from-indigo-500/35 to-transparent",
    color: "text-indigo-400",
    borderHover:
      "group-hover:border-indigo-400/50 group-hover:shadow-[0_0_24px_rgba(129,140,248,0.25)]",
    pillBg: "bg-indigo-500/10 border-indigo-500/25",
    pillText: "text-indigo-300",
    dot: "bg-indigo-400 shadow-[0_0_8px_#6366f1]",
  },
};

const SIZE_CONFIG = {
  sm: {
    wrap: "w-9 h-9",
    tile: "w-9 h-9 rounded-xl",
    glowRadius: "rounded-xl -inset-1",
    iconSize: "[&>svg]:w-4 [&>svg]:h-4",
  },
  md: {
    wrap: "w-12 h-12",
    tile: "w-12 h-12 rounded-2xl",
    glowRadius: "rounded-2xl -inset-1.5",
    iconSize: "[&>svg]:w-5 [&>svg]:h-5",
  },
  lg: {
    wrap: "w-14 h-14",
    tile: "w-14 h-14 rounded-2xl",
    glowRadius: "rounded-2xl -inset-2",
    iconSize: "[&>svg]:w-6 [&>svg]:h-6",
  },
};

export const IconTile: React.FC<IconTileProps> = ({
  color = "amber",
  size = "md",
  className = "",
  tileClassName = "",
  iconHover = "group-hover:scale-115 group-hover:-translate-y-0.5",
  children,
}) => {
  const conf = COLOR_CONFIG[color] || COLOR_CONFIG.amber;
  const s = SIZE_CONFIG[size] || SIZE_CONFIG.md;

  return (
    <div aria-hidden="true" className={`relative shrink-0 ${s.wrap} ${className}`}>
      {/* Subtle Ambient Hover Glow */}
      <div
        className={`absolute ${s.glowRadius} bg-gradient-to-br ${conf.glow} opacity-0 group-hover:opacity-100 blur-md transition-all duration-500 pointer-events-none`}
      />

      {/* Sybiosme Squircle Badge Container */}
      <div
        className={`relative ${s.tile} bg-[#111113] border border-white/10 ${conf.borderHover} flex items-center justify-center transition-all duration-300 shadow-md ${s.iconSize} ${conf.color} ${tileClassName}`}
      >
        <div
          className={`transition-all duration-500 ease-out ${iconHover} flex items-center justify-center`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export const CategoryTagPill: React.FC<{
  color: IconColor;
  label: string;
  className?: string;
}> = ({ color, label, className = "" }) => {
  const conf = COLOR_CONFIG[color] || COLOR_CONFIG.amber;

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${conf.pillBg} ${conf.pillText} ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${conf.dot} animate-pulse`} />
      <span>{label}</span>
    </span>
  );
};
