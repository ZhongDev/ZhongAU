---
version: 1
slug: "zhong-au-app-page-tsx"
primary_target: "zhong-au/app/page.tsx"
related_targets: []
---

# Home (/)

Mode: Persuade. Production-ready Home, responsive, light and dark.

## Brief

- Audience: hiring teams and peers, weighted equally (see PRODUCT.md). Skim for range and depth; read for detail.
- Action: "See the work" in the first viewport; email (jason@zhong.au) and GitHub at the close.
- Content: content brief copy near-verbatim. Hero (name, tagline option 1, sub-line), about blurb, four featured projects (Homelab & home energy optimisation, Local document pipeline, YouTube Karaoke App, webcon-sdvx / maimai-webcon), link to /projects, dated "Now" block, contact close (rendered by the site footer, so it closes every page; `/contact` redirects to `/#contact`).
- Proof: the hero chart dramatises the homelab optimiser's mechanism. Illustrative only: dashed, labelled "Illustrative day · not live data", no currency figures or metrics. The site never claims to be self-hosted.
- Anti-goals: terminal or fake-shell UI, dashboard chrome (KPI tiles, gauges), card grids with tech pills, gradients and glows, tracked mono labels, kicker labels above headings.

## Direction contract

THESIS: Home is one day on the wholesale electricity market: a price trace, the battery schedule it drives, and the engineer who wrote the optimiser that reads it. It refuses the centred-hero-plus-project-card-grid portfolio.

OWN-WORLD: Price and dispatch chart grammar. A full-bleed 48-interval hairline grid is the page's ground, with heavier rules every six hours, running unbroken from header to footer; no cards anywhere. A cool neutral ground (deep graphite in dark), graphite ink, and one cobalt accent reserved for the trace, links, focus and markers. One grotesk family with tabular figures, its width axis as voice. Real data draws solid; illustrative data draws dashed and labelled. Statuses hold fixed station columns (Ongoing, In progress, Shipped). Every repeated element is one unit at one size, snapped to interval columns.

STORY: The visitor sees a person whose software reads markets and drives real hardware, understands his range from four projects, believes the depth from the specifics, and emails him.

FIRST VIEWPORT: Grid edge to edge. Header row (name, Home, About, Projects, Contact, GitHub, theme). Upper left over about 30 columns: one display heading carrying name and tagline, sub-line below, "See the work" link. Lower band across all 48 columns: caption and illustrative label, dashed cobalt trace dipping below a solid zero line at midday with the below-zero window tinted, charge/hold/discharge/EV schedule blocks beneath, 00:00 to 24:00 axis, crosshair resting at 12:30 with readout.

FORM: Dispatch Interval, position 5 of 7 on the ordered list (assigned by the roll). seed:5f185f2e3719f047. Signature interaction: scrubbing or arrow-keying the chart snaps a crosshair interval by interval with a time, price-state and battery-action readout. Motion grammar: one authored moment, the trace drawing left to right on load (static under reduced motion).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Open decisions

- Exact accent value and face are chosen at build within the contract.
- Tagline alternatives (options 2 and 3) stay listed, not shown.
