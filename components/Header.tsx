"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { site } from "@/content/site";
import CTAButton from "./CTAButton";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        initial={false}
        animate={{
          backgroundColor: scrolled ? "rgba(22,24,38,0.72)" : "rgba(22,24,38,0)",
          borderColor: scrolled ? "rgba(107,113,134,0.18)" : "rgba(107,113,134,0)",
          paddingTop: scrolled ? 10 : 18,
          paddingBottom: scrolled ? 10 : 18,
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="border-b backdrop-blur-lg"
      >
        <nav className="container-px flex items-center justify-between">
          {/* Logo — wordmark, switches to monogram on scroll */}
          <Link href="/" aria-label="DarDigitals — home" className="relative flex items-center">
            <AnimatePresence mode="wait" initial={false}>
              {scrolled ? (
                <motion.span
                  key="monogram"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.25 }}
                >
                  <Image
                    src="/brand/monogram.png"
                    alt="DarDigitals"
                    width={972}
                    height={972}
                    className="h-9 w-9"
                    priority
                  />
                </motion.span>
              ) : (
                <motion.span
                  key="wordmark"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <Image
                    src="/brand/wordmark.png"
                    alt="DarDigitals"
                    width={1517}
                    height={503}
                    className="h-7 w-auto sm:h-8"
                    priority
                  />
                </motion.span>
              )}
            </AnimatePresence>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 lg:flex">
            <ul className="flex items-center gap-7 text-sm text-slate">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline transition-colors hover:text-bone"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <CTAButton href="/contact" showArrow={false} className="px-6 py-3 text-[13px]">
              Start a Project
            </CTAButton>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-bone lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="container-px lg:hidden"
          >
            <div className="mt-2 rounded-2xl border border-white/10 bg-midnight-800/95 p-6 backdrop-blur-xl">
              <ul className="flex flex-col gap-1">
                {site.nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 rounded-lg px-3 py-3 text-lg text-bone transition-colors hover:bg-white/5"
                    >
                      <span className="signal-dot" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <CTAButton href="/contact" className="w-full">
                  Start a Project
                </CTAButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
