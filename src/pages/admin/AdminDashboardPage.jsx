import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useClinicData } from "../../hooks/useClinicData";
import { 
  CalendarIcon, ClockIcon, UserIcon, CheckCircleIcon, 
  AlertCircleIcon, CreditCardIcon, ScissorsIcon, EyeIcon, ArrowRightIcon 
} from "../../components/common/Icons";
import { StatusBadge } from "../../components/common/StatusBadge";
import { AppointmentDetailModal } from "../../components/admin/AppointmentDetailModal";
import { trackEvent, useTrackOnMount } from "../../analytics/analytics";

export const AdminDashboardPage = () => {
  const { metrics, appointments } = useClinicData();
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  // Registrar apertura protegida contra duplicados de StrictMode
  useTrackOnMount("admin_dashboard_opened", { module: "dashboard" });

  // Upcoming active appointments
  const upcomingAppointments = appointments
    .filter((a) => a.status !== "Cancelada")
    .slice(0, 5);

  // Recent deposits (citas con anticipo cubierto)
  const recentDeposits = appointments
    .filter((a) => a.depositStatus === "Pagado")
    .slice(0, 4);

  // Dynamic alert counts
  const pendingCount = metrics.pending;
  const noDepositCount = appointments.filter((a) => a.depositStatus !== "Pagado" && a.status !== "Cancelada").length;
  const afternoonCount = appointments.filter((a) => a.time.includes("p.m.") && a.status !== "Cancelada").length;

  return (
    <div>
      {/* Top 5 Metrics Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div>
            <div className="stat-val">{metrics.today}</div>
            <div className="stat-label">Citas de hoy</div>
          </div>
          <div className="stat-icon-wrap" style={{ backgroundColor: "var(--color-primary-soft)", color: "var(--color-primary)" }}>
            <CalendarIcon size={22} />
          </div>
        </div>

        <div className="stat-card">
          <div>
            <div className="stat-val" style={{ color: "#D97706" }}>{metrics.pending}</div>
            <div className="stat-label">Pendientes de confirmar</div>
          </div>
          <div className="stat-icon-wrap" style={{ backgroundColor: "#FEF3C7", color: "#D97706" }}>
            <ClockIcon size={22} />
          </div>
        </div>

        <div className="stat-card">
          <div>
            <div className="stat-val" style={{ color: "var(--color-accent)" }}>
              {metrics.newClientsToday || 1}
            </div>
            <div className="stat-label">Clientes nuevos</div>
          </div>
          <div className="stat-icon-wrap" style={{ backgroundColor: "var(--color-accent-soft)", color: "var(--color-accent)" }}>
            <UserIcon size={22} />
          </div>
        </div>

        <div className="stat-card">
          <div>
            <div className="stat-val" style={{ color: "#059669" }}>
              ${metrics.totalDeposits || 500}
            </div>
            <div className="stat-label">Anticipos recibidos demo</div>
          </div>
          <div className="stat-icon-wrap" style={{ backgroundColor: "#ECFDF5", color: "#059669" }}>
            <CreditCardIcon size={22} />
          </div>
        </div>

        <div className="stat-card">
          <div>
            <div className="stat-val" style={{ color: "var(--color-primary)" }}>
              {metrics.activeServices || 6}
            </div>
            <div className="stat-label">Servicios activos</div>
          </div>
          <div className="stat-icon-wrap" style={{ backgroundColor: "var(--color-beige-soft)", color: "var(--color-primary)" }}>
            <ScissorsIcon size={22} />
          </div>
        </div>
      </div>

      {/* Salon Dynamic Alerts */}
      <div className="alerts-list">
        {pendingCount > 0 && (
          <div className="alert-banner alert-warning">
            <div className="alert-content-left">
              <AlertCircleIcon size={18} />
              <span>
                <strong>{pendingCount} cita{pendingCount > 1 ? "s" : ""} pendiente{pendingCount > 1 ? "s" : ""} de confirmar</strong> en la agenda del salón.
              </span>
            </div>
            <Link to="/admin/citas" className="btn btn-sm btn-secondary">
              <span>Revisar y confirmar</span>
              <ArrowRightIcon size={14} />
            </Link>
          </div>
        )}

        {noDepositCount > 0 && (
          <div className="alert-banner alert-info" style={{ backgroundColor: "var(--color-primary-soft)", borderColor: "var(--color-primary-soft-border)" }}>
            <div className="alert-content-left">
              <CreditCardIcon size={18} style={{ color: "var(--color-accent)" }} />
              <span>
                <strong>{noDepositCount} cita{noDepositCount > 1 ? "s" : ""} sin anticipo</strong> (pago completo al llegar a Bellart Salón).
              </span>
            </div>
            <Link to="/admin/pagos" className="btn btn-sm btn-secondary">
              <span>Ver anticipos</span>
            </Link>
          </div>
        )}

        {afternoonCount > 0 && (
          <div className="alert-banner alert-info">
            <div className="alert-content-left">
              <ClockIcon size={18} />
              <span>
                <strong>{afternoonCount} citas programadas esta tarde</strong> para estilizado y color.
              </span>
            </div>
            <Link to="/admin/agenda" className="btn btn-sm btn-secondary">
              <span>Ver agenda de la tarde</span>
            </Link>
          </div>
        )}
      </div>

      {/* Grid: Upcoming Appointments and Right Column (Activity + Recent Deposits) */}
      <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: "1.5rem" }}>
        {/* Upcoming Appointments Card */}
        <div className="admin-card">
          <div className="admin-card-header">
            <h3 className="admin-card-title">Próximas Citas en Bellart Salón</h3>
            <Link to="/admin/citas" style={{ fontSize: "0.86rem", fontWeight: 600, color: "var(--color-accent)" }}>
              Ver todas ({appointments.length}) →
            </Link>
          </div>

          <div className="table-responsive">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Folio</th>
                  <th>Cliente</th>
                  <th>Servicio</th>
                  <th>Profesional</th>
                  <th>Fecha / Hora</th>
                  <th>Anticipo</th>
                  <th>Estado</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                {upcomingAppointments.map((apt) => {
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
                      <td>{apt.serviceName}</td>
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
                        <span style={{ 
                          fontSize: "0.8rem", 
                          fontWeight: 700, 
                          color: apt.depositStatus === "Pagado" ? "#059669" : "#D97706" 
                        }}>
                          {apt.depositAmount || "$0"}
                        </span>
                      </td>
                      <td>
                        <StatusBadge status={apt.status} />
                      </td>
                      <td>
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
                          <EyeIcon size={14} />
                          <span>Detalle</span>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column: Actividad Reciente & Anticipos Recientes */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* Recent Activity Feed */}
          <div className="admin-card">
            <div className="admin-card-header">
              <h3 className="admin-card-title">Actividad Reciente</h3>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", fontSize: "0.88rem" }}>
                <span className="status-dot" style={{ backgroundColor: "var(--color-accent)", marginTop: "6px" }}></span>
                <div>
                  <span style={{ fontWeight: 600, color: "var(--color-primary)" }}>Nueva cita solicitada:</span>
                  <p style={{ fontSize: "0.82rem", color: "var(--color-text-secondary)" }}>
                    Folio {appointments[0]?.folio || "BEL-000125"} por {appointments[0]?.clientName || appointments[0]?.patientName || "Cliente"}.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", fontSize: "0.88rem" }}>
                <span className="status-dot" style={{ backgroundColor: "#059669", marginTop: "6px" }}></span>
                <div>
                  <span style={{ fontWeight: 600, color: "var(--color-primary)" }}>Cita confirmada por salón:</span>
                  <p style={{ fontSize: "0.82rem", color: "var(--color-text-secondary)" }}>
                    Ana Torres (9:00 a.m. - Coloración con Andrea).
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", fontSize: "0.88rem" }}>
                <span className="status-dot" style={{ backgroundColor: "var(--color-primary)", marginTop: "6px" }}></span>
                <div>
                  <span style={{ fontWeight: 600, color: "var(--color-primary)" }}>Servicio atendido:</span>
                  <p style={{ fontSize: "0.82rem", color: "var(--color-text-secondary)" }}>
                    Carolina Martínez completó tratamiento capilar.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", fontSize: "0.88rem" }}>
                <span className="status-dot" style={{ backgroundColor: "#7C3AED", marginTop: "6px" }}></span>
                <div>
                  <span style={{ fontWeight: 600, color: "var(--color-primary)" }}>Cita reagendada:</span>
                  <p style={{ fontSize: "0.82rem", color: "var(--color-text-secondary)" }}>
                    Fernanda Ruiz cambió su horario a las 5:30 p.m.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Deposits Card */}
          <div className="admin-card">
            <div className="admin-card-header">
              <h3 className="admin-card-title">Anticipos Recientes</h3>
              <Link to="/admin/pagos" style={{ fontSize: "0.84rem", fontWeight: 600, color: "var(--color-accent)" }}>
                Ver pagos →
              </Link>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {recentDeposits.map((dep) => (
                <div key={dep.id} style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "space-between",
                  padding: "0.6rem 0.8rem",
                  background: "var(--color-bg)",
                  borderRadius: "8px",
                  fontSize: "0.84rem"
                }}>
                  <div>
                    <strong className="ph-mask" style={{ color: "var(--color-primary)" }}>{dep.clientName || dep.patientName}</strong>
                    <div style={{ fontSize: "0.74rem", color: "var(--color-text-secondary)" }}>
                      {dep.serviceName} • {dep.paymentMethod || "Tarjeta demo"}
                    </div>
                  </div>
                  <span style={{ fontWeight: 700, color: "#059669", fontSize: "0.9rem" }}>
                    +{dep.depositAmount}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "1rem", paddingTop: "0.75rem", borderTop: "1px solid #F1F5F9", textAlign: "center" }}>
              <span style={{ fontSize: "0.78rem", color: "var(--color-text-muted)" }}>
                Datos sincronizados localmente con localStorage
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Appointment Detail Modal */}
      <AppointmentDetailModal
        isOpen={Boolean(selectedAppointment)}
        onClose={() => setSelectedAppointment(null)}
        appointment={selectedAppointment}
      />
    </div>
  );
};
