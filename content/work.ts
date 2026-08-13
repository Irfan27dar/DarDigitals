export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  tags: string[];
  cover: string; // gradient token key used for the placeholder visual
  summary: string;
  context: string;
  challenge: string;
  direction: string;
  execution: string;
  result: string;
  reflection: string;
  metrics: { label: string; value: string }[];
};

/**
 * Tasteful placeholder projects. Replace copy + imagery with real
 * case studies as they go live. `cover` maps to a gradient in WorkCard.
 */
export const work: CaseStudy[] = [
  {
    slug: "lumen-hospitality",
    title: "A hospitality brand, re-graded",
    client: "Lumen Hospitality",
    category: "Brand Identity",
    year: "2025",
    tags: ["Brand", "Art Direction", "Content"],
    cover: "indigo",
    summary:
      "Repositioned a growing Dubai restaurant group with a confident identity and a content system that finally matched the food.",
    context:
      "Lumen had three venues and a fourth on the way, but the brand looked like three different companies. The quality on the plate was never visible online.",
    challenge:
      "Unify the group under one identity without flattening what made each venue distinct — and do it fast enough to launch the new location on time.",
    direction:
      "A warm, cinematic system: deep tones, gold detailing and photography treated like film stills. A flexible logo suite let each venue keep its own accent.",
    execution:
      "We delivered the master brand, per-venue lockups, menu and signage design, plus a two-day content shoot that stocked six weeks of social.",
    result:
      "The new venue opened fully-booked for its first fortnight, and group-wide social engagement more than doubled within the quarter.",
    reflection:
      "Consistency didn't cost personality. Giving each venue a controlled accent made the group feel bigger and more premium at once.",
    metrics: [
      { label: "Social engagement", value: "+124%" },
      { label: "Opening occupancy", value: "100%" },
      { label: "Venues unified", value: "4" },
    ],
  },
  {
    slug: "meridian-proptech",
    title: "Making proptech feel human",
    client: "Meridian",
    category: "Web & Digital",
    year: "2025",
    tags: ["Web", "UX / UI", "Motion"],
    cover: "blue",
    summary:
      "A new marketing site that turned a complex property platform into a clear, credible first impression.",
    context:
      "Meridian had strong technology and a website that undersold it. Prospects left confused about what the product actually did.",
    challenge:
      "Explain a multi-sided platform in one scroll — for investors, agents and buyers — without drowning anyone in jargon.",
    direction:
      "A calm, structured layout with motion used only to guide attention. One clear promise up top, proof underneath, a single obvious next step.",
    execution:
      "We designed and built a responsive Next.js site with animated product walk-throughs and a modular system their team can extend.",
    result:
      "Demo requests rose sharply after launch and average time-on-page climbed as visitors actually read the story.",
    reflection:
      "Restraint was the feature. Cutting the site in half made the technology look more capable, not less.",
    metrics: [
      { label: "Demo requests", value: "+61%" },
      { label: "Time on page", value: "+38%" },
      { label: "Bounce rate", value: "-22%" },
    ],
  },
  {
    slug: "attar-fragrance",
    title: "A fragrance line, shot like cinema",
    client: "Attar & Co.",
    category: "Content Studio",
    year: "2024",
    tags: ["Photography", "Video", "Social"],
    cover: "gold",
    summary:
      "A launch content package that made a boutique fragrance house feel like a global brand.",
    context:
      "A new luxury fragrance line was ready to launch with no visual language and a tight window before the retail push.",
    challenge:
      "Create a premium, ownable look across stills and video that would hold up next to established houses on the same shelf.",
    direction:
      "Macro texture, warm gold light and slow, deliberate motion — every frame graded to feel expensive and calm.",
    execution:
      "A single studio day produced a hero film, cut-downs for reels, and a full library of stills for e-commerce and print.",
    result:
      "The launch sold through its first production run early and the film became the brand's most-shared asset.",
    reflection:
      "One strong shoot, well-directed, outperformed months of ad-hoc content. Direction is the multiplier.",
    metrics: [
      { label: "First run", value: "Sold out" },
      { label: "Assets delivered", value: "40+" },
      { label: "Shoot days", value: "1" },
    ],
  },
  {
    slug: "northline-logistics",
    title: "One idea, every channel",
    client: "Northline Logistics",
    category: "Campaign Studio",
    year: "2024",
    tags: ["Campaign", "Concept", "Rollout"],
    cover: "indigo",
    summary:
      "A single creative platform that carried a B2B logistics brand across out-of-home, digital and sales.",
    context:
      "Northline was invisible in a commoditised market where everyone claimed the same thing: reliability.",
    challenge:
      "Find a distinctive idea that could stretch from a billboard to a sales deck without losing its edge.",
    direction:
      "We built the campaign around a simple promise about time, expressed with bold type and a restrained, confident palette.",
    execution:
      "One concept, adapted into OOH, paid social, a landing page and a refreshed pitch deck — all shipped in six weeks.",
    result:
      "Inbound leads climbed and the sales team finally had a story that prospects remembered in the room.",
    reflection:
      "A campaign is only as strong as the idea underneath it. We spent our time there, and everything else got easier.",
    metrics: [
      { label: "Inbound leads", value: "+47%" },
      { label: "Channels", value: "5" },
      { label: "Delivery", value: "6 wks" },
    ],
  },
  {
    slug: "vela-wellness",
    title: "A wellness brand with room to grow",
    client: "Vela",
    category: "Creative Retainer",
    year: "Ongoing",
    tags: ["Retainer", "Design", "Content"],
    cover: "blue",
    summary:
      "An ongoing partnership keeping a fast-moving wellness brand consistent as it scales.",
    context:
      "Vela was launching new products faster than any single freelancer could keep up with, and the brand was starting to drift.",
    challenge:
      "Hold a coherent look and a steady content cadence across launches, campaigns and everyday social — every month.",
    direction:
      "We built a living system and act as the embedded creative team, so quality stays high without slowing the pace.",
    execution:
      "Each month: a content batch, campaign creative for the next launch, and design support across the funnel — on a predictable rhythm.",
    result:
      "The brand ships more, looks more consistent, and the founders stopped worrying about creative as a bottleneck.",
    reflection:
      "The value of a retainer is momentum. Being close to the business means the work keeps getting sharper.",
    metrics: [
      { label: "Monthly assets", value: "30+" },
      { label: "Partnership", value: "18 mo" },
      { label: "Launches", value: "9" },
    ],
  },
  {
    slug: "atlas-fintech",
    title: "Trust, designed in",
    client: "Atlas",
    category: "Brand Identity",
    year: "2024",
    tags: ["Brand", "Web", "Motion"],
    cover: "gold",
    summary:
      "A ground-up identity and site for a fintech that needed to feel established on day one.",
    context:
      "Atlas was pre-launch and needed to earn trust from regulators, partners and users before it had a track record.",
    challenge:
      "Look credible and human at once — serious enough for finance, warm enough that people wanted to sign up.",
    direction:
      "A precise, structured identity softened with warm accents and confident motion. Clarity as a signal of competence.",
    execution:
      "Full brand system, product-marketing site, pitch materials and a motion toolkit for launch content.",
    result:
      "Atlas closed its next round and launched with a brand that punched well above its stage.",
    reflection:
      "For a young company, design is evidence. A considered brand told the market Atlas was here to stay.",
    metrics: [
      { label: "Round", value: "Closed" },
      { label: "Touchpoints", value: "12" },
      { label: "To launch", value: "8 wks" },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return work.find((w) => w.slug === slug);
}
