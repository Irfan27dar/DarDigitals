"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/content/testimonials";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

/**
 * Compact square grid where the quote is revealed on hover / focus. Each tile
 * is keyboard-focusable so the reveal is accessible without a pointer.
 */
export default function TestimonialGrid() {
  return (
    <motion.ul
      variants={staggerContainer(0.07)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
    >
      {testimonials.map((t) => (
        <motion.li
          key={t.name}
          variants={staggerItem}
          tabIndex={0}
          className="group relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-midnight-800 outline-none"
        >
          {/* Portrait placeholder — monogram initials on a graded field */}
          <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_30%_20%,#241f48_0%,#0f1024_65%)]" />
          <div className="grain absolute inset-0 opacity-[0.05] mix-blend-overlay" />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-3 transition-opacity duration-500 group-hover:opacity-0 group-focus:opacity-0">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] font-display text-sm font-bold text-bone">
              {t.initials}
            </span>
            <span className="mt-3 text-center text-xs font-semibold text-bone">
              {t.name}
            </span>
            <span className="mt-0.5 text-center text-[10px] leading-tight text-slate">
              {t.role}
            </span>
          </div>

          {/* Quote reveal */}
          <div className="absolute inset-0 flex flex-col justify-between bg-signal/95 p-3.5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus:opacity-100">
            <Quote size={15} className="shrink-0 text-white/80" />
            <p className="text-[11px] font-medium leading-snug text-white">
              “{t.quote}”
            </p>
            <div className="shrink-0">
              <p className="text-[11px] font-semibold text-white">{t.name}</p>
              <p className="text-[10px] leading-tight text-white/80">{t.role}</p>
            </div>
          </div>
        </motion.li>
      ))}
    </motion.ul>
  );
}
