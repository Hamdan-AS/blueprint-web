# MODULE 6 — SAMPLING & SAMPLING DISTRIBUTIONS

**Weight:** ★★★☆☆
**Difficulty:** ★★★☆☆
**Importance:** ★★★★☆
---
## Learning Objectives
---
### Explain

- Population, parameter & statistic
- Objects of sampling
- Sampling & non-sampling errors
- Central Limit Theorem
---
### Calculate

- Sampling distribution of the mean
- Standard errors
---
### Apply

- Random sampling with & without replacement
- Sequential sampling
---
### Differentiate

- Simple random, stratified, cluster, systematic sampling
---
## Must Memorize
---
### Definitions (Word-for-word)

**Population:** The complete set of all elements of interest.

**Sample:** A subset of the population selected for study.

**Parameter:** A numerical characteristic of a population (μ, σ²).

**Statistic:** A numerical characteristic of a sample (x̄, s²).

**Standard error:** The standard deviation of a sampling distribution, σ/√n.

**Central Limit Theorem:** For a random sample of size n from any population with mean μ and finite variance σ², the sampling distribution of x̄ approaches N(μ, σ/√n) as n → ∞.

**Sampling error:** The discrepancy between a statistic and the corresponding parameter due to sampling.
---
## Must Understand

- CLT applies to the sampling distribution of the mean, NOT the population
- Standard error shrinks as n grows: SE = σ/√n
- Stratified sampling divides the population into homogeneous strata for representativeness
- Sampling error (chance) vs non-sampling errors (bias, measurement, non-response)
- With vs without replacement: without replacement uses the finite population correction
---
## Must Practice
---
### CLT / Standard Error

```
Population μ = 100, σ = 20
n = 36:  X̄ ~ N(100, 20/√36 = 3.33)
P(95 < X̄ < 105) → Z = ±1.5 → ≈ 0.8664
n = 100: SE = 2, P(95 < X̄ < 105) → Z = ±2.5 → ≈ 0.9876
```
---
### Sampling plan

```
10,000 students, 5 faculties (3000/2500/2000/1500/1000), sample 500.
Simple random: random 500 from all.
Stratified: proportional per faculty.
Cluster: pick whole faculties.
Systematic: every 20th student.
```
---
## Common Mistakes

1. **Applying CLT to the population distribution** — it describes x̄, not X.
2. **SE vs σ** — standard error is σ/√n, always smaller for n > 1.
3. **Ignoring finite population correction** for sampling without replacement.
4. **Confusing parameter (population) with statistic (sample)** — μ vs x̄.
5. **Conflating sampling and non-sampling errors.**
---
## Typical Questions

1. State CLT mathematically and apply to a bolt-diameter example.
2. Compute P(95 < X̄ < 105) for n = 36 and n = 100; comment on n.
3. Compare stratified, cluster, systematic sampling on a university dataset.
4. Define standard error; how does it change with n?
5. Distinguish sampling vs non-sampling errors with examples.
---
## Examiner Expectations

| Level | Performance |
|-------|------------|
| Pass | Defines population/parameter/statistic, states CLT |
| Good | Computes standard error and probabilities for x̄ |
| Excellent | Compares sampling methods, applies finite population correction |
| Full marks | CLT problems and sampling plans solved correctly |
---
## Formula Sheet

```
Standard error of mean:  SE = σ / √n
With FPC (w/o replacement): SE = (σ/√n) × √((N−n)/(N−1))
Sampling distribution:   X̄ ~ N(μ, σ²/n) (n large, CLT)
Z for sample mean:       Z = (x̄ − μ) / (σ/√n)
```
---
## Flashcards

Q: What does CLT say about x̄?
A: X̄ is approx Normal with mean μ and SE σ/√n for large n

Q: Standard error formula?
A: σ / √n

Q: Parameter vs statistic?
A: Population (μ) vs sample (x̄)

Q: Why use stratified sampling?
A: Ensures representation of each subgroup
---
## Retrieval Questions (20+)

1. Define population and sample.
2. Distinguish parameter and statistic with examples.
3. State the objects of sampling.
4. What is a sampling distribution?
5. State the CLT precisely.
6. Compute the standard error for given σ and n.
7. Compute P(sample mean in a range) using the Z-score.
8. How does increasing n affect the standard error and probability?
9. Compare the four sampling methods.
10. When do you apply the finite population correction?
11. Give examples of sampling and non-sampling errors.
12. What is sequential sampling?
13-20. (Additional problems in Numerical Book)

**GPA Priority:** 🟥 Must Win (CLT guaranteed theory + numerical)
