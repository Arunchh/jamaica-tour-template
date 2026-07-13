export const siteConfig = {
  business: {
    name: "Island Routes Transport",
    tagline: "Private Tours & Airport Transfers Across Jamaica",
    description:
      "Licensed Jamaica tour operator offering private airport transfers, resort shuttles, and guided excursions in Montego Bay, Negril, Ocho Rios, and Falmouth. Trusted by US and Canadian travelers.",
    phone: "+1-876-555-0142",
    phoneDisplay: "(876) 555-0142",
    whatsapp: "18765550142",
    email: "bookings@islandroutestransport.com",
    address: "Montego Bay, St. James, Jamaica",
    licenseNumber: "JTB-TO-48291",
    yearsInBusiness: 12,
    googleRating: 4.9,
    reviewCount: 287,
    logoText: "Island Routes",
    logoAccent: "Transport",
  },

  seo: {
    siteUrl: "https://www.islandroutestransport.com",
    keywords: [
      "Jamaica airport transfer",
      "Montego Bay private driver",
      "Jamaica tour operator",
      "Negril excursions",
      "Ocho Rios tours",
      "Jamaica group transportation",
      "Dunn's River Falls tour",
      "Jamaica private tours",
    ],
  },

  hero: {
    headline: "Your Private Jamaica Transport, Done Right",
    subheadline:
      "Airport pickups, resort transfers, and unforgettable excursions — with licensed drivers, modern fleet vehicles, and upfront pricing for US & Canadian travelers.",
    primaryCta: "Get a Free Quote",
    secondaryCta: "View Popular Tours",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1920&q=80",
    imageAlt: "Turquoise Caribbean waters along the Jamaican coast",
  },

  trustPoints: [
    { label: "JTB Licensed Operator", icon: "shield" as const },
    { label: "12+ Years Experience", icon: "award" as const },
    { label: "4.9★ Guest Rating", icon: "star" as const },
    { label: "24/7 Airport Pickups", icon: "clock" as const },
  ],

  services: [
    {
      title: "Airport Transfers",
      description:
        "Meet-and-greet at Sangster (MBJ) or Norman Manley (KIN). Flight tracking, cold towels, and direct resort drop-off.",
      icon: "plane" as const,
      priceFrom: 65,
    },
    {
      title: "Resort & Hotel Shuttles",
      description:
        "Reliable private transfers between Montego Bay, Negril, Ocho Rios, and Falmouth resorts — no shared bus waits.",
      icon: "hotel" as const,
      priceFrom: 45,
    },
    {
      title: "Private Day Tours",
      description:
        "Custom itineraries with your own driver-guide. Go at your pace with stops for photos, food, and shopping.",
      icon: "map" as const,
      priceFrom: 120,
    },
    {
      title: "Group & Event Transport",
      description:
        "Weddings, corporate retreats, and church groups. Coaster buses and Hiace vans for 7–30 passengers.",
      icon: "users" as const,
      priceFrom: 180,
    },
  ],

  fleet: [
    {
      name: "Toyota Hiace",
      capacity: "Up to 12 passengers",
      description: "Ideal for families and small groups. AC, luggage space, comfortable seating.",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Toyota Coaster",
      capacity: "Up to 30 passengers",
      description: "Perfect for tour groups, weddings, and corporate events across the island.",
      image:
        "https://images.unsplash.com/photo-1570125909232-eabf3c8e4f3e?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Private Sedan / SUV",
      capacity: "1–4 passengers",
      description: "Executive airport transfers and couples' getaways. Premium comfort and privacy.",
      image:
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80",
    },
  ],

  destinations: [
    {
      name: "Montego Bay",
      description: "Resort corridor, Hip Strip, Rose Hall Great House, and Sangster Airport (MBJ).",
      image:
        "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Negril",
      description: "Seven Mile Beach, Rick's Café cliffs, and boutique villas on the west end.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Ocho Rios",
      description: "Dunn's River Falls, Blue Hole, Mystic Mountain, and cruise ship excursions.",
      image:
        "https://images.unsplash.com/photo-1559120680-6a0f4941f1a4?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Falmouth",
      description: "Historic port town, Martha Brae rafting, and Luminous Lagoon night tours.",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    },
  ],

  excursions: [
    {
      name: "Dunn's River Falls",
      duration: "5–6 hours",
      priceFrom: 85,
      highlights: ["Guided climb", "Photo stops", "Lunch option"],
      image:
        "https://images.unsplash.com/photo-1544551763-77ef2d0cfcb0?auto=format&fit=crop&w=800&q=80",
      popular: true,
    },
    {
      name: "Blue Hole & Secret Falls",
      duration: "6 hours",
      priceFrom: 95,
      highlights: ["Swimming", "Cliff jumping", "Rainforest trails"],
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb6668c21a?auto=format&fit=crop&w=800&q=80",
      popular: true,
    },
    {
      name: "Rick's Café Sunset",
      duration: "4 hours",
      priceFrom: 75,
      highlights: ["Cliff divers", "Sunset views", "Negril vibes"],
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
      popular: false,
    },
    {
      name: "Luminous Lagoon Night Tour",
      duration: "3 hours",
      priceFrom: 70,
      highlights: ["Bioluminescence", "Boat ride", "Falmouth departure"],
      image:
        "https://images.unsplash.com/photo-1519046904212-407b7196a9d8?auto=format&fit=crop&w=800&q=80",
      popular: false,
    },
  ],

  howItWorks: [
    {
      step: 1,
      title: "Tell Us Your Plans",
      description: "Share your dates, group size, and pickup location. We reply within 2 hours.",
    },
    {
      step: 2,
      title: "Get a Clear Quote",
      description: "No hidden fees. See your total price before you book — pay on arrival or online.",
    },
    {
      step: 3,
      title: "Enjoy the Ride",
      description: "Your driver meets you on time with a name sign. Sit back and enjoy Jamaica.",
    },
  ],

  testimonials: [
    {
      name: "Sarah M.",
      location: "Boston, MA",
      text: "Picked us up at MBJ and took us straight to our Negril resort. Driver was professional, van was spotless, and they tracked our delayed flight. Will book again!",
      rating: 5,
    },
    {
      name: "Michael & Linda T.",
      location: "Toronto, Canada",
      text: "We booked Dunn's River Falls plus Blue Hole for our family of six. Our guide knew all the best photo spots and kept the kids engaged all day.",
      rating: 5,
    },
    {
      name: "James R.",
      location: "Atlanta, GA",
      text: "Organized transport for our wedding group of 24. Coaster bus was comfortable and on schedule for every event. Highly recommend for group travel.",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "Do you provide airport transfers from Sangster Airport (MBJ)?",
      answer:
        "Yes. We offer 24/7 private airport transfers from Sangster International Airport (MBJ) in Montego Bay to any resort or villa across Jamaica, including Negril, Ocho Rios, and Falmouth.",
    },
    {
      question: "How far in advance should I book?",
      answer:
        "We recommend booking at least 48 hours ahead for airport transfers and 3–5 days for popular excursions like Dunn's River Falls. Last-minute requests are welcome based on availability.",
    },
    {
      question: "Are your prices per person or per vehicle?",
      answer:
        "Airport transfers and private tours are quoted per vehicle based on your group size. Excursion pricing may include per-person entry fees — we always provide a clear breakdown before you confirm.",
    },
    {
      question: "Do you accept US dollars and credit cards?",
      answer:
        "Yes. We accept USD, CAD, JMD, and major credit cards. Many US and Canadian guests prefer to pay in dollars — we make it easy.",
    },
    {
      question: "Are your drivers licensed and insured?",
      answer:
        "Absolutely. We are a Jamaica Tourist Board licensed tour operator. All drivers are certified, vehicles are fully insured, and we maintain our fleet to the highest safety standards.",
    },
  ],

  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    tripadvisor: "https://tripadvisor.com",
  },

  nav: [
    { label: "Services", href: "#services" },
    { label: "Tours", href: "#tours" },
    { label: "Fleet", href: "#fleet" },
    { label: "Destinations", href: "#destinations" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
