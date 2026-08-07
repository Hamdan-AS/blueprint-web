# CS-326 — Software Engineering — 15-Week Plan

**Professor's Verdict:** *Deceptively simple. The theory is easy, but the group project is where GPAs go to die. Manage the project, and the A follows.*

**Credits:** 3+1 (with lab) | **Difficulty:** 2.5/5 | **Midterm:** Week 8 | **Final:** Week 15

---

## How This Course Works

- **60% theory exam + 40% lab (project + reports + viva).** The lab component is the risk.
- **This is a memorization-heavy course.** Unlike Architecture, there is little to derive. Focus on frameworks, models, and terminology.
- **The group project determines your grade boundaries.** Theory can get you a B. The project can push it to an A — or pull it to a C.

---

## Week 1 — Software Process Models

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

---

## Week 2 — Requirements Engineering

**Topics:** Functional vs non-functional vs domain requirements; Requirements engineering process (elicitation, analysis, specification, validation); IEEE 830 SRS standard

**Resources:** Pressman Ch.5; Gate Smashers — Requirements Engineering

**Practice:**
- For your chosen project: write 5 functional and 5 non-functional requirements
- Distinguish non-functional from domain requirements (common exam trap)
- IEEE 830 SRS structure: memorize the main sections

**Lab:** Start SRS document for your project

**Deliverable:** Draft SRS outline with 10 requirements categorized

**Time budget:** 4 hrs

---

## Week 3 — Analysis Modelling

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

---

## Week 4 — Project Management

**Topics:** Project planning; Work Breakdown Structure (WBS); Gantt charts; CPM/PERT; Risk management (RMMM)

**Resources:** Pressman Ch.7; ProjectLibre tutorial

**Practice:**
- Create WBS for your project (4+ levels of decomposition)
- Draw Gantt chart in ProjectLibre: identify critical path
- Risk management: identify 3 risks, propose mitigation, monitoring, management plan

**Lab:** Project scheduling using ProjectLibre; begin risk register

**Deliverable:** WBS + Gantt chart + risk assessment table

**Time budget:** 5 hrs

---

## Week 5 — Software Design & Architecture

**Topics:** Design concepts (abstraction, refinement, modularity); Architectural styles (data-centered, data flow, call-and-return, layered); Cohesion vs coupling

**Resources:** Pressman Ch.8; Gate Smashers — Software Design

**Practice:**
- Identify architectural style for your project — justify your choice
- Cohesion vs coupling: rank examples from best to worst
- Draw architectural design diagram for your project

**Trap:** High cohesion + low coupling is the target. Students memorize this but cannot apply it to unfamiliar scenarios. Practice with 3 case studies.

**Lab:** Architectural design document for project

**Time budget:** 5 hrs

---

## Week 6 — Design Patterns & Agile Development

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

---

## Week 7 — Midterm Revision

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

---

## Week 8 — MIDTERM EXAM WEEK

**Focus:** Active recall only. No new material.

- Review comparison tables (process models, Scrum roles, design patterns)
- DFD drawing: practice 2 complete examples
- Sleep 8 hours each night

---

## Week 9 — Verification & Validation (Recovery Week)

**Topics:** V&V fundamentals; Software inspection; Testing fundamentals; Verification vs validation; Debugging

**Resources:** Pressman Ch.14; Gate Smashers — Testing

**Recovery note:** If midterm scored below 85%, take 2 days at reduced load (20 hrs/week total). Recalibrate — a 78% midterm with 95%+ finals still yields B+/A-.

**Practice:**
- Verification vs validation: differentiate from blank page (V = "are we building it right?", V = "are we building the right thing?")
- Inspection process: roles and steps — retrieve from memory
- Debugging strategies (brute force, backtracking, cause elimination) — closed book comparison
- **Interleaved retrieval (20 min):** Draw context + Level 0 + Level 1 DFD for a new scenario from blank paper. Verify balance across levels. All closed book.

**Retrieval protocol:** Every practice item starts from a blank page. No peeking at notes.

**Lab:** Begin test case design for your project

**Time budget:** 5 hrs

---

## Week 10 — White-Box Testing

**Topics:** White-box testing techniques; Statement coverage; Branch coverage; Path coverage; Cyclomatic complexity (M = E − N + 2P)

**Resources:** Pressman Ch.14; past paper problems

**Practice:**
- Draw control flow graph from code — closed book
- Compute cyclomatic complexity for 5 functions — retrieve formula from memory
- Generate test cases for statement, branch, path coverage — from blank page
- **Interleaved retrieval (20 min):** Process model comparison table from memory — Waterfall, Incremental, Spiral, Agile — list phases, when to use, when NOT to use. All closed book.

**Killer trap:** Cyclomatic complexity formula — every term matters. E = edges, N = nodes, P = connected components. Most students forget P.

**Deliverable:** 5 cyclomatic complexity calculations with test cases

**Time budget:** 5 hrs

---

## Week 11 — Black-Box Testing & SQA

**Topics:** Black-box testing: equivalence partitioning, boundary value analysis; SQA basics; Software metrics; Statistical SQA

**Resources:** Pressman Ch.14 (black-box), Ch.15 (SQA)

**Practice:**
- Equivalence partitioning: divide input domain into valid/invalid classes — closed book
- Boundary value analysis: test at boundaries, not middle values — retrieve from memory
- Software metrics: McCabe vs Halstead — blank page comparison
- **Interleaved retrieval (20 min):** Scrum roles and ceremonies from memory — Product Owner vs Scrum Master vs Dev Team, sprint artifacts, ceremony purposes. Then design pattern comparison (Singleton, Factory, Observer). All closed book.

**Lab:** Execute test cases on your project, document results

**Deliverable:** Black-box test cases for 3 modules of your project

**Time budget:** 5 hrs

---

## Week 12 — Software Cost Estimation (COCOMO)

**Topics:** Basic, Intermediate, Detailed COCOMO; Mode selection (Organic, Semi-detached, Embedded); Effort adjustment factors

**Resources:** Pressman Ch.23; COCOMO example problems

**Sleep banking:** Begin sleeping 9 hrs (bedtime 22:00) for 7 nights leading to finals. This inoculates against exam-night sleep loss.

**Practice:**
- **Memorize COCOMO coefficients (retrieval practice):** Write all 12 coefficients from memory — Organic, Semi-detached, Embedded — before checking the table. Repeat until 100% accurate.
  - Organic: a=2.4, b=1.05, c=2.5, d=0.38
  - Semi-detached: a=3.0, b=1.12, c=2.5, d=0.35
  - Embedded: a=3.6, b=1.20, c=2.5, d=0.32
- Solve 5 complete COCOMO problems: effort, schedule, team size — closed book
- Intermediate COCOMO: apply 15 cost drivers (EAF) — retrieve adjustment factors from memory
- **Interleaved retrieval (20 min):** Draw context + Level 0 DFD from blank paper for a new scenario. Then compute cyclomatic complexity for a sample flow graph. All closed book.

**Killer trap:** One wrong coefficient lookup creates chain errors through the entire estimate. Flashcard every coefficient until reflex-level.

**Lab:** Apply COCOMO to your project, include in final report

**Deliverable:** COCOMO calculation for your project

**Time budget:** 5 hrs

---

## Week 13 — Software Maintenance

**Topics:** Types of maintenance (corrective, adaptive, perfective, preventive); Maintenance process models; Reverse engineering; Re-engineering

**Resources:** Pressman Ch.13/17; past paper theory questions

**Practice:**
- Maintenance type identification: given a scenario, identify which type — closed book
- Maintenance process model diagram — retrieve from memory
- Re-engineering vs reverse engineering: distinction — blank page comparison
- **Interleaved retrieval (20 min):** COCOMO speed drill — all 12 coefficients from memory, then solve 2 complete problems in 15 min. All closed book.

**Lab:** Finalize project report, complete all documentation

**Time budget:** 4 hrs

---

## Week 14 — Final Exam Preparation & Project Submission (Taper)

**Topics:** Cumulative review Weeks 1-13; Past paper practice; Project finalization

**Practice:**
- Timed full-length past paper (3 hrs, closed book) — start with the past paper, NOT with review
- COCOMO numerical speed drills (5 in 30 min) — retrieve coefficients from memory each time
- DFD drawing: 2 complete examples — blank page, closed book
- Cyclomatic complexity: 5 problems — retrieve formula from memory
- Theory: process models, Scrum, SQA, maintenance — forced recall via blank page outlines
- **Spaced repetition:** Redrill any COCOMO coefficients or DFD patterns that took >2 min

**Retrieval protocol:** No passive reading at all this week. Every minute is active retrieval.

**Sleep banking:** Continue 9 hrs sleep (bedtime 22:00). Do NOT trade sleep for last-minute studying — it degrades recall by 15-20% per lost hour.

**Important:** Submit final project deliverable this week (before final exam)

**Deliverable:** Final project submission + one solved past paper

**Time budget:** 7 hrs (including project wrap-up)

---

## Week 15 — FINAL EXAM & LAB VIVA

**Focus:** Execution. Do not learn anything new.

**Theory Exam:**
- Review 1-page cheat sheet (modes, coefficients, process model table)
- Answer order: COCOMO numericals → DFD/cyclomatic → theory
- For theory questions: use 5-point structure (definition, explanation, example, advantage, disadvantage)

**Lab Viva (separate slot):**
- Prepare 3-min verbal walkthrough of your project: problem → design → implementation → testing → lessons learned
- Anticipate 10 most likely questions (see viva Q bank)
- Know your SRS and UML diagrams cold
- Dress professionally. Speak clearly. Own your project.

---

## Professor's Final Words

*Software Engineering is not about writing code. It is about managing complexity — and the most complex thing in this course is your group project. The teams that communicate early, document everything, and treat each other with professional respect are the ones that leave with As.*

*On the exam: COCOMO numericals are free marks if you memorized the coefficients. DFDs are free marks if you balanced your levels. Theory questions reward structure — so give them structure: definition, explanation, example.*

*The difference between A and B is not intelligence. It is whether your group project works. Make it work.*
