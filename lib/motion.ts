import type { Variants } from "framer-motion";

/**
 * Centralised Framer Motion variants so every reveal, stagger and hover
 * feels consistent across the site. Subtle, fast, premium — not bouncy.
 */

// Premium easing curve (approx. easeOutExpo)
export const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const fadeRise: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease } },
};

// Parent container that staggers its children on enter.
export const staggerContainer = (stagger = 0.09, delay = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

// Child item paired with staggerContainer.
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
};

// Shared viewport config for whileInView reveals.
export const viewportOnce = { once: true, margin: "0px 0px -12% 0px" } as const;
