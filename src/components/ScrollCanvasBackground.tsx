"use client";

import React, { useEffect, useRef } from "react";

const TOTAL_FRAMES = 90;
const FRAME_PATH = (idx: number) =>
  `/scroll-frames/frame_${idx.toString().padStart(3, "0")}.webp`;

export const ScrollCanvasBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const isLoadedRef = useRef<boolean[]>(new Array(TOTAL_FRAMES).fill(false));
  const currentFrameRef = useRef<number>(0);
  const targetFrameRef = useRef<number>(0);
  const animFrameIdRef = useRef<number | null>(null);
  const lastDrawnFrameRef = useRef<number>(-1);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Initialize images cache
    const images: (HTMLImageElement | null)[] = new Array(TOTAL_FRAMES).fill(null);
    const isLoaded: boolean[] = new Array(TOTAL_FRAMES).fill(false);
    imagesRef.current = images;
    isLoadedRef.current = isLoaded;

    // Pure 1:1 image drawer with natural cover aspect ratio — ZERO zoom in/out, 100% original quality
    const drawImg = (img: HTMLImageElement) => {
      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.naturalWidth || img.width;
      const ih = img.naturalHeight || img.height;
      if (!iw || !ih) return;

      const scale = Math.max(cw / iw, ch / ih);
      const nw = Math.ceil(iw * scale);
      const nh = Math.ceil(ih * scale);
      const nx = Math.floor((cw - nw) / 2);
      const ny = Math.floor((ch - nh) / 2);

      ctx.drawImage(img, 0, 0, iw, ih, nx, ny, nw, nh);
    };

    // Draw the closest loaded frame to the desired index
    const drawFrame = (desiredIndex: number) => {
      const idx = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(desiredIndex)));

      // If exact frame is loaded, draw it
      if (isLoaded[idx] && images[idx]) {
        drawImg(images[idx]!);
        lastDrawnFrameRef.current = idx;
        return;
      }

      // Search outward for the nearest loaded frame so the screen never freezes or goes black
      let bestIdx = -1;
      let minDistance = Infinity;

      for (let i = 0; i < TOTAL_FRAMES; i++) {
        if (isLoaded[i] && images[i]) {
          const dist = Math.abs(i - idx);
          if (dist < minDistance) {
            minDistance = dist;
            bestIdx = i;
          }
        }
      }

      if (bestIdx >= 0 && images[bestIdx]) {
        drawImg(images[bestIdx]!);
        if (bestIdx === idx) {
          lastDrawnFrameRef.current = idx;
        }
      }
    };

    // Resize canvas with devicePixelRatio
    const updateCanvasSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const width = Math.floor(window.innerWidth * dpr);
      const height = Math.floor(window.innerHeight * dpr);

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
      drawFrame(currentFrameRef.current);
    };

    // Preload all 90 frames concurrently
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.decoding = "async";
      img.src = FRAME_PATH(i);
      const frameIdx = i;

      img.onload = () => {
        images[frameIdx] = img;
        isLoaded[frameIdx] = true;

        // Draw initial frame immediately on first load
        if (frameIdx === 0 && lastDrawnFrameRef.current === -1) {
          updateCanvasSize();
          drawFrame(0);
        }

        // If the user's scroll position currently wants this frame, redraw now
        if (Math.round(currentFrameRef.current) === frameIdx) {
          drawFrame(frameIdx);
        }
      };
    }

    // Scroll progress calculator (checks Lenis first, falls back to native scroll)
    const getScrollProgress = (): number => {
      // 1. Check Lenis instance
      const lenis = (window as any).__lenis;
      if (lenis && typeof lenis.progress === "number" && !isNaN(lenis.progress)) {
        return Math.max(0, Math.min(1, lenis.progress));
      }

      // 2. Native scroll fallback
      const scrollY =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        window.scrollY ||
        0;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return 0;
      return Math.max(0, Math.min(1, scrollY / scrollHeight));
    };

    const updateTargetFromScroll = () => {
      if (prefersReducedMotion) return;
      const progress = getScrollProgress();
      targetFrameRef.current = progress * (TOTAL_FRAMES - 1);
    };

    // 60-120fps scrubbing loop
    const animate = () => {
      // Continually refresh progress in case of Lenis RAF updates
      updateTargetFromScroll();

      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.01) {
        currentFrameRef.current += diff * 0.28; // Snappy smooth lerp
      } else {
        currentFrameRef.current = targetFrameRef.current;
      }

      const rounded = Math.round(currentFrameRef.current);
      if (rounded !== lastDrawnFrameRef.current) {
        drawFrame(rounded);
      }

      animFrameIdRef.current = requestAnimationFrame(animate);
    };

    // Attach listeners
    window.addEventListener("scroll", updateTargetFromScroll, { passive: true });
    window.addEventListener("resize", updateCanvasSize, { passive: true });

    // Also connect to Lenis on('scroll') if available
    const checkLenisTimer = setInterval(() => {
      const lenis = (window as any).__lenis;
      if (lenis) {
        lenis.on("scroll", (e: any) => {
          if (typeof e?.progress === "number") {
            targetFrameRef.current = e.progress * (TOTAL_FRAMES - 1);
          }
        });
        clearInterval(checkLenisTimer);
      }
    }, 100);

    // Initial setup
    updateCanvasSize();
    updateTargetFromScroll();

    if (!prefersReducedMotion) {
      animFrameIdRef.current = requestAnimationFrame(animate);
    } else {
      drawFrame(0);
    }

    return () => {
      clearInterval(checkLenisTimer);
      window.removeEventListener("scroll", updateTargetFromScroll);
      window.removeEventListener("resize", updateCanvasSize);
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 w-full h-full z-0 pointer-events-none overflow-hidden"
    >
      {/* Scroll-Driven Video Canvas — Full Uncropped Pristine Quality */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block transform-gpu will-change-transform"
      />

      {/* Crisp Ambient Shading: ensures high contrast for typography while keeping video crystal clear */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />
    </div>
  );
};
