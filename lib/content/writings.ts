import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

import { markdownToHtml } from "./markdown";
import { estimateReadingTime } from "./reading-time";

const WRITINGS_DIR = path.join(process.cwd(), "content", "writings");

export type WritingFrontmatter = {
  title: string;
  date: string;
  excerpt: string;
  tags?: string[];
  draft?: boolean;
};

export type WritingSummary = WritingFrontmatter & {
  slug: string;
  readingTime: number;
};

export type Writing = WritingSummary & {
  html: string;
};

function draftPreviewAllowed(): boolean {
  return process.env.NODE_ENV !== "production";
}

function listSlugs(): string[] {
  return fs
    .readdirSync(WRITINGS_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

function readFile(slug: string) {
  const filePath = path.join(WRITINGS_DIR, `${slug}.md`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return { data: data as WritingFrontmatter, content };
}

function byNewest(a: WritingSummary, b: WritingSummary) {
  return a.date < b.date ? 1 : -1;
}

/**
 * Writings visible in the current environment: published posts everywhere,
 * plus drafts when running locally (`next dev`) so they can be previewed
 * before publishing. Drafts are always excluded once built for production.
 */
export function getAllWritings(): WritingSummary[] {
  const canPreviewDrafts = draftPreviewAllowed();

  return listSlugs()
    .map((slug) => {
      const { data, content } = readFile(slug);
      return { slug, ...data, readingTime: estimateReadingTime(content) };
    })
    .filter((writing) => !writing.draft || canPreviewDrafts)
    .sort(byNewest);
}

/** Published posts only, regardless of environment — for sitemap/RSS. */
export function getPublishedWritings(): WritingSummary[] {
  return getAllWritings().filter((writing) => !writing.draft);
}

export async function getWritingBySlug(slug: string): Promise<Writing | null> {
  const filePath = path.join(WRITINGS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const { data, content } = readFile(slug);
  if (data.draft && !draftPreviewAllowed()) return null;

  const html = await markdownToHtml(content);
  return { slug, ...data, readingTime: estimateReadingTime(content), html };
}

export function getSuggestedWritings(
  currentSlug: string,
  limit = 2
): WritingSummary[] {
  const published = getPublishedWritings();
  const others = published.filter((w) => w.slug !== currentSlug);
  const current = getAllWritings().find((w) => w.slug === currentSlug);
  const currentTags = new Set(current?.tags ?? []);

  return others
    .map((writing) => ({
      writing,
      sharedTags: (writing.tags ?? []).filter((tag) => currentTags.has(tag)).length,
    }))
    .sort((a, b) => {
      if (a.sharedTags !== b.sharedTags) return b.sharedTags - a.sharedTags;
      return byNewest(a.writing, b.writing);
    })
    .slice(0, limit)
    .map((entry) => entry.writing);
}
