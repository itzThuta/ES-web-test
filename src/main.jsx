import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const container = document.getElementById("root");
const app = <React.StrictMode><App /></React.StrictMode>;
// Only the home route is pre-rendered. Hash deep links still render their own page.
const isHome = !window.location.hash || window.location.hash === "#/" || window.location.hash === "#";
if (container.hasChildNodes() && isHome) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
