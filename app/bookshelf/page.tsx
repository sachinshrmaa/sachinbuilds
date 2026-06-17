import type { Metadata } from "next";

import { Container } from "@/app/_components/container";
import { BookCard } from "@/app/_components/book-card";
import { getAllBooks } from "@/lib/content/bookshelf";

export const metadata: Metadata = {
  title: "Bookshelf",
  description: "Books I'm reading, have read, and want to read next.",
  alternates: { canonical: "/bookshelf" },
};

export default async function BookshelfPage() {
  const books = await getAllBooks();

  return (
    <Container>
      <h1 className="font-serif text-3xl font-semibold tracking-tight text-ink">
        Bookshelf
      </h1>
      <p className="mt-2 text-ink-muted">
        Books I&apos;m reading, have read, and want to read next.
      </p>

      {books.length > 0 ? (
        <div className="mt-6">
          {books.map((book) => (
            <BookCard key={book.slug} book={book} />
          ))}
        </div>
      ) : (
        <p className="mt-6 text-ink-muted">No books added yet.</p>
      )}
    </Container>
  );
}
