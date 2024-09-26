import { type } from "os";

export interface Book {
  title: string;
  author: string;
  description: string;
  link: string;
}

export interface BookMetadata {
  books: Book[];
}
