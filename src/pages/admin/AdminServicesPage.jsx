import React, { useState } from "react";
import { useClinicData } from "../../hooks/useClinicData";
import { 
  SearchIcon, ClockIcon, ScissorsIcon, SparklesIcon, 
  PaletteIcon, DropletIcon, StarIcon, HandIcon 
} from "../../components/common/Icons";
import { trackEvent, useTrackOnMount } from "../../analytics/analytics";

export const AdminServicesPage = () => {
  const { services } = useClinicData();
  const [searchTerm, setSearchTerm] = useState("");

  // Registrar apertura protegida contra duplicados de StrictMode
  useTrackOnMount("admin_services_opened", { module: "services" });

  const getIcon = (type) => {
    switch (type) {
      case "scissors": return <ScissorsIcon size={18} />;
      case "sparkles": return <SparklesIcon size={18} />;
      case "palette": return <PaletteIcon size={18} />;
      case "droplet": return <DropletIcon size={18} />;
      case "star": return <StarIcon size={18} />;
      case "hand": return <HandIcon size={18} />;
      default: return <SparklesIcon size={18} />;
    }
  };

  const filteredServices = services.filter((service) => {
    const term = searchTerm.toLowerCase();
    return (
      service.name.toLowerCase().includes(term) ||
      service.description.toLowerCase().includes(term) ||
      (service.category && service.category.toLowerCase().includes(term))
    );
  });

  return (
    <div>
      <div className="admin-card">
        <div className="admin-card-header">
          <div>
            <h2 className="admin-card-title">Catálogo de Servicios</h2>
            <p style={{ fontSize: "0.88rem", color: "var(--color-text-secondary)", marginTop: "2px" }}>
              Servicios disponibles para agendar en línea en Mujer Bonita con tiempos y precios estimados.
            </p>
          </div>
          <div style={{ fontSize: "0.86rem", color: "var(--color-text-secondary)" }}>
            Total servicios: <strong>{filteredServices.length}</strong>
          </div>
        </div>

        {/* Search */}
        <div className="filter-bar">
          <div className="search-input-wrap">
            <SearchIcon size={18} />
            <input
              type="text"
              placeholder="Buscar servicio por nombre, categoría o descripción..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Services Table with Columns: Servicio, Categoría, Precio, Duración, Estado */}
        <div className="table-responsive">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Servicio</th>
                <th>Categoría</th>
                <th>Precio Demo</th>
                <th>Duración</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {filteredServices.map((service) => (
                <tr key={service.id}>
                  <td>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <div style={{ 
                        width: "36px", 
                        height: "36px", 
                        borderRadius: "8px", 
                        backgroundColor: "var(--color-primary-soft)", 
                        color: "var(--color-primary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}>
                        {getIcon(service.iconType)}
                      </div>
                      <div>
                        <strong style={{ color: "var(--color-primary)", display: "block" }}>{service.name}</strong>
                        <span style={{ fontSize: "0.78rem", color: "var(--color-text-secondary)", maxWidth: "340px", display: "inline-block" }}>
                          {service.description}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span style={{ 
                      backgroundColor: "var(--color-bg)", 
                      padding: "0.25rem 0.65rem", 
                      borderRadius: "var(--radius-full)", 
                      fontSize: "0.8rem", 
                      fontWeight: 600,
                      color: "var(--color-primary)",
                      border: "1px solid var(--border-light)"
                    }}>
                      {service.category || "Estilismo"}
                    </span>
                  </td>
                  <td>
                    <div>
                      <strong style={{ color: "var(--color-primary)" }}>{service.price}</strong>
                      <div style={{ fontSize: "0.72rem", color: "var(--color-text-muted)" }}>
                        Anticipo: ${service.suggestedDeposit || 150} MXN
                      </div>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", fontSize: "0.85rem", color: "var(--color-text-secondary)" }}>
                      <ClockIcon size={14} style={{ color: "var(--color-accent)" }} />
                      <span>{service.duration}</span>
                    </div>
                  </td>
                  <td>
                    <span className="status-badge status-Confirmada">
                      <span className="status-dot"></span>
                      {service.status || "Activo"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: "1.5rem", padding: "1rem", backgroundColor: "var(--color-bg)", borderRadius: "10px", border: "1px dashed var(--border-light)", fontSize: "0.84rem", color: "var(--color-text-secondary)" }}>
          ✨ <strong>Nota comercial demostrativa:</strong> En la propuesta final para Mujer Bonita, el catálogo se adapta al menú oficial de servicios, duración real por profesional y precios del salón.
        </div>
      </div>
    </div>
  );
};
