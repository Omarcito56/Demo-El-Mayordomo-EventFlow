import React from "react";

export const StatusBadge = ({ status = "Nueva", className = "" }) => {
  const getBadgeClass = (s) => {
    switch (s) {
      case "Nueva":
      case "Borrador":
        return "badge-blue";
      case "Contactado":
      case "Enviada":
      case "Cotización enviada":
      case "En preparación":
        return "badge-purple";
      case "Esperando anticipo":
      case "Apartado":
      case "Pendiente":
      case "Por confirmar":
        return "badge-warning";
      case "Confirmada":
      case "Confirmado":
      case "Aceptada":
      case "Pagado":
      case "Activo":
      case "Realizado":
        return "badge-success";
      case "Descartada":
      case "Rechazada":
      case "Cancelada":
      case "Cancelado":
      case "Vencida":
        return "badge-danger";
      default:
        return "badge-neutral";
    }
  };

  return (
    <span className={`status-badge ${getBadgeClass(status)} ${className}`}>
      {status}
    </span>
  );
};
