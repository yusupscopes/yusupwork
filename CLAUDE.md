# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

Next.js 16 is installed: read the relevant guide in `node_modules/next/dist/docs/` before writing Next.js code. APIs may differ from what you remember.

## Project

This is Yusup Maulana's personal portfolio at https://yusupmaulana.com. It is a fork of the "Nim" template (github.com/ibelick/nim), which is why `package.json` is named `nim` and the README and INSTALLATION docs still describe the template. The stack is Next.js 16 (App Router), React 19, Tailwind CSS v4, Motion (`motion/react`) and MDX.

## Commands

```bash
npm run dev     # dev server on http://localhost:3000
npm run build   # next build, then copies .next/static and public/ into .next/standalone/
npm run start   # node .next/standalone/server.js (run build first)
npm run preview # build with OpenNext and run locally in the Workers runtime (wrangler dev)
npm run deploy  # build with OpenNext and deploy to Cloudflare Workers (needs `npx wrangler login`)
```

`npm run lint` is broken: `next lint` was removed in Next 16.

There is no test suite. Prettier is configured in `.prettierrc.json` (no semicolons, single quotes, trailing commas, Tailwind class sorting), but no script runs it. To format a file, run `npx prettier --write <file>`.

## Architecture

- **Content lives in `app/data.ts`.** Projects, work experience, blog post listings, social links and email are typed arrays in that file. The home page `app/page.tsx` is a single client component that renders them all. Most content changes only touch `app/data.ts`.
- **Blog posts are MDX pages** at `app/blog/<slug>/page.mdx`, handled by `@next/mdx` (`pageExtensions` in `next.config.mjs` includes `md`/`mdx`). A post's SEO comes from an `export const metadata = {...}` inside its MDX file. Posts are **not auto-discovered**: to list one on the home page, add an entry to `BLOG_POSTS` in `app/data.ts`.
- `app/blog/layout.tsx` wraps every post with the prose styling, scroll progress bar and copy-URL button.
- `mdx-components.tsx` (at the repo root, as Next requires) supplies the `<Cover src alt caption />` component for MDX and highlights code blocks with `sugar-high`.
- `components/ui/` holds animation primitives copied from Motion-Primitives (spotlight, magnetic, morphing-dialog, text-effect, and so on). Edit them in place; they are not an npm dependency.
- `lib/utils.ts` provides `cn()` (clsx + tailwind-merge). `lib/constants.ts` holds `WEBSITE_URL`.
- Theming: `next-themes` with class-based dark mode. Use `dark:` Tailwind variants. Tailwind v4 is configured in CSS (`app/globals.css`); there is no `tailwind.config`.
- Path alias: `@/*` maps to the repo root.

## Images and deployment

- Remote images used with `next/image` must have their host in `images.remotePatterns` in `next.config.mjs`. Currently allowed: `cdn.cosmos.so` and `opengraph.githubassets.com`. Project cards use GitHub OpenGraph URLs.
- Production runs on **Cloudflare Workers** via `@opennextjs/cloudflare`. The config is in `wrangler.jsonc`: Worker `yusupmaulana`, custom domains `yusupmaulana.com` and `www.yusupmaulana.com`, and an `IMAGES` binding that serves `next/image` optimization. Build output goes to `.open-next/`.
- **Next.js is pinned to `~16.3.8`.** Next 16.4 emits `.next/server/preview-props.json`, which `@opennextjs/cloudflare` 1.20.10 can't load, so every route returns a 500. Before upgrading Next, check adapter support and test with `npm run preview`.
- `output: 'standalone'` and the `Dockerfile` (node:20-alpine on port 3000) are still there as an alternative to the Workers deploy.
- `app/robots.ts` points to `/sitemap.xml`, but no `app/sitemap.ts` exists yet.
