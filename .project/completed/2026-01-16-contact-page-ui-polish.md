---
title: "Contact Page UI Polish"
created: 2026-01-15T21:50:00-03:00
last_updated: 2026-01-15T21:50:00-03:00
priority: P1-S
estimated_hours: 0.5
actual_hours: 0.5
status: completed
blockers: []
tags: [ui, astro, react]
---

# Goal
Fix styling issues on the Contact Page.

# Finding
- User reported missing styles and wrong button color.
- Suspect `className` was used instead of `class` in `contato.astro`.
- Button is blue, user wants green.

# Plan
1. [x] Rename `className` to `class` in `src/pages/contato.astro`.
2. [x] Change button `bg-blue-600` to `bg-[#009640]` (or primary) in `src/components/contact-form.tsx`.
3. [x] Verify margin/spacing.
