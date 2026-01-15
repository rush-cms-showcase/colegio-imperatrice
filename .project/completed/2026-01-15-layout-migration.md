---
title: "Migrate Main Layout from Next.js"
created: 2026-01-15T15:00:00-03:00
last_updated: 2026-01-15T15:00:00-03:00
priority: P1-M
estimated_hours: 4
actual_hours: 0
status: in-progress
blockers: []
tags: [frontend, layout, migration, astro]
---

# Goal
Migrate the visual identity and layout structure (Header, Footer, Global Styles) from the parent Next.js project to the new Astro application.

## Dependencies
- [x] Install UI utils: `clsx`, `tailwind-merge`, `lucide-react` <!-- id: 1 -->
- [x] Install Fonts: `@fontsource/poppins` <!-- id: 2 -->

## Styles
- [x] Copy `globals.css` to `src/styles/global.css` <!-- id: 3 -->
- [x] Update `astro.config.mjs` or `Layout.astro` to import global styles <!-- id: 4 -->

## Components
- [x] Port `WhatsAppFloat` (files: `../src/components/layout/whatsapp-float.tsx`) <!-- id: 5 -->
- [x] Port `SiteHeader` (files: `../src/components/navigation/site-header.tsx`, `menu-list.tsx`) <!-- id: 6 -->
- [x] Create `Footer.astro` (extract from `../src/app/layout.tsx`) <!-- id: 7 -->

## Integration
- [x] Update `src/layouts/Layout.astro` <!-- id: 8 -->
    - [x] Import Fonts <!-- id: 9 -->
    - [x] Include Header (`client:load` if interactive) <!-- id: 10 -->
    - [x] Include Footer <!-- id: 11 -->
    - [x] Include WhatsAppFloat <!-- id: 12 -->

## Verification
- [x] Visual check of Home and inner pages <!-- id: 13 -->
- [x] Check mobile menu responsiveness <!-- id: 14 -->
