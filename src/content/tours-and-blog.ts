export type CityTour = {
  name: string;
  type: "transfer" | "excursion" | "activity" | "combo";
  duration: string;
  priceFrom: number;
  description: string;
};

export type CityTourGuide = {
  city: string;
  slug: string;
  tagline: string;
  description: string;
  image: string;
  popularResorts: string[];
  tours: CityTour[];
};

export const cityTourGuides: CityTourGuide[] = [
  {
    city: "Montego Bay",
    slug: "montego-bay",
    tagline: "Airport hub & resort corridor",
    description:
      "Most US flights land at MBJ here. Daily private transfers to Hip Strip hotels, Rose Hall resorts, and island-wide departures.",
    image:
      "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80",
    popularResorts: ["RIU Montego Bay", "Secrets St. James", "Holiday Inn Resort", "Deja Resort"],
    tours: [
      {
        name: "MBJ Airport → Montego Bay Resort",
        type: "transfer",
        duration: "20–45 min",
        priceFrom: 40,
        description: "Private meet-and-greet at Sangster Airport to any Montego Bay hotel or villa.",
      },
      {
        name: "Rose Hall Great House Tour",
        type: "excursion",
        duration: "3–4 hours",
        priceFrom: 55,
        description: "Historic plantation house, Annie Palmer legend, and photo stops along the coast.",
      },
      {
        name: "Doctor's Cave Beach & Hip Strip",
        type: "activity",
        duration: "4 hours",
        priceFrom: 45,
        description: "Beach time, Margaritaville, local craft market, and jerk chicken lunch stop.",
      },
      {
        name: "Montego Bay City & Shopping Tour",
        type: "activity",
        duration: "4–5 hours",
        priceFrom: 50,
        description: "Downtown markets, souvenir shopping, and optional rum cake / coffee stops.",
      },
      {
        name: "Catamaran Snorkel Cruise",
        type: "activity",
        duration: "3–4 hours",
        priceFrom: 75,
        description: "Sailing, snorkeling, and open bar party cruise from Montego Bay marina.",
      },
      {
        name: "ATV Adventure & Countryside",
        type: "activity",
        duration: "3 hours",
        priceFrom: 85,
        description: "Off-road trails through rural communities with panoramic hilltop views.",
      },
    ],
  },
  {
    city: "Negril",
    slug: "negril",
    tagline: "Seven Mile Beach & cliff sunsets",
    description:
      "West end paradise. We run daily MBJ airport transfers and resort-to-resort shuttles to RIU Negril, Royalton Negril, and Sandals.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    popularResorts: ["RIU Negril", "Royalton Negril", "Sandals Negril", "Couples Swept Away"],
    tours: [
      {
        name: "MBJ Airport → Negril Resort",
        type: "transfer",
        duration: "75–90 min",
        priceFrom: 65,
        description: "Private van from Sangster Airport to Seven Mile Beach resorts and west end villas.",
      },
      {
        name: "Rick's Café Sunset Trip",
        type: "excursion",
        duration: "4–5 hours",
        priceFrom: 55,
        description: "Cliff diving show, sunset views, and time for drinks at the world-famous Rick's Café.",
      },
      {
        name: "Seven Mile Beach Day",
        type: "activity",
        duration: "4 hours",
        priceFrom: 40,
        description: "Beach club access, swimming, and optional water sports along Negril's famous beach.",
      },
      {
        name: "Negril Lighthouse & West End",
        type: "activity",
        duration: "3 hours",
        priceFrom: 45,
        description: "Scenic west end drive, lighthouse photos, and local seafood lunch option.",
      },
      {
        name: "Mayfield Falls Adventure",
        type: "excursion",
        duration: "5–6 hours",
        priceFrom: 80,
        description: "Less crowded waterfall experience with natural pools and guided river walk.",
      },
      {
        name: "Rhodes Hall Plantation Tour",
        type: "excursion",
        duration: "4 hours",
        priceFrom: 70,
        description: "Nature trails, camel rides, and bird watching on a historic estate.",
      },
    ],
  },
  {
    city: "Ocho Rios",
    slug: "ocho-rios",
    tagline: "Waterfalls, adventure & cruise port",
    description:
      "North coast adventure capital. Dunn's River, Blue Hole, and Mystic Mountain — plus cruise ship shore excursions with on-time port return.",
    image:
      "https://images.unsplash.com/photo-1559120680-6a0f4941f1a4?auto=format&fit=crop&w=800&q=80",
    popularResorts: ["Sandals Ochi", "Sandals Royal Plantation", "Jewel Dunn's River", "Moon Palace"],
    tours: [
      {
        name: "MBJ Airport → Ocho Rios Resort",
        type: "transfer",
        duration: "90–110 min",
        priceFrom: 95,
        description: "Private transfer from Montego Bay Airport to north coast all-inclusive resorts.",
      },
      {
        name: "Dunn's River Falls Climb",
        type: "excursion",
        duration: "5–6 hours",
        priceFrom: 75,
        description: "Guided waterfall climb, beach time, and optional lunch at a local jerk spot.",
      },
      {
        name: "Blue Hole & Secret Falls",
        type: "excursion",
        duration: "6 hours",
        priceFrom: 85,
        description: "Swimming holes, cliff jumping, and rainforest trails with a local guide.",
      },
      {
        name: "Dunn's River + Blue Hole Combo",
        type: "combo",
        duration: "8–9 hours",
        priceFrom: 120,
        description: "The two most popular Ocho Rios attractions in one full-day private tour.",
      },
      {
        name: "Mystic Mountain Rainforest",
        type: "activity",
        duration: "4–5 hours",
        priceFrom: 90,
        description: "Sky Explorer chairlift, bobsled ride, and rainforest views above Ocho Rios.",
      },
      {
        name: "River Tubing on White River",
        type: "activity",
        duration: "3 hours",
        priceFrom: 65,
        description: "Gentle tubing through lush jungle — great for families and first-timers.",
      },
      {
        name: "Konoko Falls & Gardens",
        type: "activity",
        duration: "3 hours",
        priceFrom: 50,
        description: "Botanical gardens, mini waterfall climb, and Arawak history exhibit.",
      },
      {
        name: "Cruise Port Shore Excursion",
        type: "combo",
        duration: "4–6 hours",
        priceFrom: 70,
        description: "Timed pickup from Ocho Rios cruise port with guaranteed return before ship departs.",
      },
    ],
  },
  {
    city: "Falmouth",
    slug: "falmouth",
    tagline: "Historic port & glowing waters",
    description:
      "Home to Royalton Blue Waters and the famous Luminous Lagoon. Martha Brae rafting and Falmouth heritage tours available daily.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    popularResorts: ["Royalton Blue Waters", "Royalton White Sands", "Excellence Oyster Bay"],
    tours: [
      {
        name: "MBJ Airport → Falmouth Resort",
        type: "transfer",
        duration: "30–50 min",
        priceFrom: 50,
        description: "Direct private transfer to Royalton Blue Waters, White Sands, and Trelawny resorts.",
      },
      {
        name: "Luminous Lagoon Night Tour",
        type: "excursion",
        duration: "3 hours",
        priceFrom: 60,
        description: "Evening boat ride on glowing bioluminescent waters — a Jamaica must-do experience.",
      },
      {
        name: "Martha Brae River Rafting",
        type: "activity",
        duration: "3–4 hours",
        priceFrom: 55,
        description: "Bamboo raft ride down a peaceful jungle river with a local captain.",
      },
      {
        name: "Falmouth Heritage Walking Tour",
        type: "activity",
        duration: "2–3 hours",
        priceFrom: 40,
        description: "Georgian architecture, historic port town, and local market visit.",
      },
      {
        name: "Good Hope Estate Adventure",
        type: "excursion",
        duration: "4–5 hours",
        priceFrom: 75,
        description: "Zip lines, river tubing, and great house tour on a colonial-era plantation.",
      },
      {
        name: "Appleton Estate Rum Tour",
        type: "excursion",
        duration: "5–6 hours",
        priceFrom: 90,
        description: "Jamaica's famous rum distillery tour with tasting (south coast day trip from Falmouth).",
      },
    ],
  },
  {
    city: "Runaway Bay",
    slug: "runaway-bay",
    tagline: "Quiet north coast beaches",
    description:
      "Relaxed resort area between Ocho Rios and Falmouth. Popular with families who want calm beaches and lower-key vibes.",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb6668c21a?auto=format&fit=crop&w=800&q=80",
    popularResorts: ["Royal Decameron Runaway Bay", "Jewel Paradise Cove", "Franklyn D Resort"],
    tours: [
      {
        name: "MBJ Airport → Runaway Bay",
        type: "transfer",
        duration: "60–75 min",
        priceFrom: 70,
        description: "Private airport transfer to Runaway Bay and St. Ann north coast hotels.",
      },
      {
        name: "Green Grotto Caves",
        type: "excursion",
        duration: "3 hours",
        priceFrom: 50,
        description: "Underground limestone caves with history linked to Jamaica's freedom fighters.",
      },
      {
        name: "Puerto Seco Beach Day",
        type: "activity",
        duration: "4 hours",
        priceFrom: 45,
        description: "Beach club, swimming, and jerk pan lunch on Discovery Bay coast.",
      },
      {
        name: "Nine Mile — Bob Marley Birthplace",
        type: "excursion",
        duration: "6–7 hours",
        priceFrom: 95,
        description: "Pilgrimage to Bob Marley's childhood home and mausoleum in the St. Ann hills.",
      },
    ],
  },
  {
    city: "Kingston",
    slug: "kingston",
    tagline: "Culture, music & city life",
    description:
      "Norman Manley Airport (KIN) transfers and cultural day trips for travelers extending their Jamaica vacation.",
    image:
      "https://images.unsplash.com/photo-1559120680-6a0f4941f1a4?auto=format&fit=crop&w=800&q=80",
    popularResorts: ["Courtyard Kingston", "Spanish Court Hotel", "Melia Kingston"],
    tours: [
      {
        name: "KIN Airport → Kingston Hotel",
        type: "transfer",
        duration: "20–40 min",
        priceFrom: 45,
        description: "Private transfer from Norman Manley International Airport to Kingston hotels.",
      },
      {
        name: "Bob Marley Museum Tour",
        type: "excursion",
        duration: "3 hours",
        priceFrom: 50,
        description: "Tuff Gong studio and museum at Bob Marley's former home on Hope Road.",
      },
      {
        name: "Blue Mountains Coffee Tour",
        type: "excursion",
        duration: "6–8 hours",
        priceFrom: 110,
        description: "World-famous coffee plantation visit with tasting and mountain scenery.",
      },
      {
        name: "Port Royal Heritage Site",
        type: "activity",
        duration: "3–4 hours",
        priceFrom: 55,
        description: "Historic pirate city ruins and Fort Charles at the mouth of Kingston Harbour.",
      },
    ],
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  keywords: string[];
  sections: { heading?: string; paragraphs: string[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "mbj-airport-transfer-guide",
    title: "MBJ Airport Transfer Guide: Getting to Your Jamaica Resort in 2025",
    excerpt:
      "Everything US travelers need to know about private transfers from Sangster Airport (MBJ) to RIU, Royalton, Sandals, and other all-inclusive resorts.",
    date: "2025-06-15",
    readTime: "6 min read",
    category: "Airport Transfers",
    keywords: ["MBJ airport transfer", "Montego Bay airport taxi", "Jamaica resort shuttle"],
    sections: [
      {
        paragraphs: [
          "Sangster International Airport (MBJ) in Montego Bay is where most American flights arrive in Jamaica. After a long flight, the last thing you want is confusion about how to reach your resort — especially if you booked an all-inclusive at RIU, Royalton, Sandals, or Secrets.",
          "A private airport transfer is the most popular choice for US travelers. Unlike resort-booked shuttles that can cost $150–$250 round trip, a local licensed operator typically charges a flat USD rate per vehicle — not per person — which saves money for families and groups.",
        ],
      },
      {
        heading: "How private MBJ transfers work",
        paragraphs: [
          "You book ahead via WhatsApp or a website quote form. Your driver tracks your flight, meets you in the arrivals area with a name sign, and drives you directly to your resort — no shared bus, no extra stops.",
          "Typical one-way pricing (1–4 passengers): Montego Bay area resorts $40–$55 USD, Falmouth/Royalton Blue Waters $50–$65 USD, Negril $65–$80 USD, Ocho Rios $90–$110 USD. Prices vary by operator and vehicle size.",
        ],
      },
      {
        heading: "Tips for a smooth arrival",
        paragraphs: [
          "Book at least 48 hours before travel. Share your flight number, resort name, and group size. Have WhatsApp ready — most Jamaica operators communicate through it.",
          "Pay in USD on arrival or use Zelle/CashApp if arranged in advance. Keep your operator's phone number saved in case of flight delays.",
        ],
      },
    ],
  },
  {
    slug: "best-day-trips-ocho-rios",
    title: "Best Day Trips from Ocho Rios: Dunn's River, Blue Hole & More",
    excerpt:
      "A local guide to the top Ocho Rios excursions US tourists book most — with timing tips and what to expect at each stop.",
    date: "2025-05-28",
    readTime: "7 min read",
    category: "Ocho Rios Tours",
    keywords: ["Ocho Rios tours", "Dunn's River Falls tour", "Blue Hole Jamaica"],
    sections: [
      {
        paragraphs: [
          "Ocho Rios is Jamaica's adventure capital. If you're staying at Sandals Ochi, Jewel Dunn's River, or arriving on a cruise ship, these are the day trips guests ask for most.",
        ],
      },
      {
        heading: "Dunn's River Falls",
        paragraphs: [
          "The iconic terraced waterfall climb is a bucket-list experience. Go early morning (before 10 AM) to beat cruise ship crowds. A private driver lets you combine the falls with lunch at a jerk spot instead of rushing on a packed tour bus.",
        ],
      },
      {
        heading: "Blue Hole & Secret Falls",
        paragraphs: [
          "Less commercial than Dunn's River, Blue Hole offers swimming, rope swings, and cliff jumping in a rainforest setting. Allow a full 6 hours including travel from Montego Bay or Ocho Rios resorts.",
        ],
      },
      {
        heading: "Combining attractions",
        paragraphs: [
          "Many US families book a Dunn's River + Blue Hole combo in one day. It's a long day but saves a second trip. A private operator can pace the day around your kids and photo stops.",
        ],
      },
    ],
  },
  {
    slug: "negril-airport-transfer-from-mbj",
    title: "How to Get from Montego Bay Airport to Negril (Without Overpaying)",
    excerpt:
      "MBJ to Negril takes about 90 minutes. Here's what a fair private transfer costs and why it's better than a shared shuttle for families.",
    date: "2025-05-10",
    readTime: "5 min read",
    category: "Negril Transfers",
    keywords: ["MBJ to Negril transfer", "Negril airport shuttle", "RIU Negril transfer"],
    sections: [
      {
        paragraphs: [
          "Negril is on Jamaica's far west coast — about 90 minutes from MBJ airport. US travelers heading to RIU Negril, Royalton Negril, Sandals Negril, or Couples Swept Away need reliable transport after landing.",
        ],
      },
      {
        heading: "Private vs shared shuttle",
        paragraphs: [
          "Shared shuttles cost around $25 per person but wait until the bus fills up and make multiple resort stops. A private transfer for 1–4 people runs $65–$80 USD one way — and you leave immediately with just your group.",
          "For families of four, private often costs less than four shuttle seats and is dramatically more comfortable after a long flight.",
        ],
      },
      {
        heading: "What to book from Negril",
        paragraphs: [
          "Once you're in Negril, book Rick's Café sunset trips, Mayfield Falls, and beach days through the same operator. Building a relationship with one driver for your whole trip is how repeat US visitors do Jamaica.",
        ],
      },
    ],
  },
  {
    slug: "riu-royalton-resort-transfers",
    title: "RIU & Royalton Resort Transfers: What US Guests Should Know",
    excerpt:
      "Compare resort-booked transfers vs booking a local Jamaica driver for RIU and Royalton properties — and how much you can save.",
    date: "2025-04-22",
    readTime: "5 min read",
    category: "Resort Transfers",
    keywords: ["RIU Montego Bay transfer", "Royalton Blue Waters shuttle", "all inclusive airport transfer"],
    sections: [
      {
        paragraphs: [
          "RIU and Royalton are two of the most popular all-inclusive chains for American travelers — especially families and groups looking for value. Both offer airport transfers, but they're not always included and they're rarely the cheapest option.",
        ],
      },
      {
        heading: "Royalton Blue Waters & White Sands (Falmouth)",
        paragraphs: [
          "These Trelawny resorts are 30–50 minutes from MBJ. Resort transfers can exceed $200 round trip for a family. Local operators typically charge $50–$70 USD each way for a private van — significant savings over a week-long vacation budget.",
        ],
      },
      {
        heading: "RIU properties across Jamaica",
        paragraphs: [
          "RIU Montego Bay is closest to the airport (20–30 min). RIU Negril and RIU Ocho Rios require longer drives but follow the same logic: book a private transfer, get a flat USD quote, and share the vehicle with your whole group.",
        ],
      },
    ],
  },
  {
    slug: "dunns-river-falls-private-tour-tips",
    title: "Dunn's River Falls Private Tour: Tips from a Local Driver",
    excerpt:
      "When to go, what to wear, how long to allow, and why a private tour beats the cruise ship crowds at Dunn's River Falls.",
    date: "2025-04-08",
    readTime: "6 min read",
    category: "Excursions",
    keywords: ["Dunn's River Falls private tour", "Dunn's River from Montego Bay", "Ocho Rios waterfall tour"],
    sections: [
      {
        paragraphs: [
          "Dunn's River Falls is Jamaica's most visited natural attraction. Every year, thousands of US tourists climb the 600-foot terraced waterfall — and the experience varies hugely depending on when you arrive and how you get there.",
        ],
      },
      {
        heading: "Best time to visit",
        paragraphs: [
          "Arrive before 10 AM or after 3 PM to avoid peak cruise ship hours. Tuesday and Wednesday mornings tend to be quieter than weekends.",
        ],
      },
      {
        heading: "What to bring",
        paragraphs: [
          "Water shoes are essential (available for rent on site). Bring a towel, sunscreen, and cash for lockers and tips. Wear a swimsuit under your clothes — you'll be in the water within minutes of starting the climb.",
        ],
      },
      {
        heading: "Why go private",
        paragraphs: [
          "A private driver from Montego Bay or Ocho Rios lets you control departure time, add a jerk chicken lunch stop, and skip the gift-shop pressure of large tour groups. For families with kids or elderly parents, pacing the day matters.",
        ],
      },
    ],
  },
  {
    slug: "jamaica-group-transport-church-family",
    title: "Jamaica Group Transport: Tips for Church Groups, Reunions & Big Families",
    excerpt:
      "How to move 10–30 people around Jamaica with a Hiace van or Coaster bus — and what it costs in USD.",
    date: "2025-03-18",
    readTime: "5 min read",
    category: "Group Travel",
    keywords: ["Jamaica group transportation", "Hiace bus Jamaica", "church group Jamaica tour"],
    sections: [
      {
        paragraphs: [
          "Jamaica is a top destination for family reunions, church retreats, and friend-group vacations. Moving 10–30 people requires more than sedans — and that's where Hiace vans and Coaster buses come in.",
        ],
      },
      {
        heading: "Vehicle options",
        paragraphs: [
          "Toyota Hiace: up to 12 passengers with luggage. Ideal for extended families. Toyota Coaster: up to 30 passengers for church groups and wedding parties. Split the vehicle cost across your group and per-person pricing drops fast.",
        ],
      },
      {
        heading: "Booking tips",
        paragraphs: [
          "Book airport pickup at least one week ahead for large groups. Share a passenger manifest, resort name, and flight stagger times if people arrive on different flights. WhatsApp group chats with your operator keep everyone aligned during the trip.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
