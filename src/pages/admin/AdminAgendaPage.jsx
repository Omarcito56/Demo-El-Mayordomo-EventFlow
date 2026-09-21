import React, { useState } from "react";
import { useClinicData } from "../../hooks/useClinicData";
import { 
  CalendarIcon, ClockIcon, EyeIcon, CheckIcon, CheckCircleIcon, 
  WhatsAppIcon, RefreshIcon 
} from "../../components/common/Icons";
import { StatusBadge } from "../../components/common/StatusBadge";
import { AppointmentDetailModal } from "../../components/admin/AppointmentDetailModal";
import { RescheduleModal } from "../../components/admin/RescheduleModal";
import { trackEvent } from "../../analytics/analytics";

export const AdminAgendaPage = () => {
  const { appointments, updateAppointmentStatus, rescheduleAppointment } = useClinicData();
  const [activeTab, setActiveTab] = useState("hoy"); // "hoy" | "manana" | "semana"
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [rescheduleApt, setRescheduleApt] = useState(null);

  // Helper date calculators
  const getISODate = (offsetDays = 0) => {
    const d = new Date();
    d.setDate(d.getDate() + offsetDays);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const todayStr = getISODate(0);
  const tomorrowStr = getISODate(1);

  // Helper for "Esta semana" (within next 7 days)
  const isWithinThisWeek = (dateStr) => {
    const d = new Date(dateStr);
    const today = new Date(todayStr);
    const in7Days = new Date();
    in7Days.setDate(today.getDate() + 7);
    return d >= today && d <= in7Days;
  };

  const filteredAppointments = appointments.filter((apt) => {
    if (activeTab === "hoy") {
      return apt.date === todayStr;
    } else if (activeTab === "manana") {
      return apt.date === tomorrowStr;
    } else if (activeTab === "semana") {
      return isWithinThisWeek(apt.date);
    }
    return true;
  });

  // Open WhatsApp reminder:
  // "Hola, te recordamos tu cita en Mujer Bonita para [servicio] el día [fecha] a las [hora]. Te esperamos."
  const sendWhatsAppReminder = (apt) => {
    trackEvent("whatsapp_reminder_clicked", {
      module: "agenda",
      record_type: "appointment"
    });

    const clientPhone = apt.clientPhone || apt.patientPhone || "";
    const text = `Hola, te recordamos tu cita en Mujer Bonita para ${apt.serviceName} el día ${apt.date} a las ${apt.time}. Te esperamos.`;
    const url = `https://wa.me/52${clientPhone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div>
      <div className="admin-card">
        <div className="admin-card-header">
          <div>
            <h2 className="admin-card-title">Agenda de Citas</h2>
            <p style={{ fontSize: "0.88rem", color: "var(--color-text-secondary)", marginTop: "2px" }}>
              Visualiza los turnos ordenados por franja horaria y profesional en Mujer Bonita.
            </p>
          </div>

          {/* Agenda Tabs: Hoy, Mañana, Esta semana */}
          <div className="agenda-tabs" style={{ marginBottom: 0 }}>
            <button
              type="button"
              className={`agenda-tab-btn ${activeTab === "hoy" ? "active" : ""}`}
              onClick={() => setActiveTab("hoy")}
            >
              📅 Hoy ({appointments.filter((a) => a.date === todayStr).length})
            </button>
            <button
              type="button"
              className={`agenda-tab-btn ${activeTab === "manana" ? "active" : ""}`}
              onClick={() => setActiveTab("manana")}
            >
              🗓️ Mañana ({appointments.filter((a) => a.date === tomorrowStr).length})
            </button>
            <button
              type="button"
              className={`agenda-tab-btn ${activeTab === "semana" ? "active" : ""}`}
              onClick={() => setActiveTab("semana")}
            >
              📆 Esta semana ({appointments.filter((a) => isWithinThisWeek(a.date)).length})
            </button>
          </div>
        </div>

        {/* Agenda Table with Columns: Hora, Cliente, Servicio, Profesional, Estado, Acciones */}
        <div className="table-responsive">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Hora</th>
                <th>Cliente</th>
                <th>Servicio</th>
                <th>Profesional</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredAppointments.length === 0 ? (
                <tr>
                  <td colSpan="6" style={{ textAlign: "center", padding: "3.5rem", color: "var(--color-text-secondary)" }}>
                    No hay citas programadas para este periodo seleccionado.
                  </td>
                </tr>
              ) : (
                filteredAppointments.map((apt) => {
                  const clientName = apt.clientName || apt.patientName || "Cliente";
                  const clientPhone = apt.clientPhone || apt.patientPhone || "";
                  return (
                    <tr key={apt.id}>
                      <td>
                        <div style={{ fontWeight: 700, color: "var(--color-primary)", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                          <ClockIcon size={14} style={{ color: "var(--color-accent)" }} />
                          <span>{apt.time}</span>
                        </div>
                        <div style={{ fontSize: "0.76rem", color: "var(--color-text-muted)" }}>{apt.date}</div>
                      </td>
                      <td>
                        <div className="table-patient-name ph-mask">{clientName}</div>
                        <div className="table-patient-contact ph-mask">{clientPhone}</div>
                      </td>
                      <td>
                        <strong>{apt.serviceName}</strong>
                        <div style={{ fontSize: "0.76rem", color: "var(--color-text-muted)" }}>{apt.cost}</div>
                      </td>
                      <td>
                        <span style={{ fontWeight: 600, color: "var(--color-primary)" }}>
                          {apt.professional || "Sin preferencia"}
                        </span>
                      </td>
                      <td>
                        <StatusBadge status={apt.status} />
                      </td>
                      <td>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", flexWrap: "wrap" }}>
                          <button
                            type="button"
                            className="btn btn-sm btn-action-view"
                            onClick={() => {
                              trackEvent("record_detail_opened", {
                                record_type: "appointment",
                                status: apt.status
                              });
                              setSelectedAppointment(apt);
                            }}
                            title="Ver detalle de la cita"
                          >
                            <EyeIcon size={13} />
                            <span>Detalle</span>
                          </button>

                          {apt.status === "Pendiente" && (
                            <button
                              type="button"
                              className="btn btn-sm btn-action-confirm"
                              onClick={() => updateAppointmentStatus(apt.id, "Confirmada")}
                              title="Confirmar cita"
                            >
                              <CheckIcon size={13} />
                              <span>Confirmar</span>
                            </button>
                          )}

                          <button
                            type="button"
                            className="btn btn-sm btn-action-reschedule"
                            onClick={() => setRescheduleApt(apt)}
                            title="Reagendar horario"
                          >
                            <RefreshIcon size={13} />
                            <span>Reagendar</span>
                          </button>

                          <button
                            type="button"
                            className="btn btn-sm btn-action-wa"
                            onClick={() => sendWhatsAppReminder(apt)}
                            title="Enviar recordatorio por WhatsApp"
                          >
                            <WhatsAppIcon size={13} />
                            <span>Recordatorio</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Appointment Detail Modal */}
      <AppointmentDetailModal
        isOpen={Boolean(selectedAppointment)}
        onClose={() => setSelectedAppointment(null)}
        appointment={selectedAppointment}
      />

      {/* Reschedule Modal */}
      <RescheduleModal
        isOpen={Boolean(rescheduleApt)}
        onClose={() => setRescheduleApt(null)}
        appointment={rescheduleApt}
        onConfirm={rescheduleAppointment}
      />
    </div>
  );
};
