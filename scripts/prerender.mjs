import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { render } from '../dist-ssr/entry-server.js';
import { siteOrigin, sitePages } from '../src/data/sitePages.js';

const root = new URL('../dist/', import.meta.url);
let template = await readFile(new URL('index.html', root), 'utf8');
const stylesheet = template.match(/<link rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/);
if (!stylesheet) throw new Error('Run the client build before pre-rendering');
const css = await readFile(new URL(`.${stylesheet[1]}`, root), 'utf8');
template = template.replace(stylesheet[0], `<style>${css}</style>`);
if (!template.includes('<div id="root"></div>')) throw new Error('Client root placeholder not found');
const escape = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;');

for (const page of sitePages) {
  const html = await render(page.path);
  if (!html.includes('<main') || !html.includes('</main>') || !/<h[12][\s>]/.test(html) || html.includes('aria-busy="true"') || html.includes('<!--$?-->')) {
    throw new Error(`Incomplete pre-render for ${page.path}`);
  }
  const document = template
    .replace(/<title>.*?<\/title>/, `<title>${escape(page.title)}</title>`)
    .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${escape(page.description)}" />`)
    .replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${siteOrigin}${page.path}" />`)
    .replace('<div id="root"></div>', `<div id="root" data-prerendered-path="${page.path}">${html}</div>`);
  const destination = new URL(page.path === '/' ? 'index.html' : `${page.path.slice(1)}.html`, root);
  await mkdir(new URL('.', destination), { recursive: true });
  await writeFile(destination, document);
}

const urls = sitePages.map(page => `  <url><loc>${escape(siteOrigin + page.path)}</loc></url>`).join('\n');
await writeFile(new URL('sitemap.xml', root), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
console.log(`Pre-rendered ${sitePages.length} pages and generated sitemap.xml`);
