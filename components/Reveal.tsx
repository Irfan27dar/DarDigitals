"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeRise, viewportOnce, ease } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** distance to travel on the y-axis before settling */
  y?: number;
  as?: "div" | "section" | "li" | "span";
};

/**
 * Scroll-triggered fade + rise wrapper. Reduced-motion users get an
 * instant, static render because Framer Motion honours the variants but
 * our global CSS collapses transition durations to ~0.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  as = "div",
}: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease, delay },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}

export { fadeRise };
