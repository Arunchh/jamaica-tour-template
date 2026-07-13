import Image from "next/image";
import { MapPin } from "lucide-react";
import { siteConfig } from "@/config/site-config";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Destinations() {
  return (
    <section id="destinations" className="bg-sand-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Where We Operate"
          title="Jamaica's Top Tourist Destinations"
          description="We run daily transfers and tours across the island's most visited resort areas."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.destinations.map((destination) => (
            <article
              key={destination.name}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={destination.image}
                  alt={`${destination.name}, Jamaica`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/90 via-ocean-900/30 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="flex items-center gap-2 text-ocean-200">
                  <MapPin className="h-4 w-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    Jamaica
                  </span>
                </div>
                <h3 className="mt-1 font-display text-xl font-semibold text-white">
                  {destination.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-200">
                  {destination.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
