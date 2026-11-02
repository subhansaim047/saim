# scripts/optimize_scroll_canvas.py

with open('src/components/ScrollCanvasBackground.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

old_timer = """    // Schedule progressive streaming after first paint (150ms delay)
    // This allows the browser tab to finish its load event in < 0.5s!
    const backgroundTimer = setTimeout(() => {
      if (isDisposed) return;

      // Phase A: Next 6 immediate frames for smooth initial scroll
      enqueue([1, 2, 3, 4, 5, 6]);

      // Phase B: Keyframe milestones (every 3rd frame) across the whole timeline
      const keyframes: number[] = [];
      for (let i = 9; i < TOTAL_FRAMES; i += 3) {
        keyframes.push(i);
      }
      enqueue(keyframes);

      // Phase C: Intermediate filler frames in idle background
      const remaining: number[] = [];
      for (let i = 0; i < TOTAL_FRAMES; i++) {
        if (!keyframes.includes(i) && i > 6) {
          remaining.push(i);
        }
      }
      enqueue(remaining);
    }, 150);"""

new_timer = """    // Mobile & Reduced Motion Check: On mobile screens (< 768px), keep frame 0 static
    // and skip loading 89 extra frames over cellular networks to protect Core Web Vitals (LCP < 2.5s)
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    let backgroundTimer: any = null;
    if (!isMobile && !prefersReducedMotion) {
      // On desktop, schedule progressive streaming only after idle (2.5s delay)
      const scheduleStreaming = () => {
        if (isDisposed) return;

        // Phase A: Next 6 immediate frames for smooth initial scroll
        enqueue([1, 2, 3, 4, 5, 6]);

        // Phase B: Keyframe milestones (every 3rd frame) across the whole timeline
        const keyframes: number[] = [];
        for (let i = 9; i < TOTAL_FRAMES; i += 3) {
          keyframes.push(i);
        }
        enqueue(keyframes);

        // Phase C: Intermediate filler frames in idle background
        const remaining: number[] = [];
        for (let i = 0; i < TOTAL_FRAMES; i++) {
          if (!keyframes.includes(i) && i > 6) {
            remaining.push(i);
          }
        }
        enqueue(remaining);
      };

      if (typeof (window as any).requestIdleCallback === "function") {
        (window as any).requestIdleCallback(scheduleStreaming, { timeout: 3000 });
      } else {
        backgroundTimer = setTimeout(scheduleStreaming, 2500);
      }
    }"""

code = code.replace(old_timer, new_timer)

with open('src/components/ScrollCanvasBackground.tsx', 'w', encoding='utf-8') as f:
    f.write(code)

print("ScrollCanvasBackground.tsx optimized for mobile.")
