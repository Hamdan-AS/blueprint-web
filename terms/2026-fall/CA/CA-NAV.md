# CA-NAV — COMPUTER ARCHITECTURE (CS-328) — MASTER INDEX

<!-- colors: 1-3:#9cc4ff:#1d4ed8 4-6:#9adba4:#15803d 7-9:#ffd27a:#b45309 8:#ff9e9e:#dc2626 10-12:#c7adff:#6d28d9 13-14:#80d8cc:#0f766e 15:#ff9e9e:#dc2626 ; stack: NAV:#9cc4ff BEFORE-MID:#9adba4 AFTER-MID:#c7adff -->

Weeks 1–15 · 17 Aug – 29 Nov 2026 · **Final 60 / Sessional 40** · load 5.0 · difficulty 5/5

> **Open this file first.** It is the map: where every topic lives, every line offset, every resource.
> **Three-file pack** (all in `terms/2026-fall/CA/`):
> | File | Holds |
> |---|---|
> | `CA-NAV.md` | This map — glance tables, master offsets, resources index |
> | `CA-BEFORE-MID.md` | Weeks 1–8 (midterm) — full per-week content, chapters 1–4 |
> | `CA-AFTER-MID.md` | Weeks 9–15 (final) — full per-week content, chapter 5 |

---
## Where to look (fast answers)

| I want… | Open |
|---|---|
| A topic with its defs/formulas/numericals | that week's block in BEFORE-MID / AFTER-MID |
| Any week's exact line offsets | **Master offset table** below |
| A full fear-killer pack (verbatim) | that week's block — packs carry per-question offsets |
| Chapter breakdown (ISA / hazards / cache-VM) | the week that bundles it (mapping below) |
| Books / YT playlists / MOOCs / practice banks | **Resources** section in this file |
| Exam-day order | **Exam stacks** section |
| Which official module covers what | **Syllabus M1–M9** section |
---
## Course facts

- **Code:** CS-328 · **Credits:** 3+0 (theory only) · **Contact:** 3 lectures/week
- **Weightage:** Final 60% / Sessional 40% (web-verified NED policy)
- **Difficulty:** 5/5 · **GPA Risk:** High
- **Midterm:** Week 8 (05–11 Oct) · **Final:** Week 15 (23–29 Nov)
- **Examinability note:** official syllabus marks ISA/single-cycle/cache/TLB as *background — not examinable*, but narrative + exam-probability treat cache/TLB as examinable. ISA/single-cycle scheduled P2. Confirm with professor.
---
## Master weekwise line-offset table

Offsets are line numbers into the named source file. `Fear-Killer-Packs.md` and
`Week-by-Week-Narrative.md` are the two anchored sources; `weeks/CA-Wn.md` files live in `weeks/`.

| Week | Narrative | Pack heading | Pack questions | weeks/CA-Wn | Chapter |
|------|-----------|--------------|----------------|-------------|---------|
| W1 | L17–30 | L13 (CA-W1) | res L14 · Q1 L16 · Q2 L17 · Q3 L18 · Q4 L19 | CA-W1 L1–46 | 01 (L1–178) + 02 (L1–52) |
| W2 | L33–46 | L21 (CA-W2) | res L22 · Q1 L24 · Q2 L25 · Q3 L26 | CA-W2 L1–44 | 03 (L1–46) |
| W3 | L49–64 | L28 (CA-W3) | res L29 · Q1 L31 · Q2 L32 · Q3 L33 | CA-W3 L1–43 | 03 |
| W4 | L68–81 | L35 (CA-W4) | res L36 · Q1 L38 · Q2 L39 · Q3 L40 | CA-W4 L1–42 | 04 (L1–57) |
| W5 | L85–100 | L42 (CA-W5) | res L43 · Q1 L45 · Q2 L46 · Q3 L47 · Q4 L48 · Q5 L49 | CA-W5 L1–43 | 04 |
| W6 | L104–117 | L51 (CA-W6) | res L52 · Q1 L54 · Q2 L55 · Q3 L56 · Q4 L57 · Q5 L58 | CA-W6 L1–43 | 04 |
| W7 | L121–137 | L60 (CA-W7) | res L61 · Q1 L63 · Q2 L64 · Q3 L65 · Q4 L66 | CA-W7 L1–42 | 01–04 |
| W8 | L141–149 | L68 (no pack) | — | CA-W8 L1–29 | — |
| W9 | L152–171 | L71 (CA-W9) | res L72 · Q1 L74 · Q2 L75 · Q3 L76 · Q4 L77 | CA-W9 L1–41 | — |
| W10 | L175–189 | L79 (CA-W10) | res L80 · Q1 L82 · Q2 L83 · Q3 L84 · Q4 L85 · Q5 L86 | CA-W10 L1–44 | — |
| W11 | L193–207 | L88 (CA-W11) | res L89 · Q1 L91 · Q2 L92 · Q3 L93 | CA-W11 L1–43 | 05 (cache) |
| W12 | L211–228 | L95 (CA-W12) | res L96 · Q1 L98 · Q2 L99 · Q3 L100 | CA-W12 L1–42 | 05 (VM) |
| W13 | L232–246 | L102 (CA-W13) | res L103 · Q1 L105 · Q2 L106 · Q3 L107 | CA-W13 L1–43 | — |
| W14 | L250–269 | L109 (CA-W14) | res L110 · Q1 L112 · Q2 L113 · Q3 L114 · Q4 L115 · Q5 L116 | CA-W14 L1–47 | 01–05 |
| W15 | L273–283 | L118 (no pack) | — | (W15 note at CA-W14 L47) | — |
---
## Syllabus M1–M9 → where it lives

| Module | Hours | Chapter breakdown? | Covered in |
|--------|-------|--------------------|------------|
| M1 Multi-Cycle Processor Design | 6 | ✅ Ch3 | W2–W3 |
| M2 Control Unit — FSM + Microprogrammed | 6 | ❌ pack-level | W3–W4 |
| M3 ILP Concepts + Pipeline Hazards | 8 | ⚠️ Ch4 (hazards only) | W4–W6 (ILP at W9) |
| M4 Forwarding + Hazard Detection | 4 | ✅ Ch4 | W5–W6 |
| M5 Compiler ILP + Branch Prediction | 4 | ❌ pack-level | W6, W9 |
| M6 Multiple Issue (VLIW/Superscalar) | 4 | ❌ pack-level | W10 |
| M7 SIMD & GPU | 4 | ❌ pack-level | W10 |
| M8 Loop-Level Parallelism | 4 | ❌ pack-level | W9 |
| M9 Memory System / VM / RAID | 8 | ⚠️ Ch5 (cache+VM; RAID pack-only) | W11–W13 |
| Background (ISA, SC datapath, cache/TLB, I/O) | — | ✅ Ch1, Ch2, Ch5 | W1, W11–W13 (P2) |

> Gaps are flagged, not fabricated: M2/M5/M6/M7/M8 have no chapter breakdowns — mapped at pack level (per `weeks/README.md` resolution).
---
## Exam probability table (editorial — study prioritization only)

| Topic | Midterm | Final | Numerical | Diagram | Theory |
|-------|---------|-------|-----------|---------|--------|
| MIPS ISA | 90% | 40% | 20% | 30% | 30% |
| SC datapath | 85% | 30% | 10% | 50% | 25% |
| Multi-cycle | 80% | 40% | 15% | 40% | 30% |
| FSM control | 70% | 40% | 10% | 45% | 30% |
| Pipeline hazards | 60% | 90% | 30% | 30% | 25% |
| Branch prediction | 40% | 70% | 25% | 25% | 30% |
| ILP/VLIW | 0% | 60% | 25% | 15% | 40% |
| Cache | 0% | 80% | 35% | 20% | 30% |
| Virtual memory | 0% | 75% | 35% | 20% | 30% |
| RAID | 0% | 50% | 20% | 20% | 40% |
---
## Marks allocation

| Component | Weight | Strategy |
|-----------|--------|----------|
| Pipeline hazard tracing | ~20% | Drill timing diagrams until reflex |
| Multi-cycle datapath | ~15% | Draw from memory daily |
| Cache/VM numericals | ~15% | Formula mastery |
| FSM control design | ~10% | State diagram practice |
| Theory/definitions | ~40% | Anki flashcards |
---
## Exam stacks

- **Midterm (W8, 05–11 Oct):** past paper 60 min → blank page 30 min → error log 20 min. Answer diagram/numerical first, theory second. Check every control signal and hazard classification. Sleep 8 h. Ledger frozen.
- **Final (W15, 23–29 Nov):** numericals → diagrams → theory. Label every forwarding path. Flag stuck problems and move on. Sleep 9 h (banked from W12).
---
## Resources
---
### YouTube playlists

| Playlist | Channel | Videos | Why |
|---|---|---|---|
| [Basic Computer Architecture — Lecture Videos](https://www.youtube.com/playlist?list=PL1iLu2CSC9EWAo0ysorNI_nebwF6Rwkr0) | Smruti R. Sarangi (IIT Delhi) | 48 | Official lecture series; matches NPTEL noc25_cs83; ch 8–12 = processor, pipelining, memory, multiprocessor/GPU, I/O |
| [CS61C: Great Ideas in Computer Architecture](https://www.youtube.com/playlist?list=PL0j-r-omG7i0-mnsxN5T4UcVS1Di0isqf) | UC Berkeley | ~40+ | Top-tier; digital logic → parallel processing |
| [Build a Superscalar CPU](https://www.youtube.com/playlist?list=PLyR4neQXqQo5nPdEiMbaEJxWiy_UuyNN4) | Independent creator | ~10+ | Hands-on superscalar core in simulation (W10) |
---
### Textbooks

- **Hennessy & Patterson** — *Computer Architecture: A Quantitative Approach*, 7th Ed (2025). ISBN **978-0-443-15406-5**. Gold standard — ILP, VLIW, superscalar, GPU, memory hierarchy, VM.
- **Patterson & Hennessy** — *Computer Organization and Design: The Hardware/Software Interface* (RISC-V Ed, 2nd ed). ISBN **978-0-12-820331-6**. Ch 4 = processor/pipelining/hazards, Ch 5 = memory hierarchy + RAID (5.11), App C = microprogrammed control.
- **Smruti R. Sarangi** — *Basic Computer Architecture*, 2nd Ed. Per-week chapters listed in the narrative's Resources lines.
---
### Free MOOCs

| Course | Source | Notes |
|---|---|---|
| [NPTEL: Computer Architecture](https://onlinecourses.nptel.ac.in/noc25_cs83/preview) | Prof. Smruti Sarangi, IIT Delhi | 12 weeks; matches Sarangi playlist |
| [MIT OCW: 6.823 Computer System Architecture](https://ocw.mit.edu/courses/6-823-computer-system-architecture-fall-2005/) | MIT | Full lecture notes + assignments |
| [Coursera: Computer Architecture](https://www.coursera.org/learn/comparch) | Princeton University | Self-paced |
---
### Problem banks / practice

| Resource | Link |
|---|---|
| UC Berkeley CS152 Homeworks | https://inst.eecs.berkeley.edu/~cs152/sp26/ |
| MIT 6.823 Past Quizzes | https://csg.csail.mit.edu/6.823S21/ |
| GeeksforGeeks CA Quiz | https://www.geeksforgeeks.org/quizzes/computer-organization-and-architecture-gq/ (UNVERIFIED) |
| H&P End-of-Chapter Exercises | https://shop.elsevier.com/books/computer-architecture/hennessy/978-0-443-15406-5 |
---
### Cheat sheets / revision notes

| Resource | Link |
|---|---|
| Cheatography: Computer Architecture | https://cheatography.com/sheetocheat/cheat-sheets/computer-architecture/ |
| EduRev: CAO Cheatsheet | https://edurev.in/t/488984/Cheatsheet-Computer-Architecture-Organisation--CAO- |
| Codecademy: CA Cheatsheet | https://www.codecademy.com/learn/computer-architecture/modules/intro-to-computer-architecture/cheatsheet |
| Roger Fan: CA Cheat Sheet | https://roger.tw/notes/University-Notes/Computer-Architecture/Computer-Architecture-(Cheat-Sheet) |
---
### Secret weapon

**gem5 Simulator** — https://www.gem5.org — cycle-level CPU modeling, cache hierarchies, branch predictors, IPC/CPI. Free, 1600+ GitHub forks.
---
## Where-everything-lives index (source → embedded location)

| Source file | ~Lines | Embedded in |
|---|---|---|
| `01-Course-Overview.md` | 89 | NAV facts/weights + per-unit headers in both files |
| `02-Official-Syllabus.md` | 75 | NAV (M1–M9 map + textbooks) |
| `03-Chapter-Breakdowns/01` ISA | 178 | BEFORE-MID W1 (verbatim) |
| `03-Chapter-Breakdowns/02` Single-cycle | 52 | BEFORE-MID W1 (verbatim) |
| `03-Chapter-Breakdowns/03` Multi-cycle | 46 | BEFORE-MID W2/W3 (verbatim) |
| `03-Chapter-Breakdowns/04` Hazards | 57 | BEFORE-MID W4–W6 (verbatim) |
| `03-Chapter-Breakdowns/05` Cache/VM | 45 | AFTER-MID W11/W12 (verbatim) |
| `Definition-Book.md` | 44 | split into per-week "Definitions" blocks (verbatim + L-numbers) |
| `Formula-Book.md` | 29 | split into per-week "Formulas" blocks (verbatim + L-numbers) |
| `Diagram-Book.md` | 26 | per-week "Diagrams" numbered refs |
| `Numerical-Book.md` | 39 | per-week "Numericals" numbered types |
| `Top-100-Questions.md` | 116 | per-week ranges by bucket |
| `Top-10-Tricky-Concepts.md` | 21 | per-week items (full list #1–#10 in both files' revision weeks) |
| `Marks-Allocation.md` | 12 | NAV (this file) |
| `Resources.md` | 45 | NAV (this file) + per-week book/video lines |
| `Fear-Killer-Packs.md` | 121 | per-week packs (verbatim, with per-question offsets) |
| `Week-by-Week-Narrative.md` | 291 | per-week narrative (verbatim) |
| `weeks/CA-W1…W14` + `README` | ~650 | per-week anchors, P0 floor, drill targets |
| `categorical-analysis.md` | 69 | **NOT embedded** — superseded/historical (2026-08-04) |

---

*Generated from the CA pack (CS-328). Every offset verified against `CA-TOC.md`, `weeks/README.md`, and the source files themselves.*

---
## Schedule at a glance

| W | Dates | Variant | File | Topics | Chapter |
|---|---|---|---|---|---|
| 1 | 17–23 Aug | P2 | BEFORE | MIPS ISA & single-cycle intro | 01 + 02 |
| 2 | 24–30 Aug | P2 | BEFORE | Single-cycle datapath | 03 |
| 3 | 31 Aug–06 Sep | P2 | BEFORE | Multi-cycle FSM control | 03 |
| 4 | 07–13 Sep | P0 | BEFORE | Microprogramming & pipeline intro | 04 |
| 5 | 14–20 Sep | P0 | BEFORE | Pipeline hazards I (structural/data) | 04 |
| 6 | 21–27 Sep | P0 | BEFORE | Pipeline hazards II (detection/branch pred) | 04 |
| 7 | 28 Sep–04 Oct | P1 | BEFORE | Midterm revision | 01–04 |
| 8 | 05–11 Oct | MIDTERM | BEFORE | Exam week — no new material | — |
| 9 | 12–18 Oct | P1 | AFTER | ILP & compiler techniques (recovery) | — (pack-level) |
| 10 | 19–25 Oct | P1 | AFTER | VLIW, superscalar, SIMD/GPU | — (pack-level) |
| 11 | 26 Oct–01 Nov | P0 | AFTER | Memory hierarchy & cache design | 05 |
| 12 | 02–08 Nov | P0 | AFTER | Virtual memory & TLB | 05 |
| 13 | 09–15 Nov | P1 | AFTER | RAID & advanced topics | — (pack-level) |
| 14 | 16–22 Nov | P0 | AFTER | Final taper — past paper FIRST | 01–05 |
| 15 | 23–29 Nov | FINAL | AFTER | Exam — execute | — |

> Tier key: **P0** = no exam pressure (front-load new material) · **P1** = light revision · **P2** = drill-heavy week.
