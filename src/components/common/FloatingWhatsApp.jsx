import React from "react";
import { WhatsAppIcon } from "./Icons";
import { initialBusinessData } from "../../data/businessData";

export const FloatingWhatsApp = () => {
  const whatsappUrl = `https://wa.me/52${initialBusinessData.whatsapp}?text=${encodeURIComponent(
    "Hola, quisiera solicitar información sobre los servicios en GLAMUROSA NAIL’S."
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp-btn"
      aria-label="Contactar a GLAMUROSA NAIL’S por WhatsApp"
      title="Escríbenos por WhatsApp"
    >
      <WhatsAppIcon size={24} />
      <span className="floating-whatsapp-tooltip">¿Dudas? Escríbenos</span>
    </a>
  );
};
