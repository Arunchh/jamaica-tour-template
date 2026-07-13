import { siteConfig } from "@/config/site-config";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HowItWorks() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Simple Booking"
          title="How It Works"
          description="No complicated forms. No surprise charges. Just tell us what you need."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {siteConfig.howItWorks.map((item) => (
            <div key={item.step} className="relative text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-ocean-700 font-display text-2xl font-bold text-white shadow-lg shadow-ocean-700/30">
                {item.step}
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
