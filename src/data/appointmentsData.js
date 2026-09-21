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
    folio: "MB-000121",
    patientName: "Valeria García",
    clientName: "Valeria García",
    patientPhone: "8996789012",
    clientPhone: "8996789012",
    patientEmail: "valeria.garcia@email.demo",
    clientEmail: "valeria.garcia@email.demo",
    isFirstTime: false,
    serviceId: "coloracion",
    serviceName: "Coloración",
    professional: "Andrea",
    date: getTodayString(0), // Hoy
    time: "9:00 a.m.",
    cost: "$700",
    costNumber: 700,
    depositAmount: "$200",
    depositNumber: 200,
    balance: "$500",
    depositStatus: "Pagado",
    paymentMethod: "Tarjeta demo",
    comments: "Retoque de balayage e iluminación en contorno.",
    status: "Confirmada",
    createdAt: new Date().toISOString()
  },
  {
    id: "apt-122",
    folio: "MB-000122",
    patientName: "Mariana López",
    clientName: "Mariana López",
    patientPhone: "8992345678",
    clientPhone: "8992345678",
    patientEmail: "mariana.lopez@email.demo",
    clientEmail: "mariana.lopez@email.demo",
    isFirstTime: false,
    serviceId: "corte-styling",
    serviceName: "Corte & Styling",
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
    comments: "Corte despunte y peinado liso pulido.",
    status: "Pendiente",
    createdAt: new Date().toISOString()
  },
  {
    id: "apt-123",
    folio: "MB-000123",
    patientName: "Fernanda Ruiz",
    clientName: "Fernanda Ruiz",
    patientPhone: "8995678901",
    clientPhone: "8995678901",
    patientEmail: "fernanda.ruiz@email.demo",
    clientEmail: "fernanda.ruiz@email.demo",
    isFirstTime: true,
    serviceId: "peinado",
    serviceName: "Peinado",
    professional: "Sofía",
    date: getTodayString(1), // Mañana
    time: "12:00 p.m.",
    cost: "$450",
    costNumber: 450,
    depositAmount: "$150",
    depositNumber: 150,
    balance: "$300",
    depositStatus: "Pagado",
    paymentMethod: "Tarjeta demo",
    comments: "Peinado de ondas semi-recogido para sesión fotográfica.",
    status: "Pendiente",
    createdAt: new Date().toISOString()
  },
  {
    id: "apt-124",
    folio: "MB-000124",
    patientName: "Carolina Martínez",
    clientName: "Carolina Martínez",
    patientPhone: "8994567890",
    clientPhone: "8994567890",
    patientEmail: "carolina.martinez@email.demo",
    clientEmail: "carolina.martinez@email.demo",
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
    comments: "Nutrición y sellado intensivo de puntas.",
    status: "Atendida",
    createdAt: new Date().toISOString()
  },
  {
    id: "apt-125",
    folio: "MB-000125",
    patientName: "Andrea Torres",
    clientName: "Andrea Torres",
    patientPhone: "8991456789",
    clientPhone: "8991456789",
    patientEmail: "andrea.torres@email.demo",
    clientEmail: "andrea.torres@email.demo",
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
    comments: "Reagendó para horario vespertino por evento de noche.",
    status: "Reagendada",
    createdAt: new Date().toISOString()
  }
];
