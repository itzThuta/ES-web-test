// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const popIn = {
  hidden: { opacity: 0, y: 28, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.18, 0.89, 0.32, 1.28] },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const metrics = [
  { value: "12K+", label: "households guided" },
  { value: "4.1K tons", label: "food rescued to date" },
  { value: "3.2 hrs", label: "time saved each week" },
];

const values = [
  {
    title: "Sustainable by default",
    copy: "Every feature is evaluated by how much waste, carbon, and cost it helps prevent.",
  },
  {
    title: "Designed for real teams",
    copy: "Simple capture, clear reminders, and nudges that keep households and hospitality in sync.",
  },
  {
    title: "Calm interfaces",
    copy: "Human-first visuals that stay friendly and accessible, even when your day is hectic.",
  },
];

export default function About() {
  return (
    <section className="surface-gradient py-20 -mt-px">
      <div className="max-w-content">
        <motion.div
          variants={popIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-lg backdrop-blur-sm sm:p-12"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--brand-600)]">
            About ExpireSense
          </span>
          <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl">
            We help every kitchen waste less and plan smarter
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            What began as a notebook of ideas in Bangkok has grown into a mindful platform used by
            households, campuses, and hospitality teams. We focus on clarity, calm, and gentle nudges
            so good ingredients never go unused.
          </p>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-8 grid gap-4 sm:grid-cols-3"
          >
            {metrics.map((metric) => (
              <motion.div
                key={metric.label}
                variants={popIn}
                whileHover={{ scale: 1.03 }}
                className="rounded-2xl border border-slate-200 bg-white/95 p-4 text-center shadow-sm transition"
              >
                <p className="text-2xl font-black text-[var(--brand-600)] sm:text-3xl">{metric.value}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">{metric.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={popIn}
              whileHover={{ translateY: -6 }}
              className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur"
            >
              <h3 className="text-lg font-semibold text-slate-900">{value.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{value.copy}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
