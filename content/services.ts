import type { LucideIcon } from "lucide-react";
import { Fingerprint, Globe, Clapperboard, Megaphone, Repeat } from "lucide-react";

export type Service = {
  no: string;
  title: string;
  summary: string;
  description: string;
  deliverables: string[];
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    no: "01",
    title: "Brand Identity",
    summary: "Build a clear visual identity people can recognise.",
    description:
      "Logo systems, colour, type and the rules that keep everything consistent — so your brand looks intentional everywhere it shows up.",
    deliverables: ["Logo & marks", "Visual system", "Brand guidelines", "Collateral"],
    icon: Fingerprint,
  },
  {
    no: "02",
    title: "Web & Digital",
    summary: "Turn your digital presence into a stronger first impression.",
    description:
      "Fast, modern websites and landing pages designed to build trust and convert — engineered with the same care as the design.",
    deliverables: ["Websites", "Landing pages", "UX / UI", "Development"],
    icon: Globe,
  },
  {
    no: "03",
    title: "Content Studio",
    summary: "Premium photo, video, reels and social assets.",
    description:
      "Shot and graded to feel high-end. A steady stream of content your audience actually wants to watch and share.",
    deliverables: ["Photography", "Video & reels", "Social assets", "Motion graphics"],
    icon: Clapperboard,
  },
  {
    no: "04",
    title: "Campaign Studio",
    summary: "One creative idea across the right channels.",
    description:
      "A single, sharp concept adapted for every touchpoint — so your message lands with consistency and impact.",
    deliverables: ["Creative concept", "Art direction", "Channel adaptation", "Rollout"],
    icon: Megaphone,
  },
  {
    no: "05",
    title: "Creative Retainer",
    summary: "Ongoing creative support.",
    description:
      "An embedded creative partner on call each month — for the design, content and campaigns your business keeps needing.",
    deliverables: ["Monthly design", "Content pipeline", "Priority turnaround", "Strategy"],
    icon: Repeat,
  },
];
