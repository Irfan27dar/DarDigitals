"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Play } from "lucide-react";
import Link from "next/link";
import { ease } from "@/lib/motion";
import { site } from "@/content/site";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";
import CTAButton from "./CTAButton";

const line1 = ["YOUR", "BRAND", "DESERVES"];
const line2 = ["BETTER", "DIGITAL."];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Eased parallax: glows drift down and content lifts as the hero scrolls away.
  const glowYRaw = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const glowY = useSpring(glowYRaw, { stiffness: 80, damping: 30, mass: 0.4 });
  const contentYRaw = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const contentY = useSpring(contentYRaw, { stiffness: 90, damping: 28, mass: 0.4 });
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-28"
    >
      {/* Background: grid + glows (eased parallax) */}
      <motion.div
        aria-hidden
        style={reduced ? undefined : { y: glowY }}
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-grid-fade bg-[size:64px_64px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
        <div className="glow-signal absolute left-1/2 top-1/2 h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 animate-pulse-glow" />
        <div className="glow-iris absolute -left-[8%] top-[6%] h-[55vh] w-[55vh]" />
        <div className="glow-aqua absolute -right-[6%] bottom-[2%] h-[46vh] w-[46vh]" />
        <div className="glow-gold absolute right-[12%] top-[20%] h-56 w-56" />
        <div className="grain absolute inset-0 opacity-[0.04] mix-blend-overlay" />
      </motion.div>

      <motion.div
        style={reduced ? undefined : { y: contentY, opacity: contentOpacity }}
        className="container-px relative w-full"
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="eyebrow mb-7"
        >
          Dubai Creative Studio · Video · Design · AI
        </motion.p>

        {/* Headline — words rise in sequentially */}
        <h1
          aria-label="Your brand deserves better digital."
          className="max-w-[16ch] font-display text-display-lg font-bold text-bone"
        >
          <span className="block" aria-hidden>
            {line1.map((w, i) => (
              <motion.span
                key={w}
                initial={{ opacity: 0, y: "0.45em" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease, delay: 0.1 + i * 0.08 }}
                className="mr-[0.28em] inline-block"
              >
                {w}
              </motion.span>
            ))}
          </span>
          <span className="block" aria-hidden>
            {line2.map((w, i) => (
              <motion.span
                key={w}
                initial={{ opacity: 0, y: "0.45em" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease,
                  delay: 0.1 + (line1.length + i) * 0.08,
                }}
                className="mr-[0.28em] inline-block"
              >
                {i === line2.length - 1 ? (
                  <span className="relative bg-gradient-to-r from-signal via-iris to-aqua bg-clip-text text-transparent">
                    {w.replace(".", "")}
                    <span className="text-gold">.</span>
                  </span>
                ) : (
                  w
                )}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.5 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-slate"
        >
          {site.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.62 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <CTAButton href="/contact">Start a Project</CTAButton>
          <Link
            href="/#work"
            className="group inline-flex items-center gap-3 rounded-full border border-white/12 px-6 py-3.5 text-sm font-semibold text-bone transition-colors hover:border-white/30 hover:bg-white/[0.04]"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-signal">
              <Play size={11} className="ml-0.5 fill-current" />
            </span>
            View Our Work
          </Link>
        </motion.div>

        {/* Bottom meta row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.9 }}
          className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-7 text-sm text-slate"
        >
          {[
            "Brand & Identity",
            "Web & Digital",
            "Content & Campaigns",
            "AI-Made Content",
          ].map((item) => (
            <span key={item} className="inline-flex items-center gap-2.5">
              <span className="signal-dot" />
              {item}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
