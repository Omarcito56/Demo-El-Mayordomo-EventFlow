import React from "react";
import { Modal } from "../common/Modal";
import { StatusBadge } from "../common/StatusBadge";
import { WhatsAppIcon, ClockIcon, UserIcon, ScissorsIcon, SparklesIcon, CreditCardIcon } from "../common/Icons";
import { trackEvent } from "../../analytics/analytics";

export const AppointmentDetailModal = ({ isOpen, onClose, appointment }) => {
  if (!appointment) return null;

  const clientDisplayName = appointment.clientName || appointment.patientName || "Cliente";
  const clientPhone = appointment.clientPhone || appointment.patientPhone || "";
  const clientEmail = appointment.clientEmail || appointment.patientEmail || "No registrado";
  const professionalName = appointment.professional || "Sin preferencia";
  const cost = appointment.cost || "$650";
  const deposit = appointment.depositAmount || "$0";
  const balance = appointment.balance || "$450";

  const whatsappMessage = encodeURIComponent(
    `Hola ${clientDisplayName}, te contactamos de Bellart Salón respecto a tu cita (${appointment.folio}) para ${appointment.serviceName} el día ${appointment.date} a las ${appointment.time}.`
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Detalle de la Cita" maxWidth="620px">
      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        {/* Top summary row */}
        <div style={{ 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "space-between", 
          padding: "1rem 1.25rem", 
          background: "var(--color-primary-soft)", 
          borderRadius: "12px",
          border: "1px solid var(--color-primary-soft-border)"
        }}>
          <div>
            <span style={{ fontSize: "0.76rem", color: "var(--color-primary)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px" }}>
              FOLIO ASIGNADO
            </span>
            <div className="ph-mask" style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--color-primary)", fontFamily: "monospace" }}>
              {appointment.folio}
            </div>
          </div>

          <div style={{ textAlign: "right" }}>
            <span style={{ fontSize: "0.76rem", color: "var(--color-text-secondary)", fontWeight: 600, display: "block", marginBottom: "4px" }}>
              ESTADO ACTUAL
            </span>
            <StatusBadge status={appointment.status} />
          </div>
        </div>

        {/* Detailed Grid: Folio, Cliente, Teléfono, Correo, Servicio, Profesional, Fecha, Hora, Costo, Anticipo, Saldo, Comentarios */}
        <div className="detail-grid">
          <div>
            <div className="detail-lbl">Cliente</div>
            <div className="detail-val ph-mask" style={{ fontWeight: 700 }}>{clientDisplayName}</div>
          </div>

          <div>
            <div className="detail-lbl">Tipo de Cliente</div>
            <div className="detail-val">
              {appointment.isFirstTime ? "Primera visita" : "Cliente frecuente"}
            </div>
          </div>

          <div>
            <div className="detail-lbl">Teléfono / WhatsApp</div>
            <div className="detail-val ph-mask" style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
              <span>{clientPhone}</span>
              <a 
                href={`https://wa.me/52${clientPhone}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#16A34A", display: "inline-flex" }}
                title="Abrir chat de WhatsApp"
              >
                <WhatsAppIcon size={16} />
              </a>
            </div>
          </div>

          <div>
            <div className="detail-lbl">Correo Electrónico</div>
            <div className="detail-val ph-mask">{clientEmail}</div>
          </div>

          <div>
            <div className="detail-lbl">Servicio Solicitado</div>
            <div className="detail-val" style={{ fontWeight: 600 }}>{appointment.serviceName}</div>
          </div>

          <div>
            <div className="detail-lbl">Profesional / Estilista</div>
            <div className="detail-val" style={{ color: "var(--color-primary)", fontWeight: 700 }}>
              {professionalName}
            </div>
          </div>

          <div>
            <div className="detail-lbl">Fecha Programada</div>
            <div className="detail-val" style={{ color: "var(--color-primary)" }}>{appointment.date}</div>
          </div>

          <div>
            <div className="detail-lbl">Horario Programado</div>
            <div className="detail-val" style={{ color: "var(--color-accent)", fontWeight: 700 }}>{appointment.time}</div>
          </div>

          {/* Financial Breakdown: Costo, Anticipo, Saldo */}
          <div style={{ background: "var(--color-bg)", padding: "0.75rem 1rem", borderRadius: "8px", border: "1px solid var(--border-light)" }}>
            <div className="detail-lbl">Costo del Servicio</div>
            <div className="detail-val" style={{ fontWeight: 700 }}>{cost}</div>
          </div>

          <div style={{ background: "#ECFDF5", padding: "0.75rem 1rem", borderRadius: "8px", border: "1px solid #A7F3D0" }}>
            <div className="detail-lbl">Anticipo Demo</div>
            <div className="detail-val" style={{ color: "#059669", fontWeight: 700 }}>
              {deposit} ({appointment.depositStatus || "No requerido"})
            </div>
          </div>

          <div className="detail-item-full" style={{ background: "var(--color-primary-soft)", padding: "0.75rem 1rem", borderRadius: "8px", border: "1px solid var(--color-primary-soft-border)" }}>
            <div className="detail-lbl">Saldo Restante por Liquidar en Salón</div>
            <div className="detail-val" style={{ color: "var(--color-primary)", fontWeight: 800, fontSize: "1.1rem" }}>
              {balance}
            </div>
          </div>

          {/* Comentarios del cliente */}
          <div className="detail-item-full">
            <div className="detail-lbl">Comentarios o Peticiones Especiales</div>
            <div className="ph-mask" style={{ 
              background: "var(--color-bg)", 
              padding: "0.85rem", 
              borderRadius: "8px", 
              border: "1px solid var(--border-light)",
              fontSize: "0.9rem",
              color: "var(--color-text-secondary)"
            }}>
              {appointment.comments || "Sin comentarios adicionales registrados"}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.75rem", paddingTop: "1rem", borderTop: "1px solid var(--border-light)" }}>
          <button type="button" className="btn btn-secondary btn-sm" onClick={onClose}>
            Cerrar
          </button>
          <a 
            href={`https://wa.me/52${clientPhone}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-sm"
            onClick={() => {
              trackEvent("whatsapp_reminder_clicked", {
                module: "appointment_modal",
                record_type: "appointment"
              });
            }}
          >
            <WhatsAppIcon size={16} />
            <span>Contactar por WhatsApp</span>
          </a>
        </div>
      </div>
    </Modal>
  );
};
