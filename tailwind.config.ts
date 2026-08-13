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
        midnight: "#161826", // Midnight Indigo — base / ink / dark sections
        signal: "#2E6BFF", // Signal Blue — primary accent
        gold: "#E3B04B", // Desert Gold — luxury accent / signal dot
        bone: "#F4F2ED", // Bone White — light canvas
        slate: "#6B7186", // Slate Grey — neutral / muted text
        // Supporting shades derived from the base indigo
        "midnight-800": "#1E2133",
        "midnight-700": "#262A40",
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
        glow: "0 0 80px -10px rgba(46, 107, 255, 0.55)",
        "glow-sm": "0 0 40px -8px rgba(46, 107, 255, 0.45)",
        card: "0 20px 50px -20px rgba(0, 0, 0, 0.5)",
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
