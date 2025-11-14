import { useEffect, useMemo, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useSpring } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import {
  FiBell,
  FiBookOpen,
  FiCamera,
  FiCheckCircle,
  FiLayers,
  FiTrendingUp,
} from "react-icons/fi";

import {
  fadeIn,
  popIn,
  slideUp,
  staggerChildren,
} from "../utils/motionPresets";

import shoppingImg from "../assets/2.png";
import inventoryImg from "../assets/1.png";
import recipesImg from "../assets/3.png";
import plannerImg from "../assets/4.png";
import expiryImg from "../assets/6.png";

const STEPS = [
  {
    title: "Capture in seconds",
    description:
      "Scan it or type it, ExpireSense recognizes everything in seconds,setting up your pantry for smart tracking.",
    icon: FiCamera,
    visual: shoppingImg,
    highlights: ["OCR captures receipts with >98% accuracy"],
  },
  {
    title: "Organize effortlessly",
    description:
      "Items are automatically sorted into your fridge, freezer, or pantry with smart defaults for easy tracking.",
    icon: FiLayers,
    visual: inventoryImg,
    highlights: [
      "Drag-and-drop shelves shared across the home",
      "Smart filters surface expiring items first",
    ],
  },
  {
    title: "Let reminders do the work",
    description:
      "Smart reminders before food spoils. Cook it, freeze it, or save it just in time.",
    icon: FiBell,
    visual: expiryImg,
    highlights: [
      "Predictive alerts tuned to household preferences",
      "One-tap snooze or freeze with automatic rescheduling",
    ],
  },
  {
    title: "Turn what’s left into what’s next",
    description:
      "Get recipe ideas that use up ingredients before they expire — turning waste into delicious meals.",
    icon: FiBookOpen,
    visual: recipesImg,
    highlights: [
      "Chef-curated suggestions for what needs attention",
      "Portion scaling keeps leftovers and diets on track",
    ],
  },
  {
    title: "Follow & Cook",
    description:
      "Step-by-step guidance to cook your ingredients before they expire.",
    icon: FiTrendingUp,
    visual: plannerImg,
    highlights: [
      "Automated reports track waste, savings, and impact",
      "Invite collaborators with roles in under a minute",
    ],
  },
];

export default function FeatureShowcase() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const activeStep = STEPS[index];
  const progress = useMemo(() => (index + 1) / STEPS.length, [index]);
  const progressSpring = useSpring(progress, {
    stiffness: 180,
    damping: 24,
    mass: 0.25,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (paused ? prev : (prev + 1) % STEPS.length));
    }, 4500);
    return () => clearInterval(timer);
  }, [paused]);

  const goTo = (nextIndex) =>
    setIndex((nextIndex + STEPS.length) % STEPS.length);
  const ActiveIcon = activeStep.icon;

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(54,148,134,0.14),transparent_72%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <motion.div
            key={activeStep.visual}
            variants={popIn(0.05)}
            initial="hidden"
            animate="show"
            className="order-1 flex justify-center lg:order-1"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <PhoneFrame src={activeStep.visual} alt={activeStep.title} />
          </motion.div>

          <motion.div
            variants={staggerChildren(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="order-2 text-center lg:order-2 lg:text-left"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-[var(--brand-600)]">
              Product tour
            </span>
            <motion.h2
              key={activeStep.title}
              variants={slideUp(0.05)}
              initial="hidden"
              animate="show"
              className="mt-5 text-2xl sm:text-3xl font-bold text-slate-900 mx-auto max-w-2xl lg:mx-0"
            >
              {activeStep.title}
            </motion.h2>
            <motion.p
              key={activeStep.description}
              variants={fadeIn(0.1)}
              initial="hidden"
              animate="show"
              className="mt-3 max-w-xl text-sm sm:text-base text-slate-600 mx-auto lg:mx-0"
            >
              {activeStep.description}
            </motion.p>

            <motion.div
              key={`${activeStep.title}-panel`}
              variants={popIn(0.12)}
              initial="hidden"
              animate="show"
              className="mt-8 rounded-3xl border border-slate-200 bg-slate-50/80 p-6 text-left shadow-sm sm:p-8 lg:text-left"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--brand-600)] shadow-sm ring-1 ring-brand-100">
                  Step {index + 1} of {STEPS.length}
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-[var(--brand-700)] shadow-sm">
                  <ActiveIcon className="h-5 w-5" />
                </span>
              </div>
              <p className="mt-5 text-base text-slate-600 leading-relaxed">
                {activeStep.description}
              </p>
              <div className="mt-6 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
                {activeStep.highlights.map((highlight) => (
                  <span key={highlight} className="flex items-start gap-2">
                    <FiCheckCircle className="mt-0.5 h-4 w-4 text-[var(--brand-600)]" />
                    <span>{highlight}</span>
                  </span>
                ))}
              </div>
              {/* <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                <span>Focus: {activeStep.title}</span>
                <span>Use the controls to explore the tour</span>
              </div> */}
            </motion.div>

            <motion.div
              variants={slideUp(0.1)}
              className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:justify-start"
            >
              <button
                type="button"
                onClick={() => goTo(index - 1)}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-brand-200 hover:text-[var(--brand-600)]"
              >
                <FaArrowLeft className="h-4 w-4" />
                <span>Previous</span>
              </button>
              <div className="flex items-center gap-3">
                {/* <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Progress
                </span> */}
                <div className="relative h-1.5 w-32 overflow-hidden rounded-full bg-brand-50">
                  <motion.span
                    className="absolute inset-y-0 left-0 origin-left rounded-full bg-gradient-to-r from-[var(--brand-600)] via-[var(--brand-500)] to-[var(--brand-600)]"
                    style={{ scaleX: progressSpring }}
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={() => goTo(index + 1)}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-brand-200 hover:text-[var(--brand-600)]"
              >
                <span>Next</span>
                <FaArrowRight className="h-4 w-4" />
              </button>
            </motion.div>

            <p className="mt-10 text-xs font-semibold uppercase tracking-wide text-slate-400">
              Jump to a moment
            </p>
            <ul className="mt-3 grid gap-3 max-w-3xl mx-auto text-left sm:grid-cols-2 lg:mx-0 lg:grid-cols-3">
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
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                          isActive
                            ? "bg-brand-100 text-[var(--brand-700)]"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          {step.title}
                        </p>
                        <p className="text-xs text-slate-500">
                          Step {stepIndex + 1}
                        </p>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
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
      className="relative w-[200px] overflow-hidden rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm sm:w-[240px] md:w-[260px] lg:w-[300px]"
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
