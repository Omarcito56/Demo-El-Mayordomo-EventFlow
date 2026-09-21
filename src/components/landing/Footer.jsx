import React from "react";
import { Link } from "react-router-dom";
import { MapPinIcon, PhoneIcon, WhatsAppIcon, ClockIcon, SparklesIcon } from "../common/Icons";
import { initialBusinessData } from "../../data/businessData";

export const Footer = () => {
  return (
    <footer className="footer-editorial" id="contacto-footer">
      <div className="container">
        <div className="footer-editorial-grid">
          {/* Brand Column */}
          <div className="footer-editorial-brand">
            <span className="footer-brand-title">Mujer Bonita</span>
            <span className="footer-brand-tagline">by Paulina Castillo</span>
            <p className="footer-editorial-desc">
              Beauty Boutique. Servicios de estilismo, coloración, peinado, maquillaje y cuidado personal por cita. Consulta disponibilidad y agenda tu cita en línea.
            </p>
            <div className="footer-demo-badge">
              <span>Propuesta Comercial Demostrativa · BS Code</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Explorar</h4>
            <ul className="footer-editorial-nav">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/servicios">Catálogo de Servicios</Link></li>
              <li><a href="/#experiencia">Experiencia</a></li>
              <li><Link to="/agendar">Agenda en Línea</Link></li>
              <li><a href="/#galeria">Beauty Inspiration</a></li>
              <li><a href="/#contacto">Contacto</a></li>
            </ul>
          </div>

          {/* Contact & Channels */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Contacto</h4>
            <div className="footer-item-row">
              <PhoneIcon size={16} />
              <span>Teléfono: {initialBusinessData.phoneFormatted}</span>
            </div>
            <div className="footer-item-row">
              <WhatsAppIcon size={16} />
              <a 
                href={`https://wa.me/52${initialBusinessData.whatsapp}?text=Hola%20Mujer%20Bonita`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-whatsapp-link"
              >
                WhatsApp: {initialBusinessData.phoneFormatted}
              </a>
            </div>
            <div className="footer-item-row">
              <SparklesIcon size={16} />
              <span>Facebook: Mujer Bonita by Paulina Castillo</span>
            </div>
            <div className="footer-item-row">
              <ClockIcon size={16} />
              <span>{initialBusinessData.schedule}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-editorial-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} Mujer Bonita by Paulina Castillo. Servicios, precios e imágenes utilizados con fines demostrativos.
          </p>
          <p className="footer-credits">
            Propuesta comercial demostrativa desarrollada por <strong>BS Code</strong>.
          </p>
        </div>
      </div>
    </footer>
  );
};
