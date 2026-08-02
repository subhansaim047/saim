import { useRef, useState, type PointerEvent, type ReactNode } from "react";
import { cn } from "../lib/utils";

interface SpotlightBorderProps {
  children: ReactNode;
  className?: string;
  radius?: string;
  size?: number;
  intensity?: number;
}

export const SpotlightBorder = ({
  children,
  className = "",
  size = 460,
  intensity = 0.5,
}: SpotlightBorderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: -9999, y: -9999 });

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handlePointerLeave = () => {
    setPosition({ x: -9999, y: -9999 });
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={cn("relative group rounded-2xl border border-white/10", className)}
      style={
        {
          "--spot-x": `${position.x}px`,
          "--spot-y": `${position.y}px`,
          "--size": `${size}px`,
          "--intensity": intensity,
        } as Record<string, any>
      }
    >
      {/* 1px Spotlight Gradient Ring Layer */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle var(--size) at var(--spot-x) var(--spot-y), rgba(255, 255, 255, var(--intensity)), transparent 60%)`,
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
        }}
      />
      {children}
    </div>
  );
};
