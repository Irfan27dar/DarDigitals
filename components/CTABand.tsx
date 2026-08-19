import Reveal from "./Reveal";
import CTAButton from "./CTAButton";
import { site } from "@/content/site";

export default function CTABand() {
  return (
    <section id="contact-cta" className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="glow-signal absolute left-[38%] top-1/2 h-[58vh] w-[58vh] -translate-x-1/2 -translate-y-1/2" />
        <div className="glow-iris absolute left-[64%] top-1/2 h-[50vh] w-[50vh] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute inset-0 bg-grid-fade bg-[size:56px_56px] opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" />
      </div>
      <div className="container-px relative text-center">
        <Reveal>
          <p className="eyebrow justify-center">Let&apos;s work together</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mx-auto mt-5 max-w-4xl font-display text-display-md font-bold text-balance text-bone">
            Ready to make your business{" "}
            <span className="bg-gradient-to-r from-signal via-iris to-aqua bg-clip-text text-transparent">
              easier to trust
            </span>
            <span className="text-gold">?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate">
            Tell us what you&apos;re building. We&apos;ll bring the brand, design,
            content and digital together so the quality shows.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <CTAButton href="/contact">Start a Project</CTAButton>
            <CTAButton href={`mailto:${site.email}`} variant="secondary" showArrow={false}>
              {site.email}
            </CTAButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
