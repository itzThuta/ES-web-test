import { Link, useParams } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaArrowLeft, FaClock, FaTag } from "react-icons/fa";
import { blogPosts } from "../data/blogPosts";
import { popIn, slideUp } from "../utils/motionPresets";

export default function BlogDetail() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <section className="bg-white py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-3xl font-bold text-slate-900">Article not found</h1>
          <p className="mt-3 text-slate-600">
            The article you are looking for may have been moved. Explore the{" "}
            <Link to="/blog" className="text-[var(--brand-600)] underline">
              blog overview
            </Link>{" "}
            for the latest stories.
          </p>
        </div>
      </section>
    );
  }

  return (
    <article className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-content">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm transition hover:border-[var(--brand-200)] hover:text-[var(--brand-600)]"
        >
          <FaArrowLeft className="text-xs" />
          Back to all posts
        </Link>

        <motion.header
          variants={popIn(0.05)}
          initial="hidden"
          animate="show"
          className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
        >
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1 text-[var(--brand-600)]">
            {post.tag}
          </span>
            <span className="flex items-center gap-2 text-slate-400">
              <FaClock className="text-[10px]" />
              {post.readingTime}
            </span>
            <span className="flex items-center gap-2 text-slate-400">
              <FaTag className="text-[10px]" />
              {post.date}
            </span>
          </div>
          <h1 className="mt-4 text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-3 text-sm text-slate-500">By {post.author}</p>
        </motion.header>

        <motion.div
          variants={popIn(0.12)}
          initial="hidden"
          animate="show"
          className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
        >
          <img
            src={post.hero}
            alt={post.title}
            className="h-72 w-full object-cover"
          />
        </motion.div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,1fr)]">
          <motion.div
            variants={slideUp(0.1)}
            initial="hidden"
            animate="show"
            className="space-y-10 text-base leading-relaxed text-slate-700"
          >
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-semibold text-slate-900">
                  {section.heading}
                </h2>
                <p className="mt-3">
                  {section.body}
                </p>
              </section>
            ))}
            <div className="rounded-3xl border border-brand-200 bg-brand-50/70 p-6 text-slate-700">
              <p>{post.conclusion}</p>
            </div>
          </motion.div>

          <motion.aside
            variants={slideUp(0.18)}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Key takeaways
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {post.sections.slice(0, 3).map((section) => (
                  <li key={section.heading}>• {section.heading}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">
                Continue the conversation
              </h3>
              <p className="mt-2">
                Share your own tips or request a tailored demo and we’ll showcase how ExpireSense can
                support your team.
              </p>
              <Link
                to="/contact"
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-600)] transition hover:gap-3"
              >
                Talk with our team
                <span aria-hidden>↗</span>
              </Link>
            </div>
          </motion.aside>
        </div>
      </div>
    </article>
  );
}
