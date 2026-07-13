import { Hotel, Map, Plane, Users } from "lucide-react";
import { siteConfig } from "@/config/site-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { formatPrice } from "@/lib/utils";

const iconMap = {
  plane: Plane,
  hotel: Hotel,
  map: Map,
  users: Users,
};

export function Services() {
  return (
    <section id="services" className="bg-sand-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Offer"
          title="Transport & Tours Built for Vacation Travelers"
          description="From the moment you land at MBJ to your last sunset in Negril — we handle the driving so you can focus on Jamaica."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <article
                key={service.title}
                className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-ocean-100 text-ocean-700 transition-colors group-hover:bg-ocean-700 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>
                <p className="mt-5 text-sm font-semibold text-coral-600">
                  From {formatPrice(service.priceFrom)}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
