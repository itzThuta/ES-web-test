import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiClock, FiMessageCircle } from "react-icons/fi";

export default function Contact() {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setResult("");
    setStatus(null);

    const formData = new FormData(e.target);
    formData.append("access_key", "0a1ca24c-38f3-4525-b391-252642d10a2e");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setResult("✅ Message sent successfully!");
        e.target.reset();
      } else {
        setStatus("error");
        setResult(data.message || "❌ Something went wrong.");
      }
    // eslint-disable-next-line no-unused-vars
    } catch (_error) {
      setStatus("error");
      setResult("⚠️ Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const popFade = {
    hidden: { opacity: 0, y: 28, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.18, 0.89, 0.32, 1.28] },
    },
  };

  return (
    <section id="contact" className="relative overflow-hidden py-16 bg-transparent">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(circle_at_top,_rgba(54,148,134,0.16),transparent_65%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(circle_at_bottom,_rgba(20,42,38,0.08),transparent_60%)]" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          variants={popFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="text-center"
        >
          <span className="badge-soft mx-auto">We respond fast</span>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            Contact <span className="text-[var(--brand-600)]">ExpireSense</span>
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">
            Zero-waste kitchens start with a quick conversation. Pick what works best for you—we reply
            in under 6 business hours.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <motion.div
            variants={popFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <div className="rounded-3xl border border-brand-200 bg-white/90 p-8 shadow-lg backdrop-blur">
              <h3 className="text-2xl font-semibold text-slate-900">Reach us directly</h3>
              <p className="mt-2 text-sm text-slate-500">
                Email, phone, or swing by a studio. We route every request to the right squad.
              </p>
              <ul className="mt-6 space-y-5 text-sm text-slate-600">
                {[
                  {
                    icon: <FaEnvelope />,
                    label: "Email",
                    value: "contact@expiresense.com",
                    href: "mailto:contact@expiresense.com",
                  },
                  {
                    icon: <FaPhoneAlt />,
                    label: "Phone",
                    value: "+66 234 567 890",
                    href: "tel:+66234567890",
                  },
                  {
                    icon: <FaMapMarkerAlt />,
                    label: "Studios",
                    value: "Bangkok · Singapore · Sydney",
                  },
                ].map((item) => (
                  <li key={item.label} className="flex items-center gap-4 rounded-2xl border border-brand-100 bg-brand-50/60 p-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[var(--brand-600)] shadow-inner">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-base font-semibold text-slate-900 transition hover:text-[var(--brand-600)]"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-base font-semibold text-slate-900">{item.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                {["Avg. reply 6 hrs", "Global support", "SOC 2 ready"].map((tag) => (
                  <span key={tag} className="rounded-full border border-brand-200 bg-white px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-dashed border-brand-200 bg-brand-50/80 px-4 py-3 text-sm text-slate-600">
                Office hours: Mon–Fri · 8:00–19:00 ICT — leave a note anytime and we’ll queue it first
                thing next morning.
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="mailto:contact@expiresense.com?subject=Book%20a%20demo"
                  className="inline-flex items-center justify-center rounded-full border border-brand-200 px-5 py-2 text-sm font-semibold text-[var(--brand-700)] transition hover:border-brand-300 hover:text-[var(--brand-600)]"
                >
                  Book a live call ↗
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-brand-200 bg-white/90 p-6 shadow-lg backdrop-blur">
              <h4 className="text-lg font-semibold text-slate-900">Follow us</h4>
              <p className="mt-1 text-sm text-slate-600">Tips, playbooks, and behind the scenes.</p>
              <div className="mt-4 flex gap-4 text-xl text-slate-500">
                {[FaFacebook, FaLinkedin, FaInstagram, FaXTwitter].map((Icon, idx) => {
                  const socials = [
                    "https://www.facebook.com/share/19akE2JQY7/?mibextid=wwXIfr",
                    "https://www.linkedin.com/company/expiresense/",
                    "https://www.instagram.com/expiresense",
                    "https://x.com/ExpireSense",
                  ];
                  return (
                    <a
                      key={socials[idx]}
                      href={socials[idx]}
                      className="transition hover:text-[var(--brand-600)]"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            variants={popFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-3xl border border-brand-200 bg-white p-8 shadow-xl"
          >
            <div className="flex items-center gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-[var(--brand-600)]">
                <FiMessageCircle className="text-xl" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Contact form
                </p>
                <h3 className="text-2xl font-bold text-slate-900">Tell us what you need</h3>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-600">
                Name
                <input
                  type="text"
                  name="name"
                  required
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-[var(--brand-400)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-100)]"
                  placeholder="Jane Alvarez"
                />
              </label>
              <label className="text-sm font-semibold text-slate-600">
                Email
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-[var(--brand-400)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-100)]"
                  placeholder="you@company.com"
                />
              </label>
              <label className="text-sm font-semibold text-slate-600">
                Company
                <input
                  type="text"
                  name="company"
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-[var(--brand-400)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-100)]"
                  placeholder="Kitchen Collective"
                />
              </label>
              <label className="text-sm font-semibold text-slate-600">
                Phone
                <input
                  type="tel"
                  name="phone"
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-[var(--brand-400)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-100)]"
                  placeholder="+66 234 567 890"
                />
              </label>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-600">
                Inquiry focus
                <select
                  name="topic"
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-[var(--brand-400)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-100)]"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="demo">Product demo</option>
                  <option value="partnership">Partnership</option>
                  <option value="support">Customer support</option>
                  <option value="media">Press / media</option>
                </select>
              </label>
              <label className="text-sm font-semibold text-slate-600">
                Preferred contact window
                <select
                  name="contact_window"
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-[var(--brand-400)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-100)]"
                  defaultValue="anytime"
                >
                  <option value="anytime">Anytime</option>
                  <option value="morning">Morning (8am–12pm)</option>
                  <option value="afternoon">Afternoon (12pm–5pm)</option>
                  <option value="evening">Evening (5pm–8pm)</option>
                </select>
              </label>
            </div>

            <label className="mt-4 block text-sm font-semibold text-slate-600">
              Message
              <textarea
                name="message"
                required
                rows="5"
                className="mt-1 w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-[var(--brand-400)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-100)]"
                placeholder="Share context, timelines, and what success looks like."
              />
            </label>

            <label className="mt-4 flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-600">
              <input type="checkbox" name="newsletter" className="rounded border-slate-300" />
              Keep me in the loop about events & product updates.
            </label>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-sm text-slate-500">
                <FiClock className="mr-2 inline text-[var(--brand-600)]" />
                Avg. response: 6 business hrs
              </span>
              <button
                type="submit"
                disabled={loading}
                className="rounded-full bg-[var(--brand-600)] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[rgba(54,148,134,0.35)] transition hover:-translate-y-0.5 hover:bg-[var(--brand-700)] disabled:opacity-60"
              >
                {loading ? "Sending…" : "Send message"}
              </button>
            </div>

            {result && (
              <p
                className={`mt-4 text-sm font-semibold ${
                  status === "success" ? "text-[var(--brand-600)]" : "text-red-500"
                }`}
              >
                {result}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
