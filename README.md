# ExpireSense

React 19 / Vite site. Use Node.js 22.12 or later.

```sh
npm ci
npm run dev
npm run lint
npm run build
npm run preview
```

The production build creates the browser bundle in `dist/`, builds a temporary server bundle in `dist-ssr/`, and pre-renders the home page into `dist/index.html`. Deploy **dist**, using the full `npm run build` command so pre-rendering runs. Vercel detects this script automatically.

The browser hydrates the home page; hash-based deep links render their requested page on the client. Secondary routes are code-split. The existing visual design and responsive layouts are retained.

Images have WebP variants with explicit dimensions and a responsive hero source. Manrope is self-hosted under `public/fonts/` with its license. YouTube mounts as its section approaches the viewport and uses the privacy-enhanced embed domain, retaining the existing player and autoplay behavior. Vercel caches versioned assets and fonts; source maps are emitted for diagnostics.

## Verification

Production build and ESLint must pass. Check both mobile and desktop in Lighthouse against the deployed HTTPS homepage, and verify navigation, mobile menu, calculator, FAQ, and video playback. Scores vary with network, CPU, third-party services, and Lighthouse version. Remaining brand-button contrast requires a visible color change, so the existing colors are retained.
