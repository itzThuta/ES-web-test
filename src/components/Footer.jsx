import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // replace with your logo

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white text-slate-700">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 text-center sm:text-left md:grid-cols-4">
        <div className="mx-auto max-w-sm sm:mx-0">
          <img
            src={logo}
            alt="ExpireSense Logo"
            className="mb-6 w-28 object-contain md:w-32"
          />
          <p className="text-sm leading-relaxed text-slate-500">
            Reducing food waste with intelligent, sustainable solutions.
          </p>
        </div>

        <div className="mx-auto max-w-xs sm:mx-0">
          <h4 className="mb-4 font-semibold text-slate-900">Direct Links</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>
              <Link
                to="/features"
                className="transition hover:text-[var(--brand-600)]"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="/why-us"
                className="transition hover:text-[var(--brand-600)]"
              >
                Why Us
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="transition hover:text-[var(--brand-600)]"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="transition hover:text-[var(--brand-600)]"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="transition hover:text-[var(--brand-600)]"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="mx-auto max-w-xs sm:mx-0">
          <h4 className="mb-4 font-semibold text-slate-900">Contact</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>Bangkok, Thailand</li>
            <li>
              <a
                href="mailto:contact@expiresense.com"
                className="transition hover:text-[var(--brand-600)]"
              >
                contact@expiresense.com
              </a>
            </li>
            <li>
              <Link
                to="/contact"
                className="transition hover:text-[var(--brand-600)]"
              >
                Book a call
              </Link>
            </li>
          </ul>
        </div>

        <div className="mx-auto max-w-xs sm:mx-0">
          <h4 className="mb-4 font-semibold text-slate-900">Follow Us</h4>
          <ul className="space-y-3 text-sm text-slate-600">
            <li>
              <a
                href="https://www.facebook.com/share/19akE2JQY7/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 transition hover:text-[var(--brand-600)]"
              >
                <FaFacebook className="h-4 w-4" /> Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/expiresense/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 transition hover:text-[var(--brand-600)]"
              >
                <FaLinkedin className="h-4 w-4" /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/expiresense"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 transition hover:text-[var(--brand-600)]"
              >
                <FaInstagram className="h-4 w-4" /> Instagram
              </a>
            </li>
            <li>
              <a
                href="https://x.com/ExpireSense"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 transition hover:text-[var(--brand-600)]"
              >
                <FaXTwitter className="h-4 w-4" /> Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-center text-sm text-slate-500 md:flex-row md:text-left">
          <p>© {year} ExpireSense — Smart • Simple • Sustainable</p>
          <div className="flex flex-wrap justify-center gap-6 md:justify-end">
            <Link
              to="/privacy"
              className="transition hover:text-[var(--brand-600)]"
            >
              Privacy Policy
            </Link>
            {/* <Link
              to="/imprint"
              className="transition hover:text-[var(--brand-600)]"
            >
              Imprint
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
