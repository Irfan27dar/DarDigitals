import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";
import Marquee from "@/components/Marquee";
import { pillars } from "@/content/why";
import { keywords } from "@/content/marquee";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "DarDigitals brings brand, design, content and digital together so the quality of good businesses is visible in every touchpoint. Based in Dubai, UAE.",
};

const stats = [
  { value: "1", label: "Studio, joined-up" },
  { value: "4", label: "Disciplines under one roof" },
  { value: "100%", label: "Senior attention" },
  { value: "∞", label: "Care per pixel" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-40 pb-20 sm:pt-48 sm:pb-28">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="glow-signal absolute left-1/2 top-24 h-[50vh] w-[60vh] -translate-x-1/2" />
          <div className="absolute inset-0 bg-grid-fade bg-[size:60px_60px] opacity-30 [mask-image:radial-gradient(ellipse_at_top,black_10%,transparent_65%)]" />
        </div>
        <div className="container-px relative">
          <Reveal>
            <p className="eyebrow">About · {site.location}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 max-w-[18ch] font-display text-display-md font-bold text-balance text-bone">
              We make good businesses{" "}
              <span className="bg-gradient-to-r from-signal via-iris to-aqua bg-clip-text text-transparent">
                impossible to overlook
              </span>
              <span className="text-gold">.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="relative pb-8">
        <div className="container-px grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow lg:sticky lg:top-28">The short version</p>
          </Reveal>
          <div className="space-y-8">
            <Reveal>
              <p className="font-display text-2xl font-medium leading-snug text-bone sm:text-3xl">
                DarDigitals exists because good businesses are often let down by
                weak presentation.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="text-lg leading-relaxed text-slate">
                We bring brand, design, content and digital together so the
                quality of the business is visible in every touchpoint. When the
                work is genuinely good, our job is simple: make sure it looks it
                — everywhere someone might meet you.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed text-slate">
                We&apos;re a boutique studio in Dubai, built to punch above our
                size. You work directly with the people making the work, across
                every discipline, with an obsession for finish that shows in the
                details most studios skip.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container-px grid grid-cols-2 gap-6 border-y border-white/10 py-12 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <div>
                <p className="font-display text-5xl font-bold text-bone sm:text-6xl">
                  {s.value}
                </p>
                <p className="mt-2 text-sm text-slate">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Ribbon */}
      <section aria-hidden className="border-b border-white/10 py-6">
        <Marquee items={keywords} duration={45} />
      </section>

      {/* Values */}
      <section className="bg-bone py-24 text-midnight sm:py-32">
        <div className="container-px">
          <SectionHeading
            dark
            eyebrow="What we stand for"
            title="How we show up on every project."
            intro="The same four things, whether it&apos;s a single logo or an ongoing partnership."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={i * 0.05}>
                  <div className="group flex h-full gap-5 rounded-2xl border border-midnight/10 bg-midnight/[0.02] p-7 transition-colors duration-500 hover:border-signal/40">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-midnight/10 bg-white text-signal">
                      <Icon size={20} />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-midnight">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate">
                        {p.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
