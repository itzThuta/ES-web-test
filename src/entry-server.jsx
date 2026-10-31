/* eslint-disable react-refresh/only-export-components -- Build-only server entry. */
import { renderToString } from "react-dom/server";
import { createPath, Router } from "react-router-dom";
import App from "./App.jsx";

// Match HashRouter's link URLs during pre-rendering as well as hydration.
const navigator = {
  createHref: (to) => `#${typeof to === "string" ? to : createPath(to)}`,
  push() {},
  replace() {},
  go() {},
};

function ServerRouter({ children }) {
  return <Router location="/" navigator={navigator}>{children}</Router>;
}

export function render() {
  return renderToString(<App Router={ServerRouter} />);
}
