// src/App.jsx
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollRestoration from "./components/ScrollRestoration";
import PageMetadata from "./components/PageMetadata";

// Pages
import Home from "./pages/Home";
const Features = lazy(() => import("./pages/Features"));
const WhyUs = lazy(() => import("./pages/WhyUs"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Contact = lazy(() => import("./pages/ContactUs"));
const Savings = lazy(() => import("./components/Savings"));
const Privacy = lazy(() => import("./pages/Privacy"));

export default function App({ Router = BrowserRouter }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Router>
        <ScrollRestoration />
        <PageMetadata />
        <Navbar />

        <main
          id="main-content"
          tabIndex={-1}
          className="pt-20 min-h-[calc(100vh-140px)]"
        >
          <Suspense fallback={<div className="min-h-screen" aria-busy="true" aria-label="Loading page" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/saving-calculator" element={<Savings />} />
            <Route path="/privacypolicy" element={<Privacy />} />
            <Route path="/privacy" element={<Navigate to="/privacypolicy" replace />} />
          </Routes>
          </Suspense>
        </main>

        <Footer />
      </Router>
    </div>
  );
}
