'use client';

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

interface ViewportMountProps {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
  minHeight?: number | string;
  className?: string;
  style?: CSSProperties;
  eager?: boolean;
  unmountWhenFar?: boolean;
}

/**
 * Defers mounting of heavy interactive ReactDrops modules until the container
 * approaches the viewport, and optionally unmounts off-screen WebGL backdrops
 * to respect browser GPU context budgets while protecting initial hero LCP.
 */
export function ViewportMount({
  children,
  fallback = null,
  rootMargin = '450px 0px',
  minHeight,
  className = '',
  style,
  eager = false,
  unmountWhenFar = false,
}: ViewportMountProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(eager);

  useEffect(() => {
    if (!unmountWhenFar && mounted) return;
    const node = hostRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setMounted(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.some((entry) => entry.isIntersecting);
        if (visible) {
          setMounted(true);
          if (!unmountWhenFar) observer.disconnect();
        } else if (unmountWhenFar) {
          setMounted(false);
        }
      },
      { rootMargin, threshold: 0 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [mounted, rootMargin, unmountWhenFar]);

  return (
    <div
      ref={hostRef}
      className={className}
      style={{ minHeight, ...style }}
    >
      {mounted ? children : fallback}
    </div>
  );
}
