---
title: "Performance Optimization (LCP)"
created: 2026-01-15T18:50:00-03:00
last_updated: 2026-01-15T18:50:00-03:00
priority: P1-M
estimated_hours: 1
actual_hours: 0.5
status: completed
blockers: []
tags: [performance, lcp, astro]
---

# Goal
Improve Core Web Vitals, specifically LCP, by optimizing the Hero image loading strategy.

# Finding
- The hero image in `src/components/home/hero-section.astro` is using default loading behavior.

# Plan
1. [x] Add `loading="eager"` and `fetchpriority="high"` to the Hero Image.
2. [x] Verify build.
