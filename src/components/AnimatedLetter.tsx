import { motion, useTransform, type MotionValue } from "framer-motion";

interface AnimatedLetterProps {
  char: string;
  index: number;
  totalChars: number;
  progress: MotionValue<number>;
}

export const AnimatedLetter = ({
  char,
  index,
  totalChars,
  progress,
}: AnimatedLetterProps) => {
  const charProgress = totalChars > 0 ? index / totalChars : 0;
  const start = Math.max(0, charProgress - 0.1);
  const end = Math.min(1, charProgress + 0.05);

  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <motion.span style={{ opacity }} className="inline">
      {char}
    </motion.span>
  );
};
