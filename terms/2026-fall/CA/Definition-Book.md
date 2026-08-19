# MASTER DEFINITION BOOK
---
## CS-328 — Computer Architecture

**A** — **Amdahl's Law:** The speedup of a system using multiple processors is limited by the fraction of the task that cannot be parallelized. Speedup = 1 / ((1 − f) + f/n).

**AMAT (Average Memory Access Time):** The average time to access memory, computed as Hit Time + Miss Rate × Miss Penalty.

**Branch Prediction:** A technique that predicts the outcome of a conditional branch before it is resolved, allowing the pipeline to continue without stalling.

**CPI (Cycles Per Instruction):** The average number of clock cycles per instruction, used to measure processor performance.

**Cache:** A small, fast memory that stores frequently accessed data to reduce average memory access time.

**Direct-Mapped Cache:** A cache organization where each memory block maps to exactly one cache line.

**Forwarding (Bypassing):** A technique that resolves data hazards by feeding the ALU output from a later pipeline stage back to the ALU input of an earlier stage.

**Hazard:** A condition that prevents the next instruction in the pipeline from executing during its designated clock cycle.

**ILP (Instruction-Level Parallelism):** The degree to which instructions in a program can be executed in parallel.

**ISA (Instruction Set Architecture):** The interface between hardware and software, defining the instructions, registers, memory addressing, and data types.

**Microprogrammed Control:** A control unit implementation that uses microinstructions stored in a control store to generate control signals.

**Multi-cycle Datapath:** A processor implementation that breaks instruction execution into multiple steps.

**RAID:** Redundant Array of Independent Disks — a storage technology that combines multiple disk drives for performance and/or redundancy.

**RAW Hazard:** A true data dependence where an instruction reads a register that a previous instruction writes (Read After Write).

**Set-Associative Cache:** A cache where each memory block maps to a set of multiple cache lines.

**Single-cycle Datapath:** A processor where every instruction executes in one clock cycle.

**Superscalar:** A processor that can issue multiple instructions per clock cycle.

**TLB (Translation Lookaside Buffer):** A cache for page table entries that speeds up virtual-to-physical address translation.

**VLIW (Very Long Instruction Word):** An architecture where multiple operations are encoded in a single long instruction.

**Virtual Memory:** A memory management technique that gives each process the illusion of a large, contiguous address space.
