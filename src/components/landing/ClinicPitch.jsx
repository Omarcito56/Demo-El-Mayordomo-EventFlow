import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  CalendarCheckIcon, UsersIcon, ClockIcon, CreditCardIcon, 
  WhatsAppIcon, EyeIcon, ArrowRightIcon, CheckCircleIcon, SparklesIcon 
} from "../common/Icons";
import { Modal } from "../common/Modal";

export const ClinicPitch = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const pitchFeatures = [
    {
      icon: <CalendarCheckIcon size={20} />,
      title: "Agenda organizada",
      desc: "Visualización clara de turnos de hoy, mañana y la semana sin cruces de horarios entre estilistas."
    },
    {
      icon: <UsersIcon size={20} />,
      title: "Clientes registrados",
      desc: "Directorio automático de clientas con historial de citas, servicios favoritos y teléfono de contacto."
    },
    {
      icon: <ClockIcon size={20} />,
      title: "Disponibilidad real",
      desc: "Control de espacios y horarios libres para que las clientas solo soliciten turnos realmente disponibles."
    },
    {
      icon: <CreditCardIcon size={20} />,
      title: "Control de anticipos",
      desc: "Registro de anticipos para asegurar el tiempo de las estilistas y reducir cancelaciones de último momento."
    },
    {
      icon: <WhatsAppIcon size={20} />,
      title: "Recordatorios WhatsApp",
      desc: "Envío de recordatorio prearmado en un clic por WhatsApp para confirmar asistencia antes de cada cita.",
      fullWidth: true
    }
  ];

  return (
    <section className="salon-pitch-section">
      <div className="container">
        <div className="salon-pitch-inner">
          {/* Left Column: Pitch Message */}
          <div className="pitch-editorial-left">
            <div className="pitch-badge-wrap">
              <SparklesIcon size={14} />
              <span>PROPUESTA COMERCIAL · BS BEAUTYFLOW</span>
            </div>

            <h2 className="pitch-editorial-title">
              Tu agenda organizada <br />
              <span className="pitch-title-serif">desde un solo lugar.</span>
            </h2>

            <p className="pitch-editorial-desc">
              Consulta las citas del día, organiza horarios, confirma clientes y lleva un control básico de anticipos desde un panel sencillo y moderno.
            </p>
            
            <div className="pitch-actions-wrap">
              <button 
                type="button"
                className="btn btn-primary btn-pitch-experience" 
                onClick={() => setModalOpen(true)}
              >
                <EyeIcon size={18} />
                <span>Conocer la experiencia</span>
                <ArrowRightIcon size={15} />
              </button>
            </div>
          </div>

          {/* Right Column: 5 Feature Cards */}
          <div className="pitch-cards-grid">
            {pitchFeatures.map((feat, idx) => (
              <div 
                key={idx} 
                className={`pitch-feature-card ${feat.fullWidth ? "full-width-card" : ""}`}
              >
                <div className="pitch-card-header">
                  <div className="pitch-card-icon-box">
                    {feat.icon}
                  </div>
                  <h4 className="pitch-card-title">{feat.title}</h4>
                </div>
                <p className="pitch-card-desc">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Explanatory Modal "Conocer la experiencia" */}
      <Modal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        title="¿Cómo beneficia esta solución a Bellart Salón?"
        maxWidth="640px"
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <p style={{ color: "var(--color-text-secondary)", fontSize: "0.95rem", lineHeight: "1.6" }}>
            Esta propuesta comercial de <strong>BS Code</strong> para <strong>Bellart Salón</strong> resuelve los problemas más comunes de administración manual:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start" }}>
              <div style={{ background: "var(--color-accent-soft)", color: "var(--color-accent)", padding: "0.5rem", borderRadius: "10px", marginTop: "2px", flexShrink: 0 }}>
                <CheckCircleIcon size={20} />
              </div>
              <div>
                <strong style={{ color: "var(--color-primary)", display: "block", fontSize: "0.98rem" }}>1. Menos mensajes repetitivos de WhatsApp</strong>
                <span style={{ color: "var(--color-text-secondary)", fontSize: "0.88rem", lineHeight: "1.5" }}>
                  Tus clientas consultan directamente servicios, precios y horarios libres sin necesidad de preguntar una y otra vez "¿tienes espacio para hoy?".
                </span>
              </div>
            </div>

            <div style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start" }}>
              <div style={{ background: "var(--color-primary-soft)", color: "var(--color-primary)", padding: "0.5rem", borderRadius: "10px", marginTop: "2px", flexShrink: 0 }}>
                <CheckCircleIcon size={20} />
              </div>
              <div>
                <strong style={{ color: "var(--color-primary)", display: "block", fontSize: "0.98rem" }}>2. Control de anticipos para asegurar el tiempo de tus estilistas</strong>
                <span style={{ color: "var(--color-text-secondary)", fontSize: "0.88rem", lineHeight: "1.5" }}>
                  Los servicios de alta duración (colorimetría, peinado, tratamientos) pueden solicitar un anticipo simbólico que compromete la asistencia y protege los ingresos del salón.
                </span>
              </div>
            </div>

            <div style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start" }}>
              <div style={{ background: "#F5F3FF", color: "#6D28D9", padding: "0.5rem", borderRadius: "10px", marginTop: "2px", flexShrink: 0 }}>
                <CheckCircleIcon size={20} />
              </div>
              <div>
                <strong style={{ color: "var(--color-primary)", display: "block", fontSize: "0.98rem" }}>3. Todo organizado en una pantalla sin libretas ni hojas sueltas</strong>
                <span style={{ color: "var(--color-text-secondary)", fontSize: "0.88rem", lineHeight: "1.5" }}>
                  Visualiza quién atiende a quién, qué servicios se van a realizar y cuánto saldo resta por liquidar al terminar cada visita.
                </span>
              </div>
            </div>
          </div>

          <div style={{ 
            backgroundColor: "var(--color-bg)", 
            border: "1px solid var(--border-light)", 
            borderRadius: "14px", 
            padding: "1.25rem", 
            textAlign: "center",
            marginTop: "0.75rem"
          }}>
            <p style={{ fontSize: "0.88rem", color: "var(--color-text-secondary)", marginBottom: "0.85rem" }}>
              Puedes explorar el panel de administración con las credenciales demo precargadas:
            </p>
            <Link 
              to="/admin/login" 
              className="btn btn-primary btn-sm"
              onClick={() => setModalOpen(false)}
            >
              <span>Explorar Panel Administrativo Demo</span>
              <ArrowRightIcon size={16} />
            </Link>
          </div>
        </div>
      </Modal>
    </section>
  );
};
