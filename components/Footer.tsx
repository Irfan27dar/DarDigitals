import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-midnight">
      {/* soft blue glow */}
      <div
        aria-hidden
        className="glow-signal pointer-events-none absolute -top-40 left-1/2 h-80 w-[42rem] -translate-x-1/2 opacity-60"
      />
      <div className="container-px relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" aria-label="DarDigitals — home" className="inline-block">
              <Image
                src="/brand/wordmark.png"
                alt="DarDigitals"
                width={1517}
                height={503}
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate">
              {site.description}
            </p>
            <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-bone">
              <span className="signal-dot" />
              {site.tagline}
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate">
              Explore
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-bone/80 transition-colors hover:text-bone"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + social */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate">
              Get in touch
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2.5 text-bone/80 transition-colors hover:text-bone"
                >
                  <Mail size={15} className="text-signal" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2.5 text-bone/80 transition-colors hover:text-bone"
                >
                  <Phone size={15} className="text-signal" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsappHref}
                  className="inline-flex items-center gap-2.5 text-bone/80 transition-colors hover:text-bone"
                >
                  <MessageCircle size={15} className="text-signal" />
                  {site.whatsapp}
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5 text-bone/80">
                <MapPin size={15} className="text-signal" />
                {site.location}
              </li>
            </ul>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="link-underline transition-colors hover:text-bone">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-7 text-xs text-slate sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p className="inline-flex items-center gap-2">
            Made in {site.location}
            <span className="signal-dot" />
          </p>
        </div>
      </div>
    </footer>
  );
}
