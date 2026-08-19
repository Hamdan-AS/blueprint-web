# SE-LABS — SOFTWARE ENGINEERING (CS-326) — ALL LABS + VIVA

<!-- colors: 1:#9cc4ff:#1d4ed8 2:#9cc4ff:#1d4ed8 3:#9cc4ff:#1d4ed8 4:#9adba4:#15803d 5:#9adba4:#15803d 6:#ffd27a:#b45309 7:#c7adff:#6d28d9 8:#ff9e9e:#dc2626 9-10:#9adba4:#15803d 11:#ffd27a:#b45309 12:#c7adff:#6d28d9 13-14:#80d8cc:#0f766e 15:#ff9e9e:#dc2626 -->

Weeks 1–15 · 17 Aug – 29 Nov 2026 · **Lab weight 40% official** · 13 labs · viva 7+10 Qs

> **Source workbook:** Practical Workbook CS-302 (NED UET, Dept. of Computer & Information Systems Engineering, revised September 2019).
> **Credits:** 3+1 (3 lectures + 1 lab/week) · **CLO:** ⚠️ **not stated in SE sources** (no `02-Official-Syllabus.md`) — flagged, not fabricated.
> **Exclusions:** Lab 14 (Complex Engineering Activity) is **excluded** per AI precedent.
> **Ordering note:** SE has **no `Lab-Schedule.md`** and **no `03-Lab-Breakdowns/`** — the lab→week map and per-lab blocks below are **derived** from `weeks/README.md` project milestones + `Lab-Resources.md` order, marked `(derived — no Lab-Schedule.md source)`. Workbook Labs 9–13 have **no narrative milestone** mapped. W8 midterm and W15 final have no lab; the lab viva is a separate W15 slot.
---
## Lab → week map (derived — no `Lab-Schedule.md`)

| Real Week | Lab(s) | Milestone (narrative) | Workbook Lab | Topic Group |
|:---------:|:------:|:----------------------|:------------:|-------------|
| W1 | 1 | Form groups, choose topic, submit proposal | Lab 1 — documentation tools | Documentation (Lab 1) |
| W2 | 1 | Start SRS document | Lab 1 — SRS templates | Documentation (Lab 1) |
| W3 | 4 | Complete DFDs | Lab 4 — Data Flow Diagram | UML Modeling (Labs 3–6) |
| W4 | 2 | ProjectLibre scheduling; begin risk register | Lab 2 — project management tools | Project Management (Lab 2) |
| W5 | 3 + 6 | Architectural design document | Labs 3 + 6 — class + deployment | UML Modeling (Labs 3–6) |
| W6 | 7 | Implement one design pattern | Lab 7 — design patterns | Design Patterns (Lab 7) |
| W7 | — | — (no milestone) | — | — |
| W8 | — | **MIDTERM** — no lab | — | — |
| W9 | 8 | Begin test case design | Lab 8 — program testing | Testing (Lab 8) |
| W10 | — | — (no milestone; **Lab 8 heuristic, unconfirmed**) | — | — |
| W11 | 8 | Execute test cases, document results | Lab 8 — program testing | Testing (Lab 8) |
| W12 | — | Apply COCOMO to project (report) | no direct workbook lab (theory) | — |
| W13 | — | Finalize project report, complete documentation | no direct workbook lab | — |
| W14 | — | Submit final project deliverable | (lab-grade close-out) | — |
| W15 | — | **FINAL** — no lab (lab viva separate slot) | — | — |
---
## Notes

- **No `Lab-Schedule.md`:** there is NO authoritative week→workbook-lab mapping. The 13-workbook-lab order lives only in `Lab-Resources.md`; the week mapping is derived from narrative `**Lab:**` milestones in `weeks/README.md`. If the lab schedule emerges, add `Lab-Schedule.md` and re-map — do not guess.
- **No `03-Lab-Breakdowns/`:** per-lab Goal/Steps/Deliverable below are derived from `Lab-Resources.md` titles + `weeks/README.md` milestone descriptions, marked `(derived — no 03-Lab-Breakdowns source)`. Never treated as official.
- **No narrative milestone for workbook Labs 9–13** (Scrum ×3, VCS ×2) — mapped to their workbook groups only.
- **Lab weight:** 40% official (per `Week-by-Week-Narrative.md` L11) vs ~20% study-effort (`Marks-Allocation.md`) — both kept, labeled.
- **W7, W8, W10, W14 have no narrative `**Lab:**` milestone.** term.json `lab_omission` → `{"SE": [7, 10]}`; enforced by `UI-Polished/lib/validate.py`.
- Per-lab GitHub repos: `SE/Lab-Resources.md`.
---
## Exam relevance (lab ↔ theory bridge)

| Lab(s) | Examinable? | Bridge |
|--------|-------------|--------|
| 1 Documentation | ✅ theory-linked | SRS / IEEE 830 (W2) → `Fear-Killer-Packs.md` (SE-W2) · `Definition-Book.md` (SRS) |
| 2 Project Management | ✅ theory-linked | WBS, Gantt, CPM, RMMM (W4) → `Fear-Killer-Packs.md` (SE-W4) · `Diagram-Book.md` (#7 WBS, #8 Gantt) |
| 3–6 UML Modeling | ✅ theory-linked | DFD/ER (W3) + design/architecture (W5) → `Diagram-Book.md` (#3–#6 DFD/ER, #9–#13 UML) |
| 7 Design Patterns | ✅ theory-linked | GoF patterns (W6) → `Fear-Killer-Packs.md` (SE-W6) · `Diagram-Book.md` (#15–#17) |
| 8 Testing | ✅ theory-linked | V&V / white-box / black-box (W9–W11) → `Fear-Killer-Packs.md` (SE-W6) · `Formula-Book.md` (cyclomatic) · `Numerical-Book.md` (#20–21) |
| 9–11 Agile/Scrum | ✅ theory-linked | Agile/Scrum (W6) → `Fear-Killer-Packs.md` (SE-W5) · `Definition-Book.md` (Agile, Scrum) |
| 12–13 Version Control | ⚠️ lab-only | no direct theory topic — keep for the lab grade; do not spend theory time |

> Every row is **derived** (no per-lab `Exam Relevance` lines exist for SE). Never invent an examinability claim beyond the theory-topic mapping above.

---
# LAB GROUP: DOCUMENTATION (LAB 1)

Source: Practical Workbook CS-302 (NED UET, revised Sept 2019). *(derived — no 03-Lab-Breakdowns source)*
---
## Lab 1 — Explore the usage of any documentation tool in SDLC

**Goal:** Pick a documentation tool and produce SDLC documents (proposal / SRS) with it.
**Steps:** Choose a tool (LaTeX templates, Markdown, etc.); set up the proposal outline (W1) then the SRS (W2); follow an IEEE 830 / 29148 SRS structure.
**Deliverable:** Project proposal (W1) → draft SRS outline with 10 requirements categorized (W2).
**Exam Relevance:** SRS structure and functional/NFR classification map to the W2 theory topic — `Fear-Killer-Packs.md` (SE-W2). ✅ theory-linked.
**Resources:** `SE/Lab-Resources.md` → Lab 1 (SRS LaTeX templates: `bonellia/srs-ieee-latex`, `wxinix/IEEE-29148-SRS-LaTeX-Template`, `OscarM3615/srs-template`, `Ashad001/Latex-Templates`).

---
# LAB GROUP: PROJECT MANAGEMENT (LAB 2)

Source: Practical Workbook CS-302 (NED UET, revised Sept 2019). *(derived — no 03-Lab-Breakdowns source)*
---
## Lab 2 — Practice any project management tool to prepare a project plan

**Goal:** Produce a project plan with a PM tool.
**Steps:** Create a WBS (4+ levels); build a Gantt chart and identify the critical path; begin a risk register with RMMM entries.
**Deliverable:** WBS + Gantt chart + risk assessment table (3 risks with RMMM).
**Exam Relevance:** WBS/Gantt/CPM/RMMM map to the W4 theory topic — `Fear-Killer-Packs.md` (SE-W4). ✅ theory-linked.
**Resources:** `SE/Lab-Resources.md` → Lab 2 (`opf/openproject`, `bardsoftware/ganttproject`, `smartqubit/projectlibre`, `makeplane/plane`).

---
# LAB GROUP: UML MODELING (LABS 3–6)

Source: Practical Workbook CS-302 (NED UET, revised Sept 2019). *(derived — no 03-Lab-Breakdowns source)*
---
## Lab 3 — User view and structural view analysis: Use Case & Class Diagrams

**Goal:** Model the suggested system's user view (use cases) and structural view (classes).
**Steps:** Draw use case diagrams; draw class diagrams with relationships; use StarUML or a comparable tool.
**Deliverable:** Use case + class diagrams for your project.
**Exam Relevance:** UML class/use-case diagrams map to design topics (W5) — `Diagram-Book.md` (#10–#13). ✅ theory-linked.
**Resources:** `SE/Lab-Resources.md` → Lab 3 (`SuriyaaVijay/PACMAN-OOAD`, `ramsthapit/useCase`, `niklauslee/staruml-docs`, `staruml/staruml-samples`).
---
## Lab 4 — Practice function-oriented diagram: Data Flow Diagram

**Goal:** Draw the system's data flow diagrams.
**Steps:** Context diagram → Level 0 → Level 1; verify balancing across levels (data conservation).
**Deliverable:** Context + Level 0 + Level 1 DFD with balancing verified.
**Exam Relevance:** DFD drawing + balancing map directly to the W3 theory topic (50% diagram prob) — `Diagram-Book.md` (#3–#5). ✅ theory-linked.
**Resources:** `SE/Lab-Resources.md` → Lab 4 (`pbauermeister/dfd`, `nurulashraf/attendance-system-dfd-analysis`, `DaneshCode/Airline-Agency-Diagrams-Project`).
---
## Lab 5 — Behavioral view diagrams: State Transition, Sequence, Collaboration

**Goal:** Model the system's behavioral view.
**Steps:** State transition diagrams; sequence diagrams; collaboration/communication diagrams.
**Deliverable:** Behavioral view diagrams for your project.
**Exam Relevance:** UML behavioral diagrams map to design topics (W5) — `Diagram-Book.md` (#11 sequence, #13 activity). ✅ theory-linked.
**Resources:** `SE/Lab-Resources.md` → Lab 5 (`ruhulmus/Object-Oriented-Design-UML-Diagram`, `RaresM7373/UML`, `NosrevytsNg/Systems-Analysis-and-Design-UML-Case-Study`, `moudzx/architectural-design`).
---
## Lab 6 — Collaboration and Deployment View Diagrams

**Goal:** Model collaboration (component) and deployment views.
**Steps:** Component diagrams; deployment diagrams (nodes, artifacts, deployment relationships).
**Deliverable:** Component + deployment diagrams for your project.
**Exam Relevance:** architectural/deployment modeling maps to W5 architecture topic — `Diagram-Book.md` (#9 architectural styles). ✅ theory-linked.
**Resources:** `SE/Lab-Resources.md` → Lab 6 (`staruml/staruml-samples`, `vikendu/food-safety-portal-UML-2.0`, `plantuml-stdlib/C4-PlantUML`).

---
# LAB GROUP: DESIGN PATTERNS (LAB 7)

Source: Practical Workbook CS-302 (NED UET, revised Sept 2019). *(derived — no 03-Lab-Breakdowns source)*
---
## Lab 7 — Use Design Patterns in SDLC

**Goal:** Implement one (or more) GoF design pattern in the project codebase.
**Steps:** Choose a pattern that fits the project (Singleton, Factory, Observer, Strategy…); implement it; draw the UML; note when it applies.
**Deliverable:** Working pattern implementation in project codebase + comparison table (W6 deliverable).
**Exam Relevance:** Design patterns are a high-yield final topic (70% final prob) — `Fear-Killer-Packs.md` (SE-W6) · `Diagram-Book.md` (#15–#17). ✅ theory-linked.
**Resources:** `SE/Lab-Resources.md` → Lab 7 (`ForeverAProgrammer/learn_java-design-patterns`, `maxdemaio/design-patterns`, `MarioCodes/csharp-design-patterns-with-diagrams`, `kaiosilveira/design-patterns`, `olarn/GoF-Design-Pattern`).

---
# LAB GROUP: TESTING (LAB 8)

Source: Practical Workbook CS-302 (NED UET, revised Sept 2019). *(derived — no 03-Lab-Breakdowns source)*
---
## Lab 8 — Use the principles of program testing in SDLC

**Goal:** Design and execute test cases for the project.
**Steps:** Begin test case design (W9); apply black-box (EP/BVA) and white-box (CFG, cyclomatic, coverage) techniques; execute and document results (W11).
**Deliverable:** Black-box test cases for 3 modules; executed + documented results.
**Exam Relevance:** Testing is the second-largest final block — cyclomatic and EP/BVA map to W10–W11 — `Fear-Killer-Packs.md` (SE-W6) · `Formula-Book.md` (cyclomatic) · `Numerical-Book.md` (#20–21). ✅ theory-linked.
**Resources:** `SE/Lab-Resources.md` → Lab 8 (`OmarAbouraia/Banking-System-Testing-Suite`, `argunpeker/ISTQB-Test-Design-Techniques`, `tianhaishun/SoftwareTestingMasterclass`, `Armando1514/Software-testing-techniques`, `MubashirSiddiqui/Black-box_and_White-box_Testing`).

---
# LAB GROUP: AGILE / SCRUM (LABS 9–11)

Source: Practical Workbook CS-302 (NED UET, revised Sept 2019). *(derived — no 03-Lab-Breakdowns source; **no narrative milestone mapped**)*
---
## Lab 9 — Web Development & Testing using Agile Project Management (Scrum)

**Goal:** Run a Scrum iteration for web development + testing.
**Steps:** Set up product backlog + user stories with acceptance criteria; run sprint planning; use a Scrum board tool.
**Deliverable:** Working Scrum board + sprint backlog.
**Exam Relevance:** Scrum roles/events/artifacts map to the W6 theory topic (60% final prob) — `Fear-Killer-Packs.md` (SE-W5) · `Definition-Book.md` (Scrum). ✅ theory-linked.
**Resources:** `SE/Lab-Resources.md` → Lab 9 (`TrojanDonut/ScrumFlow`, `gal1aoui/Scrum-Board`, `sabarish-codes/SprintX`, `kaedesaho/sprintboard`, `MilanFatschel/AgileScrum_Sprint_Planner`).
---
## Lab 10 — Demonstrate first sprint and plan second sprint (Scrum)

**Goal:** Execute Sprint 1 and plan Sprint 2.
**Steps:** Complete sprint backlog for Sprint 1; run daily scrum + review + retro; plan Sprint 2 from velocity.
**Deliverable:** Sprint 1 executed + Sprint 2 backlog from velocity.
**Exam Relevance:** sprint planning from story points/velocity maps to pack Q3 (SE-W5) — `Fear-Killer-Packs.md` (SE-W5). ✅ theory-linked.
**Resources:** `SE/Lab-Resources.md` → Lab 10 (`JonBoyle-Dev/Scrum-toolkit`, `orbivort/scrumooth`, `meztinosdunken/team-sprint-tracker`, `TrojanDonut/ScrumFlow`).
---
## Lab 11 — Demonstrate second sprint and plan second sprint (Scrum)

**Goal:** Execute Sprint 2 and plan Sprint 3.
**Steps:** Complete Sprint 2 backlog; run ceremonies; plan Sprint 3 from measured velocity; track burndown.
**Deliverable:** Sprint 2 executed + burndown chart + Sprint 3 plan.
**Exam Relevance:** burndown + velocity tracking maps to pack Q3 (SE-W5) — `Fear-Killer-Packs.md` (SE-W5). ✅ theory-linked.
**Resources:** `SE/Lab-Resources.md` → Lab 11 (`RALIST/scrum-tools`, `llinq/scrum-app`, `asfand-dev/agile-sprint-retrospective`, `TheEagleByte/scrumkit`, `CAPELLAX02/agile-express`).

---
# LAB GROUP: VERSION CONTROL (LABS 12–13)

Source: Practical Workbook CS-302 (NED UET, revised Sept 2019). *(derived — no 03-Lab-Breakdowns source; **no narrative milestone mapped**)`
---
## Lab 12 — Explore Code repository tools for VCS (Git & GitHub)

**Goal:** Use a VCS (Git + GitHub) to manage the project repository.
**Steps:** Init a repo; commit/push; branches and merges; collaboration via GitHub.
**Deliverable:** Version-controlled project repository.
**Exam Relevance:** ⚠️ **lab-only** — no direct SE theory topic; keep for the lab grade, do not spend theory time.
**Resources:** `SE/Lab-Resources.md` → Lab 12 (`git/git`, `github/training-kit`, `javedali99/git-tutorial`, `pcottle/learnGitBranching`).
---
## Lab 13 — Practice conflict resolution for multiple contributors in VCS

**Goal:** Resolve merge/rebase conflicts in a multi-contributor repo.
**Steps:** Create a conflicting branch situation; resolve merge markers; practice rebase conflict flow.
**Deliverable:** Conflict-resolution exercise completed with a clean history.
**Exam Relevance:** ⚠️ **lab-only** — no direct SE theory topic; keep for the lab grade.
**Resources:** `SE/Lab-Resources.md` → Lab 13 (`pcottle/learnGitBranching`, `learn-co-curriculum/git-workflow-merge-conflicts-lab`, `alybss135/GitExercise_Conflicts`, `encuetee/learn-git-branching-solutions`).

---
## Viva — Software Engineering (CS-326)
---
### Project Walkthrough (3 min)

1. What is your project about? (problem statement)
2. What process model did you follow? Why?
3. What requirements did you identify?
4. What architecture did you choose?
5. What design patterns did you implement?
6. How did you test your project?
7. What were the biggest challenges?
---
### Technical Questions

8. Why is Waterfall not suitable for your project?
9. How did you ensure DFD balancing?
10. What is the difference between cohesion and coupling?
11. Why did you choose Singleton pattern?
12. What is your cyclomatic complexity? Is it acceptable?
13. How did you calculate COCOMO for your project?
14. What is the critical path in your Gantt chart?
15. How did you handle changing requirements?
16. What is the difference between black-box and white-box testing?
17. How would you improve your project?

*(Viva questions verbatim from `Viva-Book.md` — 7 walkthrough + 10 technical. Viva is a separate W15 slot; prepare the 3-min walkthrough: problem → design → implementation → testing → lessons learned. Know your SRS and UML diagrams cold.)*
