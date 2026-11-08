"use client";

import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  delay?: number;
  stagger?: number;
  highlightWords?: string[];
  highlightClassName?: string;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className = "",
  as: Component = "h2",
  delay = 0.1,
  stagger = 0.035,
  highlightWords = [],
  highlightClassName = "text-[#b5f900]",
}) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setShouldAnimate(!reducedMotion);
  }, []);

  const words = text.split(" ");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 18,
      transition: { type: "spring", damping: 18, stiffness: 100 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 18,
        stiffness: 100,
        duration: 0.6,
      },
    },
  };

  if (!shouldAnimate) {
    return <Component className={className}>{text}</Component>;
  }

  return (
    <Component className={`${className} inline-flex flex-wrap gap-x-[0.28em] gap-y-1`}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="inline-flex flex-wrap gap-x-[0.28em] gap-y-1"
      >
        {words.map((word, idx) => {
          const isHighlighted = highlightWords.some(
            (hw) => word.toLowerCase().includes(hw.toLowerCase())
          );

          return (
            <motion.span
              key={`${word}-${idx}`}
              variants={wordVariants}
              className={`inline-block ${isHighlighted ? highlightClassName : ""}`}
            >
              {word}
            </motion.span>
          );
        })}
      </motion.span>
    </Component>
  );
};
