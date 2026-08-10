import { blogArticles } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Blog | Dr. Rimsha Shahid - Medical Billing & Healthcare Insights",
  description:
    "Read expert insights on medical billing, revenue cycle management, healthcare IT, and denial management from Dr. Rimsha Shahid, MBBS physician and medical billing specialist.",
};

export default function BlogPage() {
  return (
    <main>
      {/* ─── HERO ─── */}
      <section className="bg-secondary py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/60">
              Blog
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Blog
            </h1>
            <p className="mt-4 text-lg text-white/80 sm:text-xl">
              Insights on Medical Billing, Healthcare IT &amp; Revenue Cycle
            </p>
          </div>
        </div>
      </section>

      {/* ─── ARTICLES GRID ─── */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogArticles.map((article) => (
              <article
                key={article.slug}
                className="hover-lift flex flex-col rounded-2xl border border-border bg-white overflow-hidden"
              >
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {article.category}
                    </span>
                    <span className="text-xs text-text-light">
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="mt-4 text-lg font-bold text-text line-clamp-2">
                    <Link
                      href={`/blog/${article.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {article.title}
                    </Link>
                  </h2>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-text-light line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                    <time className="text-xs text-text-light" dateTime={article.date}>
                      {new Date(article.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <Link
                      href={`/blog/${article.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                    >
                      Read More
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LINKEDIN CTA ─── */}
      <section className="bg-primary py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Stay Updated with Dr. Rimsha
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Follow Dr. Rimsha on LinkedIn for the latest insights on medical
            billing, healthcare IT, and revenue cycle management.
          </p>
          <div className="mt-8">
            <a
              href="https://www.linkedin.com/in/dr-rimsha-shahid-8a05b4352/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-secondary shadow-sm transition hover:bg-white/90"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Follow on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
