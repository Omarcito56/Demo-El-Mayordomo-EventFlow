import React from "react";
import { Link } from "react-router-dom";
import { initialProfessionalsData, professionalsDisclaimer } from "../../data/professionalsData";
import { SparklesIcon, ArrowRightIcon } from "../common/Icons";
import { trackEvent } from "../../analytics/analytics";

export const StylistsSection = () => {
  // Only show the 3 specific named stylists in the spotlight
  const featuredStylists = initialProfessionalsData.filter(p => p.id !== "sin-preferencia");

  const handleBookWithStylist = (stylistName) => {
    trackEvent("demo_cta_clicked", {
      cta_location: "stylists_section",
      stylist_demo: stylistName
    });
  };

  return (
    <section className="stylists-section">
      <div className="container">
        <div className="section-header-editorial text-center">
          <span className="editorial-eyebrow">EQUIPO DEMOSTRATIVO</span>
          <h2 className="editorial-title">Tu cita, a tu manera</h2>
          <p className="editorial-subtext">
            Conoce a nuestras profesionales y elige quién cuidará de tu estilo en cada visita.
          </p>
        </div>

        <div className="stylists-grid">
          {featuredStylists.map((stylist) => (
            <div key={stylist.id} className="stylist-editorial-card">
              <div className="stylist-photo-wrap">
                <img 
                  src={stylist.image} 
                  alt={stylist.name} 
                  className="stylist-photo"
                  loading="lazy"
                />
                <span className="stylist-badge-pill">{stylist.badge}</span>
              </div>

              <div className="stylist-info">
                <h3 className="stylist-name">{stylist.name}</h3>
                <p className="stylist-specialty">{stylist.specialty}</p>
                <p className="stylist-role-desc">{stylist.role}</p>

                <div className="stylist-availability-hint">
                  <span className="availability-dot"></span>
                  <span>{stylist.availability}</span>
                </div>

                <Link
                  to="/agendar"
                  className="btn btn-secondary btn-stylist-book"
                  onClick={() => handleBookWithStylist(stylist.name)}
                >
                  <span>Reservar con {stylist.name}</span>
                  <ArrowRightIcon size={15} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="stylists-disclaimer-wrap">
          <p className="stylists-disclaimer-text">
            * {professionalsDisclaimer}
          </p>
        </div>
      </div>
    </section>
  );
};
