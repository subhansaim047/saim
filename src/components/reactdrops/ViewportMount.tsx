'use client';

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

interface ViewportMountProps {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
  minHeight?: number | string;
  className?: string;
  style?: CSSProperties;
}

/**
 * Defers mounting of heavy interactive ReactDrops modules until the container
 * approaches the viewport, protecting initial payload bytes and hero LCP.
 */
export function ViewportMount({
  children,
  fallback = null,
  rootMargin = '450px 0px',
  minHeight,
  className = '',
  style,
}: ViewportMountProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (mounted) return;
    const node = hostRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setMounted(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setMounted(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [mounted, rootMargin]);

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
