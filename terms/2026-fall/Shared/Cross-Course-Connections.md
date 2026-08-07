# Cross-Course Connections

## How Topics Link Across Courses

### Probability & Statistics → Everything

| MT-335 Topic | Used In | How |
|-------------|---------|-----|
| Bayes theorem | CS-323 AI | Bayesian inference, probabilistic reasoning |
| Probability distributions | CS-327 Networks | Packet loss probability, ALOHA throughput |
| Hypothesis testing | CS-326 SE | Software quality metrics, defect density |
| Random variables | CS-328 Arch | Performance modeling, queuing in memory systems |

### Mathematics → Computer Architecture & Networks

| Math Topic | Used In | How |
|-----------|---------|-----|
| Binary arithmetic | CS-327 | Subnetting, CRC division, IP addressing |
| Boolean algebra | CS-328 | Control unit logic, hazard detection, forwarding conditions |
| Graph theory | CS-327 | Routing algorithms (Dijkstra, Bellman-Ford) |
| Calculus (chain rule) | CS-323 | Backpropagation gradient computation |
| Combinatorics | MT-335 | Probability calculations, counting problems |

### Programming → AI & Software Engineering

| Skill | Used In | How |
|-------|---------|-----|
| Python | CS-323 | All lab implementations (search, GA, NN) |
| OOP | CS-326 | Design patterns, project architecture |
| Data structures | CS-323 | Graphs for search, trees for Minimax |

### Networking → Operating Systems (Implied)
- TCP congestion control concepts overlap with process scheduling
- Virtual memory paging (CS-328) connects to file systems

## Study Strategy Using Connections

1. **Stack related topics in the same week** — e.g., study Bayes in MT-335 and probabilistic reasoning in CS-323 in the same period
2. **Use one course to reinforce another** — binary math practice for subnetting = arithmetic practice for digital logic
3. **Cross-referencing improves retention** — when you learn something in one course, immediately ask "where else does this apply?"

## Example: The Probability Chain

```
Probability (MT-335 W3)
  → Bayes Theorem (MT-335 W4)
    → used in AI for Bayesian networks (CS-323)
    → used in Networks for packet loss (CS-327)
  → Random Variables (MT-335 W5)
    → expected value in Architecture performance (CS-328)
    → queuing models in Networks (CS-327)
  → Hypothesis Testing (MT-335 W10)
    → quality metrics in SE (CS-326)
    → A/B testing evaluation in AI (CS-323)
```

## Example: The Calculus Chain

```
Differentiation (Prerequisite)
  → Chain Rule
    → Backpropagation (CS-323 W11) — the single most important math concept
  → Integration
    → Continuous distributions (MT-335 W5-6)
    → Expected value E[X] for continuous RVs
    → Centroid defuzzification (CS-323 W12)
```

## Example: The Graph Chain

```
Graph Data Structures (Prerequisite CS-201)
  → Search: BFS/DFS/A* (CS-323 W2-3)
  → Routing: Dijkstra, Bellman-Ford (CS-327 W9)
  → State machines: FSM control, branch prediction (CS-328 W3, W6)
  → Network topology diagrams (CS-327 Lab)
```

## Why This Matters

Learning connections between courses creates:
1. **Dual encoding** — each memory has two retrieval paths (source course + destination course)
2. **Practical intuition** — seeing the same concept applied in different domains deepens understanding
3. **Spaced repetition** — naturally, because you encounter the concept again in another course context
