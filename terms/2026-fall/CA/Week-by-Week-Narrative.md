# CS-328 — Computer Architecture — 15-Week Plan

**Professor's Verdict:** *This is the course that separates good engineers from great ones. It will demand more from you than any other this semester. Respect it.*

**Credits:** 3+0 | **Difficulty:** 5/5 | **Midterm:** Week 8 | **Final:** Week 15

---

## How This Course Works

- **60% of your grade** is diagram accuracy + numerical precision. Theory answers are the remaining 40%.
- **Drawing from memory** is the skill. If you can draw a multi-cycle datapath in 15 minutes without peeking, you pass. If you can do it in 10, you get an A.
- **Every week,** you produce one hand-drawn diagram or timing trace. Do not skip a single week.

---

## Week 1 — MIPS ISA & Single-Cycle Datapath

**Topics:** MIPS instruction formats (R-type, I-type, J-type); Register conventions; Single-cycle datapath design

**Resources:** Hennessy & Patterson App. A; Smruti Sarangi (IITD) Ch. 3 (SimpleRisc/RISC-V — parallel reading only; book is not MIPS-based)

**Practice:**
- Decode 10 MIPS instructions into binary (R-type: opcode, rs, rt, rd, shamt, funct)
- Draw the single-cycle datapath from memory. Label every wire. Repeat until it takes <15 min

**Deliverable:** Hand-drawn single-cycle datapath with all control signals labeled

**Time budget:** 6 hrs

---

## Week 2 — Multi-Cycle Datapath

**Topics:** Multi-cycle vs single-cycle; Multi-cycle datapath for R-type, lw, sw, branch

**Resources:** Sarangi Ch. 9; CA textbook Ch.5

**Practice:**
- Trace R-type, lw, sw, and branch through the multi-cycle datapath step by step
- Draw the multi-cycle datapath from memory. Repeat until flawless in 15 min

**Deliverable:** Multi-cycle datapath diagram with state labels for each instruction type

**Time budget:** 6 hrs

---

## Week 3 — FSM Control Unit Design

**Topics:** FSM for multi-cycle control; State transitions for each instruction; ASM charts

**Resources:** Sarangi Ch. 9; past papers from FAST/NED

**Practice:**
- Draw FSM state diagram for R-type, lw, sw, branch
- Ensure every state transition is complete (missing wait states = lost marks)
- Contrast FSM control vs microprogrammed control

**Trap alert:** Most students draw incomplete state transitions. Every instruction must return to the same initial state (state 0/instruction fetch). Verify this.

**Deliverable:** FSM state diagram for R-type, lw, sw, branch — every transition labeled

**Time budget:** 6 hrs

---

## Week 4 — Microprogrammed Control & Pipeline Introduction

**Topics:** Microprogrammed control (horizontal vs vertical); Pipelining concept; 5-stage pipeline

**Resources:** Sarangi Ch. 9 (microprogramming), Ch. 10 (pipeline intro)

**Practice:**
- Vertical vs horizontal microprogramming comparison table
- Draw the 5-stage pipeline (IF, ID, EX, MEM, WB)
- Trace 3 instructions through the pipeline showing each stage

**Deliverable:** 5-stage pipeline diagram + microprogramming comparison table

**Time budget:** 6 hrs

---

## Week 5 — Pipeline Hazards I: Structural & Data Hazards

**Topics:** Structural hazards; Data hazards (RAW, WAW, WAR); Forwarding unit design

**Resources:** Sarangi Ch. 10; practice timing diagrams

**Practice:**
- Identify RAW, WAW, WAR in 8 instruction sequences
- Design the forwarding unit: show forwarding muxes, write forwarding conditions
- **Memorize:** $zero register exception in forwarding logic

**Killer trap:** RAR is NOT a hazard. WAR happens from read-before-write (name says it). WAW = two writes in a row. If you confuse these, you lose 10 marks.

**Deliverable:** 5 hazard identification traces with forwarding paths drawn

**Time budget:** 7 hrs

---

## Week 6 — Pipeline Hazards II: Hazard Detection & Branch Prediction

**Topics:** Hazard detection unit; Stall vs forward; Branch prediction (1-bit, 2-bit); Control hazards

**Resources:** Sarangi Ch. 10; past paper hazard sequences

**Practice:**
- Design hazard detection unit: when does it stall instead of forwarding?
- 1-bit predictor accuracy analysis (the "twice-misprediction" on loop exit)
- 2-bit predictor state machine: draw and trace 10 branch outcomes

**Deliverable:** Hazard detection unit diagram + branch prediction accuracy for 5 scenarios

**Time budget:** 7 hrs

---

## Week 7 — Midterm Revision

**Topics:** Comprehensive review of Weeks 1-6

**Practice:**
- Timed full-length past paper (2 hrs, closed book)
- Multi-cycle datapath: draw from BLANK PAPER in 12 min. Check accuracy against key ONLY after completing.
- FSM control: design one complete control unit from memory
- Pipeline hazards: 3 sequences, identify + forward + stall decisions

**Retrieval protocol:** Do NOT re-read notes. Each practice task must start from a blank page. Check answers only after completing. This forces the testing effect.

**Red flag:** If you cannot draw the multi-cycle datapath in <15 min, repeat 5 times daily until exam day. Repeat the same process for midterm exam week mornings.

**Sleep banking:** Bedtime moves to 22:00 for 5 nights (Weeks 6-7). Sleep 9 hours. This protects memory consolidation of datapath design, FSM control, and pipeline hazards during hippocampal replay in deep sleep.

**Time budget:** 7 hrs

---

## Week 8 — MIDTERM EXAM WEEK

**Focus:** No new material. Active recall only.

- Review 1-page cheat sheet (prepared Week 7)
- Sleep 8 hours each night
- During exam: Answer diagram/numerical questions first, theory second
- Check every control signal, every hazard classification

---

## Week 9 — ILP & Compiler Techniques (Recovery Week)

**Topics:** Instruction-Level Parallelism; ILP limitations (Amdahl's Law, ILP wall, power wall, memory wall); Loop unrolling; Software pipelining; Dependence analysis

**Resources:** Hennessy & Patterson Ch.3; Sarangi Ch. 10 (forwarding & performance)

**Recovery note:** If midterm scored below 85%, take 2 days at reduced load (20 hrs/week total). Recalibrate — a 78% midterm with 95%+ finals still yields B+/A-.

**Practice:**
- Unroll a loop with 4 iterations and identify remaining dependences — closed book, retrieve from memory
- Distinguish loop-carried vs loop-independent dependences — retrieve definitions from blank page
- Software pipelining: transform a loop for maximum throughput — closed book
- **Killer trap:** Amdahl's Law — Speedup = 1 / ((1 − f) + f/n). Students forget that speedup is limited by the non-parallelizable fraction f. Even infinite processors cannot speed up the sequential portion.
- **Interleaved retrieval (20 min):** Draw the multi-cycle datapath from blank paper in 12 min. Trace R-type, lw, sw, branch through it. Check accuracy only after finishing.

**Retrieval protocol:** Every practice item starts from a blank page. No peeking at notes. Answers checked only after completion.

**Deliverable:** 5 ILP numerical problems (Amdahl's Law + speedup calculations) + loop unrolling trace

**Time budget:** 6 hrs

---

## Week 10 — VLIW, Superscalar & SIMD/GPU

**Topics:** VLIW architecture; Superscalar processors; In-order vs out-of-order; SIMD vs SIMT; GPU architecture

**Resources:** Sarangi Ch. 12; NVIDIA CUDA basics

**Practice:**
- VLIW vs Superscalar comparison: static vs dynamic scheduling — closed book
- GPU architecture: warps, thread blocks, memory coalescing — retrieve from memory
- SIMT vs SIMD: when does each excel?
- **Interleaved retrieval (20 min):** 5 pipeline hazard sequences from blank paper — identify RAW/WAW/WAR, draw forwarding paths, show stall vs forward decisions. All closed book.

**Deliverable:** VLIW vs Superscalar comparison table + GPU architecture summary

**Time budget:** 6 hrs

---

## Week 11 — Memory Hierarchy & Cache Design

**Topics:** Cache memory; Direct-mapped, set-associative, fully-associative; Write policies; AMAT calculation

**Resources:** Sarangi Ch. 11; CA Ch.8

**Practice:**
- 10 cache numerical problems: address breakdown, tag/index/offset, miss rate, AMAT — closed book
- Direct-mapped vs set-associative: compare miss rates — retrieve from memory
- Write-back vs write-through: performance tradeoffs — blank page comparison table
- **Interleaved retrieval (20 min):** FSM control unit design from blank page — draw complete state diagram for R-type, lw, sw, branch. Every state transition verified. All closed book.

**Deliverable:** 5 cache performance calculations

**Time budget:** 6 hrs

---

## Week 12 — Virtual Memory & TLB

**Topics:** Virtual memory; Page tables; TLB; Effective access time; Multi-level paging

**Resources:** Sarangi Ch. 11 (Virtual Memory); OS concepts overlap with CS-329

**Sleep banking:** Begin sleeping 9 hrs (bedtime 22:00) for 7 nights leading to finals. This inoculates against exam-night sleep loss.

**Practice:**
- Page table size calculation for various architectures — closed book
- TLB reach computation — retrieve formula from memory
- Effective access time formula with TLB hit rate — derive from first principles
- Two-level paging: walk through a virtual address translation — from blank page
- **Interleaved retrieval (20 min):** Microprogrammed control — compare horizontal vs vertical from memory. Then single-cycle datapath from blank paper in 10 min. These topics (W1, W4) have had zero retrieval since midterm — retrieve before they decay below threshold.

**Deliverable:** 5 virtual memory numerical problems

**Time budget:** 6 hrs

---

## Week 13 — RAID & Advanced Topics

**Topics:** RAID levels 0, 1, 4, 5, 6, 10; RAID performance; Advanced memory design; I/O systems

**Resources:** Sarangi Ch. 13 (I/O & Storage — RAID); textbook RAID section

**Practice:**
- RAID comparison table: capacity, redundancy, read/write performance — retrieve from memory
- RAID 4 vs 5 write penalty calculation — closed book
- Multi-level cache inclusion policies — blank page comparison
- **Interleaved retrieval (20 min):** Timed multi-cycle datapath draw in 10 min from blank paper. Then 3 pipeline hazard sequence traces. This is your final speed drill before finals.

**Deliverable:** RAID comparison table + multi-level cache inclusion policy analysis

**Time budget:** 5 hrs

---

## Week 14 — Final Exam Preparation (Taper)

**Topics:** Cumulative review of Weeks 1-13

**Practice:**
- Timed full-length past paper (3 hrs, closed book) — START with the past paper, NOT with review
- Focus on weak areas identified in midterm — but only via retrieval, NEVER re-reading
- Pipeline hazard timing diagrams: 10 problems — all closed book, from blank page
- Numerical speed drills: CPI, cache, virtual memory — retrieve formulas from memory first
- Multi-cycle datapath: draw in 10 min — timed, closed book, blank paper
- FSM design: one complete control unit — from memory
- **Spaced repetition:** Redraw any diagram that took >10 min. Repeat until speed target is met.

**Retrieval protocol:** No passive reading at all this week. Every minute is active retrieval. If you cannot retrieve it, that tells you exactly what to prioritize.

**Sleep banking:** Continue 9 hrs sleep (bedtime 22:00). Do NOT trade sleep for last-minute studying — it degrades recall by 15-20% per lost hour.

**Deliverable:** One full past paper solved and self-graded

**Time budget:** 8 hrs

---

## Week 15 — FINAL EXAM

**Focus:** Execution. Do not learn anything new.

- Review 1-page cheat sheet (final version prepared Week 14)
- 8 hours sleep. The hardest numerical paper requires peak cognitive function
- Answer order: numericals → diagrams → theory
- Pipeline hazard tracing: write clearly, label every forwarding path
- If stuck on a problem, flag it and move on. Return if time permits

---

## Professor's Final Words

*Computer Architecture is not a memorization course. It is a **visualization** course. If you can see the pipeline in your mind, trace instructions through it, and feel where the hazards appear — you will not just pass, you will master it.*

*The students who get A+ in this course are the ones who draw. Every day. Without looking. Until the datapath lives in their muscle memory.*

*Be that student.*
