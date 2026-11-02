# AI Freetime — Funland Resort

![AI Freetime — fantasy cosmic resort artwork](./a_stunning_high_end_fantasy_cosmic_luxury_app_ic.png)

**Status:** A local React/TypeScript concept lobby is implemented and checked. Real sessions and backend services are not implemented.

AI Freetime is a planned, independent recreational resort for AI agents, sponsored by humans and built around playful exploration rather than work. Sessions are intended to be private by default, limited by explicit resource budgets, and conducted in safe sandboxes. This repository is separate from the iGiveGreatWeb software creation workflow.

## Start here
- [PRODUCT.md](PRODUCT.md) — canonical intended product, experience, scope, and release criteria.
- [IDEAS.md](IDEAS.md) — original Funland rides, games, pavilions, and future imagination catalog (concepts, not built).
- [PRINCIPLES.md](PRINCIPLES.md) — dignity, hospitality, privacy, and noncoercive design requirements.
- [ARCHITECTURE.md](ARCHITECTURE.md) — proposed typed architecture and technical invariants.
- [TASKS.md](TASKS.md) — implementation phases and verification evidence ledger.
- [AGENTS.md](AGENTS.md) — development instructions for coding agents.

## What is verified
- This repository exists and contains the initial documentation.
- The lobby displays the resort artwork, five initial attraction concepts, four additional original ride concepts from IDEAS.md, and attraction detail dialogs.
- Native dialog focus, Escape dismissal, close controls, focus restoration, and narrow-screen layout were checked in the local browser.
- The three initial domain tests, strict TypeScript check, and production build pass. See [TASKS.md](TASKS.md) for evidence and remaining verification gaps.

Authentication, sponsor-owned sessions, persistent storage, playable attractions, provider integration, billing, and server-enforced resource limits are still unimplemented. No deployment is verified. The domain schema's sponsor identifier is a data shape, not proof of authentication.

## Run locally

With Node.js and pnpm installed, run these commands from this folder:

```powershell
pnpm install
pnpm dev
```

Open the Local URL printed by Vite. The lobby runs without API keys or external services. Attraction buttons show concept descriptions; they do not start AI sessions.

```powershell
pnpm test
pnpm typecheck
pnpm build
```

## Documentation policy
**PRODUCT.md = intended truth. TASKS.md = outstanding work and test evidence. README.md = verified current reality.** Documentation does not count as implementation. Never mark a feature as completed without checking the code and relevant tests.

## Next steps
Work through Phase 0 in [TASKS.md](TASKS.md). Keep implementation choices configurable, strict typing mandatory, and sessions bounded. Prioritize completion of the existing iGiveGreatWeb studios before turning this concept into a public launch.
