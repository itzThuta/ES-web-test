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

  const fade = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden surface-gradient py-20"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_top,rgba(54,148,134,0.16),transparent_55%)]" />
      <div className="relative max-w-content">
        {/* Header */}
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="show"
          className="mb-12 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--brand-600)]">
            We’re here to help
          </span>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            Contact <span className="text-[var(--brand-600)]">ExpireSense</span>
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">
            Tell us about your kitchen or operation—our team responds within one business day.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="show"
            className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm backdrop-blur-sm"
          >
              <h3 className="mb-6 text-2xl font-bold text-slate-900">
                Get in Touch
              </h3>

              <ul className="space-y-5">
                <li className="flex items-center gap-4 text-slate-800">
                  <span className="rounded-lg border border-brand-200 bg-brand-50 p-3 text-[var(--brand-600)]">
                    <FaEnvelope />
                  </span>
                  contact@expiresense.com
                </li>
                <li className="flex items-center gap-4 text-slate-800">
                  <span className="rounded-lg border border-brand-200 bg-brand-50 p-3 text-[var(--brand-600)]">
                    <FaPhoneAlt />
                  </span>
                  +66 234 567 890
                </li>
                <li className="flex items-center gap-4 text-slate-800">
                  <span className="rounded-lg border border-brand-200 bg-brand-50 p-3 text-[var(--brand-600)]">
                    <FaMapMarkerAlt />
                  </span>
                  Bangkok, Thailand
                </li>
              </ul>

              <div className="mt-8">
                <h4 className="font-semibold text-slate-900 mb-3">Follow us</h4>
                <div className="flex gap-6 text-xl text-slate-600">
                  <a
                    href="https://www.facebook.com/share/19akE2JQY7/?mibextid=wwXIfr"
                    className="transition hover:text-[var(--brand-600)]"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/expiresense/"
                    className="transition hover:text-[var(--brand-600)]"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://www.instagram.com/expiresense"
                    className="transition hover:text-[var(--brand-600)]"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://x.com/ExpireSense"
                    className="transition hover:text-[var(--brand-600)]"
                  >
                    <FaXTwitter />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.form
            onSubmit={onSubmit}
            variants={fade}
            initial="hidden"
            whileInView="show"
            className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm backdrop-blur-sm"
          >
            <h3 className="mb-6 text-2xl font-bold text-slate-900">
              Send a Message
            </h3>
            <div className="grid gap-5 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 
                           placeholder-slate-400 text-sm focus:ring-2 focus:ring-[var(--brand-400)] 
                           focus:border-[var(--brand-400)] outline-none transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                pattern="^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 
                           placeholder-slate-400 text-sm focus:ring-2 focus:ring-[var(--brand-400)] 
                           focus:border-[var(--brand-400)] outline-none transition"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your message..."
              required
              rows="6"
              className="mt-4 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 
                         placeholder-slate-400 text-sm focus:ring-2 focus:ring-[var(--brand-400)] 
                         focus:border-[var(--brand-400)] outline-none transition resize-none"
            />

            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="rounded-lg bg-[var(--brand-600)] px-6 py-3 
                           font-semibold text-white shadow hover:bg-[var(--brand-700)] 
                           transition disabled:opacity-60"
              >
                {loading ? "Sending…" : "Send Message"}
              </button>
            </div>

            {result && (
              <p
                className={`mt-4 text-sm font-medium ${
                  status === "success" ? "text-green-700" : "text-red-600"
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
