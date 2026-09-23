import React from "react";
import { MailIcon, SendIcon, ShieldCheckIcon } from "../common/Icons";
import { initialBusinessData } from "../../data/eventFlowData";

export const LocationContact = () => {
  return (
    <section className="contact-editorial-section" id="contacto">
      <div className="container">
        <div className="contact-editorial-box">
          <span className="eyebrow">Atención Directa</span>
          <h2 className="contact-title">
            Contacto y Consultas
          </h2>
          <p className="contact-desc">
            Para requerimientos especiales de menú, montajes a la medida o aclaraciones de la propuesta digital, ponte en contacto directo a través de nuestro correo oficial.
          </p>

          <div className="contact-email-card">
            <div className="contact-email-row">
              <MailIcon size={22} className="contact-email-icon" />
              <span className="contact-email-address">{initialBusinessData.email}</span>
            </div>

            <a 
              href={`mailto:${initialBusinessData.email}?subject=${encodeURIComponent("Consulta sobre Banquetes y Catering - El Mayordomo")}`}
              className="btn btn-primary contact-send-btn"
            >
              <SendIcon size={16} />
              <span>Enviar correo directo</span>
            </a>
          </div>

          <div className="contact-disclaimer-box">
            <ShieldCheckIcon size={18} className="contact-disclaimer-icon" />
            <p className="contact-disclaimer-text">
              <strong>Aviso de demostración comercial:</strong> Los paquetes, costos por invitado, fechas de disponibilidad e imágenes fotográficas se presentan exclusivamente con propósitos ilustrativos. La versión operativa definitiva se ajustará a la capacidad y menús reales de El Mayordomo Banquetes & Catering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
