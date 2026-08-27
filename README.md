# Hustle Time Calculator V6 — Cloudflare Workers Static Assets

Cloudflare Workers Builds-ready static Next.js site.

## Cloudflare settings

- Project name: `hustletimecalculator`
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`

Keep `wrangler.jsonc` in the repository root.

## Static export

Next.js uses `output: 'export'` and generates the site in `out/`.
The sitemap is a static `public/sitemap.xml`, which is compatible with static export.

## Important

Do not use OpenNext for this project.
Do not use `opennextjs-cloudflare`.
Do not remove `wrangler.jsonc`.

## Local

`npm install`
`npm run build`
`npx wrangler deploy`
