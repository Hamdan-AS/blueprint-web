# Engine Data Contract — SPEC ONLY (no code)

> Defines the boundary between backend (manifests) and engine (future `emit.py`, `today.py`, `state.json`).
> Manifests must be parseable into this contract. Spec only — no implementation here.

---

## 1. Manifest → day-stack (per `emit.py`)

Each teaching week (W1–W14) compiles to a **day-stack** per weekday, ordered top-down:

```
day_stack = [
  {"block": 1, "label": "review",            "course": "<A>", "prio": "P0", "minutes": 25},
  {"block": 2, "label": "deep_study_A",      "course": "<A>", "prio": "P0", "minutes": 55},
  {"block": 3, "label": "drill_A",           "course": "<A>", "prio": "P0", "minutes": 40},
  {"block": 4, "label": "deep_study_B",      "course": "<B>", "prio": "P1", "minutes": 55},
  {"block": 5, "label": "interleaved",       "course": "rev", "prio": "P1", "minutes": 30},
  {"block": 6, "label": "power_nap",         "course": "—",   "prio": "P2", "minutes": 20},
  {"block": 7, "label": "blank_page",        "course": "<A>", "prio": "P2", "minutes": 30},
  {"block": 8, "label": "buffer_plan",       "course": "—",   "prio": "P2", "minutes": 20}
]
```

- `<A>` / `<B>` resolved from rotation (`03-Weekly-Schedule.md`), NOT from the manifest itself.
- `deep_study_A/B` point at a manifest section: `{COURSE}-W{n} → ## Deep study A` etc.
- P0 blocks (1–3) are irreducible; truncation drops bottom-up (P2 → P1), never P0.

## 2. Variants

| Variant | Output |
|---|---|
| `normal` | Full 8-block stack |
| `wk8-exam` | past-paper run (60, P0) → blank-page retrieval (30, P0) → error-log review (20, P0). No deep study / Lab new work. |
| `wk9-recovery` | Blocks 1–4 only. |

## 3. Validation rules (contract-level, engine `semester_pre_run.py`)

| # | Rule | Fail → |
|---|------|--------|
| 1 | Every manifest `{COURSE}-W{n}` has `## P0 floor` with 3 checklist items | error + exit |
| 2 | Every `## Deep study A/B` / `## Lab` ref resolves to an existing flat file anchor | warn + list |
| 3 | Rotation matches `03-Weekly-Schedule.md` (A/B static per pair) | error + exit |
| 4 | PS floor = module-breakdown ref | warn + list |
| 5 | Wk8 = `wk8-exam` variant, Wk9 = `wk9-recovery` | error + exit |
| 6 | No manifest for W15 (final revision) or exam window | informational |
| 7 | Interleaved retrieval block = 30 min | error + exit |

## 4. Deliberately out of scope (engine builds later)

- CLI rendering, ANSI/box output, terminal guards (Tier 6)
- Snapshot rotation / atomic writes (defined, implemented later)
- `sorter.py` (download sorter) — unrelated to manifests
- ID stamping / pack-ID generation — the manifest IDs `{COURSE}-W{n}` are the source; generator only reads them
