import type { BlogPost, CityTourGuide } from "@/i18n/types";

export const cityTourGuidesPt: CityTourGuide[] = [
  {
    city: "Montego Bay",
    slug: "montego-bay",
    tagline: "Hub do aeroporto e corredor de resorts",
    description:
      "A maioria dos voos dos EUA pousa no MBJ aqui. Transfers privados diários para hotéis do Hip Strip, resorts de Rose Hall e saídas para toda a ilha.",
    image:
      "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80",
    popularResorts: ["RIU Montego Bay", "Secrets St. James", "Holiday Inn Resort", "Deja Resort"],
    tours: [
      {
        name: "Aeroporto MBJ → Resort em Montego Bay",
        type: "transfer",
        duration: "20–45 min",
        priceFrom: 40,
        description:
          "Recepção privada no Aeroporto Sangster com transfer direto para qualquer hotel ou villa em Montego Bay.",
      },
      {
        name: "Tour pela Rose Hall Great House",
        type: "excursion",
        duration: "3–4 horas",
        priceFrom: 55,
        description:
          "Casa histórica de plantação, a lenda de Annie Palmer e paradas para fotos ao longo da costa.",
      },
      {
        name: "Doctor's Cave Beach e Hip Strip",
        type: "activity",
        duration: "4 horas",
        priceFrom: 45,
        description:
          "Tempo na praia, Margaritaville, mercado de artesanato local e parada para almoço de jerk chicken.",
      },
      {
        name: "Tour pela Cidade e Compras em Montego Bay",
        type: "activity",
        duration: "4–5 horas",
        priceFrom: 50,
        description:
          "Mercados do centro, compras de lembrancinhas e paradas opcionais para rum cake e café.",
      },
      {
        name: "Cruzeiro de Catamarã com Snorkel",
        type: "activity",
        duration: "3–4 horas",
        priceFrom: 75,
        description:
          "Vela, snorkel e cruzeiro festivo com open bar saindo da marina de Montego Bay.",
      },
      {
        name: "Aventura de ATV e Interior",
        type: "activity",
        duration: "3 horas",
        priceFrom: 85,
        description:
          "Trilhas off-road por comunidades rurais com vistas panorâmicas do topo das colinas.",
      },
    ],
  },
  {
    city: "Negril",
    slug: "negril",
    tagline: "Seven Mile Beach e pôr do sol nas falésias",
    description:
      "Paraíso no extremo oeste. Fazemos transfers diários do aeroporto MBJ e shuttles entre resorts para RIU Negril, Royalton Negril e Sandals.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    popularResorts: ["RIU Negril", "Royalton Negril", "Sandals Negril", "Couples Swept Away"],
    tours: [
      {
        name: "Aeroporto MBJ → Resort em Negril",
        type: "transfer",
        duration: "75–90 min",
        priceFrom: 65,
        description:
          "Van privada do Aeroporto Sangster para resorts da Seven Mile Beach e villas do extremo oeste.",
      },
      {
        name: "Pôr do Sol no Rick's Café",
        type: "excursion",
        duration: "4–5 horas",
        priceFrom: 55,
        description:
          "Show de mergulho das falésias, vistas do pôr do sol e tempo para drinks no mundialmente famoso Rick's Café.",
      },
      {
        name: "Dia na Seven Mile Beach",
        type: "activity",
        duration: "4 horas",
        priceFrom: 40,
        description:
          "Acesso a beach club, natação e esportes aquáticos opcionais ao longo da famosa praia de Negril.",
      },
      {
        name: "Farol de Negril e West End",
        type: "activity",
        duration: "3 horas",
        priceFrom: 45,
        description:
          "Passeio cênico pelo extremo oeste, fotos no farol e opção de almoço de frutos do mar locais.",
      },
      {
        name: "Aventura nas Mayfield Falls",
        type: "excursion",
        duration: "5–6 horas",
        priceFrom: 80,
        description:
          "Experiência de cachoeira menos lotada, com piscinas naturais e caminhada guiada pelo rio.",
      },
      {
        name: "Tour pela Rhodes Hall Plantation",
        type: "excursion",
        duration: "4 horas",
        priceFrom: 70,
        description:
          "Trilhas na natureza, passeios de camelo e observação de aves em uma propriedade histórica.",
      },
    ],
  },
  {
    city: "Ocho Rios",
    slug: "ocho-rios",
    tagline: "Cachoeiras, aventura e porto de cruzeiros",
    description:
      "Capital da aventura na costa norte. Dunn's River, Blue Hole e Mystic Mountain — além de excursões de cruzeiro com retorno garantido ao porto no horário.",
    image:
      "https://images.unsplash.com/photo-1559120680-6a0f4941f1a4?auto=format&fit=crop&w=800&q=80",
    popularResorts: ["Sandals Ochi", "Sandals Royal Plantation", "Jewel Dunn's River", "Moon Palace"],
    tours: [
      {
        name: "Aeroporto MBJ → Resort em Ocho Rios",
        type: "transfer",
        duration: "90–110 min",
        priceFrom: 95,
        description:
          "Transfer privado do Aeroporto de Montego Bay para resorts all-inclusive na costa norte.",
      },
      {
        name: "Escalada nas Dunn's River Falls",
        type: "excursion",
        duration: "5–6 horas",
        priceFrom: 75,
        description:
          "Escalada guiada na cachoeira, tempo na praia e almoço opcional em um restaurante de jerk local.",
      },
      {
        name: "Blue Hole e Secret Falls",
        type: "excursion",
        duration: "6 horas",
        priceFrom: 85,
        description:
          "Poços naturais para natação, saltos de falésia e trilhas na floresta tropical com guia local.",
      },
      {
        name: "Combo Dunn's River + Blue Hole",
        type: "combo",
        duration: "8–9 horas",
        priceFrom: 120,
        description:
          "As duas atrações mais populares de Ocho Rios em um tour privado de dia inteiro.",
      },
      {
        name: "Mystic Mountain Rainforest",
        type: "activity",
        duration: "4–5 horas",
        priceFrom: 90,
        description:
          "Teleférico Sky Explorer, pista de bobsled e vistas da floresta tropical acima de Ocho Rios.",
      },
      {
        name: "Boia no Rio White River",
        type: "activity",
        duration: "3 horas",
        priceFrom: 65,
        description:
          "Boia tranquila por uma selva exuberante — ideal para famílias e iniciantes.",
      },
      {
        name: "Konoko Falls & Gardens",
        type: "activity",
        duration: "3 horas",
        priceFrom: 50,
        description:
          "Jardim botânico, mini escalada na cachoeira e exposição sobre a história Arawak.",
      },
      {
        name: "Excursão do Porto de Cruzeiros",
        type: "combo",
        duration: "4–6 horas",
        priceFrom: 70,
        description:
          "Busca programada no porto de cruzeiros de Ocho Rios com retorno garantido antes da partida do navio.",
      },
    ],
  },
  {
    city: "Falmouth",
    slug: "falmouth",
    tagline: "Porto histórico e águas luminosas",
    description:
      "Sede do Royalton Blue Waters e da famosa Luminous Lagoon. Passeios de balsa no Martha Brae e tours pelo patrimônio de Falmouth disponíveis diariamente.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    popularResorts: ["Royalton Blue Waters", "Royalton White Sands", "Excellence Oyster Bay"],
    tours: [
      {
        name: "Aeroporto MBJ → Resort em Falmouth",
        type: "transfer",
        duration: "30–50 min",
        priceFrom: 50,
        description:
          "Transfer privado direto para Royalton Blue Waters, White Sands e resorts em Trelawny.",
      },
      {
        name: "Tour Noturno na Luminous Lagoon",
        type: "excursion",
        duration: "3 horas",
        priceFrom: 60,
        description:
          "Passeio de barco ao entardecer nas águas bioluminescentes brilhantes — uma experiência imperdível na Jamaica.",
      },
      {
        name: "Balsa no Rio Martha Brae",
        type: "activity",
        duration: "3–4 horas",
        priceFrom: 55,
        description:
          "Passeio de balsa de bambu por um rio tranquilo na selva com um capitão local.",
      },
      {
        name: "Tour a Pé pelo Patrimônio de Falmouth",
        type: "activity",
        duration: "2–3 horas",
        priceFrom: 40,
        description:
          "Arquitetura georgiana, cidade portuária histórica e visita ao mercado local.",
      },
      {
        name: "Aventura na Good Hope Estate",
        type: "excursion",
        duration: "4–5 horas",
        priceFrom: 75,
        description:
          "Tirolesa, boia no rio e tour pela casa-sede em uma plantação da era colonial.",
      },
      {
        name: "Tour pela Destilaria Appleton Estate Rum",
        type: "excursion",
        duration: "5–6 horas",
        priceFrom: 90,
        description:
          "Tour pela famosa destilaria de rum da Jamaica com degustação (excursão de dia inteiro pela costa sul saindo de Falmouth).",
      },
    ],
  },
  {
    city: "Runaway Bay",
    slug: "runaway-bay",
    tagline: "Praias tranquilas na costa norte",
    description:
      "Região de resorts relaxada entre Ocho Rios e Falmouth. Popular entre famílias que buscam praias calmas e um clima mais tranquilo.",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb6668c21a?auto=format&fit=crop&w=800&q=80",
    popularResorts: ["Royal Decameron Runaway Bay", "Jewel Paradise Cove", "Franklyn D Resort"],
    tours: [
      {
        name: "Aeroporto MBJ → Runaway Bay",
        type: "transfer",
        duration: "60–75 min",
        priceFrom: 70,
        description:
          "Transfer privado do aeroporto para Runaway Bay e hotéis na costa norte de St. Ann.",
      },
      {
        name: "Green Grotto Caves",
        type: "excursion",
        duration: "3 horas",
        priceFrom: 50,
        description:
          "Cavernas subterrâneas de calcário com história ligada aos lutadores pela liberdade da Jamaica.",
      },
      {
        name: "Dia na Puerto Seco Beach",
        type: "activity",
        duration: "4 horas",
        priceFrom: 45,
        description:
          "Beach club, natação e almoço de jerk pan na costa de Discovery Bay.",
      },
      {
        name: "Nine Mile — Local de Nascimento de Bob Marley",
        type: "excursion",
        duration: "6–7 horas",
        priceFrom: 95,
        description:
          "Peregrinação à casa de infância e mausoléu de Bob Marley nas colinas de St. Ann.",
      },
    ],
  },
  {
    city: "Kingston",
    slug: "kingston",
    tagline: "Cultura, música e vida urbana",
    description:
      "Transfers do Aeroporto Norman Manley (KIN) e passeios culturais de um dia para viajantes que estendem as férias na Jamaica.",
    image:
      "https://images.unsplash.com/photo-1559120680-6a0f4941f1a4?auto=format&fit=crop&w=800&q=80",
    popularResorts: ["Courtyard Kingston", "Spanish Court Hotel", "Melia Kingston"],
    tours: [
      {
        name: "Aeroporto KIN → Hotel em Kingston",
        type: "transfer",
        duration: "20–40 min",
        priceFrom: 45,
        description:
          "Transfer privado do Aeroporto Internacional Norman Manley para hotéis em Kingston.",
      },
      {
        name: "Tour pelo Bob Marley Museum",
        type: "excursion",
        duration: "3 horas",
        priceFrom: 50,
        description:
          "Estúdio Tuff Gong e museu na antiga casa de Bob Marley na Hope Road.",
      },
      {
        name: "Tour de Café nas Blue Mountains",
        type: "excursion",
        duration: "6–8 horas",
        priceFrom: 110,
        description:
          "Visita a plantação de café mundialmente famosa com degustação e paisagem montanhosa.",
      },
      {
        name: "Sítio Histórico de Port Royal",
        type: "activity",
        duration: "3–4 horas",
        priceFrom: 55,
        description:
          "Ruínas da cidade pirata histórica e Fort Charles na foz do Porto de Kingston.",
      },
    ],
  },
];

export const blogPostsPt: BlogPost[] = [
  {
    slug: "mbj-airport-transfer-guide",
    title: "Guia de Transfer do Aeroporto MBJ: Como Chegar ao Seu Resort na Jamaica em 2025",
    excerpt:
      "Tudo o que viajantes dos EUA precisam saber sobre transfers privados do Aeroporto Sangster (MBJ) para RIU, Royalton, Sandals e outros resorts all-inclusive.",
    date: "2025-06-15",
    readTime: "6 min de leitura",
    category: "Transfers do Aeroporto",
    keywords: ["transfer aeroporto MBJ", "táxi aeroporto Montego Bay", "shuttle resort Jamaica"],
    sections: [
      {
        paragraphs: [
          "O Aeroporto Internacional Sangster (MBJ) em Montego Bay é onde a maioria dos voos americanos chega à Jamaica. Depois de um voo longo, a última coisa que você quer é confusão sobre como chegar ao resort — especialmente se reservou um all-inclusive no RIU, Royalton, Sandals ou Secrets.",
          "Um transfer privado do aeroporto é a escolha mais popular entre viajantes dos EUA. Diferente dos shuttles reservados pelo resort, que podem custar US$ 150–250 ida e volta, um operador local licenciado normalmente cobra uma tarifa fixa em USD por veículo — não por pessoa — o que economiza dinheiro para famílias e grupos.",
        ],
      },
      {
        heading: "Como funcionam os transfers privados do MBJ",
        paragraphs: [
          "Você reserva com antecedência via WhatsApp ou formulário de orçamento no site. Seu motorista acompanha seu voo, encontra você na área de desembarque com uma placa com seu nome e leva você direto ao resort — sem ônibus compartilhado, sem paradas extras.",
          "Preços típicos de ida (1–4 passageiros): resorts na região de Montego Bay US$ 40–55, Falmouth/Royalton Blue Waters US$ 50–65, Negril US$ 65–80, Ocho Rios US$ 90–110. Os preços variam conforme o operador e o tamanho do veículo.",
        ],
      },
      {
        heading: "Dicas para uma chegada tranquila",
        paragraphs: [
          "Reserve com pelo menos 48 horas de antecedência. Informe o número do voo, o nome do resort e o tamanho do grupo. Tenha o WhatsApp pronto — a maioria dos operadores na Jamaica se comunica por ele.",
          "Pague em USD na chegada ou use Zelle/CashApp se combinado antes. Salve o telefone do operador para o caso de atrasos no voo.",
        ],
      },
    ],
  },
  {
    slug: "best-day-trips-ocho-rios",
    title: "Melhores Passeios de Um Dia saindo de Ocho Rios: Dunn's River, Blue Hole e Mais",
    excerpt:
      "Um guia local das excursões mais reservadas por turistas dos EUA em Ocho Rios — com dicas de horários e o que esperar em cada parada.",
    date: "2025-05-28",
    readTime: "7 min de leitura",
    category: "Tours em Ocho Rios",
    keywords: ["tours Ocho Rios", "tour Dunn's River Falls", "Blue Hole Jamaica"],
    sections: [
      {
        paragraphs: [
          "Ocho Rios é a capital da aventura na Jamaica. Se você está hospedado no Sandals Ochi, Jewel Dunn's River ou chegando em um navio de cruzeiro, estes são os passeios de um dia que os hóspedes mais pedem.",
        ],
      },
      {
        heading: "Dunn's River Falls",
        paragraphs: [
          "A icônica escalada na cachoeira em terraços é uma experiência de lista de desejos. Vá cedo (antes das 10h) para evitar as multidões dos cruzeiros. Um motorista privado permite combinar as cachoeiras com almoço em um restaurante de jerk, em vez de correr em um ônibus de tour lotado.",
        ],
      },
      {
        heading: "Blue Hole e Secret Falls",
        paragraphs: [
          "Menos comercial que Dunn's River, o Blue Hole oferece natação, balanços de corda e saltos de falésia em um cenário de floresta tropical. Reserve um dia inteiro de 6 horas, incluindo deslocamento a partir de resorts em Montego Bay ou Ocho Rios.",
        ],
      },
      {
        heading: "Combinando atrações",
        paragraphs: [
          "Muitas famílias dos EUA reservam um combo Dunn's River + Blue Hole em um único dia. É um dia longo, mas evita uma segunda viagem. Um operador privado pode adaptar o ritmo do dia às crianças e às paradas para fotos.",
        ],
      },
    ],
  },
  {
    slug: "negril-airport-transfer-from-mbj",
    title: "Como Ir do Aeroporto de Montego Bay para Negril (Sem Pagar a Mais)",
    excerpt:
      "MBJ até Negril leva cerca de 90 minutos. Veja quanto custa um transfer privado justo e por que é melhor que um shuttle compartilhado para famílias.",
    date: "2025-05-10",
    readTime: "5 min de leitura",
    category: "Transfers para Negril",
    keywords: ["transfer MBJ para Negril", "shuttle aeroporto Negril", "transfer RIU Negril"],
    sections: [
      {
        paragraphs: [
          "Negril fica no extremo oeste da Jamaica — cerca de 90 minutos do aeroporto MBJ. Viajantes dos EUA indo para RIU Negril, Royalton Negril, Sandals Negril ou Couples Swept Away precisam de transporte confiável após o pouso.",
        ],
      },
      {
        heading: "Transfer privado vs shuttle compartilhado",
        paragraphs: [
          "Shuttles compartilhados custam cerca de US$ 25 por pessoa, mas esperam o ônibus encher e fazem várias paradas em resorts. Um transfer privado para 1–4 pessoas fica entre US$ 65–80 só de ida — e você sai na hora, apenas com seu grupo.",
          "Para famílias de quatro pessoas, o privado muitas vezes custa menos que quatro assentos de shuttle e é muito mais confortável depois de um voo longo.",
        ],
      },
      {
        heading: "O que reservar a partir de Negril",
        paragraphs: [
          "Depois de chegar a Negril, reserve passeios ao Rick's Café no pôr do sol, Mayfield Falls e dias de praia com o mesmo operador. Criar uma relação com um motorista durante toda a viagem é como visitantes recorrentes dos EUA fazem na Jamaica.",
        ],
      },
    ],
  },
  {
    slug: "riu-royalton-resort-transfers",
    title: "Transfers para Resorts RIU e Royalton: O Que Hóspedes dos EUA Devem Saber",
    excerpt:
      "Compare transfers reservados pelo resort com a reserva de um motorista local na Jamaica para propriedades RIU e Royalton — e quanto você pode economizar.",
    date: "2025-04-22",
    readTime: "5 min de leitura",
    category: "Transfers para Resorts",
    keywords: [
      "transfer RIU Montego Bay",
      "shuttle Royalton Blue Waters",
      "transfer aeroporto all-inclusive",
    ],
    sections: [
      {
        paragraphs: [
          "RIU e Royalton são duas das cadeias all-inclusive mais populares entre viajantes americanos — especialmente famílias e grupos que buscam custo-benefício. Ambas oferecem transfers do aeroporto, mas nem sempre estão incluídos e raramente são a opção mais barata.",
        ],
      },
      {
        heading: "Royalton Blue Waters e White Sands (Falmouth)",
        paragraphs: [
          "Esses resorts em Trelawny ficam a 30–50 minutos do MBJ. Transfers do resort podem ultrapassar US$ 200 ida e volta para uma família. Operadores locais normalmente cobram US$ 50–70 por trecho em uma van privada — economia significativa no orçamento de férias de uma semana.",
        ],
      },
      {
        heading: "Propriedades RIU em toda a Jamaica",
        paragraphs: [
          "O RIU Montego Bay é o mais próximo do aeroporto (20–30 min). RIU Negril e RIU Ocho Rios exigem deslocamentos mais longos, mas seguem a mesma lógica: reserve um transfer privado, peça um orçamento fixo em USD e divida o veículo com todo o seu grupo.",
        ],
      },
    ],
  },
  {
    slug: "dunns-river-falls-private-tour-tips",
    title: "Tour Privado nas Dunn's River Falls: Dicas de um Motorista Local",
    excerpt:
      "Quando ir, o que vestir, quanto tempo reservar e por que um tour privado supera as multidões dos cruzeiros nas Dunn's River Falls.",
    date: "2025-04-08",
    readTime: "6 min de leitura",
    category: "Excursões",
    keywords: [
      "tour privado Dunn's River Falls",
      "Dunn's River saindo de Montego Bay",
      "tour cachoeira Ocho Rios",
    ],
    sections: [
      {
        paragraphs: [
          "Dunn's River Falls é a atração natural mais visitada da Jamaica. Todo ano, milhares de turistas dos EUA escalam a cachoeira em terraços de 180 metros — e a experiência varia muito conforme a hora da chegada e a forma como você vai.",
        ],
      },
      {
        heading: "Melhor horário para visitar",
        paragraphs: [
          "Chegue antes das 10h ou depois das 15h para evitar o pico dos navios de cruzeiro. Manhãs de terça e quarta tendem a ser mais tranquilas que fins de semana.",
        ],
      },
      {
        heading: "O que levar",
        paragraphs: [
          "Sapatilhas aquáticas são essenciais (disponíveis para aluguel no local). Leve toalha, protetor solar e dinheiro para armários e gorjetas. Use roupa de banho por baixo — você estará na água minutos após começar a escalada.",
        ],
      },
      {
        heading: "Por que ir de forma privada",
        paragraphs: [
          "Um motorista privado saindo de Montego Bay ou Ocho Rios permite controlar o horário de partida, incluir uma parada para almoço de jerk chicken e evitar a pressão das lojas de souvenirs de grandes grupos. Para famílias com crianças ou pais idosos, o ritmo do dia faz toda a diferença.",
        ],
      },
    ],
  },
  {
    slug: "jamaica-group-transport-church-family",
    title: "Transporte em Grupo na Jamaica: Dicas para Grupos de Igreja, Reencontros e Famílias Grandes",
    excerpt:
      "Como deslocar 10–30 pessoas pela Jamaica com uma van Hiace ou ônibus Coaster — e quanto custa em USD.",
    date: "2025-03-18",
    readTime: "5 min de leitura",
    category: "Viagem em Grupo",
    keywords: ["transporte em grupo Jamaica", "ônibus Hiace Jamaica", "tour grupo igreja Jamaica"],
    sections: [
      {
        paragraphs: [
          "A Jamaica é um destino popular para reencontros familiares, retiros de igreja e férias em grupo de amigos. Mover 10–30 pessoas exige mais que sedans — e é aí que entram as vans Hiace e os ônibus Coaster.",
        ],
      },
      {
        heading: "Opções de veículos",
        paragraphs: [
          "Toyota Hiace: até 12 passageiros com bagagem. Ideal para famílias estendidas. Toyota Coaster: até 30 passageiros para grupos de igreja e festas de casamento. Divida o custo do veículo pelo grupo e o preço por pessoa cai rapidamente.",
        ],
      },
      {
        heading: "Dicas de reserva",
        paragraphs: [
          "Reserve a busca no aeroporto com pelo menos uma semana de antecedência para grupos grandes. Envie a lista de passageiros, o nome do resort e horários escalonados de voo se as pessoas chegarem em voos diferentes. Grupos de WhatsApp com seu operador mantêm todos alinhados durante a viagem.",
        ],
      },
    ],
  },
];
