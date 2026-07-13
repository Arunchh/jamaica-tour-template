"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Globe } from "lucide-react";
import { locales, localeShortLabels, type Locale } from "@/i18n/config";
import { switchLocalePath } from "@/i18n/paths";
import { useI18n } from "@/i18n/LocaleProvider";

export function LanguageSwitcher({ scrolled = false }: { scrolled?: boolean }) {
  const { locale, ui } = useI18n();
  const pathname = usePathname();

  return (
    <div
      className="flex items-center gap-1"
      role="group"
      aria-label={ui.common.language}
    >
      <Globe
        className={`hidden h-4 w-4 sm:block ${
          scrolled ? "text-jamaica-green" : "text-white/80"
        }`}
        aria-hidden="true"
      />
      {locales.map((code) => {
        const active = code === locale;
        return (
          <Link
            key={code}
            href={switchLocalePath(pathname, code as Locale)}
            hrefLang={code}
            className={`min-h-9 min-w-9 touch-manipulation rounded-full px-2.5 py-1.5 text-center text-xs font-bold transition-colors ${
              active
                ? scrolled
                  ? "bg-jamaica-green text-white"
                  : "bg-jamaica-gold text-jamaica-black"
                : scrolled
                  ? "text-jamaica-black-soft hover:bg-jamaica-cream"
                  : "text-white/85 hover:bg-white/10"
            }`}
            aria-current={active ? "page" : undefined}
          >
            {localeShortLabels[code]}
          </Link>
        );
      })}
    </div>
  );
}
