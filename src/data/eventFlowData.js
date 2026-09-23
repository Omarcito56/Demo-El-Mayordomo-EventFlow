/**
 * Datos iniciales y catálogo comercial para BS EventFlow
 * Propuesta demostrativa: El Mayordomo Banquetes & Catering
 */

export const initialBusinessData = {
  name: "El Mayordomo Banquetes & Catering",
  brandShort: "El Mayordomo",
  tagline: "Banquetes · Catering · Eventos",
  email: "elmayordomo.banquetes@gmail.com",
  heroSubtitle: "Explora una propuesta digital para cotizar, organizar y solicitar disponibilidad para tu evento en pocos pasos.",
  heroTitle: "Tu evento empieza mucho antes del gran día.",
  disclaimer: "Paquetes, precios, disponibilidad e imágenes mostrados únicamente con fines demostrativos. La versión final puede adaptarse a la operación real de El Mayordomo Banquetes & Catering.",
  footerNote: "Propuesta demostrativa desarrollada por BS Code."
};

export const initialPackagesData = [
  {
    id: "esencial",
    name: "Esencial",
    badge: "Reuniones & Celebraciones",
    priceFrom: "$12,000 MXN",
    priceNumber: 12000,
    baseGuests: 50,
    extraGuestPrice: 180,
    capacity: "30 - 80 invitados",
    description: "Ideal para celebraciones íntimas, reuniones familiares y aniversarios con un montaje cuidado y banquete selecto.",
    includes: [
      "Banquete formal en 2 tiempos (opciones a elegir)",
      "Montaje básico elegante (loza blanca, cubertería y copas)",
      "Mobiliario con mantelería y servilletas de tela",
      "Personal de servicio calificado (meseros y capitán)",
      "Servicio de descorche en cortesía con refrescos y hielo",
      "Duración del servicio: 5 horas continuas"
    ],
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
    status: "Activo"
  },
  {
    id: "celebracion",
    name: "Celebración",
    badge: "El Más Solicitado",
    popular: true,
    priceFrom: "$22,000 MXN",
    priceNumber: 22000,
    baseGuests: 50,
    extraGuestPrice: 240,
    capacity: "80 - 180 invitados",
    description: "Nuestra propuesta integral más solicitada para bodas medianas, XV años y recepciones completas con coordinación.",
    includes: [
      "Banquete gourmet en 3 tiempos con degustación previa",
      "Montaje formal con vajilla de diseño y cristalería fina",
      "Decoración base en mesas de invitados y mesa de honor",
      "Personal de servicio: capitán, meseros y garroteros",
      "Barra de bebidas: refrescos, hielo y mezcladores ilimitados",
      "Coordinación operativa y logística durante 6 horas"
    ],
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80",
    status: "Activo"
  },
  {
    id: "premium",
    name: "Premium",
    badge: "Alta Gama & Gala",
    priceFrom: "$35,000 MXN",
    priceNumber: 35000,
    baseGuests: 50,
    extraGuestPrice: 320,
    capacity: "150 - 350+ invitados",
    description: "Experiencia gastronómica y logística integral de alta gama para bodas memorables y eventos corporativos de gran escala.",
    includes: [
      "Catering gourmet en 4 tiempos o estaciones en vivo de autor",
      "Montaje especial de lujo con sillas Crossback y cristalería tallada",
      "Decoración floral de autor en mesa de honor y centros altos",
      "Personal de alta etiqueta, sommelier y barman en barra",
      "Coctelería de bienvenida y barra de bebidas premium ilimitada",
      "Coordinación ejecutiva y supervisión logística integral (7 horas)",
      "Servicios adicionales incluidos: estación de café y torna-fiesta"
    ],
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1000&q=80",
    status: "Activo"
  }
];

export const initialExtrasData = [
  {
    id: "decoracion",
    name: "Decoración especial",
    price: 3000,
    description: "Diseño floral elevado y senderos de mesa temáticos",
    category: "Ambientación"
  },
  {
    id: "postres",
    name: "Mesa de postres",
    price: 2500,
    description: "Selección gourmet de mini repostería, tartas y macarons",
    category: "Gastronomía"
  },
  {
    id: "bebidas",
    name: "Bebidas & coctelería",
    price: 4000,
    description: "Mixología de autor, cocteles de bienvenida y barman",
    category: "Bebidas"
  },
  {
    id: "dj",
    name: "DJ / audio",
    price: 5000,
    description: "Audio profesional para banquete, microfonía y DJ en vivo",
    category: "Entretenimiento"
  },
  {
    id: "iluminacion",
    name: "Iluminación arquitectónica",
    price: 3500,
    description: "Iluminación ambiental perimetral, cabezas móviles y pista",
    category: "Ambientación"
  },
  {
    id: "fotografia",
    name: "Fotografía & video",
    price: 6000,
    description: "Cobertura completa con entrega en galería digital HD",
    category: "Recuerdos"
  },
  {
    id: "mobiliario",
    name: "Mobiliario premium",
    price: 4500,
    description: "Salas lounge contemporáneas y periqueras de madera",
    category: "Mobiliario"
  },
  {
    id: "personal",
    name: "Personal adicional",
    price: 2000,
    description: "Hostess de recepción y meseros de apoyo dedicados",
    category: "Servicio"
  }
];

export const eventTypesList = [
  {
    id: "boda",
    name: "Boda",
    subtitle: "Celebración nupcial y recepción",
    icon: "HeartIcon",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=700&q=80",
    popularPackage: "celebracion"
  },
  {
    id: "xv-anos",
    name: "XV años",
    subtitle: "Recepción de gala y protocolo",
    icon: "SparklesIcon",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=700&q=80",
    popularPackage: "celebracion"
  },
  {
    id: "cumpleanos",
    name: "Cumpleaños",
    subtitle: "Aniversarios y festejos familiares",
    icon: "GiftIcon",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=700&q=80",
    popularPackage: "esencial"
  },
  {
    id: "corporativo",
    name: "Corporativo",
    subtitle: "Galas, congresos y cierres de año",
    icon: "BriefcaseIcon",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=700&q=80",
    popularPackage: "premium"
  },
  {
    id: "graduacion",
    name: "Graduación",
    subtitle: "Fiestas y cenas de generación",
    icon: "AcademicIcon",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=700&q=80",
    popularPackage: "celebracion"
  },
  {
    id: "evento-privado",
    name: "Evento privado",
    subtitle: "Cenas especiales y recepciones VIP",
    icon: "StarIcon",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=700&q=80",
    popularPackage: "esencial"
  },
  {
    id: "otro",
    name: "Otro formato",
    subtitle: "Experiencia personalizada a medida",
    icon: "SparklesIcon",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=700&q=80",
    popularPackage: "celebracion"
  }
];

// Fechas demo dinámicas relativas para que siempre se vean vigentes
const getOffsetDate = (days) => {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().split("T")[0];
};

export const initialRequestsData = [
  {
    id: "req-121",
    folio: "EVT-000121",
    clientName: "Mariana García",
    clientPhone: "8182930412",
    clientEmail: "mariana.garcia@gmail.com",
    cityZone: "Zona Valle / San Pedro",
    eventType: "Boda",
    guests: 180,
    packageId: "premium",
    packageName: "Premium",
    packageBasePrice: 35000,
    extras: ["dj", "iluminacion", "postres"],
    extrasTotal: 11000,
    estimatedTotal: 87600,
    suggestedDeposit: 5000,
    date: getOffsetDate(18),
    status: "Nueva",
    comments: "Boda civil y recepción con 180 invitados. Nos interesa probar el menú en 4 tiempos.",
    createdAt: new Date(Date.now() - 3600000 * 4).toISOString()
  },
  {
    id: "req-122",
    folio: "EVT-000122",
    clientName: "Carlos Martínez",
    clientPhone: "8119842301",
    clientEmail: "carlos.martinez@corporativo.com",
    cityZone: "Zona Cumbres",
    eventType: "Corporativo",
    guests: 120,
    packageId: "celebracion",
    packageName: "Celebración",
    packageBasePrice: 22000,
    extras: ["mobiliario", "bebidas"],
    extrasTotal: 8500,
    estimatedTotal: 47300,
    suggestedDeposit: 5000,
    date: getOffsetDate(24),
    status: "Contactado",
    comments: "Cena de fin de trimestre corporativa. Requerimos factura fiscal.",
    createdAt: new Date(Date.now() - 3600000 * 20).toISOString()
  },
  {
    id: "req-123",
    folio: "EVT-000123",
    clientName: "Andrea Rodríguez",
    clientPhone: "8120349811",
    clientEmail: "andrea.rodriguez@gmail.com",
    cityZone: "Carretera Nacional",
    eventType: "XV años",
    guests: 150,
    packageId: "celebracion",
    packageName: "Celebración",
    packageBasePrice: 22000,
    extras: ["decoracion", "fotografia", "postres"],
    extrasTotal: 11500,
    estimatedTotal: 57500,
    suggestedDeposit: 5000,
    date: getOffsetDate(35),
    status: "Cotización enviada",
    comments: "Recepción de XV años para 150 personas en quinta privada.",
    createdAt: new Date(Date.now() - 3600000 * 48).toISOString()
  },
  {
    id: "req-124",
    folio: "EVT-000124",
    clientName: "José Hernández",
    clientPhone: "8184561290",
    clientEmail: "jose.hernandez@hotmail.com",
    cityZone: "San Jerónimo",
    eventType: "Cumpleaños",
    guests: 60,
    packageId: "esencial",
    packageName: "Esencial",
    packageBasePrice: 12000,
    extras: ["postres", "bebidas"],
    extrasTotal: 6500,
    estimatedTotal: 20300,
    suggestedDeposit: 5000,
    date: getOffsetDate(12),
    status: "Esperando anticipo",
    comments: "Aniversario 50 familiar. Servicio de 2 tiempos con barra libre.",
    createdAt: new Date(Date.now() - 3600000 * 72).toISOString()
  },
  {
    id: "req-125",
    folio: "EVT-000125",
    clientName: "Fernanda López",
    clientPhone: "8116549823",
    clientEmail: "fernanda.lopez@yahoo.com",
    cityZone: "Zona Sur",
    eventType: "Graduación",
    guests: 200,
    packageId: "celebracion",
    packageName: "Celebración",
    packageBasePrice: 22000,
    extras: ["dj", "iluminacion"],
    extrasTotal: 8500,
    estimatedTotal: 66500,
    suggestedDeposit: 5000,
    date: getOffsetDate(42),
    status: "Confirmada",
    comments: "Gala de graduación de universidad. Anticipo cubierto.",
    createdAt: new Date(Date.now() - 3600000 * 96).toISOString()
  }
];

export const initialQuotesData = [
  {
    id: "q-121",
    folio: "EVT-000121",
    clientName: "Mariana García",
    clientEmail: "mariana.garcia@gmail.com",
    eventType: "Boda",
    packageName: "Premium",
    guests: 180,
    total: 87600,
    date: getOffsetDate(18),
    status: "Enviada",
    createdAt: new Date(Date.now() - 3600000 * 3).toISOString()
  },
  {
    id: "q-122",
    folio: "EVT-000122",
    clientName: "Carlos Martínez",
    clientEmail: "carlos.martinez@corporativo.com",
    eventType: "Corporativo",
    packageName: "Celebración",
    guests: 120,
    total: 47300,
    date: getOffsetDate(24),
    status: "Borrador",
    createdAt: new Date(Date.now() - 3600000 * 18).toISOString()
  },
  {
    id: "q-123",
    folio: "EVT-000123",
    clientName: "Andrea Rodríguez",
    clientEmail: "andrea.rodriguez@gmail.com",
    eventType: "XV años",
    packageName: "Celebración",
    guests: 150,
    total: 57500,
    date: getOffsetDate(35),
    status: "Aceptada",
    createdAt: new Date(Date.now() - 3600000 * 40).toISOString()
  },
  {
    id: "q-124",
    folio: "EVT-000124",
    clientName: "José Hernández",
    clientEmail: "jose.hernandez@hotmail.com",
    eventType: "Cumpleaños",
    packageName: "Esencial",
    guests: 60,
    total: 20300,
    date: getOffsetDate(12),
    status: "Aceptada",
    createdAt: new Date(Date.now() - 3600000 * 60).toISOString()
  },
  {
    id: "q-125",
    folio: "EVT-000125",
    clientName: "Fernanda López",
    clientEmail: "fernanda.lopez@yahoo.com",
    eventType: "Graduación",
    packageName: "Celebración",
    guests: 200,
    total: 66500,
    date: getOffsetDate(42),
    status: "Aceptada",
    createdAt: new Date(Date.now() - 3600000 * 90).toISOString()
  }
];

export const initialEventsData = [
  {
    id: "evt-125",
    folio: "EVT-000125",
    clientName: "Fernanda López",
    clientPhone: "8116549823",
    eventType: "Graduación",
    date: getOffsetDate(42),
    guests: 200,
    total: 66500,
    paid: 15000,
    balance: 51500,
    status: "Confirmado",
    packageName: "Celebración",
    zone: "Zona Sur"
  },
  {
    id: "evt-118",
    folio: "EVT-000118",
    clientName: "Daniel Ramírez",
    clientPhone: "8189021345",
    eventType: "Boda",
    date: getOffsetDate(8),
    guests: 140,
    total: 52000,
    paid: 20000,
    balance: 32000,
    status: "En preparación",
    packageName: "Celebración",
    zone: "Santiago N.L."
  },
  {
    id: "evt-115",
    folio: "EVT-000115",
    clientName: "Mariana García",
    clientPhone: "8182930412",
    eventType: "Evento privado",
    date: getOffsetDate(2),
    guests: 45,
    total: 14500,
    paid: 14500,
    balance: 0,
    status: "Confirmado",
    packageName: "Esencial",
    zone: "San Pedro"
  },
  {
    id: "evt-110",
    folio: "EVT-000110",
    clientName: "Carlos Martínez",
    clientPhone: "8119842301",
    eventType: "Corporativo",
    date: getOffsetDate(-10),
    guests: 110,
    total: 42000,
    paid: 42000,
    balance: 0,
    status: "Realizado",
    packageName: "Celebración",
    zone: "Monterrey Centro"
  }
];

export const initialClientsData = [
  {
    id: "cli-1",
    name: "Mariana García",
    phone: "8182930412",
    email: "mariana.garcia@gmail.com",
    eventsCount: 2,
    lastRequestDate: getOffsetDate(18),
    estimatedTotal: "$102,100 MXN",
    status: "Activo"
  },
  {
    id: "cli-2",
    name: "Carlos Martínez",
    phone: "8119842301",
    email: "carlos.martinez@corporativo.com",
    eventsCount: 2,
    lastRequestDate: getOffsetDate(24),
    estimatedTotal: "$89,300 MXN",
    status: "Activo"
  },
  {
    id: "cli-3",
    name: "Andrea Rodríguez",
    phone: "8120349811",
    email: "andrea.rodriguez@gmail.com",
    eventsCount: 1,
    lastRequestDate: getOffsetDate(35),
    estimatedTotal: "$57,500 MXN",
    status: "En seguimiento"
  },
  {
    id: "cli-4",
    name: "José Hernández",
    phone: "8184561290",
    email: "jose.hernandez@hotmail.com",
    eventsCount: 1,
    lastRequestDate: getOffsetDate(12),
    estimatedTotal: "$20,300 MXN",
    status: "Por confirmar"
  },
  {
    id: "cli-5",
    name: "Fernanda López",
    phone: "8116549823",
    email: "fernanda.lopez@yahoo.com",
    eventsCount: 1,
    lastRequestDate: getOffsetDate(42),
    estimatedTotal: "$66,500 MXN",
    status: "Confirmado"
  },
  {
    id: "cli-6",
    name: "Daniel Ramírez",
    phone: "8189021345",
    email: "daniel.ramirez@gmail.com",
    eventsCount: 1,
    lastRequestDate: getOffsetDate(8),
    estimatedTotal: "$52,000 MXN",
    status: "Confirmado"
  }
];

export const initialPaymentsData = [
  {
    id: "pay-1",
    folio: "EVT-000125",
    clientName: "Fernanda López",
    eventType: "Graduación",
    concept: "Anticipo",
    amount: 15000,
    method: "Transferencia demo",
    date: getOffsetDate(-3),
    status: "Pagado"
  },
  {
    id: "pay-2",
    folio: "EVT-000118",
    clientName: "Daniel Ramírez",
    eventType: "Boda",
    concept: "Anticipo",
    amount: 10000,
    method: "Tarjeta demo",
    date: getOffsetDate(-15),
    status: "Pagado"
  },
  {
    id: "pay-3",
    folio: "EVT-000118",
    clientName: "Daniel Ramírez",
    eventType: "Boda",
    concept: "Segundo pago",
    amount: 10000,
    method: "Transferencia demo",
    date: getOffsetDate(-2),
    status: "Pagado"
  },
  {
    id: "pay-4",
    folio: "EVT-000115",
    clientName: "Mariana García",
    eventType: "Evento privado",
    concept: "Liquidación",
    amount: 14500,
    method: "Transferencia demo",
    date: getOffsetDate(-1),
    status: "Pagado"
  },
  {
    id: "pay-5",
    folio: "EVT-000124",
    clientName: "José Hernández",
    eventType: "Cumpleaños",
    concept: "Anticipo",
    amount: 5000,
    method: "Tarjeta demo",
    date: getOffsetDate(1),
    status: "Pendiente"
  }
];

// Días de disponibilidad demostrativa mensual (mock relativo)
export const mockAvailabilityMap = {
  [getOffsetDate(2)]: "limitada",
  [getOffsetDate(5)]: "disponible",
  [getOffsetDate(6)]: "ocupada",
  [getOffsetDate(8)]: "ocupada",
  [getOffsetDate(12)]: "limitada",
  [getOffsetDate(13)]: "disponible",
  [getOffsetDate(14)]: "disponible",
  [getOffsetDate(18)]: "limitada",
  [getOffsetDate(19)]: "ocupada",
  [getOffsetDate(20)]: "disponible",
  [getOffsetDate(24)]: "ocupada",
  [getOffsetDate(25)]: "disponible",
  [getOffsetDate(26)]: "disponible",
  [getOffsetDate(27)]: "limitada",
  [getOffsetDate(35)]: "ocupada",
  [getOffsetDate(42)]: "ocupada"
};
