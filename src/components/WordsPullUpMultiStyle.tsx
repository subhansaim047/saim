import { useRef, type CSSProperties } from "react";
import { motion, useInView } from "framer-motion";

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
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  let globalWordIndex = 0;
  const wordList: { word: string; className: string; globalIndex: number }[] = [];

  segments.forEach((segment) => {
    const words = segment.text.split(" ");
    words.forEach((word) => {
      if (word.length > 0) {
        wordList.push({
          word,
          className: segment.className || "",
          globalIndex: globalWordIndex++,
        });
      }
    });
  });

  return (
    <div
      ref={ref}
      className={`inline-flex flex-wrap justify-center gap-x-[0.25em] gap-y-[0.1em] ${containerClassName}`}
      style={style}
    >
      {wordList.map(({ word, className, globalIndex }) => (
        <span key={globalIndex} className="inline-block overflow-hidden py-1">
          <motion.span
            className={`inline-block ${className}`}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{
              duration: 0.6,
              delay: delay + globalIndex * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </div>
  );
};
