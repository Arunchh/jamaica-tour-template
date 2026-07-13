import type { UiMessages } from "../types";

export const uiEn: UiMessages = {
  common: {
    getQuote: "Get a Quote",
    call: "Call",
    whatsapp: "WhatsApp",
    quote: "Quote",
    fromPriceUsd: "From {price} USD",
    fromPriceUsdPerPerson: "From {price} USD / person",
    readMore: "Read more →",
    backToHome: "Back to Home",
    allGuides: "All Guides",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    usTravelers: "US travelers",
    whatsappUs: "WhatsApp Us",
    language: "Language",
    jtbLicense: "JTB License:",
    allRightsReserved: "All rights reserved.",
    followUs: "Follow Us",
    quickLinks: "Quick Links",
    contact: "Contact",
    facebook: "Facebook",
    instagram: "Instagram",
    fanFavorite: "Fan Favorite",
    bookThisTour: "Book This Tour",
    bookCityTour: "Book a {city} Tour",
    popularResorts: "Popular resorts we serve",
    cityToursImageAlt: "{city}, Jamaica tours",
    needTransferCtaTitle: "Need a transfer or tour?",
    needTransferCtaDescription:
      "Get a free USD quote from {business} — WhatsApp reply within 2 hours.",
    needTransferCtaButton: "Get a Free Quote",
    countryName: "Jamaica",
  },
  sections: {
    services: {
      eyebrow: "What We Do",
      title: "Transport & Tours for US Travelers",
      description:
        "Airport pickups, resort shuttles, and island excursions — priced in USD, built for families and groups.",
    },
    cityTours: {
      eyebrow: "Tours by City",
      title: "Every Major Tourist Area — Covered",
      description:
        "Tap a city to see transfers, excursions, and activities available in that area.",
    },
    excursions: {
      eyebrow: "Island Excursions",
      title: "Day Trips From Your Resort",
      description:
        "The experiences US travelers book most — private driver included, go at your own pace.",
    },
    fleet: {
      eyebrow: "Our Fleet",
      title: "Vans & Buses for Every Group Size",
      description:
        "From a couple heading to RIU to a 30-person family reunion — we have the right ride.",
    },
    howItWorks: {
      eyebrow: "Easy Booking",
      title: "3 Steps — You're Set",
      description:
        "No complicated apps. WhatsApp us, get a price in USD, meet your driver at the airport.",
    },
    testimonials: {
      eyebrow: "Real Reviews",
      title: "What US Travelers Say",
      description:
        "Families, couples, and groups who booked airport transfers and island tours with us.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions US Travelers Ask Us",
      description:
        "Resort transfers, pricing, payment, and group travel — answered straight.",
    },
    contact: {
      eyebrow: "Book Your Ride",
      title: "Get a Free USD Quote",
      description:
        "Tell us your resort and flight details. We reply on WhatsApp within 2 hours — no obligation.",
    },
    resortsCta: {
      title: "Your resort not listed? No problem — we go everywhere on the island.",
      description:
        "Tell us where you booked on the form below and we'll quote you a flat USD rate.",
      button: "Get Resort Transfer Quote",
    },
  },
  tourTypes: {
    transfer: "Transfer",
    excursion: "Excursion",
    activity: "Activity",
    combo: "Combo Tour",
  },
  contact: {
    whatsappQuote: "Hi {business}, I need a quote for resort transfer please.",
    whatsappResort: "Hi {business}, I need a quote for airport transfer to my resort.",
    callDirect: "Call Direct",
    whatsappFastest: "WhatsApp (Fastest)",
    messageUsNow: "Message us now",
    emailLabel: "Email",
    form: {
      fullName: "Full Name *",
      email: "Email *",
      phone: "Phone / WhatsApp",
      resort: "Your Resort *",
      service: "Service Needed *",
      travelDate: "Travel Date",
      guests: "Number of Guests",
      details: "Flight # & Other Details",
      submit: "Request Free USD Quote",
      submitting: "Sending...",
      disclaimer: "We respond within 2 hours. No spam, no obligation.",
      placeholders: {
        name: "Your name",
        email: "you@email.com",
        phone: "+1 (555) 123-4567",
        guests: "4",
        details: "Flight number, arrival time, special requests...",
        selectResort: "Select your resort",
        selectService: "Select a service",
      },
      resortOptions: [
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
      ],
      serviceOptions: [
        { value: "MBJ Airport to Resort", label: "MBJ Airport → Resort Transfer" },
        { value: "Resort to MBJ Airport", label: "Resort → MBJ Airport" },
        { value: "Round Trip Airport", label: "Round Trip Airport Transfer" },
        { value: "Dunn's River Falls", label: "Dunn's River Falls Tour" },
        { value: "Blue Hole", label: "Blue Hole & Secret Falls" },
        { value: "Rick's Cafe", label: "Rick's Café Sunset" },
        { value: "Luminous Lagoon", label: "Luminous Lagoon Night Tour" },
        { value: "Group Transport", label: "Group / Family Transport" },
        { value: "Other", label: "Other" },
      ],
    },
  },
  blog: {
    indexTitle: "Jamaica Travel Guides",
    indexSubtitle: "Tips for US travelers — airport transfers, resort pickups, and island tours.",
    metadataTitle: "Jamaica Travel Blog — Airport Transfers, Tours & Tips",
    metadataDescription:
      "Guides for US travelers visiting Jamaica — MBJ airport transfers, RIU & Royalton resort shuttles, Ocho Rios tours, and group transport tips.",
    indexDescription:
      "Guides for US travelers visiting Jamaica — MBJ airport transfers, RIU & Royalton resort shuttles, Ocho Rios tours, and group transport tips.",
  },
  form: {
    success: "Thanks! We'll reply on WhatsApp or email within 2 hours.",
    error: "Something went wrong. Please WhatsApp or call us directly.",
    mailtoSuccess: "Your email app should open — send the message to complete your request.",
  },
};
