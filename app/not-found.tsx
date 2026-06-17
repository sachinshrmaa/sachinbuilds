import Link from "next/link";

import { Container } from "./_components/container";

export default function NotFound() {
  return (
    <Container>
      <div className="py-6">
        <h1 className="font-serif text-3xl font-semibold tracking-tight text-ink">
          Page not found
        </h1>
        <p className="mt-2 text-ink-muted">
          The page you&apos;re looking for doesn&apos;t exist, or has moved.
        </p>
        <Link
          href="/"
          className="mt-5 inline-block text-sm font-medium text-accent hover:underline"
        >
          &larr; Back home
        </Link>
      </div>
    </Container>
  );
}
