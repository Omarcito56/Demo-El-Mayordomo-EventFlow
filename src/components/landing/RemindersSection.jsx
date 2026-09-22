import React from "react";
import { WhatsAppIcon, BellIcon, SparklesIcon, CheckCircleIcon } from "../common/Icons";

export const RemindersSection = () => {
  return (
    <section className="reminders-boutique-section" id="recordatorios">
      <div className="container">
        <div className="reminders-boutique-layout">
          {/* Left Column: Commercial pitch */}
          <div className="reminders-text-col">
            <div className="reminders-badge-wrap">
              <BellIcon size={14} />
              <span>RECORDATORIOS INTELIGENTES</span>
            </div>

            <h2 className="reminders-title">
              Tu cita siempre presente
            </h2>

            <p className="reminders-desc">
              La propuesta también puede complementarse con confirmaciones y recordatorios para mantener una agenda más organizada.
            </p>

            <div className="reminders-benefits-list">
              <div className="reminder-benefit-item">
                <div className="benefit-icon-box">
                  <CheckCircleIcon size={16} />
                </div>
                <div>
                  <strong>Menos ausencias de último momento</strong>
                  <p>Notificaciones oportunas para que tus clientas tengan siempre presente su horario en el studio.</p>
                </div>
              </div>

              <div className="reminder-benefit-item">
                <div className="benefit-icon-box">
                  <CheckCircleIcon size={16} />
                </div>
                <div>
                  <strong>Agenda protegida y organizada</strong>
                  <p>Confirmación previa que permite reasignar espacios libres con tiempo para otras clientas.</p>
                </div>
              </div>
            </div>

            <div className="reminders-disclaimer-note">
              <span>* Representación demostrativa. La automatización real puede integrarse en una versión final.</span>
            </div>
          </div>

          {/* Right Column: Visual WhatsApp Message Mockup */}
          <div className="reminders-mock-col">
            <div className="phone-mockup-frame">
              {/* Phone Status Bar */}
              <div className="phone-status-bar">
                <span>9:41</span>
                <div className="status-icons-mini">
                  <span>●●●</span>
                  <span>📶</span>
                  <span>🔋</span>
                </div>
              </div>

              {/* Chat Header */}
              <div className="chat-mockup-header">
                <div className="chat-avatar-mini" style={{ background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)", color: "#FFF" }}>
                  <span>GN</span>
                </div>
                <div className="chat-header-info">
                  <strong>GLAMUROSA NAIL’S</strong>
                  <span className="chat-status-online">En línea · Cuenta oficial</span>
                </div>
                <div className="chat-header-action">
                  <WhatsAppIcon size={18} />
                </div>
              </div>

              {/* Chat Body */}
              <div className="chat-mockup-body">
                <div className="chat-date-pill">Hoy</div>

                {/* Sent Message Bubble */}
                <div className="chat-bubble chat-bubble-received">
                  <div className="bubble-brand-tag">
                    <SparklesIcon size={13} />
                    <span>GLAMUROSA ✨</span>
                  </div>
                  <p className="bubble-text">
                    Te recordamos tu cita mañana a las 4:00 PM.
                  </p>
                  <p className="bubble-text-sub">
                    Si necesitas confirmar o tienes alguna duda con tu set, responde a este mensaje. ¡Te esperamos!
                  </p>
                  <div className="bubble-timestamp">
                    <span>3:45 PM</span>
                    <span className="double-check">✓✓</span>
                  </div>
                </div>

                {/* Customer response bubble */}
                <div className="chat-bubble chat-bubble-sent">
                  <p className="bubble-text">
                    ¡Confirmadísima! Nos vemos mañana a las 4 ✨💅
                  </p>
                  <div className="bubble-timestamp">
                    <span>3:48 PM</span>
                    <span className="double-check">✓✓</span>
                  </div>
                </div>
              </div>

              {/* Simulated input bar */}
              <div className="chat-mockup-footer">
                <span className="fake-input-placeholder">Escribe un mensaje...</span>
                <div className="fake-send-btn">
                  <span>➤</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
