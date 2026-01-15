---
status: accepted
date: 2026-01-15
deciders: [rafhael, antigravity]
consulted: []
informed: []
---

# Adoption of unplugin-icons

## Context and Problem
The project was using individual `.astro` components containing inline SVGs or raw `.svg` files for icons. This resulted in:
1.  **Manual Maintenance**: Need to copy/paste SVGs for every new icon.
2.  **Inconsistency**: Different icon sources and styles.
3.  **Boilerplate**: Creation of multiple files for simple functionality.
4.  **Performance**: Loading of non-optimized SVGs.

## Decision
We adopted the **`unplugin-icons`** library in conjunction with **Iconify** datasets (specifically `lucide` and `fa-brands`).

## Rationale (Why unplugin-icons?)
1.  **On-demand**: The compiler generates only the icons actually used in the project.
2.  **Zero Runtime**: Icons are compiled as functional components at build time, with no extra client-side JS overhead for fetching.
3.  **Agnostic**: Works well with Astro (via Vite integration).
4.  **Standardization**: Access to industry-standard libraries (Lucide, FontAwesome, Material) with a single syntax.
5.  **Flexibility**: Natively supports `currentColor` and CSS class props.

## Advantages
- **DX (Developer Experience)**: Trivial icon import (`import Icon from '~icons/set/name'`) without creating files.
- **Cleanliness**: Removal of `src/icons` and `src/assets/icons` folders full of loose files.
- **Bundle Size**: Automatic tree-shaking guaranteed by the plugin.

## Challenges and Resolutions
- **Astro Config**: There was an initial conflict with the Astro compiler (`panic: html: bad parser state`), resolved by ensuring correct structure of `.astro` components (restoring missing fences `---` that caused parsing errors when injecting the plugin).
- **TypeScript**: Necessary to add `/// <reference types="unplugin-icons/types/astro" />` in `env.d.ts` for VS Code to recognize virtual imports.

## Consequences
- From now on, new icons must be imported directly via `~icons/...`.
- We should not create `.astro` components for simple icon wrappers unless there is business logic attached.
