import React from "react";
import { Link } from "react-router-dom";
import { initialProfessionalsData, professionalsDisclaimer } from "../../data/professionalsData";
import { SparklesIcon, ArrowRightIcon } from "../common/Icons";
import { trackEvent } from "../../analytics/analytics";

export const StylistsSection = () => {
  // Only show the 3 specific named technicians in the spotlight
  const featuredTechnicians = initialProfessionalsData.filter(p => p.id !== "sin-preferencia");

  const handleBookWithTechnician = (techName) => {
    trackEvent("demo_cta_clicked", {
      cta_location: "technicians_section",
      technician_demo: techName
    });
  };

  return (
    <section className="stylists-section" id="tecnicas">
      <div className="container">
        <div className="section-header-editorial text-center">
          <span className="editorial-eyebrow">EQUIPO DEMOSTRATIVO</span>
          <h2 className="editorial-title">Técnicas especializadas</h2>
          <p className="editorial-subtext">
            Conoce a nuestras especialistas demostrativas y elige quién realizará tu próximo set.
          </p>
        </div>

        <div className="stylists-grid">
          {featuredTechnicians.map((tech) => (
            <div key={tech.id} className="stylist-editorial-card">
              <div className="stylist-photo-wrap">
                <img 
                  src={tech.image} 
                  alt={tech.name} 
                  className="stylist-photo"
                  loading="lazy"
                />
                <span className="stylist-badge-pill">{tech.badge}</span>
              </div>

              <div className="stylist-info">
                <h3 className="stylist-name">{tech.name}</h3>
                <p className="stylist-specialty">{tech.specialty}</p>
                <p className="stylist-role-desc">{tech.role}</p>

                <div className="stylist-availability-hint">
                  <span className="availability-dot"></span>
                  <span>{tech.availability}</span>
                </div>

                <Link
                  to={`/agendar?tech=${tech.id}`}
                  className="btn btn-secondary btn-stylist-book"
                  onClick={() => handleBookWithTechnician(tech.name)}
                >
                  <span>Reservar con {tech.name}</span>
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
