# CS-328 — OFFICIAL SYLLABUS

- **Credit Hours:** 3+0 (Theory 3, Practical 0)
- **Semester:** Third Year, Fall Semester
- **Source:** Detailed Syllabi BE(CS) batch 2018 onwards (PDF)
---
## Official Topic List

> Multi-cycle Processor Design, Control unit Design, FSM based implementation of Control Unit, Microprogrammed Control Unit, Instruction Level Parallelism (ILP): Concepts and Challenges - Pipeline Hazards, Avoiding Structural Hazards, Overcoming Data Hazards, Forwarding Unit design, Hazard Detection Unit Design, Basic Complier Techniques to expose ILP, Branch Prediction, Multiple Issue Architectures - VLIW and Superscalars, Limitations of ILP, Data Level Parallelism in SIMD and Graphic Processing Units (GPUs) Architecture, Detecting and Enhancing Loop-Level Parallelism; Advanced Topics in Memory System Design, Virtual Memory, RAID system
---
## Detailed Syllabus
---
### Module 1: Multi-Cycle Processor Design (6 hrs)

- Multi-cycle vs single-cycle trade-offs
- Multi-cycle datapath design
- State transitions for each instruction type
- Performance implications of multi-cycle execution
---
### Module 2: Control Unit Design — FSM-based & Microprogrammed (6 hrs)

- FSM state diagram design
- State encoding and output logic
- Microprogrammed control: horizontal vs vertical
- Control store and microinstruction sequencing
---
### Module 3: ILP: Concepts & Challenges; Pipeline Hazards (8 hrs)

- ILP concepts and challenges
- 5-stage pipeline structure
- Pipeline registers (IF/ID, ID/EX, EX/MEM, MEM/WB)
- Avoiding structural hazards
- Overcoming data hazards: RAW, WAW, WAR
- Control hazards
---
### Module 4: Forwarding Unit & Hazard Detection Unit Design (4 hrs)

- Forwarding unit design and priority logic
- Hazard detection and stalling
- Hazard detection unit design
---
### Module 5: Compiler Techniques to Expose ILP; Branch Prediction (4 hrs)

- Basic compiler techniques to expose ILP
- Branch prediction: 1-bit and 2-bit predictor state machines
---
### Module 6: Multiple Issue Architectures (4 hrs)

- VLIW architecture
- Superscalar processors (in-order vs out-of-order)
- Limitations of ILP
---
### Module 7: Data-Level Parallelism — SIMD & GPU (4 hrs)

- SIMD and GPU architecture
- Data-level parallelism: SIMD instruction sets
---
### Module 8: Detecting & Enhancing Loop-Level Parallelism (4 hrs)

- Detecting loop-level parallelism
- Loop unrolling
- Software pipelining
---
### Module 9: Advanced Memory System Design, Virtual Memory, RAID (8 hrs)

- Advanced topics in memory system design
- Virtual memory and page tables
- RAID levels
---
## Background & Supplementary (not in official syllabus)

The official syllabus starts directly at multi-cycle design. The following topics are prerequisites/supplementary and are not examinable per the official list:

- Instruction Set Architecture: MIPS formats (R/I/J), register conventions, addressing modes
- Single-cycle datapath: ALU, register file, memory, PC; control unit design (truth table → logic); cycle time/CPI
- Cache principles (temporal/spatial locality), direct-mapped/set-associative/fully-associative caches, write policies, AMAT
- TLB and effective access time, multi-level paging
- I/O systems and performance
---
## Recommended Textbooks

1. Hennessy & Patterson — Computer Architecture: A Quantitative Approach, 7th Ed
2. Patterson & Hennessy — Computer Organization and Design (RISC-V Ed)
3. Smruti R. Sarangi — Basic Computer Architecture, 2nd Ed
