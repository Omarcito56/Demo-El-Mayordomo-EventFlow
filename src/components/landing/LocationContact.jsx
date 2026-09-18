import React from "react";
import { MapPinIcon, PhoneIcon, WhatsAppIcon, ClockIcon, CalendarIcon, ArrowRightIcon } from "../common/Icons";
import { initialBusinessData } from "../../data/businessData";
import { Link } from "react-router-dom";
import salonLocationPhoto from "../../assets/images/beauty/experience-salon.jpg";

export const LocationContact = () => {
  return (
    <section className="location-editorial-section" id="contacto">
      <div className="container">
        <div className="section-header-editorial text-center">
          <span className="editorial-eyebrow">UBICACIÓN Y CONTACTO</span>
          <h2 className="editorial-title">Encuéntranos en Reynosa</h2>
          <p className="editorial-subtext">
            Instalaciones preparadas para brindarte una atención cómoda, relajante y con ambiente exclusivo de belleza.
          </p>
        </div>

        <div className="location-editorial-grid">
          {/* Left Column: Contact and Hours Card */}
          <div className="location-info-card">
            <h3 className="location-card-header-title">Información de Visita</h3>
            <p className="location-card-header-sub">Atención previa cita para brindarte una experiencia sin esperas.</p>

            <div className="location-items-stack">
              <div className="location-item-row">
                <div className="location-icon-circle">
                  <MapPinIcon size={20} />
                </div>
                <div className="location-item-content">
                  <h4 className="location-item-label">{initialBusinessData.locationName}</h4>
                  <p className="location-item-val">{initialBusinessData.address}</p>
                </div>
              </div>

              <div className="location-item-row">
                <div className="location-icon-circle">
                  <ClockIcon size={20} />
                </div>
                <div className="location-item-content">
                  <h4 className="location-item-label">Horarios de atención</h4>
                  <p className="location-item-val">{initialBusinessData.schedule}</p>
                </div>
              </div>

              <div className="location-item-row">
                <div className="location-icon-circle">
                  <PhoneIcon size={20} />
                </div>
                <div className="location-item-content">
                  <h4 className="location-item-label">Teléfono directo</h4>
                  <p className="location-item-val">
                    <a href={`tel:${initialBusinessData.phone.replace(/\s+/g, "")}`} className="location-link">
                      {initialBusinessData.phone}
                    </a>
                  </p>
                </div>
              </div>

              <div className="location-item-row">
                <div className="location-icon-circle whatsapp-circle">
                  <WhatsAppIcon size={20} />
                </div>
                <div className="location-item-content">
                  <h4 className="location-item-label">WhatsApp de citas</h4>
                  <p className="location-item-val">
                    <a 
                      href={`https://wa.me/52${initialBusinessData.whatsapp}?text=${encodeURIComponent("Hola Bellart Salón, me gustaría solicitar información sobre citas y servicios.")}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="location-link whatsapp-link"
                    >
                      Enviar mensaje ({initialBusinessData.phone})
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="location-action-bar">
              <Link to="/agendar" className="btn btn-primary btn-block">
                <CalendarIcon size={17} />
                <span>Reservar cita ahora</span>
                <ArrowRightIcon size={15} />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Presentation Showcase */}
          <div className="location-visual-card">
            <img 
              src={salonLocationPhoto} 
              alt="Instalaciones Bellart Salón Reynosa" 
              className="location-visual-photo"
              loading="lazy"
            />
            <div className="location-visual-overlay">
              <div className="location-visual-pin">
                <MapPinIcon size={24} />
              </div>
              <h3 className="location-visual-title">Bellart Salón</h3>
              <p className="location-visual-desc">
                Espacio exclusivo de belleza y cuidado personal en Reynosa, Tamaulipas.
              </p>
              <div className="location-city-pill">
                <span>📍 Reynosa, Tamaulipas</span>
              </div>
              <p className="location-disclaimer-note">
                * Ubicación y horarios demostrativos adaptables a la sucursal física final de Bellart Salón.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
