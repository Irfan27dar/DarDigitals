import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  dark?: boolean; // when on a bone-white section, flip text colours
};

/**
 * Shared section header: eyebrow with gold signal dot, display title, and
 * optional intro. `dark` adapts colours for light (bone) sections.
 */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  dark = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}
    >
      <Reveal>
        <p
          className={`eyebrow ${dark ? "text-slate" : ""} ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2
          className={`mt-4 font-display text-display-sm font-bold text-balance ${
            dark ? "text-midnight" : "text-bone"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p
            className={`mt-5 text-lg leading-relaxed ${
              dark ? "text-slate" : "text-slate"
            }`}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
