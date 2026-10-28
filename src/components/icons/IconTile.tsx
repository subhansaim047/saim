"use client";

import React from "react";

export type IconColor =
  | "amber"
  | "vermilion"
  | "emerald"
  | "blue"
  | "indigo"
  | "cyan"
  | "teal"
  | "rose"
  | "purple";

interface IconTileProps {
  color?: IconColor;
  size?: "sm" | "md" | "lg";
  className?: string;
  tileClassName?: string;
  glowClassName?: string;
  children: React.ReactNode;
}

const COLOR_MAP: Record<IconColor, { glow: string; borderHover: string; pillBg: string; pillText: string; dot: string }> = {
  amber: {
    glow: "rgba(245, 158, 11, 0.45)",
    borderHover: "group-hover:border-amber-400/40",
    pillBg: "bg-amber-400/10 border-amber-400/25",
    pillText: "text-amber-300",
    dot: "bg-amber-400 shadow-[0_0_8px_#f59e0b]",
  },
  vermilion: {
    glow: "rgba(255, 74, 28, 0.45)",
    borderHover: "group-hover:border-[#FF4A1C]/50",
    pillBg: "bg-[#FF4A1C]/10 border-[#FF4A1C]/30",
    pillText: "text-orange-300",
    dot: "bg-[#FF4A1C] shadow-[0_0_8px_#FF4A1C]",
  },
  emerald: {
    glow: "rgba(16, 185, 129, 0.45)",
    borderHover: "group-hover:border-emerald-400/40",
    pillBg: "bg-emerald-500/10 border-emerald-500/25",
    pillText: "text-emerald-300",
    dot: "bg-emerald-400 shadow-[0_0_8px_#10b981]",
  },
  blue: {
    glow: "rgba(59, 130, 246, 0.45)",
    borderHover: "group-hover:border-blue-400/40",
    pillBg: "bg-blue-500/10 border-blue-500/25",
    pillText: "text-blue-300",
    dot: "bg-blue-400 shadow-[0_0_8px_#3b82f6]",
  },
  indigo: {
    glow: "rgba(99, 102, 241, 0.45)",
    borderHover: "group-hover:border-indigo-400/40",
    pillBg: "bg-indigo-500/10 border-indigo-500/25",
    pillText: "text-indigo-300",
    dot: "bg-indigo-400 shadow-[0_0_8px_#6366f1]",
  },
  cyan: {
    glow: "rgba(6, 182, 212, 0.45)",
    borderHover: "group-hover:border-cyan-400/40",
    pillBg: "bg-cyan-500/10 border-cyan-500/25",
    pillText: "text-cyan-300",
    dot: "bg-cyan-400 shadow-[0_0_8px_#06b6d4]",
  },
  teal: {
    glow: "rgba(20, 184, 166, 0.45)",
    borderHover: "group-hover:border-teal-400/40",
    pillBg: "bg-teal-500/10 border-teal-500/25",
    pillText: "text-teal-300",
    dot: "bg-teal-400 shadow-[0_0_8px_#14b8a6]",
  },
  rose: {
    glow: "rgba(244, 63, 94, 0.45)",
    borderHover: "group-hover:border-rose-400/40",
    pillBg: "bg-rose-500/10 border-rose-500/25",
    pillText: "text-rose-300",
    dot: "bg-rose-400 shadow-[0_0_8px_#f43f5e]",
  },
  purple: {
    glow: "rgba(168, 85, 247, 0.45)",
    borderHover: "group-hover:border-purple-400/40",
    pillBg: "bg-purple-500/10 border-purple-500/25",
    pillText: "text-purple-300",
    dot: "bg-purple-400 shadow-[0_0_8px_#a855f7]",
  },
};

const SIZE_MAP = {
  sm: {
    wrap: "w-9 h-9",
    tile: "w-9 h-9 rounded-xl",
    glowRadius: "rounded-xl",
    svgSize: "[&>svg]:w-5 [&>svg]:h-5",
  },
  md: {
    wrap: "w-12 h-12",
    tile: "w-12 h-12 rounded-2xl",
    glowRadius: "rounded-2xl",
    svgSize: "[&>svg]:w-7 [&>svg]:h-7",
  },
  lg: {
    wrap: "w-14 h-14",
    tile: "w-14 h-14 rounded-2xl",
    glowRadius: "rounded-2xl",
    svgSize: "[&>svg]:w-8 [&>svg]:h-8",
  },
};

export const IconTile: React.FC<IconTileProps> = ({
  color = "amber",
  size = "md",
  className = "",
  tileClassName = "",
  glowClassName = "",
  children,
}) => {
  const colorConf = COLOR_MAP[color] || COLOR_MAP.amber;
  const sizeConf = SIZE_MAP[size] || SIZE_MAP.md;

  return (
    <div
      aria-hidden="true"
      className={`relative shrink-0 ${sizeConf.wrap} ${className}`}
    >
      {/* Category Ambient Radial Glow */}
      <div
        className={`absolute -inset-1.5 ${sizeConf.glowRadius} opacity-40 group-hover:opacity-85 blur-md transition-all duration-300 pointer-events-none motion-reduce:transition-none ${glowClassName}`}
        style={{
          background: `radial-gradient(circle, ${colorConf.glow} 0%, transparent 72%)`,
        }}
      />

      {/* Dark Glass Squircle Tile (Raycast Style) */}
      <div
        className={`relative ${sizeConf.tile} bg-gradient-to-br from-[#1b1b22] via-[#121216] to-[#0a0a0d] border border-white/10 ${colorConf.borderHover} flex items-center justify-center overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.6)] transition-all duration-200 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:shadow-[0_12px_28px_rgba(0,0,0,0.8)] motion-reduce:transform-none ${sizeConf.svgSize} ${tileClassName}`}
      >
        {/* Specular Inner Glare (Top-Left Light Source) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 18% 18%, rgba(255, 255, 255, 0.16) 0%, transparent 55%)",
          }}
        />

        {/* Subtle Top Hairline Highlight */}
        <div className="absolute top-0 left-2 right-2 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

        {/* The Bespoke SVG Icon */}
        <div className="relative z-10 flex items-center justify-center transition-transform duration-200 motion-safe:group-hover:scale-105 motion-reduce:transform-none">
          {children}
        </div>
      </div>
    </div>
  );
};

export const CategoryTagPill = ({
  color = "amber",
  label,
  className = "",
}: {
  color?: IconColor;
  label: string;
  className?: string;
}) => {
  const colorConf = COLOR_MAP[color] || COLOR_MAP.amber;
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-0.5 rounded-full border transition-colors ${colorConf.pillBg} ${colorConf.pillText} ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${colorConf.dot}`} />
      <span>{label}</span>
    </span>
  );
};
