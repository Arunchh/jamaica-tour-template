import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { getContent } from "@/i18n/index";
import { localizedPath } from "@/i18n/paths";

export default function sitemap(): MetadataRoute.Sitemap {
  const { siteConfig } = getContent("en");
  const base = siteConfig.seo.siteUrl;

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    const { blogPosts } = getContent(locale);

    entries.push({
      url: `${base}${localizedPath("/", locale)}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    });

    entries.push({
      url: `${base}${localizedPath("/blog", locale)}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });

    for (const post of blogPosts) {
      entries.push({
        url: `${base}${localizedPath(`/blog/${post.slug}`, locale)}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
