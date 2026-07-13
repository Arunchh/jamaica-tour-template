import Image from "next/image";
import { ArrowRight, MessageCircle, Phone, Star } from "lucide-react";
import { siteConfig } from "@/config/site-config";
import { Button } from "@/components/ui/Button";
import { formatPhoneLink, formatWhatsAppLink } from "@/lib/utils";

export function Hero() {
  const whatsappMessage = `Hi ${siteConfig.business.name}, I'd like a quote for Jamaica transport/tours.`;

  return (
    <section className="relative min-h-screen overflow-hidden">
      <Image
        src={siteConfig.hero.image}
        alt={siteConfig.hero.imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ocean-950/90 via-ocean-900/75 to-ocean-800/50" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pb-32 pt-32 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <span>
              {siteConfig.business.googleRating}★ from {siteConfig.business.reviewCount}+ travelers
            </span>
          </div>

          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {siteConfig.hero.headline}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-100 sm:text-xl">
            {siteConfig.hero.subheadline}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="#contact" variant="primary">
              {siteConfig.hero.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#tours" variant="outline">
              {siteConfig.hero.secondaryCta}
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-200">
            <a
              href={formatPhoneLink(siteConfig.business.phone)}
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.business.phoneDisplay}
            </a>
            <a
              href={formatWhatsAppLink(siteConfig.business.whatsapp, whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
