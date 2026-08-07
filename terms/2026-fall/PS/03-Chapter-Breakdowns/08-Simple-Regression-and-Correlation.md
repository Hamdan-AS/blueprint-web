# Module 8 — Simple Regression & Correlation

## Weight: ★★★★☆
## Difficulty: ★★★☆☆
## Importance: ★★★★★

## Learning Objectives

### Explain
- Scatter diagrams
- Least-squares principle

### Calculate
- Correlation coefficient (Pearson r)
- Regression lines (Y on X, X on Y)
- Rank correlation (Spearman ρ)
- Probable Error (P.E)
- Coefficient of determination R²

### Interpret
- Slope, intercept, residuals, R²
- Significance of correlation via P.E

### Differentiate
- Y on X vs X on Y regression lines
- Correlation vs causation

## Must Memorize

### Definitions (Word-for-word)

**Correlation coefficient (r):** A measure of the strength and direction of the linear relationship between two variables, r ∈ [−1, 1].

**Regression line:** The line of best fit minimizing the sum of squared vertical deviations: Y = a + bX.

**Least squares:** Choosing a and b to minimize Σ(y − a − bx)².

**Coefficient of determination (R²):** The proportion of variance in Y explained by X; R² = r².

**Spearman's rank correlation (ρ):** Correlation computed on ranks, ρ = 1 − 6Σd²/(n(n²−1)).

**Probable Error (P.E):** P.E = 0.6745 × (1 − r²)/√n; the interval r ± P.E assesses significance of correlation.

## Must Understand

- b = Σ((x−x̄)(y−ȳ)) / Σ((x−x̄)²); a = ȳ − bx̄
- Regression of Y on X minimizes vertical residuals; X on Y minimizes horizontal — they are different lines
- r near ±1 = strong linear relation; r = 0 = none; r says nothing about non-linear or causation
- R² = proportion of variance explained
- Spearman uses ranks → robust to outliers, handles ordinal data
- Correlation is significant if the interval r ± P.E does not contain zero

## Must Practice

### Regression computation
```
X (hours): 2,4,6,8,10,12 ;  Y (score): 55,60,70,75,85,95
b = Σ(x−x̄)(y−ȳ)/Σ(x−x̄)² = 4.21, a = ȳ − bx̄ = 42.5
Y = 42.5 + 4.21X; predict X=7 → 71.97, X=20 → 126.7 (extrapolation unreliable)
```

### Spearman + P.E
```
Judge A: [3,1,2,5,4,7,6,8]; Judge B: [2,3,1,4,6,5,8,7]
ρ = 1 − 6Σd²/(n(n²−1)) → compute;  r ≈ 0.97 → P.E = 0.6745×(1−0.9409)/√6 ≈ 0.0163
r ± P.E ≈ 0.97 ± 0.0163 → significant (interval free of zero)
```

## Common Mistakes

1. **Y on X vs X on Y** — they are not inverses; use Y on X to predict Y from X.
2. **Extrapolation** — predictions far outside data range are unreliable.
3. **r ≠ causation** — correlation does not imply cause.
4. **R² vs r** — R² = r² is proportion of variance explained.
5. **P.E formula** — 0.6745 × (1−r²)/√n, not (1−r)/√n.
6. **Spearman with tied ranks** — use average ranks.

## Typical Questions

1. Compute r, regression line Y = a + bX, interpret a and b, predict Y at X = 7 and X = 20.
2. Calculate R² and residuals; explain least squares (why vertical?).
3. Spearman's rank correlation for two judges' rankings.
4. Compute P.E; assess significance of r. Why does the interval widen at small n?
5. Differentiate Y on X vs X on Y regression with the same data.

## Examiner Expectations

| Level | Performance |
|-------|------------|
| Pass | Computes r and regression coefficients |
| Good | Predicts, interprets slope and R² |
| Excellent | Rank correlation, P.E significance, line-direction nuance |
| Full marks | Full regression + correlation solutions fast, error-free |

## Formula Sheet

```
Correlation:       r = Σ(x−x̄)(y−ȳ) / √(Σ(x−x̄)² Σ(y−ȳ)²)
Slope:             b = Σ(x−x̄)(y−ȳ) / Σ(x−x̄)²
Intercept:         a = ȳ − b x̄
R²:                r²
Spearman:          ρ = 1 − 6Σd² / (n(n²−1))
Probable Error:    P.E = 0.6745 (1 − r²) / √n
Significance:      correlation significant if r ± P.E excludes 0
```

## Flashcards

Q: What does r = 0 mean?
A: No linear correlation (non-linear may still exist)

Q: Why minimize vertical residuals for Y on X?
A: Y is the predicted/response variable; X is fixed

Q: R² meaning?
A: Proportion of variance in Y explained by X

Q: Spearman formula?
A: ρ = 1 − 6Σd²/(n(n²−1))

Q: P.E formula?
A: 0.6745(1−r²)/√n

Q: Correlation significant when?
A: r ± P.E interval does not contain zero

## Retrieval Questions (25+)

1. What is a scatter diagram used for?
2. Derive b = Σ(x−x̄)(y−ȳ)/Σ(x−x̄)² from least squares.
3. Compute r for a given dataset.
4. Compute and interpret the regression line coefficients.
5. Predict Y at a given X; which prediction is more reliable?
6. Compute R² and interpret.
7. Compute residuals for each point.
8. Explain the least-squares principle.
9. Why are Y on X and X on Y different?
10. When do you need the X on Y line?
11. Compute Spearman's ρ for two judges.
12. Interpret ρ = +1, −1, 0.
13. Compute P.E and assess significance.
14. Why does the P.E interval widen for small n?
15. Does correlation imply causation?
16-25. (Additional problems in Numerical Book)

## GPA Priority: 🟥 Must Win (numerical, finals regular)
