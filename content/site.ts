export const site = {
  name: "DarDigitals",
  legalName: "DarDigitals Creative Studio",
  tagline: "Video · Design · AI",
  description:
    "DarDigitals is a Dubai creative studio building brands, websites, content and campaigns that make good businesses easier to trust.",
  url: "https://www.dardigitals.com",
  location: "Dubai, UAE",
  email: "hello@dardigitals.com",
  phone: "+971 55 885 3759",
  phoneHref: "tel:+971558853759",
  whatsapp: "+971 55 885 3759",
  whatsappHref: "https://wa.me/971558853759",
  nav: [
    { label: "Work", href: "/#work" },
    { label: "Services", href: "/#services" },
    { label: "Why Us", href: "/#why" },
    { label: "Process", href: "/#process" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  socials: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Behance", href: "#" },
    { label: "YouTube", href: "#" },
  ],
} as const;

export type NavItem = (typeof site.nav)[number];
