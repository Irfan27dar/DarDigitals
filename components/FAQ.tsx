"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/content/faqs";
import { ease } from "@/lib/motion";

export default function FAQ({ light = false }: { light?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);

  const divide = light
    ? "divide-midnight/10 border-midnight/10"
    : "divide-white/10 border-white/10";
  const question = light ? "text-midnight" : "text-bone";

  return (
    <div className={`divide-y border-y ${divide}`}>
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div key={faq.question}>
            <h3>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className={`font-display text-lg font-medium sm:text-xl ${question}`}>
                  {faq.question}
                </span>
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                    isOpen
                      ? "border-signal/50 bg-signal/10 text-signal"
                      : light
                        ? "border-midnight/15 text-slate"
                        : "border-white/12 text-slate"
                  }`}
                >
                  <Plus
                    size={17}
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease }}
                  className="overflow-hidden"
                >
                  <p className="max-w-3xl pb-7 pr-12 text-[15px] leading-relaxed text-slate">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
