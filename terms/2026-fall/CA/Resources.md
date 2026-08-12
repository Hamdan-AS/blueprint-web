# BE Computer Systems (3rd Year Fall) — External Learning Resources

Curated by **Omar**, Resource Curator.

---

## 1. CS-328 — Computer Architecture (3+0)

### Best YouTube Playlists
| Playlist | Channel | Videos | Why |
|---|---|---|---|
| [Basic Computer Architecture — Lecture Videos](https://www.youtube.com/playlist?list=PL1iLu2CSC9EWAo0ysorNI_nebwF6Rwkr0) | Smruti R. Sarangi (IIT Delhi) | 48 | Official lecture series (verified); matches NPTEL noc25_cs83; chapters 8-12: processor, pipelining, memory, multiprocessor/GPU, I/O |
| [CS61C: Great Ideas in Computer Architecture](https://www.youtube.com/playlist?list=PL0j-r-omG7i0-mnsxN5T4UcVS1Di0isqf) | UC Berkeley | ~40+ | Top-tier university course; covers from digital logic to parallel processing |
| [Build a Superscalar CPU](https://www.youtube.com/playlist?list=PLyR4neQXqQo5nPdEiMbaEJxWiy_UuyNN4) | (Independent creator) | ~10+ | Hands-on; actually build a superscalar core in simulation |

### Best Textbooks
- **Hennessy & Patterson** — *Computer Architecture: A Quantitative Approach*, 7th Ed (2025)
  ISBN: 978-0-443-15406-5
  → The gold standard. Covers ILP, VLIW, superscalar, GPU, memory hierarchy, virtual memory. Turing Award winners.
- **Patterson & Hennessy** — *Computer Organization and Design: The Hardware/Software Interface* (RISC-V Edition, 2nd ed; ISBN 978-0-12-820331-6 per Elsevier)
  → More accessible undergraduate version of the above. Ch 4 = processor/pipelining/hazards, Ch 5 = memory hierarchy + RAID (5.11), App C = microprogrammed control.

### Free MOOC
- [NPTEL: Computer Architecture](https://onlinecourses.nptel.ac.in/noc25_cs83/preview) — Prof. Smruti Sarangi, IIT Delhi (12 weeks)
- [MIT OCW: 6.823 Computer System Architecture](https://ocw.mit.edu/courses/6-823-computer-system-architecture-fall-2005/) — Full lecture notes + assignments
- [Coursera: Computer Architecture](https://www.coursera.org/learn/comparch) — Princeton University

### Problem Banks / Practice
- [UC Berkeley CS152 Homeworks](https://inst.eecs.berkeley.edu/~cs152/sp26/) — Real problem sets on pipelining, hazards, OOO, VLIW, caches
- [MIT 6.823 Past Quizzes](https://csg.csail.mit.edu/6.823S21/) — Hard exam-style questions
- [GeeksforGeeks CA Quiz](https://www.geeksforgeeks.org/quizzes/computer-organization-and-architecture-gq/) — 241 multiple-choice questions (UNVERIFIED — no authoritative match found; use with caution)
- [Textbook End-of-Chapter Exercises](https://shop.elsevier.com/books/computer-architecture/hennessy/978-0-443-15406-5) — Hennessy & Patterson exercises with solutions

### Cheat Sheets / Revision Notes
- [Cheatography: Computer Architecture Cheat Sheet](https://cheatography.com/sheetocheat/cheat-sheets/computer-architecture/)
- [EduRev: CAO Cheatsheet](https://edurev.in/t/488984/Cheatsheet-Computer-Architecture-Organisation--CAO-)
- [Codecademy: Computer Architecture Cheatsheet](https://www.codecademy.com/learn/computer-architecture/modules/intro-to-computer-architecture/cheatsheet)
- [Roger Fan: Computer Architecture Cheat Sheet](https://roger.tw/notes/University-Notes/Computer-Architecture/Computer-Architecture-(Cheat-Sheet))

### Secret Weapon Resource
**gem5 Simulator** — [gem5.org](https://www.gem5.org)
The industry-standard, open-source computer architecture simulator used in academia and industry. You can model CPUs at the cycle level, configure cache hierarchies, explore branch predictors, and measure IPC/CPI. Nothing builds intuition like running your own simulations. Free, with extensive documentation and a community of 1600+ forks on GitHub.

---

