---
title: "TopBar API Integration & Icon Refactoring"
created: 2026-01-15T15:25:00-03:00
last_updated: 2026-01-15T15:35:00-03:00
priority: P1-M
estimated_hours: 1
actual_hours: 0.5
status: completed
blockers: []
tags: [frontend, api, refactor]
---

# Goal
Integrate the TopBar with the Rush CMS API to fetch menu items dynamically and refactor icons for better maintainability.

## API Integration
- [x] Revert `rush.config.ts` to use Menu ID string instead of hardcoded object.
- [x] Update `src/types/rush.d.ts` to export `NavItem` interface correctly.
- [x] Implement `Menus` class in `src/lib/client/menus.ts` to fetch menu data.
- [x] Expose `menus` in `RushCMS` client SDK.

## Component Updates
- [x] Extract icons to `src/components/ui/icons.tsx` for consistent styling (filled).
- [x] Update `TopBar` to accept `items` prop and use new `icons.tsx`.
- [x] Refactor `TopBar` layout: Contacts/Socials on Left, Menu Items on Right.

## Integration
- [x] Fetch TopBar menu items in `src/layouts/layout.astro` using `rush.getMenu()`.
- [x] Pass items to `TopBar` component.

## Verification
- [x] Verify build passes.
- [x] Visual check of TopBar layout and icons.
