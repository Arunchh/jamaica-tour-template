"use client";

import Image from "next/image";
import { useState } from "react";
import { Clock, MapPin, ChevronDown } from "lucide-react";
import { cityTourGuides } from "@/content/tours-and-blog";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { formatPrice } from "@/lib/utils";

const typeLabels = {
  transfer: "Transfer",
  excursion: "Excursion",
  activity: "Activity",
  combo: "Combo Tour",
};

const typeColors = {
  transfer: "bg-jamaica-green text-white",
  excursion: "bg-rasta-red text-white",
  activity: "bg-jamaica-gold text-jamaica-black",
  combo: "bg-jamaica-black text-jamaica-gold",
};

export function CityTours() {
  const [activeCity, setActiveCity] = useState(cityTourGuides[0].slug);

  const city = cityTourGuides.find((c) => c.slug === activeCity) ?? cityTourGuides[0];

  return (
    <section id="destinations" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Tours by City"
          title="Every Major Tourist Area — Covered"
          description="Transfers, excursions, and activities organized by where you're staying. Click a city to see what's available."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {cityTourGuides.map((c) => (
            <button
              key={c.slug}
              type="button"
              onClick={() => setActiveCity(c.slug)}
              className={`rounded-full px-4 py-2 text-sm font-bold transition-all ${
                activeCity === c.slug
                  ? "bg-jamaica-green text-white shadow-md"
                  : "bg-jamaica-cream text-jamaica-black hover:bg-jamaica-gold-light"
              }`}
            >
              {c.city}
            </button>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border-2 border-jamaica-green/15 bg-jamaica-cream">
          <div className="grid lg:grid-cols-5">
            <div className="relative min-h-[220px] lg:col-span-2 lg:min-h-full">
              <Image
                src={city.image}
                alt={`${city.city}, Jamaica tours`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-jamaica-black/80 via-jamaica-black/20 to-transparent lg:bg-gradient-to-r" />
              <div className="absolute inset-x-0 bottom-0 p-6 lg:inset-auto lg:bottom-6 lg:left-6 lg:right-6">
                <p className="text-xs font-bold uppercase tracking-wider text-jamaica-gold">
                  {city.tagline}
                </p>
                <h3 className="font-display text-2xl font-bold text-white">{city.city}</h3>
                <p className="mt-2 text-sm text-white/85">{city.description}</p>
              </div>
            </div>

            <div className="p-6 lg:col-span-3">
              <p className="text-xs font-bold uppercase tracking-wider text-jamaica-green">
                Popular resorts we serve
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {city.popularResorts.map((resort) => (
                  <span
                    key={resort}
                    className="rounded-full border border-jamaica-green/20 bg-white px-3 py-1 text-xs font-semibold text-jamaica-black-soft"
                  >
                    {resort}
                  </span>
                ))}
              </div>

              <div className="mt-6 space-y-3">
                {city.tours.map((tour) => (
                  <details
                    key={tour.name}
                    className="group rounded-xl border border-jamaica-green/10 bg-white"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${typeColors[tour.type]}`}
                        >
                          {typeLabels[tour.type]}
                        </span>
                        <span className="font-bold text-jamaica-black">{tour.name}</span>
                      </div>
                      <div className="flex shrink-0 items-center gap-3">
                        <span className="hidden text-xs font-semibold text-jamaica-green sm:inline">
                          From {formatPrice(tour.priceFrom)} USD
                        </span>
                        <ChevronDown className="h-4 w-4 text-jamaica-green transition-transform group-open:rotate-180" />
                      </div>
                    </summary>
                    <div className="border-t border-jamaica-green/10 px-4 pb-4 pt-2">
                      <p className="text-sm text-jamaica-black-soft/80">{tour.description}</p>
                      <div className="mt-2 flex flex-wrap gap-4 text-xs font-semibold text-jamaica-green">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {tour.duration}
                        </span>
                        <span>From {formatPrice(tour.priceFrom)} USD</span>
                      </div>
                    </div>
                  </details>
                ))}
              </div>

              <div className="mt-6">
                <Button href="/#contact" variant="secondary">
                  <MapPin className="h-4 w-4" />
                  Book a {city.city} Tour
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
