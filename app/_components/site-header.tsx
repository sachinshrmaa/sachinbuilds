import Link from "next/link";

import { siteConfig } from "@/lib/site-config";
import { Container } from "./container";

const NAV_LINKS = [
  { href: "/writings", label: "Writings" },
  { href: "/bookshelf", label: "Bookshelf" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-hairline bg-paper/95 backdrop-blur-sm sticky top-0 z-10">
      <Container>
        <div className="flex h-14 items-center justify-between gap-3">
          <Link
            href="/"
            className="font-serif text-base font-semibold tracking-tight text-ink"
          >
            {siteConfig.shortName}
          </Link>

          <nav
            aria-label="Primary navigation"
            className="flex items-center gap-3 text-xs text-ink-muted sm:gap-5 sm:text-sm"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
