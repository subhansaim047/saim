"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const TOTAL_FRAMES = 52;
const FRAME_PATH = (idx: number) =>
  `/scrolly-frames/frame_${idx.toString().padStart(3, "0")}.webp`;

const navItems = [
  { label: "Our story", href: "#our-story" },
  { label: "Services", href: "/services" },
  { label: "Tech Stack", href: "/technologies" },
  { label: "Free Tools", href: "/tools" },
  { label: "Demo Sites", href: "/demos" },
  { label: "Blogs", href: "/blogs" },
  { label: "Benefits", href: "#benefits" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const ScrollytellingCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Smooth scroll tracking via Framer Motion
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const currentFrameRef = useRef<number>(0);
  const targetFrameRef = useRef<number>(0);
  const animFrameIdRef = useRef<number | null>(null);
  const lastDrawnFrameRef = useRef<number>(-1);

  // =========================================================================
  // 1. IMAGE PRELOADING WITH PROGRESS TRACKER
  // =========================================================================
  useEffect(() => {
    let active = true;
    const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);
    imagesRef.current = images;

    let count = 0;

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = FRAME_PATH(i);
      img.decoding = "async";

      const onImageReady = () => {
        if (!active) return;
        images[i] = img;
        count++;
        setLoadedCount(count);

        // Draw initial frame as soon as frame 0 loads
        if (i === 0 && canvasRef.current) {
          const ctx = canvasRef.current.getContext("2d");
          if (ctx) drawFrame(0, ctx, canvasRef.current, images);
        }

        if (count >= TOTAL_FRAMES) {
          setIsLoaded(true);
        }
      };

      img.onload = onImageReady;
      img.onerror = onImageReady; // Prevent deadlock on network glitch
    }

    return () => {
      active = false;
    };
  }, []);

  // =========================================================================
  // 2. CANVAS DRAWING ROUTINE (100% PURE ASPECT RATIO — ZERO DIGITAL ZOOM)
  // =========================================================================
  const drawFrame = (
    index: number,
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    images: HTMLImageElement[]
  ) => {
    const safeIdx = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(index)));
    const img = images[safeIdx];
    if (!img || !img.complete || !img.naturalWidth) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    // Pristine aspect ratio: contain fit on mobile so zero subjects are clipped, cover on desktop
    const isMobile = window.innerWidth < 768;
    const scale = isMobile
      ? Math.min(cw / iw, ch / ih) * 1.05
      : Math.max(cw / iw, ch / ih);
    const nw = Math.ceil(iw * scale);
    const nh = Math.ceil(ih * scale);
    const nx = Math.floor((cw - nw) / 2);
    const ny = Math.floor((ch - nh) / 2);

    ctx.fillStyle = "#0a0a0a";
    ctx.fillRect(0, 0, cw, ch);
    ctx.drawImage(img, 0, 0, iw, ih, nx, ny, nw, nh);

    // Dynamic Edge Feathering: guarantees 100% invisible borders on all viewports
    const featherY = Math.min(nh * 0.18, 90);
    const featherX = Math.min(nw * 0.12, 70);

    // Top edge fade
    const topGrad = ctx.createLinearGradient(0, ny, 0, ny + featherY);
    topGrad.addColorStop(0, "#0a0a0a");
    topGrad.addColorStop(1, "rgba(10, 10, 10, 0)");
    ctx.fillStyle = topGrad;
    ctx.fillRect(nx - 2, ny - 2, nw + 4, featherY + 2);

    // Bottom edge fade
    const botGrad = ctx.createLinearGradient(0, ny + nh - featherY, 0, ny + nh);
    botGrad.addColorStop(0, "rgba(10, 10, 10, 0)");
    botGrad.addColorStop(1, "#0a0a0a");
    ctx.fillStyle = botGrad;
    ctx.fillRect(nx - 2, ny + nh - featherY, nw + 4, featherY + 4);

    // Left edge fade
    const leftGrad = ctx.createLinearGradient(nx, 0, nx + featherX, 0);
    leftGrad.addColorStop(0, "#0a0a0a");
    leftGrad.addColorStop(1, "rgba(10, 10, 10, 0)");
    ctx.fillStyle = leftGrad;
    ctx.fillRect(nx - 2, ny - 2, featherX + 2, nh + 4);

    // Right edge fade
    const rightGrad = ctx.createLinearGradient(nx + nw - featherX, 0, nx + nw, 0);
    rightGrad.addColorStop(0, "rgba(10, 10, 10, 0)");
    rightGrad.addColorStop(1, "#0a0a0a");
    ctx.fillStyle = rightGrad;
    ctx.fillRect(nx + nw - featherX, ny - 2, featherX + 4, nh + 4);
    lastDrawnFrameRef.current = safeIdx;
  };

  // =========================================================================
  // 3. CANVAS RESIZE & HIGH-DPI SCALING
  // =========================================================================
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.floor(window.innerWidth * dpr);
      const h = Math.floor(window.innerHeight * dpr);

      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }

      const ctx = canvas.getContext("2d", { alpha: false });
      if (ctx && imagesRef.current) {
        drawFrame(currentFrameRef.current, ctx, canvas, imagesRef.current);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, [isLoaded]);

  // =========================================================================
  // 4. SCROLL PROGRESS TO FRAME INDEX MAPPER WITH RAF LERP
  // =========================================================================
  useEffect(() => {
    if (!isLoaded) return;

    // Sync Framer Motion scroll progress to target frame index
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const clamped = Math.max(0, Math.min(1, latest));
      targetFrameRef.current = clamped * (TOTAL_FRAMES - 1);
    });

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    // 60-120fps smooth interpolation loop
    const render = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;

      if (Math.abs(diff) > 0.01) {
        currentFrameRef.current += diff * 0.28; // Snappy, responsive lerp
      } else {
        currentFrameRef.current = targetFrameRef.current;
      }

      const rounded = Math.round(currentFrameRef.current);
      if (rounded !== lastDrawnFrameRef.current) {
        drawFrame(rounded, ctx, canvas, imagesRef.current);
      }

      animFrameIdRef.current = requestAnimationFrame(render);
    };

    animFrameIdRef.current = requestAnimationFrame(render);

    return () => {
      unsubscribe();
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, [isLoaded, scrollYProgress]);

  // =========================================================================
  // 5. STORY TEXT OPACITY, TRANSFORM & DISPLAY MAPPINGS (0%, 30%, 60%, 90%)
  // =========================================================================
  // Section 1: 0% - 20%
  const s1Opacity = useTransform(scrollYProgress, [0, 0.12, 0.2], [1, 1, 0]);
  const s1Y = useTransform(scrollYProgress, [0, 0.2], [0, -40]);
  const s1Display = useTransform(scrollYProgress, (v) => (v <= 0.22 ? "flex" : "none"));

  // Section 2: 24% - 46% (Peak ~30%)
  const s2Opacity = useTransform(scrollYProgress, [0.22, 0.3, 0.38, 0.46], [0, 1, 1, 0]);
  const s2Y = useTransform(scrollYProgress, [0.22, 0.3, 0.46], [40, 0, -40]);
  const s2Display = useTransform(scrollYProgress, (v) => (v >= 0.20 && v <= 0.48 ? "block" : "none"));

  // Section 3: 52% - 74% (Peak ~60%)
  const s3Opacity = useTransform(scrollYProgress, [0.5, 0.58, 0.66, 0.74], [0, 1, 1, 0]);
  const s3Y = useTransform(scrollYProgress, [0.5, 0.58, 0.74], [40, 0, -40]);
  const s3Display = useTransform(scrollYProgress, (v) => (v >= 0.48 && v <= 0.76 ? "block" : "none"));

  // Section 4: 80% - 100% (Peak ~90%)
  const s4Opacity = useTransform(scrollYProgress, [0.78, 0.88, 1], [0, 1, 1]);
  const s4Y = useTransform(scrollYProgress, [0.78, 0.88, 1], [40, 0, 0]);
  const s4Display = useTransform(scrollYProgress, (v) => (v >= 0.76 ? "flex" : "none"));

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400vh] bg-[#0a0a0a] text-white"
    >
      {/* =====================================================================
          PRELOADER OVERLAY
      ====================================================================== */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            key="preloader"
            data-preloader="true"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0a] text-white"
          >
            <div className="relative w-16 h-16 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-white/10" />
              <div className="absolute inset-0 rounded-full border-t-2 border-[#FF4A1C] animate-spin" />
              <Sparkles className="w-5 h-5 text-[#FF4A1C] animate-pulse" />
            </div>

            <div className="mt-6 flex flex-col items-center gap-1.5">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-white/50">
                Loading Experience
              </span>
              <span className="text-lg font-mono font-medium text-white/90">
                {Math.round((loadedCount / TOTAL_FRAMES) * 100)}%
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================================
          STICKY VIEWPORT & CANVAS CONTAINER
      ====================================================================== */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* HTML5 Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full block object-cover"
        />

        {/* Seamless Blending: eye-dropped edge gradient blending seamlessly into pure dark mode */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(10,10,10,0.65) 90%, #0a0a0a 100%)",
          }}
        />

        {/* Top & Bottom Hairline Ambient Fades */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent pointer-events-none" />

        {/* ===================================================================
            FLOATING NAVIGATION BAR
        ==================================================================== */}
        <nav className="absolute top-0 left-0 right-0 z-30 flex justify-center px-2 sm:px-6 pt-3 sm:pt-4 pointer-events-auto">
          {/* Mobile Pill Bar */}
          <div className="flex sm:hidden items-center justify-start gap-1 p-1.5 bg-[#121212]/80 backdrop-blur-xl rounded-full border border-white/10 max-w-[94vw] overflow-x-auto scrollbar-hide shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-[#FF4A1C] animate-pulse ml-2 mr-1 shrink-0" />
            {navItems.map((item) =>
              item.href.startsWith("/") ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[11px] font-medium tracking-tight text-white/80 hover:text-white bg-white/[0.06] hover:bg-white/15 px-3 py-1 rounded-full whitespace-nowrap transition-all"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[11px] font-medium tracking-tight text-white/80 hover:text-white bg-white/[0.06] hover:bg-white/15 px-3 py-1 rounded-full whitespace-nowrap transition-all"
                >
                  {item.label}
                </a>
              )
            )}
          </div>

          {/* Desktop Floating Pill Island */}
          <div className="hidden sm:flex bg-[#121212]/80 backdrop-blur-xl rounded-full px-5 py-2 items-center justify-center gap-1.5 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
            <div className="flex items-center gap-1.5 mr-2 pl-1">
              <span className="w-2 h-2 rounded-full bg-[#FF4A1C] animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/50">UK/EU</span>
            </div>
            {navItems.map((item) =>
              item.href.startsWith("/") ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[11px] font-medium tracking-tight text-white/80 hover:text-white bg-white/[0.04] hover:bg-white/15 px-3 py-1 rounded-full whitespace-nowrap transition-all"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[11px] font-medium tracking-tight text-white/80 hover:text-white bg-white/[0.04] hover:bg-white/15 px-3 py-1 rounded-full whitespace-nowrap transition-all"
                >
                  {item.label}
                </a>
              )
            )}
          </div>
        </nav>

        {/* ===================================================================
            CINEMATIC SCROLL-SYNCED TEXT OVERLAYS
        ==================================================================== */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-12 pointer-events-none h-full flex items-center">
          
          {/* ---------------------------------------------------------------
              0% SCROLL: HERO HEADLINE (Centered)
          ---------------------------------------------------------------- */}
          <motion.div
            style={{ opacity: s1Opacity, y: s1Y, display: s1Display }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-[#FF4A1C] animate-pulse" />
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-white/90">
                SCROLL TO EXPLORE
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white/95 max-w-4xl leading-[1.05]">
              Architectural Digital Experiences.
            </h1>

            <p className="mt-5 text-base sm:text-xl text-white/60 max-w-2xl font-normal leading-relaxed">
              Bespoke Next.js web applications engineered with sub-second performance, clean code ownership, and sculptural precision.
            </p>

            <div className="mt-8 flex items-center gap-2 text-white/40 text-xs font-mono uppercase tracking-widest animate-bounce">
              <span>Scroll Down</span>
              <span>↓</span>
            </div>
          </motion.div>

          {/* ---------------------------------------------------------------
              30% SCROLL: FEATURE / MESSAGE #1 (Left Aligned)
          ---------------------------------------------------------------- */}
          <motion.div
            style={{ opacity: s2Opacity, y: s2Y, display: s2Display }}
            className="absolute left-6 sm:left-12 max-w-xl text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4">
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#FF4A1C]">
                01 / CORE ARCHITECTURE
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white/90 leading-tight">
              Sub-Second Execution Speed.
            </h2>

            <p className="mt-4 text-sm sm:text-lg text-white/60 font-normal leading-relaxed">
              Every millisecond of latency is eradicated through React Server Components, intelligent prefetching, and edge delivery across the UK and Europe.
            </p>
          </motion.div>

          {/* ---------------------------------------------------------------
              60% SCROLL: FEATURE / MESSAGE #2 (Right Aligned)
          ---------------------------------------------------------------- */}
          <motion.div
            style={{ opacity: s3Opacity, y: s3Y, display: s3Display }}
            className="absolute right-6 sm:right-12 max-w-xl text-right ml-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4">
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#FF4A1C]">
                02 / ZERO MONTHLY LOCK-IN
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white/90 leading-tight">
              100% Code & Asset Ownership.
            </h2>

            <p className="mt-4 text-sm sm:text-lg text-white/60 font-normal leading-relaxed">
              Transparent fixed pricing from £250. You retain complete source code, repository control, and hosting ownership without recurring monthly agency retainers.
            </p>
          </motion.div>

          {/* ---------------------------------------------------------------
              90% SCROLL: CTA / FINAL MESSAGE (Centered)
          ---------------------------------------------------------------- */}
          <motion.div
            style={{ opacity: s4Opacity, y: s4Y, display: s4Display }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF4A1C]/15 border border-[#FF4A1C]/30 mb-5">
              <Sparkles className="w-3.5 h-3.5 text-[#FF4A1C]" />
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#FF4A1C]">
                READY TO BUILD?
              </span>
            </div>

            <h2 className="text-3xl sm:text-6xl font-bold tracking-tight text-white/95 max-w-3xl leading-tight">
              Elevate Your Digital Brand.
            </h2>

            <p className="mt-4 text-sm sm:text-lg text-white/60 max-w-xl font-normal leading-relaxed">
              Direct communication with lead engineers. Fast delivery within 5–7 days.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/923196526604?text=Hi%20Saim,%20I'm%20interested%20in%20a%20Next.js%20website"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-neutral-100 text-black font-semibold rounded-full pl-6 pr-2 py-2 flex items-center gap-3 transition-all duration-300 shadow-[0_4px_24px_rgba(255,255,255,0.18)] hover:scale-105 active:scale-95"
              >
                <span className="text-xs sm:text-sm tracking-tight font-semibold">Start on WhatsApp</span>
                <div className="bg-black rounded-full w-8 h-8 flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </div>
              </a>

              <a
                href="#pricing"
                className="px-6 py-3 rounded-full text-xs sm:text-sm font-medium text-white/80 hover:text-white bg-white/[0.06] hover:bg-white/10 border border-white/10 transition-all"
              >
                View Transparent Pricing
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};
