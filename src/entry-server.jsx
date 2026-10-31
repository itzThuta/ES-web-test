import { prerenderToNodeStream } from 'react-dom/static';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import App from './App.jsx';

export async function render(path) {
  function ServerRouter({ children }) {
    return <MemoryRouter initialEntries={[path]}>{children}</MemoryRouter>;
  }
  // Wait for lazy routes so crawlers receive the page itself, not a loading shell.
  const { prelude } = await prerenderToNodeStream(<App Router={ServerRouter} />);
  // Drain React's prelude to resolve lazy imports, then emit a completed boundary
  // instead of the streaming placeholders that require JavaScript to reveal content.
  for await (const chunk of prelude) void chunk;
  return renderToString(<App Router={ServerRouter} />);
}
