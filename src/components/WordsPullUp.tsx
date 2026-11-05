"use client";
import { useRef, type CSSProperties } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "./useGsap";

gsap.registerPlugin(ScrollTrigger);

interface WordsPullUpProps {
  text: string;
  className?: string;
  delay?: number;
  showAsterisk?: boolean;
  style?: CSSProperties;
  as?: "div" | "h1" | "h2";
}

export const WordsPullUp = ({
  text,
  className = "",
  delay = 0,
  style,
  as: Component = "div",
}: WordsPullUpProps) => {
  const ref = useRef<HTMLElement>(null);
  const words = text.split(" ");

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const targets = ref.current?.querySelectorAll("[data-word]");
        if (!targets || !targets.length) return;
        gsap.from(targets, {
          yPercent: 115,
          rotateX: -35,
          opacity: 0,
          transformOrigin: "50% 100%",
          duration: 1,
          delay,
          ease: "power4.out",
          stagger: 0.06,
          scrollTrigger: { trigger: ref.current, start: "top 92%", once: true },
        });
      });
      return () => mm.revert();
    },
    ref,
    [text, delay]
  );

  return (
    <Component ref={ref as any} className={`relative ${className}`} style={style}>
      {/* Screen reader text: clean single string, no double-reading */}
      <span className="sr-only">{text}</span>

      <span aria-hidden="true" className="inline-flex flex-wrap" style={{ perspective: "800px" }}>
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden pr-[0.15em] mr-[0.1em] last:mr-0 relative py-[0.12em]">
            <span data-word className="inline-block relative will-change-transform">
              {word}
            </span>
            {" "}
          </span>
        ))}
      </span>
    </Component>
  );
};
