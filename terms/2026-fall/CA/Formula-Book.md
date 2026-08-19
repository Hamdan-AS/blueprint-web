# MASTER FORMULA BOOK
---
## CS-328 — Computer Architecture
---
### Performance

- CPU Time = Instruction Count × CPI × Cycle Time
- Speedup = Old Time / New Time
- Amdahl's Law: Speedup = 1 / ((1 − f) + f/n)
---
### Cache

- AMAT = Hit Time + Miss Rate × Miss Penalty
- Offset bits = log₂(Block Size)
- Index bits = log₂(Number of Sets)
- Tag bits = Address bits − Index − Offset
- Cache Size = Number of Sets × Associativity × Block Size
---
### Virtual Memory

- EAT (with TLB) = H × (t + m) + (1 − H) × (t + k·n + m)
  - H = TLB hit rate, t = TLB access time, k = page-table levels, n = memory access per level, m = data memory access time
- Simplified (single-level, t negligible): EAT = H × m + (1 − H) × 2m
- TLB Reach = TLB Entries × Page Size
- Page Table Size = Number of Pages × Page Table Entry Size
---
### RAID

- RAID 5 Usable = (N − 1) × Disk Size
- RAID 5 Write Penalty = 4 I/Os per write (2 reads + 2 writes)

---
