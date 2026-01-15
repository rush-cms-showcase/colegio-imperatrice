---
title: "Refactor Components to Astro (Zero JS)"
created: 2026-01-15T16:10:00-03:00
last_updated: 2026-01-15T16:10:00-03:00
priority: P1-M
estimated_hours: 1
actual_hours: 0
status: in-progress
tags: [refactor, performance, astro]
---

# Goal
Migrate React (`.tsx`) components to Astro (`.astro`) to ship Zero JavaScript where possible, improving performance.

## Components to Migrate
- [ ] `src/components/layout/top-bar.tsx` -> `src/components/layout/top-bar.astro` <!-- id: 1 -->
    - Contains static links and basic contact info.
    - Can receive `items` as props or fetch internally.
- [ ] `src/components/layout/whatsapp-float.tsx` -> `src/components/layout/whatsapp-float.astro` <!-- id: 2 -->
    - Pure HTML anchor tag.

## Integration
- [ ] Update `src/layouts/layout.astro` to import and use the new `.astro` components. <!-- id: 3 -->
- [ ] Remove `client:*` directives for these components (they will be server-rendered).
- [ ] Cleanup old `.tsx` files.

## Verification
- [ ] Verify build passes. <!-- id: 4 -->
- [ ] Verify visual regression (should look identical).
- [ ] Confirm no JS is loaded for these components in the browser network tab.
