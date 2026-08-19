import type { Metadata } from "next";
import { Mail, MessageCircle, MapPin, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell DarDigitals what you're building. Start a project with a Dubai creative studio for brand, web, content and campaigns.",
};

const details = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: site.whatsapp,
    href: site.whatsappHref,
  },
  { icon: MapPin, label: "Studio", value: site.location, href: undefined },
  { icon: Clock, label: "Response", value: "Within 1 working day", href: undefined },
];

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 sm:pt-44">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="glow-signal absolute right-0 top-16 h-[45vh] w-[50vh]" />
        <div className="absolute inset-0 bg-grid-fade bg-[size:60px_60px] opacity-25 [mask-image:radial-gradient(ellipse_at_top_right,black_5%,transparent_60%)]" />
      </div>

      <div className="container-px relative">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.25fr] lg:gap-20">
          {/* Left — pitch + details */}
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <Reveal>
              <p className="eyebrow">Contact · {site.location}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-display-sm font-bold text-balance text-bone">
                Let&apos;s build something worth{" "}
                <span className="bg-gradient-to-r from-signal via-iris to-aqua bg-clip-text text-transparent">
                  showing
                </span>
                <span className="text-gold">.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-slate">
                Tell us about the business and what you need. We&apos;ll come back
                with a clear, no-obligation next step — usually within a working
                day.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <ul className="mt-10 grid gap-4 sm:grid-cols-2">
                {details.map((d) => {
                  const Icon = d.icon;
                  const inner = (
                    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.015] p-4 transition-colors hover:border-signal/40">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-midnight-800 text-signal">
                        <Icon size={18} />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-[0.15em] text-slate">
                          {d.label}
                        </p>
                        <p className="mt-0.5 text-sm font-medium text-bone">
                          {d.value}
                        </p>
                      </div>
                    </div>
                  );
                  return (
                    <li key={d.label}>
                      {d.href ? <a href={d.href}>{inner}</a> : inner}
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>

          {/* Right — form */}
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-white/10 bg-midnight-800/40 p-6 backdrop-blur-sm sm:p-9">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
