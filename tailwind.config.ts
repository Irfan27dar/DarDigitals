import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand tokens — mirror the CSS variables in globals.css
        midnight: "#0F1024", // Deep Indigo — base / ink / dark sections
        signal: "#3B6EFF", // Electric Blue — primary accent
        "signal-600": "#2C55E6", // deeper electric blue — hover/active
        iris: "#7C5CFF", // Iris Violet — vibrant secondary accent
        aqua: "#22D3EE", // Cyan — vibrant highlight
        magenta: "#FF4D9D", // Hot Pink — sparing hot accent
        gold: "#FBBF3C", // Signal Gold — the signal-dot / warm detail
        bone: "#F4F2ED", // Bone White — light canvas
        slate: "#6B7186", // Slate — neutral / muted text (readable on bone + indigo)
        // Supporting shades derived from the base indigo
        "midnight-800": "#191A38",
        "midnight-700": "#23244A",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Fluid, cinematic display sizes
        "display-sm": ["clamp(2.25rem, 6vw, 3.5rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(2.75rem, 8vw, 5rem)", { lineHeight: "0.98", letterSpacing: "-0.035em" }],
        "display-lg": ["clamp(3rem, 11vw, 8.5rem)", { lineHeight: "0.92", letterSpacing: "-0.04em" }],
      },
      maxWidth: {
        container: "80rem",
      },
      boxShadow: {
        glow: "0 0 90px -10px rgba(59, 110, 255, 0.6)",
        "glow-sm": "0 0 44px -8px rgba(59, 110, 255, 0.5)",
        "glow-iris": "0 0 70px -10px rgba(124, 92, 255, 0.55)",
        card: "0 22px 55px -22px rgba(0, 0, 0, 0.6)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to right, rgba(107,113,134,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(107,113,134,0.08) 1px, transparent 1px)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        marquee: "marquee var(--marquee-duration, 40s) linear infinite",
        "marquee-reverse": "marquee-reverse var(--marquee-duration, 40s) linear infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
