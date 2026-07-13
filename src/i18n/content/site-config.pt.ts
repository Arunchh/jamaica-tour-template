import type { SiteConfig } from "@/i18n/types";

export const siteConfigPt: SiteConfig = {
  business: {
    name: "Irie Island Transport",
    tagline: "Aeroporto ao Resort — Tours Privados em Toda a Jamaica",
    description:
      "Transporte licenciado na Jamaica para viajantes dos EUA — transfers privados do aeroporto para RIU, Royalton, Sandals e resorts all-inclusive em Montego Bay, Negril, Ocho Rios e Falmouth. Tarifas fixas em USD, vans familiares e ônibus Hiace.",
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
      "transfer aeroporto Jamaica MBJ",
      "transfer aeroporto RIU Montego Bay",
      "transfer Royalton Blue Waters",
      "shuttle resort all-inclusive Jamaica",
      "motorista privado Jamaica",
      "transfer aeroporto Negril saindo de MBJ",
      "tour Dunn's River Falls a partir do resort",
      "transporte em grupo Jamaica Hiace",
    ],
  },

  hero: {
    headline: "Desembarque na Jamaica. Nós Levamos Você ao Resort.",
    subheadline:
      "Transfers privados do aeroporto MBJ direto para seu all-inclusive — RIU, Royalton, Sandals e mais. Preços fixos em USD para famílias e grupos. Sem margem do resort, sem ônibus compartilhados.",
    primaryCta: "Solicite Seu Orçamento Grátis",
    secondaryCta: "Ver Transfers para Resorts",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1920&q=80",
    imageAlt: "Linda costa jamaicana com águas turquesa do Caribe",
    badges: [
      "Tarifas Fixas em USD",
      "Ideal para Famílias e Grupos",
      "Licenciado JTB",
    ],
  },

  trustPoints: [
    { label: "Licenciado e Segurado JTB", icon: "shield" },
    { label: "Pagamento em Dólares Americanos", icon: "dollar" },
    { label: "4,9★ de Viajantes dos EUA", icon: "star" },
    { label: "Recepção 24/7 no Aeroporto MBJ", icon: "clock" },
  ],

  valueProps: [
    {
      title: "Mais Barato que Transfers do Resort",
      description:
        "Resorts all-inclusive costumam cobrar US$ 150–250 ida e volta. Nós orçamos por veículo em USD — geralmente menos, com seu próprio motorista privado.",
    },
    {
      title: "Conhecemos Seu Resort",
      description:
        "Buscamos diariamente em RIU, Royalton, Sandals, Secrets, Excellence e Grand Palladium. Diga onde você está hospedado — já fomos lá centenas de vezes.",
    },
    {
      title: "Feito para Famílias e Grupos",
      description:
        "Viajando com primos, grupo da igreja ou amigos? Nossas vans Hiace e ônibus Coaster comportam 7–30 pessoas com bagagem. Um preço, todo o grupo.",
    },
  ],

  resorts: {
    eyebrow: "Resorts All-Inclusive que Atendemos",
    title: "Buscamos e Deixamos Você no Seu Resort",
    description:
      "Reservou RIU, Royalton ou Sandals? Cuidamos dos transfers do aeroporto e passeios de um dia a partir de todos os principais all-inclusive da ilha.",
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
        name: "Mais Favoritos",
        resorts: ["Secrets St. James", "Excellence Oyster Bay", "Grand Palladium", "Bahia Principe"],
      },
    ],
  },

  services: [
    {
      title: "Transfers do Aeroporto MBJ",
      description:
        "Desembarcou no Aeroporto Sangster (MBJ)? Seu motorista espera com placa de identificação, acompanha seu voo e leva você direto ao resort — Red Stripe gelada ou água incluída.",
      icon: "plane",
      priceFrom: 55,
    },
    {
      title: "Shuttles para Resorts All-Inclusive",
      description:
        "Porta a porta entre resorts em Montego Bay, Negril, Ocho Rios e Falmouth. Sem esperar ônibus compartilhados do hotel. Seu horário, seu transporte.",
      icon: "hotel",
      priceFrom: 40,
    },
    {
      title: "Passeios de Um Dia pela Ilha",
      description:
        "Dunn's River Falls, Blue Hole, Rick's Café, Luminous Lagoon — seu motorista-guia cuida do transporte, espera por você e conhece os melhores lugares para comer.",
      icon: "map",
      priceFrom: 95,
    },
    {
      title: "Transporte para Famílias e Grupos",
      description:
        "Reuniões, casamentos, viagens da igreja e grupos de amigos. Toyota Hiace (até 12) e ônibus Coaster (até 30). Divida o custo — muito mais barato por pessoa.",
      icon: "users",
      priceFrom: 150,
    },
  ],

  fleet: [
    {
      name: "Toyota Hiace",
      capacity: "Até 12 passageiros",
      description:
        "Perfeita para famílias e grupos de amigos indo para Negril ou Ocho Rios. Ar-condicionado, bagageiro e assentos confortáveis.",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Toyota Coaster",
      capacity: "Até 30 passageiros",
      description:
        "Ideal para grupos grandes, festas de casamento e excursões da igreja. Todo o grupo viaja junto.",
      image:
        "https://images.unsplash.com/photo-1570125909232-eabf3c8e4f3e?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Private Van / SUV",
      capacity: "1–5 passageiros",
      description:
        "Casais e famílias pequenas. Limpa, com ar-condicionado e privativa — só você e sua turma.",
      image:
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80",
    },
  ],

  destinations: [
    {
      name: "Montego Bay",
      description:
        "RIU, Royalton, Secrets e Hip Strip. Sede do Aeroporto Sangster (MBJ) — onde a maioria dos voos dos EUA pousa.",
      image:
        "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Negril",
      description:
        "Seven Mile Beach, penhascos do Rick's Café. Transfers diários para RIU Negril, Royalton Negril e Sandals Negril.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Ocho Rios",
      description:
        "Dunn's River Falls, Blue Hole, Mystic Mountain. Sandals Ochi e excursões do porto de cruzeiros.",
      image:
        "https://images.unsplash.com/photo-1559120680-6a0f4941f1a4?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Falmouth",
      description:
        "Royalton Blue Waters, passeios noturnos na Luminous Lagoon e rafting no rio Martha Brae.",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    },
  ],

  excursions: [
    {
      name: "Dunn's River Falls",
      duration: "5–6 horas",
      priceFrom: 75,
      highlights: ["Subida guiada", "Paradas para fotos", "Almoço de jerk chicken"],
      image:
        "https://images.unsplash.com/photo-1544551763-77ef2d0cfcb0?auto=format&fit=crop&w=800&q=80",
      popular: true,
    },
    {
      name: "Blue Hole & Secret Falls",
      duration: "6 horas",
      priceFrom: 85,
      highlights: ["Natação", "Salto de penhasco", "Clima de floresta tropical"],
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb6668c21a?auto=format&fit=crop&w=800&q=80",
      popular: true,
    },
    {
      name: "Rick's Café Sunset",
      duration: "4 horas",
      priceFrom: 65,
      highlights: ["Saltadores de penhasco", "Vistas do pôr do sol", "West End de Negril"],
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
      popular: false,
    },
    {
      name: "Luminous Lagoon Night Tour",
      duration: "3 horas",
      priceFrom: 60,
      highlights: ["Água bioluminescente", "Passeio de barco", "Busca em Falmouth"],
      image:
        "https://images.unsplash.com/photo-1519046904212-407b7196a9d8?auto=format&fit=crop&w=800&q=80",
      popular: false,
    },
  ],

  howItWorks: [
    {
      step: 1,
      title: "Diga Onde Você Vai Ficar",
      description:
        "Nome do resort, informações do voo e quantas pessoas no grupo. Mande WhatsApp — respondemos rápido.",
    },
    {
      step: 2,
      title: "Receba um Orçamento Fixo em USD",
      description:
        "Um preço claro por veículo. Sem taxas ocultas, sem surpresas por pessoa. Pague na chegada, via Zelle ou em dinheiro.",
    },
    {
      step: 3,
      title: "Encontre Seu Motorista no MBJ",
      description:
        "Placa com seu nome no aeroporto. Bebida gelada esperando. Direto ao resort — irie desde o primeiro minuto.",
    },
  ],

  testimonials: [
    {
      name: "Keisha W.",
      location: "Atlanta, GA",
      text: "Reservamos para nossa família de 8 do MBJ ao Royalton Blue Waters. O motorista chegou no horário, a van estava limpa e o preço foi bem menor que o orçamento do resort. Já reservamos de novo para o ano que vem!",
      rating: 5,
    },
    {
      name: "Marcus & Denise J.",
      location: "Brooklyn, NY",
      text: "Primeira vez na Jamaica e estávamos nervosos com o trajeto do aeroporto ao RIU Negril. Eles facilitaram tudo — comunicação pelo WhatsApp, tarifa fixa em dólares e nosso motorista foi como da família.",
      rating: 5,
    },
    {
      name: "Pastor Andre T.",
      location: "Charlotte, NC",
      text: "Nosso grupo da igreja de 22 pessoas usou o ônibus Coaster para busca no aeroporto e um passeio de um dia em Dunn's River. Profissionais, pontuais e preço justo para todo o grupo. Recomendo muito.",
      rating: 5,
    },
  ],

  faqs: [
    {
      question:
        "Vocês buscam no Aeroporto Sangster (MBJ) para resorts RIU e Royalton?",
      answer:
        "Sim — diariamente. Oferecemos transfers privados do aeroporto MBJ para RIU Montego Bay, RIU Negril, Royalton Blue Waters, Royalton White Sands e todos os principais resorts all-inclusive da Jamaica.",
    },
    {
      question: "Quanto custa um transfer do aeroporto em dólares americanos?",
      answer:
        "Orçamos por veículo, não por pessoa. Uma van privada para 1–4 pessoas do MBJ para resorts próximos em Montego Bay começa em torno de US$ 40–55. MBJ para Negril costuma ser US$ 65–80 só ida. Sempre informamos o preço total antes da reserva.",
    },
    {
      question: "É mais barato do que reservar pelo meu resort?",
      answer:
        "Geralmente sim. Resorts costumam cobrar US$ 150–250+ ida e volta pelos transfers. Reservar direto com um operador local como nós costuma economizar — e você tem um veículo privado só para seu grupo.",
    },
    {
      question: "Posso pagar em dólares americanos, Zelle ou CashApp?",
      answer:
        "Sim. Aceitamos dinheiro em USD, Zelle, CashApp, PayPal e os principais cartões de crédito. Muitos hóspedes dos EUA pagam em dólares — o que for mais fácil para você.",
    },
    {
      question: "Somos uma família/grupo grande — vocês têm veículos maiores?",
      answer:
        "Com certeza. Nosso Toyota Hiace comporta até 12 pessoas e nosso ônibus Coaster até 30 passageiros. Perfeito para reuniões de família, viagens com amigos e grupos da igreja visitando a Jamaica.",
    },
    {
      question: "Seus motoristas são licenciados e seguros?",
      answer:
        "Todo motorista é certificado pela Jamaica Tourist Board, totalmente segurado e experiente nas estradas jamaicanas. Sua segurança é nossa prioridade — queremos que você volte todo ano.",
    },
  ],

  paymentMethods: [
    "Dinheiro em USD",
    "Zelle",
    "CashApp",
    "PayPal",
    "Cartão de Crédito",
  ],

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
    { label: "Serviços", href: "/#services" },
    { label: "Passeios", href: "/#destinations" },
    { label: "Resorts", href: "/#resorts" },
    { label: "Blog", href: "/blog" },
    { label: "Avaliações", href: "/#reviews" },
    { label: "Contato", href: "/#contact" },
  ],
};
