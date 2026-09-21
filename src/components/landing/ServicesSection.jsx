import React from "react";
import { Link } from "react-router-dom";
import { initialServicesData, servicesDisclaimer } from "../../data/servicesData";
import { ClockIcon, CalendarIcon, ArrowRightIcon, SparklesIcon } from "../common/Icons";
import { trackEvent } from "../../analytics/analytics";

export const ServicesSection = () => {
  const handleServiceClick = (serviceId, serviceName) => {
    trackEvent("demo_cta_clicked", {
      cta_location: "services_section",
      service_id: serviceId,
      service_name: serviceName
    });
  };

  return (
    <section className="services-boutique-section" id="servicios">
      <div className="container">
        <div className="section-header-editorial text-center">
          <span className="editorial-eyebrow">SERVICIOS DE BELLEZA</span>
          <h2 className="editorial-title">Un momento para ti</h2>
          <p className="editorial-subtext">
            Explora algunos servicios de muestra y reserva el horario que mejor se adapte a ti.
          </p>
        </div>

        <div className="services-boutique-grid">
          {initialServicesData.map((service) => (
            <div key={service.id} className="boutique-service-card">
              <div className="boutique-service-img-wrap">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="boutique-service-img"
                  loading="lazy"
                />
                <span className="boutique-category-pill">{service.category}</span>
                {service.badge && (
                  <span className="boutique-badge-pill">
                    <SparklesIcon size={12} />
                    <span>{service.badge}</span>
                  </span>
                )}
              </div>

              <div className="boutique-service-body">
                <div className="boutique-service-header">
                  <h3 className="boutique-service-title">{service.name}</h3>
                  <div className="boutique-service-duration">
                    <ClockIcon size={13} />
                    <span>{service.duration}</span>
                  </div>
                </div>

                <p className="boutique-service-tagline">“{service.tagline}”</p>
                <p className="boutique-service-desc">{service.description}</p>

                <div className="boutique-service-footer">
                  <div className="boutique-price-block">
                    <span className="boutique-price-val">{service.price}</span>
                    <span className="boutique-price-note">Precio demo</span>
                  </div>

                  <Link
                    to={`/agendar?service=${service.id}`}
                    className="btn btn-primary btn-sm btn-boutique-book"
                    onClick={() => handleServiceClick(service.id, service.name)}
                  >
                    <CalendarIcon size={14} />
                    <span>Reservar</span>
                    <ArrowRightIcon size={13} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all services CTA */}
        <div className="services-bottom-action-bar">
          <Link to="/servicios" className="btn btn-secondary btn-catalog-link">
            <span>Ver catálogo completo con filtros</span>
            <ArrowRightIcon size={16} />
          </Link>
        </div>

        {/* Demonstrative Disclaimer */}
        <div className="services-disclaimer-editorial">
          <p>
            ✨ <strong>Información demostrativa:</strong> {servicesDisclaimer}
          </p>
        </div>
      </div>
    </section>
  );
};
