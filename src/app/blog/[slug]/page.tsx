import { blogArticles, getArticle, getRelatedArticles } from "@/data/blog";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const LINKEDIN_URL =
  "https://www.linkedin.com/in/dr-rimsha-shahid-8a05b4352/";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return {
      title: "Article Not Found | Dr. Rimsha Shahid",
    };
  }

  return {
    title: `${article.title} | Dr. Rimsha Shahid`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      authors: [article.author.name],
      tags: [article.category],
    },
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article.slug, 3);

  return (
    <main>
      {/* ─── HERO ─── */}
      <section className="bg-secondary py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <Link
                href="/blog"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Blog
              </Link>
              <svg
                className="h-4 w-4 text-white/40"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
              <span className="text-sm text-white/80">{article.category}</span>
            </div>

            <span className="mt-6 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">
              {article.category}
            </span>

            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {article.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 overflow-hidden rounded-full bg-white/20">
                  <Image
                    src={article.author.image}
                    alt={article.author.name}
                    width={32}
                    height={32}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-white/90">
                    {article.author.name}
                  </p>
                  <p className="text-xs text-white/60">{article.author.title}</p>
                </div>
              </div>
              <span className="text-white/40">|</span>
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className="text-white/40">|</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ARTICLE CONTENT ─── */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <article
            className="prose prose-lg prose-slate max-w-none prose-headings:text-text prose-p:text-text-light prose-li:text-text-light prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </section>

      {/* ─── AUTHOR BOX ─── */}
      <section className="bg-surface/50 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6 rounded-2xl border border-border bg-white p-6 sm:flex-row sm:p-8">
            <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full bg-surface">
              <Image
                src={article.author.image}
                alt={article.author.name}
                width={80}
                height={80}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-bold text-text">
                {article.author.name}
              </h3>
              <p className="text-sm text-primary">{article.author.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-text-light">
                MBBS-qualified physician and registered medical practitioner
                specializing in healthcare revenue cycle management. Combining
                clinical expertise with professional medical billing knowledge
                to deliver accurate, compliant revenue cycle solutions.
              </p>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── RELATED ARTICLES ─── */}
      {relatedArticles.length > 0 && (
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
              Related Articles
            </h2>
            <div className="mt-2 h-[3px] w-12 rounded-full bg-primary" />

            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((related) => (
                <article
                  key={related.slug}
                  className="hover-lift flex flex-col rounded-2xl border border-border bg-white overflow-hidden"
                >
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <span className="inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {related.category}
                    </span>

                    <h3 className="mt-4 text-lg font-bold text-text line-clamp-2">
                      <Link
                        href={`/blog/${related.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {related.title}
                      </Link>
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-relaxed text-text-light line-clamp-3">
                      {related.excerpt}
                    </p>

                    <div className="mt-6 border-t border-border pt-4">
                      <Link
                        href={`/blog/${related.slug}`}
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
      )}

      {/* ─── LINKEDIN CTA ─── */}
      <section className="bg-primary py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Enjoyed This Article?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Follow Dr. Rimsha on LinkedIn for more expert insights on medical
            billing, healthcare IT, and revenue cycle management.
          </p>
          <div className="mt-8">
            <a
              href={LINKEDIN_URL}
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
