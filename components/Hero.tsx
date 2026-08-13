"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Link from "next/link";
import { ease } from "@/lib/motion";
import { site } from "@/content/site";
import CTAButton from "./CTAButton";

const line1 = ["YOUR", "BRAND", "DESERVES"];
const line2 = ["BETTER", "DIGITAL."];

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-28">
      {/* Background: grid + glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-fade bg-[size:64px_64px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
        <div className="glow-signal absolute left-1/2 top-1/2 h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 animate-pulse-glow" />
        <div className="glow-gold absolute right-[8%] top-[22%] h-64 w-64" />
        <div className="grain absolute inset-0 opacity-[0.04] mix-blend-overlay" />
      </div>

      <div className="container-px relative w-full">
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
                  <span className="relative bg-gradient-to-r from-signal to-[#7aa2ff] bg-clip-text text-transparent">
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
      </div>

      {/* Scroll hint */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate lg:flex"
      >
        <span className="text-[11px] uppercase tracking-[0.25em]">Scroll</span>
        <span className="relative flex h-9 w-5 justify-center rounded-full border border-white/20">
          <motion.span
            animate={{ y: [3, 14, 3] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="mt-1.5 h-1.5 w-1 rounded-full bg-gold"
          />
        </span>
      </motion.div>
    </section>
  );
}
