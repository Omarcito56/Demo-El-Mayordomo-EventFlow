import React from "react";
import { Link } from "react-router-dom";
import { CalendarIcon, SparklesIcon, ArrowRightIcon, CheckCircleIcon, ClockIcon, BellIcon, CreditCardIcon } from "../common/Icons";
import { trackEvent } from "../../analytics/analytics";
import heroNailsMacro from "../../assets/images/nails/hero-nails-macro.jpg";
import heroNailsDetail from "../../assets/images/nails/hero-nails-detail.jpg";

export const Hero = () => {
  const handleCtaClick = (ctaText) => {
    trackEvent("demo_cta_clicked", {
      cta_location: "hero",
      cta_text: ctaText
    });
  };

  const scrollToServices = () => {
    const el = document.getElementById("servicios");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-editorial-section">
      <div className="container hero-editorial-grid">
        {/* Left Column: Asymmetric Editorial Content */}
        <div className="hero-editorial-left">
          <div className="hero-eyebrow-glam">
            <span className="sparkle-bullet">✦</span>
            <span>NAILS · BEAUTY · YOU</span>
            <span className="sparkle-bullet">✦</span>
          </div>

          <h1 className="hero-editorial-title">
            Tus uñas. <br />
            Tu estilo. <br />
            <span className="hero-editorial-highlight">Tu momento.</span>
          </h1>

          <p className="hero-editorial-subtext">
            Explora servicios, encuentra tu horario ideal y reserva tu próxima cita en pocos pasos.
          </p>

          <div className="hero-editorial-actions">
            <Link 
              to="/agendar" 
              className="btn btn-primary btn-hero-glam"
              onClick={() => handleCtaClick("Reservar cita")}
            >
              <CalendarIcon size={18} />
              <span>Reservar cita</span>
              <ArrowRightIcon size={16} />
            </Link>

            <button
              type="button"
              className="btn btn-secondary btn-hero-outline"
              onClick={() => {
                handleCtaClick("Ver servicios");
                scrollToServices();
              }}
            >
              <SparklesIcon size={17} />
              <span>Ver servicios</span>
            </button>
          </div>

          {/* 4 Indicators */}
          <div className="hero-glam-indicators">
            <div className="hero-indicator-item">
              <CheckCircleIcon size={15} />
              <span>Reserva en línea</span>
            </div>
            <div className="hero-indicator-item">
              <ClockIcon size={15} />
              <span>Horarios disponibles</span>
            </div>
            <div className="hero-indicator-item">
              <CreditCardIcon size={15} />
              <span>Anticipo demo</span>
            </div>
            <div className="hero-indicator-item">
              <BellIcon size={15} />
              <span>Recordatorios</span>
            </div>
          </div>
        </div>

        {/* Right Column: Asymmetric Macro Photography Composition */}
        <div className="hero-editorial-right">
          <div className="hero-photo-stage">
            {/* Ambient Chrome Glow Behind Main Photo */}
            <div className="hero-ambient-glow" aria-hidden="true"></div>

            {/* Main Macro Photograph */}
            <div className="hero-main-photo-frame">
              <img 
                src={heroNailsMacro} 
                alt="Manicura y Nail Art en GLAMUROSA NAIL’S" 
                className="hero-main-photo"
                fetchPriority="high"
              />
              <div className="hero-brand-overlay-tag">
                <span className="hero-tag-brand">GLAMUROSA</span>
                <span className="hero-tag-sub">NAIL STUDIO</span>
              </div>
            </div>

            {/* Overlapping Secondary Detail Photograph */}
            <div className="hero-detail-photo-card">
              <div className="hero-detail-frame">
                <img 
                  src={heroNailsDetail} 
                  alt="Detalle de esmaltes y nail art" 
                  className="hero-detail-photo"
                  loading="lazy"
                />
              </div>
              <div className="hero-detail-info">
                <div className="hero-chrome-dot"></div>
                <div>
                  <strong>Nail Art & Gel</strong>
                  <span>Acabado impecable</span>
                </div>
              </div>
            </div>

            {/* Subtle Glossy Chrome Accent Chip */}
            <div className="hero-chrome-chip">
              <SparklesIcon size={14} />
              <span>Glossy & Chrome Nails</span>
            </div>
          </div>
        </div>
      </div>

      {/* Discrete Demonstrative Disclaimer */}
      <div className="hero-bottom-disclaimer">
        <span>* Servicios, precios, profesionales e imágenes utilizados con fines demostrativos. La versión final puede adaptarse a la información real de GLAMUROSA NAIL’S.</span>
      </div>
    </section>
  );
};
