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
            <span className="footer-brand-title">Bellart Salón</span>
            <span className="footer-brand-tagline">BEAUTY · HAIR · NAILS · MAKEUP</span>
            <p className="footer-editorial-desc">
              Espacio de cuidado personal y estilismo profesional en Reynosa, Tamaulipas. Consulta servicios, elige a tu estilista y agenda tu cita en línea.
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
              <li><Link to="/agendar">Agenda en Línea</Link></li>
              <li><a href="/#galeria">Galería de Inspiración</a></li>
              <li><a href="/#contacto">Ubicación</a></li>
              <li><Link to="/admin/login">Acceso Panel (Demo)</Link></li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Atención & Citas</h4>
            <div className="footer-item-row">
              <PhoneIcon size={16} />
              <span>{initialBusinessData.phone}</span>
            </div>
            <div className="footer-item-row">
              <WhatsAppIcon size={16} />
              <a 
                href={`https://wa.me/52${initialBusinessData.whatsapp}?text=Hola%20Bellart%20Sal%C3%B3n`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-whatsapp-link"
              >
                WhatsApp: {initialBusinessData.phone}
              </a>
            </div>
            <div className="footer-item-row">
              <ClockIcon size={16} />
              <span>{initialBusinessData.schedule}</span>
            </div>
            <div className="footer-item-row">
              <MapPinIcon size={16} />
              <span>{initialBusinessData.locationName} · {initialBusinessData.address}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-editorial-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} Bellart Salón. Información y fotografías con fines de demostración de propuesta.
          </p>
          <p className="footer-credits">
            Propuesta demostrativa desarrollada por <strong>BS Code</strong> (Reynosa, Tamaulipas).
          </p>
        </div>
      </div>
    </footer>
  );
};
