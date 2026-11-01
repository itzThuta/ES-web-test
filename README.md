<p align="center">
  <a href="https://www.expiresense.com/"><img src="src/assets/logo.webp" alt="ExpireSense logo" width="120" /></a>
</p>

<h1 align="center">ExpireSense</h1>

<p align="center"><strong>Smarter kitchens. Less waste.</strong><br />Make the most of every ingredient, from purchase to plate.</p>

<p align="center">
  <a href="https://www.expiresense.com/">Website</a> ·
  <a href="https://www.expiresense.com/features">Explore features</a> ·
  <a href="https://www.expiresense.com/contact">Book a demo</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white" alt="Vite 7" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4" />
</p>

---

## 🌱 What is ExpireSense?

ExpireSense helps households and kitchen teams reduce food waste, save money, and keep track of the food they already have. We bring receipt scanning, pantry inventory, expiry predictions, freshness reminders, and recipe suggestions together so people can decide what to use next.

From home kitchens to restaurants, hotels, and campuses, our mission is to make everyday food management simpler and more sustainable.

**This repository powers the public ExpireSense website:** product information, company stories, FAQs, a savings calculator, and ways to connect with our team. The capabilities below introduce the product; this codebase contains its marketing website.

## ✨ From groceries to better decisions

| Capability | How it helps |
| --- | --- |
| **Receipt scanning** | Turn grocery receipts into an inventory without entering every item by hand. |
| **Pantry tracking** | See what is available and keep your kitchen organized. |
| **Expiry predictions & reminders** | Plan around estimated freshness and get reminders about items needing attention. |
| **Visual freshness timeline** | Identify what is fresh, what to use today, and what is nearing expiry. |
| **Recipe suggestions** | Find meal ideas that put existing ingredients to use. |
| **Shared insights** | Help teams understand waste, savings, and sustainability impact. |

**The journey:** capture groceries → track freshness → cook, freeze, or donate → learn from what you save.

Learn more on our [features page](https://www.expiresense.com/features) or [estimate your potential savings](https://www.expiresense.com/saving-calculator).

## 🌍 Connect with ExpireSense

Follow our product updates, food-waste tips, and startup journey.

<p align="center">
  <a href="https://www.linkedin.com/company/expiresense/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge" alt="Follow ExpireSense on LinkedIn" /></a>
  <a href="https://www.instagram.com/expiresense"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Follow ExpireSense on Instagram" /></a>
  <a href="https://www.facebook.com/share/19akE2JQY7/?mibextid=wwXIfr"><img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white" alt="Follow ExpireSense on Facebook" /></a>
  <a href="https://www.youtube.com/@ExpireSense"><img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="Watch ExpireSense on YouTube" /></a>
  <a href="https://x.com/ExpireSense"><img src="https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white" alt="Follow ExpireSense on X" /></a>
</p>

🎬 [Watch our Startup Grind Bangkok vlog](https://www.youtube.com/watch?v=UGZtHesAmzE).

Based in **Bangkok, Thailand**. For demos, partnerships, or questions, [contact our team](https://www.expiresense.com/contact).

## 🛠️ Run the website locally

Use **Node.js 22.12 or later** and npm.

```sh
git clone https://github.com/itzThuta/ES-web-test.git
cd ES-web-test
npm ci
npm run dev
```

Open the local URL printed by Vite.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server with hot reloading. |
| `npm run lint` | Run ESLint. |
| `npm run build` | Build browser and server bundles, pre-render public pages, and generate the sitemap. |
| `npm run preview` | Preview the production build locally after building. |

### Stack & project layout

Built with **React 19**, **Vite 7**, **Tailwind CSS 4**, and **React Router 7**, with Framer Motion, Swiper, and React Icons for the interface.

```text
public/                 Static files, robots.txt, and self-hosted fonts
scripts/prerender.mjs    Public-page pre-rendering and sitemap generation
src/assets/             Brand assets and images
src/components/         Reusable website sections and interface components
src/data/               Page metadata and blog content
src/pages/              Website pages
src/entry-server.jsx    Server rendering entry point
```

### Production build & deployment

Run the full `npm run build` command and deploy **`dist/`**. The build also produces a temporary server bundle in `dist-ssr/`. Vercel detects the build script automatically.

Public pages are pre-rendered and hydrated in the browser, with clean URLs, page-specific titles, descriptions, and canonical links. Old hash-based URLs redirect to matching routes. Add public routes to `src/data/sitePages.js` so they appear in pre-rendering and the generated `sitemap.xml`; `robots.txt` advertises that sitemap.

Images include WebP variants, explicit dimensions, and responsive AVIF hero sources. Manrope is self-hosted in `public/fonts/` with its license. Production HTML includes its stylesheet, secondary routes are code-split, and YouTube loads near the viewport using the privacy-enhanced embed domain, retaining the existing player and autoplay behavior. Vercel caches versioned assets and fonts; source maps are emitted for diagnostics.

### Before submitting changes

Run `npm run lint` and `npm run build`. Check navigation, the mobile menu, savings calculator, FAQ, and video playback on mobile and desktop. For performance changes, check Lighthouse against the deployed HTTPS homepage; scores depend on network, CPU, third-party services, and Lighthouse version. Existing brand-button contrast remains a known limitation requiring a visible color change.

---

<p align="center"><strong>Smart • Simple • Sustainable</strong><br /><a href="https://www.expiresense.com/">ExpireSense</a> — Make every ingredient count.</p>
