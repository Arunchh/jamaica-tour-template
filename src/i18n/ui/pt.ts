import type { UiMessages } from "../types";

export const uiPt: UiMessages = {
  common: {
    getQuote: "Solicitar Orçamento",
    call: "Ligar",
    whatsapp: "WhatsApp",
    quote: "Orçamento",
    fromPriceUsd: "A partir de {price} USD",
    fromPriceUsdPerPerson: "A partir de {price} USD / pessoa",
    readMore: "Ler mais →",
    backToHome: "Voltar ao Início",
    allGuides: "Todos os Guias",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    usTravelers: "viajantes dos EUA",
    whatsappUs: "Fale Conosco no WhatsApp",
    language: "Idioma",
    jtbLicense: "Licença JTB:",
    allRightsReserved: "Todos os direitos reservados.",
    followUs: "Siga-nos",
    quickLinks: "Links Rápidos",
    contact: "Contato",
    facebook: "Facebook",
    instagram: "Instagram",
    fanFavorite: "Favorito",
    bookThisTour: "Reservar Este Passeio",
    bookCityTour: "Reservar Passeio em {city}",
    popularResorts: "Resorts populares que atendemos",
    cityToursImageAlt: "Passeios em {city}, Jamaica",
    needTransferCtaTitle: "Precisa de transfer ou passeio?",
    needTransferCtaDescription:
      "Receba um orçamento gratuito em USD da {business} — resposta no WhatsApp em até 2 horas.",
    needTransferCtaButton: "Orçamento Grátis",
    countryName: "Jamaica",
  },
  sections: {
    services: {
      eyebrow: "O Que Fazemos",
      title: "Transporte e Passeios para Viajantes dos EUA",
      description:
        "Transfers do aeroporto, shuttles para resorts e excursões pela ilha — preços em USD, ideais para famílias e grupos.",
    },
    cityTours: {
      eyebrow: "Passeios por Cidade",
      title: "Todas as Principais Áreas Turísticas",
      description:
        "Toque em uma cidade para ver transfers, excursões e atividades disponíveis na região.",
    },
    excursions: {
      eyebrow: "Excursões pela Ilha",
      title: "Passeios de Um Dia a Partir do Seu Resort",
      description:
        "As experiências que viajantes dos EUA mais reservam — motorista privado incluído, no seu ritmo.",
    },
    fleet: {
      eyebrow: "Nossa Frota",
      title: "Vans e Ônibus para Qualquer Tamanho de Grupo",
      description:
        "De um casal indo para o RIU a uma reunião familiar de 30 pessoas — temos o veículo certo.",
    },
    howItWorks: {
      eyebrow: "Reserva Fácil",
      title: "3 Passos — Pronto",
      description:
        "Sem apps complicados. Mande WhatsApp, receba o preço em USD e encontre seu motorista no aeroporto.",
    },
    testimonials: {
      eyebrow: "Avaliações Reais",
      title: "O Que Dizem os Viajantes dos EUA",
      description:
        "Famílias, casais e grupos que reservaram transfers do aeroporto e passeios conosco.",
    },
    faq: {
      eyebrow: "Perguntas Frequentes",
      title: "Perguntas que Viajantes dos EUA Nos Fazem",
      description:
        "Transfers para resorts, preços, pagamento e viagens em grupo — respostas diretas.",
    },
    contact: {
      eyebrow: "Reserve Seu Transfer",
      title: "Orçamento Grátis em USD",
      description:
        "Informe seu resort e dados do voo. Respondemos no WhatsApp em até 2 horas — sem compromisso.",
    },
    resortsCta: {
      title: "Seu resort não está na lista? Sem problema — vamos a toda a ilha.",
      description:
        "Diga onde você reservou no formulário e enviamos uma tarifa fixa em USD.",
      button: "Orçamento de Transfer para Resort",
    },
  },
  tourTypes: {
    transfer: "Transfer",
    excursion: "Excursão",
    activity: "Atividade",
    combo: "Passeio Combinado",
  },
  contact: {
    whatsappQuote: "Olá {business}, preciso de um orçamento para transfer ao resort.",
    whatsappResort: "Olá {business}, preciso de um orçamento para transfer do aeroporto ao meu resort.",
    callDirect: "Ligar Direto",
    whatsappFastest: "WhatsApp (Mais Rápido)",
    messageUsNow: "Mande mensagem agora",
    emailLabel: "E-mail",
    form: {
      fullName: "Nome Completo *",
      email: "E-mail *",
      phone: "Telefone / WhatsApp",
      resort: "Seu Resort *",
      service: "Serviço Necessário *",
      travelDate: "Data da Viagem",
      guests: "Número de Hóspedes",
      details: "Voo e Outros Detalhes",
      submit: "Solicitar Orçamento Grátis em USD",
      submitting: "Enviando...",
      disclaimer: "Respondemos em até 2 horas. Sem spam, sem compromisso.",
      placeholders: {
        name: "Seu nome",
        email: "voce@email.com",
        phone: "+1 (555) 123-4567",
        guests: "4",
        details: "Número do voo, horário de chegada, pedidos especiais...",
        selectResort: "Selecione seu resort",
        selectService: "Selecione um serviço",
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
        "Outro Resort / Vila",
      ],
      serviceOptions: [
        { value: "MBJ Airport to Resort", label: "Aeroporto MBJ → Resort" },
        { value: "Resort to MBJ Airport", label: "Resort → Aeroporto MBJ" },
        { value: "Round Trip Airport", label: "Transfer Ida e Volta ao Aeroporto" },
        { value: "Dunn's River Falls", label: "Passeio Dunn's River Falls" },
        { value: "Blue Hole", label: "Blue Hole e Cachoeiras Secretas" },
        { value: "Rick's Cafe", label: "Pôr do Sol no Rick's Café" },
        { value: "Luminous Lagoon", label: "Passeio Noturno Lagoa Luminosa" },
        { value: "Group Transport", label: "Transporte em Grupo / Família" },
        { value: "Other", label: "Outro" },
      ],
    },
  },
  blog: {
    indexTitle: "Guias de Viagem à Jamaica",
    indexSubtitle:
      "Dicas para viajantes dos EUA — transfers do aeroporto, pickups em resorts e passeios pela ilha.",
    metadataTitle: "Blog de Viagem à Jamaica — Transfers, Passeios e Dicas",
    metadataDescription:
      "Guias para viajantes dos EUA na Jamaica — transfers do aeroporto MBJ, shuttles para resorts RIU e Royalton, passeios em Ocho Rios e dicas para grupos.",
    indexDescription:
      "Guias para viajantes dos EUA na Jamaica — transfers do aeroporto MBJ, shuttles para resorts RIU e Royalton, passeios em Ocho Rios e dicas para grupos.",
  },
  form: {
    success: "Obrigado! Responderemos no WhatsApp ou e-mail em até 2 horas.",
    error: "Algo deu errado. Por favor mande WhatsApp ou ligue diretamente.",
    mailtoSuccess:
      "Seu app de e-mail deve abrir — envie a mensagem para concluir sua solicitação.",
  },
};
