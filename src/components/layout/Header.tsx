"use client";

import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { JamaicaStripe } from "@/components/ui/JamaicaStripe";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { useI18n } from "@/i18n/LocaleProvider";
import { localizeHref } from "@/i18n/paths";
import { formatPhoneLink } from "@/lib/utils";

export function Header() {
  const { siteConfig, ui, locale } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`safe-top fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "bg-white/95 shadow-md backdrop-blur-md" : "bg-transparent"
      }`}
    >
      {(scrolled || open) && <JamaicaStripe variant="rasta" />}
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href={localizeHref("/", locale)} className="group flex min-h-12 flex-col justify-center">
          <span
            className={`font-display text-lg font-bold tracking-tight transition-colors sm:text-xl ${
              scrolled || open ? "text-jamaica-black" : "text-white"
            }`}
          >
            {siteConfig.business.logoText}
          </span>
          <span
            className={`text-[10px] font-bold uppercase tracking-[0.2em] sm:text-xs sm:tracking-[0.25em] ${
              scrolled || open ? "text-jamaica-green" : "text-jamaica-gold"
            }`}
          >
            {siteConfig.business.logoAccent}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={localizeHref(item.href, locale)}
              className={`text-sm font-semibold transition-colors hover:text-rasta-red ${
                scrolled ? "text-jamaica-black-soft" : "text-white/90"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher scrolled={scrolled || open} />
          <a
            href={formatPhoneLink(siteConfig.business.phone)}
            className={`flex items-center gap-2 text-sm font-bold ${
              scrolled ? "text-jamaica-green" : "text-white"
            }`}
          >
            <Phone className="h-4 w-4" />
            {siteConfig.business.phoneDisplay}
          </a>
          <Button href={localizeHref("/#contact", locale)} variant={scrolled ? "primary" : "gold"}>
            {ui.common.getQuote}
          </Button>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <LanguageSwitcher scrolled={scrolled || open} />
          <button
            type="button"
            className={`flex h-12 w-12 touch-manipulation items-center justify-center rounded-xl ${
              scrolled || open
                ? "text-jamaica-black active:bg-jamaica-cream"
                : "text-white active:bg-white/10"
            }`}
            onClick={() => setOpen(!open)}
            aria-label={open ? ui.common.closeMenu : ui.common.openMenu}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-jamaica-green/10 bg-white px-4 py-4 shadow-xl lg:hidden">
          <nav className="flex flex-col gap-1">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={localizeHref(item.href, locale)}
                className="flex min-h-12 touch-manipulation items-center rounded-lg px-3 text-base font-semibold text-jamaica-black active:bg-jamaica-cream"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={formatPhoneLink(siteConfig.business.phone)}
              className="flex min-h-12 touch-manipulation items-center gap-3 rounded-lg px-3 font-bold text-jamaica-green active:bg-jamaica-cream"
              onClick={() => setOpen(false)}
            >
              <Phone className="h-5 w-5" />
              {siteConfig.business.phoneDisplay}
            </a>
            <div className="mt-2 pt-2">
              <Button
                href={localizeHref("/#contact", locale)}
                variant="primary"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                {ui.common.getQuote}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
