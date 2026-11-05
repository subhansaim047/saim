"use client";

import React from "react";

export const ScrollCanvasBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 w-full h-full z-0 pointer-events-none overflow-hidden bg-black transform-gpu"
    >
      {/* Single High-Resolution 1764x1176 Background Image on both Laptop & Mobile — Zero CPU/Canvas Overhead */}
      <img
        src="/scroll-frames/frame_000.webp"
        alt=""
        decoding="sync"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none transform-gpu"
      />
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />
    </div>
  );
};
