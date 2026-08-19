# MASTER NUMERICAL BOOK
---
## CS-328 — Computer Architecture
---
### Performance Calculations

1. **CPI from instruction mix** — weighted average of per-instruction cycle counts
2. **CPU time** = IC × CPI × Cycle_Time
3. **Speedup** from pipelining with hazards
4. **Amdahl's Law** speedup with parallelization
---
### Cache Calculations

5. **Address breakdown** — tag, index, offset bits
6. **AMAT** (Average Memory Access Time)
7. **Cache size** from tag/index/offset and associativity
8. **Miss rate** from access sequence
---
### Virtual Memory

9. **EAT with TLB** (Effective Access Time)
10. **TLB reach** from entries × page size
11. **Page table size** calculation
12. **Two-level paging** address split
---
### Pipeline

13. **Hazard penalty** calculation
14. **Branch predictor accuracy** from outcome sequence
15. **Forwarding conditions** boolean logic
---
### Extended (merged from Top-25-Numericals.md)

16. **Multi-cycle CPI** — per-instruction cycle counts + instruction mix
17. **Single-cycle vs multi-cycle speedup** — compare given cycle times
18. **Data hazard stall cycles** — required stalls before forwarding
19. **Load-use penalty** — stall cycles between lw and dependent instruction
20. **Forwarding conditions (EX/MEM)** — boolean conditions for EX and MEM forwarding
21. **Branch penalty** — 5-stage pipeline, branch resolved in MEM, taken/not-taken penalty
22. **Cache miss rate with LRU** — access sequence + cache size → miss rate
23. **Virtual address translation** — two-level page table walk for a given address
24. **Write buffer depth** — required buffer size from write frequency
25. **Multi-level cache AMAT** — L1 hit 2, L2 hit 10, memory 100
