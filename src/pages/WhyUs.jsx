// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaChartLine, FaHandshake, FaLeaf } from "react-icons/fa6";
import Benefits from "../components/Benefits";

const metrics = [
  { label: "Average waste cut", value: "35%", description: "within the first 90 days across pilot teams" },
  { label: "Time saved", value: "3.2 hrs", description: "weekly admin time removed for kitchen leads" },
  { label: "Satisfaction score", value: "4.9 / 5", description: "from households and hospitality partners" },
];

const differentiators = [
  {
    icon: FaLeaf,
    title: "Built for sustainable impact",
    copy: "Every feature is measured against waste reduction and carbon savings to keep climate goals realistic.",
  },
  {
    icon: FaChartLine,
    title: "Insights you can act on",
    copy: "Dashboards translate inventory data into purchasing guidance, so finance teams see value immediately.",
  },
  {
    icon: FaHandshake,
    title: "People-first onboarding",
    copy: "From households to hotel chains, we provide templates, training, and live support to start fast.",
  },
];

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function WhyUs() {
  return (
    <div className="space-y-20 pb-20">
      <section className="relative overflow-hidden hero-surface pt-28 pb-20">
        <div className="relative mx-auto max-w-content">
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--brand-600)]">
              Why teams stay with us
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl font-black leading-tight text-slate-900">
              A calmer, smarter way to run every kitchen
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
              ExpireSense brings inventory, automation, and collaboration together so you
              always know what you have, what to do next, and how much you are saving.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {metrics.map((metric) => (
              <motion.div
                key={metric.label}
                variants={fade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="card-elevated px-6 py-6 text-left"
              >
                <p className="text-2xl font-black text-[var(--brand-600)]">{metric.value}</p>
                <p className="mt-1 text-sm font-semibold text-slate-900">{metric.label}</p>
                <p className="mt-2 text-sm text-slate-500">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient">
        <div className="mx-auto max-w-content">
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              What makes ExpireSense different
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
              We sweat the details from rollout to reporting, so both individuals and
              enterprises experience meaningful savings—not just new dashboards.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {differentiators.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  variants={fade}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="card-elevated flex flex-col gap-4 p-6"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-[var(--brand-600)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.copy}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <Benefits className="pt-0" />
    </div>
  );
}
