"use client";

import { MessageCircle, Phone, FileText } from "lucide-react";
import { useI18n } from "@/i18n/LocaleProvider";
import { formatUi } from "@/i18n/index";
import { localizeHref } from "@/i18n/paths";
import { formatPhoneLink, formatWhatsAppLink } from "@/lib/utils";

export function MobileCTA() {
  const { siteConfig, ui, locale } = useI18n();
  const whatsappMessage = formatUi(ui.contact.whatsappQuote, {
    business: siteConfig.business.name,
  });

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 md:hidden">
      <div className="jamaica-stripe" />
      <div className="mobile-cta-bar flex gap-2 bg-jamaica-black px-3 pt-3">
        <a
          href={formatPhoneLink(siteConfig.business.phone)}
          className="flex min-h-12 flex-1 touch-manipulation items-center justify-center gap-1.5 rounded-full bg-jamaica-green py-3 text-sm font-bold text-white active:scale-[0.98]"
        >
          <Phone className="h-4 w-4 shrink-0" />
          {ui.common.call}
        </a>
        <a
          href={formatWhatsAppLink(siteConfig.business.whatsapp, whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-12 flex-[1.2] touch-manipulation items-center justify-center gap-1.5 rounded-full bg-rasta-red py-3 text-sm font-bold text-white active:scale-[0.98]"
        >
          <MessageCircle className="h-4 w-4 shrink-0" />
          {ui.common.whatsapp}
        </a>
        <a
          href={localizeHref("/#contact", locale)}
          className="flex min-h-12 flex-1 touch-manipulation items-center justify-center gap-1.5 rounded-full bg-jamaica-gold py-3 text-sm font-bold text-jamaica-black active:scale-[0.98]"
        >
          <FileText className="h-4 w-4 shrink-0" />
          {ui.common.quote}
        </a>
      </div>
    </div>
  );
}
