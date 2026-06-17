import Link from "next/link";

import { Container } from "./_components/container";
import { WritingCard } from "./_components/writing-card";
import { getAllWritings } from "@/lib/content/writings";
import { getCurrentlyReading } from "@/lib/content/bookshelf";
import { siteConfig } from "@/lib/site-config";

export default async function Home() {
  const latestWritings = getAllWritings().slice(0, 3);
  const currentlyReading = await getCurrentlyReading();

  return (
    <Container>
      <div className="grid gap-10 sm:gap-12">
        <section>
          <h1 className="font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {siteConfig.name}
          </h1>
          <p className="mt-3 max-w-lg text-ink-muted">{siteConfig.description}</p>
          <p className="mt-3 max-w-lg text-ink-muted">{siteConfig.bio}</p>
        </section>

        <section>
          <div className="flex items-baseline justify-between">
            <h2 className="font-serif text-base font-semibold tracking-tight text-ink sm:text-lg">
              Latest writing
            </h2>
            <Link
              href="/writings"
              className="text-xs font-medium text-accent hover:underline sm:text-sm"
            >
              All writings &rarr;
            </Link>
          </div>

          {latestWritings.length > 0 ? (
            <div className="mt-2">
              {latestWritings.map((writing) => (
                <WritingCard key={writing.slug} writing={writing} />
              ))}
            </div>
          ) : (
            <p className="mt-3 text-ink-muted">Nothing published yet.</p>
          )}
        </section>

        {currentlyReading ? (
          <section>
            <div className="flex items-baseline justify-between">
              <h2 className="font-serif text-base font-semibold tracking-tight text-ink sm:text-lg">
                Currently reading
              </h2>
              <Link
                href="/bookshelf"
                className="text-xs font-medium text-accent hover:underline sm:text-sm"
              >
                Full bookshelf &rarr;
              </Link>
            </div>

            <p className="mt-3 text-ink">
              <span className="font-medium">{currentlyReading.title}</span>
              <span className="text-ink-muted"> by {currentlyReading.author}</span>
            </p>
          </section>
        ) : null}
      </div>
    </Container>
  );
}
