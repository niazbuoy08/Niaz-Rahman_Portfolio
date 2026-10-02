# Niaz Rahman — Portfolio

Personal portfolio site built with Next.js (App Router, static export), TypeScript and Tailwind CSS,
hosted on Cloudflare Workers as static assets.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build

```bash
npm run build      # writes the static site to ./out
```

`next start` is not used — the site is a static export. To preview the exact Cloudflare setup locally
(requires Node 22+): `npm run preview`.

## Deploying to Cloudflare

Config lives in [wrangler.jsonc](wrangler.jsonc) (serves `./out`, uses `404.html` for unknown URLs) and
[public/_headers](public/_headers) (security + caching headers).

### Option A — Git integration (recommended, auto-deploys on every push)

1. Push this repo to GitHub.
2. Cloudflare dashboard → **Workers & Pages** → **Create** → **Import a repository** → pick the repo.
3. Settings:
   - Build command: `npm run build`
   - Deploy command: `npx wrangler deploy`
   - Node version comes from [.node-version](.node-version) (22).
4. Deploy. The site is live at `https://niaz-rahman-portfolio.<your-subdomain>.workers.dev`.

### Option B — Deploy from this computer

Requires Node 22+ (`nvm install 22` then `nvm use 22`).

```bash
npx wrangler login
npm run deploy
```

### Custom domain

Dashboard → your Worker → **Settings** → **Domains & Routes** → **Add** → **Custom domain**.
The domain must be on Cloudflare DNS.

## Content

All resume facts live in [src/lib/data.ts](src/lib/data.ts) — edit that file to update copy anywhere on
the site, including `/resume`.

## Resume

`/resume` renders [public/Niaz-Rahman-Resume-2026.pdf](public/Niaz-Rahman-Resume-2026.pdf) in-page with PDF.js
(works on phones too). To update it, replace that file — keep the same name — and push.
The PDF.js worker is copied into `public/` automatically by `npm run dev` / `npm run build`.
