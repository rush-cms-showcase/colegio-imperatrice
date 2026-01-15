---
title: "Refactor to Standard Icon Sets"
created: 2026-01-15T17:15:00-03:00
last_updated: 2026-01-15T17:25:00-03:00
priority: P2-M
estimated_hours: 0.5
actual_hours: 0.5
status: completed
tags: [refactor, icons, unplugin-icons]
---

# Goal
Switch from custom SVGs to standard icon sets (Lucide, FontAwesome) using `unplugin-icons`.

## Tasks
- [x] Install `@iconify/json` and `unplugin-icons`. <!-- id: 1 -->
- [x] Update `astro.config.mjs` (compiler: 'astro'). <!-- id: 2 -->
- [x] Refactor imports in components to use standard icons: <!-- id: 3 -->
    - [x] `Phone`, `Mail` -> `~icons/lucide/phone`, `~icons/lucide/mail`
    - [x] `WhatsApp`, `Facebook`, `Instagram` -> `~icons/fa-brands/...`
    - [x] `Menu`, `X`, `Chevron` -> `~icons/lucide/...`
- [x] Delete `src/assets/icons` and `src/icons/`. <!-- id: 4 -->

## Verification
- [x] Verify build passes.
- [x] Verify icons look correct.
