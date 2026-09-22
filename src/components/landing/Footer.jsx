import React from "react";
import { Link } from "react-router-dom";
import { PhoneIcon, WhatsAppIcon, ClockIcon, SparklesIcon } from "../common/Icons";
import { initialBusinessData } from "../../data/businessData";

export const Footer = () => {
  return (
    <footer className="footer-editorial" id="contacto-footer">
      <div className="container">
        <div className="footer-editorial-grid">
          {/* Brand Column */}
          <div className="footer-editorial-brand">
            <span className="footer-brand-title">GLAMUROSA</span>
            <span className="footer-brand-tagline">NAIL’S STUDIO</span>
            <p className="footer-editorial-desc">
              Nail Studio Experience. Servicios de uñas acrílicas, gel semipermanente, nail art, manicure y pedicure spa por cita. Consulta disponibilidad y reserva tu set en línea.
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
              <li><Link to="/servicios">Menú de Servicios</Link></li>
              <li><a href="/#anticipo">Aparta tu Cita</a></li>
              <li><Link to="/agendar">Agenda en Línea</Link></li>
              <li><a href="/#inspiracion">Inspiración & Tendencias</a></li>
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
                href={`https://wa.me/52${initialBusinessData.whatsapp}?text=Hola%20GLAMUROSA%20NAIL%E2%80%99S`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-whatsapp-link"
              >
                WhatsApp: {initialBusinessData.phoneFormatted}
              </a>
            </div>
            <div className="footer-item-row">
              <SparklesIcon size={16} />
              <span>Facebook: GLAMUROSA NAIL’S</span>
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
            © {new Date().getFullYear()} GLAMUROSA NAIL’S. Servicios, precios, profesionales e imágenes utilizados con fines demostrativos.
          </p>
          <p className="footer-credits">
            Propuesta comercial demostrativa desarrollada por <strong>BS Code</strong>.
          </p>
        </div>
      </div>
    </footer>
  );
};
