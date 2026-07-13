"use client";

import Image from "next/image";
import { useState } from "react";
import { Clock, MapPin, ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { useI18n } from "@/i18n/LocaleProvider";
import { formatUi } from "@/i18n/index";
import { formatPrice } from "@/lib/utils";

const typeColors = {
  transfer: "bg-jamaica-green text-white",
  excursion: "bg-rasta-red text-white",
  activity: "bg-jamaica-gold text-jamaica-black",
  combo: "bg-jamaica-black text-jamaica-gold",
};

export function CityTours() {
  const { cityTourGuides, ui } = useI18n();
  const [activeCity, setActiveCity] = useState(cityTourGuides[0].slug);

  const city = cityTourGuides.find((c) => c.slug === activeCity) ?? cityTourGuides[0];

  return (
    <section id="destinations" className="section-py bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={ui.sections.cityTours.eyebrow}
          title={ui.sections.cityTours.title}
          description={ui.sections.cityTours.description}
        />

        <div className="scroll-tabs -mx-4 mt-8 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:mt-10 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0">
          {cityTourGuides.map((c) => (
            <button
              key={c.slug}
              type="button"
              onClick={() => setActiveCity(c.slug)}
              className={`shrink-0 touch-manipulation rounded-full px-5 py-3 text-sm font-bold transition-all active:scale-[0.98] ${
                activeCity === c.slug
                  ? "bg-jamaica-green text-white shadow-md"
                  : "bg-jamaica-cream text-jamaica-black active:bg-jamaica-gold-light"
              }`}
            >
              {c.city}
            </button>
          ))}
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border-2 border-jamaica-green/15 bg-jamaica-cream sm:mt-10">
          <div className="grid lg:grid-cols-5">
            <div className="relative min-h-[200px] sm:min-h-[220px] lg:col-span-2 lg:min-h-full">
              <Image
                src={city.image}
                alt={formatUi(ui.common.cityToursImageAlt, { city: city.city })}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-jamaica-black/85 via-jamaica-black/25 to-transparent lg:bg-gradient-to-r" />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 lg:inset-auto lg:bottom-6 lg:left-6 lg:right-6">
                <p className="text-xs font-bold uppercase tracking-wider text-jamaica-gold">
                  {city.tagline}
                </p>
                <h3 className="font-display text-xl font-bold text-white sm:text-2xl">{city.city}</h3>
                <p className="mt-1.5 text-sm leading-snug text-white/85 sm:mt-2">{city.description}</p>
              </div>
            </div>

            <div className="p-4 sm:p-6 lg:col-span-3">
              <p className="text-xs font-bold uppercase tracking-wider text-jamaica-green">
                {ui.common.popularResorts}
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5 sm:gap-2">
                {city.popularResorts.map((resort) => (
                  <span
                    key={resort}
                    className="rounded-full border border-jamaica-green/20 bg-white px-2.5 py-1 text-[11px] font-semibold text-jamaica-black-soft sm:px-3 sm:text-xs"
                  >
                    {resort}
                  </span>
                ))}
              </div>

              <div className="mt-4 space-y-2 sm:mt-6 sm:space-y-3">
                {city.tours.map((tour) => (
                  <details
                    key={tour.name}
                    className="group rounded-xl border border-jamaica-green/10 bg-white"
                  >
                    <summary className="flex min-h-12 touch-manipulation cursor-pointer list-none items-center justify-between gap-2 px-3 py-3 sm:gap-3 sm:px-4">
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                          <span
                            className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${typeColors[tour.type]}`}
                          >
                            {ui.tourTypes[tour.type]}
                          </span>
                          <span className="text-sm font-bold leading-snug text-jamaica-black sm:text-base">
                            {tour.name}
                          </span>
                        </div>
                        <p className="mt-1 text-xs font-semibold text-jamaica-green sm:hidden">
                          {formatUi(ui.common.fromPriceUsd, { price: formatPrice(tour.priceFrom) })} ·{" "}
                          {tour.duration}
                        </p>
                      </div>
                      <div className="flex shrink-0 items-center gap-2">
                        <span className="hidden text-xs font-semibold text-jamaica-green sm:inline">
                          {formatUi(ui.common.fromPriceUsd, { price: formatPrice(tour.priceFrom) })}
                        </span>
                        <ChevronDown className="h-5 w-5 text-jamaica-green transition-transform group-open:rotate-180" />
                      </div>
                    </summary>
                    <div className="border-t border-jamaica-green/10 px-3 pb-3 pt-2 sm:px-4 sm:pb-4">
                      <p className="text-sm leading-relaxed text-jamaica-black-soft/80">
                        {tour.description}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-3 text-xs font-semibold text-jamaica-green sm:gap-4">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {tour.duration}
                        </span>
                        <span>
                          {formatUi(ui.common.fromPriceUsd, { price: formatPrice(tour.priceFrom) })}
                        </span>
                      </div>
                    </div>
                  </details>
                ))}
              </div>

              <div className="mt-5 sm:mt-6">
                <Button href="#contact" variant="secondary" fullWidthMobile>
                  <MapPin className="h-4 w-4" />
                  {formatUi(ui.common.bookCityTour, { city: city.city })}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
