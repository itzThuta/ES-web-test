// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaCamera, FaLeaf, FaLink, FaUsers } from "react-icons/fa";
import { FiBell, FiCalendar, FiCpu, FiTrendingUp } from "react-icons/fi";
import { PiBarcode } from "react-icons/pi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { popIn, slideUp, staggerChildren } from "../utils/motionPresets";
import heroImg from "../assets/team.png";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar1.png";
import avatar3 from "../assets/avatar1.png";

const heroStats = [
  { value: "x%", label: "less food waste, more savings" },
  { value: "x hrs", label: "time saved every week" },
  { value: "4.9 ★", label: "loved by our beta users" },
];

const highlightCards = [
  {
    icon: PiBarcode,
    title: "Receipts become inventory",
    body: "Scan your groceries and let our systems track items, predict expirty dates, and manage your pantry for you.",
  },
  {
    icon: FiBell,
    title: "Never Miss an Expiry",
    body: "Get alerts before food goes bad, so you always know what needs attention in your pantry.",
  },
  {
    icon: FaCamera,
    title: "Visual timeline",
    body: "Know what’s fresh, what to eat today, and what’s expiring soon with an color-coded timeline.",
  },
  {
    icon: FaUsers,
    title: "From Pantry to Plate",
    body: "Discover recipe suggestions that help you transform your ingredients into meals before they go to waste.",
  },
];

const workflow = [
  {
    title: "Capture everything",
    description:
      "Snap a receipt, scan a barcode, or add via voice. ExpireSense knows what you bought in seconds.",
    icon: FiCpu,
  },
  {
    title: "Predict smartly",
    description:
      "Machine learning adjusts expiry dates to your climate and preferences, improving with every item.",
    icon: FiCalendar,
  },
  {
    title: "Act with insight",
    description:
      "Kanban-style boards highlight what needs cooking, freezing, or donating to ensure nothing is wasted.",
    icon: FiTrendingUp,
  },
  {
    title: "Close the loop",
    description:
      "Shared analytics show waste avoided, savings earned, and carbon impact—perfect for sustainability reporting.",
    icon: FaLeaf,
  },
];

const testimonials = [
  {
    text: "ExpireSense has completely changed how we manage our food at home. We save money and waste less every week.",
    author: "Sarah Oliver",
    role: "Restaurant Manager",
    avatar: avatar1,
  },
  {
    text: "I can’t imagine going back. The reminders and recipes are lifesavers for a busy family like ours.",
    author: "Chloe Johnson",
    role: "Student",
    avatar: avatar2,
  },
  {
    text: "Within 3 months, we cut food waste by 25% in our hotel kitchen. Simple, effective, and our staff love it.",
    author: "Mark Lee",
    role: "Hotel Manager",
    avatar: avatar3,
  },
];

export default function Home() {
  return (
    <div className="text-slate-800">
      {/* HERO */}
      <section className="relative overflow-hidden hero-surface">
        <div className="max-w-content pt-24 pb-24 relative sm:pt-28">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <motion.div
              variants={slideUp(0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="relative order-2 text-center lg:order-1 lg:text-left"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--brand-700)]">
                Smarter kitchens · Happier planet
              </span>
              <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] text-slate-900 mx-auto max-w-3xl lg:mx-0">
                Turn receipts into action with{" "}
                <span className="bg-gradient-to-r from-[var(--brand-600)] via-[var(--brand-500)] to-[var(--brand-600)] bg-clip-text text-transparent">
                  ExpireSense
                </span>
              </h1>
              <p className="mt-5 max-w-xl text-base sm:text-lg text-slate-600 mx-auto lg:mx-0">
                Automate inventory, forecast expiry dates, and get real-time
                insights. ExpireSense blends AI and sustainability so every item
                gets used in time.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-600)] px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-[rgba(54,148,134,0.25)] transition hover:-translate-y-0.5 hover:bg-[var(--brand-700)]"
                >
                  Book an interactive demo
                  {/* <span aria-hidden>↗</span> */}
                </Link>
                <Link
                  to="/features"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-300)] bg-white/80 px-6 py-3 text-sm sm:text-base font-semibold text-[var(--brand-700)] transition hover:border-[var(--brand-400)] hover:bg-brand-50"
                >
                  Explore live product tour
                  {/* <FaLink className="text-xs" /> */}
                </Link>
              </div>
              <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {heroStats.map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    variants={popIn(idx * 0.05)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.4 }}
                    className="card-elevated px-5 py-5 text-center sm:text-left"
                  >
                    <span className="block text-xl font-semibold text-[var(--brand-600)]">
                      {stat.value}
                    </span>
                    <span className="text-xs uppercase tracking-wide text-slate-500">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={popIn(0.12)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="relative order-1 flex justify-center lg:order-2"
            >
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: "easeInOut",
                }}
                className="w-full max-w-sm overflow-hidden rounded-3xl border border-brand-200 bg-white shadow-soft sm:max-w-md lg:max-w-lg"
              >
                <img
                  src={heroImg}
                  alt="ExpireSense workspace"
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="surface-gradient py-20">
        <div className="max-w-content">
          <motion.div
            variants={slideUp(0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--brand-700)]">
              Why choose ExpireSense
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-slate-900">
              Built for real kitchens, from homes to hospitality
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              Every interaction is fast, intuitive, and insightful; helping you
              reduce waste, save time, and stay on top of every item.
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4"
          >
            {highlightCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.article
                  key={card.title}
                  variants={popIn(idx * 0.05)}
                  whileHover={{ translateY: -8 }}
                  className="group relative overflow-hidden card-elevated p-6 text-center sm:text-left"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-[var(--brand-600)] shadow-sm">
                    <Icon className="text-xl" />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-slate-900">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {card.body}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="relative overflow-hidden surface-gradient py-20">
        <div className="max-w-content">
          <motion.div
            variants={staggerChildren(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="flex flex-col items-center gap-12 lg:flex-row lg:items-start"
          >
            <motion.div
              variants={slideUp(0.05)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="max-w-xl text-center lg:text-left"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--brand-600)]">
                Pantry Journey
              </span>
              <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-slate-900">
                A guided journey from purchase to plate
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600">
                Every stage is visual, interactive, and trackable—so you can see
                what’s fresh, what’s nearing expiry, and make smarter decisions
              </p>
              <Link
                to="/saving-calculator"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-[var(--brand-700)] shadow-sm ring-1 ring-brand-200 transition hover:bg-brand-50 mx-auto lg:mx-0"
              >
                Estimate your savings
                <span aria-hidden>→</span>
              </Link>
            </motion.div>

            <motion.div
              variants={staggerChildren(0.08, 0.1)}
              className="grid w-full flex-1 grid-cols-1 gap-6"
            >
              {workflow.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <motion.article
                    key={step.title}
                    variants={slideUp(idx * 0.05)}
                    whileHover={{ translateY: -8 }}
                    className="card-elevated relative overflow-hidden p-6 text-center transition hover:-translate-y-1 sm:text-left"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-[var(--brand-600)] shadow-sm">
                      <Icon className="text-xl" />
                    </span>
                    <h3 className="mt-4 text-lg font-semibold text-slate-900">
                      {idx + 1}. {step.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-slate-600">
                      {step.description}
                    </p>
                  </motion.article>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="surface-gradient py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
          <motion.div
            variants={slideUp(0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--brand-600)]">
              3-minute demo
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-slate-900">
              See how ExpireSense works from start to finish.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              From scanning a grocery receipt to triggering reminders and recipe
              ideas, see how every item is put to good use.
            </p>
          </motion.div>

          <motion.div
            variants={popIn(0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="relative mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(54,148,134,0.18)] via-transparent to-[rgba(54,148,134,0.05)]" />
            <iframe
              className="relative z-[1] aspect-video w-full"
              src="https://www.youtube.com/embed/5101qvp2wuQ"
              title="ExpireSense Product Tour"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative overflow-hidden surface-gradient py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
          <motion.div
            variants={slideUp(0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--brand-600)]">
              The ripple effect
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-slate-900">
              ExpireSense helps thousands save food every day.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              Restaurants, households, individuals, and food retail chains share
              one goal: make every ingredient count.
            </p>
          </motion.div>

          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={28}
            className="mt-14"
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 18 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1280: { slidesPerView: 3, spaceBetween: 28 },
            }}
          >
            {testimonials.map((review, idx) => (
              <SwiperSlide key={review.author}>
                <motion.article
                  variants={popIn(idx * 0.05)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.4 }}
                  whileHover={{ translateY: -6 }}
                  className="card-elevated relative flex h-full flex-col justify-between overflow-hidden p-6 transition"
                >
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    “{review.text}”
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <img
                      src={review.avatar}
                      alt={review.author}
                      className="h-12 w-12 rounded-full object-cover shadow"
                    />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {review.author}
                      </p>
                      <p className="text-xs uppercase tracking-wide text-[var(--brand-600)]">
                        {review.role}
                      </p>
                    </div>
                  </div>
                </motion.article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="surface-gradient py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
          <motion.div
            variants={popIn(0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="card-elevated overflow-hidden p-0"
          >
            <div className="rounded-3xl bg-white px-8 py-10 sm:px-10 sm:py-12 lg:px-16 lg:py-16">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    Start saving money, time, and the planet—together with
                    ExpireSense.
                  </h2>
                  <p className="mt-4 text-base sm:text-lg text-slate-600">
                    Join the ExpireSense movement and keep every ingredient in
                    motion. We handle the reminders, you handle the cooking.
                  </p>
                  <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-600)] px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-[rgba(54,148,134,0.25)] transition hover:-translate-y-0.5 hover:bg-[var(--brand-700)]"
                    >
                      Talk to our team
                      {/* <span aria-hidden>↗</span> */}
                    </Link>
                    <Link
                      to="/faq"
                      className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-6 py-3 text-sm sm:text-base font-semibold text-[var(--brand-700)] transition hover:border-[var(--brand-300)] hover:bg-brand-50"
                    >
                      Browse FAQs
                      {/* <FiBell className="text-sm" /> */}
                    </Link>
                  </div>
                </div>
                <motion.div
                  variants={staggerChildren(0.08, 0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  className="grid gap-4 sm:grid-cols-2"
                >
                  {heroStats.map((stat) => (
                    <motion.div
                      key={`cta-${stat.label}`}
                      variants={popIn(0.05)}
                      className="rounded-2xl border border-brand-100 bg-white/90 px-5 py-4 text-center shadow-sm backdrop-blur"
                    >
                      <p className="text-xl font-semibold text-[var(--brand-600)]">
                        {stat.value}
                      </p>
                      <p className="text-xs uppercase tracking-wide text-slate-500">
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
