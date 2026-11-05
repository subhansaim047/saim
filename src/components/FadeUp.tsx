"use client";
import { useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "./useGsap";

gsap.registerPlugin(ScrollTrigger);

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

export const FadeUp = ({
  children,
  delay = 0,
  y = 32,
  className = "",
}: FadeUpProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(ref.current, {
          y,
          opacity: 0,
          duration: 0.95,
          delay,
          ease: "power3.out",
          clearProps: "transform,opacity",
          scrollTrigger: { trigger: ref.current, start: "top 90%", once: true },
        });
      });
      return () => mm.revert();
    },
    ref,
    [delay, y]
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};
