import type { LucideIcon } from "lucide-react";
import { Gem, Network, Sparkles, Rocket } from "lucide-react";

export type Pillar = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const pillars: Pillar[] = [
  {
    title: "Boutique attention",
    description:
      "You work directly with the people making the work. Small team, high care, no hand-offs to juniors.",
    icon: Gem,
  },
  {
    title: "Connected thinking",
    description:
      "Brand, web, content and campaigns handled under one roof — so everything pulls in the same direction.",
    icon: Network,
  },
  {
    title: "Premium execution",
    description:
      "Every deliverable is graded to a high finish. If it carries your name, it looks the part.",
    icon: Sparkles,
  },
  {
    title: "Practical delivery",
    description:
      "Beautiful work that actually ships — on brief, on time, and easy for your team to use.",
    icon: Rocket,
  },
];
