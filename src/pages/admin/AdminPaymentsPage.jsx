import React, { useState } from "react";
import { useClinicData } from "../../hooks/useClinicData";
import { SearchIcon, FilterIcon, CreditCardIcon, SparklesIcon, CheckCircleIcon } from "../../components/common/Icons";
import { StatusBadge } from "../../components/common/StatusBadge";
import { useTrackOnMount } from "../../analytics/analytics";

export const AdminPaymentsPage = () => {
  const { appointments } = useClinicData();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("TODOS");

  useTrackOnMount("admin_requests_opened", { module: "payments" });

  const filteredPayments = appointments.filter((apt) => {
    const clientName = apt.clientName || apt.patientName || "";
    const matchesSearch =
      clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      apt.serviceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (apt.paymentMethod && apt.paymentMethod.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesStatus = statusFilter === "TODOS" || apt.depositStatus === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Calculate totals
  const totalReceived = appointments
    .filter((a) => a.depositStatus === "Pagado")
    .reduce((sum, a) => sum + (a.depositNumber || 0), 0);

  const totalPendingInSalon = appointments
    .filter((a) => a.status !== "Cancelada")
    .reduce((sum, a) => {
      const cost = a.costNumber || 650;
      const dep = a.depositStatus === "Pagado" ? (a.depositNumber || 0) : 0;
      return sum + (cost - dep);
    }, 0);

  const totalWithDeposit = appointments.filter((a) => a.depositStatus === "Pagado").length;

  const getDepositBadge = (status) => {
    switch (status) {
      case "Pagado":
        return (
          <span className="status-badge status-Confirmada">
            <span className="status-dot"></span>
            Pagado
          </span>
        );
      case "Pendiente":
        return (
          <span className="status-badge status-Pendiente">
            <span className="status-dot"></span>
            Pendiente
          </span>
        );
      case "Cancelado":
        return (
          <span className="status-badge status-Cancelada">
            <span className="status-dot"></span>
            Cancelado
          </span>
        );
      case "No requerido":
      default:
        return (
          <span className="status-badge status-Atendida">
            <span className="status-dot"></span>
            No requerido
          </span>
        );
    }
  };

  return (
    <div>
      {/* Summary KPI Cards */}
      <div className="stats-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)", marginBottom: "1.75rem" }}>
        <div className="stat-card">
          <div>
            <div className="stat-val" style={{ color: "#059669" }}>
              ${totalReceived} MXN
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
              ${totalPendingInSalon} MXN
            </div>
            <div className="stat-label">Saldo restante por liquidar en salón</div>
          </div>
          <div className="stat-icon-wrap" style={{ backgroundColor: "var(--color-primary-soft)", color: "var(--color-primary)" }}>
            <SparklesIcon size={22} />
          </div>
        </div>

        <div className="stat-card">
          <div>
            <div className="stat-val" style={{ color: "var(--color-accent)" }}>
              {totalWithDeposit}
            </div>
            <div className="stat-label">Citas con anticipo cubierto</div>
          </div>
          <div className="stat-icon-wrap" style={{ backgroundColor: "var(--color-accent-soft)", color: "var(--color-accent)" }}>
            <CheckCircleIcon size={22} />
          </div>
        </div>
      </div>

      <div className="admin-card">
        <div className="admin-card-header">
          <div>
            <h2 className="admin-card-title">Anticipos</h2>
            <p style={{ fontSize: "0.88rem", color: "var(--color-text-secondary)", marginTop: "2px" }}>
              Registro y control de anticipos demostrativos para asegurar la disponibilidad de turnos.
            </p>
          </div>

          <div style={{ fontSize: "0.86rem", color: "var(--color-text-secondary)" }}>
            Total registros: <strong>{filteredPayments.length}</strong>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="filter-bar">
          <div className="search-input-wrap">
            <SearchIcon size={18} />
            <input
              type="text"
              placeholder="Buscar por cliente, servicio o método..."
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
              <option value="Pagado">Pagado</option>
              <option value="Pendiente">Pendiente</option>
              <option value="No requerido">No requerido</option>
              <option value="Cancelado">Cancelado</option>
            </select>
          </div>
        </div>

        {/* Table: Cliente, Servicio, Anticipo, Método, Estado */}
        <div className="table-responsive">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Servicio</th>
                <th>Anticipo</th>
                <th>Método</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {filteredPayments.length === 0 ? (
                <tr>
                  <td colSpan="5" style={{ textAlign: "center", padding: "3rem", color: "var(--color-text-secondary)" }}>
                    No se encontraron registros de anticipos con los criterios seleccionados.
                  </td>
                </tr>
              ) : (
                filteredPayments.map((apt) => {
                  const clientName = apt.clientName || apt.patientName || "Cliente";
                  const clientPhone = apt.clientPhone || apt.patientPhone || "";
                  return (
                    <tr key={apt.id}>
                      <td>
                        <div className="table-patient-name ph-mask">{clientName}</div>
                        <div className="table-patient-contact ph-mask">{clientPhone}</div>
                      </td>
                      <td>
                        <strong>{apt.serviceName}</strong>
                        <div style={{ fontSize: "0.76rem", color: "var(--color-text-muted)" }}>
                          Total: {apt.cost} • Restante: {apt.balance}
                        </div>
                      </td>
                      <td>
                        <strong style={{ color: apt.depositStatus === "Pagado" ? "#059669" : "var(--color-primary)", fontSize: "0.95rem" }}>
                          {apt.depositAmount || "$0"}
                        </strong>
                      </td>
                      <td>
                        <span style={{ 
                          backgroundColor: "var(--color-bg)", 
                          padding: "0.25rem 0.65rem", 
                          borderRadius: "var(--radius-full)", 
                          fontSize: "0.8rem",
                          border: "1px solid var(--border-light)"
                        }}>
                          {apt.paymentMethod || "En salón"}
                        </span>
                      </td>
                      <td>
                        {getDepositBadge(apt.depositStatus || "No requerido")}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: "1.5rem", padding: "1rem", backgroundColor: "var(--color-bg)", borderRadius: "10px", border: "1px dashed var(--border-light)", fontSize: "0.84rem", color: "var(--color-text-secondary)" }}>
          ✨ <strong>Nota comercial de anticipos:</strong> Los registros de esta sección son simulaciones demostrativas para mostrar al prospecto cómo puede controlar ingresos previos y saldos a liquidar en sucursal. No se utiliza dinero real.
        </div>
      </div>
    </div>
  );
};
