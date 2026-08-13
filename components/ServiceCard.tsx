"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/content/services";
import { staggerItem } from "@/lib/motion";

export default function ServiceCard({
  service,
  light = false,
}: {
  service: Service;
  light?: boolean;
}) {
  const Icon = service.icon;
  return (
    <motion.article
      variants={staggerItem}
      className={`group relative overflow-hidden rounded-2xl border p-7 transition-colors duration-500 hover:border-signal/50 sm:p-8 ${
        light
          ? "border-midnight/10 bg-midnight/[0.02]"
          : "border-white/10 bg-white/[0.015]"
      }`}
    >
      {/* hover glow */}
      <div
        aria-hidden
        className="glow-signal pointer-events-none absolute -right-16 -top-16 h-48 w-48 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative flex items-start justify-between gap-4">
        <span
          className={`font-display text-5xl font-bold transition-colors duration-500 group-hover:text-signal/40 ${
            light ? "text-midnight/10" : "text-white/10"
          }`}
        >
          {service.no}
        </span>
        <span
          className={`flex h-12 w-12 items-center justify-center rounded-xl border text-signal transition-colors duration-500 group-hover:border-signal/40 group-hover:bg-signal/10 ${
            light ? "border-midnight/10 bg-white" : "border-white/10 bg-midnight-800"
          }`}
        >
          <Icon size={20} />
        </span>
      </div>

      <h3
        className={`relative mt-6 font-display text-2xl font-semibold ${
          light ? "text-midnight" : "text-bone"
        }`}
      >
        {service.title}
      </h3>
      <p
        className={`relative mt-2 text-[15px] font-medium ${
          light ? "text-midnight/70" : "text-bone/70"
        }`}
      >
        {service.summary}
      </p>

      {/* Expanding detail on hover / focus-within */}
      <div className="relative grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr]">
        <div className="overflow-hidden">
          <p className={`pt-4 text-sm leading-relaxed ${light ? "text-slate" : "text-slate"}`}>
            {service.description}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {service.deliverables.map((d) => (
              <li
                key={d}
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs ${
                  light ? "border-midnight/10 text-midnight/70" : "border-white/10 text-bone/70"
                }`}
              >
                <span className="signal-dot" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ArrowUpRight
        size={18}
        className="absolute bottom-7 right-7 text-slate opacity-0 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-signal group-hover:opacity-100"
      />
    </motion.article>
  );
}
