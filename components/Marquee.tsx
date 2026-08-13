"use client";

import { Fragment } from "react";

type MarqueeProps = {
  items: string[];
  reverse?: boolean;
  /** seconds per loop */
  duration?: number;
  variant?: "keyword" | "logo";
};

/**
 * Infinite horizontal marquee. The track holds two copies of the content
 * and translates -50%, so the loop is seamless. Pauses on hover; disabled
 * for reduced-motion users via globals.css.
 */
export default function Marquee({
  items,
  reverse = false,
  duration = 40,
  variant = "keyword",
}: MarqueeProps) {
  return (
    <div
      className="group relative flex overflow-hidden"
      style={{ ["--marquee-duration" as string]: `${duration}s` }}
    >
      {/* edge fades */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-midnight to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-midnight to-transparent"
      />

      <div
        className={`flex shrink-0 items-center gap-8 pr-8 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } group-hover:[animation-play-state:paused]`}
      >
        {[0, 1].map((copy) => (
          <Fragment key={copy}>
            {items.map((item, i) => (
              <span
                key={`${copy}-${i}`}
                aria-hidden={copy === 1}
                className={
                  variant === "keyword"
                    ? "inline-flex items-center gap-4 whitespace-nowrap font-display text-2xl font-medium text-bone/85 sm:text-3xl"
                    : "inline-flex items-center gap-4 whitespace-nowrap text-lg font-semibold tracking-wide text-slate/80 sm:text-xl"
                }
              >
                {item}
                <span className="signal-dot" />
              </span>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
