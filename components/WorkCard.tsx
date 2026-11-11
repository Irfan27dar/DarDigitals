"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/content/work";
import { staggerItem } from "@/lib/motion";

// Gradient "film still" placeholders keyed off case.cover.
const covers: Record<string, string> = {
  indigo:
    "bg-[radial-gradient(120%_120%_at_20%_10%,#2b2358_0%,#0f1024_55%)] before:bg-[conic-gradient(from_180deg_at_60%_40%,rgba(124,92,255,0.45),rgba(34,211,238,0.12),transparent_50%)]",
  blue: "bg-[radial-gradient(120%_120%_at_80%_0%,#1c3a86_0%,#0f1024_60%)] before:bg-[radial-gradient(60%_60%_at_30%_80%,rgba(59,110,255,0.55),transparent_70%)]",
  gold: "bg-[radial-gradient(120%_120%_at_15%_15%,#3a3320_0%,#0f1024_58%)] before:bg-[radial-gradient(55%_55%_at_75%_25%,rgba(251,191,60,0.38),transparent_70%)]",
  iris: "bg-[radial-gradient(120%_120%_at_80%_10%,#2a2066_0%,#0f1024_60%)] before:bg-[radial-gradient(55%_55%_at_25%_80%,rgba(34,211,238,0.32),transparent_70%)]",
};

export default function WorkCard({
  study,
  index,
}: {
  study: CaseStudy;
  index: number;
}) {
  return (
    <motion.article variants={staggerItem} className="group">
      <Link href={`/work/${study.slug}`} className="block">
        {/* Cover */}
        <div
          className={`relative isolate aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 ${
            covers[study.cover] ?? covers.indigo
          } before:absolute before:inset-0 before:-z-10 before:opacity-80 before:transition-transform before:duration-700 group-hover:before:scale-110`}
        >
          {/* grain + grid texture */}
          <div className="grain absolute inset-0 opacity-[0.05] mix-blend-overlay" />
          <div className="absolute inset-0 bg-grid-fade bg-[size:40px_40px] opacity-20" />

          {/* index + category */}
          <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
            <span className="font-display text-sm font-semibold tracking-widest text-bone/50">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="rounded-full border border-white/15 bg-midnight/40 px-3 py-1 text-xs text-bone/80 backdrop-blur-sm">
              {study.category}
            </span>
          </div>

          {/* big client mark */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-3xl font-bold text-bone/85 transition-transform duration-700 group-hover:scale-105 sm:text-4xl">
              {study.client}
            </span>
          </div>

          {/* view overlay */}
          <div className="absolute inset-0 flex items-end justify-end p-5">
            <span className="flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-signal text-white opacity-0 shadow-glow-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <ArrowUpRight size={18} />
            </span>
          </div>
        </div>

        {/* Meta */}
        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-xl font-semibold text-bone transition-colors group-hover:text-white">
              {study.title}
            </h3>
            <p className="mt-1.5 text-sm text-slate">{study.summary}</p>
          </div>
          <span className="shrink-0 pt-1 text-xs text-slate">{study.year}</span>
        </div>
        <ul className="mt-3 flex flex-wrap gap-2">
          {study.tags.map((t) => (
            <li
              key={t}
              className="rounded-full border border-white/10 px-2.5 py-0.5 text-[11px] text-slate"
            >
              {t}
            </li>
          ))}
        </ul>
      </Link>
    </motion.article>
  );
}
