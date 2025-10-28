import { useEffect, useMemo, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useSpring } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { FiBell, FiBookOpen, FiCamera, FiLayers, FiTrendingUp } from "react-icons/fi";

import shoppingImg from "../assets/2.png";
import inventoryImg from "../assets/1.png";
import recipesImg from "../assets/3.png";
import plannerImg from "../assets/4.png";
import expiryImg from "../assets/6.png";

const STEPS = [
  {
    title: "Capture in seconds",
    description:
      "Snap a receipt or scan a barcode. ExpireSense recognises items instantly so the whole pantry is ready to track.",
    icon: FiCamera,
    visual: shoppingImg,
  },
  {
    title: "Organise effortlessly",
    description:
      "Items slot into fridge, freezer, or pantry with smart defaults and shared access for everyone in your space.",
    icon: FiLayers,
    visual: inventoryImg,
  },
  {
    title: "Let reminders do the work",
    description:
      "Friendly nudges land before food spoils. Snooze, freeze, or cook suggestions keep waste close to zero.",
    icon: FiBell,
    visual: expiryImg,
  },
  {
    title: "Cook with confidence",
    description:
      "Use-up recipe ideas combine what is on hand with what is about to expire so meal planning stays simple.",
    icon: FiBookOpen,
    visual: recipesImg,
  },
  {
    title: "Plan once, enjoy often",
    description:
      "Weekly views highlight wins, savings, and sustainability gains to keep the whole team motivated.",
    icon: FiTrendingUp,
    visual: plannerImg,
  },
];

export default function FeatureShowcase() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const activeStep = STEPS[index];
  const progress = useMemo(() => (index + 1) / STEPS.length, [index]);
  const progressSpring = useSpring(progress, { stiffness: 90, damping: 26, mass: 0.4 });

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (paused ? prev : (prev + 1) % STEPS.length));
    }, 6500);
    return () => clearInterval(timer);
  }, [paused]);

  const goTo = (nextIndex) => setIndex((nextIndex + STEPS.length) % STEPS.length);

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(54,148,134,0.14),transparent_72%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <motion.div
            key={activeStep.visual}
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="order-2 flex justify-center lg:order-1"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <PhoneFrame src={activeStep.visual} alt={activeStep.title} />
          </motion.div>

          <div className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--brand-600)]">
              Product tour
            </span>
            <motion.h2
              key={activeStep.title}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="mt-5 text-3xl sm:text-4xl font-bold text-slate-900"
            >
              {activeStep.title}
            </motion.h2>
            <motion.p
              key={activeStep.description}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="mt-3 max-w-xl text-sm sm:text-base text-slate-600"
            >
              {activeStep.description}
            </motion.p>

            <div className="mt-6 flex items-center gap-3">
              <button
                type="button"
                onClick={() => goTo(index - 1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-brand-200 hover:text-[var(--brand-600)]"
                aria-label="Previous step"
              >
                <FaArrowLeft className="h-4 w-4" />
              </button>
              <div className="relative h-1.5 w-40 overflow-hidden rounded-full bg-brand-50">
                <motion.span
                  className="absolute inset-y-0 left-0 origin-left rounded-full bg-gradient-to-r from-[var(--brand-600)] via-[var(--brand-500)] to-[var(--brand-600)]"
                  style={{ scaleX: progressSpring }}
                />
              </div>
              <button
                type="button"
                onClick={() => goTo(index + 1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-brand-200 hover:text-[var(--brand-600)]"
                aria-label="Next step"
              >
                <FaArrowRight className="h-4 w-4" />
              </button>
            </div>

            <ul className="mt-10 grid gap-3">
              {STEPS.map((step, stepIndex) => {
                const Icon = step.icon;
                const isActive = stepIndex === index;
                return (
                  <li key={step.title}>
                    <button
                      type="button"
                      onClick={() => goTo(stepIndex)}
                      className={`flex w-full items-center gap-4 rounded-2xl border px-4 py-3 text-left transition ${
                        isActive
                          ? "border-[var(--brand-300)] bg-white shadow-sm"
                          : "border-slate-200 bg-white hover:border-brand-200"
                      }`}
                    >
                      <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${isActive ? "bg-brand-100 text-[var(--brand-700)]" : "bg-slate-100 text-slate-500"}`}>
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{step.title}</p>
                        <p className="text-xs text-slate-500">
                          {stepIndex + 1} / {STEPS.length}
                        </p>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneFrame({ src, alt }) {
  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      className="relative w-[160px] overflow-hidden rounded-[26px] border border-slate-200 bg-white p-3 shadow-sm sm:w-[190px] md:w-[210px] lg:w-[230px]"
    >
      <div className="relative aspect-[9/18] w-full overflow-hidden rounded-[20px] border border-slate-200 bg-[linear-gradient(180deg,#f6fbf9,white)]">
        <div className="absolute left-1/2 top-0 h-4 w-16 -translate-x-1/2 rounded-b-2xl bg-slate-900/80" />
        <img
          src={src}
          alt={alt}
          className="h-full w-full select-none object-cover"
          draggable="false"
        />
        <div className="pointer-events-none absolute bottom-2 left-1/2 h-1.5 w-14 -translate-x-1/2 rounded-full bg-slate-900/10" />
      </div>
    </motion.div>
  );
}
