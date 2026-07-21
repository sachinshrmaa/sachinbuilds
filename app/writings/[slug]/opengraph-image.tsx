import { ImageResponse } from "next/og";

import { getAllWritings, getWritingBySlug } from "@/lib/content/writings";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Matches the page route: in production only published slugs are known,
// so with dynamicParams disabled anything else (including a draft) 404s
// instead of being generated on demand.
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllWritings().map((writing) => ({ slug: writing.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const writing = await getWritingBySlug(slug);
  const title = writing?.title ?? siteConfig.name;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#ffffff",
          color: "#0f172a",
        }}
      >
        <div style={{ fontSize: 28, color: "#052140", fontWeight: 600 }}>
          {siteConfig.shortName}
        </div>
        <div style={{ fontSize: 56, fontWeight: 600, lineHeight: 1.2, maxWidth: 950 }}>
          {title}
        </div>
        <div style={{ fontSize: 24, color: "#475569" }}>{siteConfig.name}</div>
      </div>
    ),
    size
  );
}
