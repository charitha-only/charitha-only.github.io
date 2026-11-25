# Charitha — Cinematic Developer Portfolio

Portfolio website for **malsanka.com**.

## Stack
- Next.js 15 · React 19 · TypeScript
- Framer Motion · Lucide React
- Custom responsive cinematic dark design
- Vercel deployment

## Local development
```bash
npm install
npm run dev
```

## Add your portrait
Create `public/images/` and add these three supplied portraits (keep the original face and skin tone unchanged):

- `portfolio-portrait-dark-hero.jpg` — hero portrait
- `portfolio-portrait-office.jpg` — About gallery, workspace portrait
- `portfolio-portrait-tech.jpg` — About gallery, technology portrait

Use optimized WebP exports if possible. The site falls back gracefully if the hero image is missing; gallery images should be added before production deployment.

## Deploy
1. Import `charitha-only/charitha-only.github.io` into Vercel.
2. Select the Next.js framework preset.
3. Use `npm run build` as the build command.
4. Add `malsanka.com` and optionally `www.malsanka.com` under Project → Settings → Domains.
5. Configure DNS exactly as Vercel instructs, then wait for verification and SSL.

## Content
Featured public repositories are listed in `data/projects.ts`. Review descriptions, release labels and technology claims before publishing. Private repositories are intentionally not linked.

No API keys or environment variables are required.
