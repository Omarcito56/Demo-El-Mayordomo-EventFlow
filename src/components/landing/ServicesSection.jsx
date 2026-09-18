import React from "react";
import { Link } from "react-router-dom";
import { initialServicesData, servicesDisclaimer } from "../../data/servicesData";
import { ClockIcon, CalendarIcon, ArrowRightIcon, SparklesIcon } from "../common/Icons";
import { trackEvent } from "../../analytics/analytics";

export const ServicesSection = () => {
  const featuredService = initialServicesData.find(s => s.isFeatured) || initialServicesData[0];
  const otherServices = initialServicesData.filter(s => s.id !== featuredService.id);

  const handleServiceClick = (serviceId, serviceName) => {
    trackEvent("demo_cta_clicked", {
      cta_location: "services_section",
      service_id: serviceId,
      service_name: serviceName
    });
  };

  return (
    <section className="services-editorial-section" id="servicios">
      <div className="container">
        <div className="section-header-editorial text-center">
          <span className="editorial-eyebrow">SERVICIOS SELECCIONADOS</span>
          <h2 className="editorial-title">Encuentra tu próximo look</h2>
          <p className="editorial-subtext">
            Servicios de muestra para visualizar cómo Bellart podría organizar su experiencia de reserva.
          </p>
        </div>

        <div className="services-editorial-layout">
          {/* Large Hero Card for Featured Service (Coloración) */}
          <div className="featured-service-hero-card">
            <div className="featured-service-image-box">
              <img 
                src={featuredService.image} 
                alt={featuredService.name} 
                className="featured-service-img"
                loading="lazy"
              />
              <span className="featured-service-badge">
                <SparklesIcon size={14} />
                <span>{featuredService.badge}</span>
              </span>
            </div>

            <div className="featured-service-body">
              <div className="featured-meta-header">
                <span className="service-category-tag">{featuredService.category}</span>
                <span className="service-duration-pill">
                  <ClockIcon size={14} />
                  <span>{featuredService.duration}</span>
                </span>
              </div>

              <h3 className="featured-service-title">{featuredService.name}</h3>
              <p className="featured-service-quote">“{featuredService.tagline}”</p>
              <p className="featured-service-desc">{featuredService.description}</p>

              <div className="featured-service-footer">
                <div className="featured-price-group">
                  <span className="featured-price-val">{featuredService.price}</span>
                  <span className="featured-price-note">{featuredService.priceNote}</span>
                </div>

                <Link
                  to={`/agendar?service=${featuredService.id}`}
                  className="btn btn-primary btn-featured-book"
                  onClick={() => handleServiceClick(featuredService.id, featuredService.name)}
                >
                  <CalendarIcon size={16} />
                  <span>Reservar ahora</span>
                  <ArrowRightIcon size={15} />
                </Link>
              </div>
            </div>
          </div>

          {/* Adjacent Grid of Complementary Services */}
          <div className="compact-services-grid">
            {otherServices.map((service) => (
              <div key={service.id} className="compact-service-card">
                <div className="compact-service-thumb-wrap">
                  <img 
                    src={service.image} 
                    alt={service.name} 
                    className="compact-service-thumb"
                    loading="lazy"
                  />
                  <span className="compact-category-tag">{service.category}</span>
                </div>

                <div className="compact-service-info">
                  <div className="compact-info-top">
                    <h4 className="compact-service-name">{service.name}</h4>
                    <span className="compact-service-duration">
                      <ClockIcon size={13} />
                      <span>{service.duration}</span>
                    </span>
                  </div>

                  <p className="compact-service-tagline">{service.tagline}</p>

                  <div className="compact-service-bottom">
                    <div className="compact-price-wrap">
                      <span className="compact-price-val">{service.price}</span>
                      <span className="compact-price-sub">{service.priceNote}</span>
                    </div>

                    <Link
                      to={`/agendar?service=${service.id}`}
                      className="btn btn-secondary btn-sm btn-compact-book"
                      onClick={() => handleServiceClick(service.id, service.name)}
                    >
                      <span>Reservar</span>
                      <ArrowRightIcon size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View all services CTA */}
        <div className="services-bottom-action-bar">
          <Link to="/servicios" className="btn btn-outline btn-catalog-link">
            <span>Ver catálogo completo de servicios</span>
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
