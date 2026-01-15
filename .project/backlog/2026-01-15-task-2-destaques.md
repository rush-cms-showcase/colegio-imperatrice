---
title: "Implement Highlights Listing Page (/destaques)"
created: 2026-01-15T17:35:00-03:00
priority: P2-M
status: backlog
tags: [feature, page, astro, highlights]
---

# Goal
Create the `/destaques` page listing highlights from Collection ID 7.

## Requirements
- URL: `/destaques`.
- Design:
    - Grid: 3 columns.
    - Card: Aspect ratio 4:5 (Instagram style).
    - Content: Title + "Participou de X destaques" (repeater count?).
- Pagination: Yes.

## Tasks
- [ ] Create `src/pages/destaques/[...page].astro`.
- [ ] Fetch items from Collection 7.
- [ ] Implement UI (3 cols, 4:5 ratio).
- [ ] Implement item count logic.
