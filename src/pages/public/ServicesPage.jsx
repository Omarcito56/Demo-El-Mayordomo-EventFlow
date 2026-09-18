import React, { useState } from "react";
import { Link } from "react-router-dom";
import { initialServicesData, servicesDisclaimer } from "../../data/servicesData";
import { ClockIcon, CalendarIcon, ArrowRightIcon, SparklesIcon } from "../../components/common/Icons";
import { trackEvent, useTrackOnMount } from "../../analytics/analytics";

export const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  useTrackOnMount("demo_viewed", {
    view_type: "public_services_catalog",
    route: "/servicios"
  });

  const categories = [
    { key: "all", label: "Todos los servicios" },
    { key: "color", label: "Coloración" },
    { key: "hair", label: "Cabello & Peinado" },
    { key: "treatments", label: "Tratamientos" },
    { key: "makeup", label: "Maquillaje" },
    { key: "nails", label: "Uñas & Manicure" }
  ];

  const filteredServices = activeCategory === "all"
    ? initialServicesData
    : initialServicesData.filter(s => s.categoryKey === activeCategory);

  const handleBookService = (serviceId, serviceName) => {
    trackEvent("demo_cta_clicked", {
      cta_location: "services_page_catalog",
      service_id: serviceId,
      service_name: serviceName
    });
  };

  return (
    <div className="services-page-wrap">
      {/* Editorial Header */}
      <section className="services-page-hero">
        <div className="container text-center">
          <span className="editorial-eyebrow">CATÁLOGO EXCLUSIVO</span>
          <h1 className="services-page-title">
            Servicios diseñados para <br />
            <span className="serif-highlight">realzar tu estilo.</span>
          </h1>
          <p className="services-page-lead">
            Explora nuestra carta de servicios demostrativa. Diseños de color, corte, estilizado, tratamientos, uñas y maquillaje con horarios disponibles para agendar.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="services-catalog-section">
        <div className="container">
          <div className="category-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat.key}
                className={`category-pill-btn ${activeCategory === cat.key ? "active" : ""}`}
                onClick={() => setActiveCategory(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid of Editorial Service Cards */}
          <div className="catalog-editorial-grid">
            {filteredServices.map((service) => (
              <div key={service.id} className="catalog-card">
                <div className="catalog-card-image-wrap">
                  <img 
                    src={service.image} 
                    alt={service.name} 
                    className="catalog-card-image"
                    loading="lazy"
                  />
                  <span className="catalog-card-tag">{service.category}</span>
                  {service.badge && (
                    <span className="catalog-card-badge">{service.badge}</span>
                  )}
                </div>

                <div className="catalog-card-content">
                  <div className="catalog-card-header">
                    <h3 className="catalog-service-name">{service.name}</h3>
                    <div className="catalog-service-duration">
                      <ClockIcon size={14} />
                      <span>{service.duration}</span>
                    </div>
                  </div>

                  <p className="catalog-service-tagline">“{service.tagline}”</p>
                  <p className="catalog-service-desc">{service.description}</p>

                  <div className="catalog-card-footer">
                    <div className="catalog-price-block">
                      <span className="catalog-price-val">{service.price}</span>
                      <span className="catalog-price-note">{service.priceNote}</span>
                    </div>

                    <Link
                      to={`/agendar?service=${service.id}`}
                      className="btn btn-primary btn-sm btn-catalog-book"
                      onClick={() => handleBookService(service.id, service.name)}
                    >
                      <CalendarIcon size={15} />
                      <span>Reservar</span>
                      <ArrowRightIcon size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Notice */}
          <div className="services-catalog-disclaimer">
            <SparklesIcon size={16} />
            <span>{servicesDisclaimer}</span>
          </div>
        </div>
      </section>
    </div>
  );
};
