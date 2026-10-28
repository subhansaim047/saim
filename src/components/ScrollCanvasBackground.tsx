"use client";

import React, { useEffect, useRef } from "react";

const TOTAL_FRAMES = 90;
const FRAME_PATH = (idx: number) =>
  `/scroll-frames/frame_${idx.toString().padStart(3, "0")}.webp`;

export const ScrollCanvasBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(0);
  const targetFrameRef = useRef<number>(0);
  const animFrameIdRef = useRef<number | null>(null);
  const lastDrawnFrameRef = useRef<number>(-1);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Initialize images cache
    const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);
    imagesRef.current = images;

    // Resize canvas with devicePixelRatio
    const updateCanvasSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      drawFrame(currentFrameRef.current);
    };

    // Draw single frame with object-fit: cover
    const drawFrame = (frameIndex: number) => {
      const idx = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(frameIndex)));
      const img = images[idx];
      if (!img || !img.complete || img.naturalWidth === 0) {
        // Fallback to closest available earlier frame
        let fallbackIdx = idx;
        while (fallbackIdx >= 0) {
          if (images[fallbackIdx]?.complete && images[fallbackIdx].naturalWidth > 0) {
            drawImg(images[fallbackIdx]);
            lastDrawnFrameRef.current = fallbackIdx;
            return;
          }
          fallbackIdx--;
        }
        return;
      }

      drawImg(img);
      lastDrawnFrameRef.current = idx;
    };

    const drawImg = (img: HTMLImageElement) => {
      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;

      const scale = Math.max(cw / iw, ch / ih);
      const nw = iw * scale;
      const nh = ih * scale;
      const nx = (cw - nw) / 2;
      const ny = (ch - nh) / 2;

      ctx.drawImage(img, 0, 0, iw, ih, nx, ny, nw, nh);
    };

    // 1. Load initial frame 0 immediately
    const img0 = new Image();
    img0.src = FRAME_PATH(0);
    img0.onload = () => {
      images[0] = img0;
      updateCanvasSize();
    };

    // 2. Progressively preload remaining frames in background chunks
    const preloadRest = () => {
      let currentLoadIdx = 1;
      const CHUNK_SIZE = 6;

      const loadNextChunk = () => {
        if (currentLoadIdx >= TOTAL_FRAMES) return;
        const end = Math.min(currentLoadIdx + CHUNK_SIZE, TOTAL_FRAMES);

        for (let i = currentLoadIdx; i < end; i++) {
          const img = new Image();
          img.src = FRAME_PATH(i);
          const captureIdx = i;
          img.onload = () => {
            images[captureIdx] = img;
          };
        }
        currentLoadIdx = end;

        // Schedule next chunk during browser idle
        if ("requestIdleCallback" in window) {
          (window as any).requestIdleCallback(loadNextChunk, { timeout: 100 });
        } else {
          setTimeout(loadNextChunk, 40);
        }
      };

      // Start preloading after initial render
      setTimeout(loadNextChunk, 80);
    };

    preloadRest();

    // 3. Scroll handler
    const onScroll = () => {
      if (prefersReducedMotion) return;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? Math.max(0, Math.min(1, scrollTop / scrollHeight)) : 0;
      targetFrameRef.current = progress * (TOTAL_FRAMES - 1);
    };

    // 4. Smooth lerp animation loop
    const animate = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.05) {
        currentFrameRef.current += diff * 0.12;
      } else {
        currentFrameRef.current = targetFrameRef.current;
      }

      const rounded = Math.round(currentFrameRef.current);
      if (rounded !== lastDrawnFrameRef.current) {
        drawFrame(rounded);
      }

      animFrameIdRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateCanvasSize, { passive: true });

    updateCanvasSize();
    onScroll();

    if (!prefersReducedMotion) {
      animFrameIdRef.current = requestAnimationFrame(animate);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateCanvasSize);
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 w-full h-full -z-20 pointer-events-none overflow-hidden bg-black"
    >
      {/* Scroll-Driven Video Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block transform-gpu will-change-transform opacity-75"
      />

      {/* Luxury Dark Film & Vignette Overlay */}
      {/* 1. Global Dark Film to protect contrast */}
      <div className="absolute inset-0 bg-black/45 pointer-events-none" />

      {/* 2. Top and Bottom soft fade out to pure OLED black */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/85 pointer-events-none" />

      {/* 3. Radial center spotlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, transparent 40%, rgba(0,0,0,0.65) 100%)",
        }}
      />
    </div>
  );
};
