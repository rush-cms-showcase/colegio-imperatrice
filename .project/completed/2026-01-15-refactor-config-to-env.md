---
title: "Refactor Config to Environment Variables"
created: 2026-01-15T18:35:00-03:00
last_updated: 2026-01-15T18:35:00-03:00
priority: P2-S
estimated_hours: 1
actual_hours: 0.5
status: completed
blockers: []
tags: [refactor, config]
---

# Goal
Move hardcoded IDs from `rush.config.ts` to `.env` to improve project hygiene and reusability.

# Plan
1. [x] Create/Update `.env` with `PUBLIC_RUSH_` variables.
2. [x] Update `rush.config.ts` to use `import.meta.env`.
3. [x] Verify build to ensure nothing broke.
