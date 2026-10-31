# ExpireSense

React 19 / Vite site. Use Node.js 22.12 or later.

```sh
npm ci
npm run dev
npm run lint
npm run build
npm run preview
```

The production build creates the browser bundle in `dist/`, builds a temporary server bundle in `dist-ssr/`, and pre-renders all public routes into `dist/` with a generated `sitemap.xml`. Deploy **dist**, using the full `npm run build` command so pre-rendering runs. Vercel detects this script automatically.

The browser hydrates each pre-rendered page. Pages use clean, crawlable URLs; old hash-based links redirect to the matching URL. Secondary routes are code-split. Each page has a title, meta description, and canonical URL, and robots.txt advertises the sitemap. Add public routes to `src/data/sitePages.js` so they are included in pre-rendering and the sitemap. The existing visual design and responsive layouts are retained.

Images have WebP variants with explicit dimensions and responsive AVIF hero sources. The production HTML includes the stylesheet to avoid an extra render-blocking request. Manrope is self-hosted under `public/fonts/` with its license. YouTube mounts as its section approaches the viewport and uses the privacy-enhanced embed domain, retaining the existing player and autoplay behavior. Vercel caches versioned assets and fonts; source maps are emitted for diagnostics.

## Verification

Production build and ESLint must pass. Check both mobile and desktop in Lighthouse against the deployed HTTPS homepage, and verify navigation, mobile menu, calculator, FAQ, and video playback. Scores vary with network, CPU, third-party services, and Lighthouse version. Remaining brand-button contrast requires a visible color change, so the existing colors are retained.
