import type { Book } from "@/lib/content/bookshelf";
import { Prose } from "./prose";

const STATUS_LABEL: Record<Book["status"], string> = {
  reading: "Currently reading",
  read: "Read",
  "want-to-read": "Want to read",
};

function RatingStars({ rating }: { rating: number }) {
  return (
    <span className="text-accent" aria-label={`Rated ${rating} out of 5`}>
      {"★".repeat(rating)}
      <span className="text-ink-faint">{"★".repeat(5 - rating)}</span>
    </span>
  );
}

export function BookCard({ book }: { book: Book }) {
  return (
    <article className="border-b border-hairline py-5 first:pt-0 last:border-b-0">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="font-serif text-base font-semibold tracking-tight text-ink sm:text-lg">
          {book.title}
        </h2>
        {book.rating ? <RatingStars rating={book.rating} /> : null}
      </div>

      <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-ink-faint">
        <span>{book.author}</span>
        <span aria-hidden="true">&middot;</span>
        <span className="text-accent">{STATUS_LABEL[book.status]}</span>
      </div>

      {book.html ? <Prose html={book.html} className="prose-sm mt-2" /> : null}

      {book.link ? (
        <a
          href={book.link}
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-block text-sm font-medium text-accent hover:underline"
        >
          View book &rarr;
        </a>
      ) : null}
    </article>
  );
}
