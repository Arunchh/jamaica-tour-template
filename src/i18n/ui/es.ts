import type { UiMessages } from "../types";

export const uiEs: UiMessages = {
  common: {
    getQuote: "Solicitar Cotización",
    call: "Llamar",
    whatsapp: "WhatsApp",
    quote: "Cotizar",
    fromPriceUsd: "Desde {price} USD",
    fromPriceUsdPerPerson: "Desde {price} USD / persona",
    readMore: "Leer más →",
    backToHome: "Volver al Inicio",
    allGuides: "Todas las Guías",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    usTravelers: "viajeros de EE. UU.",
    whatsappUs: "Escríbenos por WhatsApp",
    language: "Idioma",
    jtbLicense: "Licencia JTB:",
    allRightsReserved: "Todos los derechos reservados.",
    followUs: "Síguenos",
    quickLinks: "Enlaces Rápidos",
    contact: "Contacto",
    facebook: "Facebook",
    instagram: "Instagram",
    fanFavorite: "Favorito",
    bookThisTour: "Reservar Este Tour",
    bookCityTour: "Reservar Tour en {city}",
    popularResorts: "Resorts populares que atendemos",
    cityToursImageAlt: "Tours en {city}, Jamaica",
    needTransferCtaTitle: "¿Necesitas traslado o tour?",
    needTransferCtaDescription:
      "Obtén una cotización gratuita en USD de {business} — respuesta por WhatsApp en 2 horas.",
    needTransferCtaButton: "Cotización Gratis",
    countryName: "Jamaica",
  },
  sections: {
    services: {
      eyebrow: "Lo Que Ofrecemos",
      title: "Transporte y Tours para Viajeros de EE. UU.",
      description:
        "Traslados del aeropuerto, shuttles a resorts y excursiones por la isla — precios en USD, ideales para familias y grupos.",
    },
    cityTours: {
      eyebrow: "Tours por Ciudad",
      title: "Todas las Zonas Turísticas — Cubiertas",
      description:
        "Toca una ciudad para ver traslados, excursiones y actividades disponibles en esa zona.",
    },
    excursions: {
      eyebrow: "Excursiones por la Isla",
      title: "Excursiones de un Día desde tu Resort",
      description:
        "Las experiencias que más reservan los viajeros de EE. UU. — chofer privado incluido, a tu ritmo.",
    },
    fleet: {
      eyebrow: "Nuestra Flota",
      title: "Vans y Buses para Cada Tamaño de Grupo",
      description:
        "Desde una pareja rumbo a RIU hasta una reunión familiar de 30 personas — tenemos el vehículo ideal.",
    },
    howItWorks: {
      eyebrow: "Reserva Fácil",
      title: "3 Pasos — Listo",
      description:
        "Sin apps complicadas. Escríbenos por WhatsApp, recibe el precio en USD y conoce a tu chofer en el aeropuerto.",
    },
    testimonials: {
      eyebrow: "Reseñas Reales",
      title: "Lo Que Dicen los Viajeros de EE. UU.",
      description:
        "Familias, parejas y grupos que reservaron traslados del aeropuerto y tours con nosotros.",
    },
    faq: {
      eyebrow: "Preguntas Frecuentes",
      title: "Preguntas que Nos Hacen los Viajeros de EE. UU.",
      description:
        "Traslados a resorts, precios, pagos y viajes en grupo — respuestas directas.",
    },
    contact: {
      eyebrow: "Reserva tu Traslado",
      title: "Cotización Gratis en USD",
      description:
        "Cuéntanos tu resort y datos de vuelo. Respondemos por WhatsApp en 2 horas — sin compromiso.",
    },
    resortsCta: {
      title: "¿Tu resort no aparece? No hay problema — vamos a toda la isla.",
      description:
        "Indica dónde reservaste en el formulario y te damos una tarifa fija en USD.",
      button: "Cotizar Traslado al Resort",
    },
  },
  tourTypes: {
    transfer: "Traslado",
    excursion: "Excursión",
    activity: "Actividad",
    combo: "Tour Combinado",
  },
  contact: {
    whatsappQuote: "Hola {business}, necesito una cotización para traslado al resort.",
    whatsappResort: "Hola {business}, necesito una cotización para traslado del aeropuerto a mi resort.",
    callDirect: "Llamar Directo",
    whatsappFastest: "WhatsApp (Más Rápido)",
    messageUsNow: "Escríbenos ahora",
    emailLabel: "Correo",
    form: {
      fullName: "Nombre Completo *",
      email: "Correo *",
      phone: "Teléfono / WhatsApp",
      resort: "Tu Resort *",
      service: "Servicio Necesario *",
      travelDate: "Fecha de Viaje",
      guests: "Número de Huéspedes",
      details: "Vuelo y Otros Detalles",
      submit: "Solicitar Cotización Gratis en USD",
      submitting: "Enviando...",
      disclaimer: "Respondemos en 2 horas. Sin spam, sin compromiso.",
      placeholders: {
        name: "Tu nombre",
        email: "tu@email.com",
        phone: "+1 (555) 123-4567",
        guests: "4",
        details: "Número de vuelo, hora de llegada, solicitudes especiales...",
        selectResort: "Selecciona tu resort",
        selectService: "Selecciona un servicio",
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
        "Otro Resort / Villa",
      ],
      serviceOptions: [
        { value: "MBJ Airport to Resort", label: "Aeropuerto MBJ → Resort" },
        { value: "Resort to MBJ Airport", label: "Resort → Aeropuerto MBJ" },
        { value: "Round Trip Airport", label: "Traslado Ida y Vuelta al Aeropuerto" },
        { value: "Dunn's River Falls", label: "Tour Dunn's River Falls" },
        { value: "Blue Hole", label: "Blue Hole y Cascadas Secretas" },
        { value: "Rick's Cafe", label: "Atardecer en Rick's Café" },
        { value: "Luminous Lagoon", label: "Tour Nocturno Laguna Luminosa" },
        { value: "Group Transport", label: "Transporte Grupal / Familiar" },
        { value: "Other", label: "Otro" },
      ],
    },
  },
  blog: {
    indexTitle: "Guías de Viaje a Jamaica",
    indexSubtitle:
      "Consejos para viajeros de EE. UU. — traslados del aeropuerto, pickups en resorts y tours por la isla.",
    metadataTitle: "Blog de Viajes a Jamaica — Traslados, Tours y Consejos",
    metadataDescription:
      "Guías para viajeros de EE. UU. en Jamaica — traslados del aeropuerto MBJ, shuttles a resorts RIU y Royalton, tours en Ocho Rios y consejos para grupos.",
    indexDescription:
      "Guías para viajeros de EE. UU. en Jamaica — traslados del aeropuerto MBJ, shuttles a resorts RIU y Royalton, tours en Ocho Rios y consejos para grupos.",
  },
  form: {
    success: "¡Gracias! Responderemos por WhatsApp o correo en 2 horas.",
    error: "Algo salió mal. Por favor escríbenos por WhatsApp o llámanos directamente.",
    mailtoSuccess:
      "Se abrirá tu app de correo — envía el mensaje para completar tu solicitud.",
  },
};
