# SE-BEFORE-MID — WEEKS 1–8 · 17 AUG – 11 OCT 2026 · MIDTERM (W8)

<!-- colors: 1-3:#9cc4ff:#1d4ed8 4-5:#9adba4:#15803d 6:#ffd27a:#b45309 7:#c7adff:#6d28d9 8:#ff9e9e:#dc2626 -->

> **Scope:** Weeks 1–8 (17 Aug – 11 Oct 2026) — software process models, requirements engineering, analysis modelling (DFD/ER), project management, software design & architecture, design patterns & agile development, ending at the Week 8 midterm.
> **Siblings:** `SE-NAV.md` (master map) · `SE-AFTER-MID.md` (Weeks 9–15) · `SE-LABS.md` (labs). Week-colored headers below match the NAV schedule.
> **Exam split:** ~60% theory + ~40% diagram/drill, midterm-weighted toward process models, requirements, DFD, and project management (90%/80%/75%/65% midterm prob — see NAV).
> **Exam order:** DFD / process-model questions first, theory second.

---
## At a glance (W1–W8)

| W | Dates | Variant | File | Topics |
|---|---|---|---|---|
| W1 | 17–23 Aug | P2 | BEFORE | Software process models |
| W2 | 24–30 Aug | P2 | BEFORE | Requirements engineering + IEEE 830 |
| W3 | 31 Aug–06 Sep | P2 | BEFORE | Analysis modelling — DFD & ER |
| W4 | 07–13 Sep | P0 | BEFORE | Project management — WBS, Gantt, CPM, RMMM |
| W5 | 14–20 Sep | P0 | BEFORE | Software design & architecture |
| W6 | 21–27 Sep | P2 | BEFORE | Design patterns & Agile/Scrum |
| W7 | 28 Sep–04 Oct | P1 | BEFORE | Midterm revision |
| W8 | 05–11 Oct | MIDTERM | BEFORE | Exam week — no new material |

> Tier key: **P0** = no exam pressure (front-load new material) · **P1** = light revision · **P2** = drill-heavy week. Variants editorial (SE manifests carry no variant field).

---
### W1 — Software Process Models · 17–23 Aug · P2 · 4 hrs

**Banner:** Rotation SE (Thu+Fri) · Tier P2 · Time budget 4 hrs · P0 floor: pack pass + def/formula skim + same-problem drill.

#### Sources & offsets

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 1 | lines 17–35 |
| Fear-Killer Pack | `Fear-Killer-Packs.md` → Week 1: topic-software-process-models | lines 11–16 |
| Week manifest | `weeks/SE-W1.md` | full file |
| Chapter breakdown | — (no `03-Chapter-Breakdowns/`; narrative-derived topic) | — |

#### Definitions (verbatim)

| Term | Definition |
|---|---|
| Agile | A software development methodology based on iterative development, where requirements and solutions evolve through collaboration. *(preview — full coverage W6)* |

#### Formulas (verbatim)

| Formula | Statement |
|---|---|
| — | (none in `Formula-Book.md` this week) |

#### Diagrams · Numericals · Tricky · Top-100

| Type | Items |
|---|---|
| Diagrams | `Diagram-Book.md` **#1** Waterfall model · **#2** Spiral model |
| Numericals | — (none; drill = 4-model comparison table from blank page) |
| Tricky | — (deferred) |
| Top-100 | — (deferred) |

#### Books · Chapters · Media

| Resource | Where |
|---|---|
| Pressman & Maxim | Ch.2 |
| Gate Smashers | Software Engineering playlist videos 1–4 |

#### Fear-Killer Pack SE-W1 (verbatim)

**Resources:** Gate Smashers (Process models) • Pressman Ch.2-3 • Sommerville Ch.2

1. A defense system with hard real-time requirements has 50,000 LOC, needs full documentation for certification, and requirements are fully known upfront. Which process model should you choose and why? Design the complete lifecycle showing phases, milestones, and deliverables. Now take a startup building a food delivery app with uncertain requirements — which model fits and why?
2. Show the Waterfall, Incremental, and Spiral models side by side. For each, state: when requirements are fixed, when customer sees the product, how risk is handled, and what happens if requirements change mid-project. Construct a scenario where each model is the ONLY appropriate choice.
3. Compare plan-driven vs agile development across: documentation, customer involvement, team size, response to change, and project predictability. A 5-person team building an internal tool for a small company with a flexible stakeholder — which approach wins and why?

#### Narrative — Week 1 (verbatim)

**Topics:** Software engineering vs programming; Software process models: Waterfall, Incremental, Spiral, Reuse-oriented

**Resources:** Pressman Ch.2; Gate Smashers — Software Engineering playlist (videos 1-4)

**Practice:**
- Create a comparison table: each model's phases, when to use, when NOT to use
- For each model, write down: 1 real-world scenario where it's appropriate
- **Form your group project team this week**

**Lab:** Form groups, choose project topic, submit proposal

**⚠️ Group Project Risk Protocol (CRITICAL — read before forming teams):** See `Shared/07-Master-Overview.md` §Group Project Contingency Protocol. Key timeline: team charter with signed expectations by W2, first deliverable check W3 (escalate if <30% contribution), mid-course decision W6 (activate solo contingency if <50% complete), viva prep trigger W10. This protocol determines whether your GPA survives the semester. Do not skip it.

**Deliverable:** Group project proposal (half page) + process model comparison table

**Time budget:** 4 hrs

#### Lab pointer

**Lab this week:** `SE-LABS.md` → **Lab 1 — Documentation tools in SDLC** (proposal/SRS templates; derived map — no `Lab-Schedule.md`).

#### P0 floor · Drill target · Deliverable · Trap

- **P0 floor:** fear-killer pack pass (Q1 model-selection + Q2 side-by-side Waterfall/Incremental/Spiral) · def/formula skim (Agile preview) · same-problem drill (4-model comparison table)
- **Same-problem drill target:** comparison table (4 models × phases/risk/change-handling) < 15 min, closed book
- **Deliverable:** group project proposal (half page) + process model comparison table
- **Trap:** form the team this week — the group project is the GPA risk; do NOT treat W1 as a pure theory week

---
### W2 — Requirements Engineering · 24–30 Aug · P2 · 4 hrs

**Banner:** Rotation SE (Thu+Fri) · Tier P2 · Time budget 4 hrs · P0 floor: pack pass + def/formula skim + same-problem drill.

#### Sources & offsets

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 2 | lines 38–54 |
| Fear-Killer Pack | `Fear-Killer-Packs.md` → Week 2: topic-requirements-engineering | lines 18–23 |
| Week manifest | `weeks/SE-W2.md` | full file |
| Chapter breakdown | — (no `03-Chapter-Breakdowns/`; narrative-derived topic) | — |

#### Definitions (verbatim)

| Term | Definition |
|---|---|
| Functional Requirement | A requirement that specifies what a system must do (functions, features). |
| Non-Functional Requirement | A requirement that specifies constraints on the system (performance, security, usability). |
| SRS (Software Requirements Specification) | A document that describes what the software will do and how it will behave. |

#### Formulas (verbatim)

| Formula | Statement |
|---|---|
| — | (none in `Formula-Book.md` this week) |

#### Diagrams · Numericals · Tricky · Top-100

| Type | Items |
|---|---|
| Diagrams | — (none; IEEE 830 section list is the "structure" drill) |
| Numericals | — (none; drill = categorize 10 requirements < 10 min) |
| Tricky | — (deferred) |
| Top-100 | — (deferred) |

#### Books · Chapters · Media

| Resource | Where |
|---|---|
| Pressman & Maxim | Ch.5 |
| Gate Smashers | Requirements Engineering video |

#### Fear-Killer Pack SE-W2 (verbatim)

**Resources:** Pressman Ch.5-6 • Sommerville Ch.4

1. Write functional and non-functional requirements for an ATM system. Give 5 functional and 5 non-functional requirements. Then classify the NFRs into: product, organizational, and external requirements. Show how a functional requirement like "dispense cash" traces to specific NFRs like "dispense within 2 seconds" and "dispense correct amount with 99.999% accuracy."
2. Elicit requirements for a library management system. Use at least 4 elicitation techniques (interviews, surveys, domain analysis, observation). For each technique, state what type of requirement it uncovers best and what its blind spot is. Create a sample interview question set for a librarian stakeholder.
3. Write an SRS excerpt (IEEE 830 format) for the ATM system's "cash withdrawal" use case. Include: functional requirement, performance requirement, interface requirement, and a constraint. Show how each section of IEEE 830 maps to your content.

#### Narrative — Week 2 (verbatim)

**Topics:** Functional vs non-functional vs domain requirements; Requirements engineering process (elicitation, analysis, specification, validation); IEEE 830 SRS standard

**Resources:** Pressman Ch.5; Gate Smashers — Requirements Engineering

**Practice:**
- For your chosen project: write 5 functional and 5 non-functional requirements
- Distinguish non-functional from domain requirements (common exam trap)
- IEEE 830 SRS structure: memorize the main sections

**Lab:** Start SRS document for your project

**Deliverable:** Draft SRS outline with 10 requirements categorized

**Time budget:** 4 hrs

#### Lab pointer

**Lab this week:** `SE-LABS.md` → **Lab 1 — Documentation tools in SDLC** (SRS templates; derived map — no `Lab-Schedule.md`).

#### P0 floor · Drill target · Deliverable · Trap

- **P0 floor:** fear-killer pack pass (Q1 FR→NFR traceability + Q2 elicitation techniques) · def/formula skim (Functional/NFR/SRS) · same-problem drill (10-requirement categorization)
- **Same-problem drill target:** FR→NFR trace ("dispense cash" → "within 2 s" / "99.999% accuracy") < 10 min; IEEE 830 section list from memory
- **Deliverable:** draft SRS outline with 10 requirements categorized
- **Trap:** distinguishing NFR from domain requirements is a common exam trap — drill unfamiliar scenarios (W7 red flag repeats this)

---
### W3 — Analysis Modelling · 31 Aug–06 Sep · P2 · 5 hrs

**Banner:** Rotation SE (Thu+Fri) · Tier P2 · Time budget 5 hrs · P0 floor: revision-cycle checklist + def/formula skim + same-problem drill.

#### Sources & offsets

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 3 | lines 57–74 |
| Fear-Killer Pack | — (no pack — DFD/ER not in `Fear-Killer-Packs.md`) | — |
| Week manifest | `weeks/SE-W3.md` | full file |
| Chapter breakdown | — (no `03-Chapter-Breakdowns/`; narrative-derived topic) | — |

#### Definitions (verbatim)

| Term | Definition |
|---|---|
| DFD (Data Flow Diagram) | A graphical representation of data flow through a system, showing processes, data stores, and external entities. |

#### Formulas (verbatim)

| Formula | Statement |
|---|---|
| — | (none in `Formula-Book.md` this week) |

#### Diagrams · Numericals · Tricky · Top-100

| Type | Items |
|---|---|
| Diagrams | `Diagram-Book.md` **#3** Context diagram (DFD Level 0) · **#4** Level 0 DFD · **#5** Level 1 DFD (balancing) · **#6** ER diagram |
| Numericals | — (none; drill = Level 0 → Level 1 balancing of one process) |
| Tricky | — (deferred) |
| Top-100 | — (deferred) |

#### Books · Chapters · Media

| Resource | Where |
|---|---|
| Pressman & Maxim | Ch.6 |
| DFD examples | past papers |

#### Fear-Killer Pack — none this week

**No pack (SE-W3).** Deep study from narrative + DFD examples from past papers.

#### Narrative — Week 3 (verbatim)

**Topics:** DFD (context, Level 0, Level 1); ER diagrams; Data dictionary; Balancing across levels

**Resources:** Pressman Ch.6; DFD examples from past papers

**Practice:**
- Draw context diagram for your project
- Draw Level 0 DFD (major processes + data stores + external entities)
- Draw Level 1 DFD for one process (verify balance with Level 0)
- **Trap:** Data conservation across levels — every data flow at Level 0 must appear in Level 1

**Lab:** Complete DFDs for your project

**Deliverable:** Context diagram + Level 0 + Level 1 DFD with balancing verified

**Time budget:** 5 hrs

#### Lab pointer

**Lab this week:** `SE-LABS.md` → **Lab 4 — Data Flow Diagram** (derived map — no `Lab-Schedule.md`).

#### P0 floor · Drill target · Deliverable · Trap

- **P0 floor:** revision-cycle checklist (`04-Revision-Cycles.md` DFD balancing trace) · def skim (DFD) · same-problem drill (Level 0 → Level 1)
- **Same-problem drill target:** context + Level 0 DFD for your project < 20 min; Level 1 balancing verified
- **Deliverable:** context diagram + Level 0 + Level 1 DFD with balancing verified
- **Trap:** data conservation across levels — every Level 0 data flow must appear in Level 1 (killer trap)

---
### W4 — Project Management · 07–13 Sep · P0 · 5 hrs

**Banner:** Rotation SE (Thu+Fri) · Tier P0 · Time budget 5 hrs · P0 floor: pack pass + def/formula skim + same-problem drill.

#### Sources & offsets

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 4 | lines 77–93 |
| Fear-Killer Pack | `Fear-Killer-Packs.md` → Week 3: topic-project-management *(pack key lags narrative week — see `weeks/README.md`)* | lines 25–30 |
| Week manifest | `weeks/SE-W4.md` | full file |
| Chapter breakdown | — (no `03-Chapter-Breakdowns/`; narrative-derived topic) | — |

#### Definitions (verbatim)

| Term | Definition |
|---|---|
| WBS (Work Breakdown Structure) | A hierarchical decomposition of the total scope of work. |

#### Formulas (verbatim)

| Formula | Statement |
|---|---|
| — | (none in `Formula-Book.md` this week; CPM forward/backward pass is procedural) |

#### Diagrams · Numericals · Tricky · Top-100

| Type | Items |
|---|---|
| Diagrams | `Diagram-Book.md` **#7** WBS · **#8** Gantt chart |
| Numericals | — (CPM not indexed in `Numerical-Book.md`; drill via pack Q1) |
| Tricky | — (deferred) |
| Top-100 | — (deferred) |

#### Books · Chapters · Media

| Resource | Where |
|---|---|
| Pressman & Maxim | Ch.7 |
| ProjectLibre | tutorial |

#### Fear-Killer Pack SE-W4 (verbatim)

**Resources:** Pressman Ch.21-22 • Sommerville Ch.22

1. A software project has tasks: A(5 days, precedes B,C), B(3 days, precedes D), C(4 days, precedes D,E), D(2 days, precedes F), E(6 days, precedes F), F(3 days, no successors). Draw the network diagram using CPM. Calculate ES, EF, LS, LF, slack for each task. Identify the critical path and total project duration. What happens if task C takes 7 days instead of 4?
2. Identify 5 risks for a web development project: one technology risk, one people risk, one organizational risk, one requirements risk, and one estimation risk. For each, apply RMMM: state the probability, impact, mitigation strategy (what you do proactively), and management plan (what you do if it occurs).
3. Draw a Work Breakdown Structure (WBS) for building a mobile banking app. Decompose to at least level 3 (4 levels total: project → phase → deliverable → work package). Show at least 15 work packages. How does the WBS feed into the Gantt chart and cost estimation?

#### Narrative — Week 4 (verbatim)

**Topics:** Project planning; Work Breakdown Structure (WBS); Gantt charts; CPM/PERT; Risk management (RMMM)

**Resources:** Pressman Ch.7; ProjectLibre tutorial

**Practice:**
- Create WBS for your project (4+ levels of decomposition)
- Draw Gantt chart in ProjectLibre: identify critical path
- Risk management: identify 3 risks, propose mitigation, monitoring, management plan

**Lab:** Project scheduling using ProjectLibre; begin risk register

**Deliverable:** WBS + Gantt chart + risk assessment table

**Time budget:** 5 hrs

#### Lab pointer

**Lab this week:** `SE-LABS.md` → **Lab 2 — Project management tool / project plan** (derived map — no `Lab-Schedule.md`).

#### P0 floor · Drill target · Deliverable · Trap

- **P0 floor:** fear-killer pack pass (Q1 CPM network + critical path + Q2 RMMM) · def skim (WBS) · same-problem drill (CPM forward/backward pass)
- **Same-problem drill target:** CPM trace (ES/EF/LS/LF/slack) < 15 min; critical path identified correctly
- **Deliverable:** WBS + Gantt chart + risk assessment table
- **Trap:** first deliverable check W3 escalation — <30% contribution → escalate per Group Project Risk Protocol

---
### W5 — Software Design & Architecture · 14–20 Sep · P0 · 5 hrs

**Banner:** Rotation SE (Thu+Fri) · Tier P0 · Time budget 5 hrs · P0 floor: pack pass + def/formula skim + same-problem drill.

#### Sources & offsets

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 5 | lines 96–112 |
| Fear-Killer Pack | `Fear-Killer-Packs.md` → Week 4: topic-software-design | lines 32–38 |
| Week manifest | `weeks/SE-W5.md` | full file |
| Chapter breakdown | — (no `03-Chapter-Breakdowns/`; narrative-derived topic) | — |

#### Definitions (verbatim)

| Term | Definition |
|---|---|
| Cohesion | The degree to which elements within a module belong together (high cohesion is good). |
| Coupling | The degree of interdependence between modules (low coupling is good). |

#### Formulas (verbatim)

| Formula | Statement |
|---|---|
| — | (none in `Formula-Book.md` this week) |

#### Diagrams · Numericals · Tricky · Top-100

| Type | Items |
|---|---|
| Diagrams | `Diagram-Book.md` **#9** Architectural styles (layered, data-centered, data flow) · **#10** UML class diagram · **#15/#16/#17** pattern UML (preview for W6) |
| Numericals | — (none; drill = rank 7 cohesion + 7 coupling types best-to-worst) |
| Tricky | — (deferred) |
| Top-100 | — (deferred) |

#### Books · Chapters · Media

| Resource | Where |
|---|---|
| Pressman & Maxim | Ch.8 |
| Gate Smashers | Software Design video |

#### Fear-Killer Pack SE-W5 (verbatim)

**Resources:** Pressman Ch.8-9, 12 • Sommerville Ch.6-7 • Refactoring.Guru

1. For a library management system, identify modules with high cohesion and low coupling. Given two designs: Design A has a single "LibraryManager" class handling books, members, loans, and fines. Design B separates BookManager, MemberManager, LoanManager, FineManager. Evaluate both for cohesion and coupling. Which is better and why?
2. Explain and give a concrete example for each of the 7 types of cohesion (coincidental to functional) and 7 types of coupling (content to data). Order them best to worst. For a given code snippet showing tight coupling, refactor to achieve data coupling.
3. Implement a Singleton pattern for a database connection manager. Draw the UML class diagram with all relationships. Then implement an Observer pattern for a notification system where EmailNotifier, SMSNotifier, and PushNotifier observe a OrderStatus subject. Show the sequence diagram for a status change.
4. Compare layered architecture, data-centered architecture, and call-and-return architecture. For a hospital management system, which architecture? Draw the architectural diagram showing all layers/components and the data flow between them.

#### Narrative — Week 5 (verbatim)

**Topics:** Design concepts (abstraction, refinement, modularity); Architectural styles (data-centered, data flow, call-and-return, layered); Cohesion vs coupling

**Resources:** Pressman Ch.8; Gate Smashers — Software Design

**Practice:**
- Identify architectural style for your project — justify your choice
- Cohesion vs coupling: rank examples from best to worst
- Draw architectural design diagram for your project

**Trap:** High cohesion + low coupling is the target. Students memorize this but cannot apply it to unfamiliar scenarios. Practice with 3 case studies.

**Lab:** Architectural design document for project

**Time budget:** 5 hrs

#### Lab pointer

**Lab this week:** `SE-LABS.md` → **Labs 3 + 6 — UML Modeling** (class + collaboration/deployment; derived map — no `Lab-Schedule.md`).

#### P0 floor · Drill target · Deliverable · Trap

- **P0 floor:** fear-killer pack pass (Q1 design A-vs-B evaluation + Q2 7 types) · def skim (Cohesion/Coupling) · same-problem drill (7+7 ranking)
- **Same-problem drill target:** cohesion/coupling ordering < 10 min; architecture style selection + justification for your project
- **Deliverable:** architectural design document for project
- **Trap:** high cohesion + low coupling is memorized but NOT applied — practice with 3 unfamiliar case studies

---
### W6 — Design Patterns & Agile Development · 21–27 Sep · P2 · 5 hrs

**Banner:** Rotation SE (Thu+Fri) · Tier P2 · Time budget 5 hrs · P0 floor: pack pass + def/formula skim + same-problem drill.

#### Sources & offsets

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 6 | lines 115–133 |
| Fear-Killer Pack | `Fear-Killer-Packs.md` → Week 5: topic-agile-and-scrum (+ `Week 4` Q3 patterns) | lines 40–45 (+ L37) |
| Week manifest | `weeks/SE-W6.md` | full file |
| Chapter breakdown | — (no `03-Chapter-Breakdowns/`; narrative-derived topic) | — |

#### Definitions (verbatim)

| Term | Definition |
|---|---|
| Agile | A software development methodology based on iterative development, where requirements and solutions evolve through collaboration. |
| Scrum | An agile framework for managing software development with sprints, roles (Product Owner, Scrum Master, Dev Team), and ceremonies. |

#### Formulas (verbatim)

| Formula | Statement |
|---|---|
| — | (none in `Formula-Book.md` this week) |

#### Diagrams · Numericals · Tricky · Top-100

| Type | Items |
|---|---|
| Diagrams | `Diagram-Book.md` **#15** Singleton pattern UML · **#16** Factory Method UML · **#17** Observer pattern UML · **#18** Scrum framework diagram |
| Numericals | — (none; drill = sprint planning from 10 story points at velocity 20 — pack Q3) |
| Tricky | — (deferred) |
| Top-100 | — (deferred) |

#### Books · Chapters · Media

| Resource | Where |
|---|---|
| Pressman & Maxim | Ch.3 |
| Refactoring.Guru | design patterns catalog |
| Gate Smashers | Scrum video |

#### Fear-Killer Pack SE-W6 (verbatim)

**Resources:** Gate Smashers (Agile videos) • Pressman Ch.4 • Sommerville Ch.3

1. A team of 7 is building a food delivery app with a tight 3-month deadline and a product owner who wants to see progress every 2 weeks. Set up the complete Scrum framework: define all 3 roles (PO, SM, Dev Team), all 5 events (Sprint Planning, Daily Scrum, Sprint Review, Retrospective, Backlog Refinement), and all 3 artifacts (Product Backlog, Sprint Backlog, Increment). Show the first Sprint Backlog with 5 user stories and acceptance criteria.
2. Write the four values of the Agile Manifesto. For each value, give a concrete development practice that exemplifies it. Then list 12 XP practices and for each, state the problem it solves (e.g., pair programming solves code quality and knowledge silos).
3. Given 10 user stories with story points 3,5,8,2,3,13,5,8,3,5 and a team velocity of 20 points per sprint, plan the first two sprints. Show which stories go in Sprint 1 vs Sprint 2. Track using a burndown chart showing ideal vs actual progress for Sprint 1.

#### Narrative — Week 6 (verbatim)

**Topics:** GoF design patterns (Singleton, Factory, Abstract Factory, Observer, Strategy); Agile manifesto; Scrum (roles, ceremonies, artifacts); Extreme Programming

**Resources:** Refactoring.Guru (best resource); Gate Smashers — Scrum; Pressman Ch.3

**Practice:**
- For each pattern: UML diagram + when to use + real example
- Scrum roles: Product Owner, Scrum Master, Development Team — do NOT confuse these
- Sprint planning: estimate story points for your project

**Trap:** Factory vs Abstract Factory distinction. Factory Method = one product family. Abstract Factory = multiple related families.

**Lab:** Implement one design pattern in your project codebase

**Deliverable:** Design patterns comparison table + Sprint backlog for your project

**Time budget:** 5 hrs

#### Lab pointer

**Lab this week:** `SE-LABS.md` → **Lab 7 — Design Patterns in SDLC** (derived map — no `Lab-Schedule.md`).

#### P0 floor · Drill target · Deliverable · Trap

- **P0 floor:** fear-killer pack pass (Q1 full Scrum setup + Q3 sprint planning) · def skim (Agile/Scrum) · same-problem drill (sprint allocation from velocity)
- **Same-problem drill target:** Scrum roles/events/artifacts from memory < 10 min; Sprint 1 vs Sprint 2 story allocation
- **Deliverable:** design patterns comparison table + Sprint backlog for your project
- **Trap:** Factory vs Abstract Factory — one product family vs multiple related families (killer trap); mid-course decision W6 → solo contingency if <50% complete

---
### W7 — Midterm Revision · 28 Sep–04 Oct · P1 · 7 hrs

**Banner:** Rotation SE (Thu+Fri) · Tier P1 · Time budget 7 hrs · P0 floor: revision-cycle checklist + def/formula skim + same-problem drill. **No new material.**

#### Sources & offsets

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 7 | lines 136–152 |
| Fear-Killer Pack | — (revision — no pack; review SE-W1/2/4/5/6) | — |
| Week manifest | `weeks/SE-W7.md` | full file |
| Chapter breakdown | — (all W1–W6 topics) | — |

#### Definitions (verbatim) — full W1–W6 sweep

| Term | Definition |
|---|---|
| Agile | A software development methodology based on iterative development, where requirements and solutions evolve through collaboration. |
| Cohesion | The degree to which elements within a module belong together (high cohesion is good). |
| Coupling | The degree of interdependence between modules (low coupling is good). |
| DFD (Data Flow Diagram) | A graphical representation of data flow through a system, showing processes, data stores, and external entities. |
| Functional Requirement | A requirement that specifies what a system must do (functions, features). |
| Non-Functional Requirement | A requirement that specifies constraints on the system (performance, security, usability). |
| Scrum | An agile framework for managing software development with sprints, roles (Product Owner, Scrum Master, Dev Team), and ceremonies. |
| SRS (Software Requirements Specification) | A document that describes what the software will do and how it will behave. |
| WBS (Work Breakdown Structure) | A hierarchical decomposition of the total scope of work. |

#### Formulas (verbatim) — full sweep

| Formula | Statement |
|---|---|
| — | (no formula appears before W10 cyclomatic — first formula is next week's midterm-adjacent review) |

#### Diagrams · Numericals · Tricky · Top-100

| Type | Items |
|---|---|
| Diagrams | `Diagram-Book.md` **#1–#12** sweep (process models, DFD, ER, WBS, Gantt, architecture, UML) |
| Numericals | — (none before midterm; CPM + DFD drills only) |
| Tricky | — (deferred) |
| Top-100 | — (deferred) |

#### Books · Chapters · Media

| Resource | Where |
|---|---|
| Weeks 1–6 packs | timed past papers |

#### Fear-Killer Pack — revision (SE-W1/2/4/5/6)

**No single pack this week.** Re-run the SE-W1/W2/W4/W5/W6 packs under timed conditions.

#### Narrative — Week 7 (verbatim)

**Topics:** Comprehensive review of Weeks 1-6

**Practice:**
- Timed past paper (2 hrs, closed book)
- DFD drawing: context through Level 1
- Process model selection scenario
- Scrum roles and ceremonies
- Cohesion/coupling ranking

**Red flag:** If you cannot distinguish functional vs non-functional requirements in an unfamiliar scenario, drill 10 more case studies.

**Sleep banking:** Bedtime moves to 22:00 for 5 nights (Weeks 6-7). Sleep 9 hours. This protects memory consolidation of process models, DFD balancing, and Scrum ceremonies during deep sleep.

**Time budget:** 7 hrs

#### P0 floor · Drill target · Deliverable · Trap

- **P0 floor:** revision-cycle checklist (`04-Revision-Cycles.md`: process-model table, DFD context→L1, Scrum, cohesion/coupling — blank page) · def skim (all W1–W6) · same-problem drill (timed past paper + 10 requirement case studies)
- **Same-problem drill target:** timed past paper (2 h); DFD balancing verified; functional-vs-NFR distinction in unfamiliar scenarios
- **Deliverable:** solved timed past paper
- **Trap:** retrieval only — no passive re-reading; if functional-vs-NFR fails in unfamiliar scenarios, drill 10 more case studies (red flag); sleep banking 22:00 × 5 nights

---
### W8 — MIDTERM EXAM WEEK · 05–11 Oct · Exam

**Banner:** Rotation SE (Thu+Fri) · Tier MIDTERM · No new deep study, no floor accrual. Ledger frozen during W8.

#### Sources

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 8 | lines 155–162 |
| Pack | `Fear-Killer-Packs.md` → Week 8 | — (no pack) |
| Week manifest | `weeks/SE-W8.md` | full file |

#### Fear-Killer Pack — Week 8 (verbatim)

**Week 8: MIDTERM EXAM WEEK** — No new pack. Active recall only — review the 1-page cheat sheet and sleep 8 hours.

#### Narrative — Week 8 (verbatim)

**Focus:** Active recall only. No new material.

- Review comparison tables (process models, Scrum roles, design patterns)
- DFD drawing: practice 2 complete examples
- Sleep 8 hours each night

#### Exam-day stack (Thu + Fri)

- [ ] Past-paper run for the exam subject — 60 min, P0
- [ ] Blank-page retrieval of that subject — 30 min, P0
- [ ] Master Error Log review — 20 min, P0

#### Notes

- Review comparison tables (process models, Scrum roles, design patterns); practice 2 complete DFD examples. Sleep 8 h each night.
- Exam order: DFD / process-model questions first, theory second.
- **Ledger frozen during Wk8** — no new accrual; cleared in Wk9 recovery.
- **No lab milestone this week** — narrative W8 has no `**Lab:**` line.
