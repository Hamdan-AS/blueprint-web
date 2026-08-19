# CHAPTER 1 — INSTRUCTION SET ARCHITECTURE

**Weight:** ★★★★★
**Difficulty:** ★★★☆☆
**Importance:** ★★★★★
---
## Learning Objectives
---
### Explain

- RISC vs CISC philosophy
- MIPS register conventions
- Addressing modes
---
### Compare

- R-type vs I-type vs J-type formats
- Different addressing modes
---
### Draw

- MIPS instruction format diagrams
- Register field positions
---
### Calculate

- Instruction encoding from assembly
- Instruction decoding from machine code
---
### Differentiate

- R-type: opcode + rs + rt + rd + shamt + funct (6 fields)
- I-type: opcode + rs + rt + immediate (4 fields)
- J-type: opcode + target address (2 fields)
---
## Must Memorize
---
### Definitions (Word-for-word)

**Instruction Set Architecture (ISA):** The interface between hardware and software, defining the instructions, registers, memory addressing, and data types that a processor supports.

**R-type instruction:** An instruction format where the operation is performed on register operands and the result is stored in a register, using fields for opcode (6 bits), rs (5), rt (5), rd (5), shamt (5), and funct (6).

**I-type instruction:** An instruction format that includes an immediate value, using fields for opcode (6 bits), rs (5), rt (5), and immediate (16 bits).

**J-type instruction:** An instruction format used for unconditional jumps, using fields for opcode (6 bits) and target address (26 bits).

**Register convention:** The agreed-upon usage of registers in the MIPS ISA, including $zero (constant 0), $s0-$s7 (saved), $t0-$t9 (temporary), $a0-$a3 (arguments), $v0-$v1 (return values), $sp (stack pointer), $fp (frame pointer), $ra (return address).
---
## Must Understand

- Why MIPS uses fixed instruction length (32 bits) — simplifies fetch/decode
- Why $zero is hardwired to 0 — enables common operations (move, not, etc.)
- Addressing modes: register, immediate, base/displacement, PC-relative, pseudo-direct
---
## Must Practice
---
### Encoding/Decoding

```
Assembly → Machine Code: add $t0, $s1, $s2
  opcode = 0 (R-type), rs = $s1 (17), rt = $s2 (18), rd = $t0 (8), shamt = 0, funct = 32 (add)
  Binary: 000000 10001 10010 01000 00000 100000
  Hex: 0x02324020

Machine Code → Assembly: 0x8D080000
  opcode = 0x23 (35 = lw), rs = 0x08 ($t0), rt = 0x08 ($t0), immediate = 0x0000
  Assembly: lw $t0, 0($t0)
```
---
## Common Mistakes

1. **Misidentifying instruction format** — check opcode first. If opcode = 0, it's R-type. Otherwise I-type or J-type.
2. **Confusing funct field with opcode** — for R-type, opcode is always 0; the actual operation is in funct.
3. **Register numbering** — $t0 = 8, not 0. Common off-by-8 error.
4. **Immediate sign extension** — I-type immediates are sign-extended to 32 bits for ALU operations.
---
## Past Paper Trends (2019-2024)

| Year | Questions |
|------|-----------|
| 2019 | Decode 3 instructions, identify format |
| 2020 | Compare RISC vs CISC, encode 4 instructions |
| 2021 | Register convention question, decode R-type |
| 2022 | Addressing modes, encode branch instruction |
| 2023 | Full instruction decode table, pseudo-instructions |
| 2024 | Compare J-type target calculation vs PC-relative |

**Frequency:** Appears every year. Usually 10-15 marks combined with datapath.
---
## Typical Questions

1. Decode the MIPS instruction `0xAC010004` into assembly
2. Encode `addi $s0, $s1, -8` into machine code
3. Explain the purpose of $zero register
4. Differentiate R-type, I-type, J-type with diagrams
5. Calculate target address for a j instruction given PC
---
## Examiner Expectations

| Level | Performance |
|-------|------------|
| Pass | Can decode/encode basic instructions |
| Good | Handles all three formats, understands sign extension |
| Excellent | Identifies pseudo-instructions, knows all register conventions |
| Full marks | Encodes/decodes under time pressure with zero errors |
---
## Formula Sheet
---
### MIPS Instruction Formats

```
R-type: [opcode(6)][rs(5)][rt(5)][rd(5)][shamt(5)][funct(6)] = 32 bits
I-type: [opcode(6)][rs(5)][rt(5)][immediate(16)] = 32 bits
J-type: [opcode(6)][target(26)] = 32 bits
```
---
### Register Numbers

```
$zero = 0   $a0-$a3 = 4-7   $v0-$v1 = 2-3
$t0-$t7 = 8-15   $s0-$s7 = 16-23   $t8-$t9 = 24-25
$sp = 29   $fp = 30   $ra = 31
```
---
## Diagram Sheet
---
### R-type Format

```
31    26 25   21 20   16 15   11 10   6 5     0
┌────────┬──────┬──────┬──────┬──────┬────────┐
│ opcode │  rs  │  rt  │  rd  │shamt │ funct  │
│ (6)    │ (5)  │ (5)  │ (5)  │ (5)  │ (6)    │
└────────┴──────┴──────┴──────┴──────┴────────┘
```
---
### I-type Format

```
31    26 25   21 20   16 15                    0
┌────────┬──────┬──────┬────────────────────────┐
│ opcode │  rs  │  rt  │      immediate          │
│ (6)    │ (5)  │ (5)  │      (16)               │
└────────┴──────┴──────┴────────────────────────┘
```
---
### J-type Format

```
31    26 25                                   0
┌────────┬────────────────────────────────────┐
│ opcode │           target address            │
│ (6)    │           (26)                      │
└────────┴────────────────────────────────────┘
```
---
## Flashcards

Q: Which MIPS register is hardwired to 0?
A: $zero (register 0)

Q: How many bits in a MIPS instruction?
A: 32 bits (fixed length)

Q: What determines if an instruction is R-type?
A: opcode = 0 (then funct field specifies operation)

Q: What is the J-type instruction used for?
A: Unconditional jumps

Q: How is the target address calculated in a j instruction?
A: {PC+4[31:28], target[26:0], 00}
---
## Retrieval Questions (50+)

1. List all MIPS instruction formats with field sizes
2. Encode: `add $s0, $s1, $s2`
3. Decode: `0x8D08FFFC`
4. List register numbers for $t0-$t9
5. List register numbers for $s0-$s7
6. What is the purpose of $sp?
7. What is sign extension? When does it happen?
8. Encode a conditional branch instruction
9. Calculate J-type target from a given address
10. Explain why MIPS uses fixed instruction length
11-50. (Additional practice problems in Numerical Book)

**GPA Priority:** 🟥 Must Win
