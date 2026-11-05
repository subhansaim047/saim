/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E8E4D9',
        vermilion: {
          DEFAULT: '#FF4A1C',
          hover: '#FF6238',
          glow: 'rgba(255, 74, 28, 0.28)',
        },
        surface: {
          void: '#050505',
          deep: '#08080A',
          card: '#0E0E11',
          elevated: '#151519',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        landing: {
          surface: "rgba(255, 255, 255, 0.08)",
          "surface-hover": "rgba(255, 255, 255, 0.14)",
          border: "rgba(255, 255, 255, 0.09)",
          "border-strong": "rgba(255, 255, 255, 0.20)",
          text: "rgba(255, 255, 255, 0.85)",
          "text-muted": "rgba(255, 255, 255, 0.58)",
        },
      },
      borderRadius: {
        'squircle-lg': '2rem',
        'squircle-xl': '2.5rem',
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'var(--font-instrument)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'Plus Jakarta Sans', '-apple-system', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      transitionTimingFunction: {
        'spring-expo': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'spring-snappy': 'cubic-bezier(0.32, 0.72, 0, 1)',
      },
    },
  },
  plugins: [],
}
