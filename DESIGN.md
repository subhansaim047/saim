# Saim Dev Studio — Design System & Visual Specification (DESIGN.md)

> Mode: **Persuade & Experience**  
> Aesthetic Tone: **Dark Architectural Luxury / High-Performance Precision**  
> Philosophy: Anti-Slop, Zero AI Cliches, Tactile Bento Depth, Sub-400ms Kinetic Performance.

---

## 1. Color System & Tokens

### Dark Mode (Primary Palette)
- **Ground / Canvas (Primary):** `#09090b` (Deep Zinc Carbon)
- **Surface Elevation 1 (Card / Bento):** `#111113`
- **Surface Elevation 2 (Card Hover / Inset):** `#18181b`
- **Surface Elevation 3 (Floating Nav / Modal):** `rgba(17, 17, 19, 0.85)` with `backdrop-filter: blur(16px)`
- **Hairline Borders:** `rgba(255, 255, 255, 0.08)` (Active hover: `rgba(181, 249, 0, 0.35)`)
- **Accent Brand Primary:** `#b5f900` (Electric Hyper-Lime — high contrast, authoritative, energetic)
- **Accent Brand Hover:** `#9de000`
- **Accent Brand Subtle Background:** `rgba(181, 249, 0, 0.08)`
- **Text Primary (Headlines):** `#fafafa` (Zinc 50)
- **Text Secondary (Body):** `#a1a1aa` (Zinc 400)
- **Text Muted (Meta/Footnotes):** `#71717a` (Zinc 500)
- **Success / Live Indicator:** `#10b981` (Emerald 500)

### Light Mode Complement (Accessibility / Inverted Surfaces)
- **Ground (Light):** `#fbfbfa`
- **Surface 1:** `#ffffff`
- **Surface 2:** `#f4f4f5`
- **Hairline Borders (Light):** `rgba(0, 0, 0, 0.08)`
- **Text Primary (Light):** `#09090b`
- **Text Secondary (Light):** `#52525b`
- **Accent (Light):** `#22c55e` / `#65a30d`

---

## 2. Typography & Font Pairing

Loaded via `next/font/google`:
1. **Primary Headline Font:** `Syne` / `Cabinet Grotesk` (Weight: 700 / 800) — Bold, geometric, authoritative architectural grotesque with sharp angled cuts.
2. **Body & Interface Font:** `Inter` / `Plus Jakarta Sans` (Weight: 400 / 500 / 600) — Ultra-legible tabular figures, crisp optical kerning, flawless rendering down to 11px.
3. **Monospace / Metric Accents:** `JetBrains Mono` / `Geist Mono` — Used for speed metrics (`<380ms`), price tags (`$1,900`), and UK registration coordinates.

### Type Scale
- **Display 1 (Hero Title):** `clamp(2.75rem, 6vw, 5.25rem)` / Line-height: `1.04` / Letter-spacing: `-0.04em`
- **Headline 1 (Section Titles):** `clamp(2rem, 4vw, 3.25rem)` / Line-height: `1.1` / Letter-spacing: `-0.03em`
- **Headline 2 (Card Titles):** `clamp(1.25rem, 2.5vw, 1.75rem)` / Line-height: `1.25` / Letter-spacing: `-0.02em`
- **Body Large:** `1.125rem (18px)` / Line-height: `1.6` / Letter-spacing: `-0.01em`
- **Body Regular:** `1rem (16px)` / Line-height: `1.6`
- **Caption / Metric:** `0.8125rem (13px)` / Line-height: `1.4` / Letter-spacing: `0.05em` uppercase

---

## 3. Spatial Rhythm & Grid System

- **Container Max Width:** `1280px` (`max-w-7xl`), centered with `px-4 sm:px-6 lg:px-8`.
- **Vertical Spacing:**
  - Section-to-section: `clamp(5rem, 10vw, 8.5rem)` (`py-20 lg:py-32`)
  - Internal card gap: `1rem` to `1.5rem` (`gap-4 md:gap-6`)
- **Corner Radii:**
  - Bento Cards: `1.25rem (20px)`
  - Buttons / Badges: `9999px` (Pill) or `0.75rem (12px)` (Tactile Box)
  - Modals / Dropdowns: `1rem (16px)`

---

## 4. Depth, Lighting & Shadows

- **Subtle Ambient Depth:** `box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.07), 0 20px 40px -15px rgba(0, 0, 0, 0.7)`
- **Card Hover Elevation:**
  - `transform: translateY(-2px)`
  - `box-shadow: 0 0 0 1px rgba(181, 249, 0, 0.25), 0 25px 50px -12px rgba(181, 249, 0, 0.08)`
- **Atmospheric Glow:** Radial gradient spotlight pinned behind hero and flagship demo showcases:
  `radial-gradient(circle at 50% 0%, rgba(181, 249, 0, 0.08), transparent 70%)`

---

## 5. Motion Tokens & Physics

Powered by **Lenis**, **GSAP ScrollTrigger**, and **Motion (Framer Motion)**:
- **Smooth Scroll (Lenis):** `duration: 1.1`, `easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))`.
- **Instant Micro-interaction (Hover/Tap):** `150ms` ease-out (`cubic-bezier(0.16, 1, 0.3, 1)`).
- **Card Entrance / Reveal:** `500ms` spring (`stiffness: 120, damping: 20`).
- **Scroll Pin & Parallax:** GSAP ScrollTrigger pinned horizontal demo roll & scrubbed narrative comparison.
- **Magnetic Buttons:** Tracks pointer position within 40px bounding box with spring dampening `0.3`.
- **Prefers-Reduced-Motion Guard:** Any user with `prefers-reduced-motion: reduce` gets instant opacity transitions (`duration: 0.01s`), zero parallax, and static WebGL fallback.

---

## 6. Iconography & Emblems

- Strict geometric SVG line weights (`1.5px` or `2px`).
- Consistent viewBox `0 0 24 24`.
- Never use generic low-effort clipart or sparkles.
- Every service, tool, and feature has a bespoke SVG symbol tailored to engineering, food safety, or high-speed web architecture.
