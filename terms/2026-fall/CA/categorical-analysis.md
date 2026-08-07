# CS-328 — Categorical Analysis of Course Material

> **Superseded — historical (2026-08-04).** Working document from the ANALYSIS-PLAN audit. The §3 contradictions are resolved: examinability → P2 background (see `weeks/CA-W1.md` line 18, `weeks/README.md`); `Top-20-Diagrams.md`/`Top-25-Numericals.md` merged into `Diagram-Book.md`/`Numerical-Book.md` and archived. Rows below referencing the archived files are stale. Keep for provenance.

> Working document for the week/day/task engine design. Every row verified against the actual files in `CA/`. Purpose: decide how the course material is divided topic-wise so day-shell resolution does not propagate issues forward.

---

## 1. Material inventory

| File | Size | What it holds | How it's organized | Topic-wise? |
|---|---|---|---|---|
| `01-Course-Overview.md` | 88 ln | Units, exam-weight table, GPA-priority table | By 5 named units + priority | Partial |
| `02-Official-Syllabus.md` | 75 ln | **Official 9 modules** (w/ hours) + background list + textbooks | By official module (M1–M9) | **Yes** |
| `03-Chapter-Breakdowns/` (5 files) | ~500 ln | Ch1 ISA · Ch2 SC datapath · Ch3 multi-cycle · Ch4 pipeline hazards · Ch5 cache/VM — each: objectives, must-memorize, mistakes, typical Qs, GPA priority | By **5 chapters** | **Yes** (but see gap below) |
| `Definition-Book.md` | 44 ln / 20 defs | Amdahl, AMAT, CPI, hazards, TLB, RAID, VLIW… | **Alphabetical A–Z** | ❌ No |
| `Formula-Book.md` | 29 ln / 11 formulas | Performance, Cache, VM, RAID | 4 sections | Partial |
| `Diagram-Book.md` | 21 ln / 15 diagrams | 15 diagrams, one flat list | **Single "Architecture" list** | ❌ No |
| `Numerical-Book.md` | 27 ln / 15 types | CPI, cache, VM, pipeline numericals | 4 sections | Partial |
| `Top-100-Questions.md` | 116 ln / 100 Qs | 25 ISA&DP · 30 Pipelining · 20 Cache&Mem · 15 Advanced · 10 Theory | 5 buckets | Partial ("Advanced" = grab-bag) |
| `Top-10-Tricky-Concepts.md` | 21 ln / 10 | $zero trap, EX/MEM priority, load-use… | **Flat list** | ❌ No |
| `Top-20-Diagrams.md` | 22 ln / 20 | **Overlaps Diagram-Book (15 of 20)** | **Flat list** | ❌ No |
| `Top-25-Numericals.md` | 27 ln / 25 | **Overlaps Numerical-Book (15 types)** | **Flat list** | ❌ No |
| `Marks-Allocation.md` | 12 ln | 5 components + weight | 5 buckets | Partial |
| `Resources.md` | 45 ln / 17 items | 3 YT playlists · 2 textbooks (ISBNs) · 3 MOOCs · 4 practice banks · 4 cheat sheets · gem5 | **By resource type** | ❌ No |
| `Fear-Killer-Packs.md` | 121 ln / 13 packs | CA-W1…W14, 3–5 Qs each | **By week+topic** | **Yes** |
| `Week-by-Week-Narrative.md` | 291 ln / 15 weeks | Topics, resources, practice, deliverable, hours | **By week** | **Yes** |

Only 3 of 15 files are truly topic-wise: `02-Official-Syllabus`, `Fear-Killer-Packs`, `Week-by-Week-Narrative`.

---

## 2. Module coverage matrix

The per-topic chapter breakdowns cover only 3 of 9 official modules.

| Official module | Chapter breakdown? | Only in packs/narrative |
|---|---|---|
| Background (ISA, SC datapath, cache/TLB basics) | ✅ Ch1, Ch2, Ch5 | — |
| M1 Multi-cycle processor | ✅ Ch3 | — |
| M2 FSM + microprogrammed control | ❌ **none** | Wk3, Wk4 |
| M3 ILP + pipeline hazards | ⚠️ Ch4 (hazards only; ILP not covered) | Wk9 |
| M4 Forwarding + hazard detection | ✅ Ch4 (forwarding + hazard detection) | Wk5, Wk6 |
| M5 Compiler ILP + branch prediction | ❌ **none** | Wk5, Wk6 |
| M6 VLIW/superscalar/ILP limits | ❌ **none** | Wk10 |
| M7 SIMD/GPU | ❌ **none** | Wk10 |
| M8 Loop-level parallelism | ❌ **none** | Wk9 |
| M9 Memory/VM/RAID | ⚠️ Ch5 (cache+VM; RAID only in pack) | Wk13 |

**Consequence:** a day-shell that resolves a per-topic "breakdown" cannot do so for M2/M4/M5/M6/M7/M8 — 6 of 9 modules. Either create 6 more breakdown files or designate packs/narrative as the breakdown source for those modules.

---

## 3. Contradictions that propagate forward

1. **Examinability contradiction.** `01-Course-Overview.md` lists MIPS ISA + single-cycle as **Unit 1, "High Yield"** (GPA priority). `02-Official-Syllabus.md` says ISA/single-cycle are **"background… not examinable."** Two files disagree on whether Ch1/Ch2 earn marks. A day-shell sourcing priority from Overview and topics from Syllabus emits self-contradicting cards.
2. **Diagram duplication.** `Top-20-Diagrams.md` and `Diagram-Book.md` overlap ~15/20, but a diagram may exist in only one file. "Attach diagram for topic X" has no single authoritative source.
3. **Bucket grab-bags.** "Advanced Topics" (Top-100 #76–90) mixes VLIW, RAID, GPU, Amdahl — three different modules. Any topic-wise resolver must split it manually.

---

## 4. Proposed approach

1. **Canonical topic spine = official M1–M9 + background** (already in `02-Official-Syllabus.md`). Everything else maps onto it, not rewritten.
2. **Fix the breakdown gap** (highest priority): cover M2/M4/M5/M6/M7/M8 either by creating 6 more breakdown files or by declaring packs/narrative as the breakdown source for those modules.
3. **Index, don't copy.** Defs/formulas/diagrams/numericals stay flat (alphabetical is fine for a *reference*); a topic→item index (engine manifest) tells the resolver "module M4 → defs {Forwarding, Hazard, RAW}, formulas {CPI}, numericals {18–20}." Kills duplication without 10 restructures.
4. **Resolve the Overview-vs-Syllabus examinability contradiction explicitly** (MASTER-DECISIONS-style decision), because it corrupts GPA-priority ordering everywhere.

**Open argument:** restructure the 10 flat files into topic-wise subfiles (higher fidelity, big diff, breaks cross-references) **vs index-over-flat** (no restructuring, one small manifest, resolver does the work). Default position: **index-over-flat**.
