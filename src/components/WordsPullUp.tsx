import { useRef, type CSSProperties } from "react";
import { motion, useInView } from "framer-motion";

interface WordsPullUpProps {
  text: string;
  className?: string;
  delay?: number;
  showAsterisk?: boolean;
  style?: CSSProperties;
}

export const WordsPullUp = ({
  text,
  className = "",
  delay = 0,
  showAsterisk = false,
  style,
}: WordsPullUpProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const words = text.split(" ");

  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
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
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{
                duration: 0.6,
                delay: delay + i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
              {showAsterisk && isLastWord && (
                <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em] leading-none select-none font-sans">
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
