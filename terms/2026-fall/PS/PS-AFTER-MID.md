# PS-AFTER-MID — Weeks 9–15 · 12 Oct – 29 Nov 2026 · FINAL (W15)

<!-- colors: 9:#ffd27a:#b45309 10-12:#e9d5ff:#6b21a8 13-14:#ede9fe:#4c1d95 15:#ff9e9e:#dc2626 -->

> **Scope:** Weeks 9–15 (12 Oct – 29 Nov 2026) — sampling distributions & CLT, hypothesis testing I (z & t), hypothesis testing II (chi-square & Type I/II), confidence intervals, regression & correlation, ending at the Week 15 final.
> **Siblings:** `PS-NAV.md` (master map) · `PS-BEFORE-MID.md` (Weeks 1–8). Week-colored headers below match the NAV schedule.
> **Exam split:** 60% numerical + 40% theory. Hypothesis testing is the single most important topic — one 15-mark question guaranteed.
> **Exam order:** numericals → theory (final). For hypothesis testing write the 4 steps explicitly — correct structure earns 60% of marks.

---

## At a glance (W9–W15)

| W | Dates | Variant | File | Topics | Chapter |
|---|---|---|---|---|---|
| W9 | 12–18 Oct | P1 | AFTER | Sampling distributions & CLT (recovery) | 06 |
| W10 | 19–25 Oct | P0 | AFTER | Hypothesis testing I: z-test & t-test | 07 |
| W11 | 26 Oct–01 Nov | P0 | AFTER | Hypothesis testing II: chi-square & Type I/II | 07 |
| W12 | 02–08 Nov | P0 | AFTER | Confidence intervals | 07 |
| W13 | 09–15 Nov | P1 | AFTER | Regression & correlation | 08 |
| W14 | 16–22 Nov | P0 | AFTER | Final taper — past paper FIRST | 01–08 |
| W15 | 23–29 Nov | FINAL | AFTER | Exam — execute | — |

> Tier key: **P0** = no exam pressure (front-load new material) · **P1** = light revision · **P2** = drill-heavy week.

---

### W9 — Sampling Distributions & CLT · 12–18 Oct · P1 · 5 hrs

**Banner:** Rotation PS (Mon+Tue) · Tier P1 · Time budget 5 hrs · P0 floor: pack pass + def/formula skim + same-problem drill. **Recovery week — ledger MUST clear to 0.**

#### Sources & offsets

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 9 | lines 158–179 |
| Fear-Killer Pack | `Fear-Killer-Packs.md` → Week 5 | lines 44–49 |
| Week manifest | `weeks/PS-W9.md` | full file |
| Chapter breakdown | `03-Chapter-Breakdowns/06-Sampling-and-Sampling-Distributions.md` | embedded below |

#### Definitions (verbatim)

| Term | Definition |
|---|---|
| Population | The complete set of all elements of interest. |
| Sample | A subset of the population selected for study. |
| Parameter | A numerical characteristic of a population (μ, σ²). |
| Statistic | A numerical characteristic of a sample (x̄, s²). |
| Standard error | The standard deviation of a sampling distribution, σ/√n. |
| Central Limit Theorem | For a random sample of size n from any population with mean μ and finite variance σ², the sampling distribution of x̄ approaches N(μ, σ/√n) as n → ∞. |
| Sampling error | The discrepancy between a statistic and the corresponding parameter due to sampling. |

#### Formulas (verbatim)

| Formula | Statement |
|---|---|
| Standard error of mean | SE = σ / √n |
| With FPC (w/o replacement) | SE = (σ/√n) × √((N−n)/(N−1)) |
| Sampling distribution | X̄ ~ N(μ, σ²/n) (n large, CLT) |
| Z for sample mean | Z = (x̄ − μ) / (σ/√n) |

#### Diagrams · Numericals

| Type | Items |
|---|---|
| Diagrams | `Diagram-Book.md` **#10** Central Limit Theorem illustration |
| Numericals | `Numerical-Book.md` **#57** standard error = σ/√n · **#58** CLT probability of sample mean in range |

#### Books · Chapters · Media

| Resource | Where |
|---|---|
| Devore | Ch 5 (sampling, CLT) |
| StatQuest | CLT |

#### Fear-Killer Pack Week 5 (verbatim)

**Resources:** StatQuest (CLT) • Brandon Foltz (Sampling) • Devore Ch.6-7

1. A population has mean μ = 100 and standard deviation σ = 20. Draw samples of size n = 36. State the sampling distribution of the sample mean (shape, mean, standard error). Calculate P(95 < X̄ < 105). Now for n = 100, recalculate the standard error and probability. How does increasing n affect the sampling distribution?
2. Compare stratified sampling, cluster sampling, and systematic sampling. A university has 10,000 students across 5 faculties: Engineering (3000), Science (2500), Arts (2000), Business (1500), Law (1000). You need a sample of 500 students. Show your sampling plan for each method. Which method gives the most representative sample and why?
3. State the Central Limit Theorem mathematically. A factory produces bolts with mean diameter 10mm and variance 4mm². For a sample of 40 bolts, what is P(sample mean > 10.5mm)? What if the population is heavily skewed — does CLT still apply and at what sample size? Show the derivation and the Z-score.

#### Narrative — Week 9 (verbatim)

**Topics:** Population vs sample; Parameter vs statistic; Sampling distribution of the mean; Standard error; Central Limit Theorem; Sampling methods (simple random, stratified, cluster, systematic)

**Recovery note:** If midterm scored below 85%, take 2 days at reduced load (20 hrs/week total). Recalibrate — a 78% midterm with 95%+ finals still yields B+/A-.

**Resources:** Devore Ch.5; StatQuest — CLT

**Practice:**
- CLT: for any population with mean μ and variance σ², the sampling distribution of x̄ approaches N(μ, σ/√n) as n → ∞ — retrieve from memory
- **Trap:** CLT applies to the sampling distribution of the mean, NOT to the population distribution
- Standard error = σ/√n — derive from first principles
- **Interleaved retrieval (20 min):** Bayes theorem — 3 problems from blank page (medical testing, spam detection). Then compute mean and variance from raw data. All closed book.

**Retrieval protocol:** Every practice item starts from a blank page. No peeking at notes.

**Deliverable:** 5 CLT problems (probability of sample mean in a range)

**Time budget:** 5 hrs

#### Chapter 6 — Sampling & Sampling Distributions (verbatim)

##### Weight: ★★★☆☆
##### Difficulty: ★★★☆☆
##### Importance: ★★★★☆

##### Learning Objectives

###### Explain
- Population, parameter & statistic
- Objects of sampling
- Sampling & non-sampling errors
- Central Limit Theorem

###### Calculate
- Sampling distribution of the mean
- Standard errors

###### Apply
- Random sampling with & without replacement
- Sequential sampling

###### Differentiate
- Simple random, stratified, cluster, systematic sampling

##### Must Memorize

**Population:** The complete set of all elements of interest.

**Sample:** A subset of the population selected for study.

**Parameter:** A numerical characteristic of a population (μ, σ²).

**Statistic:** A numerical characteristic of a sample (x̄, s²).

**Standard error:** The standard deviation of a sampling distribution, σ/√n.

**Central Limit Theorem:** For a random sample of size n from any population with mean μ and finite variance σ², the sampling distribution of x̄ approaches N(μ, σ/√n) as n → ∞.

**Sampling error:** The discrepancy between a statistic and the corresponding parameter due to sampling.

##### Must Understand

- CLT applies to the sampling distribution of the mean, NOT the population
- Standard error shrinks as n grows: SE = σ/√n
- Stratified sampling divides the population into homogeneous strata for representativeness
- Sampling error (chance) vs non-sampling errors (bias, measurement, non-response)
- With vs without replacement: without replacement uses the finite population correction

##### Must Practice

```
Population μ = 100, σ = 20
n = 36:  X̄ ~ N(100, 20/√36 = 3.33)
P(95 < X̄ < 105) → Z = ±1.5 → ≈ 0.8664
n = 100: SE = 2, P(95 < X̄ < 105) → Z = ±2.5 → ≈ 0.9876
```

##### Common Mistakes

1. **Applying CLT to the population distribution** — it describes x̄, not X.
2. **SE vs σ** — standard error is σ/√n, always smaller for n > 1.
3. **Ignoring finite population correction** for sampling without replacement.
4. **Confusing parameter (population) with statistic (sample)** — μ vs x̄.
5. **Conflating sampling and non-sampling errors.**

##### Typical Questions

1. State CLT mathematically and apply to a bolt-diameter example.
2. Compute P(95 < X̄ < 105) for n = 36 and n = 100; comment on n.
3. Compare stratified, cluster, systematic sampling on a university dataset.
4. Define standard error; how does it change with n?
5. Distinguish sampling vs non-sampling errors with examples.

##### Examiner Expectations

| Level | Performance |
|-------|------------|
| Pass | Defines population/parameter/statistic, states CLT |
| Good | Computes standard error and probabilities for x̄ |
| Excellent | Compares sampling methods, applies finite population correction |
| Full marks | CLT problems and sampling plans solved correctly |

##### Formula Sheet

```
Standard error of mean:  SE = σ / √n
With FPC (w/o replacement): SE = (σ/√n) × √((N−n)/(N−1))
Sampling distribution:   X̄ ~ N(μ, σ²/n) (n large, CLT)
Z for sample mean:       Z = (x̄ − μ) / (σ/√n)
```

##### GPA Priority: 🟥 Must Win (CLT guaranteed theory + numerical)

#### P0 floor · Drill target · Deliverable · Trap

- **P0 floor:** fear-killer pack pass (Q1 SE + probability + Q3 CLT) · def/formula skim (SE + CLT) · same-problem drill #57, #58
- **Same-problem drill target:** SE < 30 s; P(sample mean in range) < 2 min
- **Deliverable:** 5 CLT problems (probability of sample mean in a range)
- **Trap:** CLT applies to the sampling distribution of the mean, NOT the population. Recovery mandate: ledger MUST clear to 0.

---

### W10 — Hypothesis Testing I: z-test & t-test · 19–25 Oct · P0 · 6 hrs

**Banner:** Rotation PS (Mon+Tue) · Tier P0 · Time budget 6 hrs · P0 floor: pack pass + def/formula skim + same-problem drill.

#### Sources & offsets

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 10 | lines 180–205 |
| Fear-Killer Pack | `Fear-Killer-Packs.md` → Week 6 | lines 51–57 (Q1–Q3) |
| Week manifest | `weeks/PS-W10.md` | full file |
| Chapter breakdown | `03-Chapter-Breakdowns/07-Statistical-Inference-and-Testing-of-Hypothesis.md` | embedded below |

#### Definitions (verbatim)

| Term | Definition |
|---|---|
| Point estimate | A single value used to estimate a population parameter. |
| Confidence interval | An interval that contains the parameter with a stated confidence level, (1−α)100%. |
| Null hypothesis H₀ | The statement being tested, usually of "no effect" or "no difference". |
| Alternative hypothesis H₁ | The statement we accept if H₀ is rejected. |
| Type I error (α) | Rejecting a true H₀. |
| Type II error (β) | Failing to reject a false H₀. |
| p-value | The probability of obtaining a test statistic as extreme as observed, assuming H₀ is true. |

#### Formulas (verbatim)

| Formula | Statement |
|---|---|
| z-test (σ known) | z = (x̄ − μ) / (σ/√n) |
| t-test (σ unknown) | t = (x̄ − μ) / (s/√n), df = n−1 |
| Two-sample t | t = (x̄₁−x̄₂) / √(s₁²/n₁ + s₂²/n₂) |
| One-proportion z | z = (p̂ − p₀) / √(p₀(1−p₀)/n) |
| Decision | reject H₀ if \|test statistic\| > critical value, or if p-value < α |

#### Diagrams · Numericals

| Type | Items |
|---|---|
| Diagrams | `Diagram-Book.md` **#4** one-tailed vs two-tailed rejection regions · **#5** Type I and Type II error diagram |
| Numericals | `Numerical-Book.md` **#59** z-test · **#60** t-test · **#61** critical value from table · **#62** p-value interpretation |

#### Books · Chapters · Media

| Resource | Where |
|---|---|
| Devore | Ch 8 (hypothesis testing) |
| StatQuest | Hypothesis Testing |

#### Fear-Killer Pack Week 6 (verbatim — Q1–Q3)

**Resources:** StatQuest (Hypothesis Testing) • Devore Ch.8-9

1. A coffee machine dispenses 200ml per cup on average. A sample of 25 cups gives mean = 195ml, s = 10ml. Test at α = 0.05 whether the machine is underfilling. State H₀ and H₁, choose one-tailed or two-tailed, calculate the t-statistic, find the critical value, and state your conclusion. Then calculate the p-value. Would the conclusion change at α = 0.01?
2. 100 light bulbs from Brand A have mean life 1200 hours, s = 80 hours. 100 bulbs from Brand B have mean life 1150 hours, s = 90 hours. Test at α = 0.05 whether Brand A lasts longer than Brand B. Use a two-sample t-test. State H₀, H₁, calculate the test statistic, degrees of freedom, and conclude.
3. A survey of 200 people shows 120 prefer Product A over Product B. Test at α = 0.05 whether more than 50% prefer Product A. Use a one-proportion z-test. Calculate the test statistic and p-value. Also construct a 95% confidence interval for the true proportion. Does the CI support the test conclusion?

#### Narrative — Week 10 (verbatim)

**Topics:** Null hypothesis (H₀); Alternative hypothesis (H₁); Test statistic; Critical region; Type I error (α); Type II error (β); p-value; One-tailed vs two-tailed tests

**Resources:** Devore Ch.8; StatQuest — Hypothesis Testing

**Practice:**
- **The 4-step procedure (retrieve from memory before looking at notes):**
   1. State H₀ and H₁
   2. Choose test statistic (z = (x̄ − μ) / (σ/√n) for known σ; t = same formula but with s for unknown σ)
   3. Find critical value (z_α or t_α from table)
   4. Decision: reject H₀ if |test statistic| > critical value, or if p-value < α
- **Decision flowchart (retrieve from blank page):**
   - σ known → z-test
   - σ unknown → t-test
   - One sample vs two sample → different formulas
- **Interleaved retrieval (20 min):** Distribution identification — given 5 scenarios, name the distribution and parameters. Then 3 Bayes problems. All closed book.

**Killer trap:** One-tailed vs two-tailed. If H₁ says "greater than" it is one-tailed (α in one tail). If H₁ says "different from" it is two-tailed (α/2 in each tail). This is the #1 exam mistake.

**Deliverable:** 10 hypothesis testing problems (z-test and t-test, one-tailed and two-tailed) — all from blank page

**Time budget:** 6 hrs

#### Chapter 7 — Statistical Inference & Testing of Hypothesis (verbatim)

##### Weight: ★★★★★
##### Difficulty: ★★★☆☆
##### Importance: ★★★★★

##### Learning Objectives

###### Explain
- Estimation (point & interval)
- Tests of hypothesis
- Type I / Type II errors, power
- One-tail vs two-tail tests

###### Calculate
- Confidence intervals (mean z & t, proportion)
- Sample size for desired margin of error
- Test statistics (z, t, χ²)
- Chi-square test for independence / goodness of fit

###### Apply
- The 4-step hypothesis-testing procedure

##### Must Memorize

**Point estimate:** A single value used to estimate a population parameter.

**Confidence interval:** An interval that contains the parameter with a stated confidence level, (1−α)100%.

**Null hypothesis H₀:** The statement being tested, usually of "no effect" or "no difference".

**Alternative hypothesis H₁:** The statement we accept if H₀ is rejected.

**Type I error (α):** Rejecting a true H₀.

**Type II error (β):** Failing to reject a false H₀.

**p-value:** The probability of obtaining a test statistic as extreme as observed, assuming H₀ is true.

**Chi-square test:** Σ(O−E)²/E comparing observed with expected frequencies.

##### Must Understand

- "95% confidence" means 95 of 100 such intervals contain the parameter — NOT a 95% probability the parameter lies in this interval
- One-tailed vs two-tailed: H₁ "greater than" → α in one tail; "different from" → α/2 in each tail
- σ known → z; σ unknown → t
- p < α → reject H₀ (assuming α stated)
- χ² expected frequency = (row total × column total)/grand total
- Type II / power are rarely computed in class but asked as concepts

##### Must Practice

```
H₀: μ = 200, H₁: μ < 200 (one-tailed)
x̄ = 195, s = 10, n = 25
t = (195−200)/(10/√25) = −2.5
t_crit(0.05, df=24) ≈ −1.711 → reject H₀; p < 0.05
```

```
Brand A: x̄₁=1200, s₁=80, n₁=100; Brand B: x̄₂=1150, s₂=90, n₂=100
H₀: μ₁ = μ₂, H₁: μ₁ > μ₂ → compute t, compare with t_crit
```

##### Common Mistakes

1. **One vs two-tailed critical value** — halve α for two-tailed.
2. **σ known/unknown mix-up** — z-test requires known σ.
3. **Misreading p-value** — always conditional on H₀ being true.
4. **CI interpretation** — the parameter is fixed; the interval varies.
5. **χ² expected counts** — must use row×col/grand total, not averages.
6. **t vs z at small n** — use t, df = n−1.

##### Typical Questions

1. Coffee-machine underfill test at α = 0.05 and α = 0.01 (one-tailed t).
2. Two-sample t: which brand lasts longer?
3. One-proportion z-test + 95% CI; does the CI agree with the test?
4. Chi-square test for independence on a 2×3 table.
5. Explain what 95% confidence actually means (100 intervals example).

##### Examiner Expectations

| Level | Performance |
|-------|------------|
| Pass | States H₀/H₁, computes test statistic |
| Good | Chooses correct test, finds critical value, concludes |
| Excellent | p-values, CI agreement, chi-square, Type I/II concepts |
| Full marks | Complete 4-step solutions under time pressure, 15-mark answer |

##### Formula Sheet

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

##### GPA Priority: 🟥 Must Win (15-mark question guaranteed)

#### P0 floor · Drill target · Deliverable · Trap

- **P0 floor:** fear-killer pack pass (Q1 coffee-machine t-test + Q3 one-proportion) · def/formula skim (H₀/H₁/Type I/II + z/t formulas) · same-problem drill #59, #60
- **Same-problem drill target:** 4-step procedure < 20 min/problem; choose z vs t instantly
- **Deliverable:** 10 hypothesis testing problems (z-test and t-test, one-tailed and two-tailed) — all from blank page
- **Trap:** one-tailed vs two-tailed — α in one tail vs α/2 in each tail (#1 exam mistake)

---

### W11 — Hypothesis Testing II: Chi-Square & Type I/II · 26 Oct–01 Nov · P0 · 5 hrs

**Banner:** Rotation PS (Mon+Tue) · Tier P0 · Time budget 5 hrs · P0 floor: pack pass + def/formula skim + same-problem drill.

#### Sources & offsets

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 11 | lines 206–225 |
| Fear-Killer Pack | `Fear-Killer-Packs.md` → Week 6 | lines 51–57 (Q4) |
| Week manifest | `weeks/PS-W11.md` | full file |
| Chapter breakdown | `03-Chapter-Breakdowns/07-…` | reference (embedded W10) |

#### Definitions (verbatim)

| Term | Definition |
|---|---|
| Type I error (α) | Rejecting a true H₀. |
| Type II error (β) | Failing to reject a false H₀. |
| Power of a test | Power = 1 − β. |
| p-value | The probability of obtaining a test statistic as extreme as observed, assuming H₀ is true. |
| Chi-square test | Σ(O−E)²/E comparing observed with expected frequencies. |

#### Formulas (verbatim)

| Formula | Statement |
|---|---|
| Chi-square | χ² = Σ (O − E)² / E |
| Expected frequency | (row total × column total) / grand total |
| Degrees of freedom | df = (r − 1)(c − 1) |
| Power | Power = 1 − β |

#### Diagrams · Numericals

| Type | Items |
|---|---|
| Diagrams | `Diagram-Book.md` **#5** Type I and Type II error diagram |
| Numericals | `Numerical-Book.md` **#63** chi-square O−E computation |

#### Books · Chapters · Media

| Resource | Where |
|---|---|
| Devore | Ch 7–8 (chi-square, Type I/II) |
| StatQuest | Chi-square test |

#### Fear-Killer Pack Week 6 (verbatim — Q4)

**Resources:** StatQuest (Hypothesis Testing) • Devore Ch.8-9

4. A chi-square test for independence: 300 people classified by gender (M/F) and product preference (A/B/C). Observed counts: M/A=40, M/B=35, M/C=25, F/A=60, F/B=65, F/C=75. Calculate expected frequencies assuming independence, compute χ², find the critical value at α = 0.05 with appropriate degrees of freedom. Are gender and preference independent?

#### Narrative — Week 11 (verbatim)

**Topics:** Chi-square test for goodness of fit; Chi-square test for independence; Type I error (rejecting true H₀); Type II error (failing to reject false H₀); Power of a test

**Resources:** Devore Ch.7-8; StatQuest — Chi-square test

**Practice:**
- χ² = Σ(O − E)² / E — retrieve formula from memory
- Goodness of fit: compare observed frequencies to expected frequencies — closed book
- Test for independence: contingency table, expected frequency = (row total × column total) / grand total — from blank page
- Type I vs Type II: α = P(Type I error), β = P(Type II error). Power = 1 − β — retrieve from memory
- **Trap:** p-value interpretation — "p < 0.05 means reject H₀" must include "assuming α = 0.05"
- **Interleaved retrieval (20 min):** Hypothesis testing 4-step procedure — 2 complete problems (z-test and t-test) from blank page. All closed book.

**Deliverable:** 5 chi-square problems + 5 Type I/II error identification problems

**Time budget:** 5 hrs

#### P0 floor · Drill target · Deliverable · Trap

- **P0 floor:** fear-killer pack pass (Q4 chi-square independence) · def/formula skim (Type I/II, χ²) · same-problem drill #63
- **Same-problem drill target:** χ² expected counts < 1 min; df = (r−1)(c−1) instant
- **Deliverable:** 5 chi-square problems + 5 Type I/II error identification problems
- **Trap:** χ² expected = (row×col)/grand total, not averages; p < 0.05 means reject H₀ **assuming α = 0.05**

---

### W12 — Confidence Intervals · 02–08 Nov · P0 · 5 hrs

**Banner:** Rotation PS (Mon+Tue) · Tier P0 · Time budget 5 hrs · P0 floor: pack pass + def/formula skim + same-problem drill. **Start sleep banking: 9 hrs (bedtime 22:00) for 7 nights.**

#### Sources & offsets

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 12 | lines 226–246 |
| Fear-Killer Pack | `Fear-Killer-Packs.md` → Week 7 | lines 59–64 |
| Week manifest | `weeks/PS-W12.md` | full file |
| Chapter breakdown | `03-Chapter-Breakdowns/07-…` (CI part) | reference (embedded W10) |

#### Definitions (verbatim)

| Term | Definition |
|---|---|
| Point estimate | A single value used to estimate a population parameter. |
| Confidence interval | An interval that contains the parameter with a stated confidence level, (1−α)100%. |
| Margin of error | Half the width of the confidence interval, z_α/2 × σ/√n (mean) or z_α/2 × √(p̂(1−p̂)/n) (proportion). |

#### Formulas (verbatim)

| Formula | Statement |
|---|---|
| CI for μ (σ known) | x̄ ± z_α/2 × σ/√n |
| CI for μ (σ unknown) | x̄ ± t_α/2 × s/√n |
| CI for proportion | p̂ ± z_α/2 × √(p̂(1−p̂)/n) |
| Sample Size | n = (z_α/2 × σ / E)² |

#### Diagrams · Numericals

| Type | Items |
|---|---|
| Diagrams | `Diagram-Book.md` **#7** confidence interval visualization |
| Numericals | `Numerical-Book.md` **#64** CI for mean (σ known, σ unknown) · **#65** CI for proportion · **#66** sample size for desired margin of error |

#### Books · Chapters · Media

| Resource | Where |
|---|---|
| Devore | Ch 7 (confidence intervals) |
| StatQuest | Confidence Intervals |

#### Fear-Killer Pack Week 7 (verbatim)

**Resources:** StatQuest (Confidence Intervals) • Devore Ch.7-8

1. A sample of 16 batteries has mean life 50 hours, s = 4 hours. Construct 95% CI for the population mean (σ unknown, use t-distribution). Now σ is known to be 4, recalculate using z. Compare the widths of the two intervals. What sample size is needed to reduce the CI width to ±1 hour? Calculate for both known and unknown σ.
2. A survey of 500 voters finds 280 support Candidate A. Construct 95% CI for the true proportion. Calculate the margin of error. How many voters need to be surveyed to reduce the margin of error to ±2%? Use p̂ = 0.5 (conservative) and p̂ = 0.56 (from pilot) — what sample sizes result?
3. Explain what "95% confidence" actually means. Given 100 different 95% CIs each from independent samples, how many would you expect to contain the true population mean? Show a concrete simulation example. Differentiate this from saying "there's a 95% probability the parameter lies in this interval" — why is that statement incorrect?

#### Narrative — Week 12 (verbatim)

**Topics:** Point estimation vs interval estimation; Confidence interval for mean (z and t); Confidence interval for proportion; Sample size determination; Margin of error

**Resources:** Devore Ch.7; StatQuest — Confidence Intervals

**Sleep banking:** Begin sleeping 9 hrs (bedtime 22:00) for 7 nights leading to finals. Formula recall degrades 15-20% per lost sleep hour — protect your hypothesis testing and CI formulas.

**Practice:**
- CI for μ (σ known): x̄ ± z_α/2 × σ/√n — retrieve formula from memory
- CI for μ (σ unknown): x̄ ± t_α/2 × s/√n — retrieve formula from memory
- CI for proportion: p̂ ± z_α/2 × √(p̂(1−p̂)/n) — retrieve from memory
- Sample size for desired margin of error: n = (z_α/2 × σ / E)² — retrieve from memory
- **Interleaved retrieval (20 min):** 4-step hypothesis testing — 2 complete problems (chi-square test for independence, z-test). Then 3 Bayes problems. All closed book, from blank page.

**Deliverable:** 10 confidence interval problems (mean, proportion, sample size)

**Time budget:** 5 hrs

#### P0 floor · Drill target · Deliverable · Trap

- **P0 floor:** fear-killer pack pass (Q1 battery CI + Q2 voter CI) · def/formula skim (3 CI formulas + sample size) · same-problem drill #64, #65, #66
- **Same-problem drill target:** CI < 2 min each; sample size n = (z·σ/E)² instant
- **Deliverable:** 10 confidence interval problems (mean, proportion, sample size)
- **Trap:** "95% confidence" = 95 of 100 intervals contain the parameter — NOT a 95% probability the parameter lies in this interval; z vs t by known/unknown σ

---

### W13 — Regression & Correlation · 09–15 Nov · P1 · 5 hrs

**Banner:** Rotation PS (Mon+Tue) · Tier P1 · Time budget 5 hrs · P0 floor: pack pass + def/formula skim + same-problem drill.

#### Sources & offsets

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 13 | lines 247–267 |
| Fear-Killer Pack | `Fear-Killer-Packs.md` → Week 8 | lines 66–73 |
| Week manifest | `weeks/PS-W13.md` | full file |
| Chapter breakdown | `03-Chapter-Breakdowns/08-Simple-Regression-and-Correlation.md` | embedded below |

#### Definitions (verbatim)

| Term | Definition |
|---|---|
| Correlation coefficient (r) | A measure of the strength and direction of the linear relationship between two variables, r ∈ [−1, 1]. |
| Regression line | The line of best fit minimizing the sum of squared vertical deviations: Y = a + bX. |
| Least squares | Choosing a and b to minimize Σ(y − a − bx)². |
| Coefficient of determination (R²) | The proportion of variance in Y explained by X; R² = r². |
| Spearman's rank correlation (ρ) | Correlation computed on ranks, ρ = 1 − 6Σd²/(n(n²−1)). |
| Probable Error (P.E) | P.E = 0.6745 × (1 − r²)/√n; the interval r ± P.E assesses significance of correlation. |

#### Formulas (verbatim)

| Formula | Statement |
|---|---|
| Correlation | r = Σ(x−x̄)(y−ȳ) / √(Σ(x−x̄)² Σ(y−ȳ)²) |
| Slope | b = Σ(x−x̄)(y−ȳ) / Σ(x−x̄)² |
| Intercept | a = ȳ − b x̄ |
| R² | r² |
| Spearman | ρ = 1 − 6Σd² / (n(n²−1)) |
| Probable Error | P.E = 0.6745 (1 − r²) / √n |
| Significance | correlation significant if r ± P.E excludes 0 |

#### Diagrams · Numericals

| Type | Items |
|---|---|
| Diagrams | `Diagram-Book.md` **#6** scatter plot with regression line |
| Numericals | `Numerical-Book.md` **#67** b (slope) · **#68** a (intercept) · **#69** r (correlation) · **#70** R² interpretation |

#### Books · Chapters · Media

| Resource | Where |
|---|---|
| Devore | Ch 12 (regression) |
| StatQuest | Linear Regression |
| Brandon Foltz | Statistics 101 — Regression playlist |

#### Fear-Killer Pack Week 8 (verbatim)

**Resources:** StatQuest (Regression) • Brandon Foltz (Regression) • Devore Ch.10-11

1. Given data: X (hours studied) = [2,4,6,8,10,12], Y (exam score) = [55,60,70,75,85,95]. Calculate the correlation coefficient r, the regression line Y = a + bX, and interpret b and a. Predict Y when X = 7 and X = 20. Which prediction is more reliable and why?
2. For the same data, calculate R² and interpret it. Then compute the residual for each point. Draw the scatter plot with the regression line and show the residuals. Explain the least squares principle — why minimize vertical distances and not perpendicular distances? Show the derivation of b = Σ((x-x̄)(y-ȳ)) / Σ((x-x̄)²).
3. Rank correlation: Two judges rank 8 contestants as follows: Judge A: [3,1,2,5,4,7,6,8], Judge B: [2,3,1,4,6,5,8,7]. Calculate Spearman's rank correlation coefficient. Interpret the value. What does ρ = +1, -1, and 0 mean in terms of agreement between judges?
4. Differentiate Y on X vs X on Y regression. Given the same data, compute both regression lines and show they are not inverses of each other. Which line should you use when you want to predict Y from X? When would you ever need the X on Y line?
5. Using r ≈ 0.97 from Q1 (n = 6) and the Spearman ρ from Q3, compute the Probable Error P.E = 0.6745 × (1 − r²)/√n for each. State the significance limits r ± P.E and decide whether each correlation is significant (interval free of zero) or not. When n is small, why does the P.E interval widen, and what does that mean for drawing conclusions about correlation?

#### Narrative — Week 13 (verbatim)

**Topics:** Scatter plot; Correlation coefficient (r); Coefficient of determination (R²); Regression line (least squares); Regression lines: Y on X vs X on Y (they are different)

**Resources:** Devore Ch.12; StatQuest — Linear Regression

**Practice:**
- Correlation: r ranges from −1 to +1. r = 0 = no linear correlation — retrieve from memory
- R² = proportion of variance explained by the model — retrieve from memory
- Regression line: Y = a + bX — derive formulas from blank page
  - b = Σ((x−x̄)(y−ȳ)) / Σ((x−x̄)²)
  - a = ȳ − bx̄
- **Trap:** Regression of Y on X minimizes vertical residuals. Regression of X on Y minimizes horizontal residuals. They give different lines. This is a common exam surprise.
- **Interleaved retrieval (20 min):** Timed formula speed drill — write all 5 hypothesis testing formulas, all 3 CI formulas, Bayes theorem, regression formulas from memory in 10 min. Then solve 1 complete hypothesis testing problem. All closed book.

**Deliverable:** 5 regression problems (compute line, interpret coefficients, predict)

**Time budget:** 5 hrs

#### Chapter 8 — Simple Regression & Correlation (verbatim)

##### Weight: ★★★★☆
##### Difficulty: ★★★☆☆
##### Importance: ★★★★★

##### Learning Objectives

###### Explain
- Scatter diagrams
- Least-squares principle

###### Calculate
- Correlation coefficient (Pearson r)
- Regression lines (Y on X, X on Y)
- Rank correlation (Spearman ρ)
- Probable Error (P.E)
- Coefficient of determination R²

###### Interpret
- Slope, intercept, residuals, R²
- Significance of correlation via P.E

###### Differentiate
- Y on X vs X on Y regression lines
- Correlation vs causation

##### Must Memorize

**Correlation coefficient (r):** A measure of the strength and direction of the linear relationship between two variables, r ∈ [−1, 1].

**Regression line:** The line of best fit minimizing the sum of squared vertical deviations: Y = a + bX.

**Least squares:** Choosing a and b to minimize Σ(y − a − bx)².

**Coefficient of determination (R²):** The proportion of variance in Y explained by X; R² = r².

**Spearman's rank correlation (ρ):** Correlation computed on ranks, ρ = 1 − 6Σd²/(n(n²−1)).

**Probable Error (P.E):** P.E = 0.6745 × (1 − r²)/√n; the interval r ± P.E assesses significance of correlation.

##### Must Understand

- b = Σ((x−x̄)(y−ȳ)) / Σ((x−x̄)²); a = ȳ − bx̄
- Regression of Y on X minimizes vertical residuals; X on Y minimizes horizontal — they are different lines
- r near ±1 = strong linear relation; r = 0 = none; r says nothing about non-linear or causation
- R² = proportion of variance explained
- Spearman uses ranks → robust to outliers, handles ordinal data
- Correlation is significant if the interval r ± P.E does not contain zero

##### Must Practice

```
X (hours): 2,4,6,8,10,12 ;  Y (score): 55,60,70,75,85,95
b = Σ(x−x̄)(y−ȳ)/Σ(x−x̄)² = 4.21, a = ȳ − bx̄ = 42.5
Y = 42.5 + 4.21X; predict X=7 → 71.97, X=20 → 126.7 (extrapolation unreliable)
```

##### Common Mistakes

1. **Y on X vs X on Y** — they are not inverses; use Y on X to predict Y from X.
2. **Extrapolation** — predictions far outside data range are unreliable.
3. **r ≠ causation** — correlation does not imply cause.
4. **R² vs r** — R² = r² is proportion of variance explained.
5. **P.E formula** — 0.6745 × (1−r²)/√n, not (1−r)/√n.
6. **Spearman with tied ranks** — use average ranks.

##### Typical Questions

1. Compute r, regression line Y = a + bX, interpret a and b, predict Y at X = 7 and X = 20.
2. Calculate R² and residuals; explain least squares (why vertical?).
3. Spearman's rank correlation for two judges' rankings.
4. Compute P.E; assess significance of r. Why does the interval widen at small n?
5. Differentiate Y on X vs X on Y regression with the same data.

##### Examiner Expectations

| Level | Performance |
|-------|------------|
| Pass | Computes r and regression coefficients |
| Good | Predicts, interprets slope and R² |
| Excellent | Rank correlation, P.E significance, line-direction nuance |
| Full marks | Full regression + correlation solutions fast, error-free |

##### Formula Sheet

```
Correlation:       r = Σ(x−x̄)(y−ȳ) / √(Σ(x−x̄)² Σ(y−ȳ)²)
Slope:             b = Σ(x−x̄)(y−ȳ) / Σ(x−x̄)²
Intercept:         a = ȳ − b x̄
R²:                r²
Spearman:          ρ = 1 − 6Σd² / (n(n²−1))
Probable Error:    P.E = 0.6745 (1 − r²) / √n
Significance:      correlation significant if r ± P.E excludes 0
```

##### GPA Priority: 🟥 Must Win (numerical, finals regular)

#### P0 floor · Drill target · Deliverable · Trap

- **P0 floor:** fear-killer pack pass (Q1 r + line + prediction + Q2 R² residuals) · def/formula skim (r, R², a/b) · same-problem drill #67, #68, #69, #70
- **Same-problem drill target:** regression line a, b from blank page < 10 min; r computed and interpreted
- **Deliverable:** 5 regression problems (compute line, interpret coefficients, predict)
- **Trap:** Y on X vs X on Y are different lines — Y on X minimizes vertical residuals; extrapolation beyond the data range is unreliable

---

### W14 — Final Exam Preparation (Taper) · 16–22 Nov · P0 · 8 hrs

**Banner:** Rotation PS (Mon+Tue) · Tier P0 · Time budget 8 hrs · P0 floor: pack pass + def/formula skim + same-problem drill. **START with the past paper, NOT with review.**

#### Sources & offsets

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 14 | lines 268–295 |
| Fear-Killer Pack | `Fear-Killer-Packs.md` → all packs review | lines 11–73 |
| Week manifest | `weeks/PS-W14.md` | full file |
| Chapter breakdowns | all 8 files | reference (embedded W1, W2, W3, W5, W6, W9, W10, W13) |

#### Definitions (verbatim) — full W1–W13 sweep

| Term | Definition |
|---|---|
| Statistics | The science of collecting, organizing, presenting, analyzing and interpreting data to make decisions. |
| Mean | The sum of all observations divided by their number. |
| Median | The middle value when data is arranged in order; Q2. |
| Standard deviation | The positive square root of the variance — the average deviation of observations from the mean. |
| Conditional probability | P(A\|B) = P(A ∩ B) / P(B), the probability of A given that B has occurred. |
| Bayes' rule | P(Aᵢ\|B) = P(B\|Aᵢ)P(Aᵢ) / Σⱼ P(B\|Aⱼ)P(Aⱼ). |
| Expected value | E[X] = Σ xᵢP(xᵢ) (discrete) or ∫ x f(x)dx (continuous). |
| Binomial | X ~ B(n, p) — number of successes in n independent trials, fixed p. P(X=x) = C(n,x)pˣ(1−p)ⁿ⁻ˣ. |
| Normal | X ~ N(μ, σ²); Z = (X−μ)/σ ~ N(0,1); symmetric bell curve. |
| Standard error | The standard deviation of a sampling distribution, σ/√n. |
| Central Limit Theorem | For a random sample of size n from any population with mean μ and finite variance σ², the sampling distribution of x̄ approaches N(μ, σ/√n) as n → ∞. |
| Null hypothesis H₀ | The statement being tested, usually of "no effect" or "no difference". |
| Type I error (α) | Rejecting a true H₀. |
| Type II error (β) | Failing to reject a false H₀. |
| p-value | The probability of obtaining a test statistic as extreme as observed, assuming H₀ is true. |
| Confidence interval | An interval that contains the parameter with a stated confidence level, (1−α)100%. |
| Correlation coefficient (r) | A measure of the strength and direction of the linear relationship between two variables, r ∈ [−1, 1]. |
| R² | The proportion of variance in Y explained by X; R² = r². |

#### Formulas (verbatim) — full sweep

| Formula | Statement |
|---|---|
| Sturges | k = 1 + 3.322 log₁₀(n) |
| Variance (pop) | σ² = Σ(x−μ)² / N |
| Variance (sample) | s² = Σ(x−x̄)² / (n−1) |
| Bayes | P(Aᵢ\|B) = P(B\|Aᵢ)P(Aᵢ) / Σⱼ P(B\|Aⱼ)P(Aⱼ) |
| Var(X) | E[X²] − (E[X])² |
| Binomial | P(X=x) = C(n,x) pˣ (1−p)ⁿ⁻ˣ |
| Poisson | P(X=x) = e⁻ˡ λˣ / x! |
| Standard error | SE = σ / √n |
| z-test (σ known) | z = (x̄ − μ) / (σ/√n) |
| t-test (σ unknown) | t = (x̄ − μ) / (s/√n) |
| Chi-square | χ² = Σ (O − E)² / E |
| CI for μ (σ known) | x̄ ± z_α/2 × σ/√n |
| CI for μ (σ unknown) | x̄ ± t_α/2 × s/√n |
| CI for proportion | p̂ ± z_α/2 × √(p̂(1−p̂)/n) |
| Sample Size | n = (z_α/2 × σ / E)² |
| Regression slope | b = Σ(x−x̄)(y−ȳ) / Σ(x−x̄)² |
| Regression intercept | a = ȳ − b x̄ |
| Correlation | r = Σ(x−x̄)(y−ȳ) / √(Σ(x−x̄)² Σ(y−ȳ)²) |
| Spearman | ρ = 1 − 6Σd² / (n(n²−1)) |
| Probable Error | P.E = 0.6745 (1 − r²) / √n |
| Markov steady state | πP = π, Σπᵢ = 1 |

#### Diagrams · Numericals

| Type | Items |
|---|---|
| Diagrams | `Diagram-Book.md` **#1–#10** full sweep (canonical) |
| Numericals | `Numerical-Book.md` **#46–#70** full sweep (descriptive → regression) |

#### Books · Chapters · Media

| Resource | Where |
|---|---|
| Weeks 1–13 packs | timed past papers |
| Devore | Ch 10 (supplementary) + online notes for Markov Chains |
| Module 4 supplement | `03-Chapter-Breakdowns/04-…` (Markov/random processes, ~5%) |

#### Fear-Killer Pack Week 14 (verbatim)

**Resources:** all Weeks 1-8 packs • timed past papers

1. Timed full-length past paper (3 hrs, closed book) — START with the past paper, NOT with review.
2. Hypothesis testing: 4 complete problems (z, t, χ²) — all from blank page.
3. Confidence intervals: 5 problems — retrieve formulas first.
4. Bayes: 3 problems — retrieve theorem from memory.
5. Regression: 2 complete problems — derive a, b from blank page.
6. Descriptive stats: compute mean, variance, skewness from raw data — closed book.
7. Markov Chain basics (30 min): state transition diagram, transition matrix, steady-state πP = π. Do NOT over-invest — ~5% weight.
8. Random Processes basics (20 min): stationary vs WSS, autocorrelation R(t₁,t₂), ergodicity. Module-4 theory component.

#### Narrative — Week 14 (verbatim)

**Topics:** Cumulative review of Weeks 1-13; Past paper practice; Random Processes & Markov Chain basics (stationarity, autocorrelation of wide-sense stationary processes, ergodicity; Markov Chain & Queuing Theory) — ~5% weight, typically one short question

**Resources:** Devore Ch.10 (supplementary); online notes for Markov Chains

**Retrieval protocol:** No passive reading at all this week. Every minute is active retrieval. If you cannot retrieve a formula, that tells you exactly what to drill.

**Sleep banking:** Continue 9 hrs sleep (bedtime 22:00). Do NOT trade sleep for last-minute studying — it degrades recall by 15-20% per lost hour.

**Practice:**
- Timed full-length past paper (3 hrs, closed book) — START with the past paper, NOT with review
- Hypothesis testing: 4 complete problems (z, t, χ²) — all from blank page
- Confidence intervals: 5 problems — retrieve formulas first
- Bayes: 3 problems — retrieve theorem from memory
- Regression: 2 complete problems — derive a, b from blank page
- Descriptive stats: compute mean, variance, skewness from raw data — closed book
- **Markov Chain basics (30 min):** State transition diagram, transition matrix, steady-state probabilities πP = π. Do 2-3 problems to cover the expected 5% weight. Do NOT over-invest — this is a supplementary topic, not a core pillar.
- **Random Processes basics (20 min):** Stationary vs wide-sense stationary, autocorrelation R(t₁, t₂) of a WSS process, ergodicity/time averaging. 2-3 short problems — module-4 theory component.
- **Spaced repetition:** Redrill any formula that took >30s to recall. Repeat until reflex-level.

**Red flag:** If hypothesis testing takes >20 minutes per problem, drill the 4-step procedure until it is automatic. This is your highest-weight topic.

**Deliverable:** Solved past paper + final formula sheet (1 page, double-sided)

**Time budget:** 8 hrs

#### P0 floor · Drill target · Deliverable · Trap

- **P0 floor:** fear-killer pack pass (Q1 past paper + Q2 hypothesis testing) · def/formula skim (full W1–W13 sweep) · same-problem drill #59/#60/#64/#67
- **Same-problem drill target:** hypothesis testing < 20 min/problem; any formula recalled < 30 s; Markov steady-state πP = π covered but not over-invested
- **Deliverable:** solved past paper + final formula sheet (1 page, double-sided)
- **Trap:** no passive reading — every minute active retrieval; START with the past paper, NOT with review; Markov/random processes ~5% — do NOT over-invest

---

### W15 — FINAL EXAM WEEK · 23–29 Nov · Exam

**Banner:** Rotation PS (Mon+Tue) · Tier FINAL · No new deep study, no floor accrual. Ledger frozen during W15.

#### Sources

| Source | Where | Ref |
|---|---|---|
| Narrative | `Week-by-Week-Narrative.md` → Week 15 | lines 297–315 |
| Pack | `Fear-Killer-Packs.md` → Week 15 | no pack |
| Week manifest | (W15 note at `weeks/PS-W14.md` L54) | reference |

#### Fear-Killer Pack — Week 15 (verbatim)

**Week 15: FINAL EXAM** — No new pack. Execution only: numericals (hypothesis testing, CI, Bayes, regression, probability) → theory. Write the 4 steps explicitly for every hypothesis test.

#### Narrative — Week 15 (verbatim)

**Focus:** Execution. Do not learn anything new.

- Review 1-page formula sheet (final version prepared Week 14)
- Z-table: confirm you know how to read it (left tail, right tail, between values)
- Answer order: numericals (hypothesis testing, confidence intervals, Bayes, regression, probability) → theory (definitions, interpretations, comparisons)
- For hypothesis testing: write the 4 steps explicitly. Even if your calculation is wrong, correct structure earns 60% of marks

**Final formula sheet checklist (must have):**
- Bayes' theorem
- Z-test and t-test formulas
- CI formulas (mean, proportion)
- χ² formula
- Regression formulas (a, b, r, R²)
- Binomial, Poisson, Normal PDF/PMF formulas
- Markov Chain: πP = π, steady-state equation
- Z-table and t-table critical values (common ones)

#### Exam-day stack (final)

- [ ] Numerical speed drills first — hypothesis testing, CI, Bayes, regression formulas from memory
- [ ] Blank-page retrieval — write the 4-step procedure from memory
- [ ] Theory last; flag stuck problems and move on

#### Notes

- Review the 1-page formula sheet (prepared Wk14). Sleep 8 h each night.
- Exam order: numericals → theory. Write the 4 hypothesis-testing steps explicitly.
- **Ledger frozen during Wk15** — exam window 30 Nov – 18 Dec is a separate phase (per `weeks/PS-W14.md` L54).
