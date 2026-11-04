import { blogPosts } from './blogPosts.js';

export const siteOrigin = 'https://www.expiresense.com';
export const sitePages = [
  { path: '/', title: 'ExpireSense', description: 'Reduce food waste with ExpireSense. Scan receipts, track pantry inventory, predict expiry dates, and save time and money with smart kitchen insights.' },
  { path: '/features', title: 'Features | ExpireSense', description: 'Explore receipt scanning, expiry predictions, pantry tracking, recipe suggestions, and alerts that help you make the most of every ingredient.' },
  { path: '/why-us', title: 'Why ExpireSense', description: 'Discover how ExpireSense helps households and kitchen teams reduce food waste, save money, and make sustainable food management simpler.' },
  { path: '/blog', title: 'Blog | ExpireSense', description: 'Read ExpireSense stories, pilot results, and practical ideas for reducing food waste in households, restaurants, hotels, and campuses.' },
  { path: '/faq', title: 'Frequently Asked Questions | ExpireSense', description: 'Find answers to common questions about ExpireSense, smart inventory tracking, expiry predictions, onboarding, and support.' },
  { path: '/contact', title: 'Contact | ExpireSense', description: 'Contact the ExpireSense team to book a demo, discuss a kitchen pilot, or get help reducing food waste with intelligent inventory management.' },
  { path: '/saving-calculator', title: 'Savings Calculator | ExpireSense', description: 'Estimate your potential food waste savings with the ExpireSense calculator using your household size, adoption, and grocery budget.' },
  { path: '/privacypolicy', title: 'Privacy Policy | ExpireSense', description: 'Learn how ExpireSense handles personal information, protects your privacy, and supports your data rights and choices.' },
  ...blogPosts.map(post => ({ path: `/blog/${post.slug}`, title: `${post.title} | ExpireSense`, description: post.excerpt })),
];
