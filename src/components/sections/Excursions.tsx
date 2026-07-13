import Image from "next/image";
import { Clock } from "lucide-react";
import { siteConfig } from "@/config/site-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { formatPrice } from "@/lib/utils";

export function Excursions() {
  return (
    <section id="tours" className="bg-ocean-900 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Popular Excursions"
          title="Must-Do Jamaica Experiences"
          description="Hand-picked tours that US and Canadian guests book most. Private transport included."
          light
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {siteConfig.excursions.map((tour) => (
            <article
              key={tour.name}
              className="group overflow-hidden rounded-2xl bg-white shadow-xl transition-transform duration-300 hover:-translate-y-1"
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
                  <span className="absolute left-4 top-4 rounded-full bg-coral-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                    Most Popular
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold text-slate-900">
                  {tour.name}
                </h3>
                <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-600">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-ocean-600" />
                    {tour.duration}
                  </span>
                  <span className="font-semibold text-coral-600">
                    From {formatPrice(tour.priceFrom)} / person
                  </span>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {tour.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="rounded-full bg-sand-100 px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button href="#contact" variant="secondary" className="w-full sm:w-auto">
                    Book This Tour
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
