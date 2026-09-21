import serviceColorImg from "../assets/images/beauty/service-color.jpg";
import serviceCorteImg from "../assets/images/beauty/service-corte.jpg";
import servicePeinadoImg from "../assets/images/beauty/service-peinado.jpg";
import serviceTratamientoImg from "../assets/images/beauty/service-tratamiento.jpg";
import serviceMakeupImg from "../assets/images/beauty/service-makeup.jpg";
import serviceManicureImg from "../assets/images/beauty/service-manicure.jpg";

export const initialServicesData = [
  {
    id: "corte-styling",
    name: "Corte & Styling",
    category: "Cabello",
    categoryKey: "hair",
    tagline: "Diseño personalizado que resalta tus facciones",
    description: "Corte a la medida según tu estilo, tipo de cabello y rutina diaria, con lavado sensorial y peinado final con movimiento.",
    duration: "60 min",
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
    id: "coloracion",
    name: "Coloración",
    category: "Color",
    categoryKey: "color",
    tagline: "Tonos luminosos y técnica multidimensional",
    description: "Balayage, baño de luz, retoque de raíz o efectos luminosos con técnicas actuales y protección capilar durante todo el proceso.",
    duration: "120 min",
    price: "Desde $700 MXN",
    priceNumber: 700,
    suggestedDeposit: 200,
    priceNote: "Precio sugerido demo",
    status: "Activo",
    badge: "Servicio Estrella",
    iconType: "palette",
    image: serviceColorImg,
    isFeatured: true
  },
  {
    id: "peinado",
    name: "Peinado",
    category: "Estilizado",
    categoryKey: "hair",
    tagline: "Ondas suaves, recogidos y volumen natural",
    description: "Ondas naturales, recogidos elegantes o peinados de tendencia para eventos sociales o para lucir impecable en cualquier ocasión especial.",
    duration: "60 min",
    price: "Desde $450 MXN",
    priceNumber: 450,
    suggestedDeposit: 150,
    priceNote: "Precio sugerido demo",
    status: "Activo",
    badge: "Tendencia",
    iconType: "sparkles",
    image: servicePeinadoImg,
    isFeatured: false
  },
  {
    id: "maquillaje",
    name: "Maquillaje",
    category: "Maquillaje",
    categoryKey: "makeup",
    tagline: "Piel luminosa y fijación de larga duración",
    description: "Maquillaje social profesional o para eventos, con preparación de piel, técnica fotográfica de alta definición y acabado radiante.",
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
    id: "tratamiento-capilar",
    name: "Tratamiento capilar",
    category: "Tratamientos",
    categoryKey: "treatments",
    tagline: "Nutrición profunda, sedosidad y brillo",
    description: "Hidratación intensiva, nutrición y sellado de cutícula para devolver fuerza, elasticidad y suavidad al cabello expuesto al calor o procesos.",
    duration: "60 min",
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
    id: "manicure",
    name: "Manicure",
    category: "Uñas",
    categoryKey: "nails",
    tagline: "Cuidado prolijo, exfoliación y esmaltado",
    description: "Cuidado delicado de manos, limado prolijo, exfoliación suave, hidratación de cutículas y esmaltado moderno.",
    duration: "45 min",
    price: "Desde $300 MXN",
    priceNumber: 300,
    suggestedDeposit: 100,
    priceNote: "Precio sugerido demo",
    status: "Activo",
    badge: "Básico",
    iconType: "hand",
    image: serviceManicureImg,
    isFeatured: false
  }
];

export const servicesDisclaimer = "Servicios, precios e imágenes utilizados con fines demostrativos. La propuesta final puede adaptarse a la información real de Mujer Bonita.";
