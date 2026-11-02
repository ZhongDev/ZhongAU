# zhong.au Site Refresh — Claude Code Brief

You're revamping my personal website, zhong.au. This repo is the current site (Next.js, github.com/ZhongDev/ZhongAU). It's years out of date. I want a full refresh of the content, structure and design, and I'm happy for you to modernise the stack where it helps.

**This is a public repository.** Everything you write (code, comments, commit messages, docs) must be safe to publish.

## Source of truth for content

All copy lives in `docs/content-brief.md`. Use it close to verbatim. Light edits for flow and length are fine. Do not invent facts, employers, job titles, dates, metrics or projects. Where the brief offers options (e.g. taglines), use the first one and list the alternatives in your final summary.

Only use personal details that appear in the brief. Don't pull extra information from GitHub profiles, commit history or anywhere else.

## Step 0 — Investigate before changing anything

1. Read the whole repo: framework version, router (pages vs app), styling approach, how `/projects` currently gets its data (I believe it fetches every GitHub repo, including forks), the deploy configuration, and which assets in `/public` are still used.
2. Report back with a short summary and a plan: what you'll keep, upgrade, replace or delete.
3. Wait for my OK before any large deletions or dependency changes.

## Goals

- **Pages:** Home, About, Projects, Contact. Keep the existing URLs (`/about`, `/projects`, `/contact`) working so old links don't break.
- **Home:**
  - Hero with name, tagline and sub-line
  - Short about blurb
  - 3–4 featured project cards
  - Link to the full projects page
  - A small date-stamped "Now" block
- **About:** bio, education, general experience, grouped skills, and languages spoken.
- **Projects:**
  - Use a curated, typed data file (e.g. `src/content/projects.ts`). Each entry has: title, status (shipped / in progress / ongoing), description, tech tags, and optional GitHub or website links.
  - Show featured projects as rich cards and the archive as a compact list.
  - Many projects have no public repo, so handle missing links gracefully.
  - Don't auto-list GitHub repos. If you keep any live GitHub data (e.g. stars), fetch it at build time, exclude forks, and fall back cleanly if the API fails or is rate-limited.
- **Contact:**
  - Email plus GitHub.
  - No contact form unless the deploy target supports one cleanly. Ask first.

## Design direction

- Clean, confident and a bit technical: a good engineer's personal site, not a template portfolio. Lots of whitespace, strong typography, restrained colour with one accent.
- A subtle nod to the "local-first / runs on my own hardware" theme is welcome, such as a monospace detail or a small status line. Keep it tasteful, not a gimmick terminal UI.
- Light and dark mode:
  - Follow `prefers-color-scheme` by default.
  - Offer a manual toggle that persists.
- Responsive, designed mobile-first.
- Accessible:
  - Semantic HTML and correct heading order
  - Visible focus states
  - WCAG AA contrast
  - Respect `prefers-reduced-motion`
- The site is English-only, but CJK text (中文, 日本語) must render well with a sensible font fallback.

## Technical requirements

- Upgrade to the current stable Next.js (App Router) with TypeScript, if it isn't already. Use static export where possible.
- Styling: choose Tailwind or CSS Modules, use it consistently, and briefly justify the choice.
- SEO:
  - Per-page titles and descriptions taken from the brief
  - Open Graph and Twitter cards, with a generated OG image
  - `sitemap.xml`, `robots.txt`, canonical URLs and a favicon set
- Performance:
  - Target Lighthouse 95+ in every category
  - Use `next/image` and self-hosted fonts via `next/font`
  - Keep client-side JS to a minimum
- Keep content (projects, experience, skills, "now") in typed data files separate from components, so it can be updated without touching layout.
- Once I've approved the plan, remove dead code, unused assets and stale dependencies.
- Update the README to explain how to edit content, run locally and deploy.
- No analytics or third-party trackers. If you think analytics would help, suggest a privacy-friendly option but don't install it.
- Never commit secrets. Add `.env.example` with placeholder values, and make sure `.env*` (except the example) is gitignored.

## Workflow

- Work on a new branch: `site-refresh-2026`.
- Commit in logical steps:
  1. Upgrade and scaffold
  2. Layout and design system
  3. Pages
  4. Projects data
  5. SEO
  6. Cleanup
- Run the build and lint and fix every error before telling me you're done.
- Finish with a summary that covers:
  - What changed
  - Anything you couldn't do
  - The alternative copy options from the brief
  - A description of each page in light and dark mode
