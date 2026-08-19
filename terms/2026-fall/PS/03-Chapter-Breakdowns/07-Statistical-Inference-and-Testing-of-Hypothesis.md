# MODULE 7 — STATISTICAL INFERENCE & TESTING OF HYPOTHESIS

**Weight:** ★★★★★
**Difficulty:** ★★★☆☆
**Importance:** ★★★★★
---
## Learning Objectives
---
### Explain

- Estimation (point & interval)
- Tests of hypothesis
- Type I / Type II errors, power
- One-tail vs two-tail tests
---
### Calculate

- Confidence intervals (mean z & t, proportion)
- Sample size for desired margin of error
- Test statistics (z, t, χ²)
- Chi-square test for independence / goodness of fit
---
### Apply

- The 4-step hypothesis-testing procedure
---
## Must Memorize
---
### Definitions (Word-for-word)

**Point estimate:** A single value used to estimate a population parameter.

**Confidence interval:** An interval that contains the parameter with a stated confidence level, (1−α)100%.

**Null hypothesis H₀:** The statement being tested, usually of "no effect" or "no difference".

**Alternative hypothesis H₁:** The statement we accept if H₀ is rejected.

**Type I error (α):** Rejecting a true H₀.

**Type II error (β):** Failing to reject a false H₀.

**p-value:** The probability of obtaining a test statistic as extreme as observed, assuming H₀ is true.

**Chi-square test:** Σ(O−E)²/E comparing observed with expected frequencies.
---
## Must Understand

- "95% confidence" means 95 of 100 such intervals contain the parameter — NOT a 95% probability the parameter lies in this interval
- One-tailed vs two-tailed: H₁ "greater than" → α in one tail; "different from" → α/2 in each tail
- σ known → z; σ unknown → t
- p < α → reject H₀ (assuming α stated)
- χ² expected frequency = (row total × column total)/grand total
- Type II / power are rarely computed in class but asked as concepts
---
## Must Practice
---
### 4-step procedure (blank page)

```
H₀: μ = 200, H₁: μ < 200 (one-tailed)
x̄ = 195, s = 10, n = 25
t = (195−200)/(10/√25) = −2.5
t_crit(0.05, df=24) ≈ −1.711 → reject H₀; p < 0.05
```
---
### Two-sample t

```
Brand A: x̄₁=1200, s₁=80, n₁=100; Brand B: x̄₂=1150, s₂=90, n₂=100
H₀: μ₁ = μ₂, H₁: μ₁ > μ₂ → compute t, compare with t_crit
```
---
### Chi-square independence

```
Gender × Product (300 obs). Expected = (row×col)/total.
χ² = Σ(O−E)²/E, df = (r−1)(c−1).
```
---
## Common Mistakes

1. **One vs two-tailed critical value** — halve α for two-tailed.
2. **σ known/unknown mix-up** — z-test requires known σ.
3. **Misreading p-value** — always conditional on H₀ being true.
4. **CI interpretation** — the parameter is fixed; the interval varies.
5. **χ² expected counts** — must use row×col/grand total, not averages.
6. **t vs z at small n** — use t, df = n−1.
---
## Typical Questions

1. Coffee-machine underfill test at α = 0.05 and α = 0.01 (one-tailed t).
2. Two-sample t: which brand lasts longer?
3. One-proportion z-test + 95% CI; does the CI agree with the test?
4. Chi-square test for independence on a 2×3 table.
5. Explain what 95% confidence actually means (100 intervals example).
---
## Examiner Expectations

| Level | Performance |
|-------|------------|
| Pass | States H₀/H₁, computes test statistic |
| Good | Chooses correct test, finds critical value, concludes |
| Excellent | p-values, CI agreement, chi-square, Type I/II concepts |
| Full marks | Complete 4-step solutions under time pressure, 15-mark answer |
---
## Formula Sheet

```
z-test (σ known):    z = (x̄ − μ) / (σ/√n)
t-test (σ unknown):  t = (x̄ − μ) / (s/√n), df = n−1
Two-sample t:        t = (x̄₁−x̄₂) / √(s₁²/n₁ + s₂²/n₂)
One-proportion z:    z = (p̂ − p₀) / √(p₀(1−p₀)/n)
CI for μ (σ known):  x̄ ± z_α/2 σ/√n
CI for μ (unknown):  x̄ ± t_α/2 s/√n
CI for proportion:   p̂ ± z_α/2 √(p̂(1−p̂)/n)
Sample size:         n = (z_α/2 σ / E)²
Chi-square:          χ² = Σ (O−E)² / E, df = (r−1)(c−1)
```
---
## Flashcards

Q: When z vs t test?
A: σ known → z; σ unknown → t

Q: 95% CI meaning?
A: 95 of 100 such intervals contain μ (parameter fixed)

Q: Type I error?
A: Rejecting a true H₀ (α)

Q: Type II error?
A: Failing to reject a false H₀ (β)

Q: Expected count in χ² independence?
A: (row total × column total) / grand total

Q: p < α ⇒ ?
A: Reject H₀
---
## Retrieval Questions (30+)

1. Define H₀ and H₁.
2. State Type I and Type II errors; power = 1 − β.
3. Write the 4-step hypothesis procedure.
4. One-tailed vs two-tailed: when is α split?
5. Coffee-machine t-test problem.
6. Two-sample t-test problem.
7. One-proportion z-test problem.
8. Construct 95% CI for a mean with unknown σ.
9. Construct 95% CI for a proportion.
10. Determine sample size for ±1 hour margin.
11. Explain 95% confidence with 100-interval simulation.
12. Chi-square independence problem.
13. Chi-square goodness of fit problem.
14. Does a CI ever contradict a test conclusion?
15. What is a p-value?
16-30. (Additional problems in Numerical Book)

**GPA Priority:** 🟥 Must Win (15-mark question guaranteed)
