"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Respect accessibility settings
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Initialize Lenis with agency-grade smooth easing curve
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
      infinite: false,
    });

    lenisRef.current = lenis;
    (window as any).__lenis = lenis;

    // 60-120fps Hardware-accelerated RAF Loop
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Universal Smooth Anchor Link Click Interceptor
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement)?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      const isPureHash = href.startsWith("#");
      const isHomeHash =
        href.startsWith("/#") &&
        (window.location.pathname === "/" || window.location.pathname === "");

      if (isPureHash || isHomeHash) {
        const hash = href.startsWith("/#") ? href.slice(1) : href;
        if (hash === "#" || hash === "") return;

        try {
          const targetEl = document.querySelector(hash);
          if (targetEl) {
            e.preventDefault();
            lenis.scrollTo(targetEl as HTMLElement, {
              offset: -85,
              duration: 1.2,
            });

            if (window.history.pushState) {
              window.history.pushState(null, "", hash);
            }
          }
        } catch {
          // If querySelector fails on unusual selector, fallback to default browser
        }
      }
    };

    document.addEventListener("click", handleAnchorClick, { capture: true });

    // Handle initial hash on page load (e.g., https://saimdev.site/#pricing)
    if (window.location.hash) {
      const timer = setTimeout(() => {
        try {
          const targetEl = document.querySelector(window.location.hash);
          if (targetEl) {
            lenis.scrollTo(targetEl as HTMLElement, {
              offset: -85,
              duration: 1.2,
            });
          }
        } catch {
          // Safe fallback
        }
      }, 350);

      return () => {
        clearTimeout(timer);
        document.removeEventListener("click", handleAnchorClick, { capture: true });
        cancelAnimationFrame(rafId);
        lenis.destroy();
        (window as any).__lenis = null;
      };
    }

    return () => {
      document.removeEventListener("click", handleAnchorClick, { capture: true });
      cancelAnimationFrame(rafId);
      lenis.destroy();
      (window as any).__lenis = null;
    };
  }, []);

  return null;
}
