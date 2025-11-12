import { motion } from "framer-motion";
import {
  FiBarChart2,
  FiCpu,
  FiGrid,
  FiLock,
  FiPhoneCall,
  FiShield,
  FiUsers,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const stats = [
  { value: "28%", label: "Average waste reduction" },
  { value: "4.5 hrs", label: "Ops time saved per site" },
  { value: "96%", label: "Adoption across teams" },
];

const heroHighlights = [
  {
    title: "Rollout in weeks",
    detail: "Dedicated pods launch your first locations in 14 days with zero IT lift.",
  },
  {
    title: "Predictable pricing",
    detail: "Flat seats + usage guardrails keep finance teams confident in every tier.",
  },
  {
    title: "Executive-ready data",
    detail: "Dashboards, scorecards, and ESG exports stay synced without manual work.",
  },
];

const tiers = [
  {
    name: "Team",
    price: "$399",
    cadence: "/month",
    highlight: "Best for 1-3 sites",
    features: [
      "Up to 50 active users",
      "Guided onboarding + playbooks",
      "Realtime expiry radar dashboard",
      "Email + in-app support",
    ],
    accent: "from-[var(--brand-500)] to-[var(--brand-600)]",
  },
  {
    name: "Growth",
    price: "$899",
    cadence: "/month",
    highlight: "Scale to regional ops",
    features: [
      "Unlimited locations",
      "Workflow automation builder",
      "Role-based access & SSO",
      "Quarterly strategy reviews",
    ],
    accent: "from-amber-500 to-amber-600",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    highlight: "Global food programs",
    features: [
      "Dedicated CSM & solution engineer",
      "Carbon + ESG reporting suite",
      "On-prem or private cloud",
      "24/7 priority response SLA",
    ],
    accent: "from-slate-600 to-slate-800",
  },
];

const capabilities = [
  {
    icon: FiCpu,
    title: "Predictive ops",
    body: "AI signals surface surplus risk early so regional teams act before shrink hits your P&L.",
  },
  {
    icon: FiUsers,
    title: "Team alignment",
    body: "Playbooks, escalations, and nudges keep HQ, franchisees, and suppliers synchronized.",
  },
  {
    icon: FiShield,
    title: "Enterprise controls",
    body: "SOC 2, audit logs, and custom roles keep compliance officers confident at every scale.",
  },
  {
    icon: FiGrid,
    title: "Integrated stack",
    body: "Connect POS, ERP, and procurement tools with pre-built connectors or open APIs.",
  },
];

const support = [
  {
    icon: FiPhoneCall,
    title: "Dedicated success pods",
    detail: "Regional specialists move fast with weekly standups and adoption dashboards.",
  },
  {
    icon: FiLock,
    title: "Compliance ready",
    detail: "Contractual SLAs, data residency options, and quarterly access reviews.",
  },
  {
    icon: FiBarChart2,
    title: "Executive visibility",
    detail: "Board-ready KPI packs and automated ESG documentation delivered monthly.",
  },
];

export default function Subscription() {
  return (
    <div className="bg-slate-50 text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden hero-surface">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/80 via-white/10 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)]">
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--brand-700)]">
                B2B Programs
              </p>
              <h1 className="mt-8 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
                Subscription plans built for multi-location food operators
              </h1>
              <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
                Deploy ExpireSense across every kitchen, commissary, or supplier hub with pricing that
                mirrors your footprint. Forecast savings, prove ESG wins, and give teams a system they
                actually enjoy using—without straying from your existing workflows.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--brand-600)] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-[rgba(54,148,134,0.25)] transition hover:-translate-y-0.5 hover:bg-[var(--brand-700)]"
                >
                  Talk with sales
                </Link>
                <Link
                  to="/features"
                  className="inline-flex items-center justify-center rounded-full border border-brand-200 bg-white px-6 py-3 text-base font-semibold text-[var(--brand-700)] transition hover:border-brand-300 hover:text-[var(--brand-600)]"
                >
                  View capabilities
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 scale-95 rounded-[36px] bg-gradient-to-br from-brand-200/40 via-white/40 to-white/10 blur-2xl" />
              <div className="relative rounded-[28px] border border-brand-200/70 bg-white/90 p-6 text-slate-900 shadow-xl shadow-brand-200/60 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Subscription toolkit
                </p>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">
                  Everything your rollout team needs in one plan
                </h3>
                <div className="mt-6 space-y-3">
                  {heroHighlights.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-brand-100 bg-brand-50/80 p-4 text-sm"
                    >
                      <p className="font-semibold text-slate-900">{item.title}</p>
                      <p className="mt-1 text-slate-600">{item.detail}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl border border-dashed border-brand-200 bg-white/90 p-4 text-sm text-slate-600">
                  <p className="font-semibold text-slate-900">Plans start at $399 / month</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Includes onboarding sprints, training credits, and adoption scorecards.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl border border-brand-200 bg-white/90 p-6 shadow-soft backdrop-blur"
              >
                <p className="text-2xl font-semibold text-[var(--brand-600)]">{stat.value}</p>
                <p className="mt-2 text-sm uppercase tracking-wide text-slate-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-600)]">
              Built for operators
            </p>
            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
              Align finance, culinary, and sustainability teams in one workspace
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Automations, approvals, and analytics help B2B partners cut spoilage, prove ROI, and
              compress project timelines—without another spreadsheet.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <article
                  key={cap.title}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-[var(--brand-600)] shadow-inner">
                    <Icon className="text-xl" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-slate-900">{cap.title}</h3>
                  <p className="mt-3 text-base text-slate-600 leading-relaxed">{cap.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="surface-gradient py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Subscription tiers
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Choose the plan that fits your rollout
            </h2>
            <p className="mt-4 text-base text-slate-600 sm:text-lg">
              Every tier includes onboarding, data migration, and unlimited coaching sessions during
              your first 90 days.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tiers.map((tier) => {
              const isFeatured = Boolean(tier.featured);
              const badgeClasses = isFeatured
                ? "border-white/30 bg-white/15 text-white/70"
                : "border-brand-200 bg-brand-50/80 text-slate-500";
              const noteClasses = isFeatured
                ? "border-white/40 bg-white/10 text-white/80"
                : "border-brand-200 bg-brand-50/70 text-slate-600";

              return (
                <div
                  key={tier.name}
                  className={`relative flex h-full flex-col rounded-[30px] border ${
                    isFeatured
                      ? "border-transparent bg-gradient-to-br from-[var(--brand-600)] to-[var(--brand-700)] text-white shadow-xl"
                      : "border border-brand-200 bg-white text-slate-900 shadow-lg"
                  } p-8`}
                >
                  {isFeatured && (
                    <span className="absolute -top-3 right-8 rounded-full bg-white/90 px-4 py-1 text-xs font-semibold uppercase text-[var(--brand-700)] shadow-md">
                      Most popular
                    </span>
                  )}
                  <div
                    className={`rounded-2xl border border-dashed px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] ${badgeClasses}`}
                  >
                    Deployment kit
                  </div>
                  <div className="mt-6">
                    <p
                      className={`text-sm font-semibold uppercase tracking-[0.2em] ${
                        isFeatured ? "text-white/70" : "text-slate-500"
                      }`}
                    >
                      {tier.highlight}
                    </p>
                    <h3 className="mt-2 text-2xl font-bold">{tier.name}</h3>
                    <p className="mt-6 text-3xl font-bold">
                      {tier.price}
                      <span className="text-base font-medium">{tier.cadence}</span>
                    </p>
                  </div>
                  <ul className="mt-8 space-y-4 text-sm sm:text-base">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span
                          className={`mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r ${tier.accent} text-white text-xs font-bold`}
                        >
                          ✓
                        </span>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10">
                    <Link
                      to="/contact"
                      className={`inline-flex w-full items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                        isFeatured
                          ? "bg-white text-[var(--brand-700)] hover:bg-slate-100"
                          : "bg-[var(--brand-600)] text-white hover:bg-[var(--brand-700)]"
                      }`}
                    >
                      Connect with sales
                    </Link>
                  </div>
                  <div
                    className={`mt-6 rounded-2xl border border-dashed px-4 py-3 text-xs ${noteClasses}`}
                  >
                    Includes onboarding sprints, executive dashboards, and live coaching.
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-600)]">
                White-glove delivery
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
                From pilot to global policy in under 90 days
              </h2>
              <p className="mt-4 text-base text-slate-600">
                We plug into your existing steering committees, run co-branded enablement, and
                deliver executive-ready scorecards so every stakeholder sees impact fast.
              </p>
              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {support.map((item) => {
                  const Icon = item.icon;
                  return (
                    <article
                      key={item.title}
                      className="rounded-3xl border border-brand-200 bg-white p-5 shadow-sm"
                    >
                      <Icon className="text-2xl text-[var(--brand-600)]" />
                      <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.detail}</p>
                    </article>
                  );
                })}
              </div>
            </div>
            <div className="rounded-3xl border border-brand-200 bg-white p-8 shadow-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Demo snapshot
              </p>
              <h3 className="mt-4 text-2xl font-bold text-slate-900">
                Global subscription control tower
              </h3>
              <div className="mt-6 rounded-[28px] border border-dashed border-brand-200 bg-brand-50/60 p-6 shadow-inner">
                <div className="rounded-2xl bg-white px-4 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Rollout metrics
                </div>
                <div className="mt-4 space-y-4">
                  {[
                    { label: "Sites live", value: "128" },
                    { label: "Teams onboarded", value: "42" },
                    { label: "Monthly savings", value: "$184K" },
                    { label: "Carbon avoided", value: "312 tCO₂e" },
                  ].map((metric) => (
                    <div
                      key={metric.label}
                      className="flex items-center justify-between rounded-2xl bg-brand-50 px-4 py-3 text-sm font-semibold text-slate-700"
                    >
                      <span>{metric.label}</span>
                      <span className="text-base text-slate-900">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 rounded-2xl border border-dashed border-brand-200 bg-white/80 p-6 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">
                  Live with one supplier in 14 days
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  We preload your catalog, configure subscription logic, and test alerts with your
                  pilot team before scaling.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3 text-xs font-semibold text-slate-500">
                  {[
                    { label: "Integrations built", value: "13" },
                    { label: "Change requests closed", value: "48" },
                    { label: "Automation recipes", value: "32" },
                    { label: "Pilot chefs", value: "26" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl border border-brand-100 bg-brand-50/80 px-3 py-2"
                    >
                      <p>{item.label}</p>
                      <p className="mt-1 text-slate-900">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
