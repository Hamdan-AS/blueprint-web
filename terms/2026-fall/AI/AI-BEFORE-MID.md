# AI-BEFORE-MID — WEEKS 1–8 · 17 AUG – 11 OCT 2026 · MIDTERM (W8)

<!-- colors: 1-3:#9cc4ff:#1d4ed8 4-5:#9adba4:#15803d 6:#ffd27a:#b45309 7:#c7adff:#6d28d9 8:#ff9e9e:#dc2626 -->

> **Scope:** Weeks 1–8 (17 Aug – 11 Oct 2026) — AI intro, uninformed search, informed search & A*, CSPs & adversarial search, FOL & knowledge representation, genetic algorithms, ending at the Week 8 midterm.
> **Siblings:** `AI-NAV.md` (master map) · `AI-AFTER-MID.md` (Weeks 9–15) · `AI-LABS.md` (labs). Week-colored headers below match the NAV schedule.
> **Exam split:** ~40% numerical/trace + ~60% theory, weighted heavily toward the three pillars (A*, GA, backprop). Process > final number on trace problems.
> **Exam order:** A*/search traces first, theory second.

---
## At a glance (W1–W8)

| W | Dates | Variant | File | Topics | Module |
|---|---|---|---|---|---|
| W1 | 17–23 Aug | P2 | BEFORE | Intro to AI & problem solving | 01 |
| W2 | 24–30 Aug | P2 | BEFORE | Uninformed search | 02 |
| W3 | 31 Aug–06 Sep | P2 | BEFORE | Informed search & A* | 02 |
| W4 | 07–13 Sep | P0 | BEFORE | CSPs & adversarial search | 02 |
| W5 | 14–20 Sep | P0 | BEFORE | FOL & knowledge representation | 03 + 05 |
| W6 | 21–27 Sep | P2 | BEFORE | Genetic algorithms | 04 |
| W7 | 28 Sep–04 Oct | P1 | BEFORE | Midterm revision | 01–06 |
| W8 | 05–11 Oct | MIDTERM | BEFORE | Exam week — no new material | — |

> Tier key: **P0** = no exam pressure (front-load new material) · **P1** = light revision · **P2** = drill-heavy week. Variants editorial (AI manifests carry no variant field).

---
### W1 — Intro to AI & Problem Solving · 17–23 Aug · P2 · 5 hrs

**Banner:** Rotation AI (Wed+Fri) · Tier P2 · Time budget 5 hrs · P0 floor: pack pass (narrative-sourced) + def/formula skim + same-problem drill.

#### Sources & offsets

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 1 | lines 18–33 |
| Fear-Killer Pack | — (no pack — AI-W1 not in `Fear-Killer-Packs.md`) | — |
| Week manifest | `weeks/AI-W1.md` | full file |
| Chapter breakdown | — (no `03-Chapter-Breakdowns/`; module M1) | — |

#### Definitions (verbatim)

| Term | Definition |
|---|---|
| Heuristic | A problem-solving technique that uses practical methods not guaranteed to be optimal. |
| A\* | An informed search algorithm that uses f(n) = g(n) + h(n), optimal if h is admissible. |

#### Formulas (verbatim)

| Formula | Statement |
|---|---|
| A* Search | f(n) = g(n) + h(n) |

#### Diagrams · Numericals · Tricky · Top-100

| Type | Items |
|---|---|
| Diagrams | — (intro week; preview **#2** BFS vs DFS) |
| Numericals | — (none; drill = 3 search-problem formulations) |
| Tricky | — (AI `Top-10-Tricky-Concepts.md` deferred) |
| Top-100 | — (AI `Top-100-Questions.md` deferred) |

#### Books · Chapters · Media

| Resource | Where |
|---|---|
| Russell & Norvig | Ch.1–2 (AI, agent) · Ch.3 (search intro) |
| Gate Smashers | AI playlist videos 1–3 |

#### Fear-Killer Pack — none this week

**No pack (AI-W1).** Deep study from narrative + R&N Ch.1–2. W1 is the only "pure theory" week.

#### Narrative — Week 1 (verbatim)

**Topics:** What is AI?; Strong AI vs Weak AI; Turing Test; Problem types (deterministic, stochastic, adversarial); State space representation

**Resources:** Russell & Norvig Ch.1-2; Gate Smashers — AI (videos 1-3)

**Practice:**
- Define AI in 4 ways (thinking humanly, acting humanly, thinking rationally, acting rationally)
- Given a real-world problem: identify the state space, initial state, goal state, actions
- 8-puzzle: model as a search problem (state = tile positions, action = move blank)

**Lab:** Lab 1 — Implementing Simple Neural Network Using Perceptron (logic gates); Python refresher + AIMA setup first

**Deliverable:** Search problem formulation for 3 real-world scenarios

**Time budget:** 5 hrs

#### Lab pointer

**Lab this week:** `AI-LABS.md` → **Lab 1 — Simple NN Using Perceptron** (map in `Lab-Schedule.md`).

#### P0 floor · Drill target · Deliverable · Trap

- **P0 floor:** narrative-sourced drill (define AI 4 ways · model 8-puzzle) · def/formula skim (Heuristic + A* preview) · same-problem drill (3 formulations)
- **Same-problem drill target:** 8-puzzle state/action/goal modeling < 5 min
- **Deliverable:** search problem formulation for 3 real-world scenarios
- **Trap:** don't over-invest — theory-only week; the labs (ANN) start here but run on their own timeline

---
### W2 — Uninformed Search · 24–30 Aug · P2 · 5 hrs

**Banner:** Rotation AI (Wed+Fri) · Tier P2 · Time budget 5 hrs · P0 floor: pack pass (narrative-sourced) + def/formula skim + same-problem drill.

#### Sources & offsets

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 2 | lines 37–52 |
| Fear-Killer Pack | — (no pack — AI-W2 not in `Fear-Killer-Packs.md`) | — |
| Week manifest | `weeks/AI-W2.md` | full file |
| Chapter breakdown | — (no `03-Chapter-Breakdowns/`; module M2) | — |

#### Definitions (verbatim)

| Term | Definition |
|---|---|
| Heuristic | A problem-solving technique that uses practical methods not guaranteed to be optimal. |

#### Formulas (verbatim)

| Formula | Statement |
|---|---|
| — | (no uninformed-search formula in `Formula-Book.md`; complexity bounds live in the narrative) |

#### Diagrams · Numericals · Tricky · Top-100

| Type | Items |
|---|---|
| Diagrams | `Diagram-Book.md` **#2** BFS vs DFS traversal on sample graph |
| Numericals | — (none; trace BFS/DFS by hand) |
| Tricky | — (deferred) |
| Top-100 | — (deferred) |

#### Books · Chapters · Media

| Resource | Where |
|---|---|
| Russell & Norvig | Ch.3 (search) |
| AIMA Python | search module — code for BFS/DFS/UCS |

#### Fear-Killer Pack — none this week

**No pack (AI-W2).** Deep study from narrative + R&N Ch.3.

#### Narrative — Week 2 (verbatim)

**Topics:** BFS (breadth-first); DFS (depth-first); UCS (uniform cost search); Depth-limited search; Iterative deepening; Completeness, optimality, time and space complexity

**Resources:** Russell & Norvig Ch.3; AIMA Python code — search module

**Practice:**
- For each algorithm: write the frontier data structure (queue, stack, priority queue)
- Trace BFS and DFS on the same graph — note the different paths
- Complexity analysis: BFS = O(b^d) time and space; DFS = O(b^m) time, O(bm) space

**Lab:** Lab 2 — Developing an Artificial Neural Network (ANN) Using Perceptron (learning rule, fit/predict)

**Deliverable:** BFS and DFS implementation + trace output for a sample graph

**Time budget:** 5 hrs

#### Lab pointer

**Lab this week:** `AI-LABS.md` → **Lab 2 — ANN Using Perceptron** (map in `Lab-Schedule.md`).

#### P0 floor · Drill target · Deliverable · Trap

- **P0 floor:** narrative-sourced drill (frontier data structures; BFS/DFS trace) · def skim (Heuristic) · same-problem drill (complexity bounds)
- **Same-problem drill target:** BFS/DFS trace on a new graph < 10 min; complexity bounds from memory
- **Deliverable:** BFS and DFS implementation + trace output for a sample graph
- **Trap:** none flagged — foundation week for W3's A*

---
### W3 — Informed Search & A* · 31 Aug–06 Sep · P2 · 6 hrs

**Banner:** Rotation AI (Wed+Fri) · Tier P2 · Time budget 6 hrs · P0 floor: pack pass + def/formula skim + same-problem drill.

#### Sources & offsets

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 3 | lines 56–74 |
| Fear-Killer Pack | `Fear-Killer-Packs.md` → AI-W3 | lines 11–17 |
| Week manifest | `weeks/AI-W3.md` | full file |
| Chapter breakdown | — (no `03-Chapter-Breakdowns/`; module M2) | — |

#### Definitions (verbatim)

| Term | Definition |
|---|---|
| A\* | An informed search algorithm that uses f(n) = g(n) + h(n), optimal if h is admissible. |
| Admissible Heuristic | A heuristic that never overestimates the true cost to reach the goal. |
| Heuristic | A problem-solving technique that uses practical methods not guaranteed to be optimal. |

#### Formulas (verbatim)

| Formula | Statement |
|---|---|
| A* Search | f(n) = g(n) + h(n) |
| g(n) | actual cost from start to n |
| h(n) | estimated cost from n to goal |
| Optimality | Optimal if h is admissible (never overestimates) |
| Consistency | h(n) ≤ c(n, a, n') + h(n') |

#### Diagrams · Numericals · Tricky · Top-100

| Type | Items |
|---|---|
| Diagrams | `Diagram-Book.md` **#1** A* search trace (graph with OPEN/CLOSED lists) |
| Numericals | `Numerical-Book.md` **#33** A* trace · **#34** OPEN/CLOSED list maintenance · **#35** admissibility check |
| Tricky | — (deferred) |
| Top-100 | — (deferred) |

#### Books · Chapters · Media

| Resource | Where |
|---|---|
| Russell & Norvig | Ch.3 (informed search) |
| Gate Smashers | A* search video |

#### Fear-Killer Pack AI-W3 (verbatim)

**Resources:** Gate Smashers (Search videos) • R&N Ch.3 • AIMA Python Code

1. Trace A* on a graph where the heuristic is NOT admissible. Show the OPEN/CLOSED lists step by step and demonstrate how non-admissibility causes a suboptimal solution to be returned first.
2. Given the 8-puzzle initial state `[[2,8,3],[1,6,4],[7,0,5]]` and goal `[[1,2,3],[8,0,4],[7,6,5]]`, model as a search problem and trace A* with Manhattan distance heuristic. Show at least 3 expansions with the OPEN list priority queue.
3. Compare BFS, UCS, and A* on a graph with varying edge costs. Construct a 5-node graph where BFS finds a suboptimal path but A* finds the optimal. Show the frontier at each step for all three algorithms.
4. What is an admissible heuristic? Prove that if h is admissible, A* with graph search is optimal. Then construct a heuristic that is admissible but not consistent, and show how consistency could have pruned more nodes.

#### Narrative — Week 3 (verbatim)

**Topics:** Heuristic functions; Greedy best-first search; A* search (f = g + h); Admissible and consistent heuristics; Optimality of A*

**Resources:** Russell & Norvig Ch.3; Gate Smashers — A* search

**Practice:**
- A* trace: show OPEN list, CLOSED list, f, g, h for each node at each step
- Admissible heuristic: never overestimates the true cost
- Consistent (monotonic) heuristic: h(n) ≤ c(n, a, n') + h(n')
- Manhattan vs Euclidean distance for 8-puzzle

**Killer trap:** Students claim A* is always optimal. It is optimal ONLY if the heuristic is admissible. Non-admissible heuristics → faster but not guaranteed optimal. This is a guaranteed exam question.

**Lab:** Lab 3 — Applying Data Preprocessing for ANN (imputation, scaling, one-hot, split)

**Deliverable:** A* implementation + comparison table (BFS vs DFS vs A*)

**Time budget:** 6 hrs

#### Lab pointer

**Lab this week:** `AI-LABS.md` → **Lab 3 — Data Preprocessing for ANN** (map in `Lab-Schedule.md`).

#### P0 floor · Drill target · Deliverable · Trap

- **P0 floor:** fear-killer pack pass (Q1 non-admissible trace + Q2 8-puzzle trace) · def/formula skim (A*/Admissible/Heuristic + A* formulas) · same-problem drill #33/#34
- **Same-problem drill target:** A* OPEN/CLOSED trace < 15 min; admissibility check < 30 s
- **Deliverable:** A* implementation + comparison table (BFS vs DFS vs A*)
- **Trap:** A* is optimal ONLY with an admissible heuristic — guaranteed exam question

---
### W4 — CSPs & Adversarial Search · 07–13 Sep · P0 · 5 hrs

**Banner:** Rotation AI (Wed+Fri) · Tier P0 · Time budget 5 hrs · P0 floor: pack pass + def/formula skim + same-problem drill.

#### Sources & offsets

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 4 | lines 78–96 |
| Fear-Killer Pack | `Fear-Killer-Packs.md` → AI-W4 | lines 19–25 |
| Week manifest | `weeks/AI-W4.md` | full file |
| Chapter breakdown | — (no `03-Chapter-Breakdowns/`; module M2) | — |

#### Definitions (verbatim)

| Term | Definition |
|---|---|
| CSP (Constraint Satisfaction Problem) | A problem where variables must be assigned values from domains subject to constraints. |
| Minimax | A decision rule for minimizing the maximum possible loss in adversarial search. |

#### Formulas (verbatim)

| Formula | Statement |
|---|---|
| Minimax — Value(state) | Utility(state) if terminal |
| Minimax — MAX value | max over successors of MIN-VALUE |
| Minimax — MIN value | min over successors of MAX-VALUE |

#### Diagrams · Numericals · Tricky · Top-100

| Type | Items |
|---|---|
| Diagrams | `Diagram-Book.md` **#3** Minimax game tree with backed-up values · **#4** Alpha-beta pruning on game tree |
| Numericals | — (none in `Numerical-Book.md`; hand-traces only) |
| Tricky | — (deferred) |
| Top-100 | — (deferred) |

#### Books · Chapters · Media

| Resource | Where |
|---|---|
| Russell & Norvig | Ch.5 (adversarial) · Ch.6 (CSP) |
| Gate Smashers | CSP video · Minimax video |
| AIMA Python | csp.py (AC-3, backtracking, NQueensCSP) · games.py (minimax/alpha-beta) |

#### Fear-Killer Pack AI-W4 (verbatim)

**Resources:** R&N Ch.5-6 • AIMA Python Code • UC Berkeley CS188 Pac-Man Projects

1. Formulate the N-Queens problem as a CSP. For N=8, trace backtracking search with forward checking. Count the number of assignments tried with and without forward checking. Where does forward checking prune search?
2. Apply AC-3 arc consistency to a CSP with variables A,B,C, domains {1,2,3}, and constraints: A < B, B < C, A ≠ C. Show the queue evolution step by step. Which values are eliminated and which arcs are re-added?
3. Trace Minimax on a 4-level game tree where leaf values are: 3,5,2,8,1,9,4,6,7,2,0,3,5,4,9,1. Show the backed-up values at each level. Then apply alpha-beta pruning on the same tree — mark which branches are pruned and explain why.
4. How does move ordering affect alpha-beta pruning efficiency? Given a tree where the optimal ordering visits O(b^(d/2)) nodes but worst-case visits O(b^d), construct a concrete 3-level example showing best vs worst ordering.

#### Narrative — Week 4 (verbatim)

**Topics:** Constraint Satisfaction Problems (CSPs); Backtracking search; Forward checking; Arc consistency (AC-3); Adversarial search; Minimax algorithm; Alpha-beta pruning

**Resources:** Russell & Norvig Ch.5-6; Gate Smashers — CSP, Minimax

**Practice:**
- CSP formulation: variables, domains, constraints
- Backtracking trace for N-Queens (4 or 8)
- Minimax trace on a game tree — show backed-up values
- Alpha-beta pruning: identify which branches are pruned, explain why ordering matters

**Trap:** Alpha-beta pruning effectiveness depends entirely on move ordering. Best moves first = maximum pruning. Worst moves first = no pruning.

**Lab:** Lab 4 — Developing ANN Using ADALINE (Widrow-Hoff, batch vs SGD)

**Deliverable:** Minimax trace + alpha-beta pruning example

**Time budget:** 5 hrs

#### Lab pointer

**Lab this week:** `AI-LABS.md` → **Lab 4 — ANN Using ADALINE** (map in `Lab-Schedule.md`).

#### P0 floor · Drill target · Deliverable · Trap

- **P0 floor:** fear-killer pack pass (Q2 AC-3 trace + Q3 minimax trace) · def/formula skim (CSP/Minimax + minimax formulas) · same-problem drill (N-Queens backtracking)
- **Same-problem drill target:** minimax backed-up values on a 4-level tree; alpha-beta prune decisions < 15 min
- **Deliverable:** Minimax trace + alpha-beta pruning example
- **Trap:** alpha-beta pruning depends entirely on move ordering — best moves first = max pruning

---
### W5 — FOL & Knowledge Representation · 14–20 Sep · P0 · 5 hrs

**Banner:** Rotation AI (Wed+Fri) · Tier P0 · Time budget 5 hrs · P0 floor: pack pass + def/formula skim + same-problem drill.

#### Sources & offsets

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 5 | lines 100–116 |
| Fear-Killer Pack | `Fear-Killer-Packs.md` → AI-W5 | lines 27–36 |
| Week manifest | `weeks/AI-W5.md` | full file |
| Chapter breakdown | — (no `03-Chapter-Breakdowns/`; modules M3 + M5) | — |

#### Definitions (verbatim)

| Term | Definition |
|---|---|
| FOL (First-Order Logic) | A formal logical system that uses quantifiers (∀, ∃) and predicates to represent knowledge. |
| Resolution | A rule of inference for proving logical statements by refutation. |

#### Formulas (verbatim)

| Formula | Statement |
|---|---|
| — | (no FOL formula in `Formula-Book.md`; conversion/unification rules live in the narrative) |

#### Diagrams · Numericals · Tricky · Top-100

| Type | Items |
|---|---|
| Diagrams | `Diagram-Book.md` **#14** Semantic network (nodes = concepts, edges = relations) |
| Numericals | — (none; 10 English-to-FOL conversions are the drill) |
| Tricky | — (deferred) |
| Top-100 | — (deferred) |

#### Books · Chapters · Media

| Resource | Where |
|---|---|
| Russell & Norvig | Ch.8 (FOL) · Ch.9 (inference) · Ch.10 (knowledge representation) |
| Gate Smashers | FOL video |

#### Fear-Killer Pack AI-W5 (verbatim)

**Resources:** Gate Smashers (FOL videos) • R&N Ch.8-9 (FOL), Ch.10 (KR) • AIMA Exercises

1. Convert "Every student who takes AI and studies hard passes the exam. John is a student who takes AI but does not study hard. Therefore, John does not pass the exam." into FOL and prove by resolution refutation. Show the CNF conversion step by step and the resolution steps with substitutions.
2. Find the Most General Unifier (MGU) for: P(f(x, g(a, y)), h(z, b)) and P(f(g(b, w), z), h(x, c)). Show the unification algorithm step by step. If no MGU exists, explain why.
3. Given the knowledge base: ∀x (Student(x) ∧ Studies(x) → Passes(x)), Student(Alice), Studies(Alice), show both forward chaining and backward chaining proofs. Count the inferences each method makes and compare their efficiency.
4. Represent the following knowledge using a semantic network: "A dog is a mammal. Mammals have fur. Dogs have four legs. A poodle is a dog. Poodles are known for being intelligent. My pet Rex is a poodle." Then convert the semantic network into FOL axioms. What inferences can your network support?
5. Design a frame-based representation for a library system. Define frames for Book, Member, and Loan with slots and facets. Show how inheritance works between a general "Item" frame and a "Book" subclass. How does your frame system handle default values and procedural attachments?
6. Write a script for "eating at a restaurant" showing the entry conditions, roles, props, scenes (entering, ordering, eating, paying, leaving), and results. Now show how the script handles exceptions (e.g., the order is wrong or payment is declined).

#### Narrative — Week 5 (verbatim)

**Topics:** Propositional vs first-order logic; FOL syntax (constants, variables, predicates, functions, quantifiers); Semantic networks; Frames; Scripts

**Resources:** Russell & Norvig Ch.8-10; Gate Smashers — FOL

**Practice:**
- Convert English sentences to FOL (∀, ∃, ∧, ∨, ⇒, ⇔)
- Skolemization: remove existential quantifiers
- Unification: find MGU (Most General Unifier)
- Resolution refutation: prove a conclusion by contradiction

**Deliverable:** 10 English-to-FOL conversions + resolution proof

**Lab:** Lab 5 — Developing ANN Using Backward Propagation (multilayer + backprop on XOR)

**Time budget:** 5 hrs

#### Lab pointer

**Lab this week:** `AI-LABS.md` → **Lab 5 — ANN Using Backward Propagation** (map in `Lab-Schedule.md`).

#### P0 floor · Drill target · Deliverable · Trap

- **P0 floor:** fear-killer pack pass (Q1 resolution refutation + Q2 MGU) · def skim (FOL/Resolution) · same-problem drill (English-to-FOL)
- **Same-problem drill target:** 5 English→FOL conversions < 20 min; resolution refutation step-by-step
- **Deliverable:** 10 English-to-FOL conversions + resolution proof
- **Trap:** none flagged — theory-heavy, self-contained week

---
### W6 — Genetic Algorithms · 21–27 Sep · P2 · 6 hrs

**Banner:** Rotation AI (Wed+Fri) · Tier P2 · Time budget 6 hrs · P0 floor: pack pass + def/formula skim + same-problem drill.

#### Sources & offsets

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 6 | lines 120–141 |
| Fear-Killer Pack | `Fear-Killer-Packs.md` → AI-W6 | lines 38–44 |
| Week manifest | `weeks/AI-W6.md` | full file |
| Chapter breakdown | — (no `03-Chapter-Breakdowns/`; module M4) | — |

#### Definitions (verbatim)

| Term | Definition |
|---|---|
| GA (Genetic Algorithm) | An evolutionary algorithm that uses selection, crossover, and mutation to optimize solutions. |

#### Formulas (verbatim)

| Formula | Statement |
|---|---|
| Selection Probability | p(i) = f(i) / Σf(j) |
| Crossover | single-point, multi-point, uniform |
| Mutation | bit flip with probability p_m |

#### Diagrams · Numericals · Tricky · Top-100

| Type | Items |
|---|---|
| Diagrams | `Diagram-Book.md` **#5** GA cycle (selection → crossover → mutation) · **#6** Single-point crossover |
| Numericals | `Numerical-Book.md` **#36** fitness calculation · **#37** roulette wheel selection · **#38** one generation trace |
| Tricky | — (deferred) |
| Top-100 | — (deferred) |

#### Books · Chapters · Media

| Resource | Where |
|---|---|
| Russell & Norvig | Ch.4 (evolutionary computing) |
| Gate Smashers | GA video |

#### Fear-Killer Pack AI-W6 (verbatim)

**Resources:** R&N Ch.4.1 • AIMA Python Code

1. Trace one complete GA generation for the knapsack problem with 6 items: weights [3,5,2,7,4,1], values [10,15,8,20,12,3], capacity = 10. Initial population of 4 chromosomes: [101100], [010111], [110010], [001101]. Show selection probabilities (roulette wheel), single-point crossover at position 3, and bit-flip mutation with p=0.1.
2. Explain the schema theorem and the building block hypothesis. Given a population where schemas H1 = 1 * * 0 * * and H2 = 0 * * 1 * * have different fitnesses, calculate the expected number of representatives in the next generation under proportionate selection.
3. Compare (μ, λ) vs (μ + λ) evolution strategies. For μ=5 parents and λ=20 offspring, show how the next generation is selected in each case. Which strategy is more exploitative and which more explorative?
4. Design a GA for the traveling salesman problem with 8 cities. Show the encoding, crossover (PMX), and mutation (swap). Trace one generation showing fitness calculation based on total distance.

#### Narrative — Week 6 (verbatim)

**Topics:** Biological inspiration; GA cycle (selection → crossover → mutation); Roulette wheel selection; Tournament selection; Crossover (single-point, multi-point, uniform); Mutation; Fitness function; Evolutionary Strategies ((μ, λ) vs (μ + λ) selection, Rechenberg's 1/5 rule); Biology-Inspired Models (Particle Swarm Optimization, Ant Colony Optimization)

**Resources:** Russell & Norvig Ch.4 (evolutionary computing); Gate Smashers — GA

**Practice:**
- Trace one complete GA generation by hand:
  1. Initial population (bit strings)
  2. Fitness computation
  3. Selection probabilities (roulette wheel)
  4. Crossover (single-point at a given index)
  5. Mutation (flip a bit)
- Compute selection probabilities from fitness values

**Killer trap:** Roulette wheel probability calculation: p(i) = f(i) / Σf(j). Students forget to divide by total fitness and give raw fitness values as probabilities. Examiners spot this immediately.

**Lab:** Lab 6 — Applying Uninformed Searching Techniques (BFS/DFS/UCS/IDS). *Note: GA is a theory pillar only — the workbook has no GA lab; self-study with `aimacode/aima-python` + Gate Smashers.*

**Deliverable:** GA trace (one full generation) + Python implementation

**Time budget:** 6 hrs

#### Lab pointer

**Lab this week:** `AI-LABS.md` → **Lab 6 — Uninformed Searching Techniques** (map in `Lab-Schedule.md`). *GA has no lab — theory pillar only.*

#### P0 floor · Drill target · Deliverable · Trap

- **P0 floor:** fear-killer pack pass (Q1 knapsack generation + Q4 TSP design) · def/formula skim (GA + selection/crossover/mutation formulas) · same-problem drill #36/#37/#38
- **Same-problem drill target:** one full GA generation from memory; roulette-wheel p(i) < 30 s
- **Deliverable:** GA trace (one full generation) + Python implementation
- **Trap:** roulette wheel p(i) = f(i)/Σf(j) — don't hand raw fitness as probability (killer trap)

---
### W7 — Midterm Revision · 28 Sep–04 Oct · P1 · 7 hrs

**Banner:** Rotation AI (Wed+Fri) · Tier P1 · Time budget 7 hrs · P0 floor: pack pass + def/formula skim + same-problem drill. **No new material.**

#### Sources & offsets

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 7 | lines 145–160 |
| Fear-Killer Pack | — (revision — no pack; review AI-W3/4/5/6) | — |
| Week manifest | `weeks/AI-W7.md` | full file |
| Chapter breakdown | — (all modules M1–M6) | — |

#### Definitions (verbatim) — full W1–W6 sweep

| Term | Definition |
|---|---|
| A\* | An informed search algorithm that uses f(n) = g(n) + h(n), optimal if h is admissible. |
| Admissible Heuristic | A heuristic that never overestimates the true cost to reach the goal. |
| Heuristic | A problem-solving technique that uses practical methods not guaranteed to be optimal. |
| CSP (Constraint Satisfaction Problem) | A problem where variables must be assigned values from domains subject to constraints. |
| Minimax | A decision rule for minimizing the maximum possible loss in adversarial search. |
| FOL (First-Order Logic) | A formal logical system that uses quantifiers (∀, ∃) and predicates to represent knowledge. |
| Resolution | A rule of inference for proving logical statements by refutation. |
| GA (Genetic Algorithm) | An evolutionary algorithm that uses selection, crossover, and mutation to optimize solutions. |

#### Formulas (verbatim) — full sweep

| Formula | Statement |
|---|---|
| A* Search | f(n) = g(n) + h(n) |
| Consistency | h(n) ≤ c(n, a, n') + h(n') |
| Minimax — Value(state) | Utility(state) if terminal |
| Selection Probability | p(i) = f(i) / Σf(j) |

#### Diagrams · Numericals · Tricky · Top-100

| Type | Items |
|---|---|
| Diagrams | `Diagram-Book.md` **#1–#6** full sweep (A* trace, BFS/DFS, minimax, alpha-beta, GA cycle, crossover) |
| Numericals | `Numerical-Book.md` **#33–#38** (A*, OPEN/CLOSED, admissibility, fitness, roulette, generation) |
| Tricky | — (deferred) |
| Top-100 | — (deferred) |

#### Books · Chapters · Media

| Resource | Where |
|---|---|
| Weeks 3–6 packs | timed past papers |

#### Fear-Killer Pack — revision (AI-W3/4/5/6)

**No single pack this week.** Re-run the AI-W3/W4/W5/W6 packs under timed conditions.

#### Narrative — Week 7 (verbatim)

**Topics:** Comprehensive review of Weeks 1-6

**Practice:**
- Timed past paper (2 hrs, closed book)
- A* trace: one complete example with OPEN/CLOSED lists
- GA generation: trace from scratch
- FOL: 5 English-to-FOL conversions + resolution
- Minimax: one game tree trace

**Red flag:** If you cannot trace A* on a simple graph within 15 minutes, repeat 3 daily until exam.

**Lab:** Lab 7 — Applying Informed Searching Techniques (A* + heuristic choice on 8-puzzle)

**Sleep banking:** Bedtime moves to 22:00 for 5 nights (Weeks 6-7). Sleep 9 hours. This protects memory consolidation of search algorithms, GA cycle, and FOL conversions during deep sleep.

**Time budget:** 7 hrs

#### Lab pointer

**Lab this week:** `AI-LABS.md` → **Lab 7 — Informed Searching Techniques** (map in `Lab-Schedule.md`).

#### P0 floor · Drill target · Deliverable · Trap

- **P0 floor:** re-run packs AI-W3/4/5/6 (timed) · def/formula skim (all W1–W6 defs) · same-problem drill #33/#37
- **Same-problem drill target:** A* trace < 15 min (repeat 3× daily if failing); GA generation from scratch
- **Deliverable:** timed past paper solved + A*/GA/FOL/minimax traces
- **Trap:** retrieval only — no passive re-reading; A* > 15 min → drill 3× daily until exam

---
### W8 — MIDTERM EXAM WEEK · 05–11 Oct · Exam

**Banner:** Rotation AI (Wed+Fri) · Tier MIDTERM · No new deep study, no floor accrual. Ledger frozen during W8.

#### Sources

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 8 | lines 164–174 |
| Pack | `Fear-Killer-Packs.md` → Week 8 | — (no pack) |
| Week manifest | `weeks/AI-W8.md` | full file |

#### Fear-Killer Pack — Week 8 (verbatim)

**No new pack.** Active recall only — review the 1-page cheat sheet and sleep 8 hours.

#### Narrative — Week 8 (verbatim)

**Focus:** Active recall only. No new material.

- Review search algorithm comparison table (BFS, DFS, UCS, A*)
- Review GA cycle (selection → crossover → mutation)
- Review FOL conversion rules
- Sleep 8 hours each night

#### Exam-day stack (Wed + Fri)

- [ ] Past-paper run for the exam subject — 60 min, P0
- [ ] Blank-page retrieval of that subject — 30 min, P0
- [ ] Master Error Log review — 20 min, P0

#### Notes

- Review search algorithm comparison table; GA cycle; FOL conversion rules. Sleep 8 h each night.
- Exam order: A*/search traces first, theory second. A* trace target < 15 min.
- **Ledger frozen during Wk8** — no new accrual; cleared in Wk9 recovery.
