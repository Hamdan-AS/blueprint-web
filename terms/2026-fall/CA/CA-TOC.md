# CA-TOC — Computer Architecture (CS-328)

<!-- colors: 1-3:#9cc4ff:#1d4ed8 4-6:#9adba4:#15803d 7-9:#ffd27a:#b45309 8:#ff9e9e:#dc2626 10-12:#c7adff:#6d28d9 13-14:#80d8cc:#0f766e 15:#ff9e9e:#dc2626 ; stack: Overview|Syllabus|Resources|Marks|Narrative:#9cc4ff Fear-Killer|weeks:#9adba4 Diagram|Numerical|Formula|Definition:#c7adff Top-100|Top-10:#ffd27a Chapter:#80d8cc -->

Weeks 1-15 · 17 Aug – 29 Nov 2026 · **Final 60 / Sessional 40** · load 5.0 · difficulty 5/5

> Read this as PDF: `python3 tools/md2pdf.py CA-TOC.md`
> Offsets below are line numbers into the named file. Files live in `terms/2026-fall/CA/`.
> Tier key: **P0** = no exam pressure (front-load new material) · **P1** = light revision · **P2** = drill-heavy week.

## Schedule at a glance

| W | Dates | Variant | Topics |
|---|---|---|---|
| 1 | 17–23 Aug | P2 | MIPS ISA & single-cycle intro |
| 2 | 24–30 Aug | P2 | Single-cycle datapath |
| 3 | 31 Aug–06 Sep | P2 | Multi-cycle FSM control |
| 4 | 07–13 Sep | P0 | Microprogramming & pipeline intro |
| 5 | 14–20 Sep | P0 | Pipeline hazards I (structural/data) |
| 6 | 21–27 Sep | P0 | Pipeline hazards II (detection/branch pred) |
| 7 | 28 Sep–04 Oct | P1 | Midterm revision |
| 8 | 05–11 Oct | MIDTERM | Exam week — no new material |
| 9 | 12–18 Oct | P1 | ILP & compiler techniques (recovery) |
| 10 | 19–25 Oct | P1 | VLIW, superscalar, SIMD/GPU |
| 11 | 26 Oct–01 Nov | P0 | Memory hierarchy & cache design |
| 12 | 02–08 Nov | P0 | Virtual memory & TLB |
| 13 | 09–15 Nov | P1 | RAID & advanced topics |
| 14 | 16–22 Nov | P0 | Final taper — past paper FIRST |
| 15 | 23–29 Nov | FINAL | Exam — execute |

> **Examinability flag:** the official syllabus lists cache principles + TLB/virtual-memory as *background — not examinable*, but the narrative and exam-probability table treat them as examinable. They are scheduled P0 here (W11/W12); confirm with the professor.

## Week detail

### W1 — MIPS ISA & single-cycle intro · 17–23 Aug · P2
- **Topics:** MIPS formats (R/I/J); register conventions; single-cycle datapath design
- **Files:** narrative L17–30 · pack CA-W1 L13 · breakdown 01 (ISA, ★★★★★)
- **Drill:** decode 10 instructions to binary; draw single-cycle datapath <15 min (Diag #1)
- **Trap:** `lw` is the critical path — all instructions share its cycle time; I-type sign extension is per-format

---

### W2 — Single-cycle datapath · 24–30 Aug · P2
- **Topics:** multi-cycle vs single-cycle; multi-cycle datapath for R-type/lw/sw/branch
- **Files:** narrative L33–46 · pack CA-W2 L21 · breakdown 02 (single-cycle, ★★★★★)
- **Drill:** trace lw/sw/beq/R-type step-by-step; draw multi-cycle datapath <15 min (Diag #2)
- **Trap:** missing wait state = lost marks; IR/MDR/A/B/ALUOut — which needs a write control signal?

---

### W3 — Multi-cycle FSM control · 31 Aug–06 Sep · P2
- **Topics:** FSM for multi-cycle control; state transitions; ASM charts
- **Files:** narrative L49–64 · pack CA-W3 L28 · breakdown 03 (multi-cycle, ★★★★☆)
- **Drill:** FSM state diagram for R-type/lw/sw/branch, every transition labeled (Diag #6)
- **Trap:** every instruction must return to state 0 (instruction fetch); missing transition = processor stalls

---

### W4 — Microprogramming & pipeline intro · 07–13 Sep · P0
- **Topics:** horizontal vs vertical microprogramming; 5-stage pipeline; pipeline registers
- **Files:** narrative L68–81 · pack CA-W4 L35 · breakdown 01/02
- **Drill:** 5-stage pipeline, trace 3 instructions (Diag #3); microprogramming comparison table
- **Trap:** ideal 5-stage speedup = 5 only with zero hazards; structural hazard = one shared resource

---

### W5 — Pipeline hazards I · 14–20 Sep · P0
- **Topics:** structural hazards; RAW/WAW/WAR; forwarding unit design
- **Files:** narrative L85–100 · pack CA-W5 L42 · breakdown 04 (pipeline-hazards, ★★★★★)
- **Drill:** identify hazards in 8 sequences; design forwarding unit (Num #13–14)
- **Trap:** RAR is NOT a hazard; WAR = read-before-write; WAW = two writes; `$zero` must never be forwarded

---

### W6 — Pipeline hazards II · 21–27 Sep · P0
- **Topics:** hazard detection unit; stall vs forward; 1-bit/2-bit branch prediction; control hazards
- **Files:** narrative L104–117 · pack CA-W6 L51 · breakdown 04
- **Drill:** 2-bit predictor trace, 10 branch outcomes (Diag #7–8); hazard detection stall decisions
- **Trap:** 1-bit predictor mispredicts twice per loop (first + last iteration); 2-bit only once

---

### W7 — Midterm revision · 28 Sep–04 Oct · P1
- **Topics:** comprehensive review of weeks 1–6
- **Files:** narrative L121–137 · pack CA-W7 L60 · breakdowns 01–04
- **Drill:** timed past paper 2 hrs; multi-cycle draw 12 min blank; FSM design; 3 hazard sequences
- **Trap:** no re-reading — blank page first; if multi-cycle >15 min, repeat 5× daily until exam

---

### W8 — MIDTERM EXAM WEEK · 05–11 Oct
- **Focus:** active recall only. No new material.
- **Files:** narrative L141–149 · no pack (L68) · ledger frozen
- **Stack:** past paper 60 min → blank page 30 min → error log 20 min
- **Trap:** answer diagram/numerical first, theory second; check every control signal

---

### W9 — ILP & compiler techniques · 12–18 Oct · P1 (recovery)
- **Topics:** ILP; Amdahl's Law; ILP/power/memory walls; loop unrolling; software pipelining
- **Files:** narrative L152–171 · pack CA-W9 L71
- **Drill:** unroll loop 4× closed-book; software pipeline prologue/kernel/epilogue
- **Trap:** Amdahl — speedup = 1/((1−f)+f/n); even infinite processors cap at 1/f

---

### W10 — VLIW, superscalar, SIMD/GPU · 19–25 Oct · P1
- **Topics:** VLIW; superscalar; in-order vs out-of-order; SIMD vs SIMT; GPU architecture
- **Files:** narrative L175–189 · pack CA-W10 L79
- **Drill:** VLIW packet scheduling; superscalar IPC; SIMD stride; warp divergence utilization
- **Trap:** IPC can never reach issue width — branches and dependencies bound it

---

### W11 — Memory hierarchy & cache design · 26 Oct–01 Nov · P0
- **Topics:** direct/set-assoc/full-assoc; write policies; AMAT
- **Files:** narrative L193–207 · pack CA-W11 L88 · breakdown 05 (cache-VM, ★★★★☆)
- **Drill:** 10 cache numericals — address breakdown, miss rate, AMAT (Num #5–8)
- **Trap:** compute tag/index/offset split first; stride vs sequential access; write-back vs write-through traffic

---

### W12 — Virtual memory & TLB · 02–08 Nov · P0
- **Topics:** virtual memory; page tables; TLB; EAT; multi-level paging
- **Files:** narrative L211–228 · pack CA-W12 L95 · breakdown 05
- **Drill:** page table size; TLB reach; EAT (Num #9–12); two-level page walk
- **Cross-course:** TLB ↔ OS (CS-329) — same concepts, check your OS notes here
- **Trap:** EAT is dominated by page-fault time (5 ms vs 100-cycle memory); TLB reach = entries × page size

---

### W13 — RAID & advanced topics · 09–15 Nov · P1
- **Topics:** RAID 0/1/4/5/6/10; RAID performance; I/O systems
- **Files:** narrative L232–246 · pack CA-W13 L102
- **Drill:** RAID comparison table from memory (Diag #13); RAID 4 vs 5 write penalty
- **Trap:** RAID 4's dedicated parity disk is the bottleneck RAID 5 fixes; write penalty analysis

---

### W14 — Final taper · 16–22 Nov · P0
- **Topics:** cumulative review of weeks 1–13
- **Files:** narrative L250–269 · pack CA-W14 L109
- **Drill:** full past paper 3 hrs — FIRST, not after review; 10 hazard timing diagrams; numerical speed drills
- **Trap:** no passive reading all week; every minute is active retrieval; sleep 9 hrs, never trade sleep

---

### W15 — FINAL EXAM · 23–29 Nov
- **Focus:** execution. Learn nothing new.
- **Files:** narrative L273–283 · no pack (L118) · cheat sheet from W14
- **Stack:** numericals → diagrams → theory; label every forwarding path
- **Trap:** flag stuck problems and move on; return if time permits

## Deep-study stack

| Resource | What it holds | Win pointer |
|---|---|---|
| 01-Course-Overview.md | Course identity, weights, difficulty | Know the 60/40 split before week 1 |
| 02-Official-Syllabus.md | Official M1–M9 module list | Map every pack/topic to its official module |
| Resources.md | Learning materials: H&P, Sarangi, P&H, NPTEL | Pick the per-week chapter from the narrative's Resources lines |
| Fear-Killer-Packs.md | 3–5 hardest-first Qs per topic, W1–W15 | Attack the fear first — skip only if <15 min |
| Diagram-Book.md | 20 diagrams; canonicals #1–15 | Draw from blank until <10 min — this is 60% of the grade |
| Numerical-Book.md | 25 numericals (#1–15 core, #16–25 extended) | Closed-book retrieval, formulas first |
| Formula-Book.md | Formulas grouped by topic | Re-derive from first principles |
| Definition-Book.md | Definitions + short theory | Recall aloud after each week (40% theory marks) |
| Top-100-Questions.md | 100 Qs in 5 buckets | Buckets ISA/Datapath L3–29, Pipelining L31–61, Cache L64–85, Advanced L86–103, Theory L105–116; #76–90 = P2 |
| Top-10-Tricky-Concepts.md | 10 highest-yield pitfalls | Review before every past paper |
| Marks-Allocation.md | Where marks live (60 diagram+numerical / 40 theory) | In every exam: numericals → diagrams → theory |
| 03-Chapter-Breakdowns/ | 5 chapters with weight stars | 01/02/04 ★★★★★ drive the biggest wins |
| weeks/ | CA-W1…W14 + README | Follow the per-week drill + interleaved retrieval |
| Week-by-Week-Narrative.md | Full 15-week narrative | Line offsets power the TOC; read every trap line |
