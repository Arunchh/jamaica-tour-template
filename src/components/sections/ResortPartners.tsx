"use client";

import { MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { useI18n } from "@/i18n/LocaleProvider";

export function ResortPartners() {
  const { siteConfig, ui } = useI18n();

  return (
    <section id="resorts" className="section-py bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={siteConfig.resorts.eyebrow}
          title={siteConfig.resorts.title}
          description={siteConfig.resorts.description}
        />

        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6">
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
          <p className="text-lg font-bold text-jamaica-gold">{ui.sections.resortsCta.title}</p>
          <p className="mt-2 text-sm text-white/80">{ui.sections.resortsCta.description}</p>
          <div className="mt-6">
            <Button href="#contact" variant="gold" fullWidthMobile>
              {ui.sections.resortsCta.button}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
