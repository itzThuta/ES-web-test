// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaChartLine, FaHandshake, FaLeaf } from "react-icons/fa6";
import Benefits from "../components/Benefits";
import { popIn, slideUp, staggerChildren } from "../utils/motionPresets";

const metrics = [
  {
    label: "Average reduced waste",
    value: "35%",
    description: "within the first 90 days across pilot teams",
  },
  {
    label: "Hours reclaimed from meal planning and tracking",
    value: "3.2 hrs",
    description: "weekly admin time removed for kitchen leads (pilot)",
  },
  {
    label: "Satisfaction score",
    value: "4.9 / 5",
    description: "reported by early adopters",
  },
];

const differentiators = [
  {
    icon: FaLeaf,
    title: "Built for sustainable impact",
    copy: "We help reduce food waste and carbon impact with measurable, easy-to-follow actions.",
  },
  {
    icon: FaChartLine,
    title: "Operational clarity",
    copy: "Smart expiry tracking, receipt scanning, and recipe suggestions keep teams aligned on what to use next.",
  },
  {
    icon: FaHandshake,
    title: "Trust & Reliability",
    copy: "Reliable predictions and clear next steps keep kitchen management simple and dependable.",
  },
];

export default function WhyUs() {
  return (
    <div className="space-y-20 pb-20 whyus-page">
      <Benefits className="pt-6" />

      <section className="relative">
        <div className="mx-auto max-w-content">
          <motion.div
            variants={slideUp(0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              What makes ExpireSense different
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-700 max-w-3xl mx-auto">
              Many tools stop at reminders. ExpireSense predicts expiry, suggests
              recipes, and tracks savings—so food management feels effortless and
              effective.
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-12 grid gap-6 md:grid-cols-3"
          >
            {differentiators.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  variants={popIn(idx * 0.05)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="card-elevated flex flex-col gap-4 p-6"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-[var(--brand-600)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.copy}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden pt-28 pb-20">
        <div className="relative mx-auto max-w-content">
          <motion.div
            variants={slideUp(0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-[var(--brand-600)]">
              Why it works for you
            </span>
            <h1 className="mt-6 text-3xl sm:text-4xl font-bold leading-tight text-slate-900">
              A calmer, smarter way to run every kitchen
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-700 max-w-3xl mx-auto">
              Track your kitchen inventory, plan your meals, and save more with
              ExpireSense.
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-12 grid gap-6 sm:grid-cols-3"
          >
            {metrics.map((metric) => (
              <motion.div
                key={metric.label}
                variants={popIn(0.05)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="card-elevated px-6 py-6 text-left"
              >
                <p className="text-xl font-semibold text-[var(--brand-600)]">
                  {metric.value}
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  {metric.label}
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  {metric.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
