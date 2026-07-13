import type { SiteConfig } from "@/i18n/types";

export const siteConfigEs: SiteConfig = {
  business: {
    name: "Irie Island Transport",
    tagline: "Del aeropuerto al resort — Tours privados por Jamaica",
    description:
      "Transporte con licencia en Jamaica para viajeros de EE. UU. — traslados privados desde el aeropuerto a RIU, Royalton, Sandals y resorts todo incluido en Montego Bay, Negril, Ocho Rios y Falmouth. Tarifas fijas en USD, vans familiares y autobuses Hiace.",
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
      "traslado aeropuerto Jamaica MBJ",
      "traslado aeropuerto RIU Montego Bay",
      "traslado Royalton Blue Waters",
      "shuttle resort todo incluido Jamaica",
      "conductor privado Jamaica",
      "traslado aeropuerto Negril desde MBJ",
      "tour Dunn's River Falls desde resort",
      "transporte grupal Jamaica Hiace",
    ],
  },

  hero: {
    headline: "Aterriza en Jamaica. Nosotros te llevamos al resort.",
    subheadline:
      "Recogidas privadas en el aeropuerto MBJ directo a tu todo incluido — RIU, Royalton, Sandals y más. Precios fijos en USD para familias y grupos. Sin recargos del resort ni autobuses compartidos.",
    primaryCta: "Obtén tu cotización gratis",
    secondaryCta: "Ver traslados a resorts",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1920&q=80",
    imageAlt: "Hermosa costa jamaicana con agua turquesa del Caribe",
    badges: [
      "Tarifas fijas en USD",
      "Ideal para familias y grupos",
      "Licencia JTB",
    ],
  },

  trustPoints: [
    { label: "Licenciado y asegurado JTB", icon: "shield" },
    { label: "Paga en dólares estadounidenses", icon: "dollar" },
    { label: "4.9★ de viajeros de EE. UU.", icon: "star" },
    { label: "Recogida 24/7 en aeropuerto MBJ", icon: "clock" },
  ],

  valueProps: [
    {
      title: "Más económico que los traslados del resort",
      description:
        "Los resorts todo incluido suelen cobrar $150–$250 ida y vuelta. Nosotros cotizamos por vehículo en USD — generalmente menos, con tu propio conductor privado.",
    },
    {
      title: "Conocemos tu resort",
      description:
        "Recogidas diarias en RIU, Royalton, Sandals, Secrets, Excellence y Grand Palladium. Dinos dónde te hospedas — hemos estado allí cientos de veces.",
    },
    {
      title: "Diseñado para familias y grupos",
      description:
        "¿Viajas con primos, grupo de iglesia o amigos? Nuestras vans Hiace y autobuses Coaster caben de 7 a 30 personas con equipaje. Un solo precio para todo tu grupo.",
    },
  ],

  resorts: {
    eyebrow: "Resorts todo incluido que atendemos",
    title: "Te recogemos y dejamos en tu resort",
    description:
      "¿Reservaste RIU, Royalton o Sandals? Nos encargamos de los traslados desde el aeropuerto y los tours de un día desde los principales todo incluido de la isla.",
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
        name: "Sandals y Beaches",
        resorts: ["Sandals Montego Bay", "Sandals Negril", "Sandals Ochi", "Beaches Negril"],
      },
      {
        name: "Más favoritos",
        resorts: ["Secrets St. James", "Excellence Oyster Bay", "Grand Palladium", "Bahia Principe"],
      },
    ],
  },

  services: [
    {
      title: "Traslados desde aeropuerto MBJ",
      description:
        "¿Aterrizas en el aeropuerto Sangster (MBJ)? Tu conductor te espera con un letrero con tu nombre, rastrea tu vuelo y te lleva directo al resort — Red Stripe fría o agua incluida.",
      icon: "plane",
      priceFrom: 55,
    },
    {
      title: "Shuttles a resorts todo incluido",
      description:
        "Puerta a puerta privado entre resorts de Montego Bay, Negril, Ocho Rios y Falmouth. Sin esperar autobuses compartidos del hotel. Tu horario, tu traslado.",
      icon: "hotel",
      priceFrom: 40,
    },
    {
      title: "Tours de un día por la isla",
      description:
        "Dunn's River Falls, Blue Hole, Rick's Café, Luminous Lagoon — tu conductor-guía se encarga del transporte, te espera y conoce los mejores lugares para comer local.",
      icon: "map",
      priceFrom: 95,
    },
    {
      title: "Transporte para familias y grupos",
      description:
        "Reuniones, bodas, viajes de iglesia y grupos de amigos. Toyota Hiace (hasta 12) y autobuses Coaster (hasta 30). Dividan el costo — mucho más barato por persona.",
      icon: "users",
      priceFrom: 150,
    },
  ],

  fleet: [
    {
      name: "Toyota Hiace",
      capacity: "Hasta 12 pasajeros",
      description:
        "Perfecta para familias y grupos de amigos rumbo a Negril u Ocho Rios. Aire acondicionado, portaequipaje y asientos cómodos.",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Toyota Coaster",
      capacity: "Hasta 30 pasajeros",
      description:
        "Ideal para grupos grandes, bodas y salidas de iglesia. Todo tu grupo viaja junto.",
      image:
        "https://images.unsplash.com/photo-1570125909232-eabf3c8e4f3e?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Van privada / SUV",
      capacity: "1–5 pasajeros",
      description:
        "Parejas y familias pequeñas. Limpia, con aire acondicionado y privada — solo ustedes.",
      image:
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80",
    },
  ],

  destinations: [
    {
      name: "Montego Bay",
      description:
        "RIU, Royalton, Secrets y el Hip Strip. Hogar del aeropuerto Sangster (MBJ) — donde aterrizan la mayoría de los vuelos desde EE. UU.",
      image:
        "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Negril",
      description:
        "Seven Mile Beach, acantilados de Rick's Café. Traslados diarios a RIU Negril, Royalton Negril y Sandals Negril.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Ocho Rios",
      description:
        "Dunn's River Falls, Blue Hole, Mystic Mountain. Sandals Ochi y excursiones desde el puerto de cruceros.",
      image:
        "https://images.unsplash.com/photo-1559120680-6a0f4941f1a4?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Falmouth",
      description:
        "Royalton Blue Waters, tours nocturnos a Luminous Lagoon y paseos en balsa por el río Martha Brae.",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    },
  ],

  excursions: [
    {
      name: "Dunn's River Falls",
      duration: "5–6 horas",
      priceFrom: 75,
      highlights: ["Subida guiada", "Paradas para fotos", "Almuerzo de jerk chicken"],
      image:
        "https://images.unsplash.com/photo-1544551763-77ef2d0cfcb0?auto=format&fit=crop&w=800&q=80",
      popular: true,
    },
    {
      name: "Blue Hole & Secret Falls",
      duration: "6 horas",
      priceFrom: 85,
      highlights: ["Natación", "Salto desde acantilados", "Ambiente de selva tropical"],
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb6668c21a?auto=format&fit=crop&w=800&q=80",
      popular: true,
    },
    {
      name: "Rick's Café Sunset",
      duration: "4 horas",
      priceFrom: 65,
      highlights: ["Clavadistas", "Vistas al atardecer", "West End de Negril"],
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
      popular: false,
    },
    {
      name: "Luminous Lagoon Night Tour",
      duration: "3 horas",
      priceFrom: 60,
      highlights: ["Agua bioluminiscente", "Paseo en bote", "Recogida en Falmouth"],
      image:
        "https://images.unsplash.com/photo-1519046904212-407b7196a9d8?auto=format&fit=crop&w=800&q=80",
      popular: false,
    },
  ],

  howItWorks: [
    {
      step: 1,
      title: "Cuéntanos dónde te hospedas",
      description:
        "Nombre de tu resort, datos del vuelo y cuántas personas van. Escríbenos por WhatsApp — respondemos rápido.",
    },
    {
      step: 2,
      title: "Recibe una cotización fija en USD",
      description:
        "Un precio claro por vehículo. Sin cargos ocultos ni sorpresas por persona. Paga al llegar, con Zelle o en efectivo.",
    },
    {
      step: 3,
      title: "Conoce a tu conductor en MBJ",
      description:
        "Letrero con tu nombre en el aeropuerto. Bebida fría de bienvenida. Directo a tu resort — irie desde el primer minuto.",
    },
  ],

  testimonials: [
    {
      name: "Keisha W.",
      location: "Atlanta, Georgia",
      text: "Reservamos para nuestra familia de 8 desde MBJ hasta Royalton Blue Waters. El conductor llegó a tiempo, la van estaba limpia y el precio fue mucho menor que lo que cotizó el resort. ¡Ya reservamos para el próximo año!",
      rating: 5,
    },
    {
      name: "Marcus & Denise J.",
      location: "Brooklyn, Nueva York",
      text: "Era nuestra primera vez en Jamaica y estábamos nerviosos por llegar del aeropuerto a RIU Negril. Estos chicos lo hicieron fácil — comunicación por WhatsApp, tarifa fija en dólares y nuestro conductor fue como de la familia.",
      rating: 5,
    },
    {
      name: "Pastor Andre T.",
      location: "Charlotte, Carolina del Norte",
      text: "Nuestro grupo de iglesia de 22 personas usó su autobús Coaster para la recogida en el aeropuerto y un día en Dunn's River. Profesionales, puntuales y con precios justos para todo el grupo. Muy recomendados.",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "¿Hacen recogidas desde el aeropuerto Sangster (MBJ) a resorts RIU y Royalton?",
      answer:
        "Sí — todos los días. Ofrecemos traslados privados desde MBJ a RIU Montego Bay, RIU Negril, Royalton Blue Waters, Royalton White Sands y todos los principales resorts todo incluido de Jamaica.",
    },
    {
      question: "¿Cuánto cuesta un traslado desde el aeropuerto en dólares estadounidenses?",
      answer:
        "Cotizamos por vehículo, no por persona. Una van privada para 1–4 personas desde MBJ a resorts cercanos de Montego Bay comienza alrededor de $40–$55 USD. MBJ a Negril suele ser $65–$80 USD solo ida. Siempre te damos el precio completo antes de reservar.",
    },
    {
      question: "¿Es más barato que reservar a través de mi resort?",
      answer:
        "Generalmente sí. Los resorts suelen cobrar $150–$250+ ida y vuelta por traslados. Reservar directo con un operador local como nosotros normalmente ahorra dinero — y obtienes un vehículo privado solo para tu grupo.",
    },
    {
      question: "¿Puedo pagar en dólares estadounidenses, Zelle o CashApp?",
      answer:
        "Sí. Aceptamos efectivo en USD, Zelle, CashApp, PayPal y las principales tarjetas de crédito. Muchos de nuestros huéspedes de EE. UU. pagan en dólares — lo que sea más fácil para ti.",
    },
    {
      question: "Somos una familia o grupo grande — ¿tienen vehículos de mayor capacidad?",
      answer:
        "Por supuesto. Nuestro Toyota Hiace cabe hasta 12 personas y nuestro autobús Coaster hasta 30 pasajeros. Perfecto para reuniones familiares, viajes con amigos y grupos de iglesia que visitan Jamaica.",
    },
    {
      question: "¿Sus conductores tienen licencia y son seguros?",
      answer:
        "Cada conductor está certificado por la Jamaica Tourist Board, totalmente asegurado y con experiencia en las carreteras jamaicanas. Tu seguridad es nuestra prioridad — queremos que regreses cada año.",
    },
  ],

  paymentMethods: ["Efectivo en USD", "Zelle", "CashApp", "PayPal", "Tarjeta de crédito"],

  communications: {
    formProvider: "web3forms",
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
    { label: "Servicios", href: "/#services" },
    { label: "Tours", href: "/#destinations" },
    { label: "Resorts", href: "/#resorts" },
    { label: "Blog", href: "/blog" },
    { label: "Reseñas", href: "/#reviews" },
    { label: "Contacto", href: "/#contact" },
  ],
};
