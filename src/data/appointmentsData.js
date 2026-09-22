// Helper to format ISO date relative to current date (e.g. YYYY-MM-DD)
const getTodayString = (offsetDays = 0) => {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const initialAppointmentsData = [
  {
    id: "apt-121",
    folio: "GLA-000121",
    patientName: "Valeria García",
    clientName: "Valeria García",
    patientPhone: "8996789012",
    clientPhone: "8996789012",
    patientEmail: "valeria.garcia@email.demo",
    clientEmail: "valeria.garcia@email.demo",
    isFirstTime: false,
    serviceId: "unas-acrilicas",
    serviceName: "Uñas acrílicas",
    professional: "Mariana",
    date: getTodayString(0), // Hoy
    time: "9:00 AM",
    cost: "$550",
    costNumber: 550,
    depositAmount: "$200",
    depositNumber: 200,
    balance: "$350",
    depositStatus: "Pagado",
    paymentMethod: "Tarjeta demo",
    comments: "Set escultural punta almendrada con terminado baby boomer.",
    status: "Confirmada",
    createdAt: new Date().toISOString()
  },
  {
    id: "apt-122",
    folio: "GLA-000122",
    patientName: "Mariana López",
    clientName: "Mariana López",
    patientPhone: "8992345678",
    clientPhone: "8992345678",
    patientEmail: "mariana.lopez@email.demo",
    clientEmail: "mariana.lopez@email.demo",
    isFirstTime: false,
    serviceId: "gel-semipermanente",
    serviceName: "Gel semipermanente",
    professional: "Andrea",
    date: getTodayString(0), // Hoy
    time: "10:30 AM",
    cost: "$350",
    costNumber: 350,
    depositAmount: "$100",
    depositNumber: 100,
    balance: "$250",
    depositStatus: "Pendiente",
    paymentMethod: "Transferencia demo",
    comments: "Nivelación rubber con tono nude y brillo espejo.",
    status: "Pendiente",
    createdAt: new Date().toISOString()
  },
  {
    id: "apt-123",
    folio: "GLA-000123",
    patientName: "Fernanda Ruiz",
    clientName: "Fernanda Ruiz",
    patientPhone: "8995678901",
    clientPhone: "8995678901",
    patientEmail: "fernanda.ruiz@email.demo",
    clientEmail: "fernanda.ruiz@email.demo",
    isFirstTime: true,
    serviceId: "nail-art",
    serviceName: "Nail art",
    professional: "Andrea",
    date: getTodayString(1), // Mañana
    time: "12:00 PM",
    cost: "$500",
    costNumber: 500,
    depositAmount: "$200",
    depositNumber: 200,
    balance: "$300",
    depositStatus: "Pagado",
    paymentMethod: "Tarjeta demo",
    comments: "Efecto glazed chrome con sutiles detalles en blanco perlado.",
    status: "Pendiente",
    createdAt: new Date().toISOString()
  },
  {
    id: "apt-124",
    folio: "GLA-000124",
    patientName: "Carolina Martínez",
    clientName: "Carolina Martínez",
    patientPhone: "8994567890",
    clientPhone: "8994567890",
    patientEmail: "carolina.martinez@email.demo",
    clientEmail: "carolina.martinez@email.demo",
    isFirstTime: false,
    serviceId: "pedicure-spa",
    serviceName: "Pedicure spa",
    professional: "Sofía",
    date: getTodayString(0), // Hoy
    time: "4:00 PM",
    cost: "$450",
    costNumber: 450,
    depositAmount: "$150",
    depositNumber: 150,
    balance: "$300",
    depositStatus: "Pagado",
    paymentMethod: "Efectivo en studio",
    comments: "Pedicura spa con sales relajantes e hidratación intensiva.",
    status: "Atendida",
    createdAt: new Date().toISOString()
  },
  {
    id: "apt-125",
    folio: "GLA-000125",
    patientName: "Andrea Torres",
    clientName: "Andrea Torres",
    patientPhone: "8991456789",
    clientPhone: "8991456789",
    patientEmail: "andrea.torres@email.demo",
    clientEmail: "andrea.torres@email.demo",
    isFirstTime: true,
    serviceId: "retiro-aplicacion",
    serviceName: "Retiro y aplicación",
    professional: "Mariana",
    date: getTodayString(2), // Pasado mañana
    time: "5:30 PM",
    cost: "$450",
    costNumber: 450,
    depositAmount: "$150",
    depositNumber: 150,
    balance: "$300",
    depositStatus: "Pendiente",
    paymentMethod: "Efectivo en studio",
    comments: "Retiro de set acrílico anterior y colocación de gel con diseño.",
    status: "Reagendada",
    createdAt: new Date().toISOString()
  }
];
