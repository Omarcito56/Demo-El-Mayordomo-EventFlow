import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "../common/Icons";

const steps = [
  {
    num: "01",
    title: "Cotiza",
    desc: "Elige tu tipo de evento, número estimado de invitados y extras requeridos en pocos clics."
  },
  {
    num: "02",
    title: "Consulta disponibilidad",
    desc: "Revisa fechas tentativas en el calendario antes de comprometer cualquier decisión."
  },
  {
    num: "03",
    title: "Confirma detalles",
    desc: "El equipo revisa los requerimientos de montaje, menú en tiempos y horarios de servicio."
  },
  {
    num: "04",
    title: "Aparta tu fecha",
    desc: "Bloquea formalmente la fecha con un anticipo pactado y recibe tu comprobante oficial."
  },
  {
    num: "05",
    title: "Da seguimiento",
    desc: "Supervisa los tiempos de montaje, degustación previa y coordinación del gran día."
  }
];

export const ExperienceSection = () => {
  return (
    <section className="experience-section">
      <div className="container">
        <div className="section-header-centered">
          <span className="eyebrow">Paso a Paso</span>
          <h2 className="section-title-editorial">Del primer mensaje al gran día</h2>
          <p className="section-subtext">
            Diseñamos un flujo sin fricción para que la planeación de tu evento sea tan placentera como la celebración misma.
          </p>
        </div>

        <div className="experience-steps-grid">
          {steps.map((step, idx) => (
            <div key={idx} className="experience-step-card">
              <span className="experience-step-num">{step.num}</span>
              <h3 className="experience-step-title">{step.title}</h3>
              <p className="experience-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link to="/cotizar" className="btn btn-primary btn-lg">
            <span>Iniciar mi cotización ahora</span>
            <ArrowRightIcon size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
