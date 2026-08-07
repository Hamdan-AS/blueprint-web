# AI-AFTER-MID — Weeks 9–15 · 12 Oct – 29 Nov 2026 · FINAL (W15)

<!-- colors: 9-10:#ffd27a:#b45309 11:#c7adff:#6d28d9 12:#80d8cc:#0f766e 13:#c7adff:#6d28d9 14:#80d8cc:#0f766e 15:#ff9e9e:#dc2626 -->

> **Scope:** Weeks 9–15 (12 Oct – 29 Nov 2026) — rule-based & expert systems, neural networks I (perceptron), neural networks II (backpropagation), fuzzy logic, game theory & ethics, ending at the Week 15 final + lab viva.
> **Siblings:** `AI-NAV.md` (master map) · `AI-BEFORE-MID.md` (Weeks 1–8) · `AI-LABS.md` (labs). Week-colored headers below match the NAV schedule.
> **Exam split:** ~40% numerical/trace + ~60% theory, weighted heavily toward the three pillars (A*, GA, backprop). Process > final number on trace problems.
> **Exam order:** A* trace → GA → neural networks → FOL → fuzzy logic → theory (final). Lab viva in a separate W15 slot.

---

## At a glance (W9–W15)

| W | Dates | Variant | File | Topics | Module |
|---|---|---|---|---|---|
| W9 | 12–18 Oct | P1 | AFTER | Rule-based & expert systems (recovery) | 06 |
| W10 | 19–25 Oct | P0 | AFTER | Neural networks I: perceptron | 07 |
| W11 | 26 Oct–01 Nov | P2 | AFTER | Neural networks II: backpropagation | 07 |
| W12 | 02–08 Nov | P0 | AFTER | Fuzzy logic | 08 |
| W13 | 09–15 Nov | P1 | AFTER | Game theory & ethics | 09 |
| W14 | 16–22 Nov | P0 | AFTER | Final taper — past paper FIRST | 01–09 |
| W15 | 23–29 Nov | FINAL | AFTER | Exam + lab viva — execute | — |

> Tier key: **P0** = no exam pressure (front-load new material) · **P1** = light revision · **P2** = drill-heavy week. Variants editorial (AI manifests carry no variant field).

---

### W9 — Rule-Based & Expert Systems · 12–18 Oct · P1 · 5 hrs

**Banner:** Rotation AI (Wed+Fri) · Tier P1 · Time budget 5 hrs · P0 floor: pack pass + def/formula skim + same-problem drill. **Recovery week — ledger MUST clear to 0.**

#### Sources & offsets

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 9 | lines 177–197 |
| Fear-Killer Pack | `Fear-Killer-Packs.md` → AI-W9 | lines 46–51 |
| Week manifest | `weeks/AI-W9.md` | full file |
| Chapter breakdown | — (no `03-Chapter-Breakdowns/`; module M6) | — |

#### Definitions (verbatim)

| Term | Definition |
|---|---|
| — | (no expert-system entry in `Definition-Book.md`; definitions live in the pack + narrative) |

#### Formulas (verbatim)

| Formula | Statement |
|---|---|
| — | (none in `Formula-Book.md` for rule-based systems) |

#### Diagrams · Numericals · Tricky · Top-100

| Type | Items |
|---|---|
| Diagrams | `Diagram-Book.md` **#15** Expert system architecture (KB, inference engine, UI) |
| Numericals | — (none; design + rule-firing traces) |
| Tricky | — (deferred) |
| Top-100 | — (deferred) |

#### Books · Chapters · Media

| Resource | Where |
|---|---|
| Russell & Norvig | Ch.9 (inference in FOL) — rule-based reasoning |
| PyKnow | documentation |

#### Fear-Killer Pack AI-W9 (verbatim)

**Resources:** R&N Ch.9 • AIMA Python Code

1. Design a rule-based system for medical diagnosis with 10 rules covering fever, cough, headache, and rash. Show the rule syntax (IF-THEN), the working memory, and the conflict resolution strategy. Trace forward chaining for patient symptoms: fever=true, cough=true, no rash. Show each rule firing step and the updated working memory.
2. Given a rule base where multiple rules match simultaneously, implement and compare three conflict resolution strategies: rule ordering, specificity (most conditions first), and recency (most recently matched facts first). Construct an example where each strategy selects a different rule.
3. Explain the Rete algorithm conceptually. Given rules with common antecedents, show how Rete's network structure avoids redundant matching. Compare the computational complexity of naive rule matching vs Rete for a system with R rules and C condition elements per rule.

#### Narrative — Week 9 (verbatim)

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

#### Lab pointer

**Lab this week:** `AI-LABS.md` → **Lab 8 — CSPs by Arc Consistency** (map in `Lab-Schedule.md`).

#### P0 floor · Drill target · Deliverable · Trap

- **P0 floor:** fear-killer pack pass (Q1 diagnosis trace + Q2 conflict resolution) · def/formula skim (narrative-sourced) · same-problem drill (rule-firing trace)
- **Same-problem drill target:** forward-chaining firing sequence from memory; conflict-resolution comparison
- **Deliverable:** expert system implementation + rule base documentation
- **Trap:** recovery mandate — ledger MUST clear to 0; A* interleaved retrieval (W3 content) before it decays

---

### W10 — Neural Networks I: Perceptron · 19–25 Oct · P0 · 5 hrs

**Banner:** Rotation AI (Wed+Fri) · Tier P0 · Time budget 5 hrs · P0 floor: pack pass (narrative-sourced) + def/formula skim + same-problem drill.

#### Sources & offsets

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 10 | lines 201–217 |
| Fear-Killer Pack | — (no pack — AI-W10 not in `Fear-Killer-Packs.md`) | — |
| Week manifest | `weeks/AI-W10.md` | full file |
| Chapter breakdown | — (no `03-Chapter-Breakdowns/`; module M7) | — |

#### Definitions (verbatim)

| Term | Definition |
|---|---|
| Perceptron | The simplest artificial neural network — a single-layer binary classifier. |

#### Formulas (verbatim)

| Formula | Statement |
|---|---|
| Perceptron — Output | Output = activation(Σ w_i × x_i + bias) |
| Perceptron — Weight Update | w_new = w_old + η × (target − output) × x |

#### Diagrams · Numericals · Tricky · Top-100

| Type | Items |
|---|---|
| Diagrams | `Diagram-Book.md` **#7** Artificial neuron (inputs → weights → summation → activation) · **#10** Activation functions (step, sigmoid, tanh, ReLU) |
| Numericals | — (none in `Numerical-Book.md`; hand-compute weighted sums) |
| Tricky | — (deferred) |
| Top-100 | — (deferred) |

#### Books · Chapters · Media

| Resource | Where |
|---|---|
| Russell & Norvig | Ch.21 (neural networks) |
| 3Blue1Brown | Neural Networks (YouTube) |

#### Fear-Killer Pack — none this week

**No pack (AI-W10).** Deep study from narrative + R&N Ch.21. The AI-W11 pack (next week) covers the full forward/backward machinery.

#### Narrative — Week 10 (verbatim)

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

#### Lab pointer

**Lab this week:** `AI-LABS.md` → **Lab 9 — CSPs Using Stochastic Local Search** (map in `Lab-Schedule.md`).

#### P0 floor · Drill target · Deliverable · Trap

- **P0 floor:** narrative-sourced drill (weighted-sum + activation by hand) · def/formula skim (Perceptron + perceptron formulas) · same-problem drill (XOR analysis)
- **Same-problem drill target:** perceptron weighted-sum < 1 min; convergence conditions from memory
- **Deliverable:** perceptron implementation + accuracy on AND/OR/XOR
- **Trap:** single perceptron cannot learn XOR — not linearly separable (killer trap)

---

### W11 — Neural Networks II: Backpropagation · 26 Oct–01 Nov · P2 · 6 hrs

**Banner:** Rotation AI (Wed+Fri) · Tier P2 · Time budget 6 hrs · P0 floor: pack pass + def/formula skim + same-problem drill.

#### Sources & offsets

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 11 | lines 221–241 |
| Fear-Killer Pack | `Fear-Killer-Packs.md` → AI-W11 | lines 53–59 |
| Week manifest | `weeks/AI-W11.md` | full file |
| Chapter breakdown | — (no `03-Chapter-Breakdowns/`; module M7) | — |

#### Definitions (verbatim)

| Term | Definition |
|---|---|
| Backpropagation | A supervised learning algorithm that computes gradients of the loss function with respect to weights using the chain rule. |

#### Formulas (verbatim)

| Formula | Statement |
|---|---|
| Forward | a^(l) = σ(W^(l) × a^(l−1) + b^(l)) |
| Loss | L = ½(y − a)² (MSE) |
| Chain Rule | ∂L/∂w = ∂L/∂a × ∂a/∂z × ∂z/∂w |
| Weight Update | w_new = w_old − η × ∂L/∂w |

#### Diagrams · Numericals · Tricky · Top-100

| Type | Items |
|---|---|
| Diagrams | `Diagram-Book.md` **#8** Multi-layer perceptron (2-2-1) · **#9** Backpropagation: forward and backward pass |
| Numericals | `Numerical-Book.md` **#39** forward pass (2/3-layer) · **#40** loss (MSE) · **#41** backward pass ∂L/∂w · **#42** weight update with η |
| Tricky | — (deferred) |
| Top-100 | — (deferred) |

#### Books · Chapters · Media

| Resource | Where |
|---|---|
| Russell & Norvig | Ch.21 (neural networks) |
| 3Blue1Brown | Backpropagation series (YouTube) |
| Karpathy | NN Zero to Hero |

#### Fear-Killer Pack AI-W11 (verbatim)

**Resources:** 3Blue1Brown NN Playlist • Karpathy Zero to Hero • R&N Ch.21 • AIMA Python Code

1. Compute forward pass for a 2-2-1 network with: weights W1 = [[0.3,-0.1],[0.5,0.2]], biases b1 = [0.1, -0.2], W2 = [0.4, -0.3], b2 = 0.05, input x = [0.8, 0.6], using sigmoid activation. Then compute backward pass with target y=1 and MSE loss. Update all weights using gradient descent with learning rate 0.5.
2. Prove mathematically why a single perceptron cannot learn XOR. Show the decision boundary and demonstrate that XOR is not linearly separable. Then show how adding a hidden layer with 2 neurons solves XOR.
3. Explain the vanishing gradient problem. For a network with 10 hidden layers using sigmoid activation, compute the gradient magnitude at layer 1 vs layer 10 after one backward pass. Show how ReLU alleviates this problem. What about dead ReLU?
4. Compare batch gradient descent, stochastic gradient descent, and mini-batch SGD. For a dataset of 10,000 samples with batch sizes of 1, 32, and 10,000, compute the number of weight updates per epoch and the variance of each update. When would you choose each variant?

#### Narrative — Week 11 (verbatim)

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

#### Lab pointer

**Lab this week:** `AI-LABS.md` → **Lab 10 — Developing Knowledge-Based Systems** (map in `Lab-Schedule.md`).

#### P0 floor · Drill target · Deliverable · Trap

- **P0 floor:** fear-killer pack pass (Q1 full 2-2-1 forward+backward+update + Q2 XOR proof) · def/formula skim (Backpropagation + all NN formulas) · same-problem drill #39–#42
- **Same-problem drill target:** 3-layer hand calculation < 15 min; chain rule < 3 min
- **Deliverable:** hand-solved backpropagation for one complete iteration + code
- **Trap:** chain rule middle term (activation derivative) — ∂L/∂w = ∂L/∂o × ∂o/∂net × ∂net/∂w (killer trap)

---

### W12 — Fuzzy Logic · 02–08 Nov · P0 · 5 hrs

**Banner:** Rotation AI (Wed+Fri) · Tier P0 · Time budget 5 hrs · P0 floor: pack pass + def/formula skim + same-problem drill. **Start sleep banking: 9 hrs (bedtime 22:00) for 7 nights.**

#### Sources & offsets

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 12 | lines 245–263 |
| Fear-Killer Pack | `Fear-Killer-Packs.md` → AI-W12 | lines 61–66 |
| Week manifest | `weeks/AI-W12.md` | full file |
| Chapter breakdown | — (no `03-Chapter-Breakdowns/`; module M8) | — |

#### Definitions (verbatim)

| Term | Definition |
|---|---|
| Fuzzy Logic | A logic system that handles degrees of truth (values between 0 and 1) rather than binary true/false. |

#### Formulas (verbatim)

| Formula | Statement |
|---|---|
| Fuzzy set | A = {(x, μ_A(x))} where μ_A(x) ∈ [0,1] |
| Union | μ_A∪B(x) = max(μ_A(x), μ_B(x)) |
| Intersection | μ_A∩B(x) = min(μ_A(x), μ_B(x)) |
| Complement | μ_Ā(x) = 1 − μ_A(x) |
| Centroid defuzzification | COG = Σ x·μ(x) / Σ μ(x) |
| Mamdani inference | fuzzify → apply rules (min) → aggregate (max) → defuzzify |

#### Diagrams · Numericals · Tricky · Top-100

| Type | Items |
|---|---|
| Diagrams | `Diagram-Book.md` **#11** Fuzzy membership functions (triangular, trapezoidal) · **#12** Mamdani fuzzy inference system (fuzzify → rules → aggregate → defuzzify) |
| Numericals | `Numerical-Book.md` **#43** fuzzification (membership degree) · **#44** Mamdani inference (rule firing strength) · **#45** centroid defuzzification |
| Tricky | — (deferred) |
| Top-100 | — (deferred) |

#### Books · Chapters · Media

| Resource | Where |
|---|---|
| Gate Smashers | Fuzzy Logic video |
| scikit-fuzzy | documentation |

#### Fear-Killer Pack AI-W12 (verbatim)

**Resources:** Gate Smashers (Fuzzy videos) • MATLAB Fuzzy Logic Toolbox / scikit-fuzzy

1. Design a fuzzy temperature controller for a room. Define three membership functions for temperature: Cold (trapezoidal 0-15°C), Comfortable (triangular 10-30°C), Hot (trapezoidal 25-45°C). Define three output membership functions for heater power: Off, Low, High. Write 5 fuzzy rules. For input temperature = 22°C, trace the Mamdani inference and compute the defuzzified output using centroid method.
2. Compare Mamdani vs Sugeno inference systems. Take the same temperature controller and implement it in Sugeno form with constant outputs. Show the computation difference and state when you would use each. Which is more computationally efficient and why?
3. For a fuzzy set A = {(1,0.2), (2,0.5), (3,0.8), (4,1.0), (5,0.7)} and B = {(1,0.3), (2,0.6), (3,1.0), (4,0.5), (5,0.1)}, compute the fuzzy union (max), intersection (min), and complement. Then compute the center of gravity defuzzification for A.

#### Narrative — Week 12 (verbatim)

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

#### Lab pointer

**Lab this week:** `AI-LABS.md` → **Lab 11 — Complex Rule-Based Systems** (map in `Lab-Schedule.md`).

#### P0 floor · Drill target · Deliverable · Trap

- **P0 floor:** fear-killer pack pass (Q1 Mamdani temperature trace + Q3 fuzzy set operations) · def/formula skim (Fuzzy Logic + all fuzzy formulas) · same-problem drill #43/#44/#45
- **Same-problem drill target:** fuzzy union/intersection/complement < 5 min; centroid defuzzification approximation
- **Deliverable:** fuzzy inference system design + Python/scikit-fuzzy implementation
- **Trap:** centroid defuzzification approximation errors; backprop interleaved retrieval (W11 content) must be re-drilled

---

### W13 — Game Theory & Ethics · 09–15 Nov · P1 · 4 hrs

**Banner:** Rotation AI (Wed+Fri) · Tier P1 · Time budget 4 hrs · P0 floor: pack pass + def/formula skim + same-problem drill.

#### Sources & offsets

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 13 | lines 268–283 |
| Fear-Killer Pack | `Fear-Killer-Packs.md` → AI-W13 | lines 68–74 |
| Week manifest | `weeks/AI-W13.md` | full file |
| Chapter breakdown | — (no `03-Chapter-Breakdowns/`; module M9) | — |

#### Definitions (verbatim)

| Term | Definition |
|---|---|
| — | (no game-theory entry in `Definition-Book.md`; definitions live in the pack + narrative) |

#### Formulas (verbatim)

| Formula | Statement |
|---|---|
| — | (none in `Formula-Book.md` for game theory) |

#### Diagrams · Numericals · Tricky · Top-100

| Type | Items |
|---|---|
| Diagrams | — (none specific; payoff matrices are the "diagram") |
| Numericals | — (none; Nash equilibrium searches by inspection) |
| Tricky | — (deferred) |
| Top-100 | — (deferred) |

#### Books · Chapters · Media

| Resource | Where |
|---|---|
| Russell & Norvig | Ch.18 (game theory) · Ch.27 (prospects) |

#### Fear-Killer Pack AI-W13 (verbatim)

**Resources:** R&N Ch.18 (Game Theory), Ch.27 (AI Ethics)

1. Find all pure strategy Nash equilibria in the following 3×3 payoff matrix. Then find mixed strategy Nash equilibrium. Player 1 chooses row, Player 2 chooses column. Payoffs: Row1 (3,2)(0,1)(4,0), Row2 (1,3)(2,0)(0,4), Row3 (2,1)(1,2)(3,3).
2. Explain the Prisoner's Dilemma. Show the payoff matrix and prove why both players defecting is the Nash equilibrium even though mutual cooperation gives a better collective outcome. How does this apply to real-world scenarios like arms races or price wars?
3. Define the AI alignment problem. Given an AI tasked with "maximize paperclip production," enumerate at least 4 concrete misalignment scenarios (what the AI does vs what humans actually want). For each, propose one technical or design approach to mitigate it.
4. Explain the ethical concerns with autonomous weapons under the framework of meaningful human control. Take a specific scenario like an autonomous drone that identifies and engages targets — at what point in the kill chain must a human remain?

#### Narrative — Week 13 (verbatim)

**Topics:** Game theory; Nash equilibrium; Prisoner's dilemma; Prospects of AI (AGI, ethical AI, bias in AI); Recent trends

**Resources:** Russell & Norvig Ch.18 (game theory), Ch.27 (prospects)

**Practice:**
- Nash equilibrium: identify pure strategy Nash equilibria
- Prisoner's dilemma: why both players defect despite cooperation being better
- Ethical AI: bias, fairness, transparency — be ready to write a paragraph

**Deliverable:** Game theory equilibrium analysis

**Lab:** Lab 12 — Practicing Data-Driven Programming in Expert Systems (forward chaining)

**Time budget:** 4 hrs

#### Lab pointer

**Lab this week:** `AI-LABS.md` → **Lab 12 — Data-Driven Expert Systems** (map in `Lab-Schedule.md`).

#### P0 floor · Drill target · Deliverable · Trap

- **P0 floor:** fear-killer pack pass (Q1 Nash equilibria + Q2 Prisoner's dilemma) · def/formula skim (narrative-sourced) · same-problem drill (payoff-matrix analysis)
- **Same-problem drill target:** pure-strategy Nash equilibrium by inspection < 5 min; ethics paragraph structure
- **Deliverable:** game theory equilibrium analysis
- **Trap:** none flagged — light theory week; protects sleep banking for finals

---

### W14 — Final Taper · 16–22 Nov · P0 · 8 hrs

**Banner:** Rotation AI (Wed+Fri) · Tier P0 · Time budget 8 hrs · P0 floor: pack pass + def/formula skim + same-problem drill. **START with the past paper, NOT with review.**

#### Sources & offsets

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 14 | lines 287–308 |
| Fear-Killer Pack | — (taper — no pack; re-run AI-W3/4/5/6/9/11/12/13) | — |
| Week manifest | `weeks/AI-W14.md` | full file |
| Chapter breakdown | — (all modules M1–M9) | — |

#### Definitions (verbatim) — full W1–W13 sweep

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
| Perceptron | The simplest artificial neural network — a single-layer binary classifier. |
| Backpropagation | A supervised learning algorithm that computes gradients of the loss function with respect to weights using the chain rule. |
| Fuzzy Logic | A logic system that handles degrees of truth (values between 0 and 1) rather than binary true/false. |

#### Formulas (verbatim) — full sweep

| Formula | Statement |
|---|---|
| A* Search | f(n) = g(n) + h(n) |
| Consistency | h(n) ≤ c(n, a, n') + h(n') |
| Minimax — Value(state) | Utility(state) if terminal |
| Selection Probability | p(i) = f(i) / Σf(j) |
| Perceptron — Output | Output = activation(Σ w_i × x_i + bias) |
| Perceptron — Weight Update | w_new = w_old + η × (target − output) × x |
| Backprop — Forward | a^(l) = σ(W^(l) × a^(l−1) + b^(l)) |
| Backprop — Loss | L = ½(y − a)² (MSE) |
| Backprop — Chain Rule | ∂L/∂w = ∂L/∂a × ∂a/∂z × ∂z/∂w |
| Backprop — Weight Update | w_new = w_old − η × ∂L/∂w |
| Fuzzy — Union | μ_A∪B(x) = max(μ_A(x), μ_B(x)) |
| Fuzzy — Intersection | μ_A∩B(x) = min(μ_A(x), μ_B(x)) |
| Fuzzy — Complement | μ_Ā(x) = 1 − μ_A(x) |
| Fuzzy — Centroid | COG = Σ x·μ(x) / Σ μ(x) |

#### Diagrams · Numericals · Tricky · Top-100

| Type | Items |
|---|---|
| Diagrams | `Diagram-Book.md` **#1–#15** full sweep |
| Numericals | `Numerical-Book.md` **#33–#45** (A*, GA, backprop, fuzzy) |
| Tricky | — (deferred) |
| Top-100 | — (deferred) |

#### Books · Chapters · Media

| Resource | Where |
|---|---|
| Weeks 3–6 + 9–13 packs | timed past papers |

#### Fear-Killer Pack — final taper (all packs)

**No single pack this week.** Re-run every pack under timed conditions: AI-W3/4/5/6 (pre-mid) + AI-W9/11/12/13 (post-mid).

#### Narrative — Week 14 (verbatim)

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

#### Lab pointer

**Lab this week:** `AI-LABS.md` → **Lab 13 — Fuzzy Logic Based System** (final lab deliverable, due W14).

#### P0 floor · Drill target · Deliverable · Trap

- **P0 floor:** re-run all packs (timed) · def/formula skim (all W1–W13 defs; formulas from memory first) · same-problem drill #33/#37/#39/#45
- **Same-problem drill target:** A* trace < 15 min; GA generation from memory; backprop < 15 min (chain rule < 3 min)
- **Deliverable:** solved past paper + final lab project (submit Lab 13 this week)
- **Trap:** no passive reading — every minute active retrieval; START with the past paper, NOT with review

---

### W15 — FINAL EXAM & LAB VIVA · 23–29 Nov · Exam

**Banner:** Rotation AI (Wed+Fri) · Tier FINAL · No new deep study, no floor accrual. Ledger frozen during W15.

#### Sources

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 15 | lines 312–326 |
| Pack | `Fear-Killer-Packs.md` → Week 15 | — (no pack) |
| Week manifest | (W15 note at `weeks/AI-W14.md` L56) | reference |

#### Fear-Killer Pack — Week 15 (verbatim)

**Week 15: FINAL EXAM** — No new pack. Execution only: A* trace → GA → NN → FOL → fuzzy → theory; write every step of every trace.

#### Narrative — Week 15 (verbatim)

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

#### Exam-day stack (final) + viva

- [ ] Theory exam order: A* trace → GA → neural networks → FOL → fuzzy logic → theory; write every step (process ≈ 70%)
- [ ] Lab viva (separate slot): demonstrate best implementation live; `AI-LABS.md` viva + `Viva-Book.md` walkthrough → technical
- [ ] Sleep 9 h (banked from W12)

#### Notes

- Review the 1-page cheat sheet (A* f=g+h, GA cycle, backprop chain rule, activation functions). Sleep 8–9 h.
- Trace problems: partial credit exists — process is 70% of the marks.
- **Ledger frozen during Wk15** — exam window 30 Nov – 18 Dec is a separate phase (per `weeks/AI-W14.md` L56).
