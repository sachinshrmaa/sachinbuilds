import { siteConfig } from "@/lib/site-config";
import { Container } from "./container";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-hairline sm:mt-16">
      <Container>
        <div className="flex flex-col gap-3 py-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <p>
            &copy; {year} {siteConfig.name}
          </p>

          {siteConfig.socials.length > 0 ? (
            <div className="flex items-center gap-5">
              {siteConfig.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-ink"
                >
                  {social.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </footer>
  );
}
