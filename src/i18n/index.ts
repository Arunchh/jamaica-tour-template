import type { Locale } from "./config";
import { uiEn } from "./ui/en";
import { uiEs } from "./ui/es";
import { uiPt } from "./ui/pt";
import type { LocaleContent, UiMessages } from "./types";
import { siteConfig as siteConfigEn } from "@/config/site-config";
import {
  blogPosts as blogPostsEn,
  cityTourGuides as cityTourGuidesEn,
} from "@/content/tours-and-blog";
import { siteConfigEs } from "./content/site-config.es";
import { siteConfigPt } from "./content/site-config.pt";
import {
  blogPostsEs,
  cityTourGuidesEs,
} from "./content/tours-and-blog.es";
import {
  blogPostsPt,
  cityTourGuidesPt,
} from "./content/tours-and-blog.pt";

const uiByLocale: Record<Locale, UiMessages> = {
  en: uiEn,
  es: uiEs,
  pt: uiPt,
};

const contentByLocale: Record<Locale, LocaleContent> = {
  en: {
    siteConfig: siteConfigEn as unknown as LocaleContent["siteConfig"],
    cityTourGuides: cityTourGuidesEn,
    blogPosts: blogPostsEn,
  },
  es: {
    siteConfig: siteConfigEs,
    cityTourGuides: cityTourGuidesEs,
    blogPosts: blogPostsEs,
  },
  pt: {
    siteConfig: siteConfigPt,
    cityTourGuides: cityTourGuidesPt,
    blogPosts: blogPostsPt,
  },
};

export function getUi(locale: Locale): UiMessages {
  return uiByLocale[locale];
}

export function getContent(locale: Locale): LocaleContent {
  return contentByLocale[locale];
}

export function getBlogPost(locale: Locale, slug: string) {
  return getContent(locale).blogPosts.find((post) => post.slug === slug);
}

export function formatUi(
  template: string,
  values: Record<string, string | number>
): string {
  return Object.entries(values).reduce(
    (result, [key, value]) => result.replaceAll(`{${key}}`, String(value)),
    template
  );
}
