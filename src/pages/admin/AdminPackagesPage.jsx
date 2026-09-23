import React, { useState } from "react";
import { useEventData } from "../../hooks/useEventData";
import { EditIcon, CheckCircleIcon, UsersIcon } from "../../components/common/Icons";
import { StatusBadge } from "../../components/common/StatusBadge";
import { useTrackOnMount } from "../../analytics/analytics";

export const AdminPackagesPage = () => {
  const { packages, updatePackage } = useEventData();
  const [editingPkg, setEditingPkg] = useState(null);
  const [saveNotice, setSaveNotice] = useState("");

  useTrackOnMount("admin_requests_opened", { module: "packages" });

  const handleEditClick = (pkg) => {
    setEditingPkg({ ...pkg });
  };

  const handleSavePackage = (e) => {
    e.preventDefault();
    if (!editingPkg) return;

    updatePackage(editingPkg.id, {
      name: editingPkg.name,
      priceFrom: editingPkg.priceFrom,
      priceNumber: Number(editingPkg.priceNumber) || 12000,
      capacity: editingPkg.capacity,
      description: editingPkg.description,
      status: editingPkg.status
    });

    setEditingPkg(null);
    setSaveNotice("¡Paquete demo actualizado con éxito y persistido en localStorage!");
    setTimeout(() => setSaveNotice(""), 3000);
  };

  return (
    <div>
      {saveNotice && (
        <div className="alert-banner alert-warning" style={{ backgroundColor: "#ECFDF5", color: "#065F46", borderColor: "#A7F3D0", marginBottom: "1.25rem" }}>
          <div className="alert-content-left">
            <CheckCircleIcon size={16} />
            <span>{saveNotice}</span>
          </div>
        </div>
      )}

      <div style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.35rem", color: "var(--color-charcoal-deep)" }}>Catálogo de Paquetes Demo</h2>
        <span style={{ fontSize: "0.82rem", color: "var(--color-text-secondary)" }}>
          Edita precios base y capacidades sugeridas de los tres paquetes demostrativos
        </span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
        {packages.map((pkg) => (
          <div 
            key={pkg.id} 
            className="card-editorial"
            style={{ padding: "1.75rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
          >
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                <span className="status-badge badge-neutral" style={{ fontSize: "0.7rem" }}>
                  {pkg.badge}
                </span>
                <StatusBadge status={pkg.status || "Activo"} />
              </div>

              <h3 style={{ fontSize: "1.4rem", color: "var(--color-charcoal-deep)", marginBottom: "0.25rem" }}>
                {pkg.name}
              </h3>

              <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--color-accent)", marginBottom: "0.5rem" }}>
                {pkg.priceFrom}
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.85rem", color: "var(--color-text-secondary)", marginBottom: "1rem" }}>
                <UsersIcon size={14} />
                <span>Capacidad: {pkg.capacity}</span>
              </div>

              <p style={{ fontSize: "0.86rem", color: "var(--color-text-secondary)", lineHeight: 1.5, marginBottom: "1.25rem" }}>
                {pkg.description}
              </p>

              <div style={{ fontSize: "0.78rem", color: "var(--color-text-muted)" }}>
                Incluye {pkg.includes.length} servicios gastronómicos y de montaje.
              </div>
            </div>

            <div style={{ marginTop: "1.5rem", paddingTop: "1rem", borderTop: "1px solid var(--border-light)" }}>
              <button 
                type="button" 
                className="btn btn-secondary btn-sm btn-block"
                onClick={() => handleEditClick(pkg)}
              >
                <EditIcon size={14} />
                <span>Editar propuesta demo</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de Edición de Paquete */}
      {editingPkg && (
        <div className="modal-overlay animate-fade-in" onClick={() => setEditingPkg(null)}>
          <div className="modal-card" onClick={e => e.stopPropagation()} style={{ maxWidth: "520px" }}>
            <div className="modal-header">
              <h3 style={{ fontSize: "1.25rem" }}>Editar Paquete Demo: {editingPkg.name}</h3>
              <button type="button" onClick={() => setEditingPkg(null)} style={{ background: "none", border: "none", cursor: "pointer" }}>✕</button>
            </div>

            <form onSubmit={handleSavePackage}>
              <div className="modal-body" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div>
                  <label className="form-label" htmlFor="edit-pkg-name">Nombre de la propuesta</label>
                  <input
                    type="text"
                    id="edit-pkg-name"
                    className="form-input"
                    value={editingPkg.name}
                    onChange={e => setEditingPkg({ ...editingPkg, name: e.target.value })}
                    required
                  />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label className="form-label" htmlFor="edit-pkg-price-text">Texto de precio (Desde)</label>
                    <input
                      type="text"
                      id="edit-pkg-price-text"
                      className="form-input"
                      value={editingPkg.priceFrom}
                      onChange={e => setEditingPkg({ ...editingPkg, priceFrom: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="form-label" htmlFor="edit-pkg-price-num">Valor numérico base (MXN)</label>
                    <input
                      type="number"
                      id="edit-pkg-price-num"
                      className="form-input"
                      value={editingPkg.priceNumber}
                      onChange={e => setEditingPkg({ ...editingPkg, priceNumber: Number(e.target.value) })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label" htmlFor="edit-pkg-capacity">Capacidad sugerida</label>
                  <input
                    type="text"
                    id="edit-pkg-capacity"
                    className="form-input"
                    value={editingPkg.capacity}
                    onChange={e => setEditingPkg({ ...editingPkg, capacity: e.target.value })}
                  />
                </div>

                <div>
                  <label className="form-label" htmlFor="edit-pkg-desc">Descripción</label>
                  <textarea
                    id="edit-pkg-desc"
                    className="form-textarea"
                    value={editingPkg.description}
                    onChange={e => setEditingPkg({ ...editingPkg, description: e.target.value })}
                  />
                </div>

                <div>
                  <label className="form-label" htmlFor="edit-pkg-status">Estado</label>
                  <select
                    id="edit-pkg-status"
                    className="form-input"
                    value={editingPkg.status}
                    onChange={e => setEditingPkg({ ...editingPkg, status: e.target.value })}
                  >
                    <option value="Activo">Activo</option>
                    <option value="Inactivo">Inactivo</option>
                  </select>
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-outline btn-sm" onClick={() => setEditingPkg(null)}>
                  Cancelar
                </button>
                <button type="submit" className="btn btn-primary btn-sm">
                  Guardar cambios
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
