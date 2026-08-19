# CS-323 — ARTIFICIAL INTELLIGENCE — 15-WEEK PLAN

**Professor's Verdict:** *The widest syllabus in your semester. Search algorithms, logic, genetic computing, neural networks, fuzzy logic — it is five mini-courses disguised as one. Focus on the three pillars: A*, GA, and backpropagation. They carry 40% of your exam weight.*

**Credits:** 3+1 (with lab) | **Difficulty:** 4/5 | **Midterm:** Week 8 | **Final:** Week 15

---
## How This Course Works

- **40% exam weight on three topics:** A* search, Genetic Algorithms, Backpropagation.
- **Lab is code-heavy.** Clean, modular code with outputs matters more than clever algorithms.
- **Lab order follows the official workbook** (ANN-first) per `Lab-Schedule.md` — it runs independently of the theory timeline. Each week's Lab line below is the workbook lab due that week.
- **Each topic is self-contained.** Unlike Architecture, topics do not build on each other. This means you can recover from a bad week — but it also means you cannot carry momentum between topics.

---
## Week 1 — Introduction to AI & Problem Solving

**Topics:** What is AI?; Strong AI vs Weak AI; Turing Test; Problem types (deterministic, stochastic, adversarial); State space representation

**Resources:** Russell & Norvig Ch.1-2; Gate Smashers — AI (videos 1-3)

**Practice:**
- Define AI in 4 ways (thinking humanly, acting humanly, thinking rationally, acting rationally)
- Given a real-world problem: identify the state space, initial state, goal state, actions
- 8-puzzle: model as a search problem (state = tile positions, action = move blank)

**Lab:** Lab 1 — Implementing Simple Neural Network Using Perceptron (logic gates); Python refresher + AIMA setup first

**Deliverable:** Search problem formulation for 3 real-world scenarios

**Time budget:** 5 hrs

---
## Week 2 — Uninformed Search

**Topics:** BFS (breadth-first); DFS (depth-first); UCS (uniform cost search); Depth-limited search; Iterative deepening; Completeness, optimality, time and space complexity

**Resources:** Russell & Norvig Ch.3; AIMA Python code — search module

**Practice:**
- For each algorithm: write the frontier data structure (queue, stack, priority queue)
- Trace BFS and DFS on the same graph — note the different paths
- Complexity analysis: BFS = O(b^d) time and space; DFS = O(b^m) time, O(bm) space

**Lab:** Lab 2 — Developing an Artificial Neural Network (ANN) Using Perceptron (learning rule, fit/predict)

**Deliverable:** BFS and DFS implementation + trace output for a sample graph

**Time budget:** 5 hrs

---
## Week 3 — Informed Search & A*

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

---
## Week 4 — CSPs & Adversarial Search

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

---
## Week 5 — First-Order Logic & Knowledge Representation

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

---
## Week 6 — Evolutionary Computing & Genetic Algorithms

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

---
## Week 7 — Midterm Revision

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

---
## Week 8 — MIDTERM EXAM WEEK

**Focus:** Active recall only. No new material.

- Review search algorithm comparison table (BFS, DFS, UCS, A*)
- Review GA cycle (selection → crossover → mutation)
- Review FOL conversion rules
- Sleep 8 hours each night

---
## Week 9 — Rule-Based Systems & Expert Systems (Recovery Week)

**Topics:** Rule-based systems; Forward chaining; Backward chaining; Expert system components (knowledge base, inference engine, user interface); Conflict resolution strategies; Reasoning with imperfect knowledge (certainty factors, Dempster-Shafer theory)

**Resources:** Russell & Norvig Ch.9; PyKnow documentation

**Recovery note:** If midterm scored below 85%, take 2 days at reduced load (20 hrs/week total). Recalibrate — a 78% midterm with 95%+ finals still yields B+/A-.

**Practice:**
- Forward vs backward chaining: when to use each — retrieve from memory, blank page comparison
- Conflict resolution: refraction, recency, specificity — closed book
- Design a simple expert system for a diagnosis problem — from first principles
- **Interleaved retrieval (20 min):** A* trace on a new graph from blank paper — show OPEN list, CLOSED list, f, g, h at each step. Verify heuristic is admissible. All closed book.

**Retrieval protocol:** Every practice item starts from a blank page. No peeking at notes.

**Lab:** Lab 8 — Solving CSPs by Enforcing Arc Consistency (AC-3 + backtracking)

**Deliverable:** Expert system implementation + rule base documentation

**Time budget:** 5 hrs

---
## Week 10 — Neural Networks I: Perceptron

**Topics:** Biological neuron vs artificial neuron; Perceptron; Activation functions (step, sigmoid, tanh, ReLU); Perceptron learning rule; Limitations (XOR problem); Multi-layer perceptron

**Resources:** Russell & Norvig Ch.21; 3Blue1Brown — Neural Networks (YouTube)

**Practice:**
- Perceptron: compute weighted sum, apply activation, compare with target — closed book
- Perceptron convergence theorem: it converges if data is linearly separable — retrieve from memory
- XOR: show why a single perceptron cannot learn XOR — **Killer trap:** Not linearly separable
- **Interleaved retrieval (20 min):** A* trace on a new graph from blank paper — show OPEN/CLOSED lists, f=g+h at each step. Then GA trace: one generation from scratch (selection → crossover → mutation). All closed book.

**Lab:** Lab 9 — Solving CSPs Using Stochastic Local Search (min-conflicts N-Queens)

**Deliverable:** Perceptron implementation + accuracy on AND/OR/XOR

**Time budget:** 5 hrs

---
## Week 11 — Neural Networks II: Backpropagation

**Topics:** Multi-layer neural network; Forward pass; Loss function (MSE); Backward pass (chain rule); Gradient descent; Weight update

**Resources:** Russell & Norvig Ch.21; 3Blue1Brown — Backpropagation series

**Practice:**
- **Solve a 3-layer network by hand (closed book, from blank page):**
   1. Forward pass: compute weighted sums → activations → output → loss
   2. Backward pass: compute ∂L/∂w for each weight using chain rule
   3. Update weights: w_new = w_old − η × ∂L/∂w
- Repeat once per week for 3 consecutive weeks before final exam (W11, W12, W13)
- **Interleaved retrieval (20 min):** FOL — convert 5 English sentences to FOL from blank page. Then resolution refutation: prove a conclusion by contradiction. All closed book.

**Killer trap:** Chain rule order — ∂L/∂w = ∂L/∂o × ∂o/∂net × ∂net/∂w. Students forget the middle term (activation derivative) and wonder why their gradients are wrong. Practice until this is muscle memory.

**Lab:** Lab 10 — Developing Knowledge-Based Systems (CLIPS/PyKE, animal classification)

**Deliverable:** Hand-solved backpropagation for one complete iteration + code

**Time budget:** 6 hrs

---
## Week 12 — Fuzzy Logic

**Topics:** Fuzzy sets vs crisp sets; Membership functions (triangular, trapezoidal, Gaussian); Fuzzy operations (union, intersection, complement); Fuzzy rules; Mamdani vs Sugeno inference; Defuzzification (centroid, bisector, MOM)

**Resources:** Gate Smashers — Fuzzy Logic; scikit-fuzzy documentation

**Sleep banking:** Begin sleeping 9 hrs (bedtime 22:00) for 7 nights leading to finals. Backpropagation and GA calculations need peak cognitive function — protect them with extended sleep.

**Practice:**
- Define membership functions for a given linguistic variable (e.g., temperature: cold, warm, hot) — retrieve from memory
- Mamdani inference: fuzzify → apply rules → aggregate → defuzzify — blank page trace
- Centroid defuzzification: requires integration or approximation — closed book
- **Trap:** Centroid defuzzification approximation errors — students often approximate incorrectly
- **Interleaved retrieval (20 min):** Backpropagation — one complete 3-layer network hand calculation (forward pass → loss → backward pass → weight update) from blank page. All closed book.

**Lab:** Lab 11 — Constructing Complex Rule-Based Systems (conflict resolution, RETE)

**Deliverable:** Fuzzy inference system design + Python/scikit-fuzzy implementation

**Time budget:** 5 hrs

---
## Week 13 — Game Theory & Advanced Topics

**Topics:** Game theory; Nash equilibrium; Prisoner's dilemma; Prospects of AI (AGI, ethical AI, bias in AI); Recent trends

**Resources:** Russell & Norvig Ch.18 (game theory), Ch.27 (prospects)

**Practice:**
- Nash equilibrium: identify pure strategy Nash equilibria
- Prisoner's dilemma: why both players defect despite cooperation being better
- Ethical AI: bias, fairness, transparency — be ready to write a paragraph

**Deliverable:** Game theory equilibrium analysis

**Lab:** Lab 12 — Practicing Data-Driven Programming in Expert Systems (forward chaining)

**Time budget:** 4 hrs

---
## Week 14 — Final Exam Preparation (Taper)

**Topics:** Cumulative review Weeks 1-13; Past paper practice; Lab project finalization

**Retrieval protocol:** No passive reading at all this week. Every minute is active retrieval from blank page. If you cannot trace A* from memory, that tells you exactly what to drill.

**Sleep banking:** Continue 9 hrs sleep (bedtime 22:00). Do NOT trade sleep for last-minute studying — it degrades recall by 15-20% per lost hour.

**Practice:**
- Timed full-length past paper (3 hrs, closed book) — START with the past paper, NOT with review
- A*: one complete trace with admissible heuristic verification — from blank page
- GA: one generation with roulette wheel probabilities — retrieve formulas from memory
- Backpropagation: one complete hand calculation — from blank page, timed (15 min target)
- Expert systems: forward vs backward chaining — retrieve comparison from memory
- Fuzzy logic: Mamdani vs Sugeno — blank page comparison table
- **Spaced repetition:** Backpropagation hand calculation (repeat from W12) — expanding interval. If chain rule takes >5 min, drill 3 more until <3 min.

**Important:** Submit final lab deliverables this week (incl. Lab 13 — Developing Fuzzy Logic Based System)

**Deliverable:** Solved past paper + final lab project

**Time budget:** 8 hrs

---
## Week 15 — FINAL EXAM & LAB VIVA

**Focus:** Execution. Do not learn anything new.

**Theory Exam:**
- Review 1-page cheat sheet (A* f=g+h, GA cycle, backprop chain rule, activation functions)
- Answer order: A* trace → GA → neural networks → FOL → fuzzy logic → theory
- For trace problems (A*, GA, backprop): write every step clearly. Partial credit exists. If the final number is wrong but the process is correct, you get 70% of the marks

**Lab Viva (separate slot):**
- Demonstrate your best implementation (preferably A* or GA with visual output)
- Explain your design choices: "Why A* instead of BFS?" "What heuristic did you use? Is it admissible?"
- Run your code live during viva — ensure it works on a fresh environment
- Be ready to modify a parameter and explain the expected behavior change

---
## Professor's Final Words

*Artificial Intelligence is the most exciting course in your semester because it asks the deepest question: what does it mean to be intelligent? The algorithms you learn here — search, evolution, neural computation — are not just exam topics. They are the building blocks of the future you will build.*

*But do not let the philosophical excitement distract you from the practical: A* is traceable, GA is computational, and backpropagation is mechanical. Practice them until they are boring. Then practice them again.*

*On the lab: the student who compares BFS vs DFS vs A* on the same problem, with a table and a graph, has already earned an A. The student who submits a single algorithm with no analysis has earned a C.*
