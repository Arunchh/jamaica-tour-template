import { Quote, Star } from "lucide-react";
import { siteConfig } from "@/config/site-config";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <section id="reviews" className="bg-sand-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Guest Reviews"
          title="Trusted by Travelers from the US & Canada"
          description="Real feedback from guests who booked airport transfers and island tours with us."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {siteConfig.testimonials.map((review) => (
            <article
              key={review.name}
              className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-ocean-100" />
              <div className="flex gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-700">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-6 border-t border-slate-100 pt-4">
                <p className="font-semibold text-slate-900">{review.name}</p>
                <p className="text-sm text-slate-500">{review.location}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
