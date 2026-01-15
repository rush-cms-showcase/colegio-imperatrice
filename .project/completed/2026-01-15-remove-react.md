---
title: "Complete Removal of React (Migration to Pure Astro)"
created: 2026-01-15T16:15:00-03:00
last_updated: 2026-01-15T16:25:00-03:00
priority: P1-L
estimated_hours: 2
actual_hours: 0.5
status: completed
tags: [refactor, performance, astro, no-react]
---

# Goal
Remove React entirely from the project to achieve optimal performance and simplicity.

## 1. Migration from TSX to Astro
- [x] `src/components/layout/brand.tsx` -> `src/components/layout/brand.astro`
- [x] `src/components/navigation/site-header.tsx` -> `src/components/navigation/site-header.astro`
    - Implemented mobile menu toggle using Vanilla JS `<script>`.
    - Implemented Sticky Header logic using Vanilla JS.
- [x] `src/components/navigation/menu-list.tsx` -> `src/components/navigation/menu-list.astro`
- [x] `src/components/gallery/masonry-gallery.tsx` -> `src/components/gallery/masonry-gallery.astro`
    - Migrated PhotoSwipe integration to Vanilla JS.

## 2. Integration
- [x] Update `src/layouts/layout.astro` to use new components.
- [x] Update `src/pages/[...slug].astro` to use new components.

## 3. Cleanup & Uninstall
- [x] Delete all `.tsx` files.
- [x] Uninstall React dependencies (`react`, `react-dom`, `@astrojs/react`, `radix-ui`, `lucide-react`, `class-variance-authority`, `clsx`, `tailwind-merge`).
- [x] Remove React integration from `astro.config.mjs`.

## 4. Verification
- [x] Verify Build.
- [x] Verify Mobile Menu logic (JS inline).
- [x] Verify Gallery logic (JS inline).
