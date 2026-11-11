export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  tags: string[];
  cover: string; // gradient token key used for the placeholder visual
  url: string; // live site
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
 * Real, live projects built by the studio. Each `url` is the deployed site.
 * Metrics are factual scope/stack notes, not performance claims.
 */
export const work: CaseStudy[] = [
  {
    slug: "gaash-tour-and-travels",
    title: "Kashmir, shot like a film",
    client: "Gaash Tour & Travels",
    category: "Web & Digital",
    year: "2026",
    tags: ["Web & Digital", "Brand", "Content"],
    cover: "gold",
    url: "https://gaash-tour-and-travel.vercel.app",
    summary:
      "A cinematic marketing site for a Kashmir & Ladakh tour operator — itineraries, houseboats and mountain expeditions, built to turn browsers into enquiries.",
    context:
      "Gaash runs tailor-made journeys through Kashmir, Ladakh and the pilgrimage routes — Dal Lake houseboats, Gulmarg's meadows, Ladakh's high passes — but had no digital home that did the landscape justice.",
    challenge:
      "Make a tour operator feel premium and trustworthy, present flexible itineraries clearly, and give travellers an obvious, low-friction way to enquire.",
    direction:
      "A warm, editorial system built around full-bleed photography of the valley, with a yellow-and-ink brand palette and calm, confident motion that lets the scenery lead.",
    execution:
      "Designed and built in Next.js 14 with Tailwind and Framer Motion — tour and itinerary sections, a photo-led hero, the real Gaash logo, and an enquiry flow, fully responsive and deployed on Vercel.",
    result:
      "A live, mobile-first site that presents Gaash as a serious, modern operator and gives every page a clear path to get in touch.",
    reflection:
      "When the product is a place this beautiful, restraint wins — the design's job was to get out of the way of the photography.",
    metrics: [
      { label: "Built with", value: "Next.js 14" },
      { label: "Responsive", value: "100%" },
      { label: "On Vercel", value: "Live" },
    ],
  },
  {
    slug: "al-hamad-group",
    title: "Scale, made visible",
    client: "Al Hamad Group",
    category: "Web & Digital",
    year: "2026",
    tags: ["Web & Digital", "Corporate", "Motion"],
    cover: "indigo",
    url: "https://al-hamad-group.vercel.app",
    summary:
      "A corporate site for a diversified contractor spanning construction, industry, real estate, renewable energy and trading — animated to signal scale.",
    context:
      "Al Hamad Group is a diversified multinational contractor active across construction, industry, real estate, renewable energy and trading — a lot of substance that its old presence didn't convey.",
    challenge:
      "Communicate the breadth of a multi-sector group without it reading as scattered, and make an established contractor feel as modern as it is capable.",
    direction:
      "A structured, animated landing experience with a confident dark palette — scroll-driven reveals that reveal each division in turn and signal reach and reliability.",
    execution:
      "Built in Next.js 14 with Tailwind and Framer Motion: a sectioned overview of the group's divisions, smooth scroll animation and a responsive layout, deployed on Vercel.",
    result:
      "A credible, contemporary corporate site that presents the group as one coherent, capable organisation across all five sectors.",
    reflection:
      "For a group this broad, the design challenge is editing — giving each division room while keeping one clear story.",
    metrics: [
      { label: "Sectors", value: "5" },
      { label: "Animation", value: "Framer" },
      { label: "Deployed", value: "Live" },
    ],
  },
  {
    slug: "gearup-me",
    title: "Genuine hardware, fast",
    client: "GearUp.Me",
    category: "Web & Digital",
    year: "2026",
    tags: ["Web & Digital", "E-commerce", "UX / UI"],
    cover: "blue",
    url: "https://gear-up-me.vercel.app",
    summary:
      "An e-commerce storefront for genuine PC hardware in the UAE — fast, filterable and built around warranty and same-day delivery.",
    context:
      "GearUp.Me sells genuine computer hardware in the UAE with warranty coverage and same-day delivery, and needed a storefront that felt as trustworthy as the promise.",
    challenge:
      "Build a clean, fast shopping experience that makes genuine product and same-day delivery the headline, and holds up across a full catalogue of components.",
    direction:
      "A crisp, product-first store with a confident green/teal/orange system — clear hierarchy, quick browsing and trust signals (genuine, warranty, same-day) kept front and centre.",
    execution:
      "Built in Next.js 14 with a Supabase backend: catalogue and store routes, product and category pages, AED pricing and a responsive, conversion-minded storefront.",
    result:
      "A live storefront that presents GearUp.Me as a credible UAE hardware retailer and makes finding and buying the right component straightforward.",
    reflection:
      "In commerce, trust is the feature. The design spends its energy making 'genuine' and 'same-day' impossible to miss.",
    metrics: [
      { label: "Market", value: "UAE" },
      { label: "Delivery", value: "Same-day" },
      { label: "Storefront", value: "Live" },
    ],
  },
  {
    slug: "silver-star-electromechanical",
    title: "Engineering, presented with precision",
    client: "Silver Star Electromechanical",
    category: "Web & Digital",
    year: "2026",
    tags: ["Web & Digital", "Corporate", "MEP"],
    cover: "iris",
    url: "https://silver-star-electromechanical.vercel.app",
    summary:
      "A marketing site for a Dubai MEP contractor — HVAC, electrical, plumbing and fit-out — built to make engineering rigour feel credible at a glance.",
    context:
      "Silver Star Electromechanical (SSEM) delivers MEP contracting across Dubai — HVAC, plumbing, electrical, fire-fighting and fit-out for hotels, hospitals, malls and residential and commercial projects — but needed a presence that matched its track record.",
    challenge:
      "Present a broad MEP service range clearly and make a technical contractor feel precise, established and easy to trust.",
    direction:
      "A clean, structured corporate system — confident typography, organised service sections and restrained motion that signals engineering discipline.",
    execution:
      "Built in Next.js with Tailwind: a services overview across HVAC, electrical, plumbing, fire-fighting and maintenance, sector and project context, and a responsive, professional layout deployed on Vercel.",
    result:
      "A credible, modern marketing site that presents SSEM as a capable, detail-driven MEP partner in the Dubai market.",
    reflection:
      "For a technical contractor, clarity is the brand — the site's job is to make precision legible.",
    metrics: [
      { label: "Discipline", value: "MEP" },
      { label: "Based in", value: "Dubai" },
      { label: "Deployed", value: "Live" },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return work.find((w) => w.slug === slug);
}
