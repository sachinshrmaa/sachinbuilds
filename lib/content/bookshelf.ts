import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

import { markdownToHtml } from "./markdown";

const BOOKSHELF_DIR = path.join(process.cwd(), "content", "bookshelf");

export type BookStatus = "reading" | "read" | "want-to-read";

export type BookFrontmatter = {
  title: string;
  author: string;
  status: BookStatus;
  rating?: number;
  link?: string;
  date?: string;
};

export type Book = BookFrontmatter & {
  slug: string;
  html: string;
};

const STATUS_ORDER: Record<BookStatus, number> = {
  reading: 0,
  read: 1,
  "want-to-read": 2,
};

function listSlugs(): string[] {
  return fs
    .readdirSync(BOOKSHELF_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export async function getAllBooks(): Promise<Book[]> {
  const slugs = listSlugs();

  const books = await Promise.all(
    slugs.map(async (slug) => {
      const filePath = path.join(BOOKSHELF_DIR, `${slug}.md`);
      const raw = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(raw);
      const html = content.trim() ? await markdownToHtml(content) : "";
      return { slug, ...(data as BookFrontmatter), html };
    })
  );

  return books.sort((a, b) => {
    if (STATUS_ORDER[a.status] !== STATUS_ORDER[b.status]) {
      return STATUS_ORDER[a.status] - STATUS_ORDER[b.status];
    }
    return (b.date ?? "") < (a.date ?? "") ? -1 : 1;
  });
}

export async function getCurrentlyReading(): Promise<Book | null> {
  const books = await getAllBooks();
  return books.find((book) => book.status === "reading") ?? null;
}
