# AI-LABS — Artificial Intelligence (CS-323) — All Labs + Viva

<!-- colors: 1-5:#9cc4ff:#1d4ed8 6-7:#9adba4:#15803d 8-10:#ffd27a:#b45309 11-13:#c7adff:#6d28d9 14:#80d8cc:#0f766e 15:#ff9e9e:#dc2626 -->

Weeks 1–15 · 17 Aug – 29 Nov 2026 · **Lab weight ~20%** · 13 labs · viva 5+10 Qs

> **Source workbook:** Practical Workbook CS-323 (NED UET, Dept. of Computer & Information Systems Engineering, revised Aug 2024).
> **Credits:** 3+1 (3 lectures + 1 lab/week) · **CLO:** "Demonstrate the use of modern tools and techniques for developing intelligent systems. (C3, PLO-3)"
> **Exclusions:** Lab 14 (Complex Engineering Activity) is **excluded** per request.
> **Ordering note:** the workbook runs **ANN-first** (W1–5) ahead of the NN theory timeline (W10–11). Labs are self-contained (perceptron → backprop) and do not depend on the theory. GA has **no lab** — theory pillar only. W8 midterm and W15 final have no lab; the lab viva is a separate W15 slot.

## Lab → week map

| Real Week | Lab(s) | Workbook Lab | Topic Group |
|:---------:|:------:|:------------:|-------------|
| W1 | 1 | Implementing Simple Neural Network Using Perceptron | ANN / ML (Labs 1–5) |
| W2 | 2 | Developing an Artificial Neural Network (ANN) Using Perceptron | ANN / ML (Labs 1–5) |
| W3 | 3 | Applying Data Preprocessing for ANN | ANN / ML (Labs 1–5) |
| W4 | 4 | Developing ANN Using ADALINE | ANN / ML (Labs 1–5) |
| W5 | 5 | Developing ANN Using Backward Propagation | ANN / ML (Labs 1–5) |
| W6 | 6 | Applying Uninformed Searching Techniques | Searching (Labs 6–7) |
| W7 | 7 | Applying Informed Searching Techniques | Searching (Labs 6–7) |
| W8 | — | **MIDTERM** — no lab | — |
| W9 | 8 | Solving CSPs by Enforcing Arc Consistency | CSP (Labs 8–9) |
| W10 | 9 | Solving CSPs Using Stochastic Local Search | CSP (Labs 8–9) |
| W11 | 10 | Developing Knowledge-Based Systems | Expert Systems (Labs 10–12) |
| W12 | 11 | Constructing Complex Rule-Based Systems | Expert Systems (Labs 10–12) |
| W13 | 12 | Practicing Data-Driven Programming in Expert Systems | Expert Systems (Labs 10–12) |
| W14 | 13 | Developing Fuzzy Logic Based System | Fuzzy Logic (Lab 13) |
| W15 | — | **FINAL** — no lab (lab viva separate slot) | — |

## Notes

- **ANN-before-theory tension:** ANN labs (W1–5) run before NN theory (narrative W10–11). Official workbook ordering — the lab is self-contained and does not depend on the theory timeline.
- **GA has no lab counterpart:** the workbook contains no GA lab; GA stays a **theory pillar** (narrative W6) — self-study with `aimacode/aima-python` + Gate Smashers.
- **No GA/PSO/ACO lab:** evolutionary-computing content is absent from this workbook; the ANN block covers the ML requirement.
- Group breakdowns: `AI/03-Lab-Breakdowns/01-ANN-and-ML.md` … `05-Fuzzy-Logic.md`. Per-lab GitHub repos: `AI/Lab-Resources.md`.

## Exam relevance (lab ↔ theory bridge)

| Lab(s) | Examinable? | Bridge |
|--------|-------------|--------|
| 1–5 ANN / ML | ✅ theory-linked | NN + backprop pillars (W10–11) → `Formula-Book.md` (perceptron, backprop) · `Fear-Killer-Packs.md` (AI-W11) |
| 6–7 Searching | ✅ theory-linked | A* pillar (W3) → `Formula-Book.md` (A*) · `Fear-Killer-Packs.md` (AI-W3) |
| 8–9 CSP | ✅ theory-linked | AC-3 / CSP formulation (W4) → `Fear-Killer-Packs.md` (AI-W4) |
| 10–12 Expert Systems | ✅ theory-linked | forward/backward chaining, conflict resolution, RETE (W9) → `Fear-Killer-Packs.md` (AI-W9) |
| 13 Fuzzy | ✅ theory-linked | Mamdani vs Sugeno, defuzzification (W12) → `Fear-Killer-Packs.md` (AI-W12) |
| GA (no lab) | ⚠️ theory only | no workbook lab — self-study `aimacode/aima-python` + Gate Smashers |

---

# Lab Group: ANN / ML (Labs 1–5)

Source: Practical Workbook CS-323 (NED UET, revised Aug 2024). CLO: "Demonstrate the use of modern tools and techniques for developing intelligent systems. (C3, PLO-3)"

## Lab 1 — Implementing Simple Neural Network Using Perceptron

**Goal:** Build a single-layer perceptron; train on logic functions.
**Steps:** Model neuron (weighted sum → activation); train AND/OR/NOT/NAND/NOR gates with step activation; observe linear separability.
**Deliverable:** Working perceptron + accuracy table per gate.
**Resources:** `AI/Lab-Resources.md` → Lab 1

## Lab 2 — Developing an Artificial Neural Network (ANN) Using Perceptron

**Goal:** Generalize Lab 1 into a reusable ANN using the perceptron learning rule.
**Steps:** Learning rate, weight update rule (w ← w + η·(t−y)·x); fit/predict API; test on a real dataset (e.g., breast cancer).
**Deliverable:** ANN class from scratch + evaluation metrics.
**Resources:** `AI/Lab-Resources.md` → Lab 2

## Lab 3 — Applying Data Preprocessing for ANN

**Goal:** Preprocess data before training (this is what separates a working model from a broken one).
**Steps:** Handle missing values (imputation); feature scaling (MinMax/normalization); one-hot encoding of categoricals; train/test split.
**Deliverable:** Preprocessing pipeline applied to a raw dataset + before/after training comparison.
**Resources:** `AI/Lab-Resources.md` → Lab 3

## Lab 4 — Developing ANN Using ADALINE

**Goal:** Implement ADALINE (Widrow-Hoff / delta rule) with linear activation.
**Steps:** Batch (GD) vs stochastic (SGD) variants; loss = SSE; compare with perceptron on same problem; predict X/O characters.
**Deliverable:** ADALINE implementation + perceptron-vs-ADALINE comparison.
**Resources:** `AI/Lab-Resources.md` → Lab 4

## Lab 5 — Developing ANN Using Backward Propagation

**Goal:** Implement multi-layer feed-forward network with backpropagation.
**Steps:** Forward pass; MSE loss; backward pass (chain rule); gradient descent weight updates; train on XOR / seeds dataset.
**Deliverable:** Backprop network from scratch + training loss curve + accuracy.
**Resources:** `AI/Lab-Resources.md` → Lab 5

## Exam Relevance (ANN / ML)

- Perceptron XOR non-linearity, ADALINE delta rule, backprop chain rule = exam-relevant theory (pillar). See `Formula-Book.md`, `Fear-Killer-Packs.md` (AI-W11).

---

# Lab Group: Searching (Labs 6–7)

Source: Practical Workbook CS-323 (NED UET, revised Aug 2024). CLO: "Demonstrate the use of modern tools and techniques for developing intelligent systems. (C3, PLO-3)"

## Lab 6 — Applying Uninformed Searching Techniques for Problem Solving

**Goal:** Solve problems with uninformed search.
**Steps:** Implement BFS, DFS, UCS, depth-limited, iterative deepening; compare completeness/optimality; solve a classic toy problem (e.g., missionaries-and-cannibals, 8-puzzle).
**Deliverable:** Uninformed search implementations + comparison table (time, space, completeness, optimality).
**Resources:** `AI/Lab-Resources.md` → Lab 6

## Lab 7 — Applying Informed Searching Techniques for Problem Solving

**Goal:** Solve problems with informed search.
**Steps:** Implement greedy best-first and A*; choose heuristics (Manhattan, Euclidean); verify admissibility; solve 8-/15-puzzle.
**Deliverable:** A* implementation + heuristic comparison table (nodes expanded, solution cost).
**Resources:** `AI/Lab-Resources.md` → Lab 7

## Exam Relevance (Searching)

- A* = exam pillar (f = g + h, admissibility, optimality). See `Formula-Book.md`, `Fear-Killer-Packs.md` (AI-W3).

---

# Lab Group: CSP (Labs 8–9)

Source: Practical Workbook CS-323 (NED UET, revised Aug 2024). CLO: "Demonstrate the use of modern tools and techniques for developing intelligent systems. (C3, PLO-3)"

## Lab 8 — Solving CSPs by Enforcing Arc Consistency

**Goal:** Solve constraint satisfaction problems via constraint propagation.
**Steps:** Model a CSP (variables, domains, constraints); implement AC-3 arc consistency; pair with backtracking search (MAC); test on map coloring, N-Queens, Sudoku.
**Deliverable:** AC-3 + backtracking solver + trace showing arc eliminations.
**Resources:** `AI/Lab-Resources.md` → Lab 8

## Lab 9 — Solving CSPs Using Stochastic Local Search Techniques

**Goal:** Solve CSPs with stochastic local search.
**Steps:** Implement min-conflicts heuristic (N-Queens); compare with hill climbing, simulated annealing; observe scaling to large N (10K+ queens).
**Deliverable:** Min-conflicts solver + performance comparison vs backtracking.
**Resources:** `AI/Lab-Resources.md` → Lab 9

## Exam Relevance (CSP)

- AC-3 (arc consistency) and CSP formulation = exam-relevant. See `Formula-Book.md`, `Fear-Killer-Packs.md` (AI-W4).

---

# Lab Group: Expert Systems (Labs 10–12)

Source: Practical Workbook CS-323 (NED UET, revised Aug 2024). CLO: "Demonstrate the use of modern tools and techniques for developing intelligent systems. (C3, PLO-3)"

## Lab 10 — Developing Knowledge-Based Systems

**Goal:** Build a knowledge-based (expert) system.
**Steps:** Define knowledge base + rules; use an expert-system shell (CLIPS via clipspy, or PyKE); implement forward/backward chaining; classic animal-classification example.
**Deliverable:** Working KBS + rule base documentation.
**Resources:** `AI/Lab-Resources.md` → Lab 10

## Lab 11 — Constructing Complex Rule-Based Systems

**Goal:** Scale to complex rule bases with conflict resolution.
**Steps:** Large rule sets; conflict resolution strategies (refraction, recency, specificity); rule engines with RETE (Drools, CLIPS); rule matching efficiency.
**Deliverable:** Complex rule engine + conflict-resolution example.
**Resources:** `AI/Lab-Resources.md` → Lab 11

## Lab 12 — Practicing Data-Driven Programming in Expert Systems

**Goal:** Data-driven (forward-chaining) inference in expert systems.
**Steps:** Forward-chaining inference engine from scratch or via RETE library; diagnosis expert systems (medical/network/car); working-memory updates per firing.
**Deliverable:** Data-driven inference engine + trace of rule firings.
**Resources:** `AI/Lab-Resources.md` → Lab 12

## Exam Relevance (Expert Systems)

- Forward vs backward chaining, conflict resolution, RETE = exam-relevant. See `Fear-Killer-Packs.md` (AI-W9).

---

# Lab Group: Fuzzy Logic (Lab 13)

Source: Practical Workbook CS-323 (NED UET, revised Aug 2024). CLO: "Demonstrate the use of modern tools and techniques for developing intelligent systems. (C3, PLO-3)"

## Lab 13 — Developing Fuzzy Logic Based System

**Goal:** Build a fuzzy logic system.
**Steps:** Define membership functions (triangular, trapezoidal); write fuzzy rules; implement Mamdani inference + defuzzification (centroid); build a controller (temperature / washing machine / tipping) using scikit-fuzzy or MATLAB Fuzzy Logic Toolbox / Fuzzy Tech.
**Deliverable:** Fuzzy inference system + input→output surface.
**Resources:** `AI/Lab-Resources.md` → Lab 13

## Exam Relevance (Fuzzy Logic)

- Mamdani vs Sugeno, defuzzification = exam-relevant. See `Fear-Killer-Packs.md` (AI-W12).

---

## Viva — Artificial Intelligence (CS-323)

### Project Walkthrough (3 min)
1. Which AI algorithm did you implement?
2. Show me your code running
3. What heuristic did you use? Is it admissible?
4. How does your GA ensure convergence?
5. What is the fitness function?

### Technical Questions
6. Why A* instead of BFS for your problem?
7. Is your heuristic admissible? Prove it.
8. What happens if you change the crossover rate?
9. Explain backpropagation step by step
10. Why can't a perceptron learn XOR?
11. What is the difference between Mamdani and Sugeno?
12. How does forward chaining differ from backward chaining?
13. What is the significance of the learning rate?
14. Your neural network is overfitting. How do you fix it?
15. What is the vanishing gradient problem?

*(Viva questions verbatim from `Viva-Book.md` — 5 walkthrough + 10 technical. Viva is a separate W15 slot.)*
