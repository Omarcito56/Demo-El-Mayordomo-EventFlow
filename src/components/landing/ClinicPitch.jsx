import React from "react";
import { 
  CalendarCheckIcon, UsersIcon, SparklesIcon, CreditCardIcon, 
  WhatsAppIcon 
} from "../common/Icons";

export const ClinicPitch = () => {
  const businessCards = [
    {
      icon: <CalendarCheckIcon size={22} />,
      title: "Agenda",
      desc: "Turnos organizados por técnica y franja horaria para evitar traslapes y tiempos muertos."
    },
    {
      icon: <UsersIcon size={22} />,
      title: "Clientes",
      desc: "Directorio de clientas con historial de citas, sets preferidos y teléfono directo de WhatsApp."
    },
    {
      icon: <SparklesIcon size={22} />,
      title: "Servicios",
      desc: "Catálogo claro de uñas acrílicas, gel, pedicure y nail art con tiempos y precios demostrativos."
    },
    {
      icon: <CreditCardIcon size={22} />,
      title: "Anticipos",
      desc: "Control de anticipos demostrativos para asegurar la disponibilidad de turnos y evitar inasistencias."
    },
    {
      icon: <WhatsAppIcon size={22} />,
      title: "Recordatorios",
      desc: "Envío ágil de recordatorios para confirmar citas y mantener la agenda optimizada al 100%."
    }
  ];

  return (
    <section className="business-pitch-section" id="agenda-negocio">
      <div className="container">
        <div className="section-header-editorial text-center">
          <span className="editorial-eyebrow">ORGANIZACIÓN INTERNA</span>
          <h2 className="editorial-title">Tu agenda bajo control</h2>
          <p className="editorial-subtext">
            Consulta citas, clientes, servicios y anticipos desde un panel sencillo pensado para facilitar la operación diaria.
          </p>
        </div>

        {/* 5 Feature Cards Grid: Agenda, Clientes, Servicios, Anticipos, Recordatorios */}
        <div className="business-pitch-grid">
          {businessCards.map((card, idx) => (
            <div key={idx} className="business-feature-card">
              <div className="business-card-icon-wrap">
                {card.icon}
              </div>
              <h3 className="business-card-title">{card.title}</h3>
              <p className="business-card-desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
