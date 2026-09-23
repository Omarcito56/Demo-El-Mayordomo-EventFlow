import React from "react";
import { UtensilsIcon, CalendarIcon, ShieldCheckIcon, ClockIcon } from "../common/Icons";

export const IntroSection = () => {
  return (
    <section className="intro-section" id="experiencia">
      <div className="container">
        <div className="intro-grid">
          {/* Visual Composition */}
          <div className="intro-photo-composition">
            <img 
              src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=80" 
              alt="Catering gourmet y montaje de recepción"
              className="intro-img-main"
              loading="lazy"
            />
            <div className="intro-card-overlay">
              <div className="intro-overlay-num">100%</div>
              <p className="intro-overlay-text">
                Centralización demostrativa: desde la primera idea de menú hasta el día de la celebración.
              </p>
            </div>
          </div>

          {/* Text Content */}
          <div className="intro-content">
            <span className="eyebrow">Concepto del Servicio</span>
            <h2 className="intro-heading">
              Celebra. Nosotros organizamos.
            </h2>
            <p className="intro-text-concept">
              Una experiencia digital puede facilitar desde la primera cotización hasta el seguimiento del evento, reduciendo mensajes repetitivos y centralizando la información en un entorno ágil y confiable.
            </p>

            <div className="intro-points-grid">
              <div className="intro-point-card">
                <div className="intro-point-icon">
                  <UtensilsIcon size={22} />
                </div>
                <h3 className="intro-point-title">Gastronomía y Montaje</h3>
                <p className="intro-point-desc">
                  Presentación de banquetes en tiempos y estaciones con vajilla y cristalería cuidada.
                </p>
              </div>

              <div className="intro-point-card">
                <div className="intro-point-icon">
                  <CalendarIcon size={22} />
                </div>
                <h3 className="intro-point-title">Agenda Centralizada</h3>
                <p className="intro-point-desc">
                  Consulta de fechas y control de disponibilidad sin cruces de información.
                </p>
              </div>

              <div className="intro-point-card">
                <div className="intro-point-icon">
                  <ClockIcon size={22} />
                </div>
                <h3 className="intro-point-title">Cotizaciones Rápidas</h3>
                <p className="intro-point-desc">
                  Estimaciones en tiempo real que ahorran días de intercambio de mensajes.
                </p>
              </div>

              <div className="intro-point-card">
                <div className="intro-point-icon">
                  <ShieldCheckIcon size={22} />
                </div>
                <h3 className="intro-point-title">Certezay Claridad</h3>
                <p className="intro-point-desc">
                  Registro de acuerdos, servicios incluidos y seguimiento de anticipos demostrativos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
