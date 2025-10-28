import { useMemo, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import {
  FaEnvelopeOpenText,
  FaHeadset,
  FaLifeRing,
  FaQuestionCircle,
  FaSearch,
} from "react-icons/fa";

const faqItems = [
  {
    question: "What is ExpireSense and how does it work?",
    answer:
      "ExpireSense is a smart food waste platform that scans receipts, tracks what is in your kitchen, and reminds you before items expire. You get insights, meal ideas, and sharing tools for everyone at home.",
    category: "General",
  },
  {
    question: "How long does it take to get set up?",
    answer:
      "Most households are up and running in under 10 minutes. Scan your first receipt, or manually add a few items, and ExpireSense will guide you through setting reminders.",
    category: "Getting Started",
  },
  {
    question: "Can I share my account with family or teammates?",
    answer:
      "Yes. Invite unlimited collaborators so everyone stays aligned on what needs to be used, what to buy, and what is running low.",
    category: "Collaboration",
  },
  {
    question: "Do I need special hardware to scan receipts?",
    answer:
      "No additional hardware is required. Snap a photo with your phone or upload a PDF—our OCR detects the items and suggests expiry dates automatically.",
    category: "Features",
  },
  {
    question: "Is there a free plan?",
    answer:
      "We offer a generous free tier for personal use. Businesses can upgrade to unlock deeper analytics, automated reporting, and priority support.",
    category: "Pricing",
  },
  {
    question: "How secure is my data?",
    answer:
      "All data is encrypted at rest and in transit. You control what you share, and you can export or delete your data at any time from account settings.",
    category: "Security",
  },
];

const categories = ["All", ...new Set(faqItems.map((item) => item.category))];

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [activeQuestion, setActiveQuestion] = useState(faqItems[0]?.question);

  const filteredFaqs = useMemo(() => {
    const lowerQuery = query.trim().toLowerCase();
    return faqItems.filter((faq) => {
      const inCategory =
        activeCategory === "All" || faq.category === activeCategory;
      if (!inCategory) return false;
      if (!lowerQuery) return true;
      return (
        faq.question.toLowerCase().includes(lowerQuery) ||
        faq.answer.toLowerCase().includes(lowerQuery)
      );
    });
  }, [activeCategory, query]);

  const highlight = (text) => {
    if (!query.trim()) return text;
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const parts = text.split(new RegExp(`(${escaped})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark
          key={`${part}-${index}`}
          className="rounded bg-brand-100 px-1 text-[var(--brand-700)]"
        >
          {part}
        </mark>
      ) : (
        <span key={`${part}-${index}`}>{part}</span>
      )
    );
  };

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-content">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-sm font-medium text-[var(--brand-700)] shadow-sm"
          >
            <FaQuestionCircle className="text-[var(--brand-600)]" />
            Need a quick answer?
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Explore the most common topics about ExpireSense. Use the filters or
            search to find exactly what you need.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(240px,1fr)]">
          <div>
            <div className="flex flex-col gap-5 rounded-2xl border border-brand-100 bg-white/80 p-6 shadow-sm backdrop-blur">
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search keywords like receipts, reminders, pricing..."
                  className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:border-[var(--brand-400)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-200)]"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const isActive = activeCategory === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                        isActive
                          ? "border-[var(--brand-500)] bg-brand-50 text-[var(--brand-700)] shadow-sm"
                          : "border-slate-200 bg-white text-slate-600 hover:border-brand-200 hover:text-[var(--brand-600)]"
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>

            <motion.div layout className="mt-8 space-y-4">
              <AnimatePresence initial={false}>
                {filteredFaqs.map((faq) => {
                  const isOpen = activeQuestion === faq.question;
                  return (
                    <FaqItem
                      key={faq.question}
                      faq={faq}
                      isOpen={isOpen}
                      onToggle={() =>
                        setActiveQuestion((prev) =>
                          prev === faq.question ? null : faq.question
                        )
                      }
                      highlight={highlight}
                      panelId={`faq-panel-${slugify(faq.question)}`}
                    />
                  );
                })}
              </AnimatePresence>

              {filteredFaqs.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="rounded-2xl border border-dashed border-brand-200 bg-white/70 p-8 text-center text-slate-600"
                >
                  We couldn’t find a match for that topic. Try different
                  keywords or reach out to our team.
                </motion.div>
              )}
            </motion.div>
          </div>

          <aside className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-slate-900">
                Still need help?
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Our team is just a message away. We respond within 24 hours on
                business days.
              </p>

              <div className="mt-5 space-y-4 text-sm text-slate-700">
                <SupportRow
                  icon={<FaEnvelopeOpenText className="text-[var(--brand-600)]" />}
                  title="Reach out by email"
                  description="contact@expiresense.com"
                />
                <SupportRow
                  icon={<FaHeadset className="text-[var(--brand-600)]" />}
                  title="Book a demo call"
                  description="Schedule a time that works for your team."
                  href="/contact"
                />
                <SupportRow
                  icon={<FaLifeRing className="text-[var(--brand-600)]" />}
                  title="Visit the help center"
                  description="Guides, onboarding tips, and product updates."
                  href="/blog"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm"
            >
              <h3 className="text-base font-semibold text-slate-900">
                Tip for best results
              </h3>
              <p className="mt-2 leading-relaxed">
                Many teams combine ExpireSense with weekly planning rituals.
                Start small: track a single fridge shelf or pantry section, then
                expand as everyone gets comfortable.
              </p>
            </motion.div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function FaqItem({ faq, isOpen, onToggle, highlight, panelId }) {
  const buttonId = `${panelId}-trigger`;

  return (
    <motion.article
      layout
      initial={false}
      className={`overflow-hidden rounded-2xl border ${
        isOpen
          ? "border-brand-200 bg-white shadow-lg"
          : "border-slate-200 bg-white/60 shadow-sm hover:border-brand-200 hover:bg-white"
      } transition`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
        aria-controls={panelId}
        id={buttonId}
      >
        <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-50 text-[var(--brand-600)]">
          <FaQuestionCircle />
        </span>
        <div className="flex-1">
          <p className="text-xs uppercase tracking-wide text-[var(--brand-600)]">
            {faq.category}
          </p>
          <h3 className="text-base sm:text-lg font-semibold text-slate-900">
            {highlight(faq.question)}
          </h3>
        </div>
        <span
          className={`text-xl font-semibold text-[var(--brand-600)] transition-transform ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="px-6 pb-6"
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
          >
            <p className="text-sm leading-relaxed text-slate-600">
              {highlight(faq.answer)}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

function SupportRow({ icon, title, description, href }) {
  const content = (
    <>
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-xl shadow-sm">
        {icon}
      </span>
      <div>
        <p className="font-semibold text-slate-900">{title}</p>
        <p className="text-sm text-slate-600">{description}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="flex items-center gap-3 rounded-xl border border-transparent p-3 transition hover:border-brand-200 hover:bg-white"
      >
        {content}
      </a>
    );
  }

  return <div className="flex items-center gap-3 rounded-xl bg-white p-3">{content}</div>;
}
