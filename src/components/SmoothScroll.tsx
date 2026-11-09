"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Global motion engine:
 *  - Lenis smooth scroll driven by the GSAP ticker and synced with ScrollTrigger
 *  - Scroll progress bar
 *  - Declarative scroll animations via data attributes:
 *      [data-gsap-reveal]   fade/slide-up reveal
 *      [data-gsap-stagger]  children cascade reveal (container attribute)
 *      [data-gsap-parallax] vertical parallax (value = strength in px, default 60)
 *      [data-magnetic]      magnetic cursor pull (fine pointers only)
 *  - All motion is gated by prefers-reduced-motion via gsap.matchMedia()
 */
export function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mm = gsap.matchMedia();
    let lenis: Lenis | null = null;
    let tickerFn: ((time: number) => void) | null = null;

    const scrollToTarget = (target: HTMLElement) => {
      if (lenis) {
        lenis.scrollTo(target, { offset: -85, duration: 1.2 });
      } else {
        const top = target.getBoundingClientRect().top + window.scrollY - 85;
        window.scrollTo({ top, behavior: "auto" });
      }
    };

    // ---------- Smooth scroll (motion allowed only) ----------
    if (!prefersReducedMotion) {
      lenis = new Lenis({
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

      lenis.on("scroll", ScrollTrigger.update);
      tickerFn = (time: number) => lenis!.raf(time * 1000);
      gsap.ticker.add(tickerFn);
      gsap.ticker.lagSmoothing(0);
    }

    // ---------- Scroll progress bar ----------
    const bar = progressRef.current;
    const onScrollProgress = () => {
      if (!bar) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      bar.style.transform = `scaleX(${p})`;
    };
    window.addEventListener("scroll", onScrollProgress, { passive: true });
    onScrollProgress();

    // ---------- GSAP scroll-driven motion ----------
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Section / element reveals
      gsap.utils.toArray<HTMLElement>("[data-gsap-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          clearProps: "transform,opacity",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });

      // Staggered cascades (container with data-gsap-stagger, children animate)
      gsap.utils.toArray<HTMLElement>("[data-gsap-stagger]").forEach((container) => {
        const items = Array.from(container.children) as HTMLElement[];
        if (!items.length) return;
        gsap.from(items, {
          y: 48,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.09,
          clearProps: "transform,opacity",
          scrollTrigger: { trigger: container, start: "top 85%", once: true },
        });
      });

      // Parallax
      gsap.utils.toArray<HTMLElement>("[data-gsap-parallax]").forEach((el) => {
        const strength = parseFloat(el.dataset.gsapParallax || "60") || 60;
        gsap.fromTo(
          el,
          { y: -strength / 2 },
          {
            y: strength / 2,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement || el,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      });

      // Magnetic buttons (desktop pointers only)
      const cleanups: Array<() => void> = [];
      if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        gsap.utils.toArray<HTMLElement>("[data-magnetic]").forEach((el) => {
          const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" });
          const yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });
          const move = (e: MouseEvent) => {
            const r = el.getBoundingClientRect();
            xTo((e.clientX - (r.left + r.width / 2)) * 0.22);
            yTo((e.clientY - (r.top + r.height / 2)) * 0.22);
          };
          const leave = () => {
            xTo(0);
            yTo(0);
          };
          el.addEventListener("mousemove", move);
          el.addEventListener("mouseleave", leave);
          cleanups.push(() => {
            el.removeEventListener("mousemove", move);
            el.removeEventListener("mouseleave", leave);
          });
        });
      }

      // Refresh after layout settles (images/fonts)
      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);
      const t = window.setTimeout(refresh, 600);

      return () => {
        cleanups.forEach((fn) => fn());
        window.removeEventListener("load", refresh);
        window.clearTimeout(t);
      };
    });

    // ---------- Anchor link interceptor ----------
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
            scrollToTarget(targetEl as HTMLElement);
            if (window.history.pushState) window.history.pushState(null, "", hash);
          }
        } catch {
          // fallback to default browser behaviour
        }
      }
    };
    document.addEventListener("click", handleAnchorClick, { capture: true });

    // Initial hash on load
    let hashTimer: number | undefined;
    if (window.location.hash) {
      hashTimer = window.setTimeout(() => {
        try {
          const targetEl = document.querySelector(window.location.hash);
          if (targetEl) scrollToTarget(targetEl as HTMLElement);
        } catch {
          // safe fallback
        }
      }, 350);
    }

    return () => {
      if (hashTimer) window.clearTimeout(hashTimer);
      document.removeEventListener("click", handleAnchorClick, { capture: true });
      window.removeEventListener("scroll", onScrollProgress);
      mm.revert();
      if (tickerFn) gsap.ticker.remove(tickerFn);
      lenis?.destroy();
      (window as any).__lenis = null;
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[200] h-[2px] w-full"
    >
      <div
        ref={progressRef}
        className="h-full w-full origin-left bg-gradient-to-r from-[#FF4A1C] via-[#FF7A45] to-[#E8E4D9]"
        style={{ transform: "scaleX(0)", willChange: "transform" }}
      />
    </div>
  );
}
