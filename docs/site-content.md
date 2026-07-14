# Portfolio — Site Content & Voice

> **Source of truth for what the website says.**
>
> This file owns the portfolio's positioning, writing principles, verified project facts, page structure, and final English copy. It does **not** define layout dimensions, typography rules, CSS, motion, image treatment, or component implementation; those belong in `portfolio-spec.md`.
>
> When the two files appear to conflict:
> - Use this file for **meaning, wording, factual claims, status, and narrative order**.
> - Use `portfolio-spec.md` for **visual expression, interaction, accessibility, and implementation**.
> - The website code should be updated to match both. Existing code is not allowed to silently become the source of truth.

**Last rewritten:** 2026-07-14  
**Site owner:** Natthapath Damrongsri  
**Primary language:** English  
**Project order:** CDP → 3BB Member → Counter Service POS

---

# PART 1 — WHAT THE PORTFOLIO COMMUNICATES

## 1.1 Core positioning

### Primary statement

> **I turn messy, fragmented product situations into clear, usable systems.**

### Supporting idea

Natthapath works inside products that already exist: enterprise platforms with accumulated logic, consumer services moving through migration, and operational tools constrained by hardware and habit. His value is not adding visual novelty. It is understanding what is already there, finding the structure the product and team are missing, and turning that structure into interfaces and specifications people can continue building from.

### Narrative transformation

> **Complexity → Structure → Clarity**

Every major section of the site should make this transformation visible through real work:

- **Complexity:** fragmented screens, inherited decisions, changing requirements, fixed constraints, or hidden dependencies.
- **Structure:** audit, mapping, information architecture, reusable components, state models, workflow rules, and documentation.
- **Clarity:** a quieter interface, a more understandable journey, a shared language for the team, or a deliverable ready for development and QA.

The portfolio should never suggest that complexity disappeared. It should show how the designer absorbed and organized it so the user and delivery team had less of it to carry.

---

## 1.2 Primary audience

Write for a reader who may spend only a few minutes on the site:

- Product design recruiters and hiring managers
- Design leads and product managers
- Engineering or delivery leads evaluating handoff quality
- Thai and regional teams hiring for B2B, enterprise SaaS, mobile services, or operational products

The reader should understand, without reading every paragraph:

1. What kinds of situations Natthapath can be hired to handle
2. What he personally contributed
3. What was inherited, locked, or outside his control
4. What evidence supports each claim
5. What the current product or deliverable status actually is

---

## 1.3 Voice

The voice is quiet, direct, practical, and evidence-led.

### It should sound

- Calm rather than promotional
- Specific rather than impressive-sounding
- Confident about decisions, cautious about outcomes
- Comfortable admitting constraints and unknowns
- Interested in the product and team, not only the screens
- Clear enough for non-designers without flattening the real complexity

### It should not sound

- Like the designer rescued a broken team alone
- Like every project was a complete redesign
- Like a handoff is the same as a shipped customer outcome
- Like visual polish is the main contribution
- Like process vocabulary is proof by itself
- Like every design choice produced a measurable business result

### Sentence behavior

- Prefer concrete nouns and verbs: audited, mapped, separated, specified, adapted, documented.
- Use short paragraphs. One paragraph should carry one idea.
- State the situation before explaining the design method.
- Use technical language only when it helps the reader understand a real constraint.
- Avoid repeating the same point in the hero, metadata, chapter intro, caption, and reflection.
- Let figures carry visual claims; use body copy for the reasoning the figure cannot show.

---

## 1.4 Claim and honesty rules

### Four different things must remain separate

**Product status**  
Whether the product is live, in development, under review, or only a proposal.

**Contribution status**  
Whether Natthapath's work was explored, reviewed, handed off, implemented, or released.

**Deliverable**  
What he actually produced: flows, screens, components, specifications, prototypes, maps, or documentation.

**Impact**  
A demonstrated change in user behavior, delivery time, errors, business results, or team performance.

Do not use one as a substitute for another.

### Allowed claims

Use claims that can be shown directly through the work, such as:

- The product had inconsistent component and screen behavior.
- A required setup step was not enforced before import.
- Active and legacy screens were mixed in the same working file.
- Selected states and variable-dependent behaviors were documented for development and QA.
- Two terminal layouts were defined for different hardware resolutions.

### Claims that require evidence before use

Do not state these without a reliable source or measured result:

- Reduced QA tickets
- Faster checkout
- Improved conversion or engagement
- Increased team velocity
- Fewer user errors
- Successful customer adoption
- The exact number of users affected by a specific contribution

### Honest status language

Prefer:

- “Handed off for development”
- “Prepared as development- and QA-ready specifications”
- “Reviewed as a design proposal”
- “The product is live; the release status of the selected contribution varies by function”
- “The product is still in development; no customer outcome is claimed”

Avoid:

- “Shipped” when only the design was handed off
- “Launched” when the product already existed but the shown contribution is unverified
- “Improved” when there is no before-and-after evidence beyond visual inspection
- “Solved” when the result has not been tested with real users

---

## 1.5 Site-wide terminology

Use these terms consistently:

| Use | Meaning |
|---|---|
| **Existing product** | A product foundation, screens, logic, or journeys existed before the work began |
| **Inherited context** | Previous screens, patterns, versions, files, and decisions the designer had to understand |
| **Selected contribution** | The specific functions, workflows, components, or states Natthapath designed |
| **Design foundation** | Shared tokens, components, patterns, and interaction rules |
| **Evidence plate** | A focused visual or HTML specimen that proves one part of the case |
| **Current status** | The verifiable state of the product or contribution at the time the page is updated |
| **Representative values** | Example data used to protect confidential or unfinished product information |

Avoid turning internal labels such as “plate,” “node,” or “structure control” into unexplained public-facing language. Define specialist terms where they first appear.

---

# PART 2 — GLOBAL SITE COPY

## 2.1 Navigation

- **Work**
- **About**
- **Contact**

The project order is fixed:

1. Customer Data Platform
2. 3BB Member
3. Counter Service POS

---

## 2.2 Shared identity

**Name**  
Natthapath Damrongsri

**Role**  
Product Designer · UX/UI Designer

**Location**  
Bangkok, Thailand

**Primary focus**  
Enterprise SaaS · Data systems · Consumer services · Operational tools

**Contact**  
natthapath.d@gmail.com

---

## 2.3 Shared calls to action

Primary:

> **View selected work**

Contact:

> **Let’s talk about what you’re building.**

Case navigation:

- Previous project
- Next project
- Back to selected work

Do not use vague CTAs such as “Learn more” when a clearer action is available.

---

# PART 3 — LANDING / HOMEPAGE

`index.html`

## 3.1 Page metadata

**Title**  
Natthapath Damrongsri — Product Designer

**Description**  
Product designer in Bangkok working across enterprise SaaS, data platforms, consumer services, and operational tools. Selected work in product systems, migration UX, and development-ready interface design.

---

## 3.2 Hero

**Eyebrow**  
PRODUCT DESIGNER · BANGKOK

**Headline**

> **I turn messy, fragmented product situations into clear, usable systems.**

**Supporting copy**

I work inside products that already exist — enterprise platforms with accumulated logic, consumer services moving through migration, and operational tools constrained by hardware and habit. I make the structure visible, then design the interface and specifications the team can continue from.

**Availability line**

Open to product design opportunities.

**Primary CTA**  
View selected work

**Secondary CTA**  
Contact me

---

## 3.3 Positioning bridge

**Section label**  
WHAT GETS EASIER

**Heading**

> **Complexity does not disappear. It becomes structured enough that the user no longer has to carry it.**

**Body**

The work usually begins before the interface is ready to be polished: requirements are still changing, different parts of the product speak different languages, or the current source of truth is unclear. I start by understanding that reality, then reduce the confusion through system rules, clearer journeys, and explicit states.

---

## 3.4 Selected work intro

**Section label**  
SELECTED WORK

**Heading**

> **Three products. Three different reasons not to start from a blank canvas.**

**Body**

The projects below are not presented as full redesigns. Each case shows how I worked inside an existing product, respected what could not change, and made a selected part of the system clearer and more buildable.

---

## 3.5 Project card — 01 Customer Data Platform

**Index**  
01

**Category**  
ENTERPRISE SAAS · CUSTOMER DATA PLATFORM

**Year / status**  
2024 · IN DEVELOPMENT

**Title**

> **Customer Data Platform**

**Situation line**

> **The screens existed. The shared product system did not.**

**Description**

I joined an existing platform mid-build, audited the fragmented interface, created the missing design foundation, and specified selected data, consent, search, and campaign workflows for development.

**Contribution tags**

Audit · Design system · Information architecture · Feature states · Handoff

**Card annotation candidate**

> _the work began by making the product legible to its own team_

---

## 3.6 Project card — 02 3BB Member

**Index**  
02

**Category**  
MOBILE APP · WEB · MIGRATION UX

**Year / status**  
2024–PRESENT · PRODUCT LIVE

**Title**

> **3BB Member**

**Situation line**

> **A live service was changing underneath journeys people already knew.**

**Description**

I designed selected member functions and migration states within the existing product system, translating service requirements into familiar flows that development and QA could implement.

**Contribution tags**

Flow design · Existing design system · Migration states · Service mapping · Dev/QA handoff

**Card annotation candidate**

> _before changing a flow, I had to find which version was real_

---

## 3.7 Project card — 03 Counter Service POS

**Index**  
03

**Category**  
OPERATIONAL UX · POS TERMINAL

**Year / status**  
2023 · DESIGN PROPOSAL

**Title**

> **Counter Service POS**

**Situation line**

> **The flow and control positions were fixed. The hierarchy was not.**

**Description**

I reorganized spacing, grouping, and visual weight without moving the controls cashiers already knew, then defined separate layout profiles for compact and expanded terminals.

**Contribution tags**

Visual hierarchy · Spacing system · Fixed controls · Dual-resolution layouts

**Card annotation candidate**

> _better had to feel familiar, not new_

---

## 3.8 How I work

**Section label**  
HOW I WORK

**Heading**

> **Start with the product that exists, not the portfolio story I wish it had.**

**Principles**

### Understand the inherited reality

Find the current flow, real constraint, decision owner, and source of truth before proposing a cleaner future.

### Make the system visible

Map relationships, dependencies, states, and repeated patterns so the team can discuss the same product.

### Change only what earns the change

Protect familiar behavior and existing foundations when they still serve the user. Redesign is not the default answer.

### Leave the work buildable

A screen is not finished when it looks resolved. Its states, rules, copy, and edge conditions need to be clear enough for development and QA to continue.

---

## 3.9 Collaboration

**Section label**  
AROUND THE TABLE

**Heading**

> **The interface becomes clearer when the team is looking at the same problem.**

**Body**

I work closely with product, business, engineering, QA, and customer-facing teams. A large part of the job is turning scattered requirements and implicit product knowledge into something everyone can inspect, challenge, and build from.

---

## 3.10 About

**Section label**  
ABOUT

**Heading**

> **Natthapath Damrongsri is a Bangkok-based product designer working where complex logic meets everyday use.**

**Body**

My work spans enterprise SaaS, a consumer service used at national scale, and operational tools where a confusing interface carries a real cost. I stay quiet at the beginning because I would rather understand the messy reality before proposing a clean solution.

I care about what remains after the screens are handed off: organized files, explicit states, shared patterns, and documentation that helps the next person make a good decision without starting over.

---

## 3.11 Contact

**Section label**  
CONTACT

**Heading**

> **Let’s talk about what you’re building.**

**Body**

I am open to product design opportunities involving enterprise platforms, data systems, consumer services, and operational products.

**Links**

- Email: natthapath.d@gmail.com
- LinkedIn
- Résumé

---

# PART 4 — CASE 01: CUSTOMER DATA PLATFORM

`cdp.html`

## 4.1 Page metadata

**Title**  
Customer Data Platform — Natthapath Damrongsri

**Description**  
How an existing customer data platform was audited, organized into a shared design system, and specified across data setup, search, consent, segmentation, and campaign workflows.

---

## 4.2 Hero

**Kicker**  
ENTERPRISE SAAS · CUSTOMER DATA PLATFORM

**Title**

> **Customer Data Platform**

**Thesis**

> **An existing product that had to become legible.**

**Introduction**

I joined a customer data platform mid-build: the screens existed, but no shared system coordinated how they looked, behaved, or connected. Over four months I audited what was there, created the missing design foundation, and specified selected workflows and states for the team to continue developing.

---

## 4.3 Fact strip

**Product status**  
In development

**Contribution status**  
Design foundation and selected screens handed off for development

**Timeline**  
4 months · 2024

**Role**  
UX/UI Designer — audit, information architecture, design system, feature design, handoff

**Platform**  
Web application · 1440px desktop

**Team context**  
Product · Development · QA

**Product areas represented**  
Customer data · Data structure · Search · Import/export · Consent · Segmentation · Campaign journeys

---

## 4.4 Honesty note

> **The product is still in development.** The specimens on this page are HTML rebuilds from the working Figma file and in-progress product work. Their structure and behavior are faithful to the design; values and customer data are representative. No customer adoption or business impact is claimed.

---

## 4.5 At a glance

### Challenge

The platform had grown across data, campaigns, consent, and analytics without a shared component language or a clear sequence for key setup tasks. Similar screens used different controls and names, while important dependencies lived in team knowledge rather than in the interface.

### Response

I audited the existing product first, then built a common design foundation and applied it to selected workflows. The work included navigation and setup structure, reusable interface patterns, data-variable selectors, gated import behavior, consent configuration, segmentation logic, campaign nodes, and the states development and QA would need.

### Current outcome

The design system and selected feature specifications were handed off for implementation. The evidence here demonstrates the structure and completeness of the design work, not a measured customer outcome.

---

## 4.6 The work, first

**Section label**  
THE WORK, FIRST

**Intro**

The case starts with the system and screens because those are the strongest evidence. The narrative that follows explains why each layer was necessary.

### Evidence plate 01 — A shared foundation

**Lead**  
SYSTEM

**Title**  
One interface language across previously disconnected product areas

**Caption**

Tokens, type, controls, feedback states, data display patterns, search behaviors, and journey nodes were organized into a reusable foundation instead of being reinvented screen by screen.

### Evidence plate 02 — Setup before import

**Lead**  
DEPENDENCY

**Title**  
Customer identity rules had to exist before customer data could enter

**Caption**

The workflow makes the dependency explicit: import and related data actions remain unavailable until the identity structure required to match incoming records is configured.

### Evidence plate 03 — Search with enough context to choose correctly

**Lead**  
SELECTION

**Title**  
A large data catalog became a categorized selector with visible metadata

**Caption**

Users can distinguish attributes and events before adding them to a workflow, while loading, empty, overflow, and variable-dependent input states are specified for implementation.

### Evidence plate 04 — Logic that remains readable as it grows

**Lead**  
SEGMENTATION

**Title**  
Nested audience conditions without turning the screen into a wall of syntax

**Caption**

Condition groups, operators, and estimated reach remain visible in the same workspace so the user can inspect the segment while building it.

### Evidence plate 05 — Reusable campaign grammar

**Lead**  
ACTIVATION

**Title**  
Triggers, actions, operators, waits, and conditions built from one node language

**Caption**

Journey components use consistent structure and completion rules, allowing different campaign steps to behave like parts of one system rather than separate custom screens.

---

## 4.7 The situation

The platform was already well into development when I joined. Core product areas existed, but each had evolved with its own buttons, colors, type treatments, labels, and interaction assumptions. The product could be demonstrated, yet understanding how its parts were meant to work together still depended heavily on the people who had been building it.

This was not a blank-slate redesign. The underlying data structures and query capabilities constrained what the interface could do, development resources were limited, and the team needed a clearer system without stopping the existing build.

The design problem was therefore larger than making individual screens look consistent. The product needed a visible operating logic: what must be configured first, which patterns repeat, how data-dependent inputs behave, and what each feature should do when information is missing, invalid, loading, or incomplete.

---

## 4.8 What was fixed

- Existing backend logic and query capabilities
- Legacy data schemas and variable mappings
- An active product build that could not be restarted from zero
- Limited development capacity
- Internal product feedback rather than validated customer behavior

These constraints shaped the work. The goal was not to replace the product foundation, but to make the existing foundation coherent enough to continue.

---

## 4.9 Chapter 01 — Audit before redesign

**Heading**

> **I first needed to understand where the product was repeating itself — and where it was contradicting itself.**

**Problem**

The same kinds of actions appeared with different visual treatments and names across product areas. Some behaviors existed only in one screen. Others were implied in the design but not defined for empty, error, permission, or incomplete states.

**Work**

I reviewed existing screens and components, grouped repeated patterns, traced key product dependencies, and separated product-specific behavior from behavior that should become shared. The audit became the basis for both the design system and the order in which feature work needed to be addressed.

**Decision**

Do not start by polishing the most visible screens. Start with the rules those screens were already trying to express.

**Evidence to show**

- Audit clusters or before-state fragments
- Repeated controls with inconsistent treatment
- Product-area map or navigation inventory
- The first shared component categories derived from the audit

---

## 4.10 Chapter 02 — Build the language the product was missing

**Heading**

> **Consistency was not the end goal. It was the condition for reasoning about the product.**

**Problem**

Without a shared foundation, every new feature introduced another local decision. A button, field, warning, data row, or navigation state could look and behave differently depending on where it appeared.

**Work**

I defined a common visual and interaction foundation covering color, typography, controls, form elements, feedback, navigation, data display, search, calendars, progress, consent patterns, and campaign journey components. The system was developed alongside real screens so its rules were tested against product needs rather than built as an isolated library.

**Decision**

A component entered the shared system only when it represented repeated product behavior or established a rule future screens would need.

**Trade-off**

Building the foundation took time before individual screens appeared finished. It reduced local invention, but it did not remove the need for feature-specific judgement.

**Evidence to show**

- Token and type foundation
- Control families and states
- Data display and feedback patterns
- Campaign journey node anatomy
- A real screen before and after applying the shared language

---

## 4.11 Chapter 03 — Make setup dependencies visible

**Heading**

> **The product allowed data work to begin before the rules required to interpret that data were ready.**

**Problem**

Customer data could enter the platform before identity configuration had defined how incoming records should be matched. The dependency existed in the product logic, but the interface did not make the sequence clear enough.

**Work**

I reorganized the setup path around identity and data structure, then designed gated states for import and related actions. The interface explains what is unavailable, why it is unavailable, and what the user must configure next.

**Decision**

Prevent an invalid sequence rather than relying on documentation or team memory to correct it later.

**Trade-off**

A gate adds friction at the moment the user wants to begin importing. That friction is intentional because continuing without the required identity rules creates a more expensive problem downstream.

**Evidence to show**

- Identity structure screen
- Locked import state
- Prerequisite explanation and next action
- Configured state after the gate is resolved

---

## 4.12 Chapter 04 — Let users verify data before using it

**Heading**

> **A label was not enough when similarly named attributes and events could mean different things.**

**Problem**

The catalog of customer attributes and events was large and still growing. A plain dropdown made users scroll through names without enough context to confirm which variable they were selecting.

**Work**

I designed categorized search with metadata visible in each result. The selector distinguishes types and sources, supports autocomplete, and adapts the following input to the selected variable. Empty, loading, overflow, and validation behavior were specified with the main interaction.

**Decision**

Put verification inside the act of selection rather than asking the user to remember definitions from somewhere else.

**Trade-off**

The selector becomes visually and technically heavier than a standard dropdown. The additional structure is justified because choosing the wrong variable changes the logic of everything that follows.

**Evidence to show**

- Search entry state
- Categorized results
- Metadata within result rows
- Variable-dependent input adapters
- Loading, empty, and overflow states

---

## 4.13 Chapter 05 — Keep layered audience logic inspectable

**Heading**

> **The segment builder was one difficult chapter inside the larger system, not the whole project.**

**Problem**

Marketers needed to combine attributes, events, consent rules, and nested AND/OR groups. Logic could look structurally valid while resolving to an unintended or empty audience.

**Work**

I organized conditions into visible groups, separated operators from inputs, and kept estimated reach in the same workspace. Nested groups remain spatially readable instead of being reduced to syntax or hidden behind multiple screens.

**Decision**

Prioritize inspectability over density. The user should be able to explain what the segment means while looking at the screen.

**Trade-off**

Readable grouping takes space. The design accepts a larger workspace rather than compressing logic until only the person who built it can understand it.

**Evidence to show**

- Primary segment workspace
- Nested condition groups
- AND/OR operator treatment
- Estimated reach panel
- Empty or incomplete condition states

---

## 4.14 Chapter 06 — Carry one grammar into campaign journeys

**Heading**

> **Different campaign steps needed different inputs, but they should not feel like different products.**

**Problem**

Triggers, actions, conditions, waits, email steps, and operators each required specialized configuration. Without a shared structure, every new node could create a new interaction model.

**Work**

I defined reusable node anatomy, completion states, connection behavior, and input rules. A node remains incomplete until its required information is provided, making configuration status visible in the journey itself.

**Decision**

Reuse the interaction grammar, not merely the container shape. Consistency should help the user predict behavior across different node types.

**Trade-off**

A shared grammar limits how independently each node can be styled. That constraint is useful because the journey must read as one system.

**Evidence to show**

- Trigger, action, operator, wait, and condition nodes
- Incomplete and completed states
- Required-input behavior
- A composed campaign journey

---

## 4.15 Working with the team

The platform was already being developed, so design decisions had to remain connected to implementation reality. I worked with product and development to understand existing behavior, clarify what the system could support, and document selected screens at a level QA could inspect.

Handoff focused on the questions dynamic products create:

- What changes after a variable is selected?
- What remains disabled and why?
- What happens when required information is missing?
- How do long labels, empty results, loading, and errors behave?
- When is a configuration complete enough to continue?

The deliverable was not only a collection of final screens. It was a clearer set of product rules expressed through components, workflows, states, and specifications.

---

## 4.16 Current status

**What was delivered**

- A shared design foundation connected to real product screens
- Revised navigation and setup structure
- Selected data, search, consent, segmentation, and journey workflows
- Empty, loading, validation, locked, incomplete, and success states where relevant
- Specifications prepared for development and QA review

**What can be claimed**

The work made the intended product behavior more explicit and gave the team a consistent design language for the selected areas.

**What cannot yet be claimed**

The product remains in development. The case does not claim customer adoption, usability improvement, delivery-time reduction, or business impact.

---

## 4.17 Reflection

The strongest improvement would be earlier validation with the people expected to configure the platform. Internal review can reveal inconsistencies and implementation gaps, but it cannot confirm how marketers interpret deep condition groups, how often they create zero-result audiences, or which setup concepts require more guidance.

I would test two moments first:

1. Whether users understand why identity configuration must happen before import
2. Whether users can inspect a complex segment and predict the audience it represents

The riskiest outcome remains invisible: a configuration that looks complete but produces nothing useful. The next design layer should make that risk visible before activation.

---

# PART 5 — CASE 02: 3BB MEMBER

`3bb-member.html`

## 5.1 Page metadata

**Title**  
3BB Member — Natthapath Damrongsri

**Description**  
Selected mobile and web functions designed for a live member service moving through migration, using the existing product system while clarifying current flows, service states, and development-ready behavior.

---

## 5.2 Hero

**Kicker**  
MOBILE APP · WEB · MIGRATION UX

**Title**

> **3BB Member**

**Thesis**

> **A live product was changing underneath journeys people already knew.**

**Introduction**

3BB Member already supported familiar tasks such as billing, package management, service access, and account settings. During the AIS migration, I designed selected functions and states within the existing product system, translating service requirements into flows that remained familiar to users and clear enough for development and QA.

---

## 5.3 Fact strip

**Product status**  
Live on Play Store and App Store

**Contribution status**  
Selected functions and migration states designed and handed off; release status varies by function

**Timeline**  
2024–Present

**Role**  
UX/UI Designer

**Platform**  
Mobile application · Web

**Team**  
CX / business · Product · Development · QA

**Scope represented**  
Selected account, billing, service, registration, payment, and migration flows

---

## 5.4 Honesty note

> **This is a selected contribution inside a much larger live product.** Existing journeys, the design system, previous screens, and many product decisions were inherited. The case distinguishes that context from the functions and states I designed. A live product status does not mean every screen shown here has the same release status.

---

## 5.5 At a glance

### Challenge

The shared design file contained years of active screens, previous versions, archived work, and migration-specific sets. At the same time, customer groups could see different behavior in the same journey depending on service and migration state.

### Response

I identified the current product patterns, clarified which flows were active, and designed selected functions using the existing design system. Requirements from CX and business were translated into user flows, screen states, copy, and implementation-ready behavior in collaboration with product, development, and QA.

### Current outcome

The selected work was prepared for development and QA within the live product process. The contribution is shown as targeted product work, not as a redesign of the whole application.

---

## 5.6 The work, first

### Evidence plate 01 — Contribution boundary

**Lead**  
CONTEXT

**Title**  
Inherited product history separated from the selected work

**Caption**

The evidence distinguishes existing screens and patterns from the functions, migration states, and implementation details designed as part of this contribution.

### Evidence plate 02 — Selected member functions

**Lead**  
FLOW

**Title**  
New and updated functions designed inside familiar journeys

**Caption**

Registration, account, billing, payment, service, and error states reuse the product's established interaction language while adapting behavior to current service requirements.

### Evidence plate 03 — Migration and service states

**Lead**  
STATE

**Title**  
The same journey changes according to customer and service condition

**Caption**

The flow makes group-dependent behavior explicit so development and QA can verify what each customer state should see and what action remains available.

---

## 5.7 The situation

The product was already live and familiar to its users. That familiarity was a constraint worth protecting. Routine tasks should not feel newly designed simply because the organisation and service structure behind them was changing.

The working file held a large amount of product history: active flows, previous versions, temporary migration sets, experiments, and archived sections. Before designing a new function, I had to establish which pattern represented the current product and which screens existed only as context.

The migration added another layer. Two users entering what appeared to be the same flow could need different information, service choices, warnings, or next actions. The design needed to express those differences without making the overall application feel fragmented.

---

## 5.8 What was fixed

- Existing brand and design system
- Familiar user journeys and navigation patterns
- Technical and service rules defined by the migration
- A live delivery process with phased releases
- Cross-functional requirements from CX, business, product, development, and QA

The work was not about replacing these foundations. It was about designing functions that fit them while making new service behavior understandable.

---

## 5.9 Chapter 01 — Find the current product before changing it

**Heading**

> **The first design decision was deciding which existing decision still counted.**

**Problem**

The working file contained multiple versions of similar flows. Without a clear current-versus-legacy boundary, a new screen could accidentally inherit an outdated pattern or contradict a more recent service rule.

**Work**

I reviewed related pages, prototypes, archived sets, and surrounding flows to identify the current interaction language. I separated active references from legacy context and used that map as the starting point for selected function design.

**Decision**

Treat file archaeology as product work. A clean new frame is not useful if it is based on the wrong version of the product.

**Trade-off**

The audit is less visible than a redesign, but it prevents unnecessary visual change and avoids building on obsolete behavior.

**Evidence to show**

- File or page map
- Current, reference, and legacy categories
- A contribution-scope diagram
- One example of a selected current pattern

---

## 5.10 Chapter 02 — Translate service requirements into user behavior

**Heading**

> **A business rule only becomes product design when the user can understand what happens next.**

**Problem**

Requirements arrived through service and customer-facing teams. They described eligibility, migration state, account condition, billing option, or channel behavior, but not always the complete experience across screens and states.

**Work**

I converted those rules into flows, screen hierarchy, user-facing copy, and explicit next actions. Development joined requirement discussions where feasibility affected the design, while product and QA helped confirm how the selected behavior should be delivered and checked.

**Decision**

Do not reproduce the requirement document on the screen. Translate it into the smallest amount of information and action the user needs at that moment.

**Evidence to show**

- Requirement-to-flow mapping
- Decision points by customer state
- A selected registration, billing, or service journey
- Copy and next-action variants

---

## 5.11 Chapter 03 — Design new functions without making the product feel new

**Heading**

> **The work was original function design built from an inherited product language.**

**Problem**

Selected functions and service states needed new interfaces, but the surrounding application already had a visual and behavioral system users recognized.

**Work**

I designed screens for mobile and web using existing components, spacing, navigation, and interaction conventions as the foundation. Where the current system did not cover a required state, I extended the pattern rather than introducing an unrelated visual direction.

**Decision**

Preserve familiarity unless the migration creates a real reason to change the journey.

**Trade-off**

The result may appear less dramatic in a portfolio. In the product, that restraint protects continuity and reduces unnecessary relearning.

**Evidence to show**

- Existing pattern beside a selected contribution
- Mobile and web adaptations
- Home, package, account, registration, billing, or service screens
- A pattern extension for a migration-specific state

---

## 5.12 Chapter 04 — Treat uncertainty as part of the main flow

**Heading**

> **Errors, eligibility conditions, and service changes were not edge cases during migration.**

**Problem**

Login errors, registration conditions, payment setup, bill-delivery choices, unavailable services, and group-dependent messages are the moments when users are most likely to question whether their account or service is working.

**Work**

I designed these states with explicit hierarchy, user-facing explanations, and a defined next action. The selected flows included the behavior development needed to implement and QA needed to verify, rather than presenting only the ideal path.

**Decision**

Give failure and transitional states the same design attention as the successful screen they interrupt.

**Trade-off**

More states increase file and maintenance complexity. They also reduce the number of product decisions left implicit during implementation.

**Evidence to show**

- Login and registration errors
- OTP or verification states
- Auto-payment or billing option states
- Service unavailable, redirected, or migrated states
- QA-oriented state matrix

---

## 5.13 Working with the team

CX and business teams brought service requirements and customer conditions. Product helped connect those requirements to the wider application. Development contributed feasibility constraints, and QA needed enough state detail to verify the final behavior.

My role was to turn that shared input into a coherent experience: establish the current pattern, design the selected function, clarify variants, and prepare the screens and flow so the next team did not have to infer the missing behavior.

---

## 5.14 Current status

**What was delivered**

- Selected mobile and web flows
- Migration and customer-state variants
- User-facing copy and next actions
- States for errors, eligibility, payment, registration, and service conditions where relevant
- Handoff material for development and QA
- A clearer separation between current work and inherited file context

**What can be claimed**

The selected functions were designed to fit the live product's existing interaction language and delivery process.

**What cannot be claimed without function-level confirmation**

That every screen shown is live, that the entire application was redesigned, or that a specific user or business metric changed because of this work.

---

## 5.15 Reflection

I would establish the contribution boundary and current source of truth at the beginning of the project, not gradually while designing. The time spent locating the valid flow was necessary, but it exposed a larger product-operational problem: when active, legacy, and migration work share the same visual space, every new decision starts with avoidable uncertainty.

A stronger working system would label current references, define ownership, record service-state logic, and archive superseded flows intentionally. That clarity would be more valuable to the team than another polished screen added to an already crowded file.

---

# PART 6 — CASE 03: COUNTER SERVICE POS

`counter-service-pos.html`

## 6.1 Page metadata

**Title**  
Counter Service POS — Natthapath Damrongsri

**Description**  
A point-of-sale interface proposal that improves hierarchy and spacing while preserving fixed control positions and defining separate layouts for compact and expanded terminal resolutions.

---

## 6.2 Hero

**Kicker**  
OPERATIONAL UX · POS TERMINAL

**Title**

> **Counter Service POS**

**Thesis**

> **The screen had to read better without asking the cashier to relearn it.**

**Introduction**

The transaction flow, control positions, and brand language were fixed. I worked within those limits to improve hierarchy, grouping, and contrast, then defined separate layout profiles for 800×600 and 1920×1080 terminals.

---

## 6.3 Fact strip

**Product status**  
Operational product context

**Contribution status**  
Design proposal and specification reviewed; live implementation not claimed

**Year**  
2023

**Role**  
UX/UI Designer

**Platform**  
POS terminal · 800×600 and 1920×1080

**Scope**  
Visual hierarchy · Spacing system · Fixed-control layout · Dual-resolution specifications

---

## 6.4 Honesty note

> **This case presents a reviewed design proposal, not a measured live outcome.** The work shows how the fixed interface was reorganized and specified. It does not claim faster transactions or improved cashier performance without terminal testing.

---

## 6.5 At a glance

### Challenge

Cashiers relied on repeated control positions and familiar transaction flow, but the interface had uneven spacing, weak grouping, and competing visual weight across two very different terminal resolutions.

### Response

I preserved the controls and sequence, then used spacing, hierarchy, contrast, and grouping to clarify transaction information and next actions. Compact and expanded layouts were specified independently rather than treating one as a scaled version of the other.

### Current outcome

The proposal and layout rules were prepared for review. The case demonstrates the design rationale and specifications; it does not claim live performance improvement.

---

## 6.6 The work, first

### Evidence plate 01 — Expanded terminal

**Lead**  
HIERARCHY

**Title**  
The same controls, regrouped so the transaction reads in order

**Caption**

Spacing, contrast, and section weight distinguish transaction information from action areas without changing the positions cashiers already know.

### Evidence plate 02 — Compact terminal

**Lead**  
HARDWARE

**Title**  
A compact layout designed for 800×600 rather than reduced from desktop

**Caption**

Essential metadata, rows, controls, and payment actions are prioritized for the smaller display without cropping the interface or enlarging every element uniformly.

### Evidence plate 03 — Resolution rules

**Lead**  
SYSTEM

**Title**  
Two layout profiles governed by one hierarchy

**Caption**

The specification documents which dimensions, density decisions, and group relationships remain shared and which adapt to each hardware profile.

---

## 6.7 The situation

A cashier does not interpret the POS as a new interface during every transaction. Repeated use turns position and sequence into habit. Moving a control may make a redesign look cleaner while making the operational experience worse.

The interface still needed clearer grouping and visual priority. Important transaction information competed with secondary details, spacing was inconsistent, and the same layout logic had to work on both legacy 800×600 hardware and a much wider 1920×1080 display.

The design space was therefore narrow by intention. Flow, control position, and brand identity remained fixed. The work had to come from the relationships between existing elements.

---

## 6.8 What was fixed

- Transaction sequence
- Control positions
- Established cashier habits
- Brand font, icon, and interface identity
- Two required hardware resolutions

These were not obstacles to work around. They were the conditions that defined whether the proposal was responsible.

---

## 6.9 Chapter 01 — Improve hierarchy without moving the controls

**Heading**

> **The redesign had to be visible to the eye and almost invisible to the hand.**

**Problem**

Uneven spacing, weak grouping, and similar visual weight made transaction details, totals, secondary information, and actions compete for attention.

**Work**

I retained control positions and adjusted the interface through spacing, alignment, grouping, contrast, and section weight. Transaction information and action areas became distinct without changing the established sequence.

**Decision**

Use hierarchy to clarify the next action; do not use novelty to announce that the interface has been redesigned.

**Trade-off**

The before-and-after change is quieter than a full rearrangement. That restraint is the design value because it protects operational familiarity.

**Evidence to show**

- Before and proposed expanded layout
- Grouping and spacing overlays
- Information-priority comparison
- Fixed-control position reference

---

## 6.10 Chapter 02 — Design for two hardware realities

**Heading**

> **A smaller screen needed a different density strategy, not a smaller copy of the wide screen.**

**Problem**

Scaling one layout between 800×600 and 1920×1080 would either crowd the compact terminal or inflate the expanded one. Both screens needed to preserve the same operational hierarchy while using their space differently.

**Work**

I defined compact and expanded layout profiles. The compact profile prioritizes essential metadata and tighter rows. The expanded profile gives more room to transaction detail and actions without simply increasing every dimension.

**Decision**

Keep hierarchy and control relationships consistent, while allowing density and available information to adapt to the hardware.

**Trade-off**

Two profiles require more specification and maintenance. One nominally responsive mockup would hide the actual differences between the terminals.

**Evidence to show**

- 800×600 composed at legible size
- 1920×1080 proposed layout
- Shared versus adaptive dimensions
- Density and information-priority rules

---

## 6.11 Current status

**What was delivered**

- Proposed compact and expanded POS layouts
- Spacing, grouping, contrast, and hierarchy rules
- Fixed-control-position treatment
- Resolution-specific specifications
- Mockup or prototype material for review

**What can be claimed**

The proposal preserves the established flow and control positions while defining a clearer visual hierarchy for both terminal profiles.

**What cannot be claimed**

Faster checkout, fewer cashier errors, or successful live adoption without implementation and operational testing.

---

## 6.12 Reflection

The core hypothesis needs to be tested on the terminal: clearer hierarchy should make repeated transactions easier to scan without disrupting muscle memory. A useful evaluation would compare the existing and proposed interfaces through task completion, mis-selection, hesitation, and cashier feedback in a realistic environment.

The most important question is not whether the proposed screen looks cleaner. It is whether an experienced cashier can continue working without consciously noticing that the interface changed.

---

# PART 7 — FOOTER COPY

**Name**  
Natthapath Damrongsri

**Descriptor**  
Product Designer · Bangkok

**Closing line**

> **Clearer products begin with a shared understanding of what already exists.**

**Links**

Work · About · Contact · LinkedIn · Résumé

**Copyright format**  
© 2026 Natthapath Damrongsri

---

# PART 8 — CONTENT MAINTENANCE RULES

## Update this file when

- A project fact changes
- A contribution is implemented or released
- New evidence changes what can be claimed
- Page wording or narrative order changes
- A project is added, removed, or renamed
- Contact or availability information changes

## Do not update this file for

- CSS values
- Grid dimensions
- Breakpoints
- Image compression
- Hover behavior
- Component class names
- Animation implementation

Those belong in `portfolio-spec.md`.

## Review checklist before publishing copy

- Is the contribution boundary explicit?
- Are product status and contribution status separate?
- Does every outcome claim have evidence?
- Is the strongest evidence visible before the longest explanation?
- Does a caption explain what the figure proves rather than merely naming it?
- Is the same point repeated in more than two places?
- Does the case acknowledge what was inherited and what was fixed?
- Does the reflection identify a real limitation rather than performing humility?
- Could a recruiter understand the contribution by reading only the hero, At a Glance, evidence titles, and status?

