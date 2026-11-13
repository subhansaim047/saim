"use client";
import { useEffect, useRef, type CSSProperties } from "react";
import { gsap } from "gsap";

export type TextSegment = {
  text: string;
  className?: string;
};

interface WordsPullUpMultiStyleProps {
  segments: TextSegment[];
  containerClassName?: string;
  delay?: number;
  style?: CSSProperties;
}

export const WordsPullUpMultiStyle = ({
  segments,
  containerClassName = "",
  delay = 0,
  style,
}: WordsPullUpMultiStyleProps) => {
  const ref = useRef<HTMLDivElement>(null);

  let globalWordIndex = 0;
  const wordList: { word: string; className: string; globalIndex: number }[] = [];

  segments.forEach((segment) => {
    segment.text.split(" ").forEach((word) => {
      if (word.length > 0) {
        wordList.push({
          word,
          className: segment.className || "",
          globalIndex: globalWordIndex++,
        });
      }
    });
  });

  const fullText = segments.map((s) => s.text).join(" ");

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = container.querySelectorAll<HTMLElement>("[data-word]");
    if (!targets.length || prefersReducedMotion) return;

    let done = false;
    const rect = container.getBoundingClientRect();
    if (rect.top <= window.innerHeight + 120) {
      gsap.set(targets, { yPercent: 0, rotateX: 0, opacity: 1, clearProps: "transform,opacity" });
      return;
    }

    gsap.set(targets, {
      yPercent: 75,
      rotateX: -24,
      opacity: 0,
      transformOrigin: "50% 100%",
    });

    const play = (instant = false) => {
      if (done) return;
      done = true;
      if (instant) {
        gsap.set(targets, { yPercent: 0, rotateX: 0, opacity: 1, clearProps: "transform,opacity" });
        return;
      }
      gsap.to(targets, {
        yPercent: 0,
        rotateX: 0,
        opacity: 1,
        duration: 0.48,
        delay,
        ease: "power3.out",
        stagger: 0.014,
        overwrite: "auto",
        clearProps: "transform,opacity",
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          observer.disconnect();
          play(false);
        }
      },
      { rootMargin: "140px 0px 90px 0px", threshold: 0.01 }
    );
    observer.observe(container);

    const onScroll = () => {
      if (done) return;
      const r = container.getBoundingClientRect();
      if (r.bottom < -40) {
        observer.disconnect();
        play(true);
      } else if (r.top <= window.innerHeight + 140) {
        observer.disconnect();
        play(false);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    const lenis = (window as unknown as {
      __lenis?: { on?: (ev: string, fn: () => void) => void; off?: (ev: string, fn: () => void) => void };
    }).__lenis;
    lenis?.on?.("scroll", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      lenis?.off?.("scroll", onScroll);
      if (!done) gsap.set(targets, { yPercent: 0, rotateX: 0, opacity: 1, clearProps: "transform,opacity" });
    };
  }, [fullText, delay]);

  return (
    <div ref={ref} className={`relative ${containerClassName}`} style={style}>
      {/* Screen reader accessible text: single clean string */}
      <span className="sr-only">{fullText}</span>

      <span
        aria-hidden="true"
        className="inline-flex flex-wrap justify-center gap-x-[0.1em] gap-y-[0.05em]"
        style={{ perspective: "800px" }}
      >
        {wordList.map(({ word, className, globalIndex }) => (
          <span key={globalIndex} className="inline-block overflow-hidden pr-[0.15em] py-[0.12em]">
            <span data-word className={`inline-block will-change-transform ${className}`}>
              {word}
            </span>
            {" "}
          </span>
        ))}
      </span>
    </div>
  );
};
