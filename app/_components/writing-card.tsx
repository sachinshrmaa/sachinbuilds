import Link from "next/link";

import type { WritingSummary } from "@/lib/content/writings";
import { formatDate } from "@/lib/format-date";
import { DraftBadge } from "./draft-badge";

export function WritingCard({ writing }: { writing: WritingSummary }) {
  return (
    <article className="border-b border-hairline py-5 first:pt-0 last:border-b-0">
      <Link href={`/writings/${writing.slug}`} className="group block">
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="font-serif text-lg font-semibold tracking-tight text-ink transition-colors group-hover:text-accent sm:text-xl">
            {writing.title}
          </h2>
          {writing.draft ? <DraftBadge /> : null}
        </div>

        <div className="mt-1.5 flex items-center gap-2 text-xs text-ink-faint">
          <time dateTime={writing.date}>{formatDate(writing.date)}</time>
          <span aria-hidden="true">&middot;</span>
          <span>{writing.readingTime} min read</span>
        </div>

        <p className="mt-2 text-sm text-ink-muted">{writing.excerpt}</p>

        {writing.tags && writing.tags.length > 0 ? (
          <ul className="mt-3 flex flex-wrap gap-2">
            {writing.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent"
              >
                {tag}
              </li>
            ))}
          </ul>
        ) : null}
      </Link>
    </article>
  );
}
