import React from "react";
import { useLocation, Link } from "react-router-dom";
import { 
  CheckIcon, WhatsAppIcon, CalendarIcon, ArrowLeftIcon, 
  SparklesIcon, ClockIcon 
} from "../../components/common/Icons";
import { StatusBadge } from "../../components/common/StatusBadge";
import { initialBusinessData } from "../../data/businessData";
import confirmationNailsImg from "../../assets/images/nails/hero-nails-macro.jpg";

export const ConfirmationPage = () => {
  const location = useLocation();
  const appointment = location.state?.appointment || {
    folio: "GLA-000128",
    clientName: "Cliente Demo",
    patientName: "Cliente Demo",
    serviceName: "Uñas acrílicas",
    professional: "Mariana",
    date: new Date().toISOString().split("T")[0],
    time: "10:30 AM",
    depositAmount: "$200",
    clientPhone: "8992569812",
    status: "Pendiente de confirmación"
  };

  const clientDisplayName = appointment.clientName || appointment.patientName || "Cliente";
  const professionalName = appointment.professional || "Sin preferencia";
  const depositText = appointment.depositAmount ? `${appointment.depositAmount} demo` : "Sin anticipo";

  const whatsappMessage = encodeURIComponent(
    `Hola, registré mi solicitud de cita en GLAMUROSA NAIL’S (Folio: ${appointment.folio}) para ${appointment.serviceName} el día ${appointment.date} a las ${appointment.time}. Mi nombre es ${clientDisplayName}.`
  );

  return (
    <div className="confirmation-editorial-wrap">
      <div className="container">
        <div className="confirmation-editorial-card animate-fade-in">
          {/* Left / Top Side: Decorative photo thumbnail */}
          <div className="confirmation-side-visual">
            <img 
              src={confirmationNailsImg} 
              alt="Momento GLAMUROSA NAIL’S" 
              className="confirmation-visual-img"
            />
            <div className="confirmation-visual-overlay">
              <span className="confirmation-visual-tag">GLAMUROSA</span>
            </div>
          </div>

          {/* Right Side: Details & Actions */}
          <div className="confirmation-card-content">
            <div className="confirmation-success-badge">
              <CheckIcon size={22} />
            </div>

            <span className="confirmation-folio-pill ph-mask">
              FOLIO: {appointment.folio}
            </span>

            <h1 className="confirmation-title-editorial">
              ¡Tu cita quedó registrada! ✨
            </h1>
            
            <p className="confirmation-subtext-editorial">
              GLAMUROSA podrá revisar tu solicitud y confirmar tu horario contigo.
            </p>

            {/* Details Table */}
            <div className="confirmation-editorial-details">
              <div className="conf-row">
                <span className="conf-label">Cliente:</span>
                <span className="conf-value ph-mask">{clientDisplayName}</span>
              </div>
              <div className="conf-row">
                <span className="conf-label">Servicio:</span>
                <span className="conf-value">{appointment.serviceName}</span>
              </div>
              <div className="conf-row">
                <span className="conf-label">Técnica:</span>
                <span className="conf-value highlight-stylist">{professionalName}</span>
              </div>
              <div className="conf-row">
                <span className="conf-label">Fecha y horario:</span>
                <span className="conf-value highlight-datetime">
                  {appointment.date} — {appointment.time}
                </span>
              </div>
              <div className="conf-row">
                <span className="conf-label">Anticipo registrado:</span>
                <span className="conf-value highlight-deposit">{depositText}</span>
              </div>
              <div className="conf-row">
                <span className="conf-label">Estado actual:</span>
                <StatusBadge status={appointment.status || "Pendiente de confirmación"} />
              </div>
            </div>

            {/* Actions */}
            <div className="confirmation-editorial-actions">
              <a 
                href={`https://wa.me/52${initialBusinessData.whatsapp}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-block"
              >
                <WhatsAppIcon size={18} />
                <span>Contactar por WhatsApp</span>
              </a>

              <div className="confirmation-secondary-links">
                <Link to="/" className="btn btn-outline btn-sm">
                  <ArrowLeftIcon size={15} />
                  <span>Volver al inicio</span>
                </Link>
                <Link to="/agendar" className="btn btn-secondary btn-sm">
                  <CalendarIcon size={15} />
                  <span>Reservar otra cita</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
