"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface MagneticButtonProps {
  children?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  showArrow?: boolean;
  type?: "button" | "submit" | "reset";
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  href,
  onClick,
  className = "",
  variant = "primary",
  showArrow = true,
  type = "button",
  target,
  rel,
  ariaLabel,
}) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [canHover, setCanHover] = useState(false);

  // Motion values for smooth magnetic pull
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Physics spring configuration
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable magnetic tracking on pointer devices that support hover and when reduced motion is not requested
    const hasHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setCanHover(hasHover && !reducedMotion);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canHover || !buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    // Pull factor (0.35 max)
    mouseX.set(distanceX * 0.35);
    mouseY.set(distanceY * 0.35);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Base styling per variant
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-white text-black font-semibold hover:bg-[#b5f900] shadow-[0_4px_24px_rgba(255,255,255,0.12)] border-transparent";
      case "secondary":
        return "bg-[#181818] hover:bg-[#222222] text-white border border-[#2c2c2c] hover:border-[#b5f900]/40";
      case "outline":
        return "bg-transparent hover:bg-white/5 text-white border border-white/20 hover:border-[#b5f900]";
      case "ghost":
        return "bg-transparent hover:bg-white/5 text-[#a1a1a1] hover:text-white border-transparent";
      default:
        return "bg-white text-black hover:bg-[#b5f900]";
    }
  };

  const content = (
    <motion.span
      style={canHover ? { x: springX, y: springY } : undefined}
      whileTap={{ scale: 0.96 }}
      className={`relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm transition-colors duration-300 overflow-hidden group select-none ${getVariantStyles()} ${className}`}
    >
      {/* Fill-sweep hover overlay */}
      <span
        aria-hidden="true"
        className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none"
      />

      <span className="relative z-10 font-medium tracking-tight flex items-center gap-2">
        {children}
      </span>

      {showArrow && (
        <ArrowUpRight
          aria-hidden="true"
          className="relative z-10 w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </motion.span>
  );

  return (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block relative"
    >
      {href ? (
        <a
          href={href}
          target={target}
          rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
          aria-label={ariaLabel}
          className="inline-block focus-visible:outline-2 focus-visible:outline-[#b5f900] focus-visible:outline-offset-4 rounded-full"
        >
          {content}
        </a>
      ) : (
        <button
          type={type}
          onClick={onClick}
          aria-label={ariaLabel}
          className="inline-block focus-visible:outline-2 focus-visible:outline-[#b5f900] focus-visible:outline-offset-4 rounded-full"
        >
          {content}
        </button>
      )}
    </div>
  );
};
