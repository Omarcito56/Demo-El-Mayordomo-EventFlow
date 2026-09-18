import React, { useState } from "react";
import { useClinicData } from "../../hooks/useClinicData";
import { 
  SearchIcon, FilterIcon, EyeIcon, CheckIcon, CheckCircleIcon, 
  RefreshIcon, XIcon, WhatsAppIcon, AlertCircleIcon 
} from "../../components/common/Icons";
import { StatusBadge } from "../../components/common/StatusBadge";
import { AppointmentDetailModal } from "../../components/admin/AppointmentDetailModal";
import { RescheduleModal } from "../../components/admin/RescheduleModal";
import { trackEvent, useTrackOnMount } from "../../analytics/analytics";

export const AdminAppointmentsPage = () => {
  const { appointments, updateAppointmentStatus, rescheduleAppointment } = useClinicData();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("TODOS");
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [rescheduleApt, setRescheduleApt] = useState(null);

  // Registrar apertura protegida contra duplicados de StrictMode
  useTrackOnMount("admin_requests_opened", { module: "appointments" });

  // Filter in real time by search and status
  const filteredAppointments = appointments.filter((apt) => {
    const clientName = apt.clientName || apt.patientName || "";
    const clientPhone = apt.clientPhone || apt.patientPhone || "";
    const matchesSearch =
      apt.folio.toLowerCase().includes(searchTerm.toLowerCase()) ||
      clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      clientPhone.includes(searchTerm) ||
      apt.serviceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (apt.professional && apt.professional.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesStatus = statusFilter === "TODOS" || apt.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Reminder via wa.me:
  // "Hola, te recordamos tu cita en Bellart Salón para [servicio] el día [fecha] a las [hora]. Te esperamos."
  const sendWhatsAppReminder = (apt) => {
    trackEvent("whatsapp_reminder_clicked", {
      module: "appointments",
      record_type: "appointment"
    });

    const clientPhone = apt.clientPhone || apt.patientPhone || "";
    const text = `Hola, te recordamos tu cita en Bellart Salón para ${apt.serviceName} el día ${apt.date} a las ${apt.time}. Te esperamos.`;
    const url = `https://wa.me/52${clientPhone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div>
      <div className="admin-card">
        <div className="admin-card-header">
          <div>
            <h2 className="admin-card-title">Listado General de Citas</h2>
            <p style={{ fontSize: "0.88rem", color: "var(--color-text-secondary)", marginTop: "2px" }}>
              Administra todas las solicitudes de Bellart Salón, confirma turnos y registra anticipos y asistencia.
            </p>
          </div>

          <div style={{ fontSize: "0.86rem", color: "var(--color-text-secondary)" }}>
            Total registros: <strong>{filteredAppointments.length}</strong>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="filter-bar">
          <div className="search-input-wrap">
            <SearchIcon size={18} />
            <input
              type="text"
              placeholder="Buscar por folio, cliente, teléfono, servicio o profesional..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <FilterIcon size={16} style={{ color: "var(--color-text-secondary)" }} />
            <select
              className="filter-select"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="TODOS">Todos los estados</option>
              <option value="Pendiente">Pendiente</option>
              <option value="Confirmada">Confirmada</option>
              <option value="Atendida">Atendida</option>
              <option value="Reagendada">Reagendada</option>
              <option value="Cancelada">Cancelada</option>
              <option value="No asistió">No asistió</option>
            </select>
          </div>
        </div>

        {/* Appointments Table with Columns: Folio, Cliente, Servicio, Profesional, Fecha/Hora, Costo, Anticipo, Estado, Acciones */}
        <div className="table-responsive">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Folio</th>
                <th>Cliente</th>
                <th>Servicio</th>
                <th>Profesional</th>
                <th>Fecha / Hora</th>
                <th>Costo</th>
                <th>Anticipo</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredAppointments.length === 0 ? (
                <tr>
                  <td colSpan="9" style={{ textAlign: "center", padding: "3rem", color: "var(--color-text-secondary)" }}>
                    No se encontraron citas que coincidan con los criterios de búsqueda.
                  </td>
                </tr>
              ) : (
                filteredAppointments.map((apt) => {
                  const clientName = apt.clientName || apt.patientName || "Cliente";
                  const clientPhone = apt.clientPhone || apt.patientPhone || "";
                  return (
                    <tr key={apt.id}>
                      <td>
                        <span className="table-folio-link ph-mask">{apt.folio}</span>
                      </td>
                      <td>
                        <div className="table-patient-name ph-mask">{clientName}</div>
                        <div className="table-patient-contact ph-mask">{clientPhone}</div>
                      </td>
                      <td>
                        <strong>{apt.serviceName}</strong>
                      </td>
                      <td>
                        <span style={{ fontWeight: 600, color: "var(--color-primary)" }}>
                          {apt.professional || "Sin preferencia"}
                        </span>
                      </td>
                      <td>
                        <div style={{ fontWeight: 600, color: "var(--color-primary)" }}>{apt.time}</div>
                        <div style={{ fontSize: "0.78rem", color: "var(--color-text-secondary)" }}>{apt.date}</div>
                      </td>
                      <td>
                        <strong style={{ color: "var(--color-primary)" }}>{apt.cost || "$650"}</strong>
                      </td>
                      <td>
                        <span style={{ 
                          fontWeight: 700, 
                          color: apt.depositStatus === "Pagado" ? "#059669" : "#D97706" 
                        }}>
                          {apt.depositAmount || "$0"}
                        </span>
                        <div style={{ fontSize: "0.72rem", color: "var(--color-text-muted)" }}>
                          {apt.depositStatus || "No requerido"}
                        </div>
                      </td>
                      <td>
                        <StatusBadge status={apt.status} />
                      </td>
                      <td>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", flexWrap: "wrap" }}>
                          {/* Ver Detalle */}
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
                            title="Ver detalle completo"
                          >
                            <EyeIcon size={13} />
                            <span>Detalle</span>
                          </button>

                          {/* Confirmar */}
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

                          {/* Atender */}
                          {apt.status === "Confirmada" && (
                            <button
                              type="button"
                              className="btn btn-sm"
                              style={{ backgroundColor: "var(--color-primary-soft)", color: "var(--color-primary)" }}
                              onClick={() => updateAppointmentStatus(apt.id, "Atendida")}
                              title="Marcar como atendida"
                            >
                              <CheckCircleIcon size={13} />
                              <span>Atender</span>
                            </button>
                          )}

                          {/* Reagendar */}
                          {apt.status !== "Cancelada" && apt.status !== "Atendida" && (
                            <button
                              type="button"
                              className="btn btn-sm btn-action-reschedule"
                              onClick={() => setRescheduleApt(apt)}
                              title="Reagendar fecha u horario"
                            >
                              <RefreshIcon size={13} />
                              <span>Reagendar</span>
                            </button>
                          )}

                          {/* Cancelar */}
                          {apt.status !== "Cancelada" && apt.status !== "Atendida" && (
                            <button
                              type="button"
                              className="btn btn-sm"
                              style={{ backgroundColor: "#FEE2E2", color: "#991B1B" }}
                              onClick={() => updateAppointmentStatus(apt.id, "Cancelada")}
                              title="Cancelar cita"
                            >
                              <XIcon size={13} />
                              <span>Cancelar</span>
                            </button>
                          )}

                          {/* Recordatorio WhatsApp */}
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
