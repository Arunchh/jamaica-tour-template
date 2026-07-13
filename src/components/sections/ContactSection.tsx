"use client";

import { useState } from "react";
import { Mail, MessageCircle, Phone, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { siteConfig } from "@/config/site-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JamaicaStripe } from "@/components/ui/JamaicaStripe";
import { submitLeadForm } from "@/lib/submit-form";
import { formatPhoneLink, formatWhatsAppLink } from "@/lib/utils";

const resortOptions = [
  "RIU Montego Bay",
  "RIU Negril",
  "RIU Ocho Rios",
  "Royalton Blue Waters",
  "Royalton White Sands",
  "Royalton Negril",
  "Sandals Montego Bay",
  "Sandals Negril",
  "Sandals Ochi",
  "Secrets St. James",
  "Excellence Oyster Bay",
  "Grand Palladium",
  "Other Resort / Villa",
];

export function ContactSection() {
  const whatsappMessage = `Hi ${siteConfig.business.name}, I need a quote for airport transfer to my resort.`;
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const result = await submitLeadForm(
      siteConfig.communications,
      siteConfig.business.name,
      {
        name: String(formData.get("name") ?? ""),
        email: String(formData.get("email") ?? ""),
        phone: String(formData.get("phone") ?? ""),
        resort: String(formData.get("resort") ?? ""),
        service: String(formData.get("service") ?? ""),
        date: String(formData.get("date") ?? ""),
        guests: String(formData.get("guests") ?? ""),
        message: String(formData.get("message") ?? ""),
      }
    );

    if (result.ok) {
      setStatus("success");
      setStatusMessage(result.message);
      form.reset();
    } else {
      setStatus("error");
      setStatusMessage(result.message);
    }
  };

  const inputClass =
    "w-full rounded-lg border-2 border-jamaica-green/15 px-4 py-3 text-sm outline-none transition-colors focus:border-jamaica-green focus:ring-2 focus:ring-jamaica-green/20";

  return (
    <section id="contact" className="relative bg-jamaica-black py-20 sm:py-28">
      <div className="absolute inset-0 pattern-lion opacity-30" />
      <JamaicaStripe variant="rasta" className="absolute inset-x-0 top-0" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Book Your Ride"
          title="Get a Free USD Quote"
          description="Tell us your resort and flight details. We reply on WhatsApp within 2 hours — no obligation."
          light
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {siteConfig.paymentMethods.map((method) => (
            <span
              key={method}
              className="rounded-full border border-jamaica-gold/30 bg-jamaica-black-soft px-3 py-1 text-xs font-bold text-jamaica-gold"
            >
              {method}
            </span>
          ))}
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <a
              href={formatPhoneLink(siteConfig.business.phone)}
              className="flex items-center gap-4 rounded-2xl border-2 border-jamaica-green/20 bg-jamaica-black-soft p-5 text-white transition-colors hover:border-jamaica-green"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rasta-red">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-jamaica-gold-light/70">Call Direct</p>
                <p className="font-bold">{siteConfig.business.phoneDisplay}</p>
              </div>
            </a>

            <a
              href={formatWhatsAppLink(siteConfig.business.whatsapp, whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border-2 border-jamaica-green/20 bg-jamaica-black-soft p-5 text-white transition-colors hover:border-jamaica-green"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-jamaica-green">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-jamaica-gold-light/70">WhatsApp (Fastest)</p>
                <p className="font-bold">Message us now</p>
              </div>
            </a>

            <a
              href={`mailto:${siteConfig.business.email}`}
              className="flex items-center gap-4 rounded-2xl border-2 border-jamaica-green/20 bg-jamaica-black-soft p-5 text-white transition-colors hover:border-jamaica-green"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-jamaica-gold text-jamaica-black">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-jamaica-gold-light/70">Email</p>
                <p className="font-bold">{siteConfig.business.email}</p>
              </div>
            </a>

            <p className="text-sm text-white/50">
              JTB License #{siteConfig.business.licenseNumber} · {siteConfig.business.address}
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border-2 border-jamaica-green/10 bg-white p-6 shadow-2xl sm:p-8 lg:col-span-3"
          >
            {status === "success" && (
              <div className="mb-5 flex items-start gap-3 rounded-xl bg-jamaica-green-light p-4 text-jamaica-green-dark">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0" />
                <p className="text-sm font-semibold">{statusMessage}</p>
              </div>
            )}
            {status === "error" && (
              <div className="mb-5 flex items-start gap-3 rounded-xl bg-rasta-red-light p-4 text-rasta-red-dark">
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                <p className="text-sm font-semibold">{statusMessage}</p>
              </div>
            )}

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-bold text-jamaica-black">
                  Full Name *
                </label>
                <input id="name" name="name" required className={inputClass} placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-bold text-jamaica-black">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className={inputClass}
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-bold text-jamaica-black">
                  Phone / WhatsApp
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className={inputClass}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div>
                <label htmlFor="resort" className="mb-1.5 block text-sm font-bold text-jamaica-black">
                  Your Resort *
                </label>
                <select id="resort" name="resort" required className={inputClass}>
                  <option value="">Select your resort</option>
                  {resortOptions.map((resort) => (
                    <option key={resort} value={resort}>
                      {resort}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="service" className="mb-1.5 block text-sm font-bold text-jamaica-black">
                  Service Needed *
                </label>
                <select id="service" name="service" required className={inputClass}>
                  <option value="">Select a service</option>
                  <option value="MBJ Airport to Resort">MBJ Airport → Resort Transfer</option>
                  <option value="Resort to MBJ Airport">Resort → MBJ Airport</option>
                  <option value="Round Trip Airport">Round Trip Airport Transfer</option>
                  <option value="Dunn's River Falls">Dunn&apos;s River Falls Tour</option>
                  <option value="Blue Hole">Blue Hole & Secret Falls</option>
                  <option value="Rick's Cafe">Rick&apos;s Café Sunset</option>
                  <option value="Luminous Lagoon">Luminous Lagoon Night Tour</option>
                  <option value="Group Transport">Group / Family Transport</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="date" className="mb-1.5 block text-sm font-bold text-jamaica-black">
                  Travel Date
                </label>
                <input id="date" name="date" type="date" className={inputClass} />
              </div>
              <div>
                <label htmlFor="guests" className="mb-1.5 block text-sm font-bold text-jamaica-black">
                  Number of Guests
                </label>
                <input
                  id="guests"
                  name="guests"
                  type="number"
                  min={1}
                  className={inputClass}
                  placeholder="4"
                />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="mb-1.5 block text-sm font-bold text-jamaica-black">
                Flight # & Other Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className={inputClass}
                placeholder="Flight number, arrival time, special requests..."
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-rasta-red px-6 py-4 text-sm font-bold text-white shadow-lg shadow-rasta-red/30 transition-all hover:bg-rasta-red-dark hover:-translate-y-0.5 disabled:opacity-60 sm:w-auto"
            >
              {status === "loading" ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
              {status === "loading" ? "Sending..." : "Request Free USD Quote"}
            </button>
            <p className="mt-3 text-xs text-jamaica-black-soft/60">
              We respond within 2 hours. No spam, no obligation.
            </p>
          </form>
        </div>
      </div>

      <JamaicaStripe variant="flag" className="absolute inset-x-0 bottom-0" />
    </section>
  );
}
