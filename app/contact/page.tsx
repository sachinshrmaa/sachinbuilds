import type { Metadata } from "next";

import { Container } from "@/app/_components/container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <Container>
      <h1 className="font-serif text-3xl font-semibold tracking-tight text-ink">
        Contact
      </h1>
      <p className="mt-2 max-w-md text-ink-muted">
        The best way to reach me is by email. I read everything, even if a
        reply takes a while.
      </p>

      <a
        href={`mailto:${siteConfig.email}`}
        className="mt-5 inline-block break-words font-serif text-lg font-semibold text-accent hover:underline sm:text-2xl"
      >
        {siteConfig.email}
      </a>

      {siteConfig.socials.length > 0 ? (
        <div className="mt-8 flex flex-wrap gap-5 text-sm">
          {siteConfig.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-ink-muted hover:text-ink"
            >
              {social.label}
            </a>
          ))}
        </div>
      ) : null}
    </Container>
  );
}
