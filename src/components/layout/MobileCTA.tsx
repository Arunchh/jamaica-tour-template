import { MessageCircle, Phone, FileText } from "lucide-react";
import { siteConfig } from "@/config/site-config";
import { formatPhoneLink, formatWhatsAppLink } from "@/lib/utils";

export function MobileCTA() {
  const whatsappMessage = `Hi ${siteConfig.business.name}, I need a quote for resort transfer please.`;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 md:hidden">
      <div className="jamaica-stripe" />
      <div className="mobile-cta-bar flex gap-2 bg-jamaica-black px-3 pt-3">
        <a
          href={formatPhoneLink(siteConfig.business.phone)}
          className="flex min-h-12 flex-1 touch-manipulation items-center justify-center gap-1.5 rounded-full bg-jamaica-green py-3 text-sm font-bold text-white active:scale-[0.98]"
        >
          <Phone className="h-4 w-4 shrink-0" />
          Call
        </a>
        <a
          href={formatWhatsAppLink(siteConfig.business.whatsapp, whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-12 flex-[1.2] touch-manipulation items-center justify-center gap-1.5 rounded-full bg-rasta-red py-3 text-sm font-bold text-white active:scale-[0.98]"
        >
          <MessageCircle className="h-4 w-4 shrink-0" />
          WhatsApp
        </a>
        <a
          href="/#contact"
          className="flex min-h-12 flex-1 touch-manipulation items-center justify-center gap-1.5 rounded-full bg-jamaica-gold py-3 text-sm font-bold text-jamaica-black active:scale-[0.98]"
        >
          <FileText className="h-4 w-4 shrink-0" />
          Quote
        </a>
      </div>
    </div>
  );
}
