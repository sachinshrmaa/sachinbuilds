import fs from "fs";
import matter from "gray-matter";
import { BookMetadata } from "../types/books";

const getBooks = (): BookMetadata => {
  const filePath = `posts/books/books.md`;
  const fileContents = fs.readFileSync(filePath, "utf8");

  const matterResult = matter(fileContents);

  return {
    books: matterResult.data.books,
  };
};

export default getBooks;
