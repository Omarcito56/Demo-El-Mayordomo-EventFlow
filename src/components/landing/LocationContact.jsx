import React from "react";
import { PhoneIcon, WhatsAppIcon, ClockIcon, CalendarIcon, ArrowRightIcon, SparklesIcon } from "../common/Icons";
import { initialBusinessData } from "../../data/businessData";
import { Link } from "react-router-dom";
import contactNailsPhoto from "../../assets/images/nails/service-manicure-clasico.jpg";

export const LocationContact = () => {
  return (
    <section className="location-editorial-section" id="contacto">
      <div className="container">
        <div className="section-header-editorial text-center">
          <span className="editorial-eyebrow">CONTACTO & ATENCIÓN</span>
          <h2 className="editorial-title">GLAMUROSA NAIL’S</h2>
          <p className="editorial-subtext">
            Atención personalizada y servicios de uñas por cita para consentirte en cada visita.
          </p>
        </div>

        <div className="location-editorial-grid">
          {/* Left Column: Contact and Channels Card */}
          <div className="location-info-card">
            <h3 className="location-card-header-title">Canales de Contacto</h3>
            <p className="location-card-header-sub">Coordina tu horario o solicita informes directos.</p>

            <div className="location-items-stack">
              <div className="location-item-row">
                <div className="location-icon-circle">
                  <PhoneIcon size={20} />
                </div>
                <div className="location-item-content">
                  <h4 className="location-item-label">Teléfono directo</h4>
                  <p className="location-item-val">
                    <a href={`tel:${initialBusinessData.phone}`} className="location-link">
                      {initialBusinessData.phoneFormatted}
                    </a>
                  </p>
                </div>
              </div>

              <div className="location-item-row">
                <div className="location-icon-circle whatsapp-circle">
                  <WhatsAppIcon size={20} />
                </div>
                <div className="location-item-content">
                  <h4 className="location-item-label">WhatsApp oficial</h4>
                  <p className="location-item-val">
                    <a 
                      href={`https://wa.me/52${initialBusinessData.whatsapp}?text=${encodeURIComponent("Hola GLAMUROSA NAIL’S, me gustaría solicitar información sobre citas y servicios.")}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="location-link whatsapp-link"
                    >
                      Enviar mensaje ({initialBusinessData.phoneFormatted})
                    </a>
                  </p>
                </div>
              </div>

              <div className="location-item-row">
                <div className="location-icon-circle">
                  <SparklesIcon size={20} />
                </div>
                <div className="location-item-content">
                  <h4 className="location-item-label">Canal público</h4>
                  <p className="location-item-val">
                    <span>Facebook · GLAMUROSA NAIL’S</span>
                  </p>
                </div>
              </div>

              <div className="location-item-row">
                <div className="location-icon-circle">
                  <ClockIcon size={20} />
                </div>
                <div className="location-item-content">
                  <h4 className="location-item-label">Atención por cita</h4>
                  <p className="location-item-val">Horarios demostrativos disponibles en la agenda en línea.</p>
                </div>
              </div>
            </div>

            <div className="location-action-bar">
              <Link to="/agendar" className="btn btn-primary btn-block">
                <CalendarIcon size={17} />
                <span>Reservar cita en línea</span>
                <ArrowRightIcon size={15} />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Presentation Showcase */}
          <div className="location-visual-card">
            <img 
              src={contactNailsPhoto} 
              alt="Espacio y servicios de GLAMUROSA NAIL’S" 
              className="location-visual-photo"
              loading="lazy"
            />
            <div className="location-visual-overlay">
              <span className="location-brand-badge">NAIL STUDIO</span>
              <h3 className="location-visual-title">GLAMUROSA NAIL’S</h3>
              <p className="location-visual-sub">Nail Studio Experience</p>
              <p className="location-visual-desc">
                Servicios demostrativos de uñas acrílicas, gel semipermanente, nail art, manicura y pedicura spa por cita.
              </p>
              <p className="location-disclaimer-note">
                * Servicios, precios, profesionales e imágenes utilizados con fines demostrativos. La versión final puede adaptarse a la información real de GLAMUROSA NAIL’S.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
