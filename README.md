# DarDigitals

Marketing website for **DarDigitals** — a Dubai creative digital studio (video, design, brand & AI-made content). Built to feel high-end, bold and cinematic, with smooth scroll and motion throughout.

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** — brand tokens in [`tailwind.config.ts`](tailwind.config.ts) + CSS variables in [`app/globals.css`](app/globals.css)
- **Framer Motion** — all animation (scroll reveals, staggers, marquees, hovers)
- **Lenis** — smooth scrolling ([`components/SmoothScroll.tsx`](components/SmoothScroll.tsx))
- **next/font** — Space Grotesk (headlines) + Inter (body)
- **next/image** — all imagery
- **lucide-react** — icons

No CMS — all content lives in typed data files under [`/content`](content).

## Getting started

```bash
npm install
npm run dev
```

Then open **http://localhost:3400**.

```bash
npm run build   # production build (run before shipping)
npm run start   # serve the production build
```

## Editing content

All copy and data are typed files in [`/content`](content) — no code changes needed to update text:

| File | Controls |
| --- | --- |
| [`content/site.ts`](content/site.ts) | Name, tagline, nav, email, WhatsApp, socials, location |
| [`content/services.ts`](content/services.ts) | The five numbered service cards |
| [`content/work.ts`](content/work.ts) | Selected work + full case studies (Context → Reflection) |
| [`content/process.ts`](content/process.ts) | Discover → Direction → Design → Deliver → Grow |
| [`content/why.ts`](content/why.ts) | The four "Why DarDigitals" pillars |
| [`content/testimonials.ts`](content/testimonials.ts) | Hover-reveal testimonial grid |
| [`content/faqs.ts`](content/faqs.ts) | FAQ accordion |
| [`content/marquee.ts`](content/marquee.ts) | Logo strip + keyword ribbon items |

## Where things live

- **Brand tokens** — colours, fonts, shadows, animations: [`tailwind.config.ts`](tailwind.config.ts) and the CSS variables at the top of [`app/globals.css`](app/globals.css).
- **Motion variants** — centralised in [`lib/motion.ts`](lib/motion.ts) so animations stay consistent.
- **Components** — [`/components`](components) (Header, Footer, Hero, ServiceCard, WorkCard, ProcessTimeline, Marquee, TestimonialGrid, FAQ, CTAButton, Reveal, ContactForm, …).
- **Logos** — [`/public/brand`](public/brand). Favicon + apple-touch-icon are generated from the monogram via `app/icon.png` and `app/apple-icon.png`.

### Brand palette

| Token | Hex | Use |
| --- | --- | --- |
| Midnight Indigo | `#161826` | Base / dark sections |
| Signal Blue | `#2E6BFF` | Primary accent, CTAs, glows |
| Desert Gold | `#E3B04B` | Luxury accent, the "signal dot" |
| Bone White | `#F4F2ED` | Light sections |
| Slate Grey | `#6B7186` | Muted text |

## Contact form

The contact form (`/contact`) posts to a stubbed route handler at
[`app/api/contact/route.ts`](app/api/contact/route.ts), which validates and logs
the enquiry. Wire it to email/CRM where the `// TODO: connect email/CRM` comment
is.

## Accessibility & motion

- Semantic HTML, visible focus states, skip-to-content link.
- `prefers-reduced-motion` is respected — Lenis smooth scroll and heavy
  animations are disabled when the user opts out.

## Deploy

Zero-config on **Vercel** — import the repo and deploy. Set the production URL in
[`content/site.ts`](content/site.ts) (`site.url`) so metadata, sitemap and robots
resolve correctly.
