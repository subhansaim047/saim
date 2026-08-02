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

type SecondaryButtonProps<T extends "a" | "button" = "a"> = {
  as?: T;
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<T>;

export const SecondaryButton = <T extends "a" | "button" = "a">({
  as,
  size = "sm",
  children,
  className = "",
  ...props
}: SecondaryButtonProps<T>) => {
  const Component = (as || "a") as any;

  const sizeClasses = {
    sm: "h-8 px-4 text-sm font-medium",
    md: "h-10 px-6 text-sm font-medium",
    lg: "h-12 px-8 text-base font-medium",
  }[size];

  return (
    <Component
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-landing-surface hover:bg-landing-surface-hover border border-landing-border text-foreground backdrop-blur-[2.5px] font-medium leading-none transition-colors group relative overflow-hidden cursor-pointer",
        sizeClasses,
        className
      )}
      {...props}
    >
      <AnimatedText>{children}</AnimatedText>
    </Component>
  );
};
