"use client";

import { useEffect, useRef } from "react";

interface LazyAutoplayVideoProps {
  poster: string;
  sources: { src: string; type: string }[];
  className?: string;
  /** How far before the viewport the video should start loading. */
  rootMargin?: string;
}

/**
 * Muted looping autoplay video that downloads NOTHING until it is about to
 * scroll into view. The poster is shown immediately; the <source> elements are
 * attached only once the video is near the viewport, which keeps multi-megabyte
 * MP4 files out of the initial page payload.
 */
export const LazyAutoplayVideo = ({
  poster,
  sources,
  className,
  rootMargin = "300px 0px",
}: LazyAutoplayVideoProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    el.muted = true;
    el.defaultMuted = true;

    let loaded = false;
    const loadAndPlay = () => {
      if (loaded) return;
      loaded = true;
      for (const s of sources) {
        const sourceEl = document.createElement("source");
        sourceEl.src = s.src;
        sourceEl.type = s.type;
        el.appendChild(sourceEl);
      }
      el.load();
      el.play().catch(() => {});
    };

    if (typeof IntersectionObserver === "undefined") {
      loadAndPlay();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          loadAndPlay();
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(el);

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      preload="none"
      poster={poster}
      className={className}
    />
  );
};
