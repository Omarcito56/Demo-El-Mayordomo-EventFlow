import React, { useState } from "react";
import { useEventData } from "../../hooks/useEventData";
import { SearchIcon } from "../../components/common/Icons";
import { StatusBadge } from "../../components/common/StatusBadge";
import { useTrackOnMount } from "../../analytics/analytics";

export const AdminClientsPage = () => {
  const { clients } = useEventData();
  const [searchTerm, setSearchTerm] = useState("");

  useTrackOnMount("admin_requests_opened", { module: "clients" });

  const filteredClients = clients.filter((c) =>
    (c.name && c.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (c.email && c.email.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div>
      <div className="admin-card-table">
        <div className="admin-table-toolbar">
          <div className="table-toolbar-left">
            <div className="table-search-input-wrap">
              <SearchIcon size={16} />
              <input
                type="text"
                placeholder="Buscar cliente u organizador..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div style={{ fontSize: "0.84rem", color: "var(--color-text-secondary)" }}>
            Total clientes registrados: <strong>{filteredClients.length}</strong>
          </div>
        </div>

        <div className="table-responsive-container">
          <table className="admin-data-table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Contacto</th>
                <th>Eventos Registrados</th>
                <th>Última Solicitud</th>
                <th>Monto Estimado</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {filteredClients.map((client) => (
                <tr key={client.id}>
                  <td className="client-name-cell ph-mask">
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "var(--color-accent-soft)", color: "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.8rem" }}>
                        {client.name.charAt(0)}
                      </div>
                      <span>{client.name}</span>
                    </div>
                  </td>
                  <td className="ph-mask">
                    <div>{client.phone}</div>
                    <div style={{ fontSize: "0.78rem", color: "var(--color-text-muted)" }}>{client.email}</div>
                  </td>
                  <td>
                    <span style={{ fontWeight: 600 }}>{client.eventsCount || 1}</span> evento(s)
                  </td>
                  <td>{client.lastRequestDate}</td>
                  <td style={{ fontWeight: 600, color: "var(--color-accent)" }}>
                    {client.estimatedTotal}
                  </td>
                  <td>
                    <StatusBadge status={client.status || "Activo"} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
