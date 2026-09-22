import React from "react";
import { Link } from "react-router-dom";
import { CalendarIcon, ArrowRightIcon, CheckCircleIcon, CreditCardIcon, SparklesIcon, ShieldCheckIcon } from "../common/Icons";
import { trackEvent } from "../../analytics/analytics";
import studioPhoto from "../../assets/images/nails/service-unas-acrilicas.jpg";

export const ExperienceSection = () => {
  const steps = [
    { 
      number: "01", 
      label: "Elige tu servicio", 
      desc: "Uñas acrílicas, gel semipermanente, nail art, manicure clásico o pedicure spa con tiempos claros." 
    },
    { 
      number: "02", 
      label: "Selecciona técnica", 
      desc: "Escoge a Andrea, Mariana, Sofía o la opción 'Sin preferencia' para la primera técnica disponible." 
    },
    { 
      number: "03", 
      label: "Escoge fecha y horario", 
      desc: "Consulta los turnos libres del studio y selecciona el día y la hora que mejor se acomoden a tu día." 
    },
    { 
      number: "04", 
      label: "Confirma tu reserva", 
      desc: "Registra tus datos, genera tu folio GLA de seguimiento y recibe tu confirmación por WhatsApp." 
    }
  ];

  const handleCtaClick = () => {
    trackEvent("demo_cta_clicked", {
      cta_location: "deposit_experience_section",
      cta_text: "Reservar cita ahora"
    });
  };

  return (
    <section className="differential-section" id="anticipo">
      <div className="container">
        {/* Top Part: SECCIÓN ANTICIPO (Comercialmente crucial) */}
        <div className="deposit-pitch-card">
          <div className="deposit-pitch-grid">
            {/* Left Column: Commercial pitch */}
            <div className="deposit-pitch-info">
              <div className="deposit-badge-row">
                <span className="badge-demo-mode">MODO DEMOSTRACIÓN</span>
                <span className="badge-commercial-feature">BENEFICIO PARA EL NEGOCIO</span>
              </div>

              <h2 className="deposit-pitch-title">
                Asegura tu horario
              </h2>

              <p className="deposit-pitch-lead">
                Una versión final podría permitir que tus clientes aparten su cita mediante un anticipo, ayudando a reducir cancelaciones de último momento y horarios bloqueados sin confirmar.
              </p>

              <div className="deposit-benefits-mini-list">
                <div className="deposit-benefit-row">
                  <CheckCircleIcon size={16} />
                  <span>Protege el tiempo de tus técnicas reduciendo ausencias injustificadas.</span>
                </div>
                <div className="deposit-benefit-row">
                  <CheckCircleIcon size={16} />
                  <span>Brinda certeza mutua tanto a la clienta como al studio al apartar el turno.</span>
                </div>
                <div className="deposit-benefit-row">
                  <CheckCircleIcon size={16} />
                  <span>Facilita liquidar el saldo restante cómodamente al terminar el servicio.</span>
                </div>
              </div>

              <p className="deposit-disclaimer-sub">
                * Simulación demostrativa. No se efectúa ningún cobro financiero real en esta demo.
              </p>
            </div>

            {/* Right Column: Visual Demo Financial Breakdown */}
            <div className="deposit-visual-card">
              <div className="deposit-ticket-header">
                <div className="deposit-ticket-icon">
                  <CreditCardIcon size={20} />
                </div>
                <div>
                  <strong>Resumen de Cita Demostrativa</strong>
                  <span>Ejemplo de apartado en línea</span>
                </div>
              </div>

              <div className="deposit-ticket-body">
                <div className="ticket-line-item">
                  <span className="ticket-label">Servicio seleccionado:</span>
                  <span className="ticket-val-bold">Uñas acrílicas</span>
                </div>
                <div className="ticket-line-item">
                  <span className="ticket-label">Costo estimado:</span>
                  <span className="ticket-val">$550 MXN</span>
                </div>

                <div className="ticket-divider"></div>

                <div className="ticket-line-item highlight-deposit-row">
                  <div className="ticket-label-with-badge">
                    <span className="ticket-label">Anticipo sugerido:</span>
                    <span className="ticket-chip-soft">Para apartar</span>
                  </div>
                  <span className="ticket-val-deposit">$200 MXN</span>
                </div>

                <div className="ticket-line-item highlight-balance-row">
                  <span className="ticket-label">Restante en studio:</span>
                  <span className="ticket-val-balance">$350 MXN</span>
                </div>
              </div>

              <div className="deposit-ticket-footer">
                <div className="ticket-security-pill">
                  <ShieldCheckIcon size={14} />
                  <span>Visualización demostrativa para GLAMUROSA NAIL’S</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Part: CÓMO FUNCIONA (4 Pasos) */}
        <div className="how-it-works-block" id="como-funciona">
          <div className="section-header-editorial text-center" style={{ marginTop: "4rem", marginBottom: "2.5rem" }}>
            <span className="editorial-eyebrow">PASO A PASO</span>
            <h3 className="editorial-title">¿Cómo funciona la agenda?</h3>
            <p className="editorial-subtext">
              En 4 sencillos pasos tus clientas pueden programar su cita sin esperas ni fricciones.
            </p>
          </div>

          <div className="how-it-works-grid">
            {steps.map((st) => (
              <div key={st.number} className="how-step-card">
                <div className="how-step-number">{st.number}</div>
                <h4 className="how-step-title">{st.label}</h4>
                <p className="how-step-desc">{st.desc}</p>
              </div>
            ))}
          </div>

          <div className="how-it-works-cta-wrap text-center">
            <Link 
              to="/agendar" 
              className="btn btn-primary btn-how-cta"
              onClick={handleCtaClick}
            >
              <CalendarIcon size={17} />
              <span>Probar flujo de reserva</span>
              <ArrowRightIcon size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
