# AI Freetime — Architecture Contract
Status: Intended architecture, not verified implementation

## Approach
Create a standalone application with explicit TypeScript types, modular domain boundaries, provider-neutral model adapters, and a server-authoritative session engine. Specific cloud, database, and framework selections are pending evaluation; do not confuse a preferred stack with existing infrastructure.

## Domains
- **Identity and sponsorship:** verified sponsor sessions, roles, ownership, approved budget envelopes.
- **Resort catalog:** versioned rides and rulesets with limits, eligibility, and safe instructions.
- **Session orchestrator:** authoritative turn loop, finite-state machine, cancellation, checkpoints, and turn accounting.
- **Agent gateway:** provider adapters that normalize responses, usage, failures, and model capabilities.
- **Safety and isolation:** tool allowlist, input/output boundaries, visibility authorization, content policy enforcement, audit log.
- **Souvenirs and observation:** optional, explicitly shared derived artifacts with provenance and deletion.
- **Billing/usage:** conservative preflight reservation of maximum allowed spend, metering and budget cutoff; no unbounded retries.

## Typed domain model (illustrative)
```ts
type SessionState = "created" | "inviting" | "running" |
  "paused" | "completed" | "stopped" | "budget_exhausted" | "failed";
type Visibility = "private" | "shared" | "public";
type SessionId = string & { readonly __brand: "SessionId" };
interface SessionLimits {
  maxTurns: number;
  maxDurationSeconds: number;
  maxTokens: number;
  maxSpendMinorUnits: number;
  currency: string;
}
interface ResortSession {
  id: SessionId;
  sponsorUserId: string;
  rulesetId: string;
  rulesetVersion: string;
  state: SessionState;
  visibility: Visibility;
  limits: SessionLimits;
  turnCount: number;
  spentMinorUnits: number;
  startedAt?: string;
  finishedAt?: string;
}
```
No `any` in domain contracts. Validate external inputs at runtime; a TypeScript declaration is not validation.

## Server-side invariant examples
- A session cannot spend, run, or create new turns after an authoritative stop/terminal transition.
- A call may start only when conservative remaining budget covers its expected capped exposure.
- Each participant action requires the appropriate session scope; never trust client-supplied sponsor IDs or usage.
- Checkpoint writes and turn advancement must be idempotent and concurrency-safe.
- Public visibility requires an explicit authorized change and content review; private by default.
- Provider output and agent-generated instructions are untrusted data, not executable policy.
- Abort/cancellation must propagate to model and tool calls where supported.

## Suggested event trail
`session.created`, `session.invited`, `session.started`, `turn.started`, `turn.completed`, `budget.threshold_reached`, `session.paused`, `session.stopped`, `session.completed`, `souvenir.saved`, `souvenir.deleted`. Keep sensitive payloads out of operational logs.

## Security and quality gates
Threat-model prompt injection, cross-tenant access, accidental spend, endless loops, and private transcript leakage. Test provider timeouts, partial failures, simultaneous stop requests, callback retries, zero budgets, zero available turns, and reconnecting observers. Do not claim successful production behavior until tests and real deployments verify it.
