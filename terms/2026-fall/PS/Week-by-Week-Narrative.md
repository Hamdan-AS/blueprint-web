# MT-335 — Probability & Statistics — 15-Week Plan

**Professor's Verdict:** *The most predictable course in your semester. Formula mastery + problem-solving speed = guaranteed A. No subjective grading, no group projects, no viva uncertainty — just you, the formula sheet, and 60% numerical problems. This is where you secure your 4.0.*

**Credits:** 3+0 (no lab) | **Difficulty:** 3/5 | **Midterm:** Week 8 | **Final:** Week 15

---

## How This Course Works

- **60% numerical + 40% theoretical.** The numericals are formula-driven and highly predictable.
- **Hypothesis testing is the single most important topic** — one 15-mark question guaranteed.
- **Speed matters.** The difference between an A and an A+ is whether you finish the paper with time to check your calculations.

---

## Week 1 — Descriptive Statistics

**Topics:** Types of data (qualitative, quantitative, discrete, continuous); Variables; Data presentation (tables, bar charts, pie charts, histograms, frequency polygons, ogives)

**Resources:** Devore Ch.1; StatQuest — Statistics Fundamentals (YouTube)

**Practice:**
- Classify 10 data types (nominal/ordinal/interval/ratio)
- Construct frequency distribution from raw data: class intervals, frequency, cumulative frequency, relative frequency
- Choose the correct graph type for a given data set

**Deliverable:** Frequency distribution table + histogram for a given dataset

**Time budget:** 4 hrs

---

## Week 2 — Measures of Central Tendency & Dispersion

**Topics:** Mean, median, mode; Quartiles, percentiles; Range, variance, standard deviation; Coefficient of variation; Skewness and kurtosis

**Resources:** Devore Ch.1; StatQuest — Mean, Median, Mode

**Practice:**
- Compute mean, median, mode for grouped and ungrouped data
- Compute variance and standard deviation (both population and sample formulas)
- Interpret skewness: positive (tail right), negative (tail left), zero (symmetric)
- Quartile deviation: (Q3 − Q1) / 2

**Deliverable:** Complete descriptive statistics for 2 datasets

**Time budget:** 4 hrs

---

## Week 3 — Probability Theory

**Topics:** Sample space; Events; Axioms of probability; Addition rule; Multiplication rule; Permutations and combinations

**Resources:** Devore Ch.2; StatQuest — Probability

**Practice:**
- Solve 10 combinatorial problems (permutations, combinations)
- P(A ∪ B) = P(A) + P(B) − P(A ∩ B)
- P(A ∩ B) = P(A) × P(B|A)
- Conditional probability from contingency tables

**Deliverable:** 10 probability problems (permutations, combinations, basic rules)

**Time budget:** 4 hrs

---

## Week 4 — Conditional Probability & Bayes' Theorem

**Topics:** Conditional probability; Law of total probability; Bayes' theorem; Prior vs posterior probability; Base rate fallacy

**Resources:** Devore Ch.2; StatQuest — Bayes' Theorem

**Practice:**
- Bayes' theorem: P(A|B) = P(B|A) × P(A) / P(B)
- Law of total probability: P(B) = Σ P(B|A_i) × P(A_i)
- **Base rate fallacy:** P(disease | positive test) is NOT P(positive test | disease). This is the #1 exam trap.
- Solve 10 Bayes problems (medical testing, spam detection, etc.)

**Killer trap:** Students confuse P(A|B) with P(B|A). In medical testing: P(disease|positive test) is typically low even when P(positive test|disease) is high, because the base rate of the disease is low. This is a guaranteed exam question.

**Deliverable:** 10 Bayes theorem problems with full step-by-step solutions

**Time budget:** 5 hrs

---

## Week 5 — Random Variables & Probability Distributions

**Topics:** Discrete vs continuous random variables; Probability mass function (PMF); Probability density function (PDF); Cumulative distribution function (CDF); Expected value; Variance; Moment generating function (MGF)

**Resources:** Devore Ch.3; StatQuest — Random Variables

**Practice:**
- Compute E[X] = Σ x·P(X=x) for discrete; E[X] = ∫ x·f(x) dx for continuous
- Var(X) = E[X²] − (E[X])²
- MGF: M_X(t) = E[e^(tX)]
- 10 problems computing expected value and variance

**Deliverable:** 10 random variable problems (PMF/PDF, expectation, variance)

**Time budget:** 5 hrs

---

## Week 6 — Discrete & Continuous Probability Distributions

**Topics:** Discrete: Binomial, Poisson, Hypergeometric, Negative Binomial; Continuous: Uniform, Exponential, Normal

**Resources:** Devore Ch.3-4; StatQuest — each distribution

**Practice:**
- **When to use which:**
  - Binomial: n trials, success/failure, fixed p
  - Poisson: rare events in fixed interval (λ = rate)
  - Normal: symmetric, bell-shaped, mean = median = mode
  - Exponential: time between events (memoryless property)
- Poisson approximates Binomial when n ≥ 20 and p ≤ 0.05

**Deliverable:** 10 distribution identification problems + parameter computation

**Time budget:** 5 hrs

---

## Week 7 — Midterm Revision

**Topics:** Comprehensive review of Weeks 1-6

**Practice:**
- Timed past paper (2 hrs, closed book)
- Descriptive statistics: mean, variance from raw data
- Bayes' theorem: 3 medical testing problems
- Distribution identification: given a scenario, name the distribution and parameters
- Z-score: P(Z < z), P(Z > z), P(z1 < Z < z2) from standard normal table

**Red flag:** If Z-table reading takes >30 seconds per lookup, practice until it takes 10 seconds. The table is your best friend.

**Sleep banking:** Bedtime moves to 22:00 for 5 nights (Weeks 6-7). Sleep 9 hours. Formula-dense content benefits especially from NREM slow-wave consolidation — protect your Bayes and distribution memory.

**Time budget:** 7 hrs

---

## Week 8 — MIDTERM EXAM WEEK

**Focus:** Active recall only. No new material.

- Review formula sheet (prepared Week 7)
- Z-table speed drills: 10 lookups in 2 minutes
- Bayes: 2 complete problems
- Sleep 8 hours each night

---

## Week 9 — Sampling Distributions & CLT (Recovery Week)

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

---

## Week 10 — Hypothesis Testing I: z-test and t-test

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

---

## Week 11 — Hypothesis Testing II: Chi-Square & Type I/II Errors

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

---

## Week 12 — Confidence Intervals

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

---

## Week 13 — Regression & Correlation

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

---

## Week 14 — Final Exam Preparation (Taper)

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

---

## Week 15 — FINAL EXAM

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

---

## Professor's Final Words

*Probability and Statistics is the only course this semester where the exam is entirely predictable. The formulas do not change. The question patterns do not change. The only variable is your preparation.*

*The student who solves 100 hypothesis testing problems before the exam will score 95%+. The student who solves 10 will score 70%. It is that linear.*

*There is no substitute for practice. Not reading. Not watching videos. Solving problems with a pen and paper. Do this, and Statistics will be your highest-scoring course.*
