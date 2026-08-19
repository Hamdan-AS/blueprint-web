# MASTER FORMULA BOOK
---
## CS-323 — Artificial Intelligence
---
### A* Search

- f(n) = g(n) + h(n)
- g(n) = actual cost from start to n
- h(n) = estimated cost from n to goal
- Optimal if h is admissible (never overestimates)
- Consistent: h(n) ≤ c(n, a, n') + h(n')
---
### Minimax

- Value(state) = Utility(state) if terminal
- MAX value = max over successors of MIN-VALUE
- MIN value = min over successors of MAX-VALUE
---
### Genetic Algorithm

- Selection Probability: p(i) = f(i) / Σf(j)
- Crossover: single-point, multi-point, uniform
- Mutation: bit flip with probability p_m
---
### Perceptron

- Output = activation(Σ w_i × x_i + bias)
- Weight Update: w_new = w_old + η × (target − output) × x
---
### Backpropagation

- Forward: a^(l) = σ(W^(l) × a^(l−1) + b^(l))
- Loss: L = ½(y − a)^² (MSE)
- Chain Rule: ∂L/∂w = ∂L/∂a × ∂a/∂z × ∂z/∂w
- Weight Update: w_new = w_old − η × ∂L/∂w
---
### Fuzzy Logic

- Fuzzy set A = {(x, μ_A(x))} where μ_A(x) ∈ [0,1]
- Union: μ_A∪B(x) = max(μ_A(x), μ_B(x))
- Intersection: μ_A∩B(x) = min(μ_A(x), μ_B(x))
- Complement: μ_Ā(x) = 1 − μ_A(x)
- Centroid defuzzification: COG = Σ x·μ(x) / Σ μ(x)
- Mamdani inference: fuzzify → apply rules (min) → aggregate (max) → defuzzify
