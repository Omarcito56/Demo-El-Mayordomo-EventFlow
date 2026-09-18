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
    folio: "BEL-000121",
    patientName: "Ana Torres",
    clientName: "Ana Torres",
    patientPhone: "8991456789",
    clientPhone: "8991456789",
    patientEmail: "ana.torres@email.com",
    clientEmail: "ana.torres@email.com",
    isFirstTime: false,
    serviceId: "coloracion",
    serviceName: "Coloración",
    professional: "Andrea",
    date: getTodayString(0), // Hoy
    time: "9:00 a.m.",
    cost: "$650",
    costNumber: 650,
    depositAmount: "$200",
    depositNumber: 200,
    balance: "$450",
    depositStatus: "Pagado",
    paymentMethod: "Tarjeta demo",
    comments: "Desea retoque de raíz con reflejos cálidos.",
    status: "Confirmada",
    createdAt: new Date().toISOString()
  },
  {
    id: "apt-122",
    folio: "BEL-000122",
    patientName: "Mariana López",
    clientName: "Mariana López",
    patientPhone: "8992345678",
    clientPhone: "8992345678",
    patientEmail: "mariana.lopez@email.com",
    clientEmail: "mariana.lopez@email.com",
    isFirstTime: false,
    serviceId: "corte-estilizado",
    serviceName: "Corte y estilizado",
    professional: "Sofía",
    date: getTodayString(0), // Hoy
    time: "10:30 a.m.",
    cost: "$350",
    costNumber: 350,
    depositAmount: "$100",
    depositNumber: 100,
    balance: "$250",
    depositStatus: "Pendiente",
    paymentMethod: "Transferencia demo",
    comments: "Corte en capas y secado liso.",
    status: "Pendiente",
    createdAt: new Date().toISOString()
  },
  {
    id: "apt-123",
    folio: "BEL-000123",
    patientName: "Sofía Hernández",
    clientName: "Sofía Hernández",
    patientPhone: "8993456789",
    clientPhone: "8993456789",
    patientEmail: "sofia.hernandez@email.com",
    clientEmail: "sofia.hernandez@email.com",
    isFirstTime: true,
    serviceId: "peinado",
    serviceName: "Peinado",
    professional: "Sofía",
    date: getTodayString(1), // Mañana
    time: "12:00 p.m.",
    cost: "$400",
    costNumber: 400,
    depositAmount: "$150",
    depositNumber: 150,
    balance: "$250",
    depositStatus: "Pagado",
    paymentMethod: "Tarjeta demo",
    comments: "Peinado de ondas semi-recogido para sesión fotográfica.",
    status: "Pendiente",
    createdAt: new Date().toISOString()
  },
  {
    id: "apt-124",
    folio: "BEL-000124",
    patientName: "Carolina Martínez",
    clientName: "Carolina Martínez",
    patientPhone: "8994567890",
    clientPhone: "8994567890",
    patientEmail: "carolina.martinez@email.com",
    clientEmail: "carolina.martinez@email.com",
    isFirstTime: false,
    serviceId: "tratamiento-capilar",
    serviceName: "Tratamiento capilar",
    professional: "Andrea",
    date: getTodayString(0), // Hoy
    time: "4:00 p.m.",
    cost: "$500",
    costNumber: 500,
    depositAmount: "$150",
    depositNumber: 150,
    balance: "$350",
    depositStatus: "Pagado",
    paymentMethod: "Efectivo en salón",
    comments: "Hidratación intensiva post-decoloración.",
    status: "Atendida",
    createdAt: new Date().toISOString()
  },
  {
    id: "apt-125",
    folio: "BEL-000125",
    patientName: "Fernanda Ruiz",
    clientName: "Fernanda Ruiz",
    patientPhone: "8995678901",
    clientPhone: "8995678901",
    patientEmail: "fernanda.ruiz@email.com",
    clientEmail: "fernanda.ruiz@email.com",
    isFirstTime: true,
    serviceId: "maquillaje",
    serviceName: "Maquillaje",
    professional: "Mariana",
    date: getTodayString(2), // Pasado mañana
    time: "5:30 p.m.",
    cost: "$600",
    costNumber: 600,
    depositAmount: "$200",
    depositNumber: 200,
    balance: "$400",
    depositStatus: "Pendiente",
    paymentMethod: "Efectivo en salón",
    comments: "Solicitó cambio de turno por horario laboral.",
    status: "Reagendada",
    createdAt: new Date().toISOString()
  }
];
