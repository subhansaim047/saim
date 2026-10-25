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
        primary: '#DEDBC8',
        vermilion: {
          DEFAULT: '#FF4A1C',
          hover: '#FF5F36',
          glow: 'rgba(255, 74, 28, 0.25)',
        },
        surface: {
          deep: '#0A0A0A',
          card: '#121212',
          elevated: '#181818',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        landing: {
          surface: "rgba(255, 255, 255, 0.10)",
          "surface-hover": "rgba(255, 255, 255, 0.16)",
          border: "rgba(255, 255, 255, 0.10)",
          "border-strong": "rgba(255, 255, 255, 0.20)",
          text: "rgba(255, 255, 255, 0.80)",
          "text-muted": "rgba(255, 255, 255, 0.60)",
        },
      },
      borderRadius: {
        'squircle-lg': '2rem',
        'squircle-xl': '2.5rem',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'serif'],
        sans: ['Inter', 'Almarai', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
