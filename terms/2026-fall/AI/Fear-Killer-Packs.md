# FEAR-KILLER-PACKS

Each pack is 3-5 questions per syllabus topic. Questions are ordered hardest first — attack the fear immediately, then coast through the rest.

---

## CS-323 Artificial Intelligence

**Resources:** Gate Smashers AI Playlist • Russell & Norvig 4th Ed • 3Blue1Brown Neural Networks • Karpathy NN Zero to Hero • AIMA Exercises

### AI-W3: Search
**Resources:** Gate Smashers (Search videos) • R&N Ch.3 • AIMA Python Code

1. Trace A* on a graph where the heuristic is NOT admissible. Show the OPEN/CLOSED lists step by step and demonstrate how non-admissibility causes a suboptimal solution to be returned first.
2. Given the 8-puzzle initial state `[[2,8,3],[1,6,4],[7,0,5]]` and goal `[[1,2,3],[8,0,4],[7,6,5]]`, model as a search problem and trace A* with Manhattan distance heuristic. Show at least 3 expansions with the OPEN list priority queue.
3. Compare BFS, UCS, and A* on a graph with varying edge costs. Construct a 5-node graph where BFS finds a suboptimal path but A* finds the optimal. Show the frontier at each step for all three algorithms.
4. What is an admissible heuristic? Prove that if h is admissible, A* with graph search is optimal. Then construct a heuristic that is admissible but not consistent, and show how consistency could have pruned more nodes.

### AI-W4: CSP & Adversarial Search
**Resources:** R&N Ch.5-6 • AIMA Python Code • UC Berkeley CS188 Pac-Man Projects

1. Formulate the N-Queens problem as a CSP. For N=8, trace backtracking search with forward checking. Count the number of assignments tried with and without forward checking. Where does forward checking prune search?
2. Apply AC-3 arc consistency to a CSP with variables A,B,C, domains {1,2,3}, and constraints: A < B, B < C, A ≠ C. Show the queue evolution step by step. Which values are eliminated and which arcs are re-added?
3. Trace Minimax on a 4-level game tree where leaf values are: 3,5,2,8,1,9,4,6,7,2,0,3,5,4,9,1. Show the backed-up values at each level. Then apply alpha-beta pruning on the same tree — mark which branches are pruned and explain why.
4. How does move ordering affect alpha-beta pruning efficiency? Given a tree where the optimal ordering visits O(b^(d/2)) nodes but worst-case visits O(b^d), construct a concrete 3-level example showing best vs worst ordering.

### AI-W5: First-Order Logic & Knowledge Representation
**Resources:** Gate Smashers (FOL videos) • R&N Ch.8-9 (FOL), Ch.10 (KR) • AIMA Exercises

1. Convert "Every student who takes AI and studies hard passes the exam. John is a student who takes AI but does not study hard. Therefore, John does not pass the exam." into FOL and prove by resolution refutation. Show the CNF conversion step by step and the resolution steps with substitutions.
2. Find the Most General Unifier (MGU) for: P(f(x, g(a, y)), h(z, b)) and P(f(g(b, w), z), h(x, c)). Show the unification algorithm step by step. If no MGU exists, explain why.
3. Given the knowledge base: ∀x (Student(x) ∧ Studies(x) → Passes(x)), Student(Alice), Studies(Alice), show both forward chaining and backward chaining proofs. Count the inferences each method makes and compare their efficiency.

4. Represent the following knowledge using a semantic network: "A dog is a mammal. Mammals have fur. Dogs have four legs. A poodle is a dog. Poodles are known for being intelligent. My pet Rex is a poodle." Then convert the semantic network into FOL axioms. What inferences can your network support?
5. Design a frame-based representation for a library system. Define frames for Book, Member, and Loan with slots and facets. Show how inheritance works between a general "Item" frame and a "Book" subclass. How does your frame system handle default values and procedural attachments?
6. Write a script for "eating at a restaurant" showing the entry conditions, roles, props, scenes (entering, ordering, eating, paying, leaving), and results. Now show how the script handles exceptions (e.g., the order is wrong or payment is declined).

### AI-W6: Genetic Algorithms
**Resources:** R&N Ch.4.1 • AIMA Python Code

1. Trace one complete GA generation for the knapsack problem with 6 items: weights [3,5,2,7,4,1], values [10,15,8,20,12,3], capacity = 10. Initial population of 4 chromosomes: [101100], [010111], [110010], [001101]. Show selection probabilities (roulette wheel), single-point crossover at position 3, and bit-flip mutation with p=0.1.
2. Explain the schema theorem and the building block hypothesis. Given a population where schemas H1 = 1 * * 0 * * and H2 = 0 * * 1 * * have different fitnesses, calculate the expected number of representatives in the next generation under proportionate selection.
3. Compare (μ, λ) vs (μ + λ) evolution strategies. For μ=5 parents and λ=20 offspring, show how the next generation is selected in each case. Which strategy is more exploitative and which more explorative?
4. Design a GA for the traveling salesman problem with 8 cities. Show the encoding, crossover (PMX), and mutation (swap). Trace one generation showing fitness calculation based on total distance.

### AI-W9: Rule-Based Systems
**Resources:** R&N Ch.9 • AIMA Python Code

1. Design a rule-based system for medical diagnosis with 10 rules covering fever, cough, headache, and rash. Show the rule syntax (IF-THEN), the working memory, and the conflict resolution strategy. Trace forward chaining for patient symptoms: fever=true, cough=true, no rash. Show each rule firing step and the updated working memory.
2. Given a rule base where multiple rules match simultaneously, implement and compare three conflict resolution strategies: rule ordering, specificity (most conditions first), and recency (most recently matched facts first). Construct an example where each strategy selects a different rule.
3. Explain the Rete algorithm conceptually. Given rules with common antecedents, show how Rete's network structure avoids redundant matching. Compare the computational complexity of naive rule matching vs Rete for a system with R rules and C condition elements per rule.

### AI-W11: Neural Networks
**Resources:** 3Blue1Brown NN Playlist • Karpathy Zero to Hero • R&N Ch.21 • AIMA Python Code

1. Compute forward pass for a 2-2-1 network with: weights W1 = [[0.3,-0.1],[0.5,0.2]], biases b1 = [0.1, -0.2], W2 = [0.4, -0.3], b2 = 0.05, input x = [0.8, 0.6], using sigmoid activation. Then compute backward pass with target y=1 and MSE loss. Update all weights using gradient descent with learning rate 0.5.
2. Prove mathematically why a single perceptron cannot learn XOR. Show the decision boundary and demonstrate that XOR is not linearly separable. Then show how adding a hidden layer with 2 neurons solves XOR.
3. Explain the vanishing gradient problem. For a network with 10 hidden layers using sigmoid activation, compute the gradient magnitude at layer 1 vs layer 10 after one backward pass. Show how ReLU alleviates this problem. What about dead ReLU?
4. Compare batch gradient descent, stochastic gradient descent, and mini-batch SGD. For a dataset of 10,000 samples with batch sizes of 1, 32, and 10,000, compute the number of weight updates per epoch and the variance of each update. When would you choose each variant?

### AI-W12: Fuzzy Logic
**Resources:** Gate Smashers (Fuzzy videos) • MATLAB Fuzzy Logic Toolbox / scikit-fuzzy

1. Design a fuzzy temperature controller for a room. Define three membership functions for temperature: Cold (trapezoidal 0-15°C), Comfortable (triangular 10-30°C), Hot (trapezoidal 25-45°C). Define three output membership functions for heater power: Off, Low, High. Write 5 fuzzy rules. For input temperature = 22°C, trace the Mamdani inference and compute the defuzzified output using centroid method.
2. Compare Mamdani vs Sugeno inference systems. Take the same temperature controller and implement it in Sugeno form with constant outputs. Show the computation difference and state when you would use each. Which is more computationally efficient and why?
3. For a fuzzy set A = {(1,0.2), (2,0.5), (3,0.8), (4,1.0), (5,0.7)} and B = {(1,0.3), (2,0.6), (3,1.0), (4,0.5), (5,0.1)}, compute the fuzzy union (max), intersection (min), and complement. Then compute the center of gravity defuzzification for A.

### AI-W13: Game Theory & Ethics
**Resources:** R&N Ch.18 (Game Theory), Ch.27 (AI Ethics)

1. Find all pure strategy Nash equilibria in the following 3×3 payoff matrix. Then find mixed strategy Nash equilibrium. Player 1 chooses row, Player 2 chooses column. Payoffs: Row1 (3,2)(0,1)(4,0), Row2 (1,3)(2,0)(0,4), Row3 (2,1)(1,2)(3,3).
2. Explain the Prisoner's Dilemma. Show the payoff matrix and prove why both players defecting is the Nash equilibrium even though mutual cooperation gives a better collective outcome. How does this apply to real-world scenarios like arms races or price wars?
3. Define the AI alignment problem. Given an AI tasked with "maximize paperclip production," enumerate at least 4 concrete misalignment scenarios (what the AI does vs what humans actually want). For each, propose one technical or design approach to mitigate it.
4. Explain the ethical concerns with autonomous weapons under the framework of meaningful human control. Take a specific scenario like an autonomous drone that identifies and engages targets — at what point in the kill chain must a human remain?

---

