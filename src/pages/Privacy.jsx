import { Fragment } from "react";
import { Link } from "react-router-dom";
import { FiLock, FiShield, FiClock, FiMail, FiDatabase } from "react-icons/fi";

const policySections = [
  {
    icon: <FiShield className="text-lg text-[var(--brand-600)]" />,
    title: "What we collect",
    summary:
      "Only the details needed to create accounts, deliver the ExpireSense experience, and support your team.",
    points: [
      "Profile information (name, email, role)",
      "Kitchen roster & usage preferences",
      "Device metadata for diagnostics",
    ],
  },
  {
    icon: <FiLock className="text-lg text-[var(--brand-600)]" />,
    title: "How we protect it",
    summary:
      "Data in transit and at rest stay encrypted using current industry standards, with periodic reviews by our security partners.",
    points: [
      "TLS 1.3 encryption end-to-end",
      "Role-based access controls",
      "Quarterly privacy reviews",
    ],
  },
  {
    icon: <FiDatabase className="text-lg text-[var(--brand-600)]" />,
    title: "How long we retain data",
    summary:
      "Operational data is retained while you have an active agreement, with a 60-day export window after cancellation.",
    points: [
      "Automated deletion after export window",
      "Aggregated telemetry kept only for benchmarking",
      "Vendor contracts include GDPR/PDPA clauses",
    ],
  },
];

const faq = [
  {
    question: "Do you sell or rent data to third parties?",
    answer:
      "Never. We only share information with subprocessors required to run ExpireSense (hosting, analytics, messaging) under strict confidentiality agreements.",
  },
  {
    question: "Where is data stored?",
    answer:
      "Primary storage resides in Singapore data centers with failover in Tokyo. Customers in other regions can request in-region storage via enterprise agreement.",
  },
  {
    question: "How can I request deletion?",
    answer:
      "Send a request to privacy@expiresense.com from an authorized admin email. We will confirm identity and complete deletion within 7 business days.",
  },
];

export default function Privacy() {
  const lastUpdated = "18 January 2025";

  return (
    <section className="bg-white/80 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <header className="space-y-6 rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-white to-brand-50/40 p-8 text-center shadow-xl shadow-slate-200/60">
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            <FiLock className="text-[var(--brand-600)]" />
            Privacy commitment
          </p>
          <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="text-base text-slate-600 sm:text-lg">
            We built ExpireSense for kitchens that take trust seriously. Below
            you’ll find the mock policy highlights that outline how we handle
            information, the safeguards in place, and the control you retain.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1">
              <FiClock className="text-[var(--brand-600)]" />
              Last updated: {lastUpdated}
            </span>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-600)] px-4 py-1 text-white shadow hover:bg-[var(--brand-700)]"
            >
              Questions? Contact us →
            </Link>
          </div>
        </header>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {policySections.map((section) => (
            <article
              key={section.title}
              className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm hover:shadow-lg"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50">
                {section.icon}
              </div>
              <h2 className="text-lg font-semibold text-slate-900">
                {section.title}
              </h2>
              <p className="text-sm text-slate-600">{section.summary}</p>
              <ul className="mt-2 space-y-2 text-sm text-slate-600">
                {section.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--brand-500)]" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6 rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-slate-900">
              Your controls & commitments
            </h3>
            <div className="space-y-5 text-sm text-slate-600">
              <p>
                This mock content outlines the control language we commonly ship
                with clients. Actual legal terms come from your legal team, but
                we always guarantee visibility into access logs, audit-ready
                exports, and SOC 2-aligned safeguards.
              </p>
              <p>
                Customers on enterprise plans can add custom data-handling
                riders, regional residency requirements, and request annotated
                DPIA templates. Our compliance desk responds to privacy requests
                within two business days.
              </p>
              <p className="rounded-2xl bg-brand-50/80 p-4 text-sm text-slate-700">
                Need something specific? Email{" "}
                <a
                  href="mailto:privacy@expiresense.com"
                  className="font-semibold text-[var(--brand-600)]"
                >
                  privacy@expiresense.com
                </a>{" "}
                for custom clauses or DPAs.
              </p>
            </div>
          </div>

          <div className="space-y-4 rounded-3xl border border-dashed border-slate-300 bg-white/80 p-6">
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              At a glance
            </h4>
            <dl className="space-y-4 text-sm text-slate-600">
              {[
                { label: "Data residency", value: "Singapore & Tokyo" },
                { label: "Primary contact", value: "privacy@expiresense.com" },
                { label: "DPO on record", value: "Apinya K., Head of Compliance" },
                { label: "Subprocessors", value: "AWS, Vercel, Customer.io" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col rounded-2xl border border-slate-200 p-4"
                >
                  <dt className="text-xs uppercase tracking-wide text-slate-400">
                    {item.label}
                  </dt>
                  <dd className="text-base font-semibold text-slate-900">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-white/95 p-8 shadow-md">
          <h3 className="text-xl font-semibold text-slate-900">
            Quick answers
          </h3>
          <div className="mt-6 divide-y divide-slate-200">
            {faq.map((item, index) => (
              <Fragment key={item.question}>
                <details className="group py-4">
                  <summary className="flex cursor-pointer items-center justify-between text-left text-base font-semibold text-slate-800">
                    {item.question}
                    <span className="text-sm text-[var(--brand-600)] transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-slate-600">{item.answer}</p>
                </details>
                {index !== faq.length - 1 && <div className="border-t border-slate-100" />}
              </Fragment>
            ))}
          </div>
        </section>

        <div className="mt-12 flex flex-col gap-4 rounded-3xl border border-brand-200 bg-brand-50/60 p-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              Need a signed DPA?
            </p>
            <p className="mt-2 text-base text-slate-700">
              Send us your template or use ours. We usually countersign within
              24 hours.
            </p>
          </div>
          <a
            href="mailto:privacy@expiresense.com?subject=Privacy%20Policy%20Question"
            className="inline-flex items-center justify-center rounded-full bg-[var(--brand-600)] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-[var(--brand-700)]"
          >
            Email the privacy desk
          </a>
        </div>
      </div>
    </section>
  );
}
