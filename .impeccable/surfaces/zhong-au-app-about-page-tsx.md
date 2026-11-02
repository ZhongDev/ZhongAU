---
version: 1
slug: "zhong-au-app-about-page-tsx"
primary_target: "zhong-au/app/about/page.tsx"
related_targets: ["zhong-au/content/about.ts", "zhong-au/content/skill-refs.ts"]
---

# About (/about)

Mode: Read. Production-ready About, responsive, light and dark. Inherits the Dispatch Interval world (DESIGN.md); no system change.

## Brief

- Audience: hiring engineers and recruiters scan for education, experience and skills; peers read the bio and follow a skill to the work behind it. Arrives from Home's "More about me", the nav, or a sent link.
- Content: content brief copy verbatim. Bio (four paragraphs), education, experience (three general lines, no employers), six skill groups, languages spoken, location.
- Skills link to projects: featured-project tags plus archive projects whose one-line description names the tech, via an alias list. Short project labels (Homelab, Document pipeline, Karaoke app, E-ink dashboards, webcon, Ardducky); archive repos keep their names. Links go to `/projects#<slug>`.
- Approved new copy: facts heading "Background"; skills note "Where a skill shows up in my projects, the project is linked."; title "About — Jason Zhong"; Home sub-line as the meta description.
- Anti-goals: time axis, print styles or PDF, proficiency ratings or bars, photo, employer names, cards, client JavaScript.

## Direction contract

THESIS: About is a component datasheet front page over a manual's back index: the bio reads as the description, the facts sit in a ruled table beside it, and every skill points at the project that proves it. It refuses the CV template of a headshot, a timeline and skill bars.

OWN-WORLD: The Dispatch Interval sheet: full-bleed 48-interval hairline grid with heavier six-hour rules, cool neutral ground, graphite ink, one cobalt accent for links and markers. Archivo with width as voice: wide bold title, condensed labels, tabular years. Ruled rows, dotted index leaders, no cards.

STORY: The reader learns where Jason studied and what he has done in one scan, reads the bio in his voice, sees that the skills are backed by real projects, follows one, and ends at the email.

FIRST VIEWPORT: Header with About current. "About" in the wide display cut, upper left. Left half: the four bio paragraphs in a reading column of about 70 characters. Right half from the noon rule: a ruled Background table (Education, Experience, Languages spoken, Based in). A heavier rule close below the bio, then the Skills section in Home's label and body rhythm: three index columns on the quarter lines, dotted leaders to cobalt project links. The bio keeps a reading measure of about 72 characters, so on a 1440x900 screen the Skills rule sits at the bottom edge and the heading follows one short scroll down (user's choice over widening the bio to about 84 characters to fit Skills in).

FORM: Datasheet + Index, the user's steer over a re-roll (dealt alongside Facing Pages, Chapters and Contents Rail). seed:3d779f1ef5ee1274. Signature: the skills index whose references carry a reader from a claim to its proof. Motion: none on this page; reading stays still.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Open decisions

- The landing marker on `/projects#<slug>` is built with the Projects page; until then links land on the old page.
