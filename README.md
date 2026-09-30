# Šēra Labsajūtas Studija

Premium, multi-page wellness studio website built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Pages

- `/` — Homepage (hero + short intro only)
- `/par-mani` — About
- `/masazas` — Massages overview (cards linking to each dedicated page)
- `/masazas/<slug>` — Ten static routes, one per massage, each with its own folder, `page.tsx`, and dedicated component in `components/massages/`
- `/vaksacija` — Waxing (pricing cards)
- `/kontakti` — Contacts (info, map, CTA)

## Massage pages architecture

Each massage has its own static route — no dynamic `[slug]` segment:

```
app/masazas/muguras-masaza/page.tsx        → imports components/massages/MugurasMasaza.tsx
app/masazas/klasiska-kermena-masaza/page.tsx → imports components/massages/KlasiskaKermenaMasaza.tsx
...
```

Every `page.tsx` under `app/masazas/<slug>/` only imports its own component and sets that page's metadata:

```tsx
import MugurasMasaza from "@/components/massages/MugurasMasaza";

export default function Page() {
  return <MugurasMasaza />;
}
```

Each component in `components/massages/` looks up its own entry from `data/massages.ts` (the single source of truth for copy, prices, benefits, and SEO text) and renders it through the shared `components/MassageTemplate.tsx` presentational layout — this keeps every massage page visually consistent while still giving each massage its own dedicated file, as required. To add or edit a massage: update `data/massages.ts`, then add its component + folder following the same pattern.

## Notes

- Fonts: Cormorant Garamond (headings) and Poppins (body), loaded via `next/font/google`.
- Hero and card images are placeholder photography from Unsplash — swap the URLs in `components/Hero.tsx`, `app/par-mani/page.tsx`, and `app/masazas/page.tsx` for the studio's own photos before launch.
- The contact map embeds Google Maps for "Elizabetes iela 14, Tukums" — update the address query in `app/kontakti/page.tsx` if needed.
- Update social links in `components/Footer.tsx` with the studio's real Instagram/Facebook URLs.
