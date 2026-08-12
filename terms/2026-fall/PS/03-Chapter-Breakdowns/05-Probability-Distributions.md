# Module 5 — Probability Distributions

**Weight:** ★★★☆☆
**Difficulty:** ★★★☆☆
**Importance:** ★★★★☆

## Learning Objectives

### Explain
- Discrete vs continuous distributions
- When each distribution applies

### Calculate
- Binomial, Poisson, Hypergeometric, Negative Binomial
- Uniform, Exponential, Normal (parameters, probabilities, moments)

### Apply
- Normal approximation to binomial/Poisson
- Z-score standardization and Z-table reading

### Differentiate
- Binomial vs hypergeometric vs Poisson vs negative binomial

## Must Memorize

### Definitions (Word-for-word)

**Binomial:** X ~ B(n, p) — number of successes in n independent trials, fixed p. P(X=x) = C(n,x)pˣ(1−p)ⁿ⁻ˣ.

**Poisson:** X ~ Po(λ) — number of rare events in a fixed interval. P(X=x) = e⁻ˡλˣ/x!.

**Hypergeometric:** Number of successes in n draws without replacement from a finite population with K successes. P(X=x) = C(K,x)C(N−K,n−x)/C(N,n).

**Negative binomial:** Number of trials needed to get r successes, P(X=x) = C(x−1,r−1)pʳ(1−p)ˣ⁻ʳ.

**Exponential:** Continuous time-between-events distribution, f(x) = λe⁻ˡˣ, memoryless.

**Normal:** X ~ N(μ, σ²); Z = (X−μ)/σ ~ N(0,1); symmetric bell curve.

## Must Understand

- Binomial requires fixed n + independent trials + constant p; without-replacement → hypergeometric
- Poisson = binomial limit when n large, p small (n ≥ 20, p ≤ 0.05)
- Negative binomial generalizes geometric (r = 1)
- Exponential is memoryless; Normal is symmetric, μ = median = mode
- Poisson approximates binomial; Normal approximates binomial when np ≥ 5 and n(1−p) ≥ 5

## Must Practice

### Distribution identification
```
(a) emails/hour → Poisson
(b) heads in 100 flips → Binomial
(c) heights of women → Normal
(d) defectives in a batch of 10 → Binomial
(e) draws without replacement from shipment → Hypergeometric
```

### Z-table fluency
```
IQ ~ N(100, 15²): P(IQ>130) → Z = 2 → 0.0228
95th percentile: Z = 1.645 → IQ ≈ 124.7
```

## Common Mistakes

1. **Using binomial when sampling without replacement** — must use hypergeometric.
2. **Poisson λ mis-set** — scale λ to the interval given.
3. **Exponential memoryless misused** — P(X > s+t | X > s) = P(X > t).
4. **Negative binomial confusion** — r-th success vs first success (geometric).
5. **Z-table direction** — P(Z > z) = 1 − P(Z < z); tail care.
6. **Normal approx continuity correction** — skip only if asked to approximate crudely.

## Typical Questions

1. Binomial: batch of 20 chips, 2% defect — P(exactly 1), P(at most 2), P(at least 1).
2. Poisson approximation: n = 500, p = 0.02, compare P(5 defects) binomial vs Poisson.
3. Hypergeometric: 50 items, 8 defective, sample 10 — P(exactly 2 defective) vs binomial.
4. Negative binomial: 5% defect rate — P(6th item is the 3rd defective).
5. Normal: IQ percentiles, conditional probabilities.
6. Exponential: P(X > 2000), conditional, E[X], Var(X), memoryless check.

## Examiner Expectations

| Level | Performance |
|-------|------------|
| Pass | Computes probabilities for each distribution from formula |
| Good | Identifies correct distribution, uses tables correctly |
| Excellent | Handles approximation between distributions, interprets parameters |
| Full marks | All distribution problems solved fast, error-free |

## Formula Sheet

```
Binomial:        P(X=x) = C(n,x) pˣ (1−p)ⁿ⁻ˣ;  E= np, Var = np(1−p)
Poisson:         P(X=x) = e⁻ˡ λˣ / x!;         E= λ, Var = λ
Hypergeometric:  P(X=x) = C(K,x)C(N−K,n−x)/C(N,n);  E = n(K/N)
Negative Binom:  P(X=x) = C(x−1,r−1) pʳ (1−p)ˣ⁻ʳ;   E = r/p
Uniform:         f(x) = 1/(b−a);               E = (a+b)/2
Exponential:     f(x) = λe⁻ˡˣ;                 E = 1/λ, Var = 1/λ²
Normal:          Z = (X−μ)/σ;                  P(Z<z) from table
Poisson→Binomial limit: n ≥ 20, p ≤ 0.05, λ = np
Normal→Binomial approx: np ≥ 5, n(1−p) ≥ 5
```

## Flashcards

Q: Binomial vs hypergeometric?
A: With/without replacement from a finite population

Q: Poisson mean = ?
A: λ (also the variance)

Q: Memoryless property?
A: P(X > s+t | X > s) = P(X > t)

Q: When is normal approx valid for binomial?
A: np ≥ 5 and n(1−p) ≥ 5

Q: E and Var of exponential?
A: 1/λ and 1/λ²

## Retrieval Questions (25+)

1. State the PMF of binomial; give parameter meanings.
2. When is Poisson a good approximation to binomial?
3. Compute hypergeometric probability for a shipment problem.
4. Derive negative binomial from geometric.
5. State and use the exponential memoryless property.
6. Standardize X ~ N(100,15²) to Z.
7. Find the 95th percentile of IQ.
8. Compute P(Z between two values) from the Z-table.
9. Compare Poisson and binomial for a rare-event problem.
10. When must you use hypergeometric instead of binomial?
11. Uniform: E, Var, probability in a subinterval.
12. Exponential: E[X], Var(X), P(X > t).
13-25. (Additional problems in Numerical Book)

**GPA Priority:** 🟥 Must Win (formula mastery = marks)
