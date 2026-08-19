# CHAPTER 3 — MULTI-CYCLE DATAPATH

**Weight:** ★★★★☆
**Difficulty:** ★★★★☆
**Importance:** ★★★★★
---
## Learning Objectives
---
### Explain

- Why multi-cycle is faster than single-cycle
- How state transitions control instruction flow
---
### Compare

- Single-cycle vs multi-cycle performance
---
### Draw

- Complete multi-cycle datapath from memory
- State diagrams for each instruction
---
### Trace

- R-type, lw, sw, branch through multi-cycle steps
---
## Must Memorize

**Multi-cycle datapath:** A processor implementation that breaks instruction execution into multiple steps, each taking one clock cycle, allowing different instructions to take different numbers of cycles.
---
## Must Draw

- Multi-cycle datapath: shared ALU, instruction register, memory data register, A/B registers, ALUOut register
- Complete in <15 min
---
## Common Mistakes

1. **Missing the instruction register (IR)** — holds instruction during execution
2. **Missing the memory data register (MDR)** — buffers data from memory
3. **State 0 return** — every instruction must return to state 0 (instruction fetch)
4. **Register file write timing** — write happens at end of cycle to avoid read-after-write hazard
---
## Typical Questions

1. Draw complete multi-cycle datapath
2. Trace `add $t0, $s1, $s2` through all states
3. Compare cycle time: single-cycle vs multi-cycle
4. Why is multi-cycle faster? (shorter cycle time)
5. What are states for each instruction type?

**GPA Priority:** 🟥 Must Win
