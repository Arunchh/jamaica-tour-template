import { Award, Clock, Shield, Star } from "lucide-react";
import { siteConfig } from "@/config/site-config";

const iconMap = {
  shield: Shield,
  award: Award,
  star: Star,
  clock: Clock,
};

export function TrustBar() {
  return (
    <section className="border-b border-slate-200 bg-white py-8">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
        {siteConfig.trustPoints.map((point) => {
          const Icon = iconMap[point.icon];
          return (
            <div key={point.label} className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ocean-50 text-ocean-700">
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-sm font-semibold text-slate-800">{point.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
