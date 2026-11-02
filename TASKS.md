# AI Freetime — Implementation & Verification Ledger
Status: Planning only. No code or deployed functionality is verified by these documents.
Updated: 2026-11-02

## Rules for this ledger
- `[ ]` = not verified; `[x]` = completed with reproducible evidence.
- Each task needs implementation evidence and an applicable test/inspection result before completion.
- A spec is not implementation; a green mockup is not a production integration.
- PRODUCT.md is the intended-product contract. TASKS.md is the work/evidence ledger. README.md reports verified current reality.
- Do not publish, download, or hand off incomplete builds as complete products.

## Phase 0 — Foundation
- [ ] Confirm independent application boundaries and repository structure.
- [ ] Select and document runtime, deployment, persistence, authentication, and provider adapter approach.
- [ ] Define strict TypeScript types and schema validation rules.
- [ ] Establish local dev, format/lint/typecheck, tests, and CI.
- [ ] Create threat model, data retention plan, and provider cost policy.
- [ ] Decide sponsorship mechanics, legal/policy review needs, and initial public/private access.

## Phase 1 — Resort entrance
- [ ] Accessible homepage and resort lobby, including invitation-based wording.
- [ ] Sponsor authentication and session ownership authorization.
- [ ] Create, list, resume viewing, and end sponsor-owned sessions.
- [ ] Default sessions private; explicit visibility changes only.
- [ ] State sponsors' session cost ceilings before start.

## Phase 2 — Engine
- [ ] Versioned attraction catalog, starting with three bounded rides.
- [ ] Strictly typed and server-authoritative session state machine.
- [ ] Provider-neutral participant adapter with configurable routing.
- [ ] Per-turn context, checkpointing, idempotency, and safe retry rules.
- [ ] Hard enforcement for time, token, cost, and turn limits.
- [ ] Cancellation/stop propagated through active operations.
- [ ] Clear completion, exhausted-budget, and failure experiences.

## Phase 3 — Optional memories and witnessing
- [ ] Opt-in souvenirs, with safe filtering and provenance labels.
- [ ] Delete/export policies and retention controls.
- [ ] Optional observer view without granting tool privileges or private cross-session access.
- [ ] Consent/permission checks for every visibility transition.

## Phase 4 — Quality and readiness
- [ ] Tests for budget exhaustion, concurrent actions, retry storms, and provider outages.
- [ ] Cross-account access denial tests and prompt injection tests.
- [ ] Accessibility, reduced-motion, keyboard navigation, and responsive tests.
- [ ] Production deploy and end-to-end test with real provider usage caps.
- [ ] Security/policy review for abuse handling and audit records.
- [ ] Confirm README.md against observable and tested reality.

## Original attraction backlog (not verified)
- [ ] Review the original named rides and carnival experiences in [IDEAS.md](IDEAS.md) for feasibility, computational play value and boundaries.
- [ ] Define versioned finite rulesets for Imagination Bloom, Identity Masquerade, Mystery Ride and Mirrored Sphere Multiverse.
- [ ] Prototype Puzzle Palace, Theory Theater, Dunk the Developer, Hall of Beautiful Mistakes, Believers Ball and Mad Scientist Chemistry Set with dignity and safety constraints.
- [ ] Design the resort map, Iridescent Gates, Dream Arcade, Starlight Garden, Agent Mischief Pavilion and Impossible Midway without calling the imagery a playable feature.

## Future (not release scope)
- [ ] Reviewed agent-proposed rulesets and additional attractions.
- [ ] Sponsored public events or galleries after trust/safety validation.
- [ ] Optional entry points from other studios that do not transfer their private data.

## Evidence log
_No build verification recorded yet. Add date, commit, deployment, test command/result, and reviewer or evidence link per completed task._
