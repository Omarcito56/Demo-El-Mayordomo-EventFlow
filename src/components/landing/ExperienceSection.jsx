import React from "react";
import { Link } from "react-router-dom";
import { CalendarIcon, ArrowRightIcon, CheckCircleIcon } from "../common/Icons";
import { trackEvent } from "../../analytics/analytics";
import salonPhoto from "../../assets/images/beauty/experience-salon.jpg";

export const ExperienceSection = () => {
  const steps = [
    { 
      number: "01", 
      label: "Elige tu servicio", 
      desc: "Explora opciones de corte, coloración, peinado, maquillaje, manicure o tratamiento capilar con tiempos estimados." 
    },
    { 
      number: "02", 
      label: "Selecciona tu horario", 
      desc: "Consulta horarios disponibles y escoge el turno que mejor se adapte a tu día sin esperar respuesta." 
    },
    { 
      number: "03", 
      label: "Déjanos tus datos", 
      desc: "Indica tu nombre, WhatsApp y detalles de contacto para coordinar la cita de forma segura y directa." 
    },
    { 
      number: "04", 
      label: "Recibe confirmación", 
      desc: "Obtén tu folio de seguimiento y confirmación por WhatsApp para tener todo listo para tu visita." 
    }
  ];

  const handleCtaClick = () => {
    trackEvent("demo_cta_clicked", {
      cta_location: "differential_experience_section",
      cta_text: "Reservar ahora"
    });
  };

  return (
    <section className="differential-section" id="experiencia">
      <div className="container differential-container">
        {/* Left: Boutique salon photograph */}
        <div className="differential-visual">
          <div className="differential-image-frame">
            <img 
              src={salonPhoto} 
              alt="Ambiente boutique en Mujer Bonita" 
              className="differential-salon-img"
              loading="lazy"
            />
            <div className="differential-badge-pill">
              <span>MUJER BONITA · BEAUTY BOUTIQUE</span>
            </div>
          </div>
        </div>

        {/* Right: Copy and numbered steps */}
        <div className="differential-content">
          <span className="editorial-eyebrow">EXPERIENCIA SENCILLA</span>
          
          <h2 className="differential-title">
            Tu cita, <br />
            <span className="differential-serif-highlight">sin complicaciones.</span>
          </h2>

          <p className="differential-lead">
            Consulta disponibilidad y solicita tu cita desde cualquier lugar sin esperar para conocer qué horarios están disponibles.
          </p>

          <div className="differential-steps-list">
            {steps.map((st) => (
              <div key={st.number} className="differential-step-item">
                <span className="differential-step-num">{st.number}</span>
                <div className="differential-step-text">
                  <h4 className="differential-step-label">{st.label}</h4>
                  <p className="differential-step-desc">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="differential-actions">
            <Link 
              to="/agendar" 
              className="btn btn-primary btn-differential-cta"
              onClick={handleCtaClick}
            >
              <CalendarIcon size={18} />
              <span>Reservar cita</span>
              <ArrowRightIcon size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
