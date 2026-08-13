"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/content/testimonials";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

/**
 * Portrait grid where the quote is revealed on hover / focus. Each tile is
 * keyboard-focusable so the reveal is accessible without a pointer.
 */
export default function TestimonialGrid() {
  return (
    <motion.ul
      variants={staggerContainer(0.08)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3"
    >
      {testimonials.map((t) => (
        <motion.li
          key={t.name}
          variants={staggerItem}
          tabIndex={0}
          className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-midnight-800 outline-none"
        >
          {/* Portrait placeholder — monogram initials on a graded field */}
          <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_30%_20%,#262a40_0%,#161826_65%)]" />
          <div className="grain absolute inset-0 opacity-[0.05] mix-blend-overlay" />

          <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0 group-focus:opacity-0">
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] font-display text-xl font-bold text-bone">
              {t.initials}
            </span>
            <span className="mt-4 px-4 text-center text-sm font-semibold text-bone">
              {t.name}
            </span>
            <span className="mt-1 px-4 text-center text-xs text-slate">
              {t.role}
            </span>
          </div>

          {/* Quote reveal */}
          <div className="absolute inset-0 flex flex-col justify-between bg-signal/95 p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus:opacity-100">
            <Quote size={22} className="text-white/80" />
            <p className="text-sm font-medium leading-snug text-white">
              “{t.quote}”
            </p>
            <div>
              <p className="text-sm font-semibold text-white">{t.name}</p>
              <p className="text-xs text-white/80">{t.role}</p>
            </div>
          </div>
        </motion.li>
      ))}
    </motion.ul>
  );
}
