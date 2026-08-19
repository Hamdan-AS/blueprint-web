# AI-W11 — NEURAL NETWORKS II: BACKPROPAGATION

- **Week:** 11
- **Dates:** 26 Oct – 01 Nov 2026
- **Rotation:** AI = Course A (Wed + Fri)
- **P0 floor:** fear-killer pack pass + def/formula skim + same-problem drill

---
## Topics

- Multi-layer network; forward pass; MSE loss — `Fear-Killer-Packs.md#AI-W11` Q1
- Backward pass; chain rule; gradient descent; weight update — Q1
- XOR: why a single perceptron fails; hidden layer solves it — Q2
- Vanishing gradient; ReLU; dead ReLU — Q3
- Batch vs SGD vs mini-batch — Q4
- **Source:** `Week-by-Week-Narrative.md` Week 11 (lines 221–241)
---
## P0 floor

- [ ] Fear-killer pack pass — `Fear-Killer-Packs.md#AI-W11` (Q1 full forward+backward pass on 2-2-1 network)
- [ ] Definition/formula skim — `Definition-Book.md` → Backpropagation, Perceptron; `Formula-Book.md` → Backpropagation (forward, loss, chain rule)
- [ ] Same-problem drill — `Numerical-Book.md` n/a; drill: 2-2-1 network hand calculation (forward → loss → backward → update) < 15 min
---
## Deep study A (Wed/Fri — AI is A-slot)

**Pack:** `Fear-Killer-Packs.md#AI-W11` — Q1 first (hardest), then Q2, Q3, Q4.

**Bundled material (index, don't copy):**
- Definitions: `Definition-Book.md` → Backpropagation, Perceptron
- Formulas: `Formula-Book.md` → Backpropagation (all)

**Same-problem drill target:** complete 3-layer backprop hand calc < 15 min; chain-rule order (∂L/∂w = ∂L/∂o × ∂o/∂net × ∂net/∂w) from memory.
---
## Lab 10 — Developing Knowledge-Based Systems • 03-Lab-Breakdowns/04-Expert-Systems.md • Lab-Resources.md (Lab 10 repos)

- [ ] Knowledge base + rules; CLIPS via clipspy or PyKE; forward/backward chaining; animal-classification example (`Week-by-Week-Narrative.md` Week 11 **Lab**)
- [ ] Source: `Lab-Resources.md` Lab 10 block — e.g. `noxdafox/clipspy`, `e-loue/pyke`
---
## Interleaved retrieval

- [ ] 30 min — FOL: convert 5 English sentences to FOL from blank page; resolution refutation; closed book
---
## Ledger

- [ ] AI floor done (P0) — moves nothing to ledger
- [ ] P1/P2 dropped/incomplete — {hours} owed → `Weekly-Ledger.md`

---

**Repeat this backprop hand calc once per week for 3 weeks before finals (W11, W12, W13).**
