import Image from "next/image";
import { ArrowRight, MessageCircle, Phone, Star } from "lucide-react";
import { siteConfig } from "@/config/site-config";
import { Button } from "@/components/ui/Button";
import { JamaicaStripe } from "@/components/ui/JamaicaStripe";
import { formatPhoneLink, formatWhatsAppLink } from "@/lib/utils";

export function Hero() {
  const whatsappMessage = `Hi ${siteConfig.business.name}, I need a quote for airport transfer to my resort.`;

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
      <div className="absolute inset-0 rasta-gradient-bg opacity-90" />
      <div className="absolute inset-0 pattern-lion" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pb-32 pt-32 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-4 flex flex-wrap gap-2">
            {siteConfig.hero.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-jamaica-gold/30 bg-jamaica-black/40 px-3 py-1.5 text-xs font-bold text-jamaica-gold backdrop-blur-sm"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
            <Star className="h-4 w-4 fill-jamaica-gold text-jamaica-gold" />
            <span>
              {siteConfig.business.googleRating}★ · {siteConfig.business.reviewCount}+ US travelers
            </span>
          </div>

          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {siteConfig.hero.headline}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-jamaica-gold-light/95 sm:text-xl">
            {siteConfig.hero.subheadline}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="#contact" variant="primary">
              {siteConfig.hero.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#resorts" variant="gold">
              {siteConfig.hero.secondaryCta}
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm font-medium text-white/90">
            <a
              href={formatPhoneLink(siteConfig.business.phone)}
              className="flex items-center gap-2 transition-colors hover:text-jamaica-gold"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.business.phoneDisplay}
            </a>
            <a
              href={formatWhatsAppLink(siteConfig.business.whatsapp, whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-jamaica-gold"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
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
