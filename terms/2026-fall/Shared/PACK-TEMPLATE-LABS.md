# PACK-TEMPLATE-LABS — GENERALIZED LABS PACK SPEC (4TH PDF)

> **Purpose:** the reusable skeleton for the **LABS** PDF — the 4th file in lab-course packs (**AI, CCN, SE**). Companion to `PACK-TEMPLATE.md` (NAV/BEFORE-MID/AFTER-MID). CA/PS have **no** LABS file.
>
> **Grounded in the real sources:** the per-lab structure follows `CCN/03-Lab-Breakdowns/*.md` (canonical Goal/Steps/Deliverable/Exam Relevance/Resources shape — e.g. `11-NAT.md`), the group header follows `AI/03-Lab-Breakdowns/*.md` (e.g. `01-ANN-and-ML.md`), the lab→week map follows `Lab-Schedule.md` (AI + CCN), resources follow `Lab-Resources.md`, viva follows `Viva-Book.md` (all three).
>
> **Render + colors:** same `md2pdf.py` absolute-path rule as the core packs. The `colors:` comment tints table rows whose first cell is a **bare integer** → use it on the lab→week map table (Real Week column). Per-lab `## Lab N` headings are not week-tinted (they don't match the `### Wn` pattern); use `h2.pagebreak { page-break-before: always; }` before each lab block if you want one-lab-per-page.

---
## 1 · GENERAL-LABS template

> Copy to `terms/2026-fall/{{COURSE}}/{{COURSE}}-LABS.md`.
---
### 1.1 File header

```
# {{COURSE}}-LABS — {{Course}} ({{CODE}}) — All Labs + Viva

<!-- colors: {{weekMap — reuse the W1–W15 palette from {{COURSE}}-NAV.md}} -->

Weeks 1–15 · 17 Aug – 29 Nov 2026 · **Lab weight {{LAB_WEIGHT}}** · {{LAB_COUNT}} labs · viva {{WALKTHROUGH}}+{{TECHNICAL}} Qs
```

- `{{LAB_COUNT}}`: AI 13 · CCN 14 (+ App A) · SE 13.
- `{{LAB_WEIGHT}}`: AI/CCN ~20% · SE 40% (official) — see specialization notes §2.
---
### 1.2 Course facts block

```
> **Source workbook:** Practical Workbook {{CODE}} (NED UET, Dept. of Computer & Information Systems Engineering{{, prepared by {{…}},}} revised {{MMM YYYY}}).
> **Credits:** 3+1 (3 lectures + 1 lab/week) · **CLO:** "{{CLO text}} ({{cognitive level}}, PLO-{{n}})"
> **Exclusions:** {{Lab 14 (Complex Engineering Activity) excluded | none — all labs + Appendix in scope}}.
> **Ordering note:** {{workbook order vs theory narrative — e.g. AI runs ANN-first ahead of NN theory; CCN matches the narrative W→Lab map; SE has no workbook-driven week order (see §2)}}.
```
---
### 1.3 Lab→week map table

```
| Real Week | Lab(s) | Workbook Lab | Topic Group |
|:---------:|:------:|:------------:|-------------|
| W1 | 1 | {{Lab title}} | {{Group}} |
| … | | | |
| W8 | — | **MIDTERM** — no lab | — |
| … | | | |
| W15 | — | **FINAL** — no lab (lab viva separate slot) | — |
| — | {{App A}} | {{title}} | Reference |   ← only if the workbook has an appendix (CCN)
```

- Source: the course's `Lab-Schedule.md` (AI, CCN). **SE has no `Lab-Schedule.md`** → build this table from `weeks/README.md` project milestones + `Lab-Resources.md` order; mark W8/W15 no-lab rows the same way and note the mapping is derived, not official.
- Merged weeks (CCN W9 = Labs 8+9) keep the combined row.
- Keep a `## Notes` block under the table: exclusion rationale, no-lab weeks, workbook-vs-theory tension, group-breakdown file list, per-lab resource file list (mirror the real `Lab-Schedule.md` notes).
---
### 1.4 Lab-only vs examinable callouts

```
## Exam relevance (lab ↔ theory bridge)

| Lab(s) | Examinable? | Bridge |
|--------|-------------|--------|
| {{Labs}} | ✅ theory-linked | maps to module {{Mx}} → `Fear-Killer-Packs.md` / `Formula-Book.md` |
| {{Labs}} | ❌ lab-only | keep for the lab grade; do not spend theory time |
```

- Values are **per course, from the breakdown files' `Exam Relevance` lines + Lab-Schedule notes** (e.g. CCN: Labs 3/13/14 lab-only, Wireshark TCP/UDP headers examinable, Appendix A = self-study for the subnetting theory topic; AI: ANN labs ↔ NN pillars, GA has **no** lab counterpart).
- Flag every row's source; never invent an examinability claim.
---
### 1.5 Group sections (AI-style grouping)

Use only when the breakdown files are organized by group (AI does this; CCN is flat).

```
# Lab Group: {{Name}} (Labs {{a}}–{{b}})

Source: {{workbook ref}}. CLO: "{{CLO}}"   ← repeat once per group file

## Lab {{N}} — {{Title}}
…
```
---
### 1.6 Per-lab block (canonical shape)

One block per lab; this is the shape CCN uses and the target to normalize AI/SE into.

```
## Lab {{N}} — {{Title}}

**Goal:** {{one-line intent}}

**Steps:**
- {{config / command / action}}
- {{…}}

**Deliverable:** {{observable output — what "done" looks like}}

**Exam Relevance:** {{module mapping + theory link}} — `Fear-Killer-Packs.md` ({{ref}}). {{lab-only → say so}}

**Resources:** `{{COURSE}}/Lab-Resources.md` → Lab {{N}}
```

- AI source stores exam relevance at **group** level (one `## Exam Relevance` per group file) — merge it into each lab's block or keep one group-level block; pick one and stay consistent.
- SE has **no per-lab breakdown files** → build Goal/Steps/Deliverable from `Lab-Resources.md` titles + `weeks/README.md` milestone descriptions; Exam Relevance = the theory topic the lab exercises (DFD, COCOMO, cyclomatic complexity, design patterns). Mark it `(derived — no 03-Lab-Breakdowns source)`.
---
### 1.7 Appendix block (CCN-style)

```
## Appendix — {{Title}} (reference)

**Status:** self-study reference — {{not a graded lab session; maps to theory topic Mx}}.
{{worked formulas / tables / links to Lab-Resources.md → Appendix}}
```
---
### 1.8 Viva section

```
## Viva — {{Course}} ({{CODE}})

### Project Walkthrough (3 min)
1. {{Q}} …
…   ← embed verbatim from `Viva-Book.md` ({{WALKTHROUGH}} questions)

### Technical Questions
{{N+1}}. {{Q}} …
…   ← embed verbatim from `Viva-Book.md` ({{TECHNICAL}} questions)
```

- Counts per course: **AI 5+10 · CCN 5+17 · SE 7+10** (verified from each `Viva-Book.md`). Embed verbatim — never paraphrase viva questions.
---
### 1.9 Render + colors notes

- Map table rows tint by Real Week (bare integers 1–15) using the course NAV palette; W8/W15 rows use the exam red.
- Optional: `h2.pagebreak` before each `## Lab N` block for one-lab-per-page.
- Render: `python3 /home/elite/sandbox/third-yr-fall-blueprint/tools/md2pdf.py <abs-in.md> -o <abs-out.pdf>`.

---
## 2 · Specialization checklist (per course)

1. **Copy** §1 → `{{COURSE}}-LABS.md` and fill placeholders from:
   - `Lab-Schedule.md` (map table + notes) — AI, CCN
   - `03-Lab-Breakdowns/*.md` (per-lab blocks + group headers) — AI, CCN
   - `Lab-Resources.md` (Resources lines) — AI, CCN, SE
   - `Viva-Book.md` (viva, verbatim) — AI, CCN, SE
   - `01-Course-Overview.md` + `Marks-Allocation.md` (lab weight)
2. **AI (CS-323):** 13 labs (Lab 14 CEA **excluded**); workbook **ANN-first** (W1–5) runs ahead of NN theory (W10–11) — note it, don't fix it; GA has no lab counterpart (theory pillar only); groups ANN/ML(1–5) · Searching(6–7) · CSP(8–9) · Expert Systems(10–12) · Fuzzy(13); W8/W15 no lab; viva 5+10; CLO "Demonstrate the use of modern tools and techniques for developing intelligent systems. (C3, PLO-3)".
3. **CCN (CS-327):** 14 labs + Appendix A (in scope; App A = **reference**); W8 no lab (Sat `off`); **Labs 8+9 merge into W9**; lab-only labs 3/13/14 (per official syllabus); Wireshark TCP/UDP headers examinable (M11); App A = self-study for subnetting theory (highest-ROI final topic); groups Basic Config(1–3) · Routing & ACLs(4–8) · Switching(9–10) · Advanced(11–14) · Reference(App A); viva 5+17; CLO "practice configuration and troubleshooting of computer networks using modern tools (C3, guided-response psychomotor, Modern Tool Usage)".
4. **SE (CS-326):** 13 labs (Lab 14 **excluded** per AI precedent); **no `Lab-Schedule.md`, no `03-Lab-Breakdowns/`, no `02-Official-Syllabus.md`** — derive map + blocks from `Lab-Resources.md` (13 titles) + `weeks/README.md` milestones, mark everything `(derived)`, never fabricate; groups Documentation(1) · Project Management(2) · UML Modeling(3–6) · Design Patterns(7) · Testing(8) · Agile/Scrum(9–11) · Version Control(12–13); **lab weight 40% official** (vs study-effort ~20% in `Marks-Allocation.md` — label both); viva 7+10.
5. **Lab weight conflict resolution** (recorded once, in the course `Marks-Allocation.md` or `weeks/README.md`): AI 20-vs-30, CCN 20-vs-30, SE 20-vs-40 — pick the canonical number and annotate the deferring file.
6. **Render** (absolute-path md2pdf), verify the map table tints and each lab block renders; confirm viva matches `Viva-Book.md` verbatim.
