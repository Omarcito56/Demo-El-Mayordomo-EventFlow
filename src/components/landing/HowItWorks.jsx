import React from "react";

export const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Elige tu servicio",
      description: "Selecciona el servicio que deseas: uñas acrílicas, gel semipermanente, nail art, manicure o pedicure spa."
    },
    {
      number: "2",
      title: "Selecciona técnica",
      description: "Escoge a la especialista de tu preferencia o selecciona la opción flexible con mayor disponibilidad."
    },
    {
      number: "3",
      title: "Escoge fecha y horario",
      description: "Revisa los turnos libres del studio y selecciona el día y la hora que mejor se adapten a tu día."
    },
    {
      number: "4",
      title: "Confirma tu reserva",
      description: "Registra tus datos, genera tu folio GLA y recibe confirmación directa con seguimiento por WhatsApp."
    }
  ];

  return (
    <section className="section" id="como-funciona">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Paso a Paso</span>
          <h2 className="section-title">¿Cómo funciona la agenda en línea?</h2>
          <p className="section-desc">
            En solo 4 pasos sencillos podrás programar tu próxima cita en GLAMUROSA NAIL’S sin complicaciones ni esperas.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step) => (
            <div key={step.number} className="step-card salon-step-card">
              <div className="step-num-badge">{step.number}</div>
              <h3 className="step-card-title">{step.title}</h3>
              <p className="step-card-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
