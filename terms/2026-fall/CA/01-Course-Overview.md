# CS-328 — COMPUTER ARCHITECTURE — COURSE OVERVIEW
---
## Basic Info

- **Code:** CS-328
- **Credits:** 3+0
- **Contact Hours:** 3 lectures/week
- **Difficulty:** 5/5 (subjective)
- **GPA Risk:** High (subjective)
---
## Prerequisites

- Digital Logic Design (CS-221)
- Assembly Language (CS-223)
- *Editorial estimate — official NED syllabus lists no prerequisite for CS-328 (web-verified).*
---
## Weightage

- **Final:** 60%
- **Sessional:** 40%
- *Web-verified official NED theory grading policy (Final 60 / Sessional 40). The earlier 35/45/20 split is contradicted by official sources — see Shared/MASTER-DECISIONS.md Tier 10.*
---
## Official Syllabus
---
### Unit 1: MIPS ISA & Datapath

> **Examinability (locked 2026-08-02):** ISA/single-cycle = background-review (P2) per syllabus — covered for foundation, NOT examinable. See `weeks/CA-W1.md` line 18 + `weeks/README.md`.
- MIPS instruction formats (R-type, I-type, J-type)
- Register conventions
- Single-cycle datapath design and control
- Multi-cycle datapath design
- FSM control unit design
- Microprogrammed control (horizontal vs vertical)
---
### Unit 2: Pipelining

- 5-stage pipeline (IF, ID, EX, MEM, WB)
- Structural hazards
- Data hazards (RAW, WAW, WAR)
- Forwarding unit design
- Hazard detection unit
- Branch prediction (1-bit, 2-bit)
- Control hazards
---
### Unit 3: Instruction-Level Parallelism

- ILP concepts
- Loop unrolling
- Software pipelining
- VLIW architecture
- Superscalar processors
- SIMD/GPU architecture
---
### Unit 4: Memory Hierarchy

- Cache memory (direct-mapped, set-associative, fully-associative)
- Write policies (write-back vs write-through)
- AMAT calculation
- Virtual memory
- TLB and effective access time
- Multi-level paging
---
### Unit 5: Advanced Topics

- RAID levels (0, 1, 4, 5, 6, 10)
- Multi-level cache inclusion policies
- I/O systems
---
## Exam Weight Breakdown

*Editorial probability estimates — not from official sources. Use for study prioritization only.*

| Topic | Midterm Probability | Final Probability | Numerical | Diagram | Theory | Definition |
|-------|-------------------|-------------------|-----------|---------|--------|------------|
| MIPS ISA | 90% | 40% | 20% | 30% | 30% | 20% |
| SC datapath | 85% | 30% | 10% | 50% | 25% | 15% |
| Multi-cycle | 80% | 40% | 15% | 40% | 30% | 15% |
| FSM control | 70% | 40% | 10% | 45% | 30% | 15% |
| Pipeline hazards | 60% | 90% | 30% | 30% | 25% | 15% |
| Branch prediction | 40% | 70% | 25% | 25% | 30% | 20% |
| ILP/VLIW | 0% | 60% | 25% | 15% | 40% | 20% |
| Cache | 0% | 80% | 35% | 20% | 30% | 15% |
| Virtual memory | 0% | 75% | 35% | 20% | 30% | 15% |
| RAID | 0% | 50% | 20% | 20% | 40% | 20% |
---
## GPA Priority

| Chapter | Priority | Reason |
|---------|----------|--------|
| Pipeline hazards | 🟥 Must Win | Highest weight + highest difficulty |
| Multi-cycle datapath | 🟥 Must Win | Guaranteed diagram question |
| Cache memory | 🟧 High Yield | Numerical + diagram, predictable |
| MIPS ISA | 🟦 Background (P2) | Per syllabus: background, not examinable (locked 2026-08-02) |
| Virtual memory | 🟧 High Yield | Numerical heavy |
| FSM control | 🟧 High Yield | Midterm favorite |
| ILP/VLIW | 🟨 Moderate | Moderate weight |
| RAID | 🟩 Low Yield | Low weight, low frequency |
