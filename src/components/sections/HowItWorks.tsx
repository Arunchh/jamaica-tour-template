import { siteConfig } from "@/config/site-config";
import { SectionHeading } from "@/components/ui/SectionHeading";

const stepColors = ["bg-jamaica-green", "bg-jamaica-gold text-jamaica-black", "bg-rasta-red"];

export function HowItWorks() {
  return (
    <section className="bg-jamaica-cream-dark py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Easy Booking"
          title="3 Steps — You're Set"
          description="No complicated apps. WhatsApp us, get a price in USD, meet your driver at the airport."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {siteConfig.howItWorks.map((item, i) => (
            <div key={item.step} className="relative text-center">
              <div
                className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full font-display text-2xl font-bold text-white shadow-lg ${stepColors[i]}`}
              >
                {item.step}
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-jamaica-black">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-jamaica-black-soft/80">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
