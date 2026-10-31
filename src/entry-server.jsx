import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import App from "./App.jsx";

export function render() {
  return renderToString(<App Router={MemoryRouter} />);
}
