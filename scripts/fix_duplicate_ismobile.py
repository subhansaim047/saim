path = "src/components/ScrollCanvasBackground.tsx"
with open(path, "r", encoding="utf-8") as f:
    text = f.read()

target = """    // Mobile & Reduced Motion Check: On mobile screens (< 768px), keep frame 0 static
    // and skip loading 89 extra frames over cellular networks to protect Core Web Vitals (LCP < 2.5s)
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;"""

norm_text = text.replace("\r\n", "\n")
norm_target = target.replace("\r\n", "\n")

if norm_target in norm_text:
    norm_text = norm_text.replace(norm_target, "", 1)
    with open(path, "w", encoding="utf-8") as f:
        f.write(norm_text)
    print("Removed duplicate isMobile successfully!")
else:
    print("Target not found!")
