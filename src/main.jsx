import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const container = document.getElementById("root");
const app = <React.StrictMode><App /></React.StrictMode>;
// Each public route is pre-rendered; dev and unknown routes use client rendering.
const renderedPath = container.getAttribute("data-prerendered-path");
const currentPath = window.location.pathname.replace(/\/$/, "") || "/";
if (container.hasChildNodes() && renderedPath === currentPath) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
