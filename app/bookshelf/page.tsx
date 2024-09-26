import Link from "next/link";
import React from "react";
import getBooks from "../../utils/getBooks";

export default function Bookshelf() {
  const { books } = getBooks();
  return (
    <div>
      <div className="mb-1">
        <h1 className="text-2xl font-semibold">Sachin Builds</h1>
      </div>
      <div className="mt-2">
        <Link href="/" className="hover:text-blue-800">
          SachinBuilds
        </Link>
        /
        <Link href="/bookshelf" className="text-blue-600 hover:text-blue-800 underline">
          Boookshelf
        </Link>
      </div>
      <h1 className="my-4">
        I don't believe in reading a book until completion. I read many books in parallel until I
        find something new to learn. But when I find something so captivating I don&apos;t put it
        down until it's finished. If you are looking to read some books, these are the books
        I&apos;d recommend.
      </h1>

      <div className="mb-5 text-center">
        <h1 className="mb-2 text-2xl text-slate-500 italic">
          "Read what you love, until you love reading"
        </h1>
        ~ <span className="text-sm text-slate-500">i found this on internet</span>
      </div>

      {books.map((book, index) => (
        <div key={index} className="mb-5">
          <Link
            href={book.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-800"
          >
            <h2 className="font-semibold">
              {book.title} — {book.author}
            </h2>
          </Link>
          <p className="text-slate-500">{book.description}</p>
        </div>
      ))}
    </div>
  );
}
