import type { ReactNode } from "react";
import Reveal from "./Reveal";

/**
 * Shared wrapper for legal pages (Terms, Privacy). Provides the header and a
 * prose container that styles the semantic content it's given.
 */
export default function LegalLayout({
  eyebrow,
  title,
  updated,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  intro: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 sm:pt-44">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="glow-signal absolute left-1/2 top-10 h-[40vh] w-[55vh] -translate-x-1/2" />
        <div className="absolute inset-0 bg-grid-fade bg-[size:60px_60px] opacity-20 [mask-image:radial-gradient(ellipse_at_top,black_5%,transparent_60%)]" />
      </div>

      <div className="container-px relative">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="eyebrow">{eyebrow}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 font-display text-display-sm font-bold text-bone">
              {title}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-sm text-slate">Last updated: {updated}</p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 text-lg leading-relaxed text-slate">{intro}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <div
              className="mt-12 border-t border-white/10 pt-10
                [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-bone
                [&_h2:first-child]:mt-0
                [&_p]:mt-4 [&_p]:leading-relaxed [&_p]:text-slate
                [&_a]:text-signal [&_a:hover]:underline
                [&_strong]:font-semibold [&_strong]:text-bone/90
                [&_ul]:mt-4 [&_ul]:space-y-2.5
                [&_li]:relative [&_li]:pl-6 [&_li]:leading-relaxed [&_li]:text-slate
                [&_li::before]:absolute [&_li::before]:left-0 [&_li::before]:top-[0.55em] [&_li::before]:h-1.5 [&_li::before]:w-1.5 [&_li::before]:rounded-full [&_li::before]:bg-gold [&_li::before]:content-['']"
            >
              {children}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
