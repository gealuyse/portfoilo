# UX Writing Review — Latest Portfolio Pages

**Review date:** 14 July 2026  
**Scope:** Content and narrative only. CSS, JavaScript, layout, and asset composition were not changed.

## Review structure

The work was separated into four specialist passes:

1. **Homepage / positioning** — whether a recruiter can understand what Natthapath does and why the three projects belong together.
2. **CDP / enterprise product systems** — whether the case communicates system-level contribution without overstating product impact.
3. **3BB / live-product migration UX** — whether inherited context, actual contribution, and shipping status are separated clearly.
4. **POS / operational constraints** — whether the case explains restraint and hardware constraints without claiming unmeasured efficiency gains.

A final editorial pass then aligned voice, labels, evidence language, and claim strength across all pages.

---

# Shared writing direction

Every page now follows the same underlying grammar:

**Product situation → design tension → my contribution → evidence → current status → what remains unproven**

The pages do not use identical storytelling. Each project keeps its own character:

- **CDP:** creating shared product rules inside a fragmented platform.
- **3BB:** designing selected functions inside a live product during migration.
- **POS:** improving hierarchy while preserving familiar control positions.

## Terminology used consistently

- **Challenge**
- **Approach**
- **Current status**
- **My contribution**
- **Recreated** for representative HTML evidence
- **In development** when work has been handed off but not launched
- **Live product — selected work shipped** when the product is live but the case covers only part of it
- **Design spec · review completed** when the work was reviewed but not validated in live operation

“Outcome” is avoided unless an outcome was actually measured.

---

# Pass 01 — Homepage / positioning

## What the page now says

Natthapath works best on existing products where the rules, constraints, and decisions are difficult to see. The three projects prove three related abilities:

- Build shared rules for a fragmented enterprise platform.
- Design new states and functions inside an inherited live product.
- Improve operational hierarchy without disrupting learned behavior.

## Main changes

- Kept the thesis: **“Complexity is my job, so it isn't the user's.”**
- Replaced the broad portfolio summary with a more specific working context: existing products, real constraints, and unclear next decisions.
- Removed CDP frame and node counts from the project card.
- Broadened 3BB from “three migration states” to selected app and web functions during migration.
- Replaced quoted sticky notes with design principles, so they no longer look like unverifiable stakeholder quotations.
- Rewrote About to describe observable working behavior rather than abstract “structural value.”

## Editorial judgment

The Homepage is now the clearest expression of the portfolio’s central identity. It positions Natthapath as someone who can enter an existing product, understand its hidden rules, and make the next version easier for users and delivery teams.

**Visible word count:** 296 words  
**Approximate scan/read time:** 1–2 minutes

---

# Pass 02 — Customer Data Platform

## What the page now says

The CDP already had screens and product logic, but it lacked a shared visual and behavioral system. Natthapath audited the existing product, built a common foundation, and applied it to data setup, import/export, search, consent, journeys, segmentation, and their supporting states.

The case is not “I made a design system.” The stronger story is:

> I made hidden product rules visible, reusable, and specific enough for feature design and handoff.

## Main changes

- Added a direct **My contribution** block.
- Replaced “Solution” with **Approach** and “Status” with **Current status**.
- Removed raw scope counts where they were acting as proof by themselves.
- Removed the unsupported “zero rebuild budget” phrasing.
- Reframed fragmented screens as inconsistent shared rules rather than claiming individual screens were broken.
- Simplified the journey and RFM chapter so the reader understands the reusable logic without processing an inventory count.
- Removed claims such as “every undocumented edge case becomes a QA ticket.”
- Reframed the zero-audience issue as an unhandled risk and a proposed next validation layer.
- Replaced broad impact language with concrete post-launch instrumentation: setup completion, error recovery, and nesting behavior.

## Editorial judgment

This is still the longest and most demanding page, which is appropriate because it is the strongest system-level case. It should not gain more narrative sections. Future additions should replace weaker text with better evidence rather than increase length.

**Visible word count:** 1217 words  
**Approximate read time:** 6 minutes

---

# Pass 03 — 3BB Member App and Website

## What the page now says

Natthapath designed selected app and web functions during the 3BB → AIS transition. Because the working file contained active, legacy, and migration-era flows, the work began by identifying the current behavior before mapping where migration changed the user’s route.

This page intentionally focuses on the service-state model rather than pretending to show every function Natthapath designed.

## Main changes

- Broadened the hero from “I designed three migration states” to the actual working context: selected functions inside a live inherited product.
- Added the inherited-file problem to the first design decision.
- Changed metadata to separate product status, timeline, role, and platform.
- Clarified in the honesty note that this case covers one part of the total contribution.
- Changed “Solution” to **Approach** and “Delivery” to **Current status**.
- Replaced the “two stores shipped” metric with app-and-web product context.
- Removed the claim that components already existed in the codebase.
- Changed “the functions that shipped cleanest” to a grounded reflection about clearer handoff.
- Added the source-of-truth audit to what should happen earlier next time.

## Editorial judgment

This is now a focused case rather than an accidentally narrow one. The page can keep the strong “one product, three customer realities” framing because it explicitly tells the reader that the migration-state model is the selected chapter, not the entirety of the project.

Before publishing, verify that “selected work shipped” and “1M+ existing users” are both claims you are comfortable supporting.

**Visible word count:** 1045 words  
**Approximate read time:** 5 minutes

---

# Pass 04 — Counter Service POS

## What the page now says

The POS case is about controlled change. Control positions and transaction flow remained familiar; hierarchy was revised using spacing, grouping, and contrast across two screen profiles.

## Main changes

- Replaced “I redesigned” with the more precise “I revised the hierarchy.”
- Changed **Approved spec** to **Design spec · review completed**.
- Added platform metadata for consistency with the other cases.
- Changed “Solution” to **Approach** and “Delivery” to **Current status**.
- Removed financial and speed claims that were not measured.
- Reframed familiarity as part of the interaction model rather than claiming a known operational cost.
- Removed “both live in the field” where the portfolio evidence did not need that assertion.
- Replaced the keystroke-only test with a more useful evaluation: task completion time, errors, and hesitation across representative transactions and both screen sizes.

## Editorial judgment

This remains the shortest and easiest case to understand. That is a strength. It should stay compact and act as proof of restraint, operational awareness, and specification across hardware constraints.

Before publishing, verify that all listed locked properties were genuinely fixed in the brief, particularly control size.

**Visible word count:** 847 words  
**Approximate read time:** 4 minutes

---

# Final consistency check

The revised pages now agree on these points:

- The portfolio does not claim that every product began with Natthapath.
- Existing systems and constraints are part of the work, not background noise.
- Product context is not presented as personal impact.
- Delivery status is not presented as evidence of success.
- Recreated evidence is labeled as recreated.
- Unmeasured results are written as assumptions or future tests.
- Each case identifies Natthapath’s contribution before moving into detailed evidence.
- The same portfolio voice is used throughout: calm, specific, evidence-led, and willing to state what is not yet known.

## Files changed

- `index.html`
- `cdp.html`
- `3bb-member.html`
- `counter-service-pos.html`

## Files intentionally unchanged

- `style.css`
- `script.js`
- `scroll.js`
- image assets
