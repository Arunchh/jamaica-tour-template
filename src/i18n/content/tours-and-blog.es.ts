import type { BlogPost, CityTourGuide } from "@/i18n/types";

export const cityTourGuidesEs: CityTourGuide[] = [
  {
    city: "Montego Bay",
    slug: "montego-bay",
    tagline: "Hub aeroportuario y corredor de resorts",
    description:
      "La mayoría de los vuelos desde EE. UU. aterrizan aquí en MBJ. Traslados privados diarios a hoteles del Hip Strip, resorts de Rose Hall y salidas a toda la isla.",
    image:
      "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80",
    popularResorts: ["RIU Montego Bay", "Secrets St. James", "Holiday Inn Resort", "Deja Resort"],
    tours: [
      {
        name: "Aeropuerto MBJ → Resort en Montego Bay",
        type: "transfer",
        duration: "20–45 min",
        priceFrom: 40,
        description:
          "Recogida privada con cartel de bienvenida en el aeropuerto Sangster hasta cualquier hotel o villa de Montego Bay.",
      },
      {
        name: "Tour de Rose Hall Great House",
        type: "excursion",
        duration: "3–4 horas",
        priceFrom: 55,
        description:
          "Histórica casa de plantación, la leyenda de Annie Palmer y paradas fotográficas a lo largo de la costa.",
      },
      {
        name: "Doctor's Cave Beach y Hip Strip",
        type: "activity",
        duration: "4 horas",
        priceFrom: 45,
        description:
          "Tiempo en la playa, Margaritaville, mercado de artesanías local y parada para almorzar jerk chicken.",
      },
      {
        name: "Tour por la ciudad y compras de Montego Bay",
        type: "activity",
        duration: "4–5 horas",
        priceFrom: 50,
        description:
          "Mercados del centro, compras de recuerdos y paradas opcionales de rum cake y café.",
      },
      {
        name: "Crucero en catamarán con snorkel",
        type: "activity",
        duration: "3–4 horas",
        priceFrom: 75,
        description:
          "Navegación, snorkel y crucero fiestero con barra libre desde la marina de Montego Bay.",
      },
      {
        name: "Aventura en ATV y campo jamaicano",
        type: "activity",
        duration: "3 horas",
        priceFrom: 85,
        description:
          "Rutas todoterreno por comunidades rurales con vistas panorámicas desde las colinas.",
      },
    ],
  },
  {
    city: "Negril",
    slug: "negril",
    tagline: "Seven Mile Beach y atardeceres en los acantilados",
    description:
      "Paraíso en el extremo oeste. Ofrecemos traslados diarios desde el aeropuerto MBJ y shuttles entre resorts hacia RIU Negril, Royalton Negril y Sandals.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    popularResorts: ["RIU Negril", "Royalton Negril", "Sandals Negril", "Couples Swept Away"],
    tours: [
      {
        name: "Aeropuerto MBJ → Resort en Negril",
        type: "transfer",
        duration: "75–90 min",
        priceFrom: 65,
        description:
          "Van privada desde el aeropuerto Sangster hasta resorts de Seven Mile Beach y villas del extremo oeste.",
      },
      {
        name: "Excursión al atardecer en Rick's Café",
        type: "excursion",
        duration: "4–5 horas",
        priceFrom: 55,
        description:
          "Espectáculo de saltos desde el acantilado, vistas al atardecer y tiempo para tomar algo en el mundialmente famoso Rick's Café.",
      },
      {
        name: "Día en Seven Mile Beach",
        type: "activity",
        duration: "4 horas",
        priceFrom: 40,
        description:
          "Acceso a beach club, natación y deportes acuáticos opcionales a lo largo de la famosa playa de Negril.",
      },
      {
        name: "Faro de Negril y West End",
        type: "activity",
        duration: "3 horas",
        priceFrom: 45,
        description:
          "Recorrido escénico por el extremo oeste, fotos en el faro y opción de almuerzo de mariscos locales.",
      },
      {
        name: "Aventura en Mayfield Falls",
        type: "excursion",
        duration: "5–6 horas",
        priceFrom: 80,
        description:
          "Experiencia en cascadas menos concurrida con pozas naturales y caminata guiada por el río.",
      },
      {
        name: "Tour por Rhodes Hall Plantation",
        type: "excursion",
        duration: "4 horas",
        priceFrom: 70,
        description:
          "Senderos naturales, paseos en camello y avistamiento de aves en una finca histórica.",
      },
    ],
  },
  {
    city: "Ocho Rios",
    slug: "ocho-rios",
    tagline: "Cascadas, aventura y puerto de cruceros",
    description:
      "Capital de la aventura en la costa norte. Dunn's River, Blue Hole y Mystic Mountain — además de excursiones para cruceros con regreso puntual al puerto.",
    image:
      "https://images.unsplash.com/photo-1559120680-6a0f4941f1a4?auto=format&fit=crop&w=800&q=80",
    popularResorts: ["Sandals Ochi", "Sandals Royal Plantation", "Jewel Dunn's River", "Moon Palace"],
    tours: [
      {
        name: "Aeropuerto MBJ → Resort en Ocho Rios",
        type: "transfer",
        duration: "90–110 min",
        priceFrom: 95,
        description:
          "Traslado privado desde el aeropuerto de Montego Bay hasta resorts todo incluido de la costa norte.",
      },
      {
        name: "Ascenso a Dunn's River Falls",
        type: "excursion",
        duration: "5–6 horas",
        priceFrom: 75,
        description:
          "Subida guiada por la cascada, tiempo en la playa y almuerzo opcional en un local de jerk.",
      },
      {
        name: "Blue Hole y Secret Falls",
        type: "excursion",
        duration: "6 horas",
        priceFrom: 85,
        description:
          "Pozas para nadar, saltos desde acantilados y senderos por la selva con guía local.",
      },
      {
        name: "Combo Dunn's River + Blue Hole",
        type: "combo",
        duration: "8–9 horas",
        priceFrom: 120,
        description:
          "Las dos atracciones más populares de Ocho Rios en un tour privado de día completo.",
      },
      {
        name: "Selva tropical de Mystic Mountain",
        type: "activity",
        duration: "4–5 horas",
        priceFrom: 90,
        description:
          "Teleférico Sky Explorer, paseo en bobsled y vistas de la selva sobre Ocho Rios.",
      },
      {
        name: "Tubing en el río White River",
        type: "activity",
        duration: "3 horas",
        priceFrom: 65,
        description:
          "Tubing suave por la selva exuberante — ideal para familias y principiantes.",
      },
      {
        name: "Konoko Falls y Jardines",
        type: "activity",
        duration: "3 horas",
        priceFrom: 50,
        description:
          "Jardines botánicos, mini ascenso por cascada y exposición sobre la historia arawak.",
      },
      {
        name: "Excursión desde el puerto de cruceros",
        type: "combo",
        duration: "4–6 horas",
        priceFrom: 70,
        description:
          "Recogida programada en el puerto de cruceros de Ocho Rios con regreso garantizado antes de la salida del barco.",
      },
    ],
  },
  {
    city: "Falmouth",
    slug: "falmouth",
    tagline: "Puerto histórico y aguas luminiscentes",
    description:
      "Hogar de Royalton Blue Waters y la famosa Laguna Luminosa. Rafting en Martha Brae y tours patrimoniales de Falmouth disponibles todos los días.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    popularResorts: ["Royalton Blue Waters", "Royalton White Sands", "Excellence Oyster Bay"],
    tours: [
      {
        name: "Aeropuerto MBJ → Resort en Falmouth",
        type: "transfer",
        duration: "30–50 min",
        priceFrom: 50,
        description:
          "Traslado privado directo a Royalton Blue Waters, White Sands y resorts de Trelawny.",
      },
      {
        name: "Tour nocturno de la Laguna Luminosa",
        type: "excursion",
        duration: "3 horas",
        priceFrom: 60,
        description:
          "Paseo en bote al atardecer por aguas bioluminiscentes — una experiencia imprescindible en Jamaica.",
      },
      {
        name: "Rafting en el río Martha Brae",
        type: "activity",
        duration: "3–4 horas",
        priceFrom: 55,
        description:
          "Paseo en balsa de bambú por un tranquilo río en la selva con capitán local.",
      },
      {
        name: "Tour a pie por el patrimonio de Falmouth",
        type: "activity",
        duration: "2–3 horas",
        priceFrom: 40,
        description:
          "Arquitectura georgiana, ciudad portuaria histórica y visita al mercado local.",
      },
      {
        name: "Aventura en Good Hope Estate",
        type: "excursion",
        duration: "4–5 horas",
        priceFrom: 75,
        description:
          "Tirolesas, tubing en el río y tour por la gran casa en una plantación de la época colonial.",
      },
      {
        name: "Tour de ron en Appleton Estate",
        type: "excursion",
        duration: "5–6 horas",
        priceFrom: 90,
        description:
          "Tour por la famosa destilería de ron de Jamaica con degustación (excursión de día completo a la costa sur desde Falmouth).",
      },
    ],
  },
  {
    city: "Runaway Bay",
    slug: "runaway-bay",
    tagline: "Playas tranquilas de la costa norte",
    description:
      "Zona de resorts relajada entre Ocho Rios y Falmouth. Muy popular entre familias que buscan playas tranquilas y un ambiente más relajado.",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb6668c21a?auto=format&fit=crop&w=800&q=80",
    popularResorts: ["Royal Decameron Runaway Bay", "Jewel Paradise Cove", "Franklyn D Resort"],
    tours: [
      {
        name: "Aeropuerto MBJ → Runaway Bay",
        type: "transfer",
        duration: "60–75 min",
        priceFrom: 70,
        description:
          "Traslado privado desde el aeropuerto hasta hoteles de Runaway Bay y la costa norte de St. Ann.",
      },
      {
        name: "Green Grotto Caves",
        type: "excursion",
        duration: "3 horas",
        priceFrom: 50,
        description:
          "Cuevas subterráneas de piedra caliza con historia vinculada a los luchadores por la libertad de Jamaica.",
      },
      {
        name: "Día en Puerto Seco Beach",
        type: "activity",
        duration: "4 horas",
        priceFrom: 45,
        description:
          "Beach club, natación y almuerzo de jerk en la costa de Discovery Bay.",
      },
      {
        name: "Nine Mile — Lugar de nacimiento de Bob Marley",
        type: "excursion",
        duration: "6–7 horas",
        priceFrom: 95,
        description:
          "Peregrinación al hogar de la infancia y mausoleo de Bob Marley en las colinas de St. Ann.",
      },
    ],
  },
  {
    city: "Kingston",
    slug: "kingston",
    tagline: "Cultura, música y vida urbana",
    description:
      "Traslados desde el aeropuerto Norman Manley (KIN) y excursiones culturales de un día para viajeros que extienden sus vacaciones en Jamaica.",
    image:
      "https://images.unsplash.com/photo-1559120680-6a0f4941f1a4?auto=format&fit=crop&w=800&q=80",
    popularResorts: ["Courtyard Kingston", "Spanish Court Hotel", "Melia Kingston"],
    tours: [
      {
        name: "Aeropuerto KIN → Hotel en Kingston",
        type: "transfer",
        duration: "20–40 min",
        priceFrom: 45,
        description:
          "Traslado privado desde el Aeropuerto Internacional Norman Manley hasta hoteles de Kingston.",
      },
      {
        name: "Tour del Museo Bob Marley",
        type: "excursion",
        duration: "3 horas",
        priceFrom: 50,
        description:
          "Estudio Tuff Gong y museo en la antigua residencia de Bob Marley en Hope Road.",
      },
      {
        name: "Tour de café en Blue Mountains",
        type: "excursion",
        duration: "6–8 horas",
        priceFrom: 110,
        description:
          "Visita a plantación de café de fama mundial con degustación y paisajes de montaña.",
      },
      {
        name: "Sitio patrimonial de Port Royal",
        type: "activity",
        duration: "3–4 horas",
        priceFrom: 55,
        description:
          "Ruinas de la histórica ciudad pirata y Fort Charles a la entrada del puerto de Kingston.",
      },
    ],
  },
];

export const blogPostsEs: BlogPost[] = [
  {
    slug: "mbj-airport-transfer-guide",
    title: "Guía de traslados desde el aeropuerto MBJ: cómo llegar a tu resort en Jamaica en 2025",
    excerpt:
      "Todo lo que los viajeros de EE. UU. deben saber sobre traslados privados desde el aeropuerto Sangster (MBJ) a RIU, Royalton, Sandals y otros resorts todo incluido.",
    date: "2025-06-15",
    readTime: "6 min de lectura",
    category: "Traslados aeroportuarios",
    keywords: [
      "traslado aeropuerto MBJ",
      "taxi aeropuerto Montego Bay",
      "shuttle resort Jamaica",
    ],
    sections: [
      {
        paragraphs: [
          "El Aeropuerto Internacional Sangster (MBJ) en Montego Bay es el punto de llegada de la mayoría de los vuelos desde Estados Unidos a Jamaica. Después de un vuelo largo, lo último que quieres es confusión sobre cómo llegar a tu resort — especialmente si reservaste un todo incluido en RIU, Royalton, Sandals o Secrets.",
          "Un traslado privado desde el aeropuerto es la opción más popular entre los viajeros de EE. UU. A diferencia de los shuttles del resort que pueden costar entre 150 y 250 USD ida y vuelta, un operador local con licencia suele cobrar una tarifa fija en USD por vehículo — no por persona — lo que ahorra dinero a familias y grupos.",
        ],
      },
      {
        heading: "Cómo funcionan los traslados privados desde MBJ",
        paragraphs: [
          "Reservas con anticipación por WhatsApp o mediante un formulario de cotización en la web. Tu conductor rastrea tu vuelo, te recibe en la zona de llegadas con un cartel con tu nombre y te lleva directamente al resort — sin autobús compartido ni paradas adicionales.",
          "Precios típicos de ida (1–4 pasajeros): resorts de Montego Bay 40–55 USD, Falmouth/Royalton Blue Waters 50–65 USD, Negril 65–80 USD, Ocho Rios 90–110 USD. Los precios varían según el operador y el tamaño del vehículo.",
        ],
      },
      {
        heading: "Consejos para una llegada sin contratiempos",
        paragraphs: [
          "Reserva al menos 48 horas antes del viaje. Comparte tu número de vuelo, el nombre del resort y el tamaño del grupo. Ten WhatsApp listo — la mayoría de los operadores en Jamaica se comunican por ahí.",
          "Paga en USD a la llegada o usa Zelle/CashApp si lo acordaste con anticipación. Guarda el número de teléfono de tu operador por si hay retrasos en el vuelo.",
        ],
      },
    ],
  },
  {
    slug: "best-day-trips-ocho-rios",
    title: "Mejores excursiones de un día desde Ocho Rios: Dunn's River, Blue Hole y más",
    excerpt:
      "Guía local de las excursiones más reservadas por turistas de EE. UU. en Ocho Rios — con consejos de horarios y qué esperar en cada parada.",
    date: "2025-05-28",
    readTime: "7 min de lectura",
    category: "Tours en Ocho Rios",
    keywords: [
      "tours Ocho Rios",
      "tour Dunn's River Falls",
      "Blue Hole Jamaica",
    ],
    sections: [
      {
        paragraphs: [
          "Ocho Rios es la capital de la aventura en Jamaica. Si te hospedas en Sandals Ochi, Jewel Dunn's River o llegas en un crucero, estas son las excursiones de un día que más solicitan los huéspedes.",
        ],
      },
      {
        heading: "Dunn's River Falls",
        paragraphs: [
          "El icónico ascenso por la cascada en terrazas es una experiencia de lista de deseos. Ve temprano por la mañana (antes de las 10:00) para evitar las multitudes de los cruceros. Un conductor privado te permite combinar las cascadas con almuerzo en un local de jerk en lugar de apresurarte en un autobús de tour lleno.",
        ],
      },
      {
        heading: "Blue Hole y Secret Falls",
        paragraphs: [
          "Menos comercial que Dunn's River, Blue Hole ofrece natación, columpios de cuerda y saltos desde acantilados en un entorno de selva tropical. Calcula 6 horas completas incluyendo el traslado desde resorts de Montego Bay u Ocho Rios.",
        ],
      },
      {
        heading: "Combinar atracciones",
        paragraphs: [
          "Muchas familias de EE. UU. reservan un combo Dunn's River + Blue Hole en un solo día. Es un día largo, pero ahorra un segundo viaje. Un operador privado puede adaptar el ritmo del día a tus hijos y a las paradas para fotos.",
        ],
      },
    ],
  },
  {
    slug: "negril-airport-transfer-from-mbj",
    title: "Cómo ir del aeropuerto de Montego Bay a Negril (sin pagar de más)",
    excerpt:
      "De MBJ a Negril son unos 90 minutos. Aquí te contamos cuánto cuesta un traslado privado justo y por qué es mejor que un shuttle compartido para familias.",
    date: "2025-05-10",
    readTime: "5 min de lectura",
    category: "Traslados a Negril",
    keywords: [
      "traslado MBJ a Negril",
      "shuttle aeropuerto Negril",
      "traslado RIU Negril",
    ],
    sections: [
      {
        paragraphs: [
          "Negril está en el extremo oeste de Jamaica — a unos 90 minutos del aeropuerto MBJ. Los viajeros de EE. UU. que se dirigen a RIU Negril, Royalton Negril, Sandals Negril o Couples Swept Away necesitan transporte confiable al aterrizar.",
        ],
      },
      {
        heading: "Traslado privado vs. shuttle compartido",
        paragraphs: [
          "Los shuttles compartidos cuestan alrededor de 25 USD por persona, pero esperan a que el autobús se llene y hacen varias paradas en distintos resorts. Un traslado privado para 1–4 personas cuesta entre 65 y 80 USD solo ida — y sales de inmediato solo con tu grupo.",
          "Para familias de cuatro, el traslado privado suele costar menos que cuatro asientos en shuttle y es mucho más cómodo después de un vuelo largo.",
        ],
      },
      {
        heading: "Qué reservar desde Negril",
        paragraphs: [
          "Una vez en Negril, reserva excursiones al atardecer en Rick's Café, Mayfield Falls y días de playa con el mismo operador. Establecer una relación con un solo conductor durante todo el viaje es lo que hacen los visitantes recurrentes de EE. UU. en Jamaica.",
        ],
      },
    ],
  },
  {
    slug: "riu-royalton-resort-transfers",
    title: "Traslados a resorts RIU y Royalton: lo que deben saber los huéspedes de EE. UU.",
    excerpt:
      "Compara los traslados del resort con reservar un conductor local en Jamaica para propiedades RIU y Royalton — y cuánto puedes ahorrar.",
    date: "2025-04-22",
    readTime: "5 min de lectura",
    category: "Traslados a resorts",
    keywords: [
      "traslado RIU Montego Bay",
      "shuttle Royalton Blue Waters",
      "traslado aeropuerto todo incluido",
    ],
    sections: [
      {
        paragraphs: [
          "RIU y Royalton son dos de las cadenas todo incluido más populares entre los viajeros estadounidenses — especialmente familias y grupos que buscan buena relación calidad-precio. Ambas ofrecen traslados desde el aeropuerto, pero no siempre están incluidos y rara vez son la opción más económica.",
        ],
      },
      {
        heading: "Royalton Blue Waters y White Sands (Falmouth)",
        paragraphs: [
          "Estos resorts en Trelawny están a 30–50 minutos de MBJ. Los traslados del resort pueden superar los 200 USD ida y vuelta para una familia. Los operadores locales suelen cobrar entre 50 y 70 USD por trayecto en van privada — un ahorro considerable en el presupuesto de vacaciones.",
        ],
      },
      {
        heading: "Propiedades RIU en toda Jamaica",
        paragraphs: [
          "RIU Montego Bay es el más cercano al aeropuerto (20–30 min). RIU Negril y RIU Ocho Rios requieren trayectos más largos, pero la lógica es la misma: reserva un traslado privado, obtén una cotización fija en USD y comparte el vehículo con todo tu grupo.",
        ],
      },
    ],
  },
  {
    slug: "dunns-river-falls-private-tour-tips",
    title: "Tour privado a Dunn's River Falls: consejos de un conductor local",
    excerpt:
      "Cuándo ir, qué llevar, cuánto tiempo calcular y por qué un tour privado supera a las multitudes de los cruceros en Dunn's River Falls.",
    date: "2025-04-08",
    readTime: "6 min de lectura",
    category: "Excursiones",
    keywords: [
      "tour privado Dunn's River Falls",
      "Dunn's River desde Montego Bay",
      "tour cascadas Ocho Rios",
    ],
    sections: [
      {
        paragraphs: [
          "Dunn's River Falls es la atracción natural más visitada de Jamaica. Cada año, miles de turistas de EE. UU. suben la cascada en terrazas de 600 pies — y la experiencia varía mucho según la hora de llegada y cómo te desplazas.",
        ],
      },
      {
        heading: "Mejor momento para visitar",
        paragraphs: [
          "Llega antes de las 10:00 o después de las 15:00 para evitar las horas pico de los cruceros. Las mañanas de martes y miércoles suelen ser más tranquilas que los fines de semana.",
        ],
      },
      {
        heading: "Qué llevar",
        paragraphs: [
          "Los zapatos de agua son imprescindibles (se alquilan en el lugar). Lleva toalla, protector solar y efectivo para casilleros y propinas. Usa traje de baño debajo de la ropa — estarás en el agua a los pocos minutos de comenzar el ascenso.",
        ],
      },
      {
        heading: "Por qué ir en privado",
        paragraphs: [
          "Un conductor privado desde Montego Bay u Ocho Rios te permite controlar la hora de salida, añadir una parada para almorzar jerk chicken y evitar la presión de las tiendas de souvenirs de los grupos grandes. Para familias con niños o padres mayores, el ritmo del día importa.",
        ],
      },
    ],
  },
  {
    slug: "jamaica-group-transport-church-family",
    title: "Transporte grupal en Jamaica: consejos para grupos de iglesia, reuniones familiares y familias numerosas",
    excerpt:
      "Cómo mover de 10 a 30 personas por Jamaica con una van Hiace o un autobús Coaster — y cuánto cuesta en USD.",
    date: "2025-03-18",
    readTime: "5 min de lectura",
    category: "Viajes en grupo",
    keywords: [
      "transporte grupal Jamaica",
      "autobús Hiace Jamaica",
      "tour grupo iglesia Jamaica",
    ],
    sections: [
      {
        paragraphs: [
          "Jamaica es un destino destacado para reuniones familiares, retiros de iglesia y vacaciones en grupo de amigos. Mover de 10 a 30 personas requiere más que sedanes — y ahí entran las vans Hiace y los autobuses Coaster.",
        ],
      },
      {
        heading: "Opciones de vehículos",
        paragraphs: [
          "Toyota Hiace: hasta 12 pasajeros con equipaje. Ideal para familias extendidas. Toyota Coaster: hasta 30 pasajeros para grupos de iglesia y fiestas de boda. Reparte el costo del vehículo entre el grupo y el precio por persona baja rápidamente.",
        ],
      },
      {
        heading: "Consejos para reservar",
        paragraphs: [
          "Reserva la recogida en el aeropuerto con al menos una semana de anticipación para grupos grandes. Comparte un listado de pasajeros, el nombre del resort y los horarios escalonados de vuelos si las personas llegan en vuelos distintos. Los chats grupales de WhatsApp con tu operador mantienen a todos coordinados durante el viaje.",
        ],
      },
    ],
  },
];
