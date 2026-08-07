# Weekly Schedule — Day-Stack

> **Supersedes the circadian clock template.** Study blocks have **no fixed clock times**.
> Only two clock anchors exist: **class window (08:00–17:00, blocked)** and **sleep (22:30–07:00)**.
> You start the day-stack whenever you are free (before 08:00, after 17:00, weekends).

## Hard Anchors

| Anchor | Time | Rule |
|---|---|---|
| Class window | 08:00–17:00 | Blocked — no study blocks scheduled here; lecture/lab time |
| Sleep | 22:30–07:00 | Non-negotiable, primary performance enhancer |
| Exercise | Daily, ~40 min | When free (morning or evening); non-negotiable |
| Phone | Outside study room | During any stack block |

Everything else is a **stack**: an ordered list of blocks, each with a priority and a duration, processed top-down whenever free time opens.

## Weekly Rotation (2 courses/day)

A = **harder of the pair** (fresh brain first). Difficulty is fixed per course (CA 5/5 > AI 4/5 > CCN 3.5/5 > PS 3/5 > SE 2.5/5), so A/B is **static** per day — the pair list order repeats (Mon/Tue, Wed/Thu/Fri) but the harder course is always A.

| Day | Course A (harder) | Course B | Course-slot profile |
|---|---|---|---|
| Mon | CA | PS | CA = A |
| Tue | CA | PS | CA = A again; PS = B twice |
| Wed | AI | CCN | AI = A |
| Thu | CCN | SE | CCN = A (its only A slot) |
| Fri | AI | SE | AI = A again |
| Sat | — | — | Labs (repos) + evening off |
| Sun | — | — | Light review + **ledger catch-up** |

Per-week A-slots: CA 2 · AI 2 · CCN 1 · PS 0 · SE 0. Per-week B-slots: PS 2 · SE 2 · CA 2 · AI 0 · CCN 1.
Tie-break for A when loads are equal: nearest upcoming assessment, else alphabetical by code.

## The Day-Stack (≈4.8 h)

| # | Block | Duration | Priority | On drop |
|---|---|---|---|---|
| 1 | Review today's lecture copies → flag 3 unclear items → **Master Error Log** | 25 min | P0 | NEVER drops |
| 2 | Deep study **A** — hardest of pair, fear-killer pack + bundled books | 55 min | P0 | NEVER drops |
| 3 | Same-problem drill A — one type until speed target (<15 min / <30 s) | 40 min | P0 | NEVER drops |
| 4 | Deep study **B** — fear-killer pack (second course) | 55 min | P1 | → weekly ledger |
| 5 | Interleaved retrieval (topics from 1/2/4 weeks ago) | 30 min | P1 | → weekly ledger |
| 6 | Power nap | 20 min | P2 | → weekly ledger |
| 7 | Blank-page retrieval of today's content | 30 min | P2 | → weekly ledger |
| 8 | Buffer + plan tomorrow | 20 min | P2 | → weekly ledger |

**Truncation rule:** on a short day, blocks drop **bottom-up** (P2 first, then P1). Blocks 1–3 (P0) are the irreducible floor — a short day always preserves *review → one deep study → same-problem drill*. Anything dropped or unfinished enters the **weekly ledger** (see `Weekly-Ledger.md`).

## Weekly Variants

### Normal week (W1–W7, W10–W14)
Full 8-block stack Mon–Fri; Sat = labs + evening off; Sun = light review + ledger catch-up.

### Midterm exam week (Wk8)
| Day | Stack |
|---|---|
| Mon–Fri | **Exam-day stack:** (1) past-paper run for the exam subject (60 min, P0) → (2) blank-page retrieval of that subject (30 min, P0) → (3) Master Error Log review (20 min, P0). No new deep study. |
| Sat | Off |
| Sun | Ledger catch-up + plan post-midterm |

### Recovery week (Wk9)
**Half-stack** Mon–Fri: blocks 1–4 only (review → deep study A → drill A → deep study B). Block 5+ dropped by default. **Ledger MUST clear to 0 before Sunday night.**

## Rules

- **Caffeine cutoff:** 15:00 daily. Exam-day: 200–400 mg, 45–60 min before exam.
- **Blank-page retrieval only, never re-reading.**
- **Procedural skills** (diagram drawing, subnetting, tracing): time-pressured, overlearning past mastery (target latency, not completion). **Declarative** (theory, defs): elaborative rehearsal, teach aloud.
- **Expanding-interval retrieval:** 1d → 3d → 1wk → 2wk → 4wk per topic (see `04-Revision-Cycles.md`).
- **Friday 18:00 onward:** OFF (earned dopamine milestone).
- **Sunday afternoon:** sleep extension (9–10 h), then light review + ledger closure.
- **Blue light:** Night Mode (1900K) after 19:00; no screens 22:00–07:00.

## Hour Budget (reconciled to day-stack)

Per-course weekly deep-study allocation from the stack (2 course-slots/wk × 55 min study + 40 min drill + 25 min review ≈ **4 h/wk** per course), plus Sunday ledger closure. Supersedes the older phase-based clock hours in `01-Semester-Strategy.md`.
