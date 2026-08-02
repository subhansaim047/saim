import type { ReactNode, ComponentPropsWithoutRef } from "react";
import { cn } from "../lib/utils";

const AnimatedText = ({ children }: { children: ReactNode }) => {
  return (
    <span className="relative inline-block overflow-hidden py-0.5">
      <span className="inline-block transition-transform duration-300 ease-out group-hover:-translate-y-full">
        {children}
      </span>
      <span
        aria-hidden
        className="absolute left-0 top-0 inline-block translate-y-full py-0.5 transition-transform duration-300 ease-out group-hover:translate-y-0"
      >
        {children}
      </span>
    </span>
  );
};

type PrimaryButtonProps<T extends "a" | "button" = "a"> = {
  as?: T;
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<T>;

export const PrimaryButton = <T extends "a" | "button" = "a">({
  as,
  size = "lg",
  children,
  className = "",
  ...props
}: PrimaryButtonProps<T>) => {
  const Component = (as || "a") as any;

  const sizeClasses = {
    sm: "h-8 px-5 text-xs font-medium",
    md: "h-10 px-7 text-xs font-medium",
    lg: "h-12 px-9 text-sm font-medium",
  }[size];

  return (
    <Component
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-black leading-none transition-colors group relative overflow-hidden cursor-pointer",
        sizeClasses,
        className
      )}
      {...props}
    >
      <AnimatedText>{children}</AnimatedText>
    </Component>
  );
};
