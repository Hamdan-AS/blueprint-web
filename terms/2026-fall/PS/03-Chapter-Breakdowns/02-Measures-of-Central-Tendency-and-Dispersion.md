# MODULE 2 — MEASURES OF CENTRAL TENDENCY & DISPERSION

**Weight:** ★★★☆☆
**Difficulty:** ★★☆☆☆
**Importance:** ★★★★☆
---
## Learning Objectives
---
### Calculate

- Mean, median, mode (raw and grouped data)
- Quartiles, range, quartile deviation
- Mean deviation, standard deviation, variance
- Moments, coefficient of variation
---
### Interpret

- Skewness & kurtosis
- Coefficient of variation
---
### Differentiate

- When mean vs median vs mode is the best measure
- Population vs sample formulas
---
## Must Memorize
---
### Definitions (Word-for-word)

**Mean:** The sum of all observations divided by their number.

**Median:** The middle value when data is arranged in order; Q2.

**Mode:** The most frequently occurring value.

**Quartile deviation:** Half the interquartile range, (Q3 − Q1) / 2.

**Standard deviation:** The positive square root of the variance — the average deviation of observations from the mean.

**Coefficient of variation:** The ratio of standard deviation to mean, expressed as a percentage — σ/x̄ × 100.

**Skewness:** The degree of asymmetry of a distribution about its mean.

**Kurtosis:** The peakedness or flatness of a distribution relative to the normal.

**Moments:** The r-th moment about mean: μ_r = Σf(x−x̄)ʳ / Σf.
---
## Must Understand

- Which average is most representative depends on shape (skew pulls the mean)
- Grouped-data formulas use midpoints; information is lost vs raw data
- σ² (variance) is additive, σ is not
- C.V. allows comparing variability across different units/scales
- β₁ (skewness), β₂ (kurtosis) and their normal-distribution benchmarks
---
## Must Practice
---
### Grouped Data — Mean & Variance

```
Class 30-40(3), 40-50(7), 50-60(12), 60-70(15), 70-80(8), 80-90(5)
x̄ = Σfx / Σf
σ² = Σf(x−x̄)² / Σf   (population)   s² = Σf(x−x̄)² / (Σf − 1)  (sample)
```
---
### Robustness Check

```
Dataset 12,15,18,20,22,25,27,30,35,42,50,55,60,65,70
Add outlier 200 → recompute mean & median → median robust, mean not
```
---
## Common Mistakes

1. **Population vs sample denominator** — divide by N (pop) vs n−1 (sample).
2. **Using mean for skewed data** — median is representative when skew is strong.
3. **Confusing variance with standard deviation** — always report units.
4. **Quartiles on grouped data** — use interpolation formula, not raw position.
5. **Mode of grouped data** — modal class, not the class midpoint.
---
## Typical Questions

1. Compute mean, median, mode, Q1, Q3, IQR, variance, SD, C.V. for a raw dataset.
2. Compute mean and variance for grouped data by the midpoint method.
3. Which measure of central tendency is best for skewed data? Justify.
4. Compare dispersion of two datasets with different units using C.V.
5. From moments, compute skewness and kurtosis and interpret.
---
## Examiner Expectations

| Level | Performance |
|-------|------------|
| Pass | Computes mean/median/mode for ungrouped data |
| Good | Handles grouped data, variance, quartiles |
| Excellent | Interprets skewness/kurtosis/C.V. correctly |
| Full marks | All measures computed fast and error-free |
---
## Formula Sheet

```
Mean (raw):         x̄ = Σx / n
Mean (grouped):     x̄ = Σfx / Σf
Median (raw):       middle value (avg of two middles if n even)
Median (grouped):   L + (n/2 − CF) / f × h
Mode (grouped):     L + (f₁ − f₀) / (2f₁ − f₀ − f₂) × h
Variance (pop):     σ² = Σ(x−μ)² / N = Σx²/N − μ²
Variance (sample):  s² = Σ(x−x̄)² / (n−1)
Quartile deviation: (Q3 − Q1) / 2
C.V.:               (σ / x̄) × 100
Moments:            μ_r = Σf(x−x̄)ʳ / Σf
Skewness (β₁):      μ₃² / μ₂³
Kurtosis (β₂):      μ₄ / μ₂²
```
---
## Flashcards

Q: Why is the median robust to outliers?
A: It depends only on the middle position, not magnitudes

Q: Formula for C.V.?
A: (σ / x̄) × 100

Q: Population vs sample variance denominator?
A: N vs (n−1)

Q: Kurtosis of the normal distribution?
A: β₂ = 3 (mesokurtic)
---
## Retrieval Questions (25+)

1. Define mean, median, mode.
2. Compute all measures for: 12,15,18,20,22,25,27,30,35,42.
3. Compute quartiles and quartile deviation.
4. Add an outlier and state which measures change.
5. Compute grouped mean and variance from a frequency table.
6. What is the coefficient of variation used for?
7. Compare mean and median for a positively skewed distribution.
8. Derive σ² = E[X²] − μ² from the definition.
9. What does β₁ = 0 mean?
10. What is platykurtic vs leptokurtic?
11. Compute mean deviation about mean.
12. Why divide by n−1 in sample variance?
13-25. (Additional problems in Numerical Book)

**GPA Priority:** 🟥 Must Win (numerical, exam regular)
