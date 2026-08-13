"use client";

import Link from "next/link";
import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";

type Variant = "primary" | "secondary" | "ghost";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  showArrow?: boolean;
};

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-300 focus-visible:outline-offset-4";

const variants: Record<Variant, string> = {
  primary:
    "bg-signal text-white shadow-glow-sm hover:bg-[#1f5cf0]",
  secondary:
    "border border-white/15 bg-white/[0.02] text-bone hover:border-white/30 hover:bg-white/[0.05]",
  ghost: "text-bone hover:text-white",
};

/**
 * Magnetic CTA button — the label subtly tracks the cursor on desktop.
 * Falls back to a static button when reduced-motion is set or on touch.
 */
export default function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
  showArrow = true,
}: CTAButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const reduced = usePrefersReducedMotion();

  function onMove(e: React.MouseEvent) {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setPos({ x: x * 0.25, y: y * 0.35 });
  }
  function reset() {
    setPos({ x: 0, y: 0 });
  }

  return (
    <motion.div
      style={{ display: "inline-block" }}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.4 }}
    >
      <Link
        ref={ref}
        href={href}
        onMouseMove={onMove}
        onMouseLeave={reset}
        className={`${base} ${variants[variant]} ${className}`}
      >
        <span>{children}</span>
        {showArrow && (
          <ArrowUpRight
            size={17}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        )}
      </Link>
    </motion.div>
  );
}
