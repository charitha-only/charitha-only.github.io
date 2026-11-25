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
Create `public/images/` and upload your chosen original portrait as:

`public/images/charitha-hero.webp`

Use a WebP or AVIF export, around 1200–1600px high and ideally below 350 KB. Preserve your original face and skin tone. The hero section has a designed fallback until the image is present.

## Deploy
1. Import `charitha-only/charitha-only.github.io` into Vercel.
2. Select the Next.js framework preset.
3. Use `npm run build` as the build command.
4. Add `malsanka.com` and optionally `www.malsanka.com` under Project → Settings → Domains.
5. Configure DNS exactly as Vercel instructs, then wait for verification and SSL.

## Content
Featured public repositories are listed in `data/projects.ts`. Review descriptions, release labels and technology claims before publishing. Private repositories are intentionally not linked.

No API keys or environment variables are required.
