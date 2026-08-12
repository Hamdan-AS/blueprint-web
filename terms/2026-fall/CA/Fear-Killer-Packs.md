# FEAR-KILLER-PACKS

Each pack is 3-5 questions per syllabus topic. Questions are ordered hardest first — attack the fear immediately, then coast through the rest.

---

## CS-328 Computer Architecture

**Resources:** H&P CAQA 7th Ed • P&H COD RISC-V Ed • Sarangi Lecture Playlist • NPTEL IIT Delhi

**Schedule:** 15-week plan — Week 8 = midterm, Week 15 = final. Exam weeks carry no packs.

### CA-W1: topic-mips-isa-and-single-cycle
**Resources:** H&P CAQA App A (ISA principles) • P&H COD Ch 2 (RISC-V ISA parallels; syllabus is MIPS)

1. Decode `0xAC010004` into assembly and encode `addi $s0, $s1, -8` into machine code. Explain when sign extension happens and why I-type immediates are sign-extended.
2. Write the complete MIPS register convention table from memory: numbers and roles for $zero, $v0-$v1, $a0-$a3, $t0-$t9, $s0-$s7, $sp, $fp, $ra. Which register is hardwired to 0 and why does this enable `move` and `not`?
3. Draw the complete single-cycle datapath from blank paper with every control signal labeled. Trace `lw $t0, 4($s1)` showing every mux selection. Repeat until <15 min.
4. Given component delays (register 20ps, ALU 100ps, memory 200ps), compute the cycle time. Why is `lw` the critical path? Which instructions would be slowed down by a single-cycle design?

---

### CA-W2: topic-multi-cycle-datapath
**Resources:** H&P CAQA App C • P&H COD Ch 4

1. Trace `lw $t0, 4($s1)` through the multi-cycle datapath step-by-step. List the register transfers and control signals for each state. Then repeat for `beq $t0, $t1, label` — which states differ and why?
2. A single-cycle processor has cycle time 10ns. The same design in multi-cycle has states: IF=2ns, ID=1ns, EX=2ns, MEM=3ns, WB=1ns. For an instruction mix of 25% lw, 20% sw, 40% R-type, 15% branch, calculate the speedup of multi-cycle over single-cycle.
3. Draw the multi-cycle datapath from memory, labeling IR, MDR, A, B, and ALUOut. Why are these temporary registers needed? Which one is the exception and requires a write control signal?

---

### CA-W3: topic-fsm-control-unit
**Resources:** P&H COD App C (mapping control to hardware) • past papers from FAST/NED

1. Design the FSM state diagram for the multi-cycle control unit covering R-type, lw, sw, and branch instructions. Show all state transitions with conditions. Provide the state encoding table.
2. Every instruction must return to state 0 (instruction fetch). What breaks if a state transition is missing? Trace `sw $t1, 8($t2)` and show exactly where an incomplete diagram would stall the processor.
3. Contrast FSM-based (hardwired) control vs microprogrammed control: speed, flexibility, control store size. When does the FSM approach win and when does microprogramming win?

---

### CA-W4: topic-microprogrammed-control-and-pipeline-intro
**Resources:** P&H COD App C (microprogramming) • H&P CAQA App C (pipeline intro)

1. Differentiate horizontal vs vertical microprogramming. Design a microinstruction format for a control store with 64 microinstructions, 16 control signals, and a 6-way branch. Calculate the control store size.
2. Draw the 5-stage pipeline (IF, ID, EX, MEM, WB) with pipeline registers. Trace 3 instructions through it showing which stage each occupies per cycle.
3. What is the ideal speedup of a 5-stage pipeline? What prevents it in practice? Define structural, data, and control hazards in one sentence each.

---

### CA-W5: topic-pipeline-hazards
**Resources:** P&H COD Ch 4 (data/control hazards) • H&P CAQA App C

1. Given the sequence `lw $t0, 0($t1)` / `add $t2, $t0, $t3` / `sub $t4, $t2, $t5` / `sw $t4, 0($t6)`, identify every data hazard. Show which hazards are resolved by forwarding and which require a stall, with pipeline timing diagrams showing exactly when each instruction is in each stage.
2. Explain why WAR and WAW hazards do not occur in the standard 5-stage MIPS pipeline. Construct an out-of-order sequence where they would appear if the pipeline allowed it. Show the pipeline diagram.
3. A 5-stage pipeline has 30% branch instructions with 60% taken. Each misprediction costs 3 stalls. Structural hazards from the MEM unit occur on 10% of cycles costing 1 stall each. Calculate the effective CPI assuming ideal CPI = 1.
4. Why can't a structural hazard always be solved by adding more hardware? Give a concrete example where duplicating a resource creates more problems than it solves, including the cost and timing impact.
5. Trace the sequence `lw $t0, 0($t1)` / `add $t2, $t0, $t3` / `sub $t4, $t2, $t5` through the pipeline with forwarding paths drawn. Identify the exact cycle where each forwarding mux fires and which register values propagate.

---

### CA-W6: topic-forwarding-hazard-detection-and-branch-prediction
**Resources:** P&H COD Ch 4 (forwarding, branch prediction) • H&P CAQA App C

1. Design the complete forwarding unit with comparators and priority logic. Show EX/MEM forwarding vs MEM/WB forwarding, the exact comparison conditions, and explain why EX hazard takes priority over MEM hazard. Draw the circuit.
2. The `$zero` register must never be forwarded. Explain why this is a special case and implement the `$zero` check in the forwarding unit logic. Show the Verilog/Boolean expression. What incorrect behavior occurs if you forget this check?
3. Trace a 2-bit saturating counter predictor on the branch outcomes: T, T, T, NT, T, NT, NT, NT. Show the state diagram transitions step by step and count mispredictions. Repeat with a 1-bit predictor and compare the accuracy.
4. A loop iterates 10 times. Explain why a 1-bit predictor mispredicts twice (first and last iteration) while a 2-bit predictor mispredicts only once. Now generalize: what happens if the loop iterates only 3 times?
5. Calculate the branch penalty for a 5-stage pipeline using a 2-bit predictor with 85% accuracy. Branch frequency is 25%, branch penalty on mispredict is 3 cycles, no delay slot.

---

### CA-W7: topic-midterm-revision
**Resources:** Weeks 1-6 packs • timed past papers

1. Draw the multi-cycle datapath from BLANK paper in 12 minutes. Trace R-type, lw, sw, branch through it. Check accuracy against the key only after completing.
2. Design one complete FSM control unit from memory: state diagram for R-type, lw, sw, branch, with state encoding and every transition labeled.
3. Identify RAW/WAW/WAR in 5 instruction sequences. For each hazard, state the decision: forward, stall, or no action. Include at least one load-use and one $zero case.
4. Sit a full-length midterm past paper (2 hrs, closed book). Answer diagram/numerical questions first, theory second.

---

### Week 8: MIDTERM EXAM WEEK
No new pack. Active recall only — review the 1-page cheat sheet and sleep 8 hours.

---

### CA-W9: topic-compiler-ilp-techniques
**Resources:** H&P CAQA Ch 3 (ILP: unrolling, scheduling, software pipelining)

1. Unroll the following loop 4 times and schedule the resulting code to minimize stalls: `for(i=0; i<N; i++) A[i] = B[i] + C[i]`. Show the original pipeline schedule, the unrolled code, and the final schedule. Calculate the speedup from unrolling.
2. Given `for(i=0; i<100; i++) A[i] = A[i-1] + A[i+1]`, identify all loop-carried dependencies. Can this loop be parallelized across multiple processors? If not, show a transformation that enables parallelization.
3. Convert a 3-cycle loop body into a software-pipelined version showing the prologue, kernel, and epilogue. Take `lw $t0, 0($s1)` / `add $t0, $t0, $s2` / `sw $t0, 0($s1)` / `addi $s1, $s1, 4` and software-pipeline it.
4. A program is 80% parallelizable and runs on 4 processors. Compute the Amdahl's Law speedup. Now show that even with infinite processors, 10% sequential code caps speedup at 10x. Why do students forget the sequential fraction?

---

### CA-W10: topic-multiple-issue-simd-and-gpu
**Resources:** H&P CAQA Ch 3.6-3.7 (superscalar/VLIW), Ch 4 (SIMD/GPU) • P&H COD Ch 6 + App B (GPUs) • UC Berkeley CS61C

1. Design a VLIW instruction packet for a 2-issue processor (one ALU, one memory/ALU). Schedule `lw $t0,0($t1)` / `add $t2,$t3,$t4` / `sub $t5,$t6,$t7` / `sw $t5,0($t8)` into VLIW packets. How many cycles vs a 2-issue in-order superscalar?
2. A superscalar issues 4 instructions per cycle with a 5-cycle branch misprediction penalty. For a program with 20% branches and 90% prediction accuracy, compute effective IPC. Explain why IPC can never reach 4.
3. Write a SIMD addition of two 8-element arrays using a hypothetical 256-bit SIMD unit (8×32-bit). Then write the equivalent scalar loop. For N=1024, calculate the instruction count saved. Now show what happens when elements are accessed with a stride of 2 — can you still vectorize?
4. Explain the SIMT execution model used in NVIDIA GPUs. A warp of 32 threads encounters an if/else branch where 16 threads take the `if` path and 16 take `else`. Show the execution timeline and compute utilization. How does warp divergence affect performance?
5. Draw the GPU memory hierarchy showing global, shared, local, constant, and register memory with latency and scope of each. Given a matrix multiplication kernel, decide which memory type to use for: tile data, row pointers, constants, per-thread accumulators.

---

### CA-W11: topic-cache-design
**Resources:** H&P CAQA Ch 2 + App B • P&H COD Ch 5

1. A processor has a 32-bit address bus, 16 KB direct-mapped cache with 64-byte blocks. Calculate tag/index/offset sizes. Then trace accesses: 0x0000, 0x0040, 0x0100, 0x0040, 0x0000. Show hit/miss with LRU. Now redesign as 2-way set-associative — how do the bit fields change?
2. Calculate AMAT for: L1 hit time = 2 cycles, L1 miss rate = 5%, L2 hit time = 10 cycles, L2 miss rate = 20% (of L1 misses), memory = 200 cycles. Which component contributes the most to access time? What happens if you double L1 size (miss rate drops to 3% but hit time becomes 3 cycles)?
3. Compare write-back vs write-through: traffic, coherence, and performance trade-offs. From a given access sequence, compute the miss rate for direct-mapped vs set-associative organizations.

---

### CA-W12: topic-virtual-memory-and-tlb
**Resources:** P&H COD Ch 5 (VM/TLB) • H&P CAQA Ch 2 (+ online App L) • OS concepts overlap with CS-329

1. Given TLB access time = 1 cycle, memory access = 100 cycles, TLB hit rate = 98%, page fault rate = 1% of TLB misses, fault time = 5ms, calculate effective access time. Which component dominates? What if TLB hit rate drops to 90%?
2. For a 32-bit address with 4 KB pages, 10-bit first-level page table index, and 10-bit second-level index, compute the offset bits. Calculate total page table size for a process using 4 MB of memory. How does this change with 2 MB pages?
3. Compute TLB reach for 64 entries with 4 KB pages, then with 2 MB pages. Walk a two-level page table for a given virtual address showing the address split and each memory access.

---

### CA-W13: topic-raid-and-advanced-topics
**Resources:** P&H COD Ch 5.11 (RAID) • H&P CAQA online App D (storage systems)

1. A RAID 5 array has 8 disks (1 parity, 7 data). Compute the write penalty for a 4 KB write. Now compare RAID 5 vs RAID 10 for a write-heavy workload (70% writes, random 4 KB). Calculate IOPS for each.
2. Build the RAID comparison table from memory: RAID 0, 1, 4, 5, 6, 10 — capacity, redundancy, read/write performance. Why is RAID 4's dedicated parity disk a bottleneck that RAID 5 fixes?
3. Explain multi-level cache inclusion policies and I/O system performance. How does a write buffer depth affect throughput given a write frequency?

---

### CA-W14: topic-final-taper
**Resources:** Weeks 1-13 packs • timed past papers

1. List and explain the three fundamental ILP limitations: power wall, memory wall, ILP wall. For each, state one hardware technique that pushes past it and one fundamental physical constraint that remains.
2. Timed multi-cycle datapath draw in 10 min from blank paper. Then 3 pipeline hazard sequence traces. Then 10 hazard timing diagrams — all closed book.
3. Numerical speed drills: retrieve CPI, cache, and virtual memory formulas from memory first, then solve 5 problems per topic without peeking.
4. Sit a full-length final past paper (3 hrs, closed book). Every answer starts from a blank page — no re-reading notes.
5. Redraw any diagram that took >10 min. Repeat until the speed target is met.

---

### Week 15: FINAL EXAM
No new pack. Execution only: numericals → diagrams → theory, label every forwarding path, flag and move on if stuck.

---
