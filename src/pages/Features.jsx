// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FiActivity, FiCheckCircle, FiCloud, FiSliders } from "react-icons/fi";
import FeatureShowcase from "../components/FeatureShowcase";
import HowItWorks from "../components/HowItWorks";
import Savings from "../components/Savings";

const fade = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// const operatingPillars = [
//   {
//     icon: FiSliders,
//     title: "Automation with control",
//     description:
//       "You decide the thresholds; ExpireSense handles the reminders, re-ordering signals, and escalations.",
//   },
//   {
//     icon: FiActivity,
//     title: "Live health metrics",
//     description:
//       "A dynamic dashboard surfaces waste avoided, cost savings, and carbon impact in real time.",
//   },
//   {
//     icon: FiCloud,
//     title: "Works everywhere",
//     description:
//       "Mobile, tablet, kiosk, or desktop—syncing in the cloud keeps households and teams aligned.",
//   },
//   {
//     icon: FiCheckCircle,
//     title: "Enterprise ready",
//     description:
//       "Granular roles, audit trails, and SSO integrations ensure compliance for operations at scale.",
//   },
// ];

export default function Features() {
  return (
    <div className="space-y-24 pb-20">
      {/* Hero */}
      <section className="relative overflow-hidden hero-surface pt-28 pb-24">
        <div className="relative mx-auto max-w-content text-center">
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--brand-600)]">
              Feature deep dive
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl font-black leading-tight text-slate-900">
              Everything ExpireSense does to keep your kitchen in flow
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
              We orchestrate receipt capture, expiry predictions, collaborative planning,
              and sustainability reporting—layered with animations that keep everyone
              engaged and informed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature showcase */}
      <motion.section
        variants={fade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <FeatureShowcase />
      </motion.section>

      {/* Pillars
      <section className="surface-gradient">
        <div className="mx-auto max-w-content">
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Operate with confidence at every scale
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
              These pillars underpin the ExpireSense experience—whether you manage a
              single fridge or a campus of kitchens.
            </p>
          </motion.div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {operatingPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.article
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05, ease: "easeOut" }}
                  className="group relative overflow-hidden card-elevated p-6"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-[var(--brand-600)] shadow-sm">
                    <Icon className="text-xl" />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-slate-900">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Savings calculator */}
      <motion.section
        variants={fade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <Savings />
      </motion.section>

      {/* How it works */}
      {/* <motion.section
        variants={fade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <HowItWorks />
      </motion.section> */}
    </div>
  );
}
