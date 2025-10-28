// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaLeaf,
  FaMoneyBillWave,
  FaBell,
  FaBarcode,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import heroBag from "../assets/grocery.png";

// Variants for animation
const fade = (dir = "up", delay = 0) => {
  const dist = dir === "left" ? -40 : dir === "right" ? 40 : 0;
  const y = dir === "up" ? 40 : dir === "down" ? -40 : 0;
  return {
    hidden: { opacity: 0, x: dist, y },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay },
    },
  };
};

const points = [
  { icon: FaLeaf, title: "Cut food waste", body: "Stay ahead of expiry dates so you use more of what you buy and throw away less." },
  { icon: FaMoneyBillWave, title: "Spend smarter", body: "Fewer duplicate purchases and fewer spoiled items means real savings each month." },
  { icon: FaBell, title: "Right-time reminders", body: "Notifications before items spoil help you plan meals or freeze things in time." },
  { icon: FaBarcode, title: "Add in seconds", body: "Scan receipts or barcodes to populate items fast — no tedious typing." },
  { icon: FaUsers, title: "Shared lists", body: "Keep the whole household in sync on what to buy (and what not to)." },
  { icon: FaUtensils, title: "Use-up ideas", body: "Recipe suggestions tailored to what’s close to expiring in your kitchen." },
];

export default function Benefits({ id = "benefits", className = "" }) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden py-16 bg-transparent ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--brand-50),transparent_75%)]" />
      <div className="relative mx-auto max-w-6xl px-6 text-center">
        {/* Heading */}
        <motion.h2
          variants={fade("up")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-slate-900"
        >
          Why <span className="text-teal-600">ExpireSense?</span>
        </motion.h2>
        <motion.p
          variants={fade("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-3 text-slate-600 max-w-2xl mx-auto text-sm md:text-base"
        >
          Smarter kitchens. Less waste. More savings. Discover why thousands
          choose us to reduce food waste and make sustainable choices.
        </motion.p>

        {/* Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Points */}
          <ul className="flex flex-col gap-6">
            {points.slice(0, 3).map((p, i) => {
              const IconEl = p.icon;
              return (
                <motion.li
                  key={p.title}
                  variants={fade("left", i * 0.15)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex items-start gap-3 text-left group"
                >
                  <span className="h-10 w-10 flex items-center justify-center rounded-lg bg-brand-50 text-[var(--brand-700)] shadow-sm transition-transform group-hover:scale-110">
                    <IconEl className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-sm md:text-base">
                      {p.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600">
                      {p.body}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ul>

          {/* Center PNG Image */}
          <motion.div
            variants={fade("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src={heroBag}
              alt="Why ExpireSense"
              className="max-w-[220px] sm:max-w-[280px] lg:max-w-[360px] object-contain"
            />
          </motion.div>

          {/* Right Points */}
          <ul className="flex flex-col gap-6">
            {points.slice(3).map((p, i) => {
              const IconEl = p.icon;
              return (
                <motion.li
                  key={p.title}
                  variants={fade("right", i * 0.15)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex items-start gap-3 text-left group"
                >
                  <span className="h-10 w-10 flex items-center justify-center rounded-lg bg-brand-50 text-[var(--brand-700)] shadow-sm transition-transform group-hover:scale-110">
                    <IconEl className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-sm md:text-base">
                      {p.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600">
                      {p.body}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>

        {/* CTA */}
        <motion.div
          variants={fade("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-10"
        >
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-6 py-3 font-medium text-[var(--brand-700)] transition hover:border-[var(--brand-300)] hover:bg-brand-50"
          >
            See how it works
            <span aria-hidden>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
