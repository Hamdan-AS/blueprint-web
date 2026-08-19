# CA-AFTER-MID — WEEKS 9–15 · 12 OCT – 29 NOV 2026 · FINAL (W15)

<!-- colors: 9:#ffd27a:#b45309 10-12:#c7adff:#6d28d9 13-14:#80d8cc:#0f766e 15:#ff9e9e:#dc2626 -->

> **Scope:** Weeks 9–15 (12 Oct – 29 Nov 2026) — ILP & compiler techniques, VLIW/superscalar, SIMD/GPU, memory hierarchy & cache design, virtual memory & TLB, RAID & advanced topics, ending at the Week 15 final.
> **Siblings:** `CA-NAV.md` (master map) · `CA-BEFORE-MID.md` (Weeks 1–8). Week-colored headers below match the NAV schedule.
> **Exam split:** 60% diagram accuracy + numerical precision, 40% theory. Drawing from memory is the skill.
> **Exam order:** numericals → diagrams → theory (final).

---
## At a glance (W9–W15)

| W | Dates | Variant | File | Topics | Chapter |
|---|---|---|---|---|---|
| W9 | 12–18 Oct | P1 | AFTER | ILP & compiler techniques (recovery) | — (pack-level) |
| W10 | 19–25 Oct | P1 | AFTER | VLIW, superscalar, SIMD/GPU | — (pack-level) |
| W11 | 26 Oct–01 Nov | P0 | AFTER | Memory hierarchy & cache design | 05 |
| W12 | 02–08 Nov | P0 | AFTER | Virtual memory & TLB | 05 |
| W13 | 09–15 Nov | P1 | AFTER | RAID & advanced topics | — (pack-level) |
| W14 | 16–22 Nov | P0 | AFTER | Final taper — past paper FIRST | 01–05 |
| W15 | 23–29 Nov | FINAL | AFTER | Exam — execute | — |

> Tier key: **P0** = no exam pressure (front-load new material) · **P1** = light revision · **P2** = drill-heavy week.

---
### W9 — ILP & Compiler Techniques · 12–18 Oct · P1 · 6 hrs

**Banner:** Rotation CA (Mon+Tue) · Tier P1 · Time budget 6 hrs · P0 floor: pack pass + def/formula skim + same-problem drill. **Recovery week — ledger MUST clear to 0.**

#### Sources & offsets

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 9 | lines 152–171 |
| Fear-Killer Pack | `Fear-Killer-Packs.md` → CA-W9 | lines 71–77 |
| Week manifest | `weeks/CA-W9.md` | full file |
| Chapter breakdown | — (M5 gap: compiler ILP + branch prediction is pack-level only) | — |

#### Definitions (verbatim)

| Term | Definition |
|---|---|
| Amdahl's Law | The speedup of a system using multiple processors is limited by the fraction of the task that cannot be parallelized. Speedup = 1 / ((1 − f) + f/n). |
| ILP (Instruction-Level Parallelism) | The degree to which instructions in a program can be executed in parallel. |

#### Formulas (verbatim)

| Formula | Statement |
|---|---|
| Amdahl's Law | Speedup = 1 / ((1 − f) + f/n) |
| CPU Time | CPU Time = Instruction Count × CPI × Cycle Time |
| Speedup | Speedup = Old Time / New Time |

#### Diagrams · Numericals · Tricky · Top-100

| Type | Items |
|---|---|
| Diagrams | — (pack-level; reuse pipeline **#3/#4** for ILP context) |
| Numericals | `Numerical-Book.md` **#4** Amdahl's Law · **#2** CPU time |
| Tricky | `Top-10-Tricky-Concepts.md` **#9** Amdahl counterintuitive result |
| Top-100 | `Top-100-Questions.md` **#78** loop unrolling ILP · **#79/#84/#88** ILP walls · **#82/#83** Amdahl · **#90** software pipelining |

#### Books · Chapters · Media

| Resource | Where |
|---|---|
| Hennessy & Patterson CAQA | Ch 3 (ILP: unrolling, scheduling, software pipelining) |
| Sarangi (IITD) | Ch 10 (forwarding & performance) |

#### Fear-Killer Pack CA-W9 (verbatim)

**Resources:** H&P CAQA Ch 3 (ILP: unrolling, scheduling, software pipelining)

1. Unroll the following loop 4 times and schedule the resulting code to minimize stalls: `for(i=0; i<N; i++) A[i] = B[i] + C[i]`. Show the original pipeline schedule, the unrolled code, and the final schedule. Calculate the speedup from unrolling.
2. Given `for(i=0; i<100; i++) A[i] = A[i-1] + A[i+1]`, identify all loop-carried dependencies. Can this loop be parallelized across multiple processors? If not, show a transformation that enables parallelization.
3. Convert a 3-cycle loop body into a software-pipelined version showing the prologue, kernel, and epilogue. Take `lw $t0, 0($s1)` / `add $t0, $t0, $s2` / `sw $t0, 0($s1)` / `addi $s1, $s1, 4` and software-pipeline it.
4. A program is 80% parallelizable and runs on 4 processors. Compute the Amdahl's Law speedup. Now show that even with infinite processors, 10% sequential code caps speedup at 10x. Why do students forget the sequential fraction?

#### Narrative — Week 9 (verbatim)

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

#### P0 floor · Drill target · Deliverable · Trap

- **P0 floor:** fear-killer pack pass (Q4 Amdahl first + Q1 unroll) · def/formula skim (ILP def + Amdahl formula) · same-problem drill #4
- **Same-problem drill target:** Amdahl speedup &lt; 30 s; unroll+schedule a loop without stalling
- **Deliverable:** 5 ILP numerical problems (Amdahl's Law + speedup calculations) + loop unrolling trace
- **Trap:** Amdahl's Law — speedup is limited by the non-parallelizable fraction f; even infinite processors can't speed up the sequential portion. Recovery mandate: ledger MUST clear to 0.

---
### W10 — VLIW, Superscalar & SIMD/GPU · 19–25 Oct · P1 · 6 hrs

**Banner:** Rotation CA (Mon+Tue) · Tier P1 · Time budget 6 hrs · P0 floor: pack pass + def/formula skim + same-problem drill.

#### Sources & offsets

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 10 | lines 175–189 |
| Fear-Killer Pack | `Fear-Killer-Packs.md` → CA-W10 | lines 79–86 |
| Week manifest | `weeks/CA-W10.md` | full file |
| Chapter breakdown | — (M6/M7 gap: VLIW/superscalar/ILP limits; SIMD/GPU is pack-level only) | — |

#### Definitions (verbatim)

| Term | Definition |
|---|---|
| Superscalar | A processor that can issue multiple instructions per clock cycle. |
| VLIW (Very Long Instruction Word) | An architecture where multiple operations are encoded in a single long instruction. |

#### Formulas (verbatim)

| Formula | Statement |
|---|---|
| CPU Time | CPU Time = Instruction Count × CPI × Cycle Time |
| Speedup | Speedup = Old Time / New Time |
| Effective IPC | Instructions completed per cycle — capped below issue width by stalls + branch mispredictions. |

#### Diagrams · Numericals · Tricky · Top-100

| Type | Items |
|---|---|
| Diagrams | `Diagram-Book.md` **#14** VLIW instruction packet · **#15** superscalar pipeline (canonical) |
| Numericals | `Numerical-Book.md` **#2** CPU time |
| Tricky | `Top-10-Tricky-Concepts.md` **#10** VLIW vs Superscalar trade-off |
| Top-100 | `Top-100-Questions.md` **#76** VLIW vs Superscalar · **#77** SIMD vs SIMT · **#85** GPU warp scheduling · **#86** memory coalescing · **#87** VLIW static scheduling |

#### Books · Chapters · Media

| Resource | Where |
|---|---|
| Hennessy & Patterson CAQA | Ch 3.6–3.7 (superscalar/VLIW) · Ch 4 (SIMD/GPU) |
| Patterson & Hennessy COD | Ch 6 + App B (GPUs) |
| Sarangi (IITD) | Ch 12 |
| Media | UC Berkeley CS61C · NVIDIA CUDA basics |

#### Fear-Killer Pack CA-W10 (verbatim)

**Resources:** H&P CAQA Ch 3.6-3.7 (superscalar/VLIW), Ch 4 (SIMD/GPU) • P&H COD Ch 6 + App B (GPUs) • UC Berkeley CS61C

1. Design a VLIW instruction packet for a 2-issue processor (one ALU, one memory/ALU). Schedule `lw $t0,0($t1)` / `add $t2,$t3,$t4` / `sub $t5,$t6,$t7` / `sw $t5,0($t8)` into VLIW packets. How many cycles vs a 2-issue in-order superscalar?
2. A superscalar issues 4 instructions per cycle with a 5-cycle branch misprediction penalty. For a program with 20% branches and 90% prediction accuracy, compute effective IPC. Explain why IPC can never reach 4.
3. Write a SIMD addition of two 8-element arrays using a hypothetical 256-bit SIMD unit (8×32-bit). Then write the equivalent scalar loop. For N=1024, calculate the instruction count saved. Now show what happens when elements are accessed with a stride of 2 — can you still vectorize?
4. Explain the SIMT execution model used in NVIDIA GPUs. A warp of 32 threads encounters an if/else branch where 16 threads take the `if` path and 16 take `else`. Show the execution timeline and compute utilization. How does warp divergence affect performance?
5. Draw the GPU memory hierarchy showing global, shared, local, constant, and register memory with latency and scope of each. Given a matrix multiplication kernel, decide which memory type to use for: tile data, row pointers, constants, per-thread accumulators.

#### Narrative — Week 10 (verbatim)

**Topics:** VLIW architecture; Superscalar processors; In-order vs out-of-order; SIMD vs SIMT; GPU architecture

**Resources:** Sarangi Ch. 12; NVIDIA CUDA basics

**Practice:**
- VLIW vs Superscalar comparison: static vs dynamic scheduling — closed book
- GPU architecture: warps, thread blocks, memory coalescing — retrieve from memory
- SIMT vs SIMD: when does each excel?
- **Interleaved retrieval (20 min):** 5 pipeline hazard sequences from blank paper — identify RAW/WAW/WAR, draw forwarding paths, show stall vs forward decisions. All closed book.

**Deliverable:** VLIW vs Superscalar comparison table + GPU architecture summary

**Time budget:** 6 hrs

#### P0 floor · Drill target · Deliverable · Trap

- **P0 floor:** fear-killer pack pass (Q1 VLIW packet + Q4 SIMT timeline) · def/formula skim (Superscalar/VLIW defs + Performance formulas) · same-problem drill #2
- **Same-problem drill target:** VLIW packet scheduling &lt; 30 s; warp-divergence utilization calc &lt; 2 min
- **Deliverable:** VLIW vs Superscalar comparison table + GPU architecture summary
- **Trap:** M6/M7 gap — no chapter breakdown for VLIW/superscalar or SIMD/GPU; mapped at pack level

---
### W11 — Memory Hierarchy & Cache Design · 26 Oct–01 Nov · P0 · 6 hrs

**Banner:** Rotation CA (Mon+Tue) · Tier P0 · Time budget 6 hrs · P0 floor: pack pass + def/formula skim + same-problem drill.

#### Sources & offsets

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 11 | lines 193–207 |
| Fear-Killer Pack | `Fear-Killer-Packs.md` → CA-W11 | lines 88–93 |
| Week manifest | `weeks/CA-W11.md` | full file |
| Chapter breakdown | `03-Chapter-Breakdowns/05-…` (cache part) | embedded below |

#### Definitions (verbatim)

| Term | Definition |
|---|---|
| Cache | A small, fast memory that stores frequently accessed data to reduce average memory access time. |
| Direct-Mapped Cache | A cache organization where each memory block maps to exactly one cache line. |
| Set-Associative Cache | A cache where each memory block maps to a set of multiple cache lines. |
| AMAT (Average Memory Access Time) | The average time to access memory, computed as Hit Time + Miss Rate × Miss Penalty. |

#### Formulas (verbatim)

| Formula | Statement |
|---|---|
| AMAT | AMAT = Hit Time + Miss Rate × Miss Penalty |
| Offset bits | Offset bits = log₂(Block Size) |
| Index bits | Index bits = log₂(Number of Sets) |
| Tag bits | Tag bits = Address bits − Index − Offset |
| Cache Size | Cache Size = Number of Sets × Associativity × Block Size |

#### Diagrams · Numericals · Tricky · Top-100

| Type | Items |
|---|---|
| Diagrams | `Diagram-Book.md` **#10** direct-mapped cache · **#11** set-associative cache (canonical) |
| Numericals | `Numerical-Book.md` **#5** address breakdown · **#6** AMAT · **#8** miss rate |
| Tricky | `Top-10-Tricky-Concepts.md` **#7** write-back vs write-through coherence |
| Top-100 | `Top-100-Questions.md` **#56–#75** (cache & memory) |

#### Books · Chapters · Media

| Resource | Where |
|---|---|
| Sarangi (IITD) | Ch 11 (cache) · CA textbook Ch 8 |
| Hennessy & Patterson CAQA | Ch 2 + App B |
| Patterson & Hennessy COD | Ch 5 (memory hierarchy) |

#### Fear-Killer Pack CA-W11 (verbatim)

**Resources:** H&P CAQA Ch 2 + App B • P&H COD Ch 5

1. A processor has a 32-bit address bus, 16 KB direct-mapped cache with 64-byte blocks. Calculate tag/index/offset sizes. Then trace accesses: 0x0000, 0x0040, 0x0100, 0x0040, 0x0000. Show hit/miss with LRU. Now redesign as 2-way set-associative — how do the bit fields change?
2. Calculate AMAT for: L1 hit time = 2 cycles, L1 miss rate = 5%, L2 hit time = 10 cycles, L2 miss rate = 20% (of L1 misses), memory = 200 cycles. Which component contributes the most to access time? What happens if you double L1 size (miss rate drops to 3% but hit time becomes 3 cycles)?
3. Compare write-back vs write-through: traffic, coherence, and performance trade-offs. From a given access sequence, compute the miss rate for direct-mapped vs set-associative organizations.

#### Narrative — Week 11 (verbatim)

**Topics:** Cache memory; Direct-mapped, set-associative, fully-associative; Write policies; AMAT calculation

**Resources:** Sarangi Ch. 11; CA Ch.8

**Practice:**
- 10 cache numerical problems: address breakdown, tag/index/offset, miss rate, AMAT — closed book
- Direct-mapped vs set-associative: compare miss rates — retrieve from memory
- Write-back vs write-through: performance tradeoffs — blank page comparison table
- **Interleaved retrieval (20 min):** FSM control unit design from blank page — draw complete state diagram for R-type, lw, sw, branch. Every state transition verified. All closed book.

**Deliverable:** 5 cache performance calculations

**Time budget:** 6 hrs

#### Chapter 5 — Cache and Virtual Memory (verbatim)

##### Weight: ★★★★☆
##### Difficulty: ★★★★☆
##### Importance: ★★★★☆

##### Learning Objectives

###### Explain
- Temporal and spatial locality
- Cache mapping techniques
- Virtual memory and paging

###### Compare
- Direct-mapped vs set-associative vs fully-associative
- Write-back vs write-through

###### Calculate
- Tag, index, offset from address
- AMAT (Average Memory Access Time)
- Effective access time with TLB
- Page table size

###### Design
- Cache organization for given parameters

##### Must Memorize

**AMAT:** Average Memory Access Time = Hit Time + Miss Rate × Miss Penalty

**Effective Access Time (with TLB):** EAT = TLB Hit Rate × (TLB Hit Time + Cache Hit Time) + (1 − TLB Hit Rate) × (TLB Miss Penalty + Cache Access Time)

##### Must Practice
- 10+ cache address breakdown problems
- 10+ AMAT calculations
- 5+ page table/TLB problems

##### Common Mistakes

1. **Address breakdown** — bits for offset = log₂(block size), index = log₂(number of sets), tag = remaining
2. **Write-back vs write-through distinction** — write-back updates cache only, writes to memory only on eviction
3. **TLB reach** = TLB entries × page size
4. **Multi-level page tables** — each level adds an extra memory access

##### GPA Priority: 🟧 High Yield

#### P0 floor · Drill target · Deliverable · Trap

- **P0 floor:** fear-killer pack pass (Q1 tag/index/offset + Q2 AMAT) · def/formula skim (Cache/Direct-Mapped/Set-Associative defs + Cache formulas) · same-problem drill #5/#6/#8
- **Same-problem drill target:** AMAT &lt; 30 s; address breakdown (tag/index/offset) &lt; 1 min
- **Deliverable:** 5 cache performance calculations
- **Trap:** offset = log₂(block size), index = log₂(number of sets), tag = remaining bits

---
### W12 — Virtual Memory & TLB · 02–08 Nov · P0 · 6 hrs

**Banner:** Rotation CA (Mon+Tue) · Tier P0 · Time budget 6 hrs · P0 floor: pack pass + def/formula skim + same-problem drill. **Start sleep banking: 9 hrs (bedtime 22:00) for 7 nights.**

#### Sources & offsets

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 12 | lines 211–228 |
| Fear-Killer Pack | `Fear-Killer-Packs.md` → CA-W12 | lines 95–100 |
| Week manifest | `weeks/CA-W12.md` | full file |
| Chapter breakdown | `03-Chapter-Breakdowns/05-…` (VM part) | reference (embedded W11) |

#### Definitions (verbatim)

| Term | Definition |
|---|---|
| Virtual Memory | A memory management technique that gives each process the illusion of a large, contiguous address space. |
| TLB (Translation Lookaside Buffer) | A cache for page table entries that speeds up virtual-to-physical address translation. |

#### Formulas (verbatim)

| Formula | Statement |
|---|---|
| EAT (with TLB) | EAT = H × (t + m) + (1 − H) × (t + k·n + m) — H = TLB hit rate, t = TLB access time, k = page-table levels, n = memory access per level, m = data memory access time |
| EAT (simplified) | EAT = H × m + (1 − H) × 2m |
| TLB Reach | TLB Reach = TLB Entries × Page Size |
| Page Table Size | Page Table Size = Number of Pages × Page Table Entry Size |

#### Diagrams · Numericals · Tricky · Top-100

| Type | Items |
|---|---|
| Diagrams | `Diagram-Book.md` **#12** virtual → physical translation (canonical) · **#17** two-level page table walk · **#19** TLB structure |
| Numericals | `Numerical-Book.md` **#9** EAT · **#10** TLB reach · **#11** page table size · **#12** two-level paging |
| Tricky | — (pack-level; see Chapter 5 common mistakes #3/#4) |
| Top-100 | `Top-100-Questions.md` **#66–#70** · **#75** (VM/TLB) |

#### Books · Chapters · Media

| Resource | Where |
|---|---|
| Patterson & Hennessy COD | Ch 5 (VM/TLB) |
| Hennessy & Patterson CAQA | Ch 2 (+ online App L) |
| Sarangi (IITD) | Ch 11 (Virtual Memory) |
| OS concepts | overlap with CS-329 |

#### Fear-Killer Pack CA-W12 (verbatim)

**Resources:** P&H COD Ch 5 (VM/TLB) • H&P CAQA Ch 2 (+ online App L) • OS concepts overlap with CS-329

1. Given TLB access time = 1 cycle, memory access = 100 cycles, TLB hit rate = 98%, page fault rate = 1% of TLB misses, fault time = 5ms, calculate effective access time. Which component dominates? What if TLB hit rate drops to 90%?
2. For a 32-bit address with 4 KB pages, 10-bit first-level page table index, and 10-bit second-level index, compute the offset bits. Calculate total page table size for a process using 4 MB of memory. How does this change with 2 MB pages?
3. Compute TLB reach for 64 entries with 4 KB pages, then with 2 MB pages. Walk a two-level page table for a given virtual address showing the address split and each memory access.

#### Narrative — Week 12 (verbatim)

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

#### P0 floor · Drill target · Deliverable · Trap

- **P0 floor:** fear-killer pack pass (Q1 EAT + Q3 TLB reach) · def/formula skim (TLB/Virtual Memory defs + VM formulas) · same-problem drill #9/#10/#11/#12
- **Same-problem drill target:** EAT &lt; 30 s; page-table size calc &lt; 1 min; TLB reach &lt; 30 s
- **Deliverable:** 5 virtual memory numerical problems
- **Trap:** multi-level page tables — each level adds an extra memory access; W1/W4 topics have had zero retrieval since midterm — retrieve before decay

---
### W13 — RAID & Advanced Topics · 09–15 Nov · P1 · 5 hrs

**Banner:** Rotation CA (Mon+Tue) · Tier P1 · Time budget 5 hrs · P0 floor: pack pass + def/formula skim + same-problem drill.

#### Sources & offsets

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 13 | lines 232–246 |
| Fear-Killer Pack | `Fear-Killer-Packs.md` → CA-W13 | lines 102–107 |
| Week manifest | `weeks/CA-W13.md` | full file |
| Chapter breakdown | — (M9 RAID is pack-only; Ch5 covers cache+VM) | reference (embedded W11) |

#### Definitions (verbatim)

| Term | Definition |
|---|---|
| RAID | Redundant Array of Independent Disks — a storage technology that combines multiple disk drives for performance and/or redundancy. |

#### Formulas (verbatim)

| Formula | Statement |
|---|---|
| RAID 5 Usable | RAID 5 Usable = (N − 1) × Disk Size |
| RAID 5 Write Penalty | RAID 5 Write Penalty = 4 I/Os per write (2 reads + 2 writes) |

#### Diagrams · Numericals · Tricky · Top-100

| Type | Items |
|---|---|
| Diagrams | `Diagram-Book.md` **#13** RAID 0, 1, 5, 6, 10 layouts (canonical) |
| Numericals | `Numerical-Book.md` **#6** AMAT (for cache inclusion) · **#24** write buffer depth · **#25** multi-level cache AMAT |
| Tricky | `Top-10-Tricky-Concepts.md` **#8** RAID 4 vs 5 write penalty |
| Top-100 | `Top-100-Questions.md` **#80** RAID 5 write penalty · **#81** RAID levels · **#89** RAID capacity |

#### Books · Chapters · Media

| Resource | Where |
|---|---|
| Patterson & Hennessy COD | Ch 5.11 (RAID) |
| Hennessy & Patterson CAQA | online App D (storage systems) |
| Sarangi (IITD) | Ch 13 (I/O & Storage — RAID) |

#### Fear-Killer Pack CA-W13 (verbatim)

**Resources:** P&H COD Ch 5.11 (RAID) • H&P CAQA online App D (storage systems)

1. A RAID 5 array has 8 disks (1 parity, 7 data). Compute the write penalty for a 4 KB write. Now compare RAID 5 vs RAID 10 for a write-heavy workload (70% writes, random 4 KB). Calculate IOPS for each.
2. Build the RAID comparison table from memory: RAID 0, 1, 4, 5, 6, 10 — capacity, redundancy, read/write performance. Why is RAID 4's dedicated parity disk a bottleneck that RAID 5 fixes?
3. Explain multi-level cache inclusion policies and I/O system performance. How does a write buffer depth affect throughput given a write frequency?

#### Narrative — Week 13 (verbatim)

**Topics:** RAID levels 0, 1, 4, 5, 6, 10; RAID performance; Advanced memory design; I/O systems

**Resources:** Sarangi Ch. 13 (I/O & Storage — RAID); textbook RAID section

**Practice:**
- RAID comparison table: capacity, redundancy, read/write performance — retrieve from memory
- RAID 4 vs 5 write penalty calculation — closed book
- Multi-level cache inclusion policies — blank page comparison
- **Interleaved retrieval (20 min):** Timed multi-cycle datapath draw in 10 min from blank paper. Then 3 pipeline hazard sequence traces. This is your final speed drill before finals.

**Deliverable:** RAID comparison table + multi-level cache inclusion policy analysis

**Time budget:** 5 hrs

#### P0 floor · Drill target · Deliverable · Trap

- **P0 floor:** fear-killer pack pass (Q1 write penalty + Q2 RAID table) · def/formula skim (RAID def + RAID formulas) · same-problem drill #6
- **Same-problem drill target:** RAID write penalty &lt; 30 s; RAID table from memory in full
- **Deliverable:** RAID comparison table + multi-level cache inclusion policy analysis
- **Trap:** RAID 4's dedicated parity disk is a bottleneck — RAID 5 distributes parity (write penalty = 4 I/Os)

---
### W14 — Final Taper · 16–22 Nov · P0 · 8 hrs

**Banner:** Rotation CA (Mon+Tue) · Tier P0 · Time budget 8 hrs · P0 floor: pack pass + def/formula skim + same-problem drill. **START with the past paper, NOT with review.**

#### Sources & offsets

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 14 | lines 250–269 |
| Fear-Killer Pack | `Fear-Killer-Packs.md` → CA-W14 | lines 109–116 |
| Week manifest | `weeks/CA-W14.md` | full file |
| Chapter breakdowns | all 5 files | reference (embedded W1, W2, W5, W11) |

#### Definitions (verbatim) — full W1–W13 sweep

| Term | Definition |
|---|---|
| ISA | The interface between hardware and software, defining the instructions, registers, memory addressing, and data types. |
| Single-cycle Datapath | A processor where every instruction executes in one clock cycle. |
| Multi-cycle Datapath | A processor implementation that breaks instruction execution into multiple steps. |
| Microprogrammed Control | A control unit implementation that uses microinstructions stored in a control store to generate control signals. |
| Hazard | A condition that prevents the next instruction in the pipeline from executing during its designated clock cycle. |
| RAW Hazard | A true data dependence where an instruction reads a register that a previous instruction writes (Read After Write). |
| Forwarding (Bypassing) | A technique that resolves data hazards by feeding the ALU output from a later pipeline stage back to the ALU input of an earlier stage. |
| Branch Prediction | A technique that predicts the outcome of a conditional branch before it is resolved, allowing the pipeline to continue without stalling. |
| ILP | The degree to which instructions in a program can be executed in parallel. |
| Amdahl's Law | The speedup of a system using multiple processors is limited by the fraction of the task that cannot be parallelized. Speedup = 1 / ((1 − f) + f/n). |
| CPI | The average number of clock cycles per instruction, used to measure processor performance. |
| Cache | A small, fast memory that stores frequently accessed data to reduce average memory access time. |
| Direct-Mapped Cache | A cache organization where each memory block maps to exactly one cache line. |
| Set-Associative Cache | A cache where each memory block maps to a set of multiple cache lines. |
| AMAT | The average time to access memory, computed as Hit Time + Miss Rate × Miss Penalty. |
| Virtual Memory | A memory management technique that gives each process the illusion of a large, contiguous address space. |
| TLB | A cache for page table entries that speeds up virtual-to-physical address translation. |
| Superscalar | A processor that can issue multiple instructions per clock cycle. |
| VLIW | An architecture where multiple operations are encoded in a single long instruction. |
| RAID | Redundant Array of Independent Disks — a storage technology that combines multiple disk drives for performance and/or redundancy. |

#### Formulas (verbatim) — full sweep

| Formula | Statement |
|---|---|
| CPU Time | CPU Time = Instruction Count × CPI × Cycle Time |
| Speedup | Speedup = Old Time / New Time |
| Amdahl's Law | Speedup = 1 / ((1 − f) + f/n) |
| AMAT | AMAT = Hit Time + Miss Rate × Miss Penalty |
| Offset bits | Offset bits = log₂(Block Size) |
| Index bits | Index bits = log₂(Number of Sets) |
| Tag bits | Tag bits = Address bits − Index − Offset |
| Cache Size | Cache Size = Number of Sets × Associativity × Block Size |
| EAT (with TLB) | EAT = H × (t + m) + (1 − H) × (t + k·n + m) |
| EAT (simplified) | EAT = H × m + (1 − H) × 2m |
| TLB Reach | TLB Reach = TLB Entries × Page Size |
| Page Table Size | Page Table Size = Number of Pages × Page Table Entry Size |
| RAID 5 Usable | RAID 5 Usable = (N − 1) × Disk Size |
| RAID 5 Write Penalty | RAID 5 Write Penalty = 4 I/Os per write (2 reads + 2 writes) |

#### Diagrams · Numericals · Tricky · Top-100

| Type | Items |
|---|---|
| Diagrams | `Diagram-Book.md` **#1–#15** full sweep (canonical) |
| Numericals | `Numerical-Book.md` **#1/#2/#6/#9** (CPI, CPU time, AMAT, EAT) |
| Tricky | `Top-10-Tricky-Concepts.md` all 10 |
| Top-100 | `Top-100-Questions.md` **#1–#100** |

#### Books · Chapters · Media

| Resource | Where |
|---|---|
| Weeks 1–13 packs | timed past papers |

#### Fear-Killer Pack CA-W14 (verbatim)

**Resources:** Weeks 1-13 packs • timed past papers

1. List and explain the three fundamental ILP limitations: power wall, memory wall, ILP wall. For each, state one hardware technique that pushes past it and one fundamental physical constraint that remains.
2. Timed multi-cycle datapath draw in 10 min from blank paper. Then 3 pipeline hazard sequence traces. Then 10 hazard timing diagrams — all closed book.
3. Numerical speed drills: retrieve CPI, cache, and virtual memory formulas from memory first, then solve 5 problems per topic without peeking.
4. Sit a full-length final past paper (3 hrs, closed book). Every answer starts from a blank page — no re-reading notes.
5. Redraw any diagram that took >10 min. Repeat until the speed target is met.

#### Narrative — Week 14 (verbatim)

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

#### P0 floor · Drill target · Deliverable · Trap

- **P0 floor:** fear-killer pack pass (Q4 full past paper + Q2 timed draw) · def/formula skim (all W1–W13 defs; formulas from memory first) · same-problem drill #1/#2/#6/#9
- **Same-problem drill target:** every diagram that took &gt;10 min re-drawn until speed target; numerical formulas retrieved from memory before solving
- **Deliverable:** one full past paper solved and self-graded
- **Trap:** no passive reading — every minute active retrieval; START with the past paper, NOT with review

---
### W15 — FINAL EXAM WEEK · 23–29 Nov · Exam

**Banner:** Rotation CA (Mon+Tue) · Tier FINAL · No new deep study, no floor accrual. Ledger frozen during W15.

#### Sources

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 15 | lines 273–283 |
| Pack | `Fear-Killer-Packs.md` → Week 15 | lines 118–119 |
| Week manifest | (W15 note at `weeks/CA-W14.md` L47) | reference |

#### Fear-Killer Pack — Week 15 (verbatim)

**Week 15: FINAL EXAM** — No new pack. Execution only: numericals → diagrams → theory, label every forwarding path, flag and move on if stuck.

#### Narrative — Week 15 (verbatim)

**Focus:** Execution. Do not learn anything new.

- Review 1-page cheat sheet (final version prepared Week 14)
- 8 hours sleep. The hardest numerical paper requires peak cognitive function
- Answer order: numericals → diagrams → theory
- Pipeline hazard tracing: write clearly, label every forwarding path
- If stuck on a problem, flag it and move on. Return if time permits

#### Exam-day stack (final)

- [ ] Numerical speed drills first — CPI, cache, VM formulas from memory
- [ ] Diagram paper: multi-cycle draw (10 min), pipeline hazard traces, every forwarding path labeled
- [ ] Theory last; flag stuck problems and move on

#### Notes

- Review the 1-page cheat sheet (prepared Wk14). Sleep 8 h each night.
- Exam order: numericals → diagrams → theory.
- **Ledger frozen during Wk15** — exam window 30 Nov – 18 Dec is a separate phase (per `weeks/CA-W14.md` L47).
