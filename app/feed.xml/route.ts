import { getPublishedWritings } from "@/lib/content/writings";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const writings = getPublishedWritings();

  const items = writings
    .map((writing) => {
      const url = `${siteConfig.url}/writings/${writing.slug}`;
      return `
    <item>
      <title>${escapeXml(writing.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${new Date(writing.date).toUTCString()}</pubDate>
      <description>${escapeXml(writing.excerpt)}</description>
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(siteConfig.name)}</title>
    <link>${siteConfig.url}</link>
    <description>${escapeXml(siteConfig.description)}</description>
    <language>en</language>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
