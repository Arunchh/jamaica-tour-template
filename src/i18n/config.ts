export const locales = ["en", "es", "pt"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  es: "Español",
  pt: "Português",
};

export const localeShortLabels: Record<Locale, string> = {
  en: "EN",
  es: "ES",
  pt: "PT",
};

export const htmlLang: Record<Locale, string> = {
  en: "en",
  es: "es",
  pt: "pt",
};

export const openGraphLocale: Record<Locale, string> = {
  en: "en_US",
  es: "es_ES",
  pt: "pt_BR",
};

export const dateLocale: Record<Locale, string> = {
  en: "en-US",
  es: "es-ES",
  pt: "pt-BR",
};

export const metadataSuffix: Record<Locale, string> = {
  en: "Jamaica Resort Transfers & Tours",
  es: "Traslados y Tours a Resorts en Jamaica",
  pt: "Transfers e Passeios para Resorts na Jamaica",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
