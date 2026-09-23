import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mockAvailabilityMap } from "../../data/eventFlowData";
import { ArrowRightIcon } from "../common/Icons";
import { trackEvent } from "../../analytics/analytics";

export const AvailabilityCalendarSection = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);

  // Generar días del mes actual y próximos 21 días
  const today = new Date();
  const currentMonthName = today.toLocaleDateString("es-MX", { month: "long", year: "numeric" });

  const daysList = [];
  for (let i = 1; i <= 28; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const iso = d.toISOString().split("T")[0];
    const status = mockAvailabilityMap[iso] || (i % 3 === 0 ? "limitada" : i % 5 === 0 ? "ocupada" : "disponible");
    
    daysList.push({
      dateStr: iso,
      dayNum: d.getDate(),
      dayName: d.toLocaleDateString("es-MX", { weekday: "short" }),
      status
    });
  }

  const handleDateSelect = (day) => {
    setSelectedDate(day);
    trackEvent("availability_checked", {
      status: day.status
    });
  };

  const handleProceedToQuote = (isoDate) => {
    navigate(`/cotizar?fecha=${isoDate}`);
  };

  return (
    <section className="calendar-demo-section" id="calendario">
      <div className="container">
        <div className="section-header-centered">
          <span className="eyebrow">Agenda Demostrativa</span>
          <h2 className="section-title-editorial">Consulta una fecha</h2>
          <p className="section-subtext">
            Explora la disponibilidad preliminar para banquetes y montajes. Selecciona un día libre para comenzar tu cotización personalizada.
          </p>
        </div>

        <div className="calendar-demo-box">
          {/* Header & Leyenda */}
          <div className="calendar-legend-bar">
            <div className="legend-pill">
              <span className="legend-color-dot dot-available" />
              <span>Disponible</span>
            </div>
            <div className="legend-pill">
              <span className="legend-color-dot dot-limited" />
              <span>Disponibilidad limitada</span>
            </div>
            <div className="legend-pill">
              <span className="legend-color-dot dot-busy" />
              <span>Ocupada</span>
            </div>
          </div>

          <div style={{ textAlign: "center", marginBottom: "1.25rem", textTransform: "capitalize", fontWeight: 600, color: "var(--color-charcoal-deep)" }}>
            {currentMonthName}
          </div>

          {/* Grid de 28 días próximos */}
          <div className="calendar-month-grid">
            {["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"].map((dow, idx) => (
              <div key={idx} className="calendar-day-header">
                {dow}
              </div>
            ))}

            {daysList.map((day, idx) => {
              const isSelected = selectedDate?.dateStr === day.dateStr;
              let statusClass = "status-tag-available";
              let label = "Disponible";

              if (day.status === "limitada") {
                statusClass = "status-tag-limited";
                label = "Limitada";
              } else if (day.status === "ocupada") {
                statusClass = "status-tag-busy";
                label = "Ocupada";
              }

              return (
                <div 
                  key={idx} 
                  className={`calendar-day-cell ${isSelected ? "selected" : ""}`}
                  style={isSelected ? { borderColor: "var(--color-charcoal-deep)", backgroundColor: "var(--color-cream)" } : {}}
                  onClick={() => handleDateSelect(day)}
                >
                  <span className="day-cell-num">{day.dayNum}</span>
                  {/* Etiqueta de texto para desktop/tablet */}
                  <span className={`day-cell-status-tag ${statusClass}`}>
                    {label}
                  </span>
                  {/* Micro indicador de punto para móvil */}
                  <span className={`day-cell-dot ${statusClass}-dot`} title={label} />
                </div>
              );
            })}
          </div>

          {/* Callout de fecha seleccionada */}
          {selectedDate && (
            <div className="calendar-selected-callout">
              <div className="callout-info-left">
                <span className="callout-info-label">Fecha seleccionada:</span>
                <div className="callout-info-title">
                  {selectedDate.dateStr} — Estado demo: <span style={{ textTransform: "capitalize" }}>{selectedDate.status}</span>
                </div>
              </div>

              {selectedDate.status !== "ocupada" ? (
                <button 
                  type="button" 
                  className="btn btn-primary btn-sm callout-action-btn"
                  onClick={() => handleProceedToQuote(selectedDate.dateStr)}
                >
                  <span>Cotizar para esta fecha</span>
                  <ArrowRightIcon size={15} />
                </button>
              ) : (
                <span className="callout-busy-notice">
                  Fecha ocupada para nuevos banquetes demo
                </span>
              )}
            </div>
          )}

          <p style={{ textAlign: "center", marginTop: "1.75rem", fontSize: "0.78rem", color: "var(--color-text-muted)" }}>
            Disponibilidad mostrada únicamente para fines demostrativos. No se revelan datos ni agendas de otros clientes.
          </p>
        </div>
      </div>
    </section>
  );
};
