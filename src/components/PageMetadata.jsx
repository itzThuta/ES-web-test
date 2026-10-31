import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { siteOrigin, sitePages } from '../data/sitePages.js';

export default function PageMetadata() {
  const { pathname } = useLocation();
  useEffect(() => {
    const path = pathname.replace(/\/$/, '') || '/';
    const page = sitePages.find(page => page.path === path);
    if (!page) return;
    document.title = page.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', page.description);
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.append(canonical);
    }
    canonical.href = `${siteOrigin}${page.path}`;
  }, [pathname]);
  return null;
}
