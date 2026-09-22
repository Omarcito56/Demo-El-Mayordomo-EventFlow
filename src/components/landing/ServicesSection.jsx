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

  const featuredService = initialServicesData.find((s) => s.isFeatured) || initialServicesData[0];
  const otherServices = initialServicesData.filter((s) => s.id !== featuredService.id);

  return (
    <section className="services-boutique-section" id="servicios">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-editorial text-center">
          <span className="editorial-eyebrow">CARTA DE SERVICIOS</span>
          <h2 className="editorial-title">Encuentra tu próximo set</h2>
          <p className="editorial-subtext">
            Servicios demostrativos para mostrar cómo GLAMUROSA podría organizar sus reservas.
          </p>
        </div>

        {/* Visual Combination Layout: Featured Hero Service Card + Grid of Medium Cards */}
        <div className="services-combined-layout">
          {/* Featured Large Service Card (Uñas Acrílicas) */}
          {featuredService && (
            <div className="service-featured-master-card">
              <div className="featured-card-media">
                <img 
                  src={featuredService.image} 
                  alt={featuredService.name} 
                  className="featured-service-img"
                  loading="lazy"
                />
                <div className="featured-badge-tag">
                  <SparklesIcon size={13} />
                  <span>{featuredService.badge || "Servicio Estrella"}</span>
                </div>
              </div>

              <div className="featured-card-content">
                <div className="featured-card-category-strip">
                  <span className="featured-cat-pill">{featuredService.category}</span>
                  <div className="featured-duration-badge">
                    <ClockIcon size={14} />
                    <span>{featuredService.duration}</span>
                  </div>
                </div>

                <h3 className="featured-card-title">{featuredService.name}</h3>
                <p className="featured-card-tagline">“{featuredService.tagline}”</p>
                <p className="featured-card-desc">{featuredService.description}</p>

                <div className="featured-card-footer">
                  <div className="featured-price-group">
                    <span className="featured-price-val">{featuredService.price}</span>
                    <span className="featured-deposit-hint">Anticipo demo: ${featuredService.suggestedDeposit} MXN</span>
                  </div>

                  <Link
                    to={`/agendar?service=${featuredService.id}`}
                    className="btn btn-primary btn-featured-book"
                    onClick={() => handleServiceClick(featuredService.id, featuredService.name)}
                  >
                    <CalendarIcon size={16} />
                    <span>Reservar este set</span>
                    <ArrowRightIcon size={15} />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Grid of Medium Services Cards */}
          <div className="services-medium-grid">
            {otherServices.map((service) => (
              <div key={service.id} className="service-medium-card">
                <div className="service-medium-media">
                  <img 
                    src={service.image} 
                    alt={service.name} 
                    className="service-medium-img"
                    loading="lazy"
                  />
                  <span className="service-medium-cat-tag">{service.category}</span>
                  {service.badge && (
                    <span className="service-medium-badge-tag">
                      <SparklesIcon size={11} />
                      <span>{service.badge}</span>
                    </span>
                  )}
                </div>

                <div className="service-medium-body">
                  <div className="service-medium-top-row">
                    <h4 className="service-medium-name">{service.name}</h4>
                    <div className="service-medium-duration">
                      <ClockIcon size={13} />
                      <span>{service.duration}</span>
                    </div>
                  </div>

                  <p className="service-medium-desc">{service.description}</p>

                  <div className="service-medium-footer">
                    <div className="service-medium-price-block">
                      <span className="service-medium-price">{service.price}</span>
                      <span className="service-medium-subprice">Precio demo</span>
                    </div>

                    <Link
                      to={`/agendar?service=${service.id}`}
                      className="btn btn-primary btn-sm btn-medium-book"
                      onClick={() => handleServiceClick(service.id, service.name)}
                    >
                      <CalendarIcon size={13} />
                      <span>Reservar</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View all services CTA */}
        <div className="services-bottom-action-bar">
          <Link to="/servicios" className="btn btn-secondary btn-catalog-link">
            <span>Ver menú de servicios con filtros</span>
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
