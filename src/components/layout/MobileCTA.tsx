import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/config/site-config";
import { formatPhoneLink, formatWhatsAppLink } from "@/lib/utils";

export function MobileCTA() {
  const whatsappMessage = `Hi ${siteConfig.business.name}, I'd like a quote please.`;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-slate-200 bg-white p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] md:hidden">
      <a
        href={formatPhoneLink(siteConfig.business.phone)}
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-ocean-700 py-3.5 text-sm font-semibold text-white"
      >
        <Phone className="h-4 w-4" />
        Call
      </a>
      <a
        href={formatWhatsAppLink(siteConfig.business.whatsapp, whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-emerald-500 py-3.5 text-sm font-semibold text-white"
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp
      </a>
    </div>
  );
}
