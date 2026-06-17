"use client";

import { useMemo, useState } from "react";

import type { WritingSummary } from "@/lib/content/writings";
import { WritingCard } from "./writing-card";

export function WritingsExplorer({ writings }: { writings: WritingSummary[] }) {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const tags = useMemo(() => {
    const set = new Set<string>();
    for (const writing of writings) {
      for (const tag of writing.tags ?? []) set.add(tag);
    }
    return Array.from(set).sort();
  }, [writings]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return writings.filter((writing) => {
      const matchesQuery =
        !q ||
        writing.title.toLowerCase().includes(q) ||
        writing.excerpt.toLowerCase().includes(q);
      const matchesTag = !activeTag || (writing.tags ?? []).includes(activeTag);
      return matchesQuery && matchesTag;
    });
  }, [writings, query, activeTag]);

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search writings…"
          aria-label="Search writings"
          className="w-full rounded-full border border-hairline bg-paper-raised px-4 py-2 text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-accent/30 sm:max-w-xs"
        />

        {tags.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveTag(null)}
              aria-pressed={activeTag === null}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                activeTag === null
                  ? "bg-ink text-paper"
                  : "bg-accent-soft text-accent hover:opacity-80"
              }`}
            >
              All
            </button>
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(tag === activeTag ? null : tag)}
                aria-pressed={activeTag === tag}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  activeTag === tag
                    ? "bg-ink text-paper"
                    : "bg-accent-soft text-accent hover:opacity-80"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        ) : null}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-4">
          {filtered.map((writing) => (
            <WritingCard key={writing.slug} writing={writing} />
          ))}
        </div>
      ) : (
        <p className="mt-6 text-sm text-ink-muted">
          {query ? `No writings match "${query}".` : "No writings match this filter."}
        </p>
      )}
    </div>
  );
}
