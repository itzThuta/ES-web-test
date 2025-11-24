import { useMemo } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaArrowRight, FaClock, FaTag } from "react-icons/fa";
import { blogPosts } from "../data/blogPosts";
import {
  // eslint-disable-next-line no-unused-vars
  fadeIn,
  popIn,
  slideUp,
  staggerChildren,
} from "../utils/motionPresets";

export default function Blog() {
  const groupedByTag = useMemo(() => {
    return blogPosts.reduce((acc, post) => {
      acc[post.tag] = (acc[post.tag] || 0) + 1;
      return acc;
    }, {});
  }, []);

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-content">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-slate-200 bg-white px-6 py-12 text-center shadow-sm sm:px-10 sm:py-16 sm:text-left"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1 text-[0.7rem] font-medium text-[var(--brand-600)]">
            Insights & stories
          </span>
          <h1 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
            Inside the ExpireSense kitchen
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-base sm:text-lg text-slate-600 sm:mx-0">
            Real stories, smart tips, and sustainability insights to help you
            cut waste and save more.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 sm:justify-start">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-600)] px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[var(--brand-700)]"
            >
              Become a contributor
              <FaArrowRight className="text-xs" />
            </Link>
            <a
              href="#blog"
              className="inline-flex items-center gap-2 rounded-full border border-brand-200 px-5 py-3 text-sm font-semibold text-[var(--brand-600)] transition hover:border-brand-300 hover:bg-brand-50"
            >
              Browse latest posts
              <FaArrowRight className="text-xs" />
            </a>
          </div>
        </motion.div>

        <div
          id="latest-posts"
          className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]"
        >
          <motion.div
            variants={staggerChildren(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
          >
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                variants={popIn(index * 0.06)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-wide text-slate-400">
                  <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-[var(--brand-600)]">
                    <FaTag className="text-[10px]" />
                    {post.tag}
                  </span>
                  <span className="flex items-center gap-2 text-slate-400">
                    <FaClock className="text-[10px]" />
                    {post.readingTime}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span>{post.date}</span>
                </div>

                <h2 className="mt-5 text-xl font-semibold text-slate-900 transition group-hover:text-[var(--brand-700)]">
                  {post.title}
                </h2>
                <p className="mt-3 text-base text-slate-600">{post.excerpt}</p>

                <div className="mt-6 flex items-center justify-between text-sm font-semibold text-[var(--brand-600)]">
                  <span>By {post.author}</span>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-[var(--brand-600)] transition group-hover:gap-3"
                  >
                    Read article
                    <FaArrowRight className="text-xs" />
                  </Link>
                </div>

                <div className="pointer-events-none absolute -right-12 top-1/2 hidden h-40 w-40 -translate-y-1/2 rounded-full bg-[rgba(54,148,134,0.18)] blur-2xl transition duration-500 group-hover:scale-125 sm:block" />
              </motion.article>
            ))}
          </motion.div>

          <aside className="space-y-6">
            <motion.div
              variants={slideUp(0.05)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-slate-900">
                Subscribe for fresh ideas
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                One thoughtful email each month with actionable tactics and case
                studies from the ExpireSense community.
              </p>
              <form
                className="mt-5 space-y-3"
                onSubmit={(event) => event.preventDefault()}
              >
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-[var(--brand-400)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-200)]"
                />
                <button
                  type="submit"
                  className="w-full rounded-xl bg-[var(--brand-600)] px-4 py-3 text-sm font-semibold text-white shadow transition hover:bg-[var(--brand-700)]"
                >
                  Join the newsletter
                </button>
              </form>
            </motion.div>

            <motion.div
              variants={slideUp(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-slate-900">
                Trending topics
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {Object.entries(groupedByTag)
                  .sort(([, countA], [, countB]) => countB - countA)
                  .map(([tag, count]) => (
                    <li
                      key={tag}
                      className="flex items-center justify-between rounded-xl border border-transparent px-3 py-2 transition hover:border-brand-200 hover:bg-brand-50/60"
                    >
                      <span>{tag}</span>
                      <span className="rounded-full bg-brand-100 px-2 py-0.5 text-xs font-semibold text-[var(--brand-700)]">
                        {count}
                      </span>
                    </li>
                  ))}
              </ul>
            </motion.div>

            <motion.div
              variants={slideUp(0.15)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-slate-900">
                Looking for press info?
              </h2>
              <p className="mt-2 leading-relaxed">
                Download our press kit, brand assets, and ready-to-use quotes to
                support coverage of ExpireSense.
              </p>
              <Link
                to="/contact"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-700)] transition hover:gap-3"
              >
                Request press kit
                <FaArrowRight className="text-xs" />
              </Link>
            </motion.div>
          </aside>
        </div>
      </div>
    </section>
  );
}
