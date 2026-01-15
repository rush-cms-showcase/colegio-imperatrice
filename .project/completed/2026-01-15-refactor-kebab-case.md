---
title: "Refactor File Naming to Kebab-Case"
created: 2026-01-15T15:00:00-03:00
last_updated: 2026-01-15T15:00:00-03:00
priority: P2-S
estimated_hours: 1
actual_hours: 0
status: completed
blockers: []
tags: [refactor, standards]
---

# Goal
Ensure all file names follow the `kebab-case` convention as per the user's request and project guidelines.

## Files to Rename
- [x] `src/components/gallery/MasonryGallery.tsx` -> `masonry-gallery.tsx` <!-- id: 1 -->
- [x] `src/components/layout/WhatsAppFloat.tsx` -> `whatsapp-float.tsx` <!-- id: 2 -->
- [x] `src/components/layout/Footer.astro` -> `footer.astro` <!-- id: 3 -->
- [x] `src/layouts/Layout.astro` -> `layout.astro` <!-- id: 4 -->

## Updates
- [x] Update imports in `src/pages/[...slug].astro` <!-- id: 5 -->
- [x] Update imports in `src/layouts/layout.astro` (after rename) <!-- id: 6 -->

## Verification
- [x] Run `astro build` to ensure no broken imports <!-- id: 7 -->
