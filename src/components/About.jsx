// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Logo from "../assets/logo.png";

function LetterAvatar({ name }) {
  const initial = name?.charAt(0)?.toUpperCase() ?? "?";
  return (
    <motion.span
      whileHover={{ scale: 1.1 }}
      className="inline-grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-full 
                 text-sm sm:text-base font-bold mr-2 sm:mr-3 shadow-md"
      style={{ backgroundColor: "var(--brand-100)", color: "var(--brand-700)" }}
      title={name}
    >
      {initial}
    </motion.span>
  );
}

function IconCircle({ children }) {
  return (
    <span
      className="inline-grid h-12 w-12 place-items-center rounded-xl 
                 bg-gradient-to-br from-brand-50 to-white 
                 text-[var(--brand-600)] shadow ring-1 ring-brand-100"
    >
      {children}
    </span>
  );
}

const LeafIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
       strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M2 12c6-10 14-9 20-8-1 6-2 14-12 18C5 20 3 16 2 12Z" />
    <path d="M9 13c2-1 5-4 7-8" />
  </svg>
);

const ClockIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
       strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
  </svg>
);

const SparkIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
       strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l4 4M15 15l4 4M19 5l-4 4M9 15l-4 4" />
  </svg>
);

export default function About() {
  const teamNames = ["Kai", "Juji", "Ryuu", "James", "Sophie"];

  const values = [
    {
      icon: <LeafIcon />,
      title: "Sustainable by design",
      desc: "Helping households cut food waste with better visibility and gentle nudges.",
    },
    {
      icon: <ClockIcon />,
      title: "Respect your time",
      desc: "Fast capture, clear reminders—no complex setup required.",
    },
    {
      icon: <SparkIcon />,
      title: "Delightfully simple",
      desc: "A calm, modern interface that works beautifully on any device.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="about" className="surface-gradient py-20">
      <div className="max-w-content">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10"
        >
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--brand-600)]">
                Our mission
              </span>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                Helping every kitchen waste less and do more
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                ExpireSense started with a simple idea: stop wasting food. Today our team blends
                computer vision, automation, and human-centred design to make inventory management
                effortless for households and hospitality brands alike.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {teamNames.map((name) => (
                  <LetterAvatar key={name} name={name} />
                ))}
              </div>
              <p className="mt-3 text-sm text-slate-500">
                Product, research, and support crafted by {teamNames.slice(0, -1).join(", ")} &amp; {teamNames.slice(-1)}.
              </p>
            </div>

            <div className="grid gap-4 rounded-2xl border border-brand-200 bg-brand-50/70 p-6 text-sm text-slate-600">
              <h3 className="text-base font-semibold text-[var(--brand-700)]">In-house impact highlights</h3>
              <ul className="space-y-2">
                <li>• 2.3M+ groceries tracked across pilot programmes.</li>
                <li>• 28% average waste reduction for hospitality clients.</li>
                <li>• Carbon insights included for every item you save.</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <IconCircle>{value.icon}</IconCircle>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{value.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
