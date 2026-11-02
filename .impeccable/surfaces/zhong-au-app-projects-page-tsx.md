---
version: 1
slug: "zhong-au-app-projects-page-tsx"
primary_target: "zhong-au/app/projects/page.tsx"
related_targets: ["zhong-au/content/projects.ts"]
---

# Projects (/projects)

Mode: Read. Production-ready Projects page, responsive, light and dark. Inherits the Dispatch Interval world (DESIGN.md); no system change.

## Brief

- Audience: hiring engineers skim the whole record and each project's status; peers read the detail and follow a repo. Arrives from Home's "All projects", the nav, an About skill link (`/projects#<slug>`), or a sent link.
- Content: content brief copy verbatim. Six featured projects (title, status, description, tags, links or "No public repo") and the ten-item archive (repo name, one-liner, GitHub link), in the brief's order. Fully static: no GitHub data at build or request time.
- Approved copy: title "Projects — Jason Zhong"; meta description "Projects by Jason Zhong, from a homelab energy optimiser and a local document pipeline to desktop apps, e-ink dashboards and an archive of older repos."
- Removes the old request-time GitHub fetch and `components/ProjectCard.tsx` (used only by the old page). Home's Selected work stays untouched.
- States: an empty status keeps its column with a count of 0; columns end at uneven heights and one rule closes the board; long repo names break at hyphens on phones.
- Anti-goals: filters, sorting, client JavaScript, kanban chrome (card boxes, drag handles, column chrome), tech pills, progress bars, live GitHub data, detail pages.

## Direction contract

THESIS: Projects turns the day's four six-hour quarters into a status board: Ongoing, In progress, Shipped and Archive each own a quarter of the sheet, so a project's place on the grid is its status and the whole record reads on one sheet. It refuses the portfolio card grid with tech pills and the repo dump the old page was.

OWN-WORLD: The Dispatch Interval sheet: full-bleed 48-interval hairline grid whose heavier quarter rules become the board's column lines, cool ground, graphite ink, one cobalt for links and the landing marker. Inverted ink station headings with tabular counts, outlined for Archive. Ruled entries, no cards, tags as ink-3 middle-dot text, the wide bold page title.

STORY: The reader sees every project and its status at a glance, reads the ones that matter to them, follows a repo, and arriving from an About skill link lands on a marked entry.

FIRST VIEWPORT: Header with Projects current. "Projects" in the wide display cut, upper left. A rule, then four columns on the quarter lines, each headed by a full-width station cell: Ongoing 2, In progress 2 and Shipped 2 filled with ink, Archive 10 outlined. Beneath, ruled entries: title, description, tags, then links or "No public repo"; the archive's repo names in cobalt over their one-liners. At 1440x900 the first entry of every column shows above the fold. From 768 to 1279px a 2x2 board; one column on phones; order unchanged.

FORM: Quarter Board, position 7 of 7 on the ordered list (dealt by the roll beside Status Bands and Project Datasheets; the user locked it). seed:7cf8093e589015f0. Signature: the station columns themselves, and the landing: an About skill link arrives on its entry with a 2px cobalt marker on the entry's column line (CSS :target, no JavaScript). Motion: none; reading stays still.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Open decisions

- None. The chosen sketch is `.impeccable/mocks/decision/projects-board.html`.
