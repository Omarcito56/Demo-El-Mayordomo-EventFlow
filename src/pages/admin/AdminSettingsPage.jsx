import React, { useState } from "react";
import { useClinicData } from "../../hooks/useClinicData";
import { CheckIcon, RefreshIcon, SparklesIcon } from "../../components/common/Icons";

export const AdminSettingsPage = () => {
  const { business, updateBusiness, resetDemoData } = useClinicData();
  const [formData, setFormData] = useState({ ...business });
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ 
      ...prev, 
      [name]: value,
      // Keep aliases in sync
      ...(name === "salonName" ? { clinicName: value, doctorName: value } : {})
    }));
    setSavedSuccess(false);
    setResetSuccess(false);
  };

  const handleSave = (e) => {
    e.preventDefault();
    updateBusiness(formData);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3500);
  };

  const handleReset = () => {
    if (window.confirm("¿Seguro que deseas restablecer todos los datos demo de GLAMUROSA NAIL’S a los valores iniciales de fábrica? Esto recargará las citas, técnicas y clientas de muestra.")) {
      resetDemoData();
      setResetSuccess(true);
      setSavedSuccess(false);
      setTimeout(() => {
        window.location.reload();
      }, 700);
    }
  };

  return (
    <div>
      <div className="admin-card" style={{ maxWidth: "800px" }}>
        <div className="admin-card-header">
          <div>
            <h2 className="admin-card-title">Configuración de GLAMUROSA NAIL’S</h2>
            <p style={{ fontSize: "0.88rem", color: "var(--color-text-secondary)", marginTop: "2px" }}>
              Personaliza los datos visibles del studio, medios de contacto y mensaje de confirmación.
            </p>
          </div>
        </div>

        {savedSuccess && (
          <div className="alert-banner alert-info" style={{ marginBottom: "1.5rem" }}>
            <div className="alert-content-left">
              <CheckIcon size={18} />
              <span>¡Configuración actualizada y guardada en localStorage correctamente!</span>
            </div>
          </div>
        )}

        {resetSuccess && (
          <div className="alert-banner alert-warning" style={{ marginBottom: "1.5rem" }}>
            <div className="alert-content-left">
              <RefreshIcon size={18} />
              <span>Restableciendo datos demo iniciales de GLAMUROSA NAIL’S...</span>
            </div>
          </div>
        )}

        <form onSubmit={handleSave} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <div className="form-grid">
            {/* Nombre del negocio */}
            <div>
              <label className="form-label" htmlFor="salonName">Nombre del Negocio</label>
              <input
                type="text"
                id="salonName"
                name="salonName"
                value={formData.salonName || formData.clinicName || "GLAMUROSA NAIL’S"}
                onChange={handleChange}
                required
              />
            </div>

            {/* Teléfono */}
            <div>
              <label className="form-label" htmlFor="phone">Teléfono de Contacto</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone || "8992569812"}
                onChange={handleChange}
                required
              />
            </div>

            {/* WhatsApp */}
            <div>
              <label className="form-label" htmlFor="whatsapp">WhatsApp para Citas</label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp || "8992569812"}
                onChange={handleChange}
                required
              />
            </div>

            {/* Correo */}
            <div>
              <label className="form-label" htmlFor="email">Correo Electrónico (Demo)</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email || "contacto@glamurosanails.demo"}
                onChange={handleChange}
                required
              />
            </div>

            {/* Color Principal */}
            <div>
              <label className="form-label" htmlFor="primaryColor">Color Principal de Marca</label>
              <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                <input
                  type="color"
                  id="primaryColorPicker"
                  name="primaryColor"
                  value={formData.primaryColor || "#A85D73"}
                  onChange={handleChange}
                  style={{ width: "45px", height: "42px", padding: "2px", cursor: "pointer" }}
                />
                <input
                  type="text"
                  id="primaryColor"
                  name="primaryColor"
                  value={formData.primaryColor || "#A85D73"}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Dirección */}
            <div className="form-group-full">
              <label className="form-label" htmlFor="address">Ubicación Demostrativa</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address || "Ubicación demostrativa (adaptable a GLAMUROSA NAIL’S)"}
                onChange={handleChange}
                required
              />
            </div>

            {/* Horario */}
            <div className="form-group-full">
              <label className="form-label" htmlFor="schedule">Horario Demostrativo</label>
              <input
                type="text"
                id="schedule"
                name="schedule"
                value={formData.schedule || "Lunes a Sábado de 9:00 AM a 7:00 PM (Demostrativo)"}
                onChange={handleChange}
                required
              />
            </div>

            {/* Mensaje de Confirmación */}
            <div className="form-group-full">
              <label className="form-label" htmlFor="confirmationMessage">Mensaje de Confirmación para Clientas</label>
              <textarea
                id="confirmationMessage"
                name="confirmationMessage"
                rows="3"
                value={formData.confirmationMessage || "Tu cita fue registrada con éxito en GLAMUROSA NAIL’S. Revisaremos tu solicitud y confirmaremos tu horario por WhatsApp."}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>

          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "space-between", 
            paddingTop: "1.5rem", 
            borderTop: "1px solid var(--border-light)",
            flexWrap: "wrap",
            gap: "1rem"
          }}>
            <button
              type="button"
              className="btn btn-outline"
              onClick={handleReset}
              style={{ color: "#DC2626", borderColor: "#FCA5A5" }}
            >
              <RefreshIcon size={16} />
              <span>Restablecer datos demo</span>
            </button>

            <button type="submit" className="btn btn-primary">
              <CheckIcon size={18} />
              <span>Guardar configuración</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
