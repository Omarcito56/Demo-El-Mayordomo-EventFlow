import React from "react";
import { Link } from "react-router-dom";
import { SparklesIcon } from "../common/Icons";

export const AdminHeader = ({ title = "Panel de Administración" }) => {
  return (
    <header className="admin-header">
      <h1 className="admin-header-title">{title}</h1>

      <div className="admin-header-actions">
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.82rem", color: "var(--color-text-secondary)" }}>
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#10B981" }} />
          <span>Demo en línea</span>
        </div>

        <Link to="/cotizar" className="btn btn-secondary btn-sm" target="_blank" rel="noopener noreferrer">
          <SparklesIcon size={14} />
          <span>Nuevo evento (+ Cotizar)</span>
        </Link>
      </div>
    </header>
  );
};
