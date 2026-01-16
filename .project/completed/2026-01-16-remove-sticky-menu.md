---
title: "Remove Sticky Menu"
created: 2026-01-16T00:55:00-03:00
last_updated: 2026-01-16T00:55:00-03:00
priority: P2-S
estimated_hours: 0.2
actual_hours: 0.2
status: completed
blockers: []
tags: [ui, navigation]
---

# Goal
Remove the sticky positioning and scroll effects from the site header.

# Plan
1. [x] Remove `sticky`, `top-0`, `transition-all` from `<header>`.
2. [x] Remove scroll event listener in `<script>`.
