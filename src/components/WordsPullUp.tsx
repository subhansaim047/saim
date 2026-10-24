"use client";
import { useRef, type CSSProperties } from "react";
import { motion, useInView } from "framer-motion";

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
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const words = text.split(" ");

  return (
    <Component ref={ref as any} className={`relative ${className}`} style={style}>
      {/* Screen reader text: clean single string with proper pronunciation and no double-reading */}
      <span className="sr-only">{text}</span>

      {/* Visual animation aria-hidden="true" with explicit whitespace between spans */}
      <span aria-hidden="true" className="inline-flex flex-wrap">
        {words.map((word, i) => (
          <span
            key={i}
            className="inline-block overflow-hidden mr-[0.25em] last:mr-0 relative py-1"
          >
            <motion.span
              className="inline-block relative"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{
                duration: 0.6,
                delay: delay + i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
            </motion.span>
            {" "}
          </span>
        ))}
      </span>
    </Component>
  );
};
