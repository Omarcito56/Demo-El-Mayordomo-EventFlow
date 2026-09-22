import serviceManicureClasicoImg from "../assets/images/nails/service-manicure-clasico.jpg";
import serviceGelSemipermanenteImg from "../assets/images/nails/service-gel-semipermanente.jpg";
import serviceUnasAcrilicasImg from "../assets/images/nails/service-unas-acrilicas.jpg";
import serviceNailArtImg from "../assets/images/nails/service-nail-art.jpg";
import servicePedicureSpaImg from "../assets/images/nails/service-pedicure-spa.jpg";
import serviceRetiroAplicacionImg from "../assets/images/nails/service-retiro-aplicacion.jpg";

export const initialServicesData = [
  {
    id: "unas-acrilicas",
    name: "Uñas acrílicas",
    category: "Acrílico",
    categoryKey: "acrylic",
    tagline: "Estructura impecable, largo y forma a tu medida",
    description: "Aplicación completa de extensiones acrílicas con técnica escultural o tip, limado de precisión, sellado de cutícula y terminado brillante o mate de alta resistencia.",
    duration: "90 min",
    price: "Desde $550 MXN",
    priceNumber: 550,
    suggestedDeposit: 200,
    priceNote: "Precio sugerido demo",
    status: "Activo",
    badge: "Servicio Estrella",
    iconType: "sparkles",
    image: serviceUnasAcrilicasImg,
    isFeatured: true
  },
  {
    id: "gel-semipermanente",
    name: "Gel semipermanente",
    category: "Gel",
    categoryKey: "gel",
    tagline: "Color ultra brillante con duración de hasta 21 días",
    description: "Preparación rusa o clásica de la placa ungueal, nivelación con base rubber, esmaltado en gel de alta pigmentación y top coat ultra brillante resistente a rayaduras.",
    duration: "60 min",
    price: "$350 MXN",
    priceNumber: 350,
    suggestedDeposit: 100,
    priceNote: "Precio sugerido demo",
    status: "Activo",
    badge: "Más Solicitado",
    iconType: "palette",
    image: serviceGelSemipermanenteImg,
    isFeatured: false
  },
  {
    id: "nail-art",
    name: "Nail art",
    category: "Diseño",
    categoryKey: "art",
    tagline: "Diseños editoriales, efecto chrome, french moderno y trazos a mano",
    description: "Personalización artística para tu set: efecto glazed chrome, pedrería fina, trazos abstractos a mano alzada, encapsulados o degradados baby boomer.",
    duration: "30 min adicionales",
    price: "Desde $150 MXN",
    priceNumber: 150,
    suggestedDeposit: 50,
    priceNote: "Precio sugerido demo",
    status: "Activo",
    badge: "Tendencia",
    iconType: "star",
    image: serviceNailArtImg,
    isFeatured: false
  },
  {
    id: "manicure-clasico",
    name: "Manicure clásico",
    category: "Manicure",
    categoryKey: "manicure",
    tagline: "Cuidado prolijo, exfoliación suave e hidratación profunda",
    description: "Limpieza profunda de cutículas, limado anatómico de uñas naturales, exfoliación con sales aromáticas, masaje hidratante y esmaltado tradicional o brillo fortalecedor.",
    duration: "45 min",
    price: "$250 MXN",
    priceNumber: 250,
    suggestedDeposit: 100,
    priceNote: "Precio sugerido demo",
    status: "Activo",
    badge: "Básico Esencial",
    iconType: "hand",
    image: serviceManicureClasicoImg,
    isFeatured: false
  },
  {
    id: "pedicure-spa",
    name: "Pedicure spa",
    category: "Spa & Pies",
    categoryKey: "spa",
    tagline: "Renovación total, baño sensorial y descanso absoluto",
    description: "Tina de hidromasaje con sales minerales, exfoliación intensiva, retiro de asperezas, hidratación con mascarilla nutritiva, masaje relajante y esmaltado prolijo.",
    duration: "60 min",
    price: "$450 MXN",
    priceNumber: 450,
    suggestedDeposit: 150,
    priceNote: "Precio sugerido demo",
    status: "Activo",
    badge: "Relax Total",
    iconType: "droplet",
    image: servicePedicureSpaImg,
    isFeatured: false
  },
  {
    id: "retiro-aplicacion",
    name: "Retiro y aplicación",
    category: "Mantenimiento",
    categoryKey: "maintenance",
    tagline: "Cuidado de la uña natural con retiro seguro y nuevo set",
    description: "Retiro cuidadoso de gel o acrílico previo sin lastimar la lámina natural, tratamiento regenerador de cutícula y aplicación de nuevo set con acabado perfecto.",
    duration: "75 min",
    price: "Desde $450 MXN",
    priceNumber: 450,
    suggestedDeposit: 150,
    priceNote: "Precio sugerido demo",
    status: "Activo",
    badge: "Mantenimiento",
    iconType: "scissors",
    image: serviceRetiroAplicacionImg,
    isFeatured: false
  }
];

export const servicesDisclaimer = "Servicios, precios, profesionales e imágenes utilizados con fines demostrativos. La versión final puede adaptarse a la información real de GLAMUROSA NAIL’S.";
