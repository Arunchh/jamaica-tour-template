import { siteConfig } from "@/config/site-config";
import { JamaicaStripe } from "@/components/ui/JamaicaStripe";

export function ValueProps() {
  return (
    <section className="bg-jamaica-cream py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {siteConfig.valueProps.map((prop, i) => (
            <article
              key={prop.title}
              className="relative overflow-hidden rounded-2xl border-2 border-jamaica-green/10 bg-white p-6 shadow-sm"
            >
              <div
                className={`absolute left-0 top-0 h-1 w-full ${
                  i === 0
                    ? "bg-jamaica-green"
                    : i === 1
                      ? "bg-jamaica-gold"
                      : "bg-rasta-red"
                }`}
              />
              <h3 className="font-display text-xl font-bold text-jamaica-black">
                {prop.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-jamaica-black-soft/80">
                {prop.description}
              </p>
            </article>
          ))}
        </div>
      </div>
      <div className="mt-0">
        <JamaicaStripe variant="rasta" className="mt-8" />
      </div>
    </section>
  );
}
