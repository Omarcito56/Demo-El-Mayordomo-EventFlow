import React from "react";
import { Link } from "react-router-dom";
import { CalendarIcon, SparklesIcon, ArrowRightIcon, CheckCircleIcon, ClockIcon, BellIcon } from "../common/Icons";
import { trackEvent } from "../../analytics/analytics";
import heroHairModel from "../../assets/images/beauty/hero-hair-model.jpg";
import heroMakeupDetail from "../../assets/images/beauty/hero-makeup-detail.jpg";

export const Hero = () => {
  const handleCtaClick = (ctaText) => {
    trackEvent("demo_cta_clicked", {
      cta_location: "hero",
      cta_text: ctaText
    });
  };

  return (
    <section className="hero-boutique-section">
      <div className="container hero-boutique-container">
        {/* Centered Editorial Header */}
        <div className="hero-boutique-header">
          <div className="hero-eyebrow-pill">
            <span className="sparkle-bullet">✦</span>
            <span>BEAUTY · STYLE · YOU</span>
            <span className="sparkle-bullet">✦</span>
          </div>

          <h1 className="hero-boutique-title">
            Siéntete bonita. <br />
            <span className="hero-serif-highlight">Siéntete tú.</span>
          </h1>

          <p className="hero-boutique-subtext">
            Descubre nuestros servicios de belleza y reserva tu próxima cita de forma sencilla.
          </p>

          <div className="hero-boutique-actions">
            <Link 
              to="/agendar" 
              className="btn btn-primary btn-hero-primary"
              onClick={() => handleCtaClick("Reservar cita")}
            >
              <CalendarIcon size={18} />
              <span>Reservar cita</span>
              <ArrowRightIcon size={16} />
            </Link>

            <Link 
              to="/servicios" 
              className="btn btn-secondary btn-hero-secondary"
              onClick={() => handleCtaClick("Ver servicios")}
            >
              <SparklesIcon size={17} />
              <span>Ver servicios</span>
            </Link>
          </div>

          {/* 4 Small Editorial Indicators */}
          <div className="hero-perks-strip">
            <div className="hero-perk-pill">
              <CheckCircleIcon size={14} />
              <span>Reserva en línea</span>
            </div>
            <div className="hero-perk-pill">
              <ClockIcon size={14} />
              <span>Horarios disponibles</span>
            </div>
            <div className="hero-perk-pill">
              <SparklesIcon size={14} />
              <span>Confirmación rápida</span>
            </div>
            <div className="hero-perk-pill">
              <BellIcon size={14} />
              <span>Recordatorios</span>
            </div>
          </div>
        </div>

        {/* Central Vertical Protagonist Photo Composition */}
        <div className="hero-portrait-stage">
          <div className="hero-portrait-frame">
            <img 
              src={heroHairModel} 
              alt="Mujer Bonita Beauty Boutique" 
              className="hero-protagonist-img"
              fetchPriority="high"
            />
            <div className="hero-portrait-badge-top">
              <span>MUJER BONITA</span>
            </div>
            <div className="hero-portrait-badge-sub">
              <span>by Paulina Castillo</span>
            </div>
          </div>

          {/* Floating boutique detail thumbnail */}
          <div className="hero-floating-card-detail">
            <img 
              src={heroMakeupDetail} 
              alt="Detalle de estilismo y belleza" 
              className="hero-floating-thumb"
              loading="lazy"
            />
            <div className="hero-floating-text">
              <strong>Beauty Boutique</strong>
              <span>Tu momento especial</span>
            </div>
          </div>
        </div>

        {/* Discreet demonstrative note */}
        <div className="hero-disclaimer-note">
          <span>* Imágenes utilizadas únicamente con fines demostrativos.</span>
        </div>
      </div>
    </section>
  );
};
