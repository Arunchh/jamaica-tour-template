"use client";

import { Mail, MessageCircle, Phone, Send } from "lucide-react";
import { siteConfig } from "@/config/site-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { formatPhoneLink, formatWhatsAppLink } from "@/lib/utils";

export function ContactSection() {
  const whatsappMessage = `Hi ${siteConfig.business.name}, I'd like a quote for:`;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const service = formData.get("service");
    const date = formData.get("date");
    const guests = formData.get("guests");
    const message = formData.get("message");

    const body = [
      `Hi ${siteConfig.business.name},`,
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Service: ${service}`,
      `Date: ${date}`,
      `Guests: ${guests}`,
      "",
      `Message: ${message}`,
    ].join("\n");

    window.location.href = `mailto:${siteConfig.business.email}?subject=${encodeURIComponent("Tour/Transfer Quote Request")}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="bg-ocean-900 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get Your Quote"
          title="Ready to Explore Jamaica?"
          description="Fill out the form and we'll send you a clear quote within 2 hours. No obligation."
          light
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <a
              href={formatPhoneLink(siteConfig.business.phone)}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-white transition-colors hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-coral-500">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-slate-300">Call Us Direct</p>
                <p className="font-semibold">{siteConfig.business.phoneDisplay}</p>
              </div>
            </a>

            <a
              href={formatWhatsAppLink(siteConfig.business.whatsapp, whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-white transition-colors hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-slate-300">WhatsApp (Fastest)</p>
                <p className="font-semibold">Message us now</p>
              </div>
            </a>

            <a
              href={`mailto:${siteConfig.business.email}`}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-white transition-colors hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ocean-600">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-slate-300">Email</p>
                <p className="font-semibold">{siteConfig.business.email}</p>
              </div>
            </a>

            <p className="text-sm text-slate-400">
              Licensed operator #{siteConfig.business.licenseNumber} ·{" "}
              {siteConfig.business.address}
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-white p-6 shadow-2xl sm:p-8 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition-colors focus:border-ocean-500 focus:ring-2 focus:ring-ocean-500/20"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition-colors focus:border-ocean-500 focus:ring-2 focus:ring-ocean-500/20"
                  placeholder="john@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Phone / WhatsApp
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition-colors focus:border-ocean-500 focus:ring-2 focus:ring-ocean-500/20"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div>
                <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Service Needed *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition-colors focus:border-ocean-500 focus:ring-2 focus:ring-ocean-500/20"
                >
                  <option value="">Select a service</option>
                  <option value="Airport Transfer">Airport Transfer</option>
                  <option value="Resort Transfer">Resort / Hotel Transfer</option>
                  <option value="Private Day Tour">Private Day Tour</option>
                  <option value="Group Transport">Group Transport</option>
                  <option value="Dunn's River Falls">Dunn&apos;s River Falls</option>
                  <option value="Blue Hole">Blue Hole & Secret Falls</option>
                  <option value="Other">Other / Custom</option>
                </select>
              </div>
              <div>
                <label htmlFor="date" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Travel Date
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition-colors focus:border-ocean-500 focus:ring-2 focus:ring-ocean-500/20"
                />
              </div>
              <div>
                <label htmlFor="guests" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Number of Guests
                </label>
                <input
                  id="guests"
                  name="guests"
                  type="number"
                  min={1}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition-colors focus:border-ocean-500 focus:ring-2 focus:ring-ocean-500/20"
                  placeholder="4"
                />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
                Additional Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition-colors focus:border-ocean-500 focus:ring-2 focus:ring-ocean-500/20"
                placeholder="Flight number, resort name, pickup location, special requests..."
              />
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-coral-500 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-coral-500/25 transition-all hover:bg-coral-600 hover:-translate-y-0.5 sm:w-auto"
            >
              <Send className="h-4 w-4" />
              Request Free Quote
            </button>
            <p className="mt-3 text-xs text-slate-500">
              We respond within 2 hours. No spam, no obligation.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
