import Link from "next/link";
import { Globe, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site-config";
import { formatPhoneLink } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-block">
              <span className="font-display text-xl font-bold text-white">
                {siteConfig.business.logoText}
              </span>
              <span className="block text-xs font-medium uppercase tracking-[0.25em] text-coral-400">
                {siteConfig.business.logoAccent}
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              {siteConfig.business.description}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={formatPhoneLink(siteConfig.business.phone)}
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4" />
                  {siteConfig.business.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.business.email}`}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.business.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                {siteConfig.business.address}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Follow Us</h3>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-colors hover:text-white"
              >
                <Globe className="h-4 w-4" />
                Facebook
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-colors hover:text-white"
              >
                <Globe className="h-4 w-4" />
                Instagram
              </a>
            </div>
            <p className="mt-6 text-xs text-slate-500">
              JTB License: {siteConfig.business.licenseNumber}
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.business.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
