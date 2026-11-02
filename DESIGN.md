---
name: zhong.au
description: Jason Zhong's personal site, drawn on one day's dispatch-interval grid.
colors:
  ground: "#f3f5f5"
  ink: "#14171a"
  ink-2: "#3a4148"
  ink-3: "#4b525a"
  rule: "#c3c9ce"
  hair: "#e1e5e7"
  accent: "#2b3cf0"
  accent-ink: "#ffffff"
  accent-wash: "rgb(43 60 240 / 0.1)"
  block-ev: "rgb(20 23 26 / 0.12)"
  ground-dark: "#0e1113"
  ink-dark: "#e6e9ec"
  ink-2-dark: "#b4bcc3"
  ink-3-dark: "#99a2aa"
  rule-dark: "#2f363c"
  hair-dark: "#1b2024"
  accent-dark: "#8c96ff"
  accent-ink-dark: "#0e1113"
  accent-wash-dark: "rgb(140 150 255 / 0.16)"
  block-ev-dark: "rgb(230 233 236 / 0.16)"
typography:
  display:
    fontFamily: "Archivo, PingFang SC, Hiragino Sans, Noto Sans CJK SC, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, min(4.4vw, 7vh) + 0.75rem, 4.75rem)"
    fontWeight: 430
    lineHeight: 1.02
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 100"
  display-strong:
    fontFamily: "Archivo, PingFang SC, Hiragino Sans, Noto Sans CJK SC, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, min(4.4vw, 7vh) + 0.75rem, 4.75rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 122"
  headline:
    fontFamily: "Archivo, PingFang SC, Hiragino Sans, Noto Sans CJK SC, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 1.1rem + 0.9vw, 1.875rem)"
    fontWeight: 620
    lineHeight: 1.15
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 114"
  title:
    fontFamily: "Archivo, PingFang SC, Hiragino Sans, Noto Sans CJK SC, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 620
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "Archivo, PingFang SC, Hiragino Sans, Noto Sans CJK SC, system-ui, sans-serif"
    fontSize: "clamp(1.1875rem, 1rem + 0.55vw, 1.4375rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Archivo, PingFang SC, Hiragino Sans, Noto Sans CJK SC, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  readout:
    fontFamily: "Archivo, PingFang SC, Hiragino Sans, Noto Sans CJK SC, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.3
    fontFeature: "'tnum' 1"
    fontVariation: "'wdth' 85"
  label:
    fontFamily: "Archivo, PingFang SC, Hiragino Sans, Noto Sans CJK SC, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 560
    letterSpacing: "0.01em"
    fontFeature: "'tnum' 1"
    fontVariation: "'wdth' 85"
rounded:
  none: "0px"
  marker: "50%"
spacing:
  unit-gap: "1px"
  chip-y: "0.25rem"
  inset: "0.5rem"
  text: "1.25rem"
  block: "1.75rem"
  section: "clamp(3.5rem, 2rem + 6vw, 7rem)"
components:
  link-strong:
    textColor: "{colors.accent}"
    rounded: "{rounded.none}"
  link-quiet:
    textColor: "{colors.ink-3}"
  nav-link:
    textColor: "{colors.ink}"
    padding: "0.375rem 0"
  icon-button:
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    height: "2.5rem"
    padding: "0 0.625rem"
  icon-button-hover:
    backgroundColor: "{colors.hair}"
  inverted-tag:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    typography: "{typography.readout}"
    rounded: "{rounded.none}"
    padding: "0.25rem 0.5rem"
  sched-block-charge:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    typography: "{typography.label}"
    height: "2rem"
  sched-block-discharge:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    typography: "{typography.label}"
    height: "2rem"
  sched-block-ev:
    backgroundColor: "{colors.block-ev}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    height: "2rem"
  sched-block-hold:
    textColor: "{colors.ink-2}"
    typography: "{typography.label}"
    height: "2rem"
  station:
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    height: "1.75rem"
  station-on:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    typography: "{typography.label}"
    height: "1.75rem"
---

# Design System: zhong.au

## Overview

**Creative North Star: "Dispatch Interval"**

The page is drawn on one day of the wholesale electricity market. A full-bleed hairline grid of interval columns is the ground of every surface, running unbroken from the header to the footer, with a heavier rule every six hours. Content does not sit in boxes on top of that ground; it snaps to the columns, the way prices and battery actions snap to dispatch intervals. Sections are separated by full-width horizontal rules, never by cards or tinted panels.

The palette is a cool neutral paper (deep graphite in dark), graphite ink in three strengths, and one cobalt accent. Type is a single grotesk, Archivo, whose width axis carries the voice: widened for emphasis and headings, condensed for chart and status labels, with tabular figures wherever time or data appears. Shape is square throughout; the only round form is the chart's data dot.

Density is calm and editorial at the section level (generous vertical rhythm, long measures capped in em/ch) and tight at the data level (12px condensed labels, 1px gaps between units). Motion is restrained to one authored moment, the price trace drawing left to right on load, plus quick, snapping state transitions. Everything is static under reduced motion.

**Key Characteristics:**
- Full-bleed interval grid as the page ground: 48 half-hour columns from 1024px, 24 hourly columns below, heavier rule every quarter of the width (six hours).
- Content aligns to grid columns, with a constant 0.5rem inset from the column line.
- One cobalt accent; graphite ink in three strengths; no gradients, no glows.
- One family, Archivo, with the width axis as voice and tabular figures for data.
- Square corners, 1px rules, no elevation.
- Real data draws solid; illustrative data draws dashed and is labelled as such.

## Colors

A cool, near-monochrome graphite system with a single saturated cobalt; dark mode inverts ground and ink and lightens the cobalt rather than introducing new hues.

### Primary
- **Dispatch Cobalt** (accent; dark: accent-dark): the price trace, links, focus outlines, text selection, the crosshair, the Now marker, and the Charge schedule block. Text on a cobalt fill uses accent-ink.
- **Cobalt Wash** (accent-wash): tints the area of the trace that falls below the zero line. Used only as a fill for a data region, never for a background panel.

### Neutral
- **Cool Paper** (ground; dark: Deep Graphite, ground-dark): the page background, and the text colour on inverted ink units.
- **Graphite Ink** (ink): primary text, the zero-price line, and inverted fills (Discharge block, active station, readout, Now stamp, skip link).
- **Slate Ink** (ink-2): secondary text such as the hero sub-line, project descriptions, chart caption and Hold labels.
- **Muted Slate** (ink-3): tertiary text: footer, tags, axis labels, legend, status key, "No public repo". Also the outline of the Hold block.
- **Six-Hour Rule** (rule): the heavier grid lines, section and header/footer rules, project row dividers, empty-station outlines, quiet-link underlines and nav hover underlines.
- **Interval Hair** (hair): the per-interval grid lines and the icon-button hover fill.
- **EV Block Tint** (block-ev): translucent ink fill for the EV schedule block.

### Named Rules
**The One Cobalt Rule.** Cobalt marks what moves or can be acted on: the data trace, links, focus, the crosshair and markers. It is never a background panel, a decorative stripe or a heading colour.

**The Inversion Rule.** Emphasis without cobalt is ink-on-ground inverted to ground-on-ink, as in the readout, the Now stamp, the active station and the Discharge block. In dark mode the same tokens flip, so the inversion survives.

## Typography

**Display Font:** Archivo (variable, with the wdth axis loaded via next/font), falling back to PingFang SC, Hiragino Sans, Hiragino Kaku Gothic ProN, Noto Sans CJK SC, Noto Sans JP, Microsoft YaHei, Yu Gothic, system-ui, sans-serif
**Body Font:** Archivo (same stack)

**Character:** One grotesk family used at several widths and weights. Wide and heavy reads as a name or a heading; normal width carries prose; condensed and small reads as an instrument label. The CJK fallbacks are part of the stack because Chinese and Japanese text appears in the content.

### Hierarchy
- **Display** (430, fluid up to 4.75rem, 1.02): the single hero heading. The name inside it is set as **Display Strong** (700, wdth 122), and the tagline continues at regular width in the same line. Balanced wrapping.
- **Headline** (620, fluid 1.375 to 1.875rem, 1.15, wdth 114): section titles (About, Selected work, Now, Contact), placed in the left label columns.
- **Title** (620, 1.375rem, 1.2): project names.
- **Lead** (400, fluid 1.1875 to 1.4375rem, 1.55, max 36em): the opening paragraph of a section.
- **Body** (400, 1.0625rem, 1.6): running text; project descriptions cap at 66ch, the hero sub-line at 34em.
- **Readout** (400, 0.8125rem, 1.3, wdth 85, tabular): chart readout, legend, Now stamp.
- **Label** (560, 0.75rem, +0.01em, wdth 85, tabular): schedule blocks, station cells, axis labels, the status key. Sentence case, not uppercase.

UI text (nav, icon buttons, link rows, chart caption) sits at 0.9375rem; footer and tags at 0.875rem. The site name in the header is 600 at 1rem.

### Named Rules
**The Width-as-Voice Rule.** Change emphasis with the width axis before reaching for size or colour: widened (114 to 122) for headings and the name, 100 for prose, condensed (85) for data and status labels.

**The Tabular Time Rule.** Every time, interval or data label uses tabular figures (all `time` elements, the readout and the axis), so values do not jitter as they change.

## Layout

The grid is a CSS custom property, `--cols`: 24 columns below 1024px and 48 columns from 1024px. The sheet draws the interval hairlines (hair) at one column each and the heavier rule (rule) every 25% of the width, plus a closing rule at the right edge. Every row (header, hero, sections, footer, chart) is a grid of the same columns, and nested blocks use subgrid so they stay on the same lines.

- **Margins:** content starts at column 2 and ends one column before the edge, so the outer column on each side is the page margin.
- **Inset:** text blocks sit 0.5rem in from their column line, so type never touches a grid line.
- **Label / body split:** below 768px everything stacks across columns 2 to -2. From 768px section titles take columns 2 to 7 and bodies start at column 8. From 1024px titles take 2 to 11, bodies 13 to 41, and wide content (contact) 13 to -2. The hero heading spans columns 2 to 36 on wide screens.
- **Full-bleed data:** the chart, its schedule and its axis span every column, 1 to -1. The chart always plots 48 half-hour intervals; on a 24-column grid each hairline covers two intervals.
- **Breakpoints:** 640px (header goes to one row), 768px (label/body split), 1024px (48 columns), plus a max-height 800px query that shortens the chart so it fits in the first viewport on short laptop screens.
- **Rhythm:** sections pad by a fluid 3.5 to 7rem and are divided by a 1px full-width rule. Paragraph spacing inside sections is 1.25rem, and follow-on links sit 1.75rem below. Project rows pad 1.75 to 2rem top and 2 to 2.25rem bottom.

**The Snap Rule.** Every element starts and ends on an interval column. If a placement needs a value that is not a column boundary plus the inset, the placement is wrong.

**The No Card Rule.** Group content with rules and column position, never with boxed, filled or shadowed containers. The grid stays visible behind every section.

## Elevation & Depth

The system is flat, with no drop shadows anywhere. Depth is expressed with line weight (hair versus rule versus ink) and inversion (ground-on-ink). The few `box-shadow` declarations in the build are all 1px inset strokes used as borders that do not change layout: the sheet's right edge, empty station cells and Hold blocks. They are not elevation.

**The Flat Sheet Rule.** Nothing floats above the grid. Overlays such as the chart readout are inverted ink chips sitting flush on the plot, not lifted cards.

## Shapes

Corners are square throughout (0px radius): links, buttons, chips, schedule blocks, station cells and focus outlines. The one round form is the chart's data dot (an 11px circle with a 2px ground-coloured ring), which marks the current price. Strokes are 1px for structure and 2px for things that move or indicate state (trace, crosshair, focus outline, nav current underline). Repeated units such as schedule blocks and station cells are separated by 1px gaps, never by rounded pills.

Icons are one family on a 16px grid with a 1.5px stroke, square caps and mitred joins, inlined as SVG and drawn in currentColor. The GitHub mark is the one filled exception.

## Components

### Links
Underlined text, never boxed buttons.
- **Strong link:** cobalt, 600 weight, 1px underline offset 0.25em, thickening to 2px on hover (120ms, expo-out). Often carries a trailing 16px arrow icon (down for in-page, right for internal, up-right for external at 14px).
- **Quiet link:** inherits its colour (ink-3 in the footer) with a rule-coloured underline, which turns to currentColor and ink on hover.
- **Focus:** a 2px cobalt outline offset 3px, global to all focusable elements.

### Icon button
- **Shape:** square, 2.5rem tall, at least 2.5rem wide, 0.625rem horizontal padding, no border.
- **States:** a hair fill on hover (120ms). Used for the GitHub link (label visible from 1024px) and the theme toggle, which swaps moon and sun icons.

### Navigation
- 0.9375rem text, 1.5rem gaps (2rem from 1024px). The underline is transparent at rest, rule-coloured on hover, and cobalt for the current page (2px, offset 0.4em).
- Below 640px the nav drops to a second header row under the site name.
- The header and footer are grid rows bounded by 1px rules.
- The footer opens with the Contact section (`#contact`), so every page closes with the address; the nav's Contact link is an in-page anchor, never a current page. A quieter colophon row (name, location, site source) follows it.

### Dispatch chart (signature)
- A dashed (6/4) 2px cobalt step line plots prices that hold for a whole interval. The area below a solid 1px ink zero line is tinted with the cobalt wash. A "Zero price" label sits under the line in condensed ink-3.
- Beneath it is a schedule of full-height blocks on the 48-interval grid: Charge (cobalt fill), Discharge (ink fill), EV (translucent ink), Hold (inset ink-3 outline). Labels on blocks narrower than 5 intervals are visually hidden below 1024px.
- A 2px cobalt crosshair and the dot snap interval by interval with pointer drag or arrow, Page and Home/End keys (it behaves as an ARIA slider). An inverted readout chip shows time, price state and battery action. It parks top-left below 768px; from 768px it rides beside the crosshair and flips sides after interval 30.
- The axis labels 00:00 to 24:00 at six-hour quarters, in tabular condensed ink-3.
- The legend carries a dashed key line and the text "Illustrative day · not live data".
- **Motion:** the trace reveals left to right with a clip-path over 1.8s (expo-out, 0.15s delay). Crosshair, dot and readout move in 90ms. Both are disabled under reduced motion.

### Status stations
- Each project row shows three fixed station cells, always in the order Ongoing, In progress, Shipped, named once by a key row above the list. Only the active cell is filled (ink with ground text) and labelled; the others are empty 1px rule outlines. Cells are 1.75rem tall with 1px gaps, condensed 0.75rem labels at 560.
- Project rows are separated by 1px rules. On wide screens the title, stations and meta sit in the left 9 columns and the description in columns 12 to 35. Tags are ink-3 text joined by middle dots, not pills.

### Inverted tag
- Ground text on an ink fill, padded 0.25rem by 0.5rem, condensed 0.8125rem. Used for the chart readout and the dated Now stamp.

### Contact address
- The email address is set as an oversized cobalt link (600, fluid 2 to 5.25rem, wdth 116, -0.035em) with a 0.05em underline that thickens to 0.09em on hover. It may wrap anywhere.

### Now marker
- A 1px cobalt vertical line runs the full height of the Now section on the column line where the body begins, like a "now" cursor on the day.

## Do's and Don'ts

### Do:
- **Do** place every block on interval columns with the 0.5rem inset, and use subgrid for nested rows.
- **Do** keep the hairline grid visible and unbroken from header to footer on every surface in this world.
- **Do** reserve cobalt for the trace, links, focus, selection, crosshair and markers, and the Charge block.
- **Do** use the width axis for emphasis: wdth 114 to 122 for headings and names, 85 for data labels.
- **Do** use tabular figures for every time and data value.
- **Do** draw illustrative data dashed and label it as illustrative; draw real data solid.
- **Do** keep statuses in fixed station columns (Ongoing, In progress, Shipped), in the same order everywhere.
- **Do** keep motion to the single trace-drawing moment plus short snapping transitions, all static under reduced motion.
- **Do** define every colour for both themes through the same custom properties.

### Don't:
- **Don't** use cards, tinted panels, drop shadows or rounded containers to group content; use rules and columns.
- **Don't** use gradients or glows.
- **Don't** introduce a second accent hue or a second type family.
- **Don't** set uppercase tracked labels or kicker lines above headings; the only small labels are condensed, sentence-case data labels.
- **Don't** render tech tags as pills; they are muted text joined by middle dots.
- **Don't** add terminal or fake-shell styling, or dashboard chrome such as KPI tiles and gauges.
- **Don't** show prices, currency or metrics as figures on illustrative charts.
