import React from "react";
import { Link } from "react-router-dom";
import { MayordomoLogoIcon, MailIcon } from "../common/Icons";
import { initialBusinessData } from "../../data/eventFlowData";

export const Footer = () => {
  return (
    <footer className="footer-editorial">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.5rem" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "6px", background: "var(--color-champagne)", color: "var(--color-charcoal-deep)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <MayordomoLogoIcon size={20} />
              </div>
              <h3 className="footer-brand-title">{initialBusinessData.brandShort}</h3>
            </div>
            <span className="footer-brand-subtitle">Banquetes & Catering</span>
            <p className="footer-brand-desc">
              Propuesta digital interactiva para la digitalización de cotizaciones, agenda de disponibilidad y coordinación de eventos de ticket alto.
            </p>
          </div>

          {/* Nav Col 1 */}
          <div>
            <h4 className="footer-col-heading">Navegación</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item"><Link to="/">Inicio</Link></li>
              <li className="footer-link-item"><a href="#paquetes">Paquetes demo</a></li>
              <li className="footer-link-item"><Link to="/cotizar">Cotizador digital</Link></li>
              <li className="footer-link-item"><a href="#eventos">Formatos de evento</a></li>
              <li className="footer-link-item"><a href="#calendario">Disponibilidad</a></li>
            </ul>
          </div>

          {/* Nav Col 2 */}
          <div>
            <h4 className="footer-col-heading">Eventos Demo</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item"><Link to="/cotizar?tipo=boda">Bodas y recepciones</Link></li>
              <li className="footer-link-item"><Link to="/cotizar?tipo=xv-anos">XV Años de gala</Link></li>
              <li className="footer-link-item"><Link to="/cotizar?tipo=corporativo">Eventos corporativos</Link></li>
              <li className="footer-link-item"><Link to="/cotizar?tipo=graduacion">Graduaciones</Link></li>
              <li className="footer-link-item"><Link to="/cotizar?tipo=cumpleanos">Aniversarios y cumpleaños</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="footer-col-heading">Atención Oficial</h4>
            <div className="footer-contact-info">
              <a href={`mailto:${initialBusinessData.email}`} className="footer-contact-pill">
                <MailIcon size={16} />
                <span>{initialBusinessData.email}</span>
              </a>
              <span style={{ fontSize: "0.8rem", color: "#8E887E", lineHeight: 1.5 }}>
                Canal exclusivo verificado para atención de consultas.
              </span>
            </div>
          </div>
        </div>

        {/* Disclaimer Bar */}
        <div className="footer-legal-disclaimer">
          {initialBusinessData.disclaimer}
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            © {new Date().getFullYear()} {initialBusinessData.name}. Todos los derechos reservados.
          </div>

          <div className="footer-bs-code-tag">
            {initialBusinessData.footerNote}
          </div>

          <div>
            <Link to="/admin/login" className="footer-admin-link">
              Acceso a Panel EventFlow Admin →
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
