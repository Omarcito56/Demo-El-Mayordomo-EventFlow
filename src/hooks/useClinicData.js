import { useState, useEffect, useCallback } from "react";
import { initialBusinessData } from "../data/businessData";
import { initialServicesData } from "../data/servicesData";
import { initialPatientsData } from "../data/patientsData";
import { initialAppointmentsData } from "../data/appointmentsData";
import { trackEvent } from "../analytics/analytics";

const STORAGE_KEYS = {
  BUSINESS: "beautyflow_business",
  SERVICES: "beautyflow_services",
  PATIENTS: "beautyflow_clients",
  APPOINTMENTS: "beautyflow_appointments",
  AUTH: "beautyflow_auth"
};

// Safe JSON loader
const getStored = (key, fallback) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch (e) {
    console.error(`Error reading ${key} from localStorage`, e);
    return fallback;
  }
};

const setStored = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    window.dispatchEvent(new Event("beautyflow_storage_updated"));
  } catch (e) {
    console.error(`Error writing ${key} to localStorage`, e);
  }
};

export const useClinicData = () => {
  const [business, setBusiness] = useState(() => getStored(STORAGE_KEYS.BUSINESS, initialBusinessData));
  const [services, setServices] = useState(() => getStored(STORAGE_KEYS.SERVICES, initialServicesData));
  const [patients, setPatients] = useState(() => getStored(STORAGE_KEYS.PATIENTS, initialPatientsData));
  const [appointments, setAppointments] = useState(() => getStored(STORAGE_KEYS.APPOINTMENTS, initialAppointmentsData));

  // Sync state on mount and ensure localStorage is seeded
  const refreshFromStorage = useCallback(() => {
    // Check if storage has old Bellart data or is empty
    const storedBus = getStored(STORAGE_KEYS.BUSINESS, null);
    const isOldData = storedBus && (storedBus.salonName?.includes("Bellart") || storedBus.phone?.includes("899 124 1188"));

    if (!localStorage.getItem(STORAGE_KEYS.BUSINESS) || isOldData) {
      localStorage.setItem(STORAGE_KEYS.BUSINESS, JSON.stringify(initialBusinessData));
    }
    if (!localStorage.getItem(STORAGE_KEYS.SERVICES) || isOldData) {
      localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(initialServicesData));
    }
    if (!localStorage.getItem(STORAGE_KEYS.PATIENTS) || isOldData) {
      localStorage.setItem(STORAGE_KEYS.PATIENTS, JSON.stringify(initialPatientsData));
    }
    if (!localStorage.getItem(STORAGE_KEYS.APPOINTMENTS) || isOldData) {
      localStorage.setItem(STORAGE_KEYS.APPOINTMENTS, JSON.stringify(initialAppointmentsData));
    }

    setBusiness(getStored(STORAGE_KEYS.BUSINESS, initialBusinessData));
    setServices(getStored(STORAGE_KEYS.SERVICES, initialServicesData));
    setPatients(getStored(STORAGE_KEYS.PATIENTS, initialPatientsData));
    setAppointments(getStored(STORAGE_KEYS.APPOINTMENTS, initialAppointmentsData));
  }, []);

  useEffect(() => {
    refreshFromStorage();

    const handleStorageChange = () => {
      refreshFromStorage();
    };

    window.addEventListener("beautyflow_storage_updated", handleStorageChange);
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("beautyflow_storage_updated", handleStorageChange);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [refreshFromStorage]);

  // Create new salon appointment
  const createAppointment = (formData) => {
    const currentApts = getStored(STORAGE_KEYS.APPOINTMENTS, initialAppointmentsData);
    const currentClients = getStored(STORAGE_KEYS.PATIENTS, initialPatientsData);

    // Compute next sequential folio: MB-000126 etc.
    let nextNum = 126;
    currentApts.forEach((apt) => {
      if (apt.folio && (apt.folio.startsWith("MB-") || apt.folio.startsWith("BEL-"))) {
        const numPart = parseInt(apt.folio.replace(/^(MB|BEL)-/, ""), 10);
        if (!isNaN(numPart) && numPart >= nextNum) {
          nextNum = numPart + 1;
        }
      }
    });

    const paddedNum = String(nextNum).padStart(6, "0");
    const folio = `MB-${paddedNum}`;

    const costNum = typeof formData.serviceCostNumber === "number" ? formData.serviceCostNumber : 700;
    const hasDeposit = Boolean(formData.hasDeposit);
    const depNum = hasDeposit ? (typeof formData.depositNumber === "number" ? formData.depositNumber : 200) : 0;
    const balanceNum = Math.max(0, costNum - depNum);

    const clientName = formData.clientName || formData.patientName || "Cliente";
    const clientPhone = formData.clientPhone || formData.patientPhone || "";
    const clientEmail = formData.clientEmail || formData.patientEmail || "";

    const newAppointment = {
      id: `apt-${Date.now()}`,
      folio,
      patientName: clientName,
      clientName: clientName,
      patientPhone: clientPhone,
      clientPhone: clientPhone,
      patientEmail: clientEmail,
      clientEmail: clientEmail,
      isFirstTime: Boolean(formData.isFirstTime),
      serviceId: formData.serviceId,
      serviceName: formData.serviceName || "Servicio Mujer Bonita",
      professional: formData.professional || "Sin preferencia",
      date: formData.date,
      time: formData.time,
      cost: `$${costNum}`,
      costNumber: costNum,
      depositAmount: hasDeposit ? `$${depNum}` : "$0",
      depositNumber: depNum,
      balance: `$${balanceNum}`,
      depositStatus: hasDeposit ? "Pagado" : "No requerido",
      paymentMethod: hasDeposit ? (formData.paymentMethod || "Tarjeta demo") : "En salón",
      comments: formData.comments || "",
      status: "Pendiente",
      createdAt: new Date().toISOString()
    };

    const updatedApts = [newAppointment, ...currentApts];
    setStored(STORAGE_KEYS.APPOINTMENTS, updatedApts);

    // Check if client exists by phone or email
    const clientIndex = currentClients.findIndex(
      (c) =>
        (clientPhone && c.phone === clientPhone) ||
        (clientEmail && c.email && c.email.toLowerCase() === clientEmail.toLowerCase())
    );

    let updatedClients = [...currentClients];
    if (clientIndex >= 0) {
      updatedClients[clientIndex] = {
        ...updatedClients[clientIndex],
        lastAppointmentDate: formData.date,
        nextAppointmentDate: formData.date,
        totalAppointments: (updatedClients[clientIndex].totalAppointments || 1) + 1,
        preferredStylist: formData.professional || updatedClients[clientIndex].preferredStylist || "Andrea",
        status: "Activo"
      };
    } else {
      const newClient = {
        id: `cli-${Date.now()}`,
        name: clientName,
        phone: clientPhone,
        email: clientEmail,
        lastAppointmentDate: formData.date,
        nextAppointmentDate: formData.date,
        totalAppointments: 1,
        preferredStylist: formData.professional || "Andrea",
        status: "Activo"
      };
      updatedClients = [newClient, ...updatedClients];
    }
    setStored(STORAGE_KEYS.PATIENTS, updatedClients);

    return newAppointment;
  };

  // Update appointment status
  const updateAppointmentStatus = (id, newStatus) => {
    const currentApts = getStored(STORAGE_KEYS.APPOINTMENTS, initialAppointmentsData);
    const existingApt = currentApts.find((a) => a.id === id);
    const oldStatus = existingApt ? existingApt.status : "desconocido";

    const updatedApts = currentApts.map((apt) =>
      apt.id === id ? { ...apt, status: newStatus } : apt
    );
    setStored(STORAGE_KEYS.APPOINTMENTS, updatedApts);

    if (oldStatus !== newStatus) {
      trackEvent("record_status_changed", {
        from_status: oldStatus,
        to_status: newStatus,
        record_type: "appointment"
      });
    }
  };

  // Reschedule appointment
  const rescheduleAppointment = (id, newDate, newTime) => {
    const currentApts = getStored(STORAGE_KEYS.APPOINTMENTS, initialAppointmentsData);
    const updatedApts = currentApts.map((apt) =>
      apt.id === id
        ? {
            ...apt,
            date: newDate,
            time: newTime,
            status: "Reagendada"
          }
        : apt
    );
    setStored(STORAGE_KEYS.APPOINTMENTS, updatedApts);

    trackEvent("record_rescheduled", {
      record_type: "appointment"
    });
  };

  // Update business configuration
  const updateBusiness = (updatedData) => {
    setStored(STORAGE_KEYS.BUSINESS, { ...business, ...updatedData });
  };

  // Reset demo data to factory defaults
  const resetDemoData = () => {
    localStorage.setItem(STORAGE_KEYS.BUSINESS, JSON.stringify(initialBusinessData));
    localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(initialServicesData));
    localStorage.setItem(STORAGE_KEYS.PATIENTS, JSON.stringify(initialPatientsData));
    localStorage.setItem(STORAGE_KEYS.APPOINTMENTS, JSON.stringify(initialAppointmentsData));
    refreshFromStorage();
  };

  // Helper metrics for Admin Dashboard
  const getTodayISO = () => {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const todayStr = getTodayISO();

  const totalDeposits = appointments
    .filter((a) => a.depositStatus === "Pagado")
    .reduce((sum, a) => sum + (a.depositNumber || 0), 0);

  const metrics = {
    total: appointments.length,
    today: appointments.filter((a) => a.date === todayStr && a.status !== "Cancelada").length,
    pending: appointments.filter((a) => a.status === "Pendiente").length,
    confirmed: appointments.filter((a) => a.status === "Confirmada").length,
    attended: appointments.filter((a) => a.status === "Atendida").length,
    rescheduled: appointments.filter((a) => a.status === "Reagendada").length,
    cancelled: appointments.filter((a) => a.status === "Cancelada").length,
    newClientsToday: appointments.filter((a) => a.date === todayStr && a.isFirstTime).length,
    newPatientsToday: appointments.filter((a) => a.date === todayStr && a.isFirstTime).length,
    totalDeposits,
    activeServices: services.filter((s) => s.status === "Activo").length
  };

  return {
    business,
    services,
    patients,
    clients: patients,
    appointments,
    metrics,
    createAppointment,
    updateAppointmentStatus,
    rescheduleAppointment,
    updateBusiness,
    resetDemoData,
    refreshFromStorage
  };
};
