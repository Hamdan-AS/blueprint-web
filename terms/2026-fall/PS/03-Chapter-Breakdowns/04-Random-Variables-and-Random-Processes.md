# MODULE 4 — RANDOM VARIABLES & RANDOM PROCESSES

**Weight:** ★★★☆☆
**Difficulty:** ★★★★☆
**Importance:** ★★★★☆
---
## Learning Objectives
---
### Explain

- Discrete & continuous random variables
- Random sequences and transformations
- Introduction to random processes and time series
---
### Calculate

- PMF, PDF, CDF, distribution functions
- Mathematical expectations, variance
- Moment generating function (M.G.F)
- Statistical averages of random processes, autocorrelation
---
### Analyze

- Stationarity (strict & wide-sense)
- Time averaging, ergodicity
- Markov Chain and Queuing Theory
---
## Must Memorize
---
### Definitions (Word-for-word)

**Random variable:** A function that assigns a real number to each outcome of a random experiment.

**PMF (discrete):** P(X = xᵢ) with Σᵢ P(X = xᵢ) = 1.

**PDF (continuous):** f(x) ≥ 0 with ∫f(x)dx = 1; P(a<X<b) = ∫ₐᵇ f(x)dx.

**CDF:** F(x) = P(X ≤ x); for continuous F(x) = ∫₋∞ˣ f(t)dt.

**Expected value:** E[X] = Σ xᵢP(xᵢ) (discrete) or ∫ x f(x)dx (continuous).

**Moment generating function:** M_X(t) = E[e^{tX}]; moments from M⁽ᵏ⁾_X(0).

**Stationary process:** A random process whose statistical properties are invariant under time shift.

**Wide-sense stationary (WSS):** Constant mean and autocorrelation depending only on τ = t₁ − t₂.

**Ergodic process:** Time averages equal ensemble averages.
---
## Must Understand

- Var(X) = E[X²] − (E[X])² — the computational shortcut
- M.G.F: E[X] = M′(0), E[X²] = M″(0); unique M.G.F ↔ unique distribution
- Strict vs wide-sense stationarity: WSS needs only mean + autocorrelation
- Autocorrelation R_X(τ) for a WSS process; R_X(0) = E[X²]
- Markov property: next state depends only on current state
- Queuing: Poisson arrivals + exponential service → M/M/1 formulas
---
## Must Practice
---
### M.G.F verification

```
P(X=1)=0.1, P(X=2)=0.2, P(X=3)=0.3, P(X=4)=0.25, P(X=5)=0.15
M_X(t) = Σ e^{tx} P(x); E[X] = M'(0); E[X²] = M''(0) → match direct sums
```
---
### WSS sinusoid

```
X(t) = A cos(2πft + θ), θ ~ U[0, 2π), A independent
E[X(t)] = 0 (constant), R(t₁,t₂) = R(τ) → WSS
```
---
### Markov chain

```
P = [[0.8, 0.2], [0.3, 0.7]]
Steady state: πP = π, π₁+π₂ = 1 → π = [0.6, 0.4]
```
---
## Common Mistakes

1. **Var(X) ≠ E[X²]** — subtract (E[X])².
2. **M.G.F evaluated at t = 0 directly** — differentiate first, then set t = 0.
3. **WSS vs strict** — WSS is weaker; strict ⇒ WSS, not conversely.
4. **Autocorrelation of non-stationary process** — depends on t₁ AND t₂ separately.
5. **Steady-state equation** — must add Σπᵢ = 1; πP = π alone is underdetermined.
6. **Queuing arrival vs service notation** — λ arrivals, μ service; ρ = λ/μ.
---
## Typical Questions

1. Compute E[X], E[X²], Var(X), CDF, M.G.F for a given PMF; verify via M.G.F.
2. Find k, P(0.5<X<1.5), E[X], Var(X), CDF, median for f(x) = kx² on [0,2].
3. Show X(t) = A cos(2πft+θ) is WSS; compute mean and autocorrelation.
4. Two-state Markov chain: transition diagram, 2-step probability, steady state.
5. M/M/1 queue: P(empty), expected queue length, probability of exactly k arrivals.
---
## Examiner Expectations

| Level | Performance |
|-------|------------|
| Pass | Computes E[X], Var(X), CDF for discrete/continuous |
| Good | Uses M.G.F, recognizes WSS |
| Excellent | Full random-process analysis (autocorrelation, stationarity) |
| Full marks | Markov/queuing and M.G.F solved under time pressure |
---
## Formula Sheet

```
E[X] (discrete):  Σ xᵢ P(X=xᵢ)
E[X] (continuous): ∫ x f(x) dx
Var(X):           E[X²] − (E[X])²
M.G.F:            M_X(t) = E[e^{tX}],  E[Xᵏ] = M⁽ᵏ⁾(0)
WSS:              E[X(t)] = μ (const), R_X(t₁,t₂) = R_X(t₁−t₂)
Autocorrelation:  R_X(τ) = E[X(t)X(t+τ)]
M/M/1:            ρ = λ/μ,  P₀ = 1 − ρ,  L = ρ/(1−ρ)
Markov steady state: π = πP, Σπᵢ = 1
```
---
## Flashcards

Q: Formula for Var(X)?
A: E[X²] − (E[X])²

Q: How to get E[X] from M.G.F?
A: Differentiate M_X(t) once, set t = 0

Q: What makes a process WSS?
A: Constant mean + autocorrelation depends only on τ

Q: When is a process ergodic?
A: Time averages = ensemble averages

Q: M/M/1 probability of empty system?
A: P₀ = 1 − ρ
---
## Retrieval Questions (30+)

1. Define random variable; discrete vs continuous.
2. State conditions for a valid PMF/PDF.
3. Compute E[X], Var(X) from a given PMF.
4. Find E[X²] and derive Var(X).
5. Derive M.G.F of a given discrete distribution and find moments.
6. Find the constant k for a valid PDF.
7. Compute the median from a CDF.
8. Define a random process and time series.
9. What is stationarity?
10. Distinguish strict and wide-sense stationarity.
11. Compute autocorrelation of a WSS process.
12. What is ergodicity?
13. Draw a two-state Markov transition diagram.
14. Compute 2-step transition probabilities.
15. Solve steady-state probabilities.
16. M/M/1: P(empty), L, W formulas.
17. Poisson arrival probability in a fixed interval.
18-30. (Additional problems in Numerical Book)

**GPA Priority:** 🟥 Must Win (theory + numerical, finals regular)
