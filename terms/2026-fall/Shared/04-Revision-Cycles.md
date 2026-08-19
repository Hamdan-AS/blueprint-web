# REVISION CYCLES
---
## Spaced Repetition Schedule

Every topic follows this exact cycle:

```
Learn (Week X)
   ↓ (24 hours)
1st Review (Next day)
   ↓ (3 days)
2nd Review (Day 4)
   ↓ (7 days)
3rd Review (Week later)
   ↓ (14 days)
4th Review (2 weeks later)
   ↓ (30 days)
5th Review (month later)
   ↓
Pre-Midterm Review
   ↓
Pre-Final Review
```
---
## Per-Week Retrieval Targets

| Week | New Topics | Must Retrieve From Earlier |
|------|-----------|---------------------------|
| 1 | Arch: ISA/SC datapath, SE: process models, Networks: OSI, AI: intro, Stats: descriptive | — |
| 2 | Arch: multi-cycle, SE: req eng, Networks: DLL, AI: BFS/DFS, Stats: central tendency | Week 1 topics |
| 3 | Arch: FSM control, SE: DFD, Networks: CRC, AI: A*, Stats: probability | Weeks 1-2 |
| 4 | Arch: pipeline intro, SE: project mgmt, Networks: CSMA/CD, AI: CSP/Minimax, Stats: Bayes | Weeks 1-3 |
| 5 | Arch: data hazards, SE: design/cohesion, Networks: IPv4, AI: FOL, Stats: rand vars | Weeks 1-4 |
| 6 | Arch: branch pred, SE: design patterns, Networks: subnetting, AI: GA, Stats: distributions | Weeks 1-5 |
| 7 | **Midterm Revision** — all topics | Full retrieval |
| 8 | **Midterm Exam** | — |
| 9 | Recovery + ILP/V&V/routing/expert sys/CLT | Midterm weak areas |
| 10 | VLIW/white-box/OSPF/perceptron/hypothesis testing | W1-6 interleaved |
| 11 | Cache/black-box/TCP/backpropagation/chi-square | W1-6 + W10 |
| 12 | Virtual memory/COCOMO/congestion control/fuzzy logic/CI | W1-6 + W10-11 |
| 13 | RAID/maintenance/HTTP/game theory/regression | W1-6 + W10-12 |
| 14 | **Final Revision** — full past papers | All topics |
| 15 | **Final Exam** | — |
---
## Interleaved Retrieval Protocol

Every study session includes **30 min** of interleaved retrieval from **earlier** topics (day-stack block 5):

1. Pick 3 topics from 1, 2, and 4 weeks ago
2. Start from blank page — no peeking
3. Solve/draw/write from memory
4. Check answers only after completion
5. Log errors in Master Error Log
6. Schedule re-retrieval within 48 hours
---
## Retrieval Methods by Topic Type

| Topic Type | Retrieval Method | Target |
|-----------|-----------------|--------|
| Numerical (subnetting, CPI, CRC, COCOMO) | Timed problem solving | 30 sec per problem |
| Diagrams (datapath, pipeline, headers) | Blank-page drawing | Under 15 min |
| Definitions | Anki flashcards | Instant recall |
| Comparisons (models, protocols) | Comparison table from memory | Fill both sides |
| Traces (A*, GA, TCP cwnd) | Full trace from blank page | No step skipping |
| Theory | Teach aloud to empty chair | 5-point structure |
