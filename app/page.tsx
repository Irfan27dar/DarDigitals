"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import WorkCard from "@/components/WorkCard";
import ProcessTimeline from "@/components/ProcessTimeline";
import TestimonialGrid from "@/components/TestimonialGrid";
import FAQ from "@/components/FAQ";
import CTABand from "@/components/CTABand";
import CTAButton from "@/components/CTAButton";
import { services } from "@/content/services";
import { work } from "@/content/work";
import { pillars } from "@/content/why";
import { keywords, clientLogos } from "@/content/marquee";
import { staggerContainer, viewportOnce } from "@/lib/motion";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* ── Logo strip marquee ─────────────────────────── */}
      <section aria-label="Trusted by" className="border-y border-white/10 py-8">
        <Marquee items={clientLogos} variant="logo" duration={35} />
      </section>

      {/* ── Selected Work (dark) ───────────────────────── */}
      <section id="work" className="relative py-24 sm:py-32">
        <div className="container-px grid gap-10 lg:grid-cols-[0.82fr_1.7fr] lg:gap-16">
          {/* Sticky pinned heading — stays put while the cards scroll beside it */}
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <SectionHeading
              eyebrow="Selected Work"
              title="A few projects. A lot of detail."
              intro="A look at how we bring brand, design, content and digital together — and what changes when the quality finally shows."
            />
            <Reveal delay={0.1} className="mt-8">
              <Link
                href="/contact"
                className="link-underline inline-flex items-center gap-2 text-sm font-semibold text-bone"
              >
                Start your project <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          </div>

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-x-6 gap-y-12 sm:grid-cols-2"
          >
            {work.map((study, i) => (
              <WorkCard key={study.slug} study={study} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Keyword ribbon ─────────────────────────────── */}
      <section aria-hidden className="border-y border-white/10 py-6">
        <Marquee items={keywords} reverse duration={45} />
      </section>

      {/* ── What We Do — services (bone white) ─────────── */}
      <section id="services" className="relative bg-bone py-24 text-midnight sm:py-32">
        <div className="container-px">
          <SectionHeading
            dark
            eyebrow="What We Do"
            title="Five ways we make good businesses look the part."
            intro="From a first logo to an ongoing creative partnership — everything under one roof, graded to a high finish."
          />
          <motion.div
            variants={staggerContainer(0.09)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service) => (
              <ServiceCard key={service.no} service={service} light />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Why DarDigitals (dark) ─────────────────────── */}
      <section id="why" className="relative overflow-hidden py-24 sm:py-32">
        <div
          aria-hidden
          className="glow-signal pointer-events-none absolute -left-40 top-1/3 h-96 w-96 opacity-60"
        />
        <div className="container-px relative grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* Sticky heading */}
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <SectionHeading
              eyebrow="Why DarDigitals"
              title={
                <>
                  Good creative should make the business easier to{" "}
                  <span className="text-signal">understand</span>, trust and{" "}
                  <span className="text-gold">choose</span>.
                </>
              }
              intro="We're a boutique studio built to punch above our size — close to the work, joined-up across disciplines, obsessive about finish."
            />
            <Reveal delay={0.15}>
              <div className="mt-8">
                <CTAButton href="/about" variant="secondary">
                  More about us
                </CTAButton>
              </div>
            </Reveal>
          </div>

          {/* Pillars */}
          <motion.ul
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-4 sm:grid-cols-2"
          >
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <motion.li
                  key={p.title}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                  }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.015] p-7 transition-colors duration-500 hover:border-signal/40"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-midnight-800 text-signal transition-colors duration-500 group-hover:bg-signal/10">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-bone">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">
                    {p.description}
                  </p>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </section>

      {/* ── Process (bone white) ───────────────────────── */}
      <section id="process" className="relative bg-bone py-24 text-midnight sm:py-32">
        <div className="container-px">
          <SectionHeading
            dark
            eyebrow="How We Work"
            title="Discover → Direction → Design → Deliver → Grow"
            intro="A clear path from first conversation to launch and beyond — no creative before clarity, no surprises at the finish."
          />
          <div className="mt-16">
            <ProcessTimeline light />
          </div>
        </div>
      </section>

      {/* ── Testimonials (dark) ────────────────────────── */}
      <section id="testimonials" className="relative py-24 sm:py-32">
        <div className="container-px">
          <SectionHeading
            eyebrow="Kind Words"
            title="The people we build with."
            intro="Hover a portrait to read what it was like to work together."
          />
          <div className="mt-14">
            <TestimonialGrid />
          </div>
        </div>
      </section>

      {/* ── FAQ (bone white) ───────────────────────────── */}
      <section id="faq" className="relative bg-bone py-24 text-midnight sm:py-32">
        <div className="container-px grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <SectionHeading
              dark
              eyebrow="FAQ"
              title="Questions, answered."
              intro="Everything you need to know before we start. Something else on your mind? Just ask."
            />
          </div>
          <div>
            <FAQ light />
          </div>
        </div>
      </section>

      {/* ── CTA band (dark) ────────────────────────────── */}
      <CTABand />
    </>
  );
}
