# Instructions for Coding Agents

Read PRODUCT.md, PRINCIPLES.md, ARCHITECTURE.md, and TASKS.md before changing code.

PRODUCT.md describes what must eventually exist, not what already exists. Implement against that contract without silently changing product purpose. TASKS.md tracks work and verifiable evidence. README.md may describe features only after the corresponding implementation has been checked. Keep intentional gaps explicit.

Use strict TypeScript domain contracts, runtime validation at trust boundaries, least-privilege isolation, server-enforced spending/turn/time caps, and tests for every security-sensitive transition.

Do not introduce productivity quotas, forced creative output, unbounded autonomous loops, secret-bearing tool access, automatic sharing of transcripts, hardcoded vendor/model identities, or external production-project access.

Prefer small cohesive changes and direct commits per the repository owner's workflow; do not create PRs or preview environments by default. Never mark tasks verified because the UI resembles the design. Preserve privacy and dignity in both language and behavior.
