import React from "react";
import { Link } from "react-router-dom";
import { CalendarIcon, ArrowRightIcon } from "../common/Icons";
import { trackEvent } from "../../analytics/analytics";
import bannerImg from "../../assets/images/beauty/banner-booking.jpg";

export const BookingBanner = () => {
  const handleCtaClick = () => {
    trackEvent("demo_cta_clicked", {
      cta_location: "booking_banner",
      cta_text: "Reservar cita"
    });
  };

  return (
    <section className="booking-banner-section" style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="booking-banner-overlay"></div>
      <div className="container booking-banner-content">
        <span className="banner-eyebrow">AGENDA EN LÍNEA EN REYNOSA</span>
        <h2 className="banner-title">
          Tu próximo momento Bellart <br />
          <span className="banner-title-italic">empieza aquí.</span>
        </h2>
        <p className="banner-subtext">
          Selecciona tu servicio, profesional de confianza y horario ideal en pocos pasos y sin esperar respuesta.
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
            href="https://wa.me/528991241188?text=Hola,%20quisiera%20pedir%20informes%20en%20Bellart%20Sal%C3%B3n."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light"
          >
            Preguntar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
