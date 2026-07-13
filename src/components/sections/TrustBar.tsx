import { Award, Clock, DollarSign, Shield, Star } from "lucide-react";
import { siteConfig } from "@/config/site-config";
import { JamaicaStripe } from "@/components/ui/JamaicaStripe";

const iconMap = {
  shield: Shield,
  award: Award,
  star: Star,
  clock: Clock,
  dollar: DollarSign,
};

export function TrustBar() {
  return (
    <section className="relative bg-jamaica-black">
      <JamaicaStripe variant="rasta" />
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 sm:px-6 md:grid-cols-4 lg:px-8">
        {siteConfig.trustPoints.map((point) => {
          const Icon = iconMap[point.icon];
          return (
            <div key={point.label} className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-jamaica-green text-jamaica-gold">
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-sm font-bold text-white">{point.label}</p>
            </div>
          );
        })}
      </div>
      <JamaicaStripe variant="flag" />
    </section>
  );
}
