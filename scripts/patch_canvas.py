import os

path = "src/components/ScrollCanvasBackground.tsx"
with open(path, "r", encoding="utf-8") as f:
    c = f.read()

target = """  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let isDisposed = false;

    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;"""

replacement = """  useEffect(() => {
    // Respect reduced motion preference and mobile viewports
    const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    // Mobile viewports (< 768px) and users with prefersReducedMotion use the instant static frame_000.webp
    // to achieve green mobile Core Web Vitals (zero CPU main thread blocking)
    if (isMobile || prefersReducedMotion) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let isDisposed = false;"""

c_norm = c.replace("\r\n", "\n")
target_norm = target.replace("\r\n", "\n")
replacement_norm = replacement.replace("\r\n", "\n")

if target_norm in c_norm:
    c_norm = c_norm.replace(target_norm, replacement_norm, 1)
    with open(path, "w", encoding="utf-8") as f:
        f.write(c_norm)
    print("ScrollCanvasBackground patched successfully!")
else:
    print("Target not found in ScrollCanvasBackground!")
