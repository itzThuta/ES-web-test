import { readFile, writeFile } from 'node:fs/promises';
import { render } from '../dist-ssr/entry-server.js';

const path = new URL('../dist/index.html', import.meta.url);
const template = await readFile(path, 'utf8');
if (!template.includes('<div id="root"></div>')) {
  throw new Error('Run the client build before pre-rendering');
}
const html = render();
if (!html.includes('Turn receipts into action')) {
  throw new Error('Home page pre-render did not produce the expected content');
}
await writeFile(path, template.replace('<div id="root"></div>', `<div id="root">${html}</div>`));
console.log('Pre-rendered home page');
