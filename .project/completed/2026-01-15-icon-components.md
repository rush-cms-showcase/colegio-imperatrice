---
title: "Refactor Icons to Component Files"
created: 2026-01-15T17:20:00-03:00
last_updated: 2026-01-15T17:25:00-03:00
priority: P2-M
estimated_hours: 0.5
actual_hours: 0.25
status: completed
tags: [refactor, ui, astro, icons]
---

# Goal
Refactor icons to be individual Astro components for cleaner imports and direct usage, as requested.

## Tasks
- [x] Create `src/icons/*.astro` files for each icon.
- [x] Refactor Components to import specific icons:
    - [x] `src/components/layout/top-bar.astro`
    - [x] `src/components/layout/whatsapp-float.astro`
    - [x] `src/components/navigation/site-header.astro`
    - [x] `src/components/navigation/menu-list.astro`
- [x] Remove `src/lib/icons.ts` and `src/components/ui/icon.astro`.

## Verification
- [x] Verify imports are working.
- [x] Verify build passes.
