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

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const scrollToTarget = (target: HTMLElement) => {
      if (lenis) {
        lenis.scrollTo(target, { offset: -85, duration: 1.15, easing: easeInOutCubic });
      } else {
        const top = target.getBoundingClientRect().top + window.scrollY - 85;
        window.scrollTo({ top, behavior: "smooth" });
      }
    };

    // ---------- Smooth scroll (motion allowed only) ----------
    if (!prefersReducedMotion) {
      ScrollTrigger.config({ ignoreMobileResize: true });
      lenis = new Lenis({
        lerp: 0.075,
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 0.95,
        touchMultiplier: 1.1,
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
      const cleanups: Array<() => void> = [];
      const revealed = new WeakSet<HTMLElement>();
      const trackedContainers = new Set<HTMLElement>();

      const getTargets = (node: HTMLElement): HTMLElement[] =>
        node.hasAttribute("data-gsap-stagger")
          ? (Array.from(node.children) as HTMLElement[])
          : [node];

      const revealNode = (node: HTMLElement, instant = false) => {
        if (revealed.has(node)) return;
        revealed.add(node);
        trackedContainers.delete(node);
        const targets = getTargets(node);
        if (!targets.length) return;
        if (instant) {
          gsap.set(targets, { y: 0, opacity: 1, clearProps: "transform,opacity" });
          return;
        }
        gsap.to(targets, {
          y: 0,
          opacity: 1,
          duration: 0.3,
          ease: "power3.out",
          stagger: targets.length > 1 ? 0.03 : 0,
          overwrite: "auto",
          clearProps: "transform,opacity",
        });
      };

      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const node = entry.target as HTMLElement;
            revealObserver.unobserve(node);
            revealNode(node, false);
          });
        },
        { rootMargin: "280px 0px 200px 0px", threshold: 0.01 }
      );

      const sweepVisibleReveals = () => {
        const thresholdY = window.innerHeight + 280;
        trackedContainers.forEach((node) => {
          const rect = node.getBoundingClientRect();
          if (rect.height === 0 && rect.width === 0) return;
          if (rect.bottom < -40) {
            revealObserver.unobserve(node);
            revealNode(node, true);
          } else if (rect.top <= thresholdY) {
            revealObserver.unobserve(node);
            revealNode(node, false);
          }
        });
      };

      const registerReveals = (root: ParentNode = document) => {
        const thresholdY = window.innerHeight + 280;
        root.querySelectorAll<HTMLElement>("[data-gsap-reveal], [data-gsap-stagger]").forEach((node) => {
          if (revealed.has(node) || trackedContainers.has(node)) return;
          const targets = getTargets(node);
          if (!targets.length) return;
          const rect = node.getBoundingClientRect();
          if (rect.top <= thresholdY) {
            revealed.add(node);
            gsap.set(targets, { y: 0, opacity: 1, clearProps: "transform,opacity" });
            return;
          }
          trackedContainers.add(node);
          gsap.set(targets, { y: 24, opacity: 0 });
          revealObserver.observe(node);
        });
      };

      registerReveals(document);

      let refreshTimer: number | undefined;
      const scheduleRefresh = () => {
        sweepVisibleReveals();
        if (refreshTimer) window.clearTimeout(refreshTimer);
        refreshTimer = window.setTimeout(() => {
          registerReveals(document);
          sweepVisibleReveals();
          ScrollTrigger.refresh();
        }, 120);
      };

      const mutationObserver = new MutationObserver(() => {
        registerReveals(document);
        sweepVisibleReveals();
      });
      if (document.body) {
        mutationObserver.observe(document.body, { childList: true, subtree: true });
      }

      const resizeObserver = new ResizeObserver(scheduleRefresh);
      if (document.body) {
        resizeObserver.observe(document.body);
      }

      window.addEventListener("scroll", sweepVisibleReveals, { passive: true });
      if (lenis) {
        lenis.on("scroll", sweepVisibleReveals);
      }

      cleanups.push(() => {
        revealObserver.disconnect();
        mutationObserver.disconnect();
        resizeObserver.disconnect();
        window.removeEventListener("scroll", sweepVisibleReveals);
        if (lenis) lenis.off("scroll", sweepVisibleReveals);
        if (refreshTimer) window.clearTimeout(refreshTimer);
        trackedContainers.forEach((node) => revealNode(node, true));
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
      const refresh = () => {
        registerReveals(document);
        sweepVisibleReveals();
        ScrollTrigger.refresh();
      };
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
        className="h-full w-full origin-left bg-gradient-to-r from-[#2F6CE1] via-[#5B92F5] to-[#1D4ED8]"
        style={{ transform: "scaleX(0)", willChange: "transform" }}
      />
    </div>
  );
}
