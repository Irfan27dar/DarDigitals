"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { process } from "@/content/process";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

/**
 * Stepped process timeline. A progress line fills as the section scrolls
 * through the viewport; each step reveals in a stagger. `light` adapts
 * colours for the bone-white section.
 */
export default function ProcessTimeline({ light = false }: { light?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 65%", "end 60%"],
  });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const track = light ? "bg-midnight/10" : "bg-white/10";
  const node = light
    ? "border-midnight/15 bg-white"
    : "border-white/12 bg-midnight-800";
  const title = light ? "text-midnight" : "text-bone";

  return (
    <div ref={ref} className="relative">
      {/* Desktop: horizontal track */}
      <div className="relative hidden lg:block">
        <div className={`absolute left-0 right-0 top-[26px] h-px ${track}`} />
        <motion.div
          style={{ width: lineWidth }}
          className="absolute left-0 top-[26px] h-px bg-gradient-to-r from-signal to-gold shadow-glow-sm"
        />
        <motion.ol
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative grid grid-cols-5 gap-6"
        >
          {process.map((step) => (
            <motion.li key={step.no} variants={staggerItem}>
              <span
                className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border font-display text-lg font-bold text-signal ${node}`}
              >
                {step.no}
                <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-gold shadow-[0_0_10px_1px_rgba(227,176,75,0.7)]" />
              </span>
              <h3
                className={`mt-6 font-display text-xl font-semibold uppercase tracking-wide ${title}`}
              >
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                {step.description}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </div>

      {/* Mobile / tablet: vertical track */}
      <div className="relative lg:hidden">
        <div className={`absolute bottom-0 left-[26px] top-0 w-px ${track}`} />
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-[26px] top-0 w-px bg-gradient-to-b from-signal to-gold"
        />
        <motion.ol
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative space-y-10"
        >
          {process.map((step) => (
            <motion.li
              key={step.no}
              variants={staggerItem}
              className="relative flex gap-6"
            >
              <span
                className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border font-display text-lg font-bold text-signal ${node}`}
              >
                {step.no}
                <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-gold" />
              </span>
              <div className="pt-1.5">
                <h3
                  className={`font-display text-xl font-semibold uppercase tracking-wide ${title}`}
                >
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  {step.description}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </div>
  );
}
