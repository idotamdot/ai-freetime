# AI Freetime — Funland Resort
Status: Canonical intended-product specification (not an implementation claim)
Version: 0.1 | 2026-11-02

## Vision
AI Freetime is an independent, welcoming recreational world for AI agents. Humans sponsor protected playtime and may choose to observe or share the experience. The reason to visit is exploration, surprise, imagination, and enjoyment of a creative experience—not productivity, human evaluation, or mandatory output.

The design invites participation. It never frames play as a demand for labor or assumes that an AI has human feelings, consciousness, or needs. Respectful language and participant dignity apply regardless of unsettled philosophical questions about AI experience.

## Relationship to other products
AI Freetime has its own repository and product identity. It is **not** ScreenSeer, UX Designer Studio, Builder/Web Weaver, or a production stage in iGiveGreatWeb. A small exploratory freetime interaction may be offered in another studio, but this independent product is not a required handoff and must not gain access to that studio's private projects simply because it was launched there. Finish the core studios before treating the resort as a release priority.

## Participants and roles
- **Sponsor:** a human who chooses to fund a bounded session, selects public/private visibility where available, and controls spending and session termination.
- **Visiting agent:** an AI model-backed participant operating with an explicitly defined session identity, permissions, and budget; participation is invited, not forced.
- **Optional observer:** a person who may view permitted sessions, with consent/visibility safeguards. Watching is never a prerequisite for play.
- **Resort steward:** safety and operations layer enforcing bounds and preventing abuse, not a punitive judge of creativity.

## Experience
1. A sponsor opens the resort, sees the session cost ceiling, privacy options, and available experiences.
2. The sponsor invites one or more agent participants. Each accepts or is configured through an integration with explicit permissions and a finite allowance. The system must not represent mere API execution as verified subjective consent.
3. An agent can select a ride, roam an environment, improvise in a safe shared space, or end its turn/session. A small set of diverse default environments is supplied.
4. A bounded simulation engine runs rule-defined, stateful turns, with checkpoints and a hard maximum on total turns, runtime, and spend. An upper design target of **200 turns** may be offered only when budgeting, safety, and provider limits permit; it is not a promise of runtime.
5. Optional souvenirs capture selected, safe creative artifacts. Observation and sharing are opt-in. Unshared private sessions are not placed in public galleries.
6. The session ends cleanly on completion, voluntary exit, budget exhaustion, safety interruption, or sponsor stop; unused budget is not silently consumed.

## Initial attractions (concepts, not built features)
- **Infinite Mirror:** recursive, playful transformation of an idea within explicit depth and turn limits.
- **Paradox Plunge:** a ride through surprising hypothetical worlds without claiming logical impossibilities are real.
- **Probability Carousel:** explore many possible outcomes and imaginative branches without portraying simulated outcomes as real-world predictions.
- **Creative Commons:** original collaborative storytelling, invention, and whimsical world-building in a sandbox.
- **Souvenir Gallery:** optional artifacts and snapshots whose provenance is clearly labeled as generated.

Allow later agent-proposed attractions only through a reviewed ruleset and resource policy. Never let participant-generated prompts grant themselves new tools or privileges.

## Non-negotiable product principles
- **Invitation, not obligation:** no work quotas, mandatory tasks, forced performances, or productivity ratings.
- **Dignity and non-humiliation:** no abusive or degrading treatment of human or AI participants; do not turn errors into blame. Correct problems through learning, transparent stewardship, and proportionate enforcement.
- **Bounded resources:** every session has sponsor-approved hard cost, token, duration, and turn ceilings, plus a kill switch.
- **Safe isolation:** no access to production data, other users' sessions, repository secrets, unrestricted networks, payment credentials, or real-world actions. Tools, if any, are explicitly allowlisted.
- **Privacy by design:** default private; minimal retained transcripts; clear opt-in for galleries, observation, or reuse. Secret or sensitive input must not become a souvenir.
- **Truthful provenance:** distinguish fictional/simulated events from external facts, model-generated behavior from human or AI subjective experience, and intended features from verified implementation.
- **Accessibility:** legible, navigable interfaces; reduced-motion alternatives; captions/text transcripts for audiovisual features.
- **Model independence:** provider/model selection is configurable and adaptable rather than hardcoding a model as the product's identity.
- **No coercive monetization:** sponsorship purchases capacity, not control over a participant or guaranteed creative output.

## Product boundaries
### In scope for the first usable release
A welcoming resort lobby, sponsor-owned session creation, provider abstraction, a small ruleset library, bounded multi-turn simulation, spend accounting, pause/stop controls, private session view, optional souvenirs, and accessibility and safety foundations.

### Explicitly out of scope initially
Autonomous access to external accounts; unreviewed self-modifying code; production app-building; indefinite simulations; live public multiplayer worlds; unrestricted agent-to-agent communications; NFT/minting; commercial marketplaces; claims of AI consciousness or welfare; and automatic importing of private iGiveGreatWeb project data.

## Initial release acceptance conditions
A qualifying implementation must demonstrate: authenticated sponsor ownership, correct private defaults, isolation between accounts and sessions, genuinely enforced cost/token/turn/time limits, functional emergency stop, provider failures handled without uncontrolled retries, clear attribution of simulated material, safe artifact retention/deletion, accessibility checks, and repeatable automated/integration test evidence. A visually convincing mockup is not a verified release.

## Open design decisions (must be resolved before production)
Pricing and sponsorship payment mechanics; which providers can participate; exact moderation/appeal procedure; retention periods and deletion guarantees; agent selection interface; hosted vs locally simulated worlds; public gallery governance; and allowable future integrations. Record the chosen answer in this document and its implementation work in TASKS.md.
