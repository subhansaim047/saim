"use client";

import React from "react";
import Link from "next/link";
import { SoapBubbleButton, SoapBubbleSurface } from "./reactdrops/soap-bubble";

export type ReactDropVariant = "primary" | "glass" | "dark" | "pill";

export interface ReactDropButtonProps {
  children: React.ReactNode;
  variant?: ReactDropVariant;
  active?: boolean;
  href?: string;
  external?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  innerClassName?: string;
  radius?: number;
  ariaLabel?: string;
  ariaPressed?: boolean;
  id?: string;
}

export const LOGO_BUBBLE_PALETTE = {
  soapPalette: "custom" as const,
  soapPaletteRed: "#1E4EC4",
  soapPaletteGold: "#DBEAFE",
  soapPaletteGreen: "#EFF5FF",
  soapPaletteCyan: "#5B92F5",
  soapPaletteBlue: "#2F6CE1",
  soapPaletteViolet: "#1D4ED8",
};

export const DARK_BUBBLE_PALETTE = {
  soapPalette: "custom" as const,
  soapPaletteRed: "#0B132B",
  soapPaletteGold: "#5B92F5",
  soapPaletteGreen: "#1E4EC4",
  soapPaletteCyan: "#2F6CE1",
  soapPaletteBlue: "#020612",
  soapPaletteViolet: "#1D4ED8",
};

export const LOGO_MATERIAL_DEFAULTS = {
  ...LOGO_BUBBLE_PALETTE,
  surface: "bubble-liquid" as const,
  environment: "studio" as const,
  liquidLens: false,
  iridescence: 0.34,
  oilOpacity: 0.2,
  oilEdge: 22,
  clearCenter: 0.86,
  filmScale: 5,
  bevel: 10,
  tint: "rgba(255, 255, 255, 0.86)",
  soapColor: "rgba(47, 108, 225, 0.14)",
  soapShadeColor: "rgba(29, 78, 216, 0.20)",
  soapHighlightColor: "rgba(255, 255, 255, 0.72)",
  wobble: 0.32,
};

const VARIANT_CLASSES: Record<ReactDropVariant, string> = {
  primary: "saim-reactdrop-primary",
  glass: "saim-reactdrop-glass",
  dark: "saim-reactdrop-dark",
  pill: "saim-reactdrop-glass",
};

function getMaterialProps(variant: ReactDropVariant, active?: boolean, radius = 9999) {
  const isBlue = variant === "primary" || active;
  if (isBlue) {
    return {
      ...LOGO_BUBBLE_PALETTE,
      surface: "bubble" as const,
      interactive: true,
      radius,
      tint: "rgba(47, 108, 225, 0.24)",
      soapColor: "rgba(91, 146, 245, 0.28)",
      soapShadeColor: "rgba(29, 78, 216, 0.42)",
      soapHighlightColor: "rgba(255, 255, 255, 0.68)",
      specular: 0.34,
      rimWidth: 0.14,
      iridescence: 0.32,
      oilOpacity: 0.2,
      oilEdge: 22,
      wobble: 0.34,
      clearCenter: 0.84,
    };
  }
  if (variant === "dark") {
    return {
      ...DARK_BUBBLE_PALETTE,
      surface: "bubble" as const,
      interactive: true,
      radius,
      tint: "rgba(2, 6, 18, 0.78)",
      soapColor: "rgba(47, 108, 225, 0.22)",
      soapShadeColor: "rgba(2, 6, 18, 0.86)",
      soapHighlightColor: "rgba(147, 197, 253, 0.52)",
      specular: 0.32,
      rimWidth: 0.14,
      iridescence: 0.28,
      oilOpacity: 0.18,
      oilEdge: 22,
      wobble: 0.3,
      clearCenter: 0.84,
    };
  }
  return {
    ...LOGO_BUBBLE_PALETTE,
    surface: "bubble" as const,
    interactive: true,
    radius,
    tint: "rgba(255, 255, 255, 0.9)",
    soapColor: "rgba(47, 108, 225, 0.14)",
    soapShadeColor: "rgba(47, 108, 225, 0.18)",
    soapHighlightColor: "rgba(255, 255, 255, 0.85)",
    specular: 0.28,
    rimWidth: 0.12,
    iridescence: 0.26,
    oilOpacity: 0.16,
    oilEdge: 24,
    wobble: 0.28,
    clearCenter: 0.88,
  };
}

/**
 * Unified ReactDrops SoapBubble button & interactive link primitive for homepage CTAs,
 * selector pills, card actions, and form controls using Logo Blue (#2F6CE1), Obsidian (#020612), and White.
 */
export const ReactDropButton: React.FC<ReactDropButtonProps> = ({
  children,
  variant = "primary",
  active = false,
  href,
  external,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  innerClassName = "",
  radius = 9999,
  ariaLabel,
  ariaPressed,
  id,
}) => {
  const effectiveClass = active ? VARIANT_CLASSES.primary : VARIANT_CLASSES[variant];
  const materialProps = getMaterialProps(variant, active, radius);
  const basePillShape =
    "relative inline-flex items-center justify-center rounded-full font-semibold tracking-tight transition-all duration-200 select-none";

  if (href) {
    const isExternalUrl =
      external ?? (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:"));

    return (
      <SoapBubbleSurface
        as="div"
        {...materialProps}
        className={`${basePillShape} ${effectiveClass} p-0 overflow-hidden ${className}`}
      >
        {isExternalUrl ? (
          <a
            id={id}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            onClick={onClick as React.MouseEventHandler<HTMLAnchorElement> | undefined}
            aria-label={ariaLabel}
            className={`relative z-[2] pointer-events-auto inline-flex items-center justify-center w-full h-full rounded-[inherit] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6CE1]/50 ${innerClassName}`}
          >
            {children}
          </a>
        ) : (
          <Link
            id={id}
            href={href}
            onClick={onClick as React.MouseEventHandler<HTMLAnchorElement> | undefined}
            aria-label={ariaLabel}
            className={`relative z-[2] pointer-events-auto inline-flex items-center justify-center w-full h-full rounded-[inherit] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6CE1]/50 ${innerClassName}`}
          >
            {children}
          </Link>
        )}
      </SoapBubbleSurface>
    );
  }

  return (
    <SoapBubbleButton
      id={id}
      type={type}
      disabled={disabled}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement> | undefined}
      aria-label={ariaLabel}
      aria-pressed={ariaPressed}
      {...materialProps}
      className={`${basePillShape} ${effectiveClass} saim-bubble-btn disabled:opacity-55 disabled:cursor-not-allowed ${className}`}
    >
      <span className={`inline-flex items-center justify-center gap-2 ${innerClassName}`}>
        {children}
      </span>
    </SoapBubbleButton>
  );
};
