// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FiActivity, FiCheckCircle, FiCloud, FiSliders } from "react-icons/fi";
import FeatureShowcase from "../components/FeatureShowcase";
import { popIn, slideUp } from "../utils/motionPresets";

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

const beaconStages = [
  {
    tone: "Green pulse",
    status: "Fresh window",
    description:
      "Items are within 70% of their freshness cycle. Beacon glows with a calm green halo reminding crews everything is safe.",
    color: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    tone: "Amber glow",
    status: "Plan to use",
    description:
      "Between 70–90% of shelf life, the beacon shifts to a soft amber with a gentle chime prompting meal prep or donation routing.",
    color: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    tone: "Red alert",
    status: "Action now",
    description:
      "As items approach expiry, the beacon flashes red with escalating vibration, signalling chefs to prioritize or discard.",
    color: "bg-rose-50 text-rose-700 border-rose-200",
  },
];

export default function Features() {
  return (
    <div className="space-y-24 pb-20">
      {/* Hero */}
      <section className="relative overflow-hidden hero-surface pt-28 pb-24">
        <div className="relative mx-auto max-w-content text-center">
          <motion.div
            variants={slideUp(0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--brand-600)]">
              Feature deep dive
            </span>
            <h1 className="mt-6 text-3xl sm:text-4xl font-bold leading-tight text-slate-900">
              Everything ExpireSense does to keep your kitchen in flow
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
            We simplify expiry tracking through smart receipt scanning, shared planning
            tools, and clear sustainability insights - all designed to keep you informed and engaged.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature showcase */}
      <motion.section
        variants={popIn(0.08)}
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
            variants={slideUp(0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
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

      {/* Hardware spotlight */}
      <motion.section
        variants={slideUp(0.05)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="px-4"
      >
        <div className="mx-auto max-w-6xl rounded-[32px] border border-slate-200 bg-white/90 p-8 shadow-2xl shadow-brand-100/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <p className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand-600)]">
                Hardware spotlight
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Signal Beacon: physical alerts for every shelf
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Our countertop beacon plugs into any kitchen and syncs with
                ExpireSense in seconds. It paints your prep space with ambient
                color cues and subtle audio nudges so teams know exactly what
                needs attention without checking a screen.
              </p>
              <ul className="grid gap-4 text-sm text-slate-600 sm:grid-cols-2">
                {[
                  "Bluetooth LE + Wi-Fi fallback",
                  "8-hour battery + USB-C quick charge",
                  "Food-safe, wipeable housing",
                  "Pairs with up to 5 storage zones",
                ].map((spec) => (
                  <li key={spec} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--brand-500)]" />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="absolute inset-0 blur-3xl bg-gradient-to-b from-brand-200/35 via-transparent to-emerald-200/20" />
              <div className="relative rounded-[28px] border border-slate-200 bg-slate-900 text-white shadow-xl">
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-slate-400">
                    <span>Live status</span>
                    <span>Kitchen Beacon v2</span>
                  </div>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex gap-2">
                      {["bg-emerald-400", "bg-amber-300", "bg-rose-400"].map(
                        (light) => (
                          <span
                            key={light}
                            className={`h-3 w-3 rounded-full shadow ring-2 ring-white/30 ${light}`}
                          />
                        )
                      )}
                    </div>
                    <span className="text-sm text-slate-300">
                      synced • walk-in fridge
                    </span>
                  </div>
                  <div className="mt-8 space-y-4">
                    {beaconStages.map((stage) => (
                      <div
                        key={stage.status}
                        className={`rounded-2xl border px-4 py-3 ${stage.color}`}
                      >
                        <p className="text-xs uppercase tracking-widest">
                          {stage.tone}
                        </p>
                        <p className="text-lg font-semibold text-slate-900/90">
                          {stage.status}
                        </p>
                        <p className="text-[13px] text-slate-600">
                          {stage.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* How it works */}
      {/* <motion.section
        variants={slideUp(0.05)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <HowItWorks />
      </motion.section> */}
    </div>
  );
}
