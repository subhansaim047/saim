"use client";
import { useEffect, useLayoutEffect, type RefObject } from "react";
import { gsap } from "gsap";

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Minimal scoped gsap.context() hook. The callback may return a cleanup fn.
 * All animations created inside are reverted on unmount.
 */
export function useGSAP(
  callback: () => void | (() => void),
  scope: RefObject<HTMLElement | null>,
  deps: unknown[] = []
) {
  useIsoLayoutEffect(() => {
    let cleanup: void | (() => void);
    const ctx = gsap.context(() => {
      cleanup = callback();
    }, scope as RefObject<HTMLElement>);
    return () => {
      if (typeof cleanup === "function") cleanup();
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
