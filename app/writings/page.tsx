import type { Metadata } from "next";

import { Container } from "@/app/_components/container";
import { WritingsExplorer } from "@/app/_components/writings-explorer";
import { getAllWritings } from "@/lib/content/writings";

export const metadata: Metadata = {
  title: "Writings",
  description: "Essays and notes on building software, written carefully.",
  alternates: { canonical: "/writings" },
};

export default function WritingsPage() {
  const writings = getAllWritings();

  return (
    <Container>
      <h1 className="font-serif text-3xl font-semibold tracking-tight text-ink">
        Writings
      </h1>
      <p className="mt-2 text-ink-muted">
        Essays and notes on building software, written carefully.
      </p>

      <div className="mt-6">
        <WritingsExplorer writings={writings} />
      </div>
    </Container>
  );
}
