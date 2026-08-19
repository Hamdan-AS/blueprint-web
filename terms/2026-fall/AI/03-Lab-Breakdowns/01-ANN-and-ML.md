# LAB GROUP: ANN / ML (LABS 1–5)

Source: Practical Workbook CS-323 (NED UET, revised Aug 2024). CLO: "Demonstrate the use of modern tools and techniques for developing intelligent systems. (C3, PLO-3)"
---
## Lab 1 — Implementing Simple Neural Network Using Perceptron

- **Goal:** Build a single-layer perceptron; train on logic functions.
- **Steps:** Model neuron (weighted sum → activation); train AND/OR/NOT/NAND/NOR gates with step activation; observe linear separability.
- **Deliverable:** Working perceptron + accuracy table per gate.
- **Resources:** see `AI/Lab-Resources.md` — Lab 1
---
## Lab 2 — Developing an Artificial Neural Network (ANN) Using Perceptron

- **Goal:** Generalize Lab 1 into a reusable ANN using the perceptron learning rule.
- **Steps:** Learning rate, weight update rule (w ← w + η·(t−y)·x); fit/predict API; test on a real dataset (e.g., breast cancer).
- **Deliverable:** ANN class from scratch + evaluation metrics.
- **Resources:** `AI/Lab-Resources.md` — Lab 2
---
## Lab 3 — Applying Data Preprocessing for ANN

- **Goal:** Preprocess data before training (this is what separates a working model from a broken one).
- **Steps:** Handle missing values (imputation); feature scaling (MinMax/normalization); one-hot encoding of categoricals; train/test split.
- **Deliverable:** Preprocessing pipeline applied to a raw dataset + before/after training comparison.
- **Resources:** `AI/Lab-Resources.md` — Lab 3
---
## Lab 4 — Developing ANN Using ADALINE

- **Goal:** Implement ADALINE (Widrow-Hoff / delta rule) with linear activation.
- **Steps:** Batch (GD) vs stochastic (SGD) variants; loss = SSE; compare with perceptron on same problem; predict X/O characters.
- **Deliverable:** ADALINE implementation + perceptron-vs-ADALINE comparison.
- **Resources:** `AI/Lab-Resources.md` — Lab 4
---
## Lab 5 — Developing ANN Using Backward Propagation

- **Goal:** Implement multi-layer feed-forward network with backpropagation.
- **Steps:** Forward pass; MSE loss; backward pass (chain rule); gradient descent weight updates; train on XOR / seeds dataset.
- **Deliverable:** Backprop network from scratch + training loss curve + accuracy.
- **Resources:** `AI/Lab-Resources.md` — Lab 5
---
## Exam Relevance

- Perceptron XOR non-linearity, ADALINE delta rule, backprop chain rule = exam-relevant theory (pillar). See `Formula-Book.md`, `Fear-Killer-Packs.md` (AI-W11).
