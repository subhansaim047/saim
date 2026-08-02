import type { CSSProperties } from "react";

interface MIconProps {
  name: string;
  size?: number;
  fill?: number;
  weight?: number;
  grade?: number;
  opticalSize?: number;
  className?: string;
  style?: CSSProperties;
}

export const MIcon = ({
  name,
  size = 24,
  fill = 0,
  weight = 400,
  grade = 0,
  opticalSize = 24,
  className = "",
  style,
}: MIconProps) => {
  return (
    <span
      className={`material-symbols-outlined select-none inline-block ${className}`}
      style={{
        fontSize: `${size}px`,
        width: `${size}px`,
        height: `${size}px`,
        lineHeight: 1,
        fontVariationSettings: `'FILL' ${fill}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${opticalSize}`,
        ...style,
      }}
    >
      {name}
    </span>
  );
};
