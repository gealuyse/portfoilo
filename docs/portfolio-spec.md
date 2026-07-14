# Portfolio — Technical & Art Direction Specification

> **Source of truth for how the website is built and how it should feel.**
>
> This file owns the technical architecture, visual language, layout system, typography, spacing, components, evidence treatment, responsive behavior, accessibility, and implementation standards. It does **not** own final page wording or project facts; those belong in `site-content.md`.
>
> When the two files appear to conflict:
> - `site-content.md` controls **what is said and what may be claimed**.
> - This file controls **how that content is structured, rendered, and experienced**.
> - The implementation should be corrected to match the two source files. Existing code is not automatically authoritative.

**Last rewritten:** 2026-07-14  
**Design direction:** Personal Product System Portfolio  
**Visual narrative:** Complexity → Structure → Clarity  
**Project order:** CDP → 3BB Member → Counter Service POS

---

# PART 1 — PRODUCT AND EXPERIENCE PRINCIPLES

## 1.1 The site is a product system, not a gallery

The website should demonstrate the same qualities the portfolio claims:

- Clear hierarchy under complex content
- Reusable patterns instead of page-by-page invention
- Evidence before explanation
- Explicit status and contribution boundaries
- Restraint where familiarity or readability matters
- A coherent system that can be maintained after the current redesign

Every visual choice should help the reader answer one of these questions:

1. Where am I?
2. What problem was this designer working inside?
3. What did he personally change?
4. What evidence proves it?
5. What is the current status?

If an element does not support navigation, comprehension, evidence, or identity, it should be removed.

---

## 1.2 Art direction

The visual language combines three influences:

### Swiss / International Typographic Style

- Precise grid
- Strong alignment
- Clear typographic hierarchy
- Functional labels
- Minimal decoration
- Repetition through systems rather than templates that feel generic

### Editorial web design

- Large serif thesis statements
- Deliberate pacing
- Captions and marginal reasoning
- Long-form cases broken into readable chapters
- Contrast between narrative text and evidence

### Warm minimalism with blueprint discipline

- Warm paper-like backgrounds rather than pure white
- Dark ink rather than hard black
- Deep blueprint accents used for structure and interaction
- Hairline frames and technical labels
- Quiet confidence rather than agency-style spectacle

The site should feel designed, not decorated. Visual interest comes from composition, type scale, evidence, and rhythm.

---

## 1.3 Show, then explain

Case pages should reveal evidence before asking the reader to commit to long-form narrative.

Recommended order:

1. Hero and factual status
2. At a Glance
3. The Work, First
4. Situation and constraints
5. Decision chapters with related evidence
6. Current status and reflection
7. Case navigation

A fast-scanning reader should understand the contribution from the hero, At a Glance, evidence titles, and status alone. The full narrative should reward deeper reading rather than being required to decode the page.

---

## 1.4 Restraint rules

- Do not use decorative motion to make static work appear more substantial.
- Do not use extra cards, borders, or labels when spacing can create the relationship.
- Do not force every project into the same number of chapters or figures.
- Do not make an inherited-product case look like a blank-slate redesign.
- Do not turn the handwritten annotation system into a competing visual identity.
- Do not optimize every section for novelty. Repetition is useful when it builds orientation.

---

# PART 2 — SOURCE-OF-TRUTH AND FILE BOUNDARIES

## 2.1 Ownership

| Concern | Owning source |
|---|---|
| Final copy and project facts | `site-content.md` |
| Positioning and claim language | `site-content.md` |
| Page narrative order | `site-content.md` |
| Layout, tokens, typography, components | `portfolio-spec.md` |
| Accessibility and responsive behavior | `portfolio-spec.md` |
| Actual implementation | HTML/CSS/assets generated from both files |
| Old decisions and experiments | `archive/` only |

Do not duplicate final project copy in this specification. Component examples must use neutral placeholder text rather than stale production wording.

## 2.2 Change discipline

When implementation changes:

1. Confirm whether the change affects content, design system, or both.
2. Update the owning source file first.
3. Update the code.
4. Run the relevant acceptance checklist.
5. Archive superseded experiments instead of leaving contradictory instructions in active files.

---

# PART 3 — TECHNICAL ARCHITECTURE

## 3.1 Baseline

- Static semantic HTML pages
- One shared `style.css` for all current pages; keep page-specific composition inside the same system unless a future architectural decision explicitly changes this
- No framework required
- JavaScript is not required for the core experience
- Add JavaScript only for a functional need that cannot be met accessibly with HTML and CSS
- The site must remain readable and navigable if JavaScript fails

## 3.2 Page set

- `index.html`
- `cdp.html`
- `3bb-member.html`
- `counter-service-pos.html`

Project order and case navigation must remain:

1. Customer Data Platform
2. 3BB Member
3. Counter Service POS

Do not reintroduce removed projects without updating both source files and navigation intentionally.

## 3.3 Suggested file structure

```text
/
├── index.html
├── cdp.html
├── 3bb-member.html
├── counter-service-pos.html
├── style.css
├── assets/
│   ├── common/
│   ├── cdp/
│   ├── 3bb-member/
│   └── counter-service-pos/
├── docs/
│   ├── site-content.md
│   ├── portfolio-spec.md
│   └── archive/
└── README.md
```

## 3.4 HTML requirements

- One `<h1>` per page
- Heading levels must follow document hierarchy; never choose a heading level for visual size
- Use `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<figcaption>`, `<footer>`, `<dl>`, and lists where semantically appropriate
- Each major section needs an ID only when it is a navigation target
- Project facts should use a definition list or equally meaningful structure
- Evidence must use `<figure>` and `<figcaption>` unless the evidence is a live HTML specimen with its own labeled region
- Add a keyboard-accessible skip link
- Decorative SVGs must be hidden from assistive technology
- Meaningful diagrams require text alternatives or an adjacent explanation

## 3.5 CSS architecture

Use layers or clearly separated sections in `style.css`:

1. Reset and defaults
2. Design tokens
3. Base typography
4. Layout primitives
5. Shared components
6. Page composition
7. Utilities
8. Responsive overrides
9. Reduced-motion overrides

Prefer component classes and custom properties over deeply nested selectors. Avoid styling that depends on the exact order of unrelated elements.

---

# PART 4 — DESIGN TOKENS

## 4.1 Color system

The palette should remain warm, editorial, and technical.

### Core tokens

```css
:root {
  --paper: #fcfbf9;
  --paper-muted: #f5f2ed;
  --surface: #ffffff;
  --ink: #1c1b1a;
  --ink-soft: #5f5b56;
  --ink-faint: #8a857e;
  --line: #d8d3cc;
  --line-strong: #aaa39a;
  --blueprint: #173f67;
  --blueprint-soft: #dce8f2;
  --annotation: #34404c;
  --focus: #0b63ce;
  --danger: #a33a31;
  --success: #356b4a;
}
```

These are direction tokens, not permission to add many colors. Most of the interface should use paper, ink, and line. Blueprint is an accent for interactive or structural emphasis, not a section background applied everywhere.

### Contrast

- Normal body text must meet WCAG AA contrast
- Large display text must also remain readable on the paper background
- `--ink-faint` is for secondary non-essential labels only, never core body copy
- Links must not rely on color alone; use underline, weight, or another persistent indicator
- Focus color must remain visible on both paper and image-adjacent surfaces

## 4.2 Typography

### Families

- **Newsreader:** thesis statements, large editorial headings, selected pull lines
- **Inter:** body copy, navigation, metadata, captions, controls, labels
- **Caveat:** rare handwritten reasoning notes only
- System monospace may be used sparingly for technical indexes or code-like metadata when it improves structure

Do not add another primary type family.

### Type roles

```css
:root {
  --font-serif: "Newsreader", Georgia, serif;
  --font-sans: "Inter", Arial, sans-serif;
  --font-script: "Caveat", cursive;

  --step--1: clamp(0.75rem, 0.72rem + 0.12vw, 0.82rem);
  --step-0: clamp(1rem, 0.96rem + 0.18vw, 1.125rem);
  --step-1: clamp(1.25rem, 1.12rem + 0.52vw, 1.6rem);
  --step-2: clamp(1.65rem, 1.35rem + 1.05vw, 2.35rem);
  --step-3: clamp(2.2rem, 1.65rem + 2.1vw, 3.6rem);
  --step-4: clamp(3rem, 2rem + 4vw, 5.75rem);
}
```

These values may be tuned after browser review, but the role hierarchy must remain.

### Usage

- Hero H1: Newsreader, `--step-4`, tight but not compressed leading
- Case thesis: Newsreader, `--step-3`
- Section H2: Inter or Newsreader depending on function; parent hierarchy must remain unmistakable
- Chapter H3: Inter, `--step-1` or `--step-2`
- Body: Inter, `--step-0`, comfortable leading
- Kicker / metadata: Inter uppercase, `--step--1`, increased tracking
- Caption: Inter, `--step--1` to `--step-0`
- Annotation: Caveat, sized to remain legible but clearly secondary

### Readability

- Narrative line length: approximately 58–72 characters
- Captions: approximately 45–70 characters
- Avoid full-width long paragraphs on desktop
- Body line-height: approximately 1.55–1.75
- Large serif headings should not be set in all caps
- Uppercase labels must remain short and should not carry important prose

## 4.3 Spacing scale

Use the existing production spacing tokens. The scale is anchored to a 4px grid but begins at 8px for layout spacing. Never remap these token names casually; changing them would alter every page.

```css
:root {
  --sp-1: 0.5rem;   /* 8 */
  --sp-2: 0.75rem;  /* 12 */
  --sp-3: 1rem;     /* 16 */
  --sp-4: 1.25rem;  /* 20 */
  --sp-5: 1.5rem;   /* 24 */
  --sp-6: 2rem;     /* 32 */
  --sp-7: 3rem;     /* 48 */
  --sp-8: 4rem;     /* 64 */
  --sp-9: 6rem;     /* 96 */
  --sp-10: 8rem;    /* 128 */
}
```

### Rhythm law

`page-section gap > chapter/group gap > internal content gap > label-to-value gap`

Typical use:

- Major page section: `--sp-9` to `--sp-10`
- Chapter or evidence group: `--sp-7` to `--sp-8`
- Related content block: `--sp-5` to `--sp-6`
- Paragraph or row relationship: `--sp-2` to `--sp-4`
- Label to value: `--sp-1` to `--sp-2`

If a page feels flat, increase the relationship gap before adding a line or background.

## 4.4 Sizing and layout tokens

```css
:root {
  --page-max: 90rem;       /* 1440 */
  --content-max: 78rem;    /* 1248 */
  --text-max: 44rem;
  --gutter-mobile: 1rem;
  --gutter-tablet: 1.5rem;
  --gutter-desktop: 2rem;
  --grid-gap: 1.5rem;
  --hairline: 1px;
}
```

Treat these as a coherent starting system. Tune only after checking every page, not to fix one isolated section.

---

# PART 5 — GRID AND PAGE COMPOSITION

## 5.1 Breakpoint intent

Use content-driven breakpoints rather than device names. Recommended ranges:

- **Compact:** below 720px
- **Medium:** 720px–1079px
- **Wide:** 1080px and above
- **Large canvas:** 1440px and above, while content remains constrained by max-width

The design must not depend on exact popular device widths.

## 5.2 Global container

- Center the page inside `--page-max`
- Apply responsive outer gutters
- Keep primary content inside `--content-max`
- Allow evidence to become wider than narrative text when legibility requires it
- Do not allow long prose to span the full evidence width

## 5.3 Desktop grid

Use a 12-column grid with consistent gaps.

Recommended patterns:

- Homepage project row: index 1 column, text 5–6 columns, preview 5–6 columns
- Case hero: thesis 7–8 columns, facts 4–5 columns
- Narrative chapter: label 2–3 columns, body 5–6 columns, optional note or supporting element in remaining columns
- Evidence plate: 8–12 columns depending on the artifact
- At a Glance: three equal or proportionally balanced columns when copy length allows

The grid should align unrelated sections so the page feels like one system, not a sequence of independent cards.

## 5.4 Compact layout

Below the wide breakpoint:

- Collapse complex multi-column compositions into a single reading order
- Keep section label, heading, body, evidence, and caption adjacent
- Move metadata below the title
- Stack At a Glance anchors
- Place project previews after their descriptions
- Handwritten notes move inline under their anchor; connectors hide
- Do not preserve desktop whitespace at the cost of excessive scrolling

## 5.5 Section boundaries

**Space does the work; lines are the exception.**

Allowed divider use:

- Site navigation baseline
- Repeated homepage project rows
- Figure or specimen frames
- Reflection emphasis bar
- Case navigation top rule
- Footer top rule

Disallowed:

- A rule between every case chapter
- A rule touching the top or bottom of a figure
- Double borders around a component already placed on a bordered surface
- Rules used to compensate for insufficient spacing

A parent section must look more important than its child chapters through scale, position, and spacing. Never invert the hierarchy.

---

# PART 6 — SHARED PAGE SHELLS

## 6.1 Global navigation

Requirements:

- Name or wordmark on the left
- Work, About, Contact on the right
- Current-page state visible without relying only on color
- One structural baseline only
- Sticky behavior is optional; if used, it must not obscure anchors or consume excessive vertical space
- Mobile navigation should remain simple; avoid an elaborate menu animation for three links

## 6.2 Homepage shell

Order:

1. Navigation
2. Hero
3. Positioning bridge
4. Selected work
5. How I work
6. Collaboration
7. About
8. Contact
9. Footer

The selected work section must appear early enough that a recruiter reaches project evidence without reading a long personal manifesto.

## 6.3 Case shell

Order:

1. Navigation
2. Case hero
3. Fact strip
4. Honesty note
5. Cover or primary specimen
6. At a Glance
7. The Work, First
8. Situation and constraints
9. Decision chapters
10. Working with the team
11. Current status
12. Reflection
13. Case navigation
14. Footer

Case length may vary. Do not add empty sections merely to preserve identical structure.

---

# PART 7 — COMPONENT SYSTEM

## 7.1 Kicker

Purpose: category, section, or evidence orientation.

- Inter uppercase
- Short, factual text
- Increased tracking
- Secondary color
- Never use as the only heading for a major section

## 7.2 Fact strip

Purpose: separate factual context from narrative claims.

Recommended fields:

- Product status
- Contribution status
- Timeline or year
- Role
- Platform
- Team or scope

Implementation:

- Use a definition list
- Maintain equal label styling
- Allow wrapping without forcing narrow columns
- No top border when directly following a framed cover or figure
- On compact screens, stack in two-column label/value rows or a single column

## 7.3 Honesty note

Purpose: clarify confidential reconstruction, unfinished product status, representative data, or contribution boundary.

Visual treatment:

- Quiet surface distinction or a single side rule
- No warning-icon theatrics
- Body text remains readable and factual
- Place near the hero or first evidence, not buried at the bottom

An honesty note must not become a disclaimer that excuses unclear evidence. It should specify exactly what is reconstructed, representative, inherited, or unverified.

## 7.4 At a Glance

Purpose: give a fast reader the case logic.

Required anchors:

- Challenge
- Response
- Current outcome

Rules:

- Each anchor should be a short paragraph, not a card full of bullets
- Equal visual weight does not require equal word count
- No decorative icons unless they convey unique meaning
- On mobile, stack with clear gaps rather than retaining a cramped three-column layout

## 7.5 Project index row

Purpose: function as the homepage's main navigation and evidence preview.

Anatomy:

- Project number
- Category and status
- Situation-led title or line
- Short contribution description
- Preview image or specimen
- Clear link target across the full row when technically safe

States:

- Default
- Hover / pointer emphasis
- Keyboard focus
- Active press

Do not hide essential project information inside hover-only content.

## 7.6 Decision chapter

Anatomy:

- Chapter index or category
- Heading
- Problem
- Work / decision
- Trade-off or constraint
- Evidence

These labels may be visually reduced or integrated into prose, but the reasoning order should remain clear. Not every chapter requires all labels if the prose already communicates them.

## 7.7 Reflection

Purpose: identify a real limitation, next validation step, or improved working method.

Visual treatment:

- One emphasis device, such as a left rule or increased whitespace
- No generic “I learned communication is important” conclusion
- Must connect to unresolved evidence or a concrete future test

## 7.8 Case navigation

- Previous and next project titles
- Back-to-work option
- Top rule permitted as an ending boundary
- Keyboard focus visible
- Do not create circular navigation that hides project order

## 7.9 Footer

- Minimal identity, links, and copyright
- One top rule permitted
- No duplicated long biography
- Contact remains accessible without returning to the homepage

---

# PART 8 — EVIDENCE SYSTEM

## 8.1 Evidence is proof, not decoration

Each artifact must prove a specific statement from the case. Before adding a figure, complete this sentence:

> “This evidence allows the reader to verify that…”

If the answer is only “the interface looks polished,” the artifact is insufficient for a product case study.

## 8.2 Evidence types

### Real interface screen

Use when the screen itself carries the decision clearly.

### Before-and-after comparison

Use only when both states are authentic and directly comparable. Do not manufacture a worse “before” state.

### Flow or state map

Use when the contribution is primarily behavioral, conditional, or migration-related.

### Component or rule specimen

Use when reusable structure is the contribution.

### HTML specimen

Preferred for the CDP when the interaction structure, responsive behavior, or component relationships are clearer as live HTML than as a static screenshot.

### Annotated crop

Use when one region of a larger interface proves the point better than showing the full screen at illegible scale.

## 8.3 Aspect ratio

- Homepage previews and case covers: **16:9**
- Inline evidence: choose the ratio that preserves legibility and supports the claim
- Portrait mobile screens may be composed in a wider evidence canvas with one to three devices at readable size
- POS 800×600 must be padded or composed; never crop UI to force a ratio
- HTML specimens may use intrinsic height with a documented maximum width

Uniformity is valuable, but not when it makes the evidence harder to read.

## 8.4 One evidence plate, one claim

- Show one focused system, screen, state comparison, or flow
- If multiple screens are necessary, use no more than three and keep them readable
- Never use a dense Figma board as evidence without extracting the relevant region
- Do not display decorative device mockups that obscure the UI
- Do not use unrelated stock imagery on case pages

## 8.5 Text and captions

- Do not bake figure numbers, titles, captions, or watermarks into raster images
- Product UI may naturally contain interface text; explanatory portfolio text belongs in HTML
- Every evidence item requires a lead, title, and caption
- Caption should state what the reader should notice and why it matters
- Do not repeat the chapter paragraph verbatim

Recommended anatomy:

```html
<figure class="evidence">
  <div class="evidence__frame">...</div>
  <figcaption class="evidence__caption">
    <span class="evidence__lead">DEPENDENCY</span>
    <h3 class="evidence__title">...</h3>
    <p class="evidence__text">...</p>
  </figcaption>
</figure>
```

## 8.6 Frames

- One hairline frame around images or specimens where the boundary is necessary
- Avoid strong shadows
- No rounded “SaaS card” treatment by default
- A subtle warm surface may distinguish an HTML specimen from the page
- Full-bleed evidence is allowed when it remains aligned to the grid and the UI stays legible

## 8.7 Real data and confidentiality

- Replace personal, customer, or confidential data with representative values
- Preserve field length and structural realism
- Mark reconstructed or representative examples in the honesty note or caption
- Never invent a customer result to make an unfinished project feel complete

## 8.8 Alt text

Alt text should describe the evidence and its relevant relationship, not every pixel.

Good:

> “Customer identity setup screen beside a locked import state explaining the required prerequisite.”

Weak:

> “Screenshot of a website.”

Complex diagrams need a nearby text summary even when alt text is present.

---

# PART 9 — HTML SPECIMENS

## 9.1 Purpose

HTML specimens are reconstructed evidence, not product demos. They should preserve the structure and behavior necessary to explain the design decision while avoiding confidential product content.

## 9.2 Rules

- Use semantic HTML and shared site tokens where appropriate
- Visually distinguish specimen chrome from the portfolio page without making it look like a generic browser mockup
- Preserve realistic density and interaction states
- Do not simplify the specimen until the design problem disappears
- Do not add interactions that were not part of the design merely to make the page feel dynamic
- Any interactive control must be keyboard accessible
- If the specimen is static, do not imply that it is functional

## 9.3 State presentation

When showing multiple states:

- Prefer state tabs, a controlled comparison, or separate plates
- Clearly label default, loading, empty, error, locked, incomplete, and success states
- Do not hide important states behind hover
- On mobile, stack states if tabs would make the evidence cramped

## 9.4 Fidelity note

Every reconstructed specimen should be covered by the case honesty note. Where needed, add a concise local label such as “HTML reconstruction · representative values.”

---

# PART 10 — HANDWRITTEN REASONING MARK

## 10.1 Scope

Only one annotation type is active:

> **Reasoning mark — an anchored handwritten note explaining why a visible choice exists.**

The previous multi-type, multi-color system is retired. Do not implement gloss, cut, gap, cause, weight, group braces, checkmarks, or red/blue personality categories.

## 10.2 Visual language

- Caveat
- Single ink tone `--annotation` / `#34404c`
- Hand-drawn underline or connector SVG
- No highlighter fill
- No animation required
- Never use standard `text-decoration` for the hand-drawn anchor because it may be confused with a link

## 10.3 Use rules

- Anchor the note to a visible decision or evidence region
- One sentence, approximately 8–14 words
- Explain why, not what
- Remove or shorten nearby body copy so the note does not duplicate it
- Do not place a note merely because a page has none
- Recommended maximum: two on the homepage and two on a case page
- Zero is acceptable when the main copy already explains the reasoning clearly

## 10.4 Responsive behavior

At widths below 1080px:

- Move the note directly below its anchor or related evidence
- Hide long connector paths
- Preserve reading order in the DOM
- Use a small directional cue only when needed

The annotation must never overlap body copy, crop outside the viewport, or require pointer hover to read.

---

# PART 11 — MOTION AND INTERACTION

## 11.1 Default behavior

The portfolio does not need JavaScript motion to feel finished. Use movement only to communicate state or affordance.

Allowed:

- Short CSS transitions on links, project rows, buttons, and image emphasis
- Subtle opacity or transform change on hover
- Focus transition that does not delay visibility
- Optional reveal only when content remains immediately available without it

Avoid:

- Scroll hijacking
- Parallax on case evidence
- Draw-on-scroll annotation animation
- Long staggered entrances
- Cursor followers
- Motion that makes the reader wait for text or evidence

## 11.2 Timing

- Most hover and focus transitions: 120–220ms
- Use standard easing or a restrained custom curve
- Do not transition layout dimensions in ways that cause content shift
- Respect `prefers-reduced-motion: reduce`

## 11.3 Project-row preview

If hover image swapping is used:

- The default preview must already be meaningful
- Keyboard focus should produce an equivalent state
- Mobile must not depend on hover
- Image changes must not alter layout dimensions

---

# PART 12 — ACCESSIBILITY

## 12.1 Keyboard

- All navigation, links, controls, state tabs, and specimens must be keyboard accessible
- Focus indicators must be persistent and visible
- Do not remove outlines without a stronger replacement
- Ensure logical tab order follows reading order

## 12.2 Touch and target size

- Interactive targets should be at least approximately 44×44 CSS pixels where possible
- Small text links may use expanded padding or pseudo-element hit areas without creating overlap
- Do not place multiple small links too close together on compact screens

## 12.3 Color and meaning

- Do not rely on color alone for status, selection, validation, or links
- Pair color with text, shape, icon, or persistent underline
- Validate text and UI contrast in both default and interactive states

## 12.4 Typography and zoom

- The site must remain usable at 200% browser zoom
- Avoid fixed heights for text containers
- Do not truncate essential labels without an accessible full value
- Let headings wrap naturally; do not shrink them below the hierarchy needed to avoid wrapping

## 12.5 Images and media

- Meaningful images require alt text
- Decorative images use empty alt text
- No portfolio explanation may exist only as text baked into an image
- Videos require controls, captions when speech exists, and a static alternative for core evidence

---

# PART 13 — RESPONSIVE BEHAVIOR

## 13.1 Homepage

Wide:

- Project rows may use index / text / preview columns
- Preview aligns consistently across rows
- Hover emphasis remains secondary to readable default content

Medium:

- Reduce column count
- Keep project title and description together
- Preview may move below text while retaining row identity

Compact:

- Single column
- Project number and status may share one line
- Preview follows description
- No hover-dependent content

## 13.2 Case pages

Wide:

- Thesis and facts may sit side by side
- Narrative remains narrow while evidence can expand
- At a Glance may use three columns
- Margin notes may sit beside the grid

Medium:

- Facts move under the thesis
- At a Glance may use one or two columns
- Evidence fills the content container
- Notes move inline

Compact:

- Single reading column
- Fact labels stack clearly
- Evidence captions remain directly attached
- Multi-screen comparisons become vertical or horizontally scrollable only when scrolling is clearly indicated and accessible
- Large page-section gaps may reduce one spacing step, but hierarchy must remain visible

## 13.3 Tables and state matrices

- Prefer responsive lists or cards for small data sets
- For genuine tables, preserve semantics and allow horizontal scrolling inside a labeled container
- Freeze no content with CSS that covers rows on small screens
- Do not convert a complex comparison into tiny unreadable text merely to avoid scrolling

---

# PART 14 — PERFORMANCE AND ASSET STANDARDS

## 14.1 Images

- Export raster evidence at appropriate 1x and 2x sizes
- Prefer AVIF or WebP with a PNG fallback only where transparency or fidelity requires it
- Use responsive `srcset` and `sizes`
- Add width and height attributes to prevent layout shift
- Lazy-load below-the-fold images
- Do not lazy-load the first meaningful hero or project preview

## 14.2 Fonts

- Load only required weights and styles
- Use `font-display: swap`
- Preload only the most critical files
- Provide resilient fallback stacks
- Never distribute font files as portfolio downloads

## 14.3 CSS and JavaScript

- Remove unused legacy annotation and animation code
- Avoid shipping a framework for simple static interactions
- Minification is optional during development and recommended for production
- Keep JavaScript non-blocking and minimal when introduced

## 14.4 Performance goal

The site should feel immediate on a typical mobile connection. Large case evidence is the main performance risk; visual fidelity should be achieved through correct export dimensions, not oversized source files.

---

# PART 15 — FILE AND ASSET NAMING

## 15.1 General

- Lowercase filenames
- Hyphen-separated words
- No spaces
- Stable descriptive names rather than export timestamps
- Avoid case-only renaming because it may break on Linux hosting

## 15.2 Suggested evidence naming

```text
assets/cdp/cover-cdp.webp
assets/cdp/plate-system-foundation.webp
assets/cdp/plate-identity-import-gate.webp
assets/cdp/plate-advanced-search.webp
assets/cdp/plate-segment-builder.webp
assets/cdp/plate-campaign-journey.webp

assets/3bb-member/cover-3bb-member.webp
assets/3bb-member/plate-contribution-boundary.webp
assets/3bb-member/plate-selected-flows.webp
assets/3bb-member/plate-migration-states.webp

assets/counter-service-pos/cover-pos.webp
assets/counter-service-pos/plate-expanded-terminal.webp
assets/counter-service-pos/plate-compact-terminal.webp
assets/counter-service-pos/plate-resolution-rules.webp
```

Do not encode figure numbers into filenames when the same evidence may move during editing. Numbering belongs in HTML presentation, not asset identity.

---

# PART 16 — SEO AND SHARING

## 16.1 Per-page requirements

- Unique `<title>` from `site-content.md`
- Unique meta description
- Canonical URL
- Open Graph title, description, image, and URL
- Twitter card metadata where relevant
- Meaningful page heading and internal links

## 16.2 Structured data

Use lightweight Person and WebSite schema on the homepage. Add CreativeWork or Project schema only if the fields are accurate and maintained. Do not invent employer, award, rating, or client data for schema completeness.

## 16.3 Social images

- 1200×630 recommended
- Use project title, short category, and one strong evidence composition
- Avoid dense case-study text
- Keep confidential UI and representative data rules intact

---

# PART 17 — QUALITY CHECKS

## 17.1 Content-to-design check

- Does every section use the current wording from `site-content.md`?
- Are product and contribution statuses visually distinct?
- Is an unfinished product prevented from looking falsely launched?
- Does the strongest evidence appear before long narrative?
- Has any caption or UI label become stale after copy changes?

## 17.2 Visual hierarchy check

- Can the reader identify page, section, chapter, and caption levels immediately?
- Is inter-group space visibly larger than intra-group space?
- Are lines being used only for permitted structural jobs?
- Does body text remain within a readable measure?
- Does evidence remain legible at actual render width?

## 17.3 Evidence check

- What exact claim does each plate prove?
- Is the artifact authentic, reconstructed honestly, or clearly representative?
- Is explanatory text kept in HTML?
- Does the caption add interpretation rather than repeat the title?
- Are mobile screens and POS interfaces large enough to inspect?
- Are confidential values replaced without destroying structural realism?

## 17.4 Interaction and accessibility check

- Can every action be reached and understood by keyboard?
- Are focus states visible?
- Is any content hidden behind hover?
- Does the page work at 200% zoom?
- Does reduced-motion mode remain complete?
- Are tap targets and contrast sufficient?

## 17.5 Responsive check

Review at minimum:

- 360px
- 430px
- 768px
- 1024px
- 1280px
- 1440px
- 1920px

Check real content, not placeholder text. Long project titles, captions, URLs, and metadata are the cases most likely to break the layout.

## 17.6 Final release check

- No placeholder images
- No wrong-project assets
- No broken relative links
- No duplicate H1
- No outdated project status
- No unsupported impact claim
- No legacy blue/red annotation classes or content
- No text baked into exported evidence except real product UI
- No case page without a contribution boundary and honesty note
- No console errors if JavaScript is present

---

# PART 18 — RETIRED DIRECTIONS

The following directions are intentionally retired and must not reappear without a new explicit decision:

- “Making the complex, clear.” as the primary positioning line
- CDP framed only as Segment & Condition Builder
- Blue/red Thinking Mark versus Self-bite personalities
- Seven annotation glyph categories
- Annotation quotas that force marks onto every page
- Fraunces / DM Sans as the main font system
- GSAP or draw-on-scroll handwriting effects
- Universal 16:9 ratio for every inline evidence item
- Divider lines between every case-study section
- Treating existing code as the source of truth when it conflicts with current content or specification
- Using “What it shipped” as a universal ending regardless of product status

Archive old files for provenance, but do not mix retired rules into active implementation notes.

