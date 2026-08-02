import React from "react";
import { motion } from "framer-motion";

interface WordsPullUpProps {
  text: string;
  className?: string;
  delay?: number;
  showAsterisk?: boolean;
  style?: React.CSSProperties;
}

export const WordsPullUp: React.FC<WordsPullUpProps> = ({
  text,
  className = "",
  delay = 0,
  showAsterisk = false,
  style,
}) => {
  const words = text.split(" ");

  return (
    <div className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((word, i) => {
        const isLastWord = i === words.length - 1;
        return (
          <span
            key={i}
            className={`inline-block overflow-hidden mr-[0.2em] last:mr-0 relative py-1 ${
              showAsterisk && isLastWord ? "pr-[0.35em]" : ""
            }`}
          >
            <motion.span
              className="inline-block relative"
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.65,
                delay: delay + i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
              {showAsterisk && isLastWord && (
                <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em] leading-none select-none font-sans text-emerald-400">
                  *
                </span>
              )}
            </motion.span>
          </span>
        );
      })}
    </div>
  );
};
