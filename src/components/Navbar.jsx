import { useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  AnimatePresence,
  LayoutGroup,
  // eslint-disable-next-line no-unused-vars
  motion,
  useScroll,
  useSpring,
} from "framer-motion";
import Logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const { scrollYProgress } = useScroll();
  const progressX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.2,
  });

  const links = [
    { to: "/", label: "Home" },
    { to: "/features", label: "Features" },
    { to: "/why-us", label: "Why Us" },
    { to: "/blog", label: "Blog" },
    // { to: "/subscription", label: "Subscription" },
  ];

  const featureDropdown = [
    { to: "/features", label: "Feature Showcase" },
    { to: "/saving-calculator", label: "Saving Calculator" },
  ];

  const dropdownItems = useMemo(
    () => ({
      Features: featureDropdown,
    }),
    []
  );

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 ${
        scrolled
          ? "border-b border-slate-200/70 bg-white/90 shadow-[0_8px_24px_rgba(15,23,42,0.07)]"
          : "border-b border-transparent bg-white/75"
      } backdrop-blur-xl`}
    >
      <motion.span
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[rgba(54,148,134,0.35)] to-transparent"
        initial={false}
        animate={{ opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.45 }}
      />
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-5 sm:px-6 lg:px-10">
        <NavLink
          to="/"
          className="flex items-center gap-3 rounded-full bg-white/60 px-3 py-1.5 shadow-sm ring-1 ring-white/70 transition hover:bg-white/90"
        >
          <img
            src={Logo}
            alt="ExpireSense"
            className="w-10 h-10 object-contain drop-shadow-sm"
            loading="eager"
          />
          <span className="text-xl lg:text-2xl font-bold tracking-tight text-slate-900">
            ExpireSense
          </span>
        </NavLink>

        <LayoutGroup>
          <ul className="hidden md:flex items-center gap-8 lg:gap-12">
            {links.map((link) => {
              const showDropdown = hovered === link.label && dropdownItems[link.label];
              const dropdownMatch =
                dropdownItems[link.label]?.some((item) =>
                  location.pathname.startsWith(item.to)
                ) || false;
              return (
                <li
                  key={link.to}
                  className="relative"
                  onMouseEnter={() => setHovered(link.label)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `relative px-1 text-base lg:text-[17px] font-medium transition-colors ${
                        isActive || dropdownMatch
                          ? "text-[var(--brand-700)]"
                          : "text-slate-600 hover:text-[var(--brand-600)]"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span className="relative z-10">{link.label}</span>
                        {(isActive || dropdownMatch || hovered === link.label) && (
                          <motion.span
                            layoutId="nav-underline"
                            className="absolute left-0 right-0 -bottom-1 h-[3px] rounded-full bg-[var(--brand-600)]"
                            transition={{ type: "spring", stiffness: 280, damping: 28 }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>

                  <AnimatePresence>
                    {showDropdown && (
                      <motion.ul
                        initial={{ opacity: 0, y: -10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute left-0 mt-4 w-64 rounded-2xl border border-slate-200 bg-white/95 p-2 shadow-2xl backdrop-blur-sm"
                      >
                        {dropdownItems[link.label].map((item) => (
                          <li key={item.to}>
                            <NavLink
                              to={item.to}
                              className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-brand-50 hover:text-[var(--brand-600)]"
                            >
                              <span>{item.label}</span>
                              <span aria-hidden className="text-xs text-[var(--brand-600)]">
                                ↗
                              </span>
                            </NavLink>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </LayoutGroup>

        <div className="hidden md:block">
          <NavLink
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--brand-600)] px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[var(--brand-700)]"
          >
            Contact Us
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              →
            </motion.span>
          </NavLink>
        </div>

        <button
          className="md:hidden p-2 rounded-md hover:bg-slate-100 transition"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-slate-900 rounded" />
            <span className="block h-0.5 w-6 bg-slate-900 rounded" />
            <span className="block h-0.5 w-6 bg-slate-900 rounded" />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="md:hidden border-t border-slate-200 bg-white/95 shadow-lg backdrop-blur"
          >
            <div className="px-6 pb-6 pt-3">
              <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-wider text-slate-400">
                <span>Navigate</span>
                <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-[var(--brand-600)] shadow-sm">
                  Menu
                </span>
              </div>
              <ul className="space-y-2">
                {links.map((link) => {
                  const dropdownMatch =
                    dropdownItems[link.label]?.some((item) =>
                      location.pathname.startsWith(item.to)
                    ) || false;
                  return (
                    <li key={link.to}>
                      <NavLink
                        to={link.to}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          `block rounded-2xl px-4 py-3 text-base font-semibold transition ${
                            isActive || dropdownMatch
                              ? "bg-brand-50 text-[var(--brand-700)] ring-1 ring-[var(--brand-200)]"
                              : "text-slate-700 hover:bg-white hover:text-[var(--brand-600)]"
                          }`
                        }
                      >
                        {link.label}
                      </NavLink>
                      {dropdownItems[link.label] && (
                        <div className="mt-2 grid gap-1 pl-4">
                          {dropdownItems[link.label].map((item) => (
                            <NavLink
                              key={item.to}
                              to={item.to}
                              onClick={() => setOpen(false)}
                              className="rounded-xl px-3 py-2 text-sm font-medium text-slate-500 transition hover:bg-brand-50 hover:text-[var(--brand-600)]"
                            >
                              {item.label}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        className="pointer-events-none absolute left-0 right-0 top-full h-[3px] origin-left bg-[var(--brand-600)]/40"
        style={{ scaleX: progressX }}
      />
    </motion.nav>
  );
}
