import React, { useState } from "react";
import { useClinicData } from "../../hooks/useClinicData";
import { SearchIcon, UserIcon, WhatsAppIcon, SparklesIcon } from "../../components/common/Icons";
import { trackEvent, useTrackOnMount } from "../../analytics/analytics";

export const AdminPatientsPage = () => {
  const { patients } = useClinicData();
  const [searchTerm, setSearchTerm] = useState("");

  // Mantener evento existente con route tracking
  useTrackOnMount("admin_patients_opened", { module: "clients" });

  const filteredPatients = patients.filter((patient) => {
    const term = searchTerm.toLowerCase();
    return (
      patient.name.toLowerCase().includes(term) ||
      patient.phone.includes(term) ||
      (patient.email && patient.email.toLowerCase().includes(term))
    );
  });

  return (
    <div>
      <div className="admin-card">
        <div className="admin-card-header">
          <div>
            <h2 className="admin-card-title">Directorio de Clientes</h2>
            <p style={{ fontSize: "0.88rem", color: "var(--color-text-secondary)", marginTop: "2px" }}>
              Directorio de clientas registradas en GLAMUROSA NAIL’S mediante la web y reservas previas.
            </p>
          </div>

          <div style={{ fontSize: "0.86rem", color: "var(--color-text-secondary)" }}>
            Total clientes: <strong>{filteredPatients.length}</strong>
          </div>
        </div>

        {/* Search */}
        <div className="filter-bar">
          <div className="search-input-wrap">
            <SearchIcon size={18} />
            <input
              type="text"
              placeholder="Buscar cliente por nombre, teléfono o correo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Clients Table: Cliente, Teléfono, Correo, Última visita, Próxima cita, Estado, Contacto */}
        <div className="table-responsive">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Teléfono / WhatsApp</th>
                <th>Correo Electrónico</th>
                <th>Última Visita</th>
                <th>Próxima Cita</th>
                <th>Estado</th>
                <th>Contacto</th>
              </tr>
            </thead>
            <tbody>
              {filteredPatients.length === 0 ? (
                <tr>
                  <td colSpan="7" style={{ textAlign: "center", padding: "3rem", color: "var(--color-text-secondary)" }}>
                    No se encontraron clientes con los criterios de búsqueda.
                  </td>
                </tr>
              ) : (
                filteredPatients.map((patient) => (
                  <tr key={patient.id} className="ph-mask">
                    <td>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
                        <div style={{ 
                          width: "36px", 
                          height: "36px", 
                          borderRadius: "50%", 
                          backgroundColor: "var(--color-primary-soft)", 
                          color: "var(--color-primary)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 700,
                          fontSize: "0.88rem"
                        }}>
                          {patient.name.charAt(0)}
                        </div>
                        <div>
                          <div className="table-patient-name ph-mask">{patient.name}</div>
                          <div style={{ fontSize: "0.74rem", color: "var(--color-text-muted)" }}>
                            Técnica preferida: {patient.preferredStylist || "Andrea"}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="ph-mask" style={{ fontWeight: 600 }}>{patient.phone}</span>
                    </td>
                    <td>
                      <span className="ph-mask" style={{ color: "var(--color-text-secondary)" }}>{patient.email || "—"}</span>
                    </td>
                    <td>
                      <span style={{ color: "var(--color-text-primary)", fontWeight: 500 }}>
                        {patient.lastAppointmentDate || "Pendiente"}
                      </span>
                    </td>
                    <td>
                      <span style={{ color: "var(--color-accent)", fontWeight: 600 }}>
                        {patient.nextAppointmentDate || "Por programar"}
                      </span>
                    </td>
                    <td>
                      <span className="status-badge status-Confirmada">
                        <span className="status-dot"></span>
                        {patient.status || "Activo"}
                      </span>
                    </td>
                    <td>
                      <a 
                        href={`https://wa.me/52${patient.phone}?text=${encodeURIComponent(`Hola ${patient.name}, te contactamos de GLAMUROSA NAIL’S.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-action-wa"
                        title="Enviar mensaje por WhatsApp"
                        onClick={() => {
                          trackEvent("whatsapp_reminder_clicked", {
                            module: "clients",
                            record_type: "client",
                          });
                        }}
                      >
                        <WhatsAppIcon size={14} />
                        <span>WhatsApp</span>
                      </a>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
