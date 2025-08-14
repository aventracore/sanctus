# PulseTrack

Premium, multi-page SaaS marketing site + live-feeling dashboard built with Next.js 14 App Router, React 18, TailwindCSS, Framer Motion, Recharts, and MDX.

## Stack
- Next.js 14.2.3 (App Router)
- React 18.3.1
- TypeScript 5.3.x
- TailwindCSS 3.4.4 + Typography plugin
- Framer Motion 10.16.x
- Recharts 2.7.x
- next-seo 6.1.x, next-sitemap 4.1.x
- react-hook-form 7.51.x + zod 3.23.x

## Requirements
- Node >= 18.17 (set in `package.json` engines)

## Setup
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Scripts
- `dev` – start dev server
- `build` – type-check and build
- `start` – run production server
- `lint` – lint
- `test` – run Jest tests
- `postbuild` – generate sitemap/robots with `next-sitemap`

## Theming
- Tokens live in `lib/theme.ts` and CSS variables in `app/globals.css`.
- Tailwind is wired to variables in `tailwind.config.js` (`theme.extend.colors`).
- Typography: Inter variable font via `app/layout.tsx`. Fluid sizes in tokens.
- Motion: Page transitions configured in `components/MotionProvider.tsx` using ease `[0.16,1,0.3,1]`.

## SEO
- Global defaults in `lib/seo.ts`. Per-page titles via route metadata or `NextSeo`.
- JSON-LD for blog posts in `app/(marketing)/blog/[slug]/page.tsx`.
- Sitemap/robots via `next-sitemap.config.js`. Set `SITE_URL` env for production.

## MDX Blog
- Posts in `content/blog/*.mdx` with frontmatter: `title, excerpt, tags[], author, date`.
- Index: `app/(marketing)/blog/page.tsx`.
- Post page: `app/(marketing)/blog/[slug]/page.tsx` with ToC.

## Dashboard
- Route: `/dashboard` with a client-side demo login.
- Settings panel controls theme (Light/Dark/System) and profile. Persisted in `localStorage`.
- Charts use Recharts with `dynamic({ ssr: false })`.

## Add a blog post
1. Create `content/blog/my-post.mdx` with frontmatter.
2. Content supports Markdown, code blocks, and headings (ToC auto-generates).

## Deploy on Vercel
- Import the repo
- Framework: Next.js
- Environment: set `SITE_URL` to your domain
- Deploy

## Images
- Photos from Unsplash are loaded via `images.unsplash.com`.
