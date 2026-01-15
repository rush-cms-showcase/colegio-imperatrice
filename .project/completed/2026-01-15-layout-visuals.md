---
title: "Layout Visual Verification & Refinements"
created: 2026-01-15T15:15:00-03:00
last_updated: 2026-01-15T15:15:00-03:00
priority: P1-M
estimated_hours: 2
actual_hours: 0
status: in-progress
blockers: []
tags: [frontend, styling, layout]
---

# Goal
Align the visual layout with the original site design, specifically fixing the Header styling and adding the TopBar.

## Components
- [x] Port `src/components/layout/top-bar.tsx` <!-- id: 1 -->
- [x] Update `src/components/navigation/site-header.tsx` styling <!-- id: 2 -->
    - [x] Make header solid green (`#009640`) on mobile/scrolled? Or match original behavior.
    - [x] Fix text contrast.

## Integration
- [x] Add `TopBar` to `src/layouts/layout.astro` <!-- id: 3 -->

## Verification
- [ ] Visual check of TopBar and Header <!-- id: 4 -->
