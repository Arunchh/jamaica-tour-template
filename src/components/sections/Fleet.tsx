import Image from "next/image";
import { Users } from "lucide-react";
import { siteConfig } from "@/config/site-config";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Fleet() {
  return (
    <section id="fleet" className="bg-jamaica-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Fleet"
          title="Vans & Buses for Every Group Size"
          description="From a couple heading to RIU to a 30-person family reunion — we have the right ride."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {siteConfig.fleet.map((vehicle) => (
            <article
              key={vehicle.name}
              className="overflow-hidden rounded-2xl border-2 border-jamaica-green/15 bg-white shadow-sm transition-shadow hover:shadow-xl"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-x-0 bottom-0 jamaica-stripe" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-jamaica-black">
                  {vehicle.name}
                </h3>
                <div className="mt-2 flex items-center gap-2 text-sm font-bold text-jamaica-green">
                  <Users className="h-4 w-4" />
                  {vehicle.capacity}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-jamaica-black-soft/80">
                  {vehicle.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
