# Chapter 2 — Single-Cycle Datapath

**Weight:** ★★★★★
**Difficulty:** ★★★☆☆
**Importance:** ★★★★★

## Learning Objectives

### Explain
- How each instruction flows through the datapath
- Role of each control signal

### Draw
- Complete single-cycle datapath from memory
- Control unit truth table

### Calculate
- Cycle time for single-cycle implementation
- CPI = 1 (always)

### Design
- Control logic for each instruction
- Datapath modifications for new instructions

## Must Memorize

**Single-cycle datapath:** A processor implementation where every instruction executes in exactly one clock cycle, with the cycle time determined by the longest instruction (typically lw).

**Control signals:** RegDst, RegWrite, ALUSrc, ALUOp, MemRead, MemWrite, MemtoReg, Branch, Jump.

## Must Draw
- Complete single-cycle datapath: PC → Instruction Memory → Register File → ALU → Data Memory → MUXes back
- Every wire labeled
- Every control signal labeled
- Complete in <15 min

## Common Mistakes

1. **Missing the PC+4 adder** — it's separate from the ALU
2. **MUX at register file write address** — uses RegDst to select rt(20:16) vs rd(15:11)
3. **Sign extension for I-type** — immediate goes through sign-extend before ALU
4. **Branch equality check** — uses a separate AND gate (Branch & Zero)

## Typical Questions

1. Draw complete single-cycle datapath with control signals
2. Trace `lw $t0, 4($s1)` through datapath — show every mux selection
3. What is the critical path? Why is it lw?
4. Calculate cycle time given component delays
5. Add a new instruction — show datapath modifications

**GPA Priority:** 🟥 Must Win
