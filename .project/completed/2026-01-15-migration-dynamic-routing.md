---
title: "Migrate to Dynamic Routing with Rush Config"
created: 2026-01-15T13:56:00-03:00
last_updated: 2026-01-15T13:56:00-03:00
priority: P1-M
estimated_hours: 8
actual_hours: 0
status: completed
blockers: []
tags: [astro, migration, routing]
---

# Goal
Migrate the `imperatrice` project to use `rush.config.ts` for dynamic routing, replacing file-based routing with a data-driven approach. Port the client SDK logic from the `rafhael` reference project.

## Dependencies & Setup
- [x] Install React, TailwindCSS v4, and types
- [x] Configure `astro.config.mjs` (Tailwind, React)

## Core Library Implementation
- [x] Port `src/lib/client` (Custom Rush Client) from `rafhael`
- [x] Port `src/lib/rush.ts` (Instance configuration)

## Dynamic Routing Implementation
- [x] Create `src/pages/[...slug].astro`
- [x] Implement `getStaticPaths` logic reading from `rush.config.ts`
- [x] Implement data fetching for `getStaticPaths` (Collection Lists + Single Entries)

## Page Rendering
- [x] Create basic Layout (`src/layouts/Layout.astro`)
- [x] Implement basic view for "List" (Archive)
- [x] Implement basic view for "Entry" (Single)

## Verification
- [x] Run `astro build` to verify route generation
- [x] Check generated HTML for `/blog`, `/eventos`, `/`
