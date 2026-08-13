export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Layla Haddad",
    role: "Founder, Lumen Hospitality",
    initials: "LH",
    quote:
      "They made our group look like one confident brand overnight. The new venue opened fully booked and the content finally matches the food.",
  },
  {
    name: "Omar Farouk",
    role: "CEO, Meridian",
    initials: "OF",
    quote:
      "Our old site buried the product. DarDigitals cut it in half and demo requests jumped. Rare to find design and engineering this joined-up.",
  },
  {
    name: "Sara Nasser",
    role: "Brand Lead, Attar & Co.",
    initials: "SN",
    quote:
      "One studio day gave us a launch that looked like a global house. The film is still our most-shared asset a year later.",
  },
  {
    name: "Daniel Okafor",
    role: "Marketing Director, Northline",
    initials: "DO",
    quote:
      "They found the one idea we could build everything on. For the first time, prospects remember us in the room.",
  },
  {
    name: "Mariam Al Suwaidi",
    role: "Co-founder, Vela",
    initials: "MA",
    quote:
      "Having them on retainer means we ship faster and never worry about consistency. It feels like an in-house team without the overhead.",
  },
  {
    name: "Yusuf Rahman",
    role: "COO, Atlas",
    initials: "YR",
    quote:
      "Pre-launch, our brand had to earn trust with nothing to point to. The identity they built made us look established from day one.",
  },
];
