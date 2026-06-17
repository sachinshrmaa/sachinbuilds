import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/app/_components/container";
import { DraftBadge } from "@/app/_components/draft-badge";
import { Prose } from "@/app/_components/prose";
import { WritingCard } from "@/app/_components/writing-card";
import {
  getAllWritings,
  getSuggestedWritings,
  getWritingBySlug,
} from "@/lib/content/writings";
import { formatDate } from "@/lib/format-date";
import { siteConfig } from "@/lib/site-config";

type Params = { slug: string };

// In a production build, getAllWritings() already excludes drafts, so this
// list only ever contains published slugs there — and with dynamicParams
// disabled, any other slug (including a draft) 404s immediately instead of
// being rendered on demand. In `next dev`, drafts stay in this list so they
// remain previewable locally.
export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return getAllWritings().map((writing) => ({ slug: writing.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const writing = await getWritingBySlug(slug);

  if (!writing) {
    return {};
  }

  return {
    title: writing.title,
    description: writing.excerpt,
    alternates: { canonical: `/writings/${writing.slug}` },
    robots: writing.draft ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "article",
      title: writing.title,
      description: writing.excerpt,
      publishedTime: writing.date,
      url: `/writings/${writing.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: writing.title,
      description: writing.excerpt,
    },
  };
}

export default async function WritingPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const writing = await getWritingBySlug(slug);

  if (!writing) {
    notFound();
  }

  const suggested = getSuggestedWritings(writing.slug, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: writing.title,
    description: writing.excerpt,
    datePublished: writing.date,
    author: { "@type": "Person", name: siteConfig.name },
    mainEntityOfPage: `${siteConfig.url}/writings/${writing.slug}`,
  };

  return (
    <Container>
      <article>
        <Link
          href="/writings"
          className="text-xs font-medium text-accent hover:underline sm:text-sm"
        >
          &larr; All writings
        </Link>

        <header className="mt-4">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="font-serif text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              {writing.title}
            </h1>
            {writing.draft ? <DraftBadge /> : null}
          </div>
          <div className="mt-2 flex items-center gap-2 text-xs text-ink-faint sm:text-sm">
            <time dateTime={writing.date}>{formatDate(writing.date)}</time>
            <span aria-hidden="true">&middot;</span>
            <span>{writing.readingTime} min read</span>
          </div>
          {writing.draft ? (
            <p className="mt-3 text-xs text-ink-faint">
              This post is a draft. It&apos;s only visible while running the
              site locally and is excluded from the production build,
              sitemap, and RSS feed.
            </p>
          ) : null}
        </header>

        <Prose html={writing.html} className="mt-6" />
      </article>

      {suggested.length > 0 ? (
        <section className="mt-12 border-t border-hairline pt-8">
          <h2 className="font-serif text-base font-semibold tracking-tight text-ink sm:text-lg">
            Suggested reading
          </h2>
          <div className="mt-1">
            {suggested.map((item) => (
              <WritingCard key={item.slug} writing={item} />
            ))}
          </div>
        </section>
      ) : null}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Container>
  );
}
