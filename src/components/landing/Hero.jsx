import React from "react";
import { Link } from "react-router-dom";
import { CalendarIcon, SparklesIcon, ArrowRightIcon } from "../common/Icons";
import { trackEvent } from "../../analytics/analytics";
import heroHairModel from "../../assets/images/beauty/hero-hair-model.jpg";
import heroNailsDetail from "../../assets/images/beauty/hero-nails-detail.jpg";
import heroMakeupDetail from "../../assets/images/beauty/hero-makeup-detail.jpg";

export const Hero = () => {
  const handleCtaClick = (ctaText) => {
    trackEvent("demo_cta_clicked", {
      cta_location: "hero",
      cta_text: ctaText
    });
  };

  return (
    <section className="hero-editorial-section">
      <div className="container hero-editorial-container">
        {/* Left Column: Editorial Copy */}
        <div className="hero-editorial-content">
          <div className="hero-eyebrow-wrap">
            <span className="hero-eyebrow-badge">BELLART SALÓN · REYNOSA</span>
          </div>

          <h1 className="hero-editorial-title">
            Tu estilo empieza <br />
            con un momento <br />
            <span className="hero-title-serif">para ti.</span>
          </h1>

          <p className="hero-editorial-subtext">
            Descubre nuestros servicios de belleza, elige tu horario y reserva tu próxima visita de forma sencilla.
          </p>

          <div className="hero-editorial-actions">
            <Link 
              to="/agendar" 
              className="btn btn-primary btn-hero-cta"
              onClick={() => handleCtaClick("Reservar cita")}
            >
              <CalendarIcon size={18} />
              <span>Reservar cita</span>
              <ArrowRightIcon size={16} />
            </Link>

            <Link 
              to="/servicios" 
              className="btn btn-secondary btn-hero-secondary"
              onClick={() => handleCtaClick("Explorar servicios")}
            >
              <SparklesIcon size={17} />
              <span>Explorar servicios</span>
            </Link>
          </div>

          <div className="hero-editorial-perks">
            <span className="perk-item">Reserva en línea</span>
            <span className="perk-dot">•</span>
            <span className="perk-item">Confirmación rápida</span>
            <span className="perk-dot">•</span>
            <span className="perk-item">Atención personalizada</span>
          </div>
        </div>

        {/* Right Column: Editorial Photo Composition */}
        <div className="hero-editorial-visual">
          <div className="hero-photo-composition">
            {/* Main vertical image: styled hair model */}
            <div className="hero-photo-main-frame">
              <img 
                src={heroHairModel} 
                alt="Estilizado de cabello en Bellart Salón" 
                className="hero-photo-main"
                fetchPriority="high"
              />
              <div className="hero-photo-tag-pill">
                <span>HAIR & COLOR</span>
              </div>
            </div>

            {/* Overlapping secondary image: nail art / manicure */}
            <div className="hero-photo-overlap-nails">
              <img 
                src={heroNailsDetail} 
                alt="Diseño de uñas y manicure" 
                className="hero-photo-nails"
                loading="lazy"
              />
              <div className="hero-photo-mini-label">
                <span>NAILS & SPA</span>
              </div>
            </div>

            {/* Overlapping tertiary image: professional makeup detail */}
            <div className="hero-photo-overlap-makeup">
              <img 
                src={heroMakeupDetail} 
                alt="Detalle de maquillaje profesional" 
                className="hero-photo-makeup"
                loading="lazy"
              />
              <div className="hero-photo-mini-label">
                <span>MAKEUP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
