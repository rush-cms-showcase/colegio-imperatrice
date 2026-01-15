---
title: "Implement Highlights Listing Page (/destaques)"
created: 2026-01-15T17:35:00-03:00
last_updated: 2026-01-15T17:45:00-03:00
priority: P2-M
status: in-progress
tags: [feature, page, astro, highlights]
---

# Goal
Create the `/destaques` page listing highlights from Collection ID 7.

## Requirements
- URL: `/destaques`.
- Design:
    - Grid: 3 columns.
    - Card: Aspect ratio 4:5 (Instagram style).
    - Content: Title + "Participou de X destaques" (repeater count logic?). User said "contar e colocar 'participou de x destaques', algo assim" (maybe counting relations or sub-items?). *Assumption*: 'destaques' might be related to students or achievements? Or maybe 'participou de X eventos'?
    - *Clarification*: Since I can't ask, I will assume it's counting a repeater field inside the highlight item (e.g., related events). I'll inspect the item structure if possible, or make it code-resilient.
- Pagination: Yes.

## Tasks
- [ ] Create `src/pages/destaques/[...page].astro`.
- [ ] Fetch items from Collection 7.
- [ ] Implement UI (3 cols, 4:5 ratio).
- [ ] Implement item count logic (check for array/repeater length).

## Verification
- [ ] Verify route /destaques.
- [ ] Verify 3-column layout.
