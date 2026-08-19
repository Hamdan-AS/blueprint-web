# MASTER FORMULA BOOK
---
## CS-326 — Software Engineering
---
### Cyclomatic Complexity

- M = E − N + 2P (Edges − Nodes + 2 × Connected Components)
- M = Number of Predicate Nodes + 1
---
### COCOMO Basic

- Effort (PM) = a × (KLOC)^b
- Schedule (TDEV) = c × (Effort)^d
- Team Size = Effort / Schedule
---
### COCOMO Coefficients

| Mode | a | b | c | d |
|------|---|---|---|---|
| Organic | 2.4 | 1.05 | 2.5 | 0.38 |
| Semi-detached | 3.0 | 1.12 | 2.5 | 0.35 |
| Embedded | 3.6 | 1.20 | 2.5 | 0.32 |
---
### Intermediate COCOMO

- Effort = a × (KLOC)^b × EAF (Effort Adjustment Factor)

---
