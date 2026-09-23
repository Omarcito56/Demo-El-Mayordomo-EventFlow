import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon, SparklesIcon, CheckCircleIcon } from "../common/Icons";

export const Hero = () => {
  return (
    <section className="hero-editorial">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Copy & CTAs */}
          <div className="hero-content">
            <div className="hero-eyebrow">
              <SparklesIcon size={14} />
              <span>BANQUETES · CATERING · EVENTOS</span>
            </div>

            <h1 className="hero-title">
              Tu evento empieza mucho antes del gran día.
            </h1>

            <p className="hero-subtitle">
              Explora una propuesta digital para cotizar, organizar y solicitar disponibilidad para tu evento en pocos pasos.
            </p>

            <div className="hero-actions">
              <Link to="/cotizar" className="btn btn-primary btn-lg">
                <span>Cotizar mi evento</span>
                <ArrowRightIcon size={18} />
              </Link>
              <a href="#paquetes" className="btn btn-secondary btn-lg">
                <span>Explorar paquetes</span>
              </a>
            </div>

            {/* 4 Indicadores discretos de la propuesta demo */}
            <div className="hero-indicators">
              <div className="hero-indicator-item">
                <span className="indicator-number">01</span>
                <span className="indicator-label">Cotización inicial</span>
                <span className="indicator-sub">Cálculo en vivo demo</span>
              </div>
              <div className="hero-indicator-item">
                <span className="indicator-number">02</span>
                <span className="indicator-label">Disponibilidad</span>
                <span className="indicator-sub">Fechas demostrativas</span>
              </div>
              <div className="hero-indicator-item">
                <span className="indicator-number">03</span>
                <span className="indicator-label">Anticipo</span>
                <span className="indicator-sub">Simulación de apartado</span>
              </div>
              <div className="hero-indicator-item">
                <span className="indicator-number">04</span>
                <span className="indicator-label">Seguimiento</span>
                <span className="indicator-sub">Centralización digital</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Asimétrico de Alto Impacto */}
          <div className="hero-visual-wrap">
            <div className="hero-main-photo-card">
              <img 
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80" 
                alt="Montaje de banquete elegante de gala" 
                className="hero-img-cover"
                loading="eager"
              />
              <div className="hero-floating-badge">
                <div className="hero-badge-left">
                  <span className="hero-badge-tag">Propuesta Demostrativa</span>
                  <span className="hero-badge-title">El Mayordomo Banquetes & Catering</span>
                </div>
                <div style={{ color: "var(--color-champagne)" }}>
                  <CheckCircleIcon size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
