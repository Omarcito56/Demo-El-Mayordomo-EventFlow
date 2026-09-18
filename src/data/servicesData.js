import serviceColorImg from "../assets/images/beauty/service-color.jpg";
import serviceCorteImg from "../assets/images/beauty/service-corte.jpg";
import servicePeinadoImg from "../assets/images/beauty/service-peinado.jpg";
import serviceTratamientoImg from "../assets/images/beauty/service-tratamiento.jpg";
import serviceMakeupImg from "../assets/images/beauty/service-makeup.jpg";
import serviceManicureImg from "../assets/images/beauty/service-manicure.jpg";

export const initialServicesData = [
  {
    id: "coloracion",
    name: "Coloración",
    category: "Color",
    categoryKey: "color",
    tagline: "Un cambio que se siente tan bien como se ve",
    description: "Renueva tu look con una experiencia personalizada: balayage, baño de luz, retoque de raíz o efectos luminosos multidimensionales.",
    duration: "90 min",
    price: "Desde $650 MXN",
    priceNumber: 650,
    suggestedDeposit: 200,
    priceNote: "Precio sugerido demo",
    status: "Activo",
    badge: "Servicio Estrella",
    iconType: "palette",
    image: serviceColorImg,
    isFeatured: true
  },
  {
    id: "corte-estilizado",
    name: "Corte & Styling",
    category: "Cabello",
    categoryKey: "hair",
    tagline: "Diseño de corte adaptado a tu estilo",
    description: "Diseño de corte personalizado según tu estilo, tipo de cabello y facciones, con lavado sensorial y secado con movimiento.",
    duration: "45-60 min",
    price: "Desde $350 MXN",
    priceNumber: 350,
    suggestedDeposit: 100,
    priceNote: "Precio sugerido demo",
    status: "Activo",
    badge: "Popular",
    iconType: "scissors",
    image: serviceCorteImg,
    isFeatured: false
  },
  {
    id: "peinado",
    name: "Peinado",
    category: "Estilizado",
    categoryKey: "hair",
    tagline: "Ondas sueltas, recogidos y volumen",
    description: "Ondas naturales, recogidos elegantes o peinados modernos para ocasiones especiales o para elevar tu día a día.",
    duration: "45 min",
    price: "Desde $400 MXN",
    priceNumber: 400,
    suggestedDeposit: 150,
    priceNote: "Precio sugerido demo",
    status: "Activo",
    badge: "Tendencia",
    iconType: "sparkles",
    image: servicePeinadoImg,
    isFeatured: false
  },
  {
    id: "tratamiento-capilar",
    name: "Tratamiento capilar",
    category: "Tratamientos",
    categoryKey: "treatments",
    tagline: "Nutrición profunda y brillo espejo",
    description: "Nutrición profunda, hidratación intensiva y sellado de puntas para devolver sedosidad, brillo y vitalidad a tu cabello.",
    duration: "50 min",
    price: "Desde $500 MXN",
    priceNumber: 500,
    suggestedDeposit: 150,
    priceNote: "Precio sugerido demo",
    status: "Activo",
    badge: "Cuidado",
    iconType: "droplet",
    image: serviceTratamientoImg,
    isFeatured: false
  },
  {
    id: "maquillaje",
    name: "Maquillaje",
    category: "Maquillaje",
    categoryKey: "makeup",
    tagline: "Acabado radiante y fijación impecable",
    description: "Maquillaje profesional social o para eventos especiales, con productos de alta gama, técnica fotográfica y acabado impecable.",
    duration: "60 min",
    price: "Desde $600 MXN",
    priceNumber: 600,
    suggestedDeposit: 200,
    priceNote: "Precio sugerido demo",
    status: "Activo",
    badge: "Eventos",
    iconType: "star",
    image: serviceMakeupImg,
    isFeatured: false
  },
  {
    id: "manicure",
    name: "Manicure",
    category: "Uñas",
    categoryKey: "nails",
    tagline: "Cuidado prolijo y esmaltado moderno",
    description: "Cuidado y esmaltado de uñas con técnica limpia, exfoliación de manos, perfilado prolijo e hidratación profunda de cutículas.",
    duration: "45 min",
    price: "Desde $280 MXN",
    priceNumber: 280,
    suggestedDeposit: 100,
    priceNote: "Precio sugerido demo",
    status: "Activo",
    badge: "Básico",
    iconType: "hand",
    image: serviceManicureImg,
    isFeatured: false
  }
];

export const servicesDisclaimer = "Servicios, precios e imágenes con fines demostrativos. La versión final puede adaptarse al catálogo real de Bellart Salón.";
