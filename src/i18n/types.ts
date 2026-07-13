export type NavItem = {
  label: string;
  href: string;
};

export type TrustPoint = {
  label: string;
  icon: "shield" | "dollar" | "star" | "clock";
};

export type ValueProp = {
  title: string;
  description: string;
};

export type ResortChain = {
  name: string;
  resorts: string[];
};

export type Service = {
  title: string;
  description: string;
  icon: "plane" | "hotel" | "map" | "users";
  priceFrom: number;
};

export type FleetVehicle = {
  name: string;
  capacity: string;
  description: string;
  image: string;
};

export type Destination = {
  name: string;
  description: string;
  image: string;
};

export type Excursion = {
  name: string;
  duration: string;
  priceFrom: number;
  highlights: string[];
  image: string;
  popular: boolean;
};

export type HowItWorksStep = {
  step: number;
  title: string;
  description: string;
};

export type Testimonial = {
  name: string;
  location: string;
  text: string;
  rating: number;
};

export type Faq = {
  question: string;
  answer: string;
};

export type FormProvider = "web3forms" | "formspree" | "mailto";

export type SiteConfig = {
  business: {
    name: string;
    tagline: string;
    description: string;
    phone: string;
    phoneDisplay: string;
    whatsapp: string;
    email: string;
    address: string;
    licenseNumber: string;
    yearsInBusiness: number;
    googleRating: number;
    reviewCount: number;
    logoText: string;
    logoAccent: string;
  };
  seo: {
    siteUrl: string;
    keywords: string[];
  };
  hero: {
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    image: string;
    imageAlt: string;
    badges: string[];
  };
  trustPoints: TrustPoint[];
  valueProps: ValueProp[];
  resorts: {
    eyebrow: string;
    title: string;
    description: string;
    chains: ResortChain[];
  };
  services: Service[];
  fleet: FleetVehicle[];
  destinations: Destination[];
  excursions: Excursion[];
  howItWorks: HowItWorksStep[];
  testimonials: Testimonial[];
  faqs: Faq[];
  paymentMethods: string[];
  communications: {
    formProvider: FormProvider;
    web3formsAccessKey: string;
    formspreeFormId: string;
    leadNotificationEmail: string;
    tawkPropertyId: string;
    tawkWidgetId: string;
  };
  social: {
    facebook: string;
    instagram: string;
    tripadvisor: string;
  };
  nav: NavItem[];
};

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

export type UiMessages = {
  common: {
    getQuote: string;
    call: string;
    whatsapp: string;
    quote: string;
    fromPriceUsd: string;
    fromPriceUsdPerPerson: string;
    readMore: string;
    backToHome: string;
    allGuides: string;
    openMenu: string;
    closeMenu: string;
    usTravelers: string;
    whatsappUs: string;
    language: string;
    jtbLicense: string;
    allRightsReserved: string;
    followUs: string;
    quickLinks: string;
    contact: string;
    facebook: string;
    instagram: string;
    fanFavorite: string;
    bookThisTour: string;
    bookCityTour: string;
    popularResorts: string;
    cityToursImageAlt: string;
    needTransferCtaTitle: string;
    needTransferCtaDescription: string;
    needTransferCtaButton: string;
    countryName: string;
  };
  sections: {
    services: { eyebrow: string; title: string; description: string };
    cityTours: { eyebrow: string; title: string; description: string };
    excursions: { eyebrow: string; title: string; description: string };
    fleet: { eyebrow: string; title: string; description: string };
    howItWorks: { eyebrow: string; title: string; description: string };
    testimonials: { eyebrow: string; title: string; description: string };
    faq: { eyebrow: string; title: string; description: string };
    contact: { eyebrow: string; title: string; description: string };
    resortsCta: { title: string; description: string; button: string };
  };
  tourTypes: Record<CityTour["type"], string>;
  contact: {
    whatsappQuote: string;
    whatsappResort: string;
    callDirect: string;
    whatsappFastest: string;
    messageUsNow: string;
    emailLabel: string;
    form: {
      fullName: string;
      email: string;
      phone: string;
      resort: string;
      service: string;
      travelDate: string;
      guests: string;
      details: string;
      submit: string;
      submitting: string;
      disclaimer: string;
      placeholders: {
        name: string;
        email: string;
        phone: string;
        guests: string;
        details: string;
        selectResort: string;
        selectService: string;
      };
      resortOptions: string[];
      serviceOptions: { value: string; label: string }[];
    };
  };
  blog: {
    indexTitle: string;
    indexDescription: string;
    indexSubtitle: string;
    metadataTitle: string;
    metadataDescription: string;
  };
  form: {
    success: string;
    error: string;
    mailtoSuccess: string;
  };
};

export type LocaleContent = {
  siteConfig: SiteConfig;
  cityTourGuides: CityTourGuide[];
  blogPosts: BlogPost[];
};
