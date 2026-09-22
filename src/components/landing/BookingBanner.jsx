import React from "react";
import { Link } from "react-router-dom";
import { CalendarIcon, ArrowRightIcon, WhatsAppIcon } from "../common/Icons";
import { trackEvent } from "../../analytics/analytics";
import bannerNailsImg from "../../assets/images/nails/banner-nails.jpg";

export const BookingBanner = () => {
  const handleCtaClick = () => {
    trackEvent("demo_cta_clicked", {
      cta_location: "booking_banner",
      cta_text: "Reservar cita"
    });
  };

  return (
    <section className="booking-banner-section" style={{ backgroundImage: `url(${bannerNailsImg})` }}>
      <div className="booking-banner-overlay"></div>
      <div className="container booking-banner-content">
        <span className="banner-eyebrow">GLAMUROSA NAIL’S</span>
        <h2 className="banner-title">
          Tu próximo set <br />
          <span className="banner-title-italic">empieza aquí.</span>
        </h2>
        <p className="banner-subtext">
          Elige servicio, técnica y horario en pocos pasos.
        </p>
        <div className="banner-cta-group">
          <Link 
            to="/agendar" 
            className="btn btn-primary btn-banner-cta"
            onClick={handleCtaClick}
          >
            <CalendarIcon size={18} />
            <span>Reservar cita</span>
            <ArrowRightIcon size={16} />
          </Link>
          <a
            href="https://wa.me/528992569812?text=Hola%20GLAMUROSA%20NAIL%E2%80%99S%2C%20quisiera%20pedir%20informes."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light"
          >
            <WhatsAppIcon size={18} />
            <span>Preguntar por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
