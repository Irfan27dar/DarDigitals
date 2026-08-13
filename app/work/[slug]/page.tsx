import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { work, getCaseStudy } from "@/content/work";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";

export function generateStaticParams() {
  return work.map((w) => ({ slug: w.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const study = getCaseStudy(params.slug);
  if (!study) return { title: "Case Study" };
  return {
    title: `${study.title} — ${study.client}`,
    description: study.summary,
  };
}

const covers: Record<string, string> = {
  indigo: "bg-[radial-gradient(120%_120%_at_20%_10%,#2a2f4d_0%,#161826_60%)]",
  blue: "bg-[radial-gradient(120%_120%_at_80%_0%,#1f3a7a_0%,#161826_62%)]",
  gold: "bg-[radial-gradient(120%_120%_at_15%_15%,#3a3320_0%,#161826_60%)]",
};

const sections = [
  { key: "context", label: "Context" },
  { key: "challenge", label: "Challenge" },
  { key: "direction", label: "Direction" },
  { key: "execution", label: "Execution" },
  { key: "result", label: "Result" },
  { key: "reflection", label: "Reflection" },
] as const;

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();

  const idx = work.findIndex((w) => w.slug === study.slug);
  const next = work[(idx + 1) % work.length];

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="glow-signal absolute left-1/2 top-10 h-[45vh] w-[55vh] -translate-x-1/2" />
        </div>
        <div className="container-px relative">
          <Reveal>
            <Link
              href="/#work"
              className="link-underline inline-flex items-center gap-2 text-sm text-slate hover:text-bone"
            >
              <ArrowLeft size={16} /> All work
            </Link>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-slate">
              <span className="rounded-full border border-white/12 px-3 py-1">
                {study.category}
              </span>
              <span>{study.client}</span>
              <span className="signal-dot" />
              <span>{study.year}</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-[20ch] font-display text-display-sm font-bold text-balance text-bone">
              {study.title}
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate">
              {study.summary}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Cover */}
      <section className="container-px">
        <Reveal>
          <div
            className={`relative isolate flex aspect-[16/9] items-center justify-center overflow-hidden rounded-3xl border border-white/10 ${
              covers[study.cover] ?? covers.indigo
            }`}
          >
            <div className="grain absolute inset-0 opacity-[0.05] mix-blend-overlay" />
            <div className="absolute inset-0 bg-grid-fade bg-[size:48px_48px] opacity-15" />
            <span className="font-display text-5xl font-bold text-bone/85 sm:text-7xl">
              {study.client}
            </span>
          </div>
        </Reveal>
      </section>

      {/* Metrics */}
      <section className="container-px py-16">
        <div className="grid grid-cols-3 gap-6 border-y border-white/10 py-10">
          {study.metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.05}>
              <div className="text-center sm:text-left">
                <p className="font-display text-4xl font-bold text-signal sm:text-5xl">
                  {m.value}
                </p>
                <p className="mt-2 text-xs text-slate sm:text-sm">{m.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Story: Context → Reflection */}
      <section className="container-px pb-24">
        <div className="mx-auto max-w-3xl space-y-14">
          {sections.map((s, i) => (
            <Reveal key={s.key} delay={0.02}>
              <div className="grid gap-3 sm:grid-cols-[140px_1fr] sm:gap-8">
                <p className="eyebrow pt-1 sm:sticky sm:top-28 sm:h-fit">
                  {String(i + 1).padStart(2, "0")} · {s.label}
                </p>
                <p className="text-lg leading-relaxed text-bone/85">
                  {study[s.key]}
                </p>
              </div>
            </Reveal>
          ))}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {study.tags.map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1 text-xs text-slate"
              >
                <span className="signal-dot" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Next project */}
      <section className="border-t border-white/10">
        <Link
          href={`/work/${next.slug}`}
          className="group container-px flex items-center justify-between gap-6 py-14"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate">
              Next project
            </p>
            <p className="mt-3 font-display text-2xl font-semibold text-bone transition-colors group-hover:text-signal sm:text-3xl">
              {next.title}
            </p>
          </div>
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/12 text-bone transition-all duration-300 group-hover:border-signal group-hover:bg-signal group-hover:text-white">
            <ArrowRight size={20} />
          </span>
        </Link>
      </section>

      <CTABand />
    </>
  );
}
