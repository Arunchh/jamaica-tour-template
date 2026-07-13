export const siteConfig = {
  business: {
    name: "Irie Island Transport",
    tagline: "Airport to Resort — Private Tours Across Jamaica",
    description:
      "Licensed Jamaica transport for US travelers — private airport transfers to RIU, Royalton, Sandals & all-inclusive resorts in Montego Bay, Negril, Ocho Rios & Falmouth. Flat USD rates, family-friendly vans & Hiace buses.",
    phone: "+1-876-555-0142",
    phoneDisplay: "(876) 555-0142",
    whatsapp: "18765550142",
    email: "bookings@irieislandtransport.com",
    address: "Montego Bay, St. James, Jamaica",
    licenseNumber: "JTB-TO-48291",
    yearsInBusiness: 12,
    googleRating: 4.9,
    reviewCount: 287,
    logoText: "Irie Island",
    logoAccent: "Transport",
  },

  seo: {
    siteUrl: "https://www.irieislandtransport.com",
    keywords: [
      "Jamaica airport transfer MBJ",
      "RIU Montego Bay airport transfer",
      "Royalton Blue Waters transfer",
      "Jamaica all inclusive resort shuttle",
      "private driver Jamaica",
      "Negril airport transfer from MBJ",
      "Dunn's River Falls tour from resort",
      "Jamaica group transportation Hiace",
    ],
  },

  hero: {
    headline: "Land in Jamaica. We Get You to the Resort.",
    subheadline:
      "Private airport pickups from MBJ straight to your all-inclusive — RIU, Royalton, Sandals & more. Flat USD pricing for families and groups. No resort markups, no shared buses.",
    primaryCta: "Get Your Free Quote",
    secondaryCta: "See Resort Transfers",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1920&q=80",
    imageAlt: "Beautiful Jamaican coastline with turquoise Caribbean water",
    badges: [
      "Flat USD Rates",
      "Family & Group Friendly",
      "JTB Licensed",
    ],
  },

  trustPoints: [
    { label: "JTB Licensed & Insured", icon: "shield" as const },
    { label: "Pay in US Dollars", icon: "dollar" as const },
    { label: `${4.9}★ from US Travelers`, icon: "star" as const },
    { label: "24/7 MBJ Airport Pickup", icon: "clock" as const },
  ],

  valueProps: [
    {
      title: "Cheaper Than Resort Transfers",
      description:
        "All-inclusive resorts often charge $150–$250 round trip. We quote per vehicle in USD — usually less, with your own private driver.",
    },
    {
      title: "We Know Your Resort",
      description:
        "Daily pickups at RIU, Royalton, Sandals, Secrets, Excellence & Grand Palladium. Tell us where you're staying — we've been there hundreds of times.",
    },
    {
      title: "Built for Families & Groups",
      description:
        "Traveling with cousins, church group, or crew? Our Hiace vans and Coaster buses fit 7–30 people with luggage. One price, your whole party.",
    },
  ],

  resorts: {
    eyebrow: "All-Inclusive Resorts We Serve",
    title: "We Pick Up & Drop Off at Your Resort",
    description:
      "Booked RIU, Royalton, or Sandals? We handle airport transfers and day tours from every major all-inclusive on the island.",
    chains: [
      {
        name: "RIU",
        resorts: ["RIU Montego Bay", "RIU Palace Jamaica", "RIU Negril", "RIU Ocho Rios"],
      },
      {
        name: "Royalton",
        resorts: ["Royalton Blue Waters", "Royalton White Sands", "Royalton Negril", "Royalton Hideaway"],
      },
      {
        name: "Sandals & Beaches",
        resorts: ["Sandals Montego Bay", "Sandals Negril", "Sandals Ochi", "Beaches Negril"],
      },
      {
        name: "More Favorites",
        resorts: ["Secrets St. James", "Excellence Oyster Bay", "Grand Palladium", "Bahia Principe"],
      },
    ],
  },

  services: [
    {
      title: "MBJ Airport Transfers",
      description:
        "Land at Sangster Airport (MBJ)? Your driver meets you with a name sign, tracks your flight, and takes you straight to resort — cold Red Stripe or water included.",
      icon: "plane" as const,
      priceFrom: 55,
    },
    {
      title: "All-Inclusive Resort Shuttles",
      description:
        "Private door-to-door between Montego Bay, Negril, Ocho Rios & Falmouth resorts. No waiting on shared hotel buses. Your schedule, your ride.",
      icon: "hotel" as const,
      priceFrom: 40,
    },
    {
      title: "Island Day Tours",
      description:
        "Dunn's River Falls, Blue Hole, Rick's Café, Luminous Lagoon — your driver-guide handles transport, waits for you, and knows the best local food spots.",
      icon: "map" as const,
      priceFrom: 95,
    },
    {
      title: "Family & Group Transport",
      description:
        "Reunions, weddings, church trips, and friend groups. Toyota Hiace (up to 12) and Coaster buses (up to 30). Split the cost — way cheaper per person.",
      icon: "users" as const,
      priceFrom: 150,
    },
  ],

  fleet: [
    {
      name: "Toyota Hiace",
      capacity: "Up to 12 passengers",
      description: "Perfect for families and friend groups heading to Negril or Ocho Rios. AC, luggage rack, comfortable seats.",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Toyota Coaster",
      capacity: "Up to 30 passengers",
      description: "Ideal for big groups, wedding parties, and church outings. Your whole crew rides together.",
      image:
        "https://images.unsplash.com/photo-1570125909232-eabf3c8e4f3e?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Private Van / SUV",
      capacity: "1–5 passengers",
      description: "Couples and small families. Clean, air-conditioned, private — just you and your people.",
      image:
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80",
    },
  ],

  destinations: [
    {
      name: "Montego Bay",
      description: "RIU, Royalton, Secrets & Hip Strip. Home to Sangster Airport (MBJ) — where most US flights land.",
      image:
        "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Negril",
      description: "Seven Mile Beach, Rick's Café cliffs. RIU Negril, Royalton Negril & Sandals Negril transfers daily.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Ocho Rios",
      description: "Dunn's River Falls, Blue Hole, Mystic Mountain. Sandals Ochi & cruise port excursions.",
      image:
        "https://images.unsplash.com/photo-1559120680-6a0f4941f1a4?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Falmouth",
      description: "Royalton Blue Waters, Luminous Lagoon night tours, and Martha Brae river rafting.",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    },
  ],

  excursions: [
    {
      name: "Dunn's River Falls",
      duration: "5–6 hours",
      priceFrom: 75,
      highlights: ["Guided climb", "Photo stops", "Jerk chicken lunch"],
      image:
        "https://images.unsplash.com/photo-1544551763-77ef2d0cfcb0?auto=format&fit=crop&w=800&q=80",
      popular: true,
    },
    {
      name: "Blue Hole & Secret Falls",
      duration: "6 hours",
      priceFrom: 85,
      highlights: ["Swimming", "Cliff jumping", "Rainforest vibes"],
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb6668c21a?auto=format&fit=crop&w=800&q=80",
      popular: true,
    },
    {
      name: "Rick's Café Sunset",
      duration: "4 hours",
      priceFrom: 65,
      highlights: ["Cliff divers", "Sunset views", "Negril west end"],
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
      popular: false,
    },
    {
      name: "Luminous Lagoon Night Tour",
      duration: "3 hours",
      priceFrom: 60,
      highlights: ["Glowing water", "Boat ride", "Falmouth pickup"],
      image:
        "https://images.unsplash.com/photo-1519046904212-407b7196a9d8?auto=format&fit=crop&w=800&q=80",
      popular: false,
    },
  ],

  howItWorks: [
    {
      step: 1,
      title: "Tell Us Where You're Staying",
      description: "Your resort name, flight info, and how many in your group. WhatsApp us — we reply fast.",
    },
    {
      step: 2,
      title: "Get a Flat USD Quote",
      description: "One clear price per vehicle. No hidden fees, no per-person surprises. Pay on arrival, Zelle, or cash.",
    },
    {
      step: 3,
      title: "Meet Your Driver at MBJ",
      description: "Name sign at the airport. Cold drink waiting. Straight to your resort — irie from minute one.",
    },
  ],

  testimonials: [
    {
      name: "Keisha W.",
      location: "Atlanta, GA",
      text: "Booked our family of 8 from MBJ to Royalton Blue Waters. Driver was on time, van was clean, and the price beat what the resort quoted by a lot. Already rebooked for next year!",
      rating: 5,
    },
    {
      name: "Marcus & Denise J.",
      location: "Brooklyn, NY",
      text: "First time in Jamaica and we were nervous about getting from the airport to RIU Negril. These guys made it easy — WhatsApp communication, flat rate in dollars, and our driver was like family.",
      rating: 5,
    },
    {
      name: "Pastor Andre T.",
      location: "Charlotte, NC",
      text: "Our church group of 22 used their Coaster bus for airport pickup and a Dunn's River day trip. Professional, on schedule, and fair pricing for the whole group. Highly recommend.",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "Do you pick up from Sangster Airport (MBJ) to RIU and Royalton resorts?",
      answer:
        "Yes — daily. We provide private airport transfers from MBJ to RIU Montego Bay, RIU Negril, Royalton Blue Waters, Royalton White Sands, and every major all-inclusive resort across Jamaica.",
    },
    {
      question: "How much does an airport transfer cost in US dollars?",
      answer:
        "We quote per vehicle, not per person. A private van for 1–4 people from MBJ to nearby Montego Bay resorts starts around $40–$55 USD. MBJ to Negril is typically $65–$80 USD one way. We always give you the full price before you book.",
    },
    {
      question: "Is this cheaper than booking through my resort?",
      answer:
        "Usually yes. Resorts often charge $150–$250+ round trip for transfers. Booking direct with a local operator like us typically saves money — and you get a private vehicle just for your group.",
    },
    {
      question: "Can I pay in US dollars, Zelle, or CashApp?",
      answer:
        "Yes. We accept USD cash, Zelle, CashApp, PayPal, and major credit cards. Many of our US guests pay in dollars — whatever is easiest for you.",
    },
    {
      question: "We're a big family/group — do you have large vehicles?",
      answer:
        "Absolutely. Our Toyota Hiace fits up to 12 and our Coaster bus handles up to 30 passengers. Perfect for family reunions, friend trips, and church groups visiting Jamaica.",
    },
    {
      question: "Are your drivers licensed and safe?",
      answer:
        "Every driver is Jamaica Tourist Board certified, fully insured, and experienced on Jamaican roads. Your safety is our top priority — we want you to come back every year.",
    },
  ],

  paymentMethods: ["USD Cash", "Zelle", "CashApp", "PayPal", "Credit Card"],

  // ── AGENCY: Lead capture setup (configure once per client) ──
  // Options: "web3forms" (recommended), "formspree", or "mailto" (fallback)
  // Web3Forms: free at web3forms.com → access key → emails go to operator inbox
  // Formspree: formspree.io → form ID
  // Tawk.to: free live chat → property ID + widget ID (optional)
  communications: {
    formProvider: "web3forms" as const,
    web3formsAccessKey: "",
    formspreeFormId: "",
    leadNotificationEmail: "bookings@irieislandtransport.com",
    tawkPropertyId: "",
    tawkWidgetId: "",
  },

  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    tripadvisor: "https://tripadvisor.com",
  },

  nav: [
    { label: "Services", href: "/#services" },
    { label: "Tours", href: "/#destinations" },
    { label: "Resorts", href: "/#resorts" },
    { label: "Blog", href: "/blog" },
    { label: "Reviews", href: "/#reviews" },
    { label: "Contact", href: "/#contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
