import React, { useState } from "react";
import { useEventData } from "../../hooks/useEventData";
import { SearchIcon, FilterIcon, EyeIcon, XIcon } from "../../components/common/Icons";
import { StatusBadge } from "../../components/common/StatusBadge";
import { useTrackOnMount } from "../../analytics/analytics";

export const AdminQuotesPage = () => {
  const { quotes, updateQuoteStatus } = useEventData();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("todos");
  const [selectedQuote, setSelectedQuote] = useState(null);

  useTrackOnMount("admin_quotes_opened", { module: "quotes" });

  const filteredQuotes = quotes.filter((q) => {
    const matchesSearch = 
      (q.folio && q.folio.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (q.clientName && q.clientName.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (q.eventType && q.eventType.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesStatus = filterStatus === "todos" || q.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleStatusChange = (id, newStatus) => {
    updateQuoteStatus(id, newStatus);
    if (selectedQuote && selectedQuote.id === id) {
      setSelectedQuote({ ...selectedQuote, status: newStatus });
    }
  };

  return (
    <div>
      <div className="admin-card-table">
        <div className="admin-table-toolbar">
          <div className="table-toolbar-left">
            <div className="table-search-input-wrap">
              <SearchIcon size={16} />
              <input
                type="text"
                placeholder="Buscar cotización por folio, cliente..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <FilterIcon size={16} style={{ color: "var(--color-text-muted)" }} />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                style={{ padding: "0.45rem 0.75rem", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-light)", fontSize: "0.85rem" }}
              >
                <option value="todos">Todos los estados</option>
                <option value="Borrador">Borrador</option>
                <option value="Enviada">Enviada</option>
                <option value="Aceptada">Aceptada</option>
                <option value="Rechazada">Rechazada</option>
                <option value="Vencida">Vencida</option>
              </select>
            </div>
          </div>

          <div style={{ fontSize: "0.84rem", color: "var(--color-text-secondary)" }}>
            Cotizaciones emitidas: <strong>{filteredQuotes.length}</strong>
          </div>
        </div>

        <div className="table-responsive-container">
          <table className="admin-data-table">
            <thead>
              <tr>
                <th>Folio</th>
                <th>Cliente</th>
                <th>Evento</th>
                <th>Paquete</th>
                <th>Invitados</th>
                <th>Total</th>
                <th>Fecha Tentativa</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredQuotes.map((quote) => (
                <tr key={quote.id}>
                  <td className="folio-cell">{quote.folio}</td>
                  <td className="client-name-cell ph-mask">{quote.clientName}</td>
                  <td>{quote.eventType}</td>
                  <td>{quote.packageName}</td>
                  <td>{quote.guests} pax</td>
                  <td style={{ fontWeight: 600 }}>${(quote.total || 0).toLocaleString("es-MX")} MXN</td>
                  <td>{quote.date}</td>
                  <td>
                    <StatusBadge status={quote.status} />
                  </td>
                  <td>
                    <div className="table-actions-cell">
                      <button
                        type="button"
                        className="btn btn-secondary btn-sm"
                        style={{ padding: "0.25rem 0.55rem", fontSize: "0.75rem" }}
                        onClick={() => setSelectedQuote(quote)}
                      >
                        <EyeIcon size={13} />
                        <span>Detalle</span>
                      </button>

                      <select
                        value={quote.status}
                        onChange={(e) => handleStatusChange(quote.id, e.target.value)}
                        style={{ padding: "0.25rem 0.45rem", borderRadius: "var(--radius-xs)", border: "1px solid var(--border-light)", fontSize: "0.75rem" }}
                      >
                        <option value="Borrador">Borrador</option>
                        <option value="Enviada">Enviada</option>
                        <option value="Aceptada">Aceptada</option>
                        <option value="Rechazada">Rechazada</option>
                        <option value="Vencida">Vencida</option>
                      </select>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal de Detalle de Cotización */}
      {selectedQuote && (
        <div className="modal-overlay animate-fade-in" onClick={() => setSelectedQuote(null)}>
          <div className="modal-card" onClick={e => e.stopPropagation()} style={{ maxWidth: "560px" }}>
            <div className="modal-header">
              <div>
                <span style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "var(--color-accent)" }}>Cotización Formal</span>
                <h3 style={{ fontSize: "1.25rem" }}>{selectedQuote.folio} — {selectedQuote.eventType}</h3>
              </div>
              <button type="button" onClick={() => setSelectedQuote(null)} style={{ background: "none", border: "none", cursor: "pointer" }}>
                <XIcon size={20} />
              </button>
            </div>

            <div className="modal-body">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>
                <div>
                  <span style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>Cliente solicitante</span>
                  <div style={{ fontWeight: 600 }} className="ph-mask">{selectedQuote.clientName}</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--color-text-secondary)" }} className="ph-mask">{selectedQuote.clientEmail}</div>
                </div>

                <div>
                  <span style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>Fecha programada</span>
                  <div style={{ fontWeight: 600 }}>{selectedQuote.date}</div>
                </div>

                <div>
                  <span style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>Propuesta</span>
                  <div style={{ fontWeight: 600 }}>Paquete {selectedQuote.packageName} ({selectedQuote.guests} personas)</div>
                </div>

                <div>
                  <span style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>Estado comercial</span>
                  <div>
                    <StatusBadge status={selectedQuote.status} />
                  </div>
                </div>
              </div>

              <div style={{ padding: "1.25rem", backgroundColor: "var(--color-charcoal-deep)", color: "#FFF", borderRadius: "var(--radius-sm)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <span style={{ fontSize: "0.72rem", textTransform: "uppercase", color: "var(--color-champagne)" }}>Inversión Estimada</span>
                  <div style={{ fontSize: "0.8rem", color: "#A8A29A" }}>Desglose de banquete y adicionales</div>
                </div>
                <div style={{ fontSize: "1.6rem", fontWeight: 700, color: "var(--color-champagne)" }}>
                  ${(selectedQuote.total || 0).toLocaleString("es-MX")} MXN
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-outline btn-sm" onClick={() => setSelectedQuote(null)}>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
