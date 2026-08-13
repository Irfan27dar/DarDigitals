import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="glow-signal absolute left-1/2 top-1/2 h-[50vh] w-[50vh] -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="container-px relative text-center">
        <p className="font-display text-[24vw] font-bold leading-none text-white/[0.06] sm:text-[16rem]">
          404
        </p>
        <h1 className="-mt-6 font-display text-display-sm font-bold text-bone sm:-mt-16">
          This page went off-grid<span className="text-gold">.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-md text-slate">
          The link may be broken or the page may have moved. Let&apos;s get you
          back to something worth showing.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-signal px-7 py-3.5 text-sm font-semibold text-white shadow-glow-sm transition-colors hover:bg-[#1f5cf0]"
        >
          <ArrowLeft size={16} /> Back home
        </Link>
      </div>
    </section>
  );
}
