"use client";

import Image from "next/image";
import { ArrowRight, MessageCircle, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { JamaicaStripe } from "@/components/ui/JamaicaStripe";
import { useI18n } from "@/i18n/LocaleProvider";
import { formatUi } from "@/i18n/index";
import { formatPhoneLink, formatWhatsAppLink } from "@/lib/utils";

export function Hero() {
  const { siteConfig, ui } = useI18n();
  const whatsappMessage = formatUi(ui.contact.whatsappResort, {
    business: siteConfig.business.name,
  });

  return (
    <section className="relative min-h-[100dvh] overflow-hidden sm:min-h-screen">
      <Image
        src={siteConfig.hero.image}
        alt={siteConfig.hero.imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 rasta-gradient-bg opacity-90" />
      <div className="absolute inset-0 pattern-lion" />

      <div className="relative mx-auto flex min-h-[100dvh] max-w-7xl flex-col justify-center px-4 pb-36 pt-24 sm:min-h-screen sm:px-6 sm:pb-32 sm:pt-32 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-4 flex flex-wrap gap-2">
            {siteConfig.hero.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-jamaica-gold/30 bg-jamaica-black/40 px-3 py-2 text-xs font-bold text-jamaica-gold backdrop-blur-sm"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white backdrop-blur-sm">
            <Star className="h-4 w-4 shrink-0 fill-jamaica-gold text-jamaica-gold" />
            <span className="leading-snug">
              {siteConfig.business.googleRating}★ · {siteConfig.business.reviewCount}+{" "}
              {ui.common.usTravelers}
            </span>
          </div>

          <h1 className="font-display text-[1.75rem] font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-6xl">
            {siteConfig.hero.headline}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-jamaica-gold-light/95 sm:mt-6 sm:text-lg lg:text-xl">
            {siteConfig.hero.subheadline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
            <Button href="#contact" variant="primary" fullWidthMobile>
              {siteConfig.hero.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#resorts" variant="gold" fullWidthMobile>
              {siteConfig.hero.secondaryCta}
            </Button>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:flex sm:flex-wrap sm:gap-6">
            <a
              href={formatPhoneLink(siteConfig.business.phone)}
              className="flex min-h-12 touch-manipulation items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-base font-semibold text-white active:bg-white/20 sm:justify-start sm:rounded-none sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:text-sm"
            >
              <Phone className="h-5 w-5 shrink-0" />
              {siteConfig.business.phoneDisplay}
            </a>
            <a
              href={formatWhatsAppLink(siteConfig.business.whatsapp, whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 touch-manipulation items-center justify-center gap-2 rounded-xl border border-jamaica-green/40 bg-jamaica-green/30 px-4 py-3 text-base font-semibold text-white active:bg-jamaica-green/50 sm:justify-start sm:rounded-none sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:text-sm"
            >
              <MessageCircle className="h-5 w-5 shrink-0" />
              {ui.common.whatsappUs}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0">
        <JamaicaStripe variant="rasta" />
        <JamaicaStripe variant="flag" />
      </div>
    </section>
  );
}
