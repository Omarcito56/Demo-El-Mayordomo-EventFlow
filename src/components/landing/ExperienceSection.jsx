import React from "react";
import { Link } from "react-router-dom";
import { CalendarIcon, ArrowRightIcon } from "../common/Icons";
import { trackEvent } from "../../analytics/analytics";
import salonPhoto from "../../assets/images/beauty/experience-salon.jpg";

export const ExperienceSection = () => {
  const steps = [
    { number: "01", label: "Elige tu servicio", desc: "Corte, coloración, peinado, uñas o maquillaje con tiempos claros." },
    { number: "02", label: "Selecciona profesional", desc: "Escoge a tu estilista de confianza o déjalo abierto según tu disponibilidad." },
    { number: "03", label: "Escoge fecha y horario", desc: "Visualiza espacios disponibles en tiempo real sin mensajes cruzados." },
    { number: "04", label: "Confirma tu reserva", desc: "Registra tu cita al instante y recibe confirmación directa en tu teléfono." }
  ];

  const handleCtaClick = () => {
    trackEvent("demo_cta_clicked", {
      cta_location: "experience_dark_section",
      cta_text: "Reservar ahora"
    });
  };

  return (
    <section className="experience-dark-section" id="experiencia">
      <div className="container experience-dark-container">
        {/* Left: Editorial salon photograph */}
        <div className="experience-dark-visual">
          <div className="experience-image-frame">
            <img 
              src={salonPhoto} 
              alt="Ambiente y cabinas en Bellart Salón" 
              className="experience-salon-img"
              loading="lazy"
            />
            <div className="experience-badge-pill">
              <span>EXPERIENCIA BELLART</span>
            </div>
          </div>
        </div>

        {/* Right: Copy and numbered steps */}
        <div className="experience-dark-content">
          <span className="experience-eyebrow">TU CITA, MÁS SIMPLE</span>
          
          <h2 className="experience-dark-title">
            Menos mensajes. <br />
            <span className="experience-title-serif">Más tiempo para ti.</span>
          </h2>

          <p className="experience-dark-lead">
            Consulta servicios, revisa horarios disponibles y solicita tu cita sin esperar una respuesta para saber qué espacios quedan libres.
          </p>

          <div className="experience-steps-list">
            {steps.map((st) => (
              <div key={st.number} className="experience-step-item">
                <span className="experience-step-num">{st.number}</span>
                <div className="experience-step-text">
                  <h4 className="experience-step-label">{st.label}</h4>
                  <p className="experience-step-desc">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="experience-dark-actions">
            <Link 
              to="/agendar" 
              className="btn btn-primary btn-experience-cta"
              onClick={handleCtaClick}
            >
              <CalendarIcon size={18} />
              <span>Reservar ahora</span>
              <ArrowRightIcon size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
