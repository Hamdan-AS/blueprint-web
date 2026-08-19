# CHAPTER 5 — CACHE AND VIRTUAL MEMORY

**Weight:** ★★★★☆
**Difficulty:** ★★★★☆
**Importance:** ★★★★☆
---
## Learning Objectives
---
### Explain

- Temporal and spatial locality
- Cache mapping techniques
- Virtual memory and paging
---
### Compare

- Direct-mapped vs set-associative vs fully-associative
- Write-back vs write-through
---
### Calculate

- Tag, index, offset from address
- AMAT (Average Memory Access Time)
- Effective access time with TLB
- Page table size
---
### Design

- Cache organization for given parameters
---
## Must Memorize

**AMAT:** Average Memory Access Time = Hit Time + Miss Rate × Miss Penalty

**Effective Access Time (with TLB):** EAT = TLB Hit Rate × (TLB Hit Time + Cache Hit Time) + (1 − TLB Hit Rate) × (TLB Miss Penalty + Cache Access Time)
---
## Must Practice

- 10+ cache address breakdown problems
- 10+ AMAT calculations
- 5+ page table/TLB problems
---
## Common Mistakes

1. **Address breakdown** — bits for offset = log₂(block size), index = log₂(number of sets), tag = remaining
2. **Write-back vs write-through distinction** — write-back updates cache only, writes to memory only on eviction
3. **TLB reach** = TLB entries × page size
4. **Multi-level page tables** — each level adds an extra memory access

**GPA Priority:** 🟧 High Yield
