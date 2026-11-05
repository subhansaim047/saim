"use client";
import { useRef, type CSSProperties } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "./useGsap";

gsap.registerPlugin(ScrollTrigger);

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
          stagger: 0.05,
          scrollTrigger: { trigger: ref.current, start: "top 92%", once: true },
        });
      });
      return () => mm.revert();
    },
    ref,
    [fullText, delay]
  );

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
