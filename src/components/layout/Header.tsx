"use client";

import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site-config";
import { Button } from "@/components/ui/Button";
import { formatPhoneLink } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-md backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex flex-col">
          <span
            className={`font-display text-xl font-bold tracking-tight transition-colors ${
              scrolled ? "text-ocean-800" : "text-white"
            }`}
          >
            {siteConfig.business.logoText}
          </span>
          <span
            className={`text-xs font-medium uppercase tracking-[0.25em] ${
              scrolled ? "text-coral-500" : "text-ocean-100"
            }`}
          >
            {siteConfig.business.logoAccent}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-coral-500 ${
                scrolled ? "text-slate-700" : "text-white/90"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={formatPhoneLink(siteConfig.business.phone)}
            className={`flex items-center gap-2 text-sm font-semibold ${
              scrolled ? "text-ocean-700" : "text-white"
            }`}
          >
            <Phone className="h-4 w-4" />
            {siteConfig.business.phoneDisplay}
          </a>
          <Button href="#contact" variant={scrolled ? "primary" : "outline"}>
            Get a Quote
          </Button>
        </div>

        <button
          type="button"
          className={`rounded-lg p-2 lg:hidden ${
            scrolled ? "text-slate-800" : "text-white"
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-6 shadow-xl lg:hidden">
          <nav className="flex flex-col gap-4">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-base font-medium text-slate-800"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={formatPhoneLink(siteConfig.business.phone)}
              className="flex items-center gap-2 font-semibold text-ocean-700"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.business.phoneDisplay}
            </a>
            <Button href="#contact" variant="primary" className="w-full">
              Get a Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
