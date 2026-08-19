# CHAPTER 4 — PIPELINE HAZARDS

**Weight:** ★★★★★
**Difficulty:** ★★★★★
**Importance:** ★★★★★
---
## Learning Objectives
---
### Explain

- Structural, data, and control hazards
- Forwarding vs stalling
---
### Draw

- 5-stage pipeline diagram with forwarding paths
- Hazard detection unit
- Branch predictor state machine
---
### Trace

- Multiple instructions through pipeline showing stalls/forwards
- 1-bit and 2-bit predictor accuracy
---
### Design

- Forwarding unit logic (EX, MEM, WB priority)
- Hazard detection stall conditions
---
## Must Memorize

**RAW (Read After Write):** A true data dependence where an instruction reads a register that a previous instruction writes. Forwarding can resolve most RAW hazards.

**WAW (Write After Write):** A name dependence where two instructions write to the same register. Resolved by ensuring correct write order.

**WAR (Write After Read):** A name dependence where an instruction writes a register that a previous instruction reads. Not a hazard in 5-stage MIPS pipeline (all reads happen in ID, writes in WB).

**Forwarding (bypassing):** Feeding the ALU output directly from EX/MEM or MEM/WB pipeline registers to the ALU inputs, avoiding stalls.
---
## Must Draw

- 5-stage pipeline: IF, ID, EX, MEM, WB
- Forwarding muxes at ALU inputs
- Hazard detection unit
---
## Common Mistakes

1. **RAR is NOT a hazard** — two reads, no conflict
2. **Forwarding $zero** — $zero is read but forwarding should not override it (trap)
3. **EX hazard vs MEM hazard priority** — EX forwarding has priority (more recent)
4. **Load-use hazard** — cannot forward from MEM to EX in same cycle (need 1 stall)
5. **Branch penalty with 2-bit predictor** — misprediction flips the state; always compute penalty correctly
---
## Typical Questions

1. Identify RAW/WAW/WAR in instruction sequences
2. Draw forwarding paths for a 3-instruction sequence
3. Draw 2-bit predictor state machine and trace outcomes
4. Calculate speedup with pipelining given hazard frequency
5. Design hazard detection unit — when does it insert stalls?

**GPA Priority:** 🟥 Must Win
