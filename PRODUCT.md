# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, weighted equally. Neither leads.

- **Engineers and hiring teams sizing Jason up.** Recruiters, hiring managers and engineers who arrive from a link or his GitHub profile and skim for three answers: what has he built, how deep does it go, how do I reach him. The bio names infrastructure, networking and latency as where he's heading, so those readers matter, but the site isn't pitched at one specialty.
- **Peers and tinkerers.** Self-hosters, homelab people, Apple-platform developers and the open-source crowd, who come for the projects and read for the detail.

The site has to look credible to a hiring engineer and interesting to a peer at the same time.

## Product Purpose

zhong.au is Jason Zhong's personal site: who he is, what he has built, and how to reach him. It replaces a version that's years out of date and auto-listed every GitHub repo, including forks, with a curated, hand-written record.

Success: a visitor leaves with an accurate picture of his range (networks, homelabs, energy optimisation, local AI, native Apple apps, web) and how deep each piece goes, and anyone who wants to talk knows to email him. The site carries no explicit "open to work" signal. The bio and projects do that job implicitly.

## Positioning

Default tagline: "I build fast, private software that runs on hardware I own."

What sets him apart is work that sits close to the metal and stays local: Proxmox homelab infrastructure, UniFi networking, a linear-programming optimiser driving a solar battery over Modbus, local LLM document pipelines, e-ink dashboards and native SwiftUI apps. He builds and runs all of it end to end himself. A template portfolio of web apps can't truthfully claim that.

Boundary: "hardware I own" describes his projects, not this website. The site runs in Docker on rented infrastructure, so no copy, status line or detail may claim it is self-hosted or served from the homelab.

## Operating Context

- Visitors arrive by direct link or from GitHub (ZhongDev), on phones and desktops alike.
- Jason updates the content himself, occasionally. The "Now" block is date-stamped (currently Nov 2026). Projects, experience, skills and "Now" live in typed data files, so he can edit them without touching layout.
- Deploy: a Docker image published to Docker Hub as `zhongau/zhong-au`, run on a VPS/cloud host behind a reverse proxy (e.g. nginx) for HTTPS.
- The repository is public under GPL-3.0. Everything committed (code, comments, commit messages, docs) must be safe to publish.

## Capabilities and Constraints

- **Pages:** Home, About, Projects. Contact is not a separate page: it closes every page in the site footer, and the nav's Contact link jumps to it in place (`#contact`). The existing URLs `/about`, `/projects` and `/contact` must keep working; `/contact` permanently redirects to `/#contact`.
- **Home:** hero (name, tagline, sub-line), short about blurb, 3–4 featured projects, link to the full projects page, date-stamped "Now" block.
- **About:** bio, education, general experience, grouped skills, languages spoken. Experience is described in general terms only. Never name employers.
- **Projects:** curated, typed data. Each entry has a title, a status (Shipped / In progress / Ongoing), a description, tech tags, and optional GitHub or website links. Featured projects get rich treatment; the archive is a compact list. Many projects have no public repo, so missing links must be handled gracefully. Never auto-list GitHub repos. Any live GitHub data is fetched at build time, excludes forks, and falls back cleanly when the API fails. Never list forks, `ZhongDev.github.io` or the university capstone repo.
- **Contact:** email (jason@zhong.au) plus GitHub. No contact form unless hosting supports one cleanly, and ask first.
- **Theme:** light and dark modes. Follows `prefers-color-scheme` by default, with a manual toggle that persists.
- **Language:** English-only, but Chinese and Japanese text (中文, 日本語) appears in the content and must render well with a sensible font fallback.
- **Technical:** current stable Next.js (App Router) and TypeScript. Static export where possible. One styling approach (Tailwind or CSS Modules), used consistently. `next/image` and self-hosted fonts via `next/font`. Minimal client-side JS. Lighthouse 95+ in every category.
- **SEO:** per-page titles and descriptions from the content brief; Open Graph and Twitter cards with a generated OG image; `sitemap.xml`, `robots.txt`, canonical URLs and a favicon set.
- **Privacy:** no analytics or third-party trackers. A privacy-friendly option may be suggested, never installed.
- **Secrets:** never commit them. Provide `.env.example`, and keep every other `.env*` file gitignored.
- **Refresh workflow:** the branch, commit sequence and approval gate for the 2026 refresh are in `docs/site-refresh-prompt.md`.

Open decisions:
- Whether the container serves a static export or a Next.js server. This is settled in the refresh plan.
- Whether to keep any live GitHub data (e.g. stars).
- The final tagline. The first option in the content brief is the default; the other two stay as listed alternatives.

## Brand Commitments

- **Identity:** Jason Zhong · zhong.au · GitHub `ZhongDev` · displayed location "Sydney, Australia".
- **Site title:** "Jason Zhong — Engineer, Sydney". The meta description comes from the content brief.
- **Voice:** first person, plain and specific, lightly dry. Understatement and self-deprecation do the personality work ("grown well beyond what's reasonable", "It does.", "something I probably should have just bought"). Concrete nouns over adjectives. No hype, no buzzwords. Copy is used close to verbatim, with light edits for flow and length only.
- **Design direction:** set by the user in `docs/site-refresh-prompt.md` and binding on visual work: "a good engineer's personal site, not a template portfolio". A nod to the local-first theme is welcome if it stays tasteful, never a gimmick terminal UI, and it must respect the positioning boundary above.

## Evidence on Hand

- `docs/content-brief.md`: the source of truth for all copy. It covers site meta, three tagline options, the sub-line, about blurb, "Now", bio, education (UNSW Sydney, BSc Computer Science with Distinction, 2021–2024), experience, skills, languages, six featured projects with descriptions and tags, a ten-item archive, and contact.
- `docs/site-refresh-prompt.md`: the refresh goals, plus the technical, SEO and accessibility requirements.
- Public repos on github.com/ZhongDev for Youtube-Karaoke-App, webcon-sdvx, maimai-webcon, Ardducky and the archive projects. The homelab, document pipeline and e-ink dashboards have no public repo.
- Existing assets: `zhong-au/public/images/github-mark.svg`, `github-mark-white.svg` and `zhong-au/app/favicon.ico`.
- Absent, and not to be fabricated: logo, headshot, project screenshots or photos, testimonials, employer names, job titles, dates beyond the brief, metrics, press. Only personal details in the content brief may be used. Nothing is pulled from GitHub profiles, commit history or anywhere else.

## Product Principles

1. **The brief is the record.** Copy comes from `docs/content-brief.md` near-verbatim. Nothing is invented or sourced from elsewhere.
2. **Curated over complete.** Show chosen work with an honest status. The archive stays compact, and forks and noise stay out.
3. **Readable at two depths.** A hiring engineer gets the range in a skim; a peer finds the real detail (Modbus setpoints, forced alignment, Tailscale) on a read.
4. **Practise the tagline honestly.** Fast, private, minimal JS, no trackers. Local-first shows through the work and is never claimed for the site's own hosting.
5. **Cheap to keep current.** Content lives in typed data and "Now" carries its date, so updates never mean touching layout.

## Accessibility & Inclusion

WCAG AA contrast; semantic HTML with correct heading order; visible focus states; respect `prefers-reduced-motion`; mobile-first responsive layout; reliable CJK rendering with a sensible font fallback.
