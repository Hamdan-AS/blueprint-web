# Module 3 — Probability

## Weight: ★★★☆☆
## Difficulty: ★★★☆☆
## Importance: ★★★★☆

## Learning Objectives

### Explain
- Basic concepts, sample space, events
- Definitions of probability (classical, relative frequency, axiomatic)

### Calculate
- Permutations & combinations
- Laws of probability (addition, multiplication)

### Apply
- Conditional probability
- Bayes' rule

### Differentiate
- Mutually exclusive vs independent events
- Prior vs posterior probability

## Must Memorize

### Definitions (Word-for-word)

**Sample space (S):** The set of all possible outcomes of a random experiment.

**Event:** A subset of the sample space.

**Mutually exclusive events:** Events that cannot occur together (A ∩ B = ∅).

**Independent events:** Events where the occurrence of one does not affect the probability of the other, P(A∩B) = P(A)P(B).

**Conditional probability:** P(A|B) = P(A ∩ B) / P(B), the probability of A given that B has occurred.

**Bayes' rule:** P(Aᵢ|B) = P(B|Aᵢ)P(Aᵢ) / Σⱼ P(B|Aⱼ)P(Aⱼ).

## Must Understand

- P(A ∪ B) = P(A) + P(B) − P(A∩B); special case for mutually exclusive
- Base rate fallacy: P(A|B) ≠ P(B|A) — the #1 exam trap
- Permutation = ordered (nPr); combination = unordered (nCr)
- Conditional probability as renormalizing over the conditioning event
- Multiplication rule chains for sequential draws without replacement

## Must Practice

### Bayes / Base Rate
```
Diagnostic test: sensitivity 99%, specificity 95%, prevalence 2%.
P(disease | positive) = 0.99×0.02 / (0.99×0.02 + 0.05×0.98) ≈ 0.288
```

### Sequential draws without replacement
```
Bag: 5 red, 7 blue. 3 draws w/o replacement.
P(all red) = (5/12)(4/11)(3/10)
P(exactly 2 red) = C(5,2)C(7,1)/C(12,3)
```

## Common Mistakes

1. **Confusing P(A|B) with P(B|A)** — medical-test base rate trap.
2. **Adding probabilities of non-mutually-exclusive events** — double counts intersection.
3. **Using nCr instead of nPr** — order matters for arrangements.
4. **Treating dependent events as independent** — draws without replacement.
5. **Forgetting complement trick** — P(at least one) = 1 − P(none).

## Typical Questions

1. Prove Bayes' theorem from conditional probability.
2. Medical test problem with sensitivity/specificity/prevalence (base rate fallacy).
3. Draws without replacement: all red, exactly 2 red, at least 1 blue.
4. Contingency table: P(Employed), P(Male|Employed), independence test.
5. Permutations vs combinations: number of ways to arrange/select.

## Examiner Expectations

| Level | Performance |
|-------|------------|
| Pass | Computes basic and conditional probabilities |
| Good | Handles multiplication/addition rules and combinations |
| Excellent | Full Bayes' problems, proves theorems, interprets posterior |
| Full marks | Base-rate problems solved with probability tree, error-free |

## Formula Sheet

```
Permutations:   nPr = n! / (n−r)!
Combinations:   nCr = n! / (r!(n−r)!)
Addition rule:  P(A ∪ B) = P(A) + P(B) − P(A∩B)
Multiplication: P(A ∩ B) = P(A) × P(B|A)
Conditional:    P(A|B) = P(A∩B) / P(B)
Total law:      P(B) = Σᵢ P(B|Aᵢ) P(Aᵢ)
Bayes:          P(Aᵢ|B) = P(B|Aᵢ)P(Aᵢ) / Σⱼ P(B|Aⱼ)P(Aⱼ)
```

## Flashcards

Q: Are mutually exclusive and independent the same?
A: No. Mutually exclusive (disjoint) events are highly dependent.

Q: P(A|B) formula?
A: P(A∩B)/P(B)

Q: Key intuition of the base rate fallacy?
A: P(disease|positive) ≠ P(positive|disease); low base rate keeps it small

## Retrieval Questions (25+)

1. Define sample space and event.
2. State the three definitions of probability.
3. Compute P(A∪B) for mutually exclusive and general cases.
4. How many 3-letter words can be formed from 6 distinct letters?
5. How many committees of 4 from 10 people?
6. Prove P(A∩B) = P(A)P(B|A).
7. Prove Bayes' theorem.
8. Compute P(all red) for 3 draws without replacement.
9. Contingency table conditional probabilities.
10. Are gender and employment independent? Prove.
11. Law of total probability example.
12. Two dice: P(sum = 7), P(both even).
13-25. (Additional problems in Numerical Book)

## GPA Priority: 🟥 Must Win (Bayes guaranteed)
