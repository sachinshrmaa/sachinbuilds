import type { MetadataRoute } from "next";

import { getPublishedWritings } from "@/lib/content/writings";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const writingEntries = getPublishedWritings().map((writing) => ({
    url: `${siteConfig.url}/writings/${writing.slug}`,
    lastModified: writing.date,
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: siteConfig.url,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/writings`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/bookshelf`,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${siteConfig.url}/contact`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...writingEntries,
  ];
}
