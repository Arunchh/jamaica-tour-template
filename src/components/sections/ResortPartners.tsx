import { MapPin } from "lucide-react";
import { siteConfig } from "@/config/site-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function ResortPartners() {
  return (
    <section id="resorts" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={siteConfig.resorts.eyebrow}
          title={siteConfig.resorts.title}
          description={siteConfig.resorts.description}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {siteConfig.resorts.chains.map((chain) => (
            <article
              key={chain.name}
              className="overflow-hidden rounded-2xl border-2 border-jamaica-green/15 bg-jamaica-cream transition-shadow hover:shadow-lg"
            >
              <div className="bg-jamaica-green px-5 py-3">
                <h3 className="font-display text-lg font-bold text-jamaica-gold">
                  {chain.name}
                </h3>
              </div>
              <ul className="space-y-2 p-5">
                {chain.resorts.map((resort) => (
                  <li
                    key={resort}
                    className="flex items-center gap-2 text-sm font-medium text-jamaica-black-soft"
                  >
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-rasta-red" />
                    {resort}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-jamaica-black-soft p-6 text-center sm:p-8">
          <p className="text-lg font-bold text-jamaica-gold">
            Your resort not listed? No problem — we go everywhere on the island.
          </p>
          <p className="mt-2 text-sm text-white/80">
            Tell us where you booked on the form below and we&apos;ll quote you a flat USD rate.
          </p>
          <div className="mt-6">
            <Button href="#contact" variant="gold">
              Get Resort Transfer Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
