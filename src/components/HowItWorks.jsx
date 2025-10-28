// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function HowItWorks() {
  const steps = [
    {
      title: "Scan Receipts",
      desc: "Snap your grocery receipt and start a food list instantly.",
      Icon: ReceiptIcon,
    },
    {
      title: "OCR Detection",
      desc: "Smart detection automatically finds food items for you.",
      Icon: DocSearchIcon,
    },
    {
      title: "Auto-Save Expiry",
      desc: "Expiry dates are suggested and saved with no extra effort.",
      Icon: CalendarCheckIcon,
    },
    {
      title: "Notifications",
      desc: "Get friendly reminders before food items expire.",
      Icon: BellIcon,
    },
    {
      title: "Recipe Ideas",
      desc: "Discover creative recipes with ingredients you already own.",
      Icon: BulbIcon,
    },
    {
      title: "Manual Add/Edit",
      desc: "Easily add, edit, or remove items anytime.",
      Icon: PencilIcon,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden py-16 sm:py-20 bg-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--brand-50),transparent_75%)]" />
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--brand-600)] shadow-sm">
            Flow in motion
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
            How ExpireSense keeps your shelves in sync
          </h2>
          <p className="mt-3 text-slate-600 text-sm md:text-base max-w-xl mx-auto">
            Each step unlocks another layer of automation—so your household or team
            spends less time tracking and more time cooking.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2">
          {steps.map((step, i) => {
            const IconEl = step.Icon;
            return (
              <motion.div
                key={i}
                variants={fade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-4 sm:gap-6 group"
              >
                {/* Number & icon */}
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-white border border-brand-200 shadow-sm grid place-items-center group-hover:scale-105 transition">
                    <IconEl className="h-6 w-6 text-teal-600" />
                  </div>
                  <span className="mt-2 text-xs sm:text-sm font-medium text-slate-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Text */}
                <div className="rounded-3xl border border-transparent bg-white/80 p-4 shadow-sm transition group-hover:border-brand-200 group-hover:shadow-lg">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 group-hover:text-[var(--brand-700)] transition">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* === SVG ICONS (unchanged) === */
function SvgBase({ className, children }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}
function ReceiptIcon(props) {
  return (
    <SvgBase {...props}>
      <path d="M6 3h9a2 2 0 0 1 2 2v14l-2-1-2 1-2-1-2 1-2-1-1 1V5a2 2 0 0 1 2-2Z" />
      <path d="M8.5 8h7M8.5 12h7M8.5 16h4" />
    </SvgBase>
  );
}
function DocSearchIcon(props) {
  return (
    <SvgBase {...props}>
      <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z" />
      <path d="M14 2v5h5" />
      <circle cx="11" cy="12" r="3.2" />
      <path d="m13.4 14.6 2.1 2.1" />
    </SvgBase>
  );
}
function CalendarCheckIcon(props) {
  return (
    <SvgBase {...props}>
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <path d="M8 2v4M16 2v4M3 9h18" />
      <path d="m9 14 2 2 4-4" />
    </SvgBase>
  );
}
function BellIcon(props) {
  return (
    <SvgBase {...props}>
      <path d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 7h18s-3 0-3-7" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </SvgBase>
  );
}
function BulbIcon(props) {
  return (
    <SvgBase {...props}>
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M6 10a6 6 0 1 1 12 0c0 2.2-1.1 3.5-2.1 4.4-.7.6-1.2 1.4-1.2 2.3H9.3c0-.9-.5-1.7-1.2-2.3C7.1 13.5 6 12.2 6 10Z" />
    </SvgBase>
  );
}
function PencilIcon(props) {
  return (
    <SvgBase {...props}>
      <path d="M12 20h9" />
      <path d="M16.5 3.5 20.5 7.5 8 20H4v-4z" />
    </SvgBase>
  );
}
