import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/config/site-config";
import { formatPhoneLink, formatWhatsAppLink } from "@/lib/utils";

export function MobileCTA() {
  const whatsappMessage = `Hi ${siteConfig.business.name}, I need a quote for resort transfer please.`;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 md:hidden">
      <div className="jamaica-stripe" />
      <div className="flex gap-2 bg-jamaica-black p-3">
        <a
          href={formatPhoneLink(siteConfig.business.phone)}
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-jamaica-green py-3.5 text-sm font-bold text-white"
        >
          <Phone className="h-4 w-4" />
          Call
        </a>
        <a
          href={formatWhatsAppLink(siteConfig.business.whatsapp, whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-rasta-red py-3.5 text-sm font-bold text-white"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
