---
status: accepted
date: 2026-01-15
deciders: [rafhael, antigravity]
consulted: []
informed: []
---

# Migration to Astro SSG from Next.js

## Context
The project was previously built using **Next.js**, a powerful React framework designed for complex, dynamic web applications. While Next.js offers robust features like Server-Side Rendering (SSR), Incremental Static Regeneration (ISR), and React Server Components (RSC), it introduces significant runtime complexity and infrastructure requirements (Node.js servers).

The site in question — *Colégio Imperatrice* — is primarily an **institutional and content-driven website**. Its core function is to display static information (methodology, history) and content managed via **Rush CMS** (blogs, events, highlights). The content updates are frequent but not real-time (e.g., they don't require the sub-second freshness of a stock ticker).

Rush CMS provides a "Trigger Deploy" mechanism (webhooks), which arguably favors an atomic, immutable deployment model over the complex caching strategies required by Next.js ISR.

## Decision
We have decided to purposefuly **abandon Next.js** and **migrate the entire frontend architecture to Astro**, utilizing a pure **Static Site Generation (SSG)** strategy.

## Detailed Rationale

### 1. Performance: The "Zero JavaScript" Baseline
Next.js inherently ships a React runtime bundle to the client to "hydrate" the page, even for purely static content. This results in a baseline Total Blocking Time (TBT) and Time to Interactive (TTI) penalty, regardless of optimization.

**Astro**, conversely, follows an **"Islands Architecture"**. It ships **zero JavaScript** by default. HTML is pre-rendered at build time and served as static assets. Interactivity is opted-in only where strictly necessary (e.g., a specific carousel or mobile menu) using vanilla JS or isolated UI framework components.
*   **Impact**: drastically faster First Contentful Paint (FCP) and near-perfect Lighthouse performance scores out of the box.

### 2. Infrastructure & Cost Efficiency (The "Static Advantage")
Next.js (especially with SSR/ISR) requires a **Node.js runtime environment** (or Serverless Functions infrastructure like Vercel/AWS Lambda). This introduces:
*   **Cold Starts**: Latency spikes when functions spin up.
*   **Server Maintenance/Cost**: Running containers or paying for compute time.
*   **Security Surface**: An active server can be an attack vector.

Astro SSG produces a folder of `.html`, `.css`, and `.js` files (`dist/`).
*   **Deployment**: These files can be hosted on **any CDN** (Cloudflare Pages, AWS S3 + CloudFront, Nginx static block) for pennies.
*   **Scalability**: CDNs handle traffic spikes effortlessly without the need to scale Node.js instances.
*   **Reliability**: A static file cannot "crash". It is immutable.

### 3. operational Synergy with Rush CMS
Rush CMS exposes a "Deploy" button that triggers a webhook. This aligns perfectly with the **Atomic Deployment** model of SSG:
1.  Content editor publishes an article in Rush CMS.
2.  Editor clicks "Deploy".
3.  Webhook triggers the CI/CD pipeline.
4.  Astro rebuilds the site (fetching all data from Rush CMS at build time).
5.  The new static build replaces the old one.

**Why this is better than Next.js ISR for this project:**
Next.js ISR (Incremental Static Regeneration) is complex. It involves stale-while-revalidate strategies, shared caches, and potential consistency issues where users might see outdated content depending on which edge node hits the cache.
The **Atomic SSG** model is deterministic. What is in the build is what is live. If the build passes, the site is healthy. It eliminates an entire class of "caching bugs" and runtime data-fetching errors.

### 4. Reduced Complexity & Cognitive Load
*   **No Middleware**: We don't need complex middleware to handle routing or headers dynamically.
*   **No `useEffect` Chains**: Data is fetched simply using top-level `await` in Astro frontmatter. The mental model is "Template + Data = HTML".
*   **Simplified Styling**: Astro's scoped styling or Tailwind integration is straightforward without CSS-in-JS runtime overhead.

### 5. Future-Proofing
By decoupling the view layer from a specific heavy runtime (React), we avoid vendor lock-in to Vercel-specific features (like Next.js Image Optimization dependencies or Middleware specifics). The output is standard HTML/CSS, the universal language of the web.

## Consequences

### Positive
*   **Performance**: Immediate improvement in Core Web Vitals (LCP, CLS, INP).
*   **Hosting Agnosticism**: We can move the site to any host that serves static files.
*   **Developer Experience**: Simpler debugging. If data is wrong, the build fails (safeguard). No runtime crashes for users.

### Negative / Mitigations
*   **Build Times**: The site must rebuild for every content update.
    *   *Mitigation*: Astro is extremely fast (powered by Vite). For a site of this size (< 1000 pages), builds are negligible (seconds to minutes).
*   **Dynamic Features**: Real-time features (like "Live Search") require client-side fetching.
    *   *Mitigation*: We can implement these easily with "Islands" (e.g., a React component for Search) that fetches from an API endpoint, keeping the rest of the page static.

## Conclusion
Migrating to Astro SSG is the optimal architectural choice for *Colégio Imperatrice*. It maximizes performance and stability while minimizing cost and operational complexity, perfectly leveraging the deployment capabilities of Rush CMS.
