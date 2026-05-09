# THÈA RA MODE & DESIGN — Premium Next.js Website

A production-ready localhost development project for a premium European creative agency website based in Duisburg, Germany.

## Tech Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- GSAP ScrollTrigger
- Lenis smooth scrolling
- Component-based architecture

## Installation

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
npm run start
```

## Folder Structure

- `app/` — App Router routes, layouts, metadata and pages
- `components/` — reusable UI, animation and content components
- `animations/` — GSAP animation setup
- `hooks/` — client-side hooks
- `lib/` — brand, navigation, service, FAQ and portfolio data
- `public/` — SEO files and static assets
- `styles/` — global CSS and Tailwind layers
- `utils/` — small utility helpers

## Implemented Pages

- `/` Startseite
- `/leistungen`
- `/projekte`
- `/ueber-uns`
- `/kontakt`
- `/faq`
- `/impressum`
- `/datenschutz`
- `/agb`

## Contact Data Location

Primary business/contact data is maintained in `lib/data.ts`. Legal page content is in:

- `app/impressum/page.tsx`
- `app/datenschutz/page.tsx`
- `app/agb/page.tsx`

## SEO Notes

Global metadata, OpenGraph, Twitter metadata and LocalBusiness/Organization schema are configured in `app/layout.tsx`.

Static SEO files are included:

- `public/sitemap.xml`
- `public/robots.txt`

The website targets German SEO terms including Firmenbekleidung Deutschland, Textildruck Duisburg, Branding Agentur Duisburg, Logo Design Deutschland and Premium Branding Agentur.

## Customization Notes

The project uses CSS/SVG-based cinematic visual compositions to avoid generic stock imagery. Replace or extend `ImageReveal` with optimized `next/image` assets when brand photography or mockups become available.

The contact form is a validated local UI. For production, connect it to a mail service or server action.

The Google Maps embed on the contact page is active. For stricter GDPR production requirements, implement a two-click consent wrapper.
