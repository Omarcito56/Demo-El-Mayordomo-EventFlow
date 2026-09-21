import React from "react";
import { 
  CalendarCheckIcon, UsersIcon, ScissorsIcon, CreditCardIcon, 
  WhatsAppIcon, SparklesIcon, CheckCircleIcon 
} from "../common/Icons";

export const ClinicPitch = () => {
  const businessCards = [
    {
      icon: <CalendarCheckIcon size={22} />,
      title: "Agenda",
      desc: "Turnos organizados por estilista y franja horaria para evitar traslapes y confusiones."
    },
    {
      icon: <UsersIcon size={22} />,
      title: "Clientes",
      desc: "Directorio de clientas con historial de citas, servicios favoritos y teléfono directo de contacto."
    },
    {
      icon: <ScissorsIcon size={22} />,
      title: "Servicios",
      desc: "Catálogo claro de servicios, tiempos de aplicación y precios demostrativos siempre al día."
    },
    {
      icon: <WhatsAppIcon size={22} />,
      title: "Recordatorios",
      desc: "Envío sencillo de recordatorios para confirmar asistencia y reducir ausencias o citas olvidadas."
    },
    {
      icon: <CreditCardIcon size={22} />,
      title: "Anticipos",
      desc: "Control de anticipos demostrativos para apartar horarios en servicios de alta dedicación."
    }
  ];

  return (
    <section className="business-pitch-section" id="agenda-negocio">
      <div className="container">
        <div className="section-header-editorial text-center">
          <span className="editorial-eyebrow">ORGANIZACIÓN INTERNA</span>
          <h2 className="editorial-title">Tu agenda también puede ser más bonita</h2>
          <p className="editorial-subtext">
            Organiza citas, clientes, horarios y estados desde un panel pensado para facilitar el trabajo diario.
          </p>
        </div>

        {/* 5 Feature Cards Grid */}
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
