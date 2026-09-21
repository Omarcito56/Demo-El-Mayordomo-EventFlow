import React from "react";
import { PhoneIcon, WhatsAppIcon, ClockIcon, CalendarIcon, ArrowRightIcon, SparklesIcon } from "../common/Icons";
import { initialBusinessData } from "../../data/businessData";
import { Link } from "react-router-dom";
import salonLocationPhoto from "../../assets/images/beauty/experience-salon.jpg";

export const LocationContact = () => {
  return (
    <section className="location-editorial-section" id="contacto">
      <div className="container">
        <div className="section-header-editorial text-center">
          <span className="editorial-eyebrow">CONTACTO & ATENCIÓN</span>
          <h2 className="editorial-title">Mujer Bonita by Paulina Castillo</h2>
          <p className="editorial-subtext">
            Atención personalizada y servicios de belleza por cita para consentirte en cada visita.
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
                      href={`https://wa.me/52${initialBusinessData.whatsapp}?text=${encodeURIComponent("Hola Mujer Bonita, me gustaría solicitar información sobre citas y servicios.")}`}
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
                    <span>Facebook · Mujer Bonita by Paulina Castillo</span>
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
              src={salonLocationPhoto} 
              alt="Espacio boutique de Mujer Bonita" 
              className="location-visual-photo"
              loading="lazy"
            />
            <div className="location-visual-overlay">
              <span className="location-brand-badge">BEAUTY BOUTIQUE</span>
              <h3 className="location-visual-title">Mujer Bonita</h3>
              <p className="location-visual-sub">by Paulina Castillo</p>
              <p className="location-visual-desc">
                Servicios demostrativos de belleza, estilismo, color, maquillaje y cuidado personal por cita.
              </p>
              <p className="location-disclaimer-note">
                * Servicios, precios e imágenes utilizados con fines demostrativos. La propuesta final puede adaptarse a la información real de Mujer Bonita.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
