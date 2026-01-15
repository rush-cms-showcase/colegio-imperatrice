---
title: "Implement 404 and Empty States"
created: 2026-01-15T17:55:00-03:00
last_updated: 2026-01-15T17:55:00-03:00
priority: P2-S
status: completed
tags: [feature, ui, ux]
---

# Goal
Improve user experience by adding a custom 404 page and handling empty states in listing pages.

## Requirements
1.  **Custom 404 Page**:
    - Route: `/404` (Astro handles this for not found routes).
    - Design: Consistent with site theme, helpful message, link back to home.
2.  **Empty Content Warnings**:
    - Pages: `/blog`, `/eventos`, `/destaques`.
    - Logic: If the loop (listing) is empty, display a user-friendly message (e.g., "Nenhum item encontrado no momento.").

## Tasks

- [x] Create `src/pages/404.astro`.
- [x] Update `src/pages/blog/[...page].astro` with empty state check.
- [x] Update `src/pages/eventos/[...page].astro` with empty state check.
- [x] Update `src/pages/destaques/[...page].astro` with empty state check.

## Verification
- [x] Build project to ensure no errors.
- [x] Verify 404 page existence (code check).
- [x] Verify empty checks in listing pages (code check).
