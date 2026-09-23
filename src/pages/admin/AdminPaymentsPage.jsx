import React, { useState } from "react";
import { useEventData } from "../../hooks/useEventData";
import { SearchIcon, FilterIcon } from "../../components/common/Icons";
import { StatusBadge } from "../../components/common/StatusBadge";
import { useTrackOnMount } from "../../analytics/analytics";

export const AdminPaymentsPage = () => {
  const { payments } = useEventData();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterConcept, setFilterConcept] = useState("todos");

  useTrackOnMount("admin_payments_opened", { module: "payments" });

  const filteredPayments = payments.filter((pay) => {
    const matchesSearch = 
      (pay.folio && pay.folio.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (pay.clientName && pay.clientName.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (pay.eventType && pay.eventType.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesConcept = filterConcept === "todos" || pay.concept === filterConcept;
    return matchesSearch && matchesConcept;
  });

  const totalPaidSum = filteredPayments
    .filter(p => p.status === "Pagado")
    .reduce((sum, p) => sum + (p.amount || 0), 0);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap", gap: "1rem" }}>
        <div>
          <h2 style={{ fontSize: "1.35rem", color: "var(--color-charcoal-deep)" }}>Anticipos y Pagos</h2>
          <span style={{ fontSize: "0.82rem", color: "var(--color-text-secondary)" }}>
            Registro simulado de anticipos, abonos y liquidaciones de eventos
          </span>
        </div>

        <div style={{ padding: "0.6rem 1.2rem", backgroundColor: "var(--color-surface)", border: "1px solid var(--border-light)", borderRadius: "var(--radius-sm)", display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <span style={{ fontSize: "0.78rem", color: "var(--color-text-muted)", textTransform: "uppercase" }}>Total Registrado:</span>
          <strong style={{ fontSize: "1.1rem", color: "var(--color-accent)" }}>
            ${totalPaidSum.toLocaleString("es-MX")} MXN
          </strong>
        </div>
      </div>

      <div className="admin-card-table">
        <div className="admin-table-toolbar">
          <div className="table-toolbar-left">
            <div className="table-search-input-wrap">
              <SearchIcon size={16} />
              <input
                type="text"
                placeholder="Buscar por folio, cliente..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <FilterIcon size={16} style={{ color: "var(--color-text-muted)" }} />
              <select
                value={filterConcept}
                onChange={(e) => setFilterConcept(e.target.value)}
                style={{ padding: "0.45rem 0.75rem", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-light)", fontSize: "0.85rem" }}
              >
                <option value="todos">Todos los conceptos</option>
                <option value="Anticipo">Anticipo</option>
                <option value="Segundo pago">Segundo pago</option>
                <option value="Liquidación">Liquidación</option>
              </select>
            </div>
          </div>

          <div style={{ fontSize: "0.84rem", color: "var(--color-text-secondary)" }}>
            Movimientos demo: <strong>{filteredPayments.length}</strong>
          </div>
        </div>

        <div className="table-responsive-container">
          <table className="admin-data-table">
            <thead>
              <tr>
                <th>Folio</th>
                <th>Cliente</th>
                <th>Evento</th>
                <th>Concepto</th>
                <th>Monto</th>
                <th>Método</th>
                <th>Fecha</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {filteredPayments.map((pay) => (
                <tr key={pay.id}>
                  <td className="folio-cell">{pay.folio}</td>
                  <td className="client-name-cell ph-mask">{pay.clientName}</td>
                  <td>{pay.eventType}</td>
                  <td>
                    <span style={{ fontWeight: 600 }}>{pay.concept}</span>
                  </td>
                  <td style={{ fontWeight: 700, color: "var(--color-charcoal-deep)" }}>
                    ${(pay.amount || 0).toLocaleString("es-MX")} MXN
                  </td>
                  <td>
                    <span style={{ fontSize: "0.82rem", color: "var(--color-text-secondary)" }}>
                      {pay.method}
                    </span>
                  </td>
                  <td>{pay.date}</td>
                  <td>
                    <StatusBadge status={pay.status} />
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
