---
title: "Refactor Icons to Centralized Library"
created: 2026-01-15T17:05:00-03:00
last_updated: 2026-01-15T17:15:00-03:00
priority: P2-M
estimated_hours: 0.5
actual_hours: 0.25
status: completed
tags: [refactor, ui, astro]
---

# Goal
Centralize SVG icons into a single TypeScript file and use a reusable Astro component to render them, replacing inlined SVGs.

## Tasks
- [x] Create `src/lib/icons.ts` with SVG path data.
- [x] Create `src/components/ui/icon.astro`.
- [x] Refactor Components to use `<Icon />`:
    - [x] `src/components/layout/top-bar.astro`
    - [x] `src/components/layout/whatsapp-float.astro`
    - [x] `src/components/navigation/site-header.astro`
    - [x] `src/components/navigation/menu-list.astro`

## Verification
- [x] Verify all icons render correctly.
- [x] Verify build passes.
