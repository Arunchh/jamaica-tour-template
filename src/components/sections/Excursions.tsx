"use client";

import Image from "next/image";
import { Clock } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { JamaicaStripe } from "@/components/ui/JamaicaStripe";
import { useI18n } from "@/i18n/LocaleProvider";
import { formatUi } from "@/i18n/index";
import { formatPrice } from "@/lib/utils";

export function Excursions() {
  const { siteConfig, ui } = useI18n();

  return (
    <section id="tours" className="section-py relative bg-jamaica-black">
      <div className="absolute inset-0 pattern-lion opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={ui.sections.excursions.eyebrow}
          title={ui.sections.excursions.title}
          description={ui.sections.excursions.description}
          light
        />

        <div className="mt-10 grid gap-6 sm:mt-14 sm:grid-cols-2 sm:gap-8">
          {siteConfig.excursions.map((tour) => (
            <article
              key={tour.name}
              className="group overflow-hidden rounded-2xl border-2 border-jamaica-green/20 bg-white shadow-xl transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={tour.image}
                  alt={tour.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {tour.popular && (
                  <span className="absolute left-4 top-4 rounded-full bg-rasta-red px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                    {ui.common.fanFavorite}
                  </span>
                )}
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="font-display text-xl font-bold text-jamaica-black sm:text-2xl">
                  {tour.name}
                </h3>
                <div className="mt-3 flex flex-wrap gap-4 text-sm text-jamaica-black-soft/80">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-jamaica-green" />
                    {tour.duration}
                  </span>
                  <span className="font-bold text-jamaica-green">
                    {formatUi(ui.common.fromPriceUsdPerPerson, {
                      price: formatPrice(tour.priceFrom),
                    })}
                  </span>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {tour.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="rounded-full bg-jamaica-gold-light px-3 py-1 text-xs font-semibold text-jamaica-black"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button href="#contact" variant="secondary" fullWidthMobile>
                    {ui.common.bookThisTour}
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <JamaicaStripe variant="rasta" className="relative mt-0" />
    </section>
  );
}
