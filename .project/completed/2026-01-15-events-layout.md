---
title: "Implement Events Layout (Masonry + Lightbox)"
created: 2026-01-15T14:15:00-03:00
last_updated: 2026-01-15T14:15:00-03:00
priority: P1-M
estimated_hours: 4
actual_hours: 0
status: in-progress
blockers: []
tags: [frontend, gallery, photoswipe, astro]
---

# Goal
Create a specialized layout for the "Events" (`/eventos`) route that features a Masonry grid for images and a full-screen, dark-themed Lightbox (PhotoSwipe).

## Dependencies
- [x] Install `photoswipe` <!-- id: 1 -->

## Components
- [x] Create `src/components/gallery/MasonryGallery.tsx` <!-- id: 2 -->
    - [x] Implement Masonry layout (CSS columns or Grid) <!-- id: 3 -->
    - [x] Integrate PhotoSwipe Lightbox <!-- id: 4 -->
    - [x] Ensure "dark mode" backdrop and navigation <!-- id: 5 -->

## Integration
- [x] Update `src/pages/[...slug].astro` <!-- id: 6 -->
    - [x] Detect if current route is `/eventos` (ID 6) <!-- id: 7 -->
    - [x] Conditionally render `MasonryGallery` for the entry view <!-- id: 8 -->
    - [x] Pass `entry.images` to the gallery component <!-- id: 9 -->

## Styling
- [x] Ensure full-width modal and centered images <!-- id: 10 -->
- [x] Verify responsiveness <!-- id: 11 -->

## Verification
- [x] Build and verify `/eventos/[slug]` renders the gallery <!-- id: 12 -->
