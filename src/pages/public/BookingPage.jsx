import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useClinicData } from "../../hooks/useClinicData";
import { initialProfessionalsData } from "../../data/professionalsData";
import { 
  CalendarIcon, ClockIcon, ArrowRightIcon, ArrowLeftIcon, 
  CheckIcon, SparklesIcon, CreditCardIcon, AlertCircleIcon,
  ScissorsIcon, PaletteIcon, DropletIcon, StarIcon, HandIcon
} from "../../components/common/Icons";
import { trackEvent, useTrackOnMount } from "../../analytics/analytics";

const SALON_TIME_SLOTS = [
  "9:00 a.m.",
  "10:30 a.m.",
  "12:00 p.m.",
  "2:30 p.m.",
  "4:00 p.m.",
  "5:30 p.m."
];

export const BookingPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { services, createAppointment, appointments } = useClinicData();

  const [currentStep, setCurrentStep] = useState(1);
  const [formError, setFormError] = useState("");

  const getTodayISO = () => {
    const d = new Date();
    return d.toISOString().split("T")[0];
  };

  const initialServiceId = searchParams.get("service") || (services[0]?.id || "coloracion");

  const [bookingData, setBookingData] = useState({
    serviceId: initialServiceId,
    serviceName: "",
    servicePrice: "",
    serviceCostNumber: 650,
    serviceDuration: "",
    suggestedDeposit: 200,
    professionalId: "sin-preferencia",
    professionalName: "Sin preferencia",
    date: getTodayISO(),
    time: "10:30 a.m.",
    clientName: "",
    clientPhone: "",
    clientEmail: "",
    isFirstTime: true,
    comments: "",
    privacyAccepted: false,
    hasDeposit: true,
    paymentMethod: "Tarjeta demo"
  });

  // Keep service details in sync when serviceId changes
  useEffect(() => {
    const selected = services.find((s) => s.id === bookingData.serviceId) || services[0];
    if (selected) {
      setBookingData((prev) => ({
        ...prev,
        serviceId: selected.id,
        serviceName: selected.name,
        servicePrice: selected.price,
        serviceCostNumber: selected.priceNumber || 650,
        serviceDuration: selected.duration,
        suggestedDeposit: selected.suggestedDeposit || 200
      }));
    }
  }, [bookingData.serviceId, services]);

  // Track booking_started una única vez al montar
  useTrackOnMount("booking_started", {
    flow_type: "salon_booking",
    route: "/agendar",
    source: searchParams.get("service") ? "service_card" : "direct"
  });

  const handleServiceSelect = (service) => {
    setBookingData((prev) => ({
      ...prev,
      serviceId: service.id,
      serviceName: service.name,
      servicePrice: service.price,
      serviceCostNumber: service.priceNumber || 650,
      serviceDuration: service.duration,
      suggestedDeposit: service.suggestedDeposit || 200
    }));
    setFormError("");
  };

  const handleProfessionalSelect = (prof) => {
    setBookingData((prev) => ({
      ...prev,
      professionalId: prof.id,
      professionalName: prof.name
    }));
    setFormError("");
  };

  const handleFieldChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBookingData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
    setFormError("");
  };

  const isSlotBooked = (time) => {
    return appointments.some(
      (apt) => apt.date === bookingData.date && apt.time === time && apt.status !== "Cancelada"
    );
  };

  const validateStep = () => {
    setFormError("");
    if (currentStep === 1) {
      if (!bookingData.serviceId) {
        setFormError("Por favor selecciona un servicio.");
        return false;
      }
    } else if (currentStep === 2) {
      if (!bookingData.professionalId) {
        setFormError("Por favor selecciona una profesional o la opción 'Sin preferencia'.");
        return false;
      }
    } else if (currentStep === 3) {
      if (!bookingData.date) {
        setFormError("Por favor selecciona una fecha válida.");
        return false;
      }
      if (!bookingData.time) {
        setFormError("Por favor selecciona un horario de cita.");
        return false;
      }
    } else if (currentStep === 4) {
      if (!bookingData.clientName.trim()) {
        setFormError("Por favor ingresa tu nombre completo.");
        return false;
      }
      if (!bookingData.clientPhone.trim()) {
        setFormError("Por favor ingresa tu teléfono o WhatsApp de contacto.");
        return false;
      }
      if (bookingData.clientPhone.replace(/\D/g, "").length < 10) {
        setFormError("El número de teléfono debe tener al menos 10 dígitos para confirmarte por WhatsApp.");
        return false;
      }
      if (!bookingData.privacyAccepted) {
        setFormError("Debes aceptar el aviso de privacidad para continuar.");
        return false;
      }
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep()) {
      setCurrentStep((prev) => Math.min(prev + 1, 5));
      window.scrollTo({ top: 120, behavior: "smooth" });
    }
  };

  const prevStep = () => {
    setFormError("");
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 120, behavior: "smooth" });
  };

  const handleSubmitAppointment = (e) => {
    e.preventDefault();
    if (!validateStep()) return;

    // Track completion without personal data
    trackEvent("booking_completed", {
      flow_type: "salon_booking",
      route: "/confirmacion"
    });

    // Create appointment in localStorage
    const newAppointment = createAppointment({
      clientName: bookingData.clientName,
      patientName: bookingData.clientName,
      clientPhone: bookingData.clientPhone,
      patientPhone: bookingData.clientPhone,
      clientEmail: bookingData.clientEmail,
      patientEmail: bookingData.clientEmail,
      isFirstTime: bookingData.isFirstTime,
      serviceId: bookingData.serviceId,
      serviceName: bookingData.serviceName,
      serviceCostNumber: bookingData.serviceCostNumber,
      professional: bookingData.professionalName,
      date: bookingData.date,
      time: bookingData.time,
      hasDeposit: bookingData.hasDeposit,
      depositNumber: bookingData.suggestedDeposit,
      paymentMethod: bookingData.hasDeposit ? bookingData.paymentMethod : "En salón",
      comments: bookingData.comments
    });

    // Redirect to confirmation page passing created data
    navigate("/confirmacion", { state: { appointment: newAppointment } });
  };

  const serviceCost = bookingData.serviceCostNumber || 650;
  const suggestedDeposit = bookingData.hasDeposit ? (bookingData.suggestedDeposit || 200) : 0;
  const remainingBalance = Math.max(0, serviceCost - suggestedDeposit);

  const wizardSteps = [
    { num: "01", label: "Servicio" },
    { num: "02", label: "Profesional" },
    { num: "03", label: "Horario" },
    { num: "04", label: "Tus datos" },
    { num: "05", label: "Anticipo" },
    { num: "06", label: "Confirmación" }
  ];

  return (
    <div className="booking-page-editorial-wrap">
      <div className="container">
        {/* Editorial Header */}
        <div className="booking-editorial-header text-center">
          <span className="editorial-eyebrow">EXPERIENCIA BELLART</span>
          <h1 className="booking-editorial-title">Reserva tu momento Bellart</h1>
          <p className="booking-editorial-sub">
            Selecciona tu servicio, profesional y horario ideal en Reynosa en pocos pasos.
          </p>
        </div>

        {/* Minimalist Editorial Stepper */}
        <div className="editorial-stepper-bar">
          {wizardSteps.map((st, idx) => {
            const stepIndex = idx + 1;
            const isActive = currentStep === stepIndex;
            const isDone = currentStep > stepIndex;

            return (
              <div 
                key={st.num} 
                className={`editorial-step-node ${isActive ? "active" : ""} ${isDone ? "completed" : ""}`}
                onClick={() => isDone && setCurrentStep(stepIndex)}
              >
                <div className="step-num-line">
                  <span className="step-big-num">{st.num}</span>
                  <span className="step-label-text">{st.label}</span>
                </div>
                <div className="step-indicator-hairline"></div>
              </div>
            );
          })}
        </div>

        {/* Wizard Main Card */}
        <div className="booking-editorial-card animate-fade-in">
          {formError && (
            <div className="editorial-alert-banner alert-warning">
              <AlertCircleIcon size={18} />
              <span>{formError}</span>
            </div>
          )}

          {/* ================= STEP 1: SERVICIO ================= */}
          {currentStep === 1 && (
            <div className="step-pane">
              <div className="step-pane-header">
                <span className="step-tag">PASO 01</span>
                <h2 className="step-title">Elige tu servicio</h2>
                <p className="step-desc">
                  Selecciona el servicio que deseas realizarte para coordinar el tiempo y productos necesarios.
                </p>
              </div>

              <div className="booking-services-grid">
                {services.map((service) => {
                  const isSelected = bookingData.serviceId === service.id;
                  return (
                    <div
                      key={service.id}
                      className={`booking-service-tile ${isSelected ? "selected" : ""}`}
                      onClick={() => handleServiceSelect(service)}
                    >
                      <div className="tile-image-box">
                        <img 
                          src={service.image} 
                          alt={service.name} 
                          className="tile-img"
                          loading="lazy"
                        />
                        <span className="tile-category-tag">{service.category}</span>
                        {isSelected && (
                          <div className="tile-check-bubble">
                            <CheckIcon size={14} />
                          </div>
                        )}
                      </div>

                      <div className="tile-content">
                        <div className="tile-top">
                          <h4 className="tile-name">{service.name}</h4>
                          <span className="tile-duration">
                            <ClockIcon size={13} />
                            <span>{service.duration}</span>
                          </span>
                        </div>
                        <p className="tile-desc">{service.description}</p>
                        <div className="tile-price">{service.price}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="wizard-nav-btns" style={{ justifyContent: "flex-end" }}>
                <button type="button" className="btn btn-primary" onClick={nextStep}>
                  <span>Continuar a Profesional</span>
                  <ArrowRightIcon size={16} />
                </button>
              </div>
            </div>
          )}

          {/* ================= STEP 2: PROFESIONAL ================= */}
          {currentStep === 2 && (
            <div className="step-pane">
              <div className="step-pane-header">
                <span className="step-tag">PASO 02</span>
                <h2 className="step-title">Selecciona profesional</h2>
                <p className="step-desc">
                  Elige a tu estilista de confianza o la opción flexible con mayor disponibilidad de turnos.
                </p>
              </div>

              <div className="booking-stylists-grid">
                {initialProfessionalsData.map((prof) => {
                  const isSelected = bookingData.professionalId === prof.id;
                  return (
                    <div
                      key={prof.id}
                      className={`booking-stylist-tile ${isSelected ? "selected" : ""}`}
                      onClick={() => handleProfessionalSelect(prof)}
                    >
                      <div className="stylist-tile-avatar-wrap">
                        {prof.image ? (
                          <img 
                            src={prof.image} 
                            alt={prof.name} 
                            className="stylist-tile-img" 
                          />
                        ) : (
                          <div className="stylist-tile-fallback-avatar">
                            <span>{prof.avatar}</span>
                          </div>
                        )}
                        {isSelected && (
                          <div className="stylist-check-pill">
                            <CheckIcon size={12} />
                          </div>
                        )}
                      </div>

                      <div className="stylist-tile-info">
                        <h4 className="stylist-tile-name">{prof.name}</h4>
                        <span className="stylist-tile-spec">{prof.specialty}</span>
                        <span className="stylist-tile-avail">
                          <ClockIcon size={12} />
                          <span>{prof.availability}</span>
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="booking-info-note">
                ✨ Perfiles demostrativos para visualizar la selección de profesional en el flujo final.
              </div>

              <div className="wizard-nav-btns">
                <button type="button" className="btn btn-secondary" onClick={prevStep}>
                  <ArrowLeftIcon size={16} />
                  <span>Atrás</span>
                </button>
                <button type="button" className="btn btn-primary" onClick={nextStep}>
                  <span>Continuar a Horario</span>
                  <ArrowRightIcon size={16} />
                </button>
              </div>
            </div>
          )}

          {/* ================= STEP 3: FECHA Y HORARIO ================= */}
          {currentStep === 3 && (
            <div className="step-pane">
              <div className="step-pane-header">
                <span className="step-tag">PASO 03</span>
                <h2 className="step-title">Escoge fecha y horario</h2>
                <p className="step-desc">
                  Espacios disponibles para <strong>{bookingData.serviceName}</strong> con <strong>{bookingData.professionalName}</strong>.
                </p>
              </div>

              <div className="booking-datetime-layout">
                {/* Date Input Box */}
                <div className="booking-date-card">
                  <label htmlFor="bookingDateInput" className="editorial-field-label">
                    <CalendarIcon size={16} />
                    <span>Fecha deseada:</span>
                  </label>
                  <input
                    type="date"
                    id="bookingDateInput"
                    name="date"
                    className="editorial-date-input"
                    min={getTodayISO()}
                    value={bookingData.date}
                    onChange={handleFieldChange}
                  />
                  <p className="field-helper-text">
                    Atención de Lunes a Sábado. Los horarios disponibles se ajustan a la estilista seleccionada.
                  </p>
                </div>

                {/* Time Slots Box */}
                <div className="booking-slots-card">
                  <label className="editorial-field-label">
                    <ClockIcon size={16} />
                    <span>Horarios disponibles:</span>
                  </label>

                  <div className="editorial-slots-grid">
                    {SALON_TIME_SLOTS.map((slot) => {
                      const booked = isSlotBooked(slot);
                      const isSelected = bookingData.time === slot;

                      return (
                        <button
                          type="button"
                          key={slot}
                          className={`editorial-slot-pill ${isSelected ? "selected" : ""}`}
                          onClick={() => {
                            if (!booked) {
                              setBookingData((prev) => ({ ...prev, time: slot }));
                              setFormError("");
                            }
                          }}
                          disabled={booked}
                          style={booked ? { opacity: 0.4, cursor: "not-allowed", textDecoration: "line-through" } : {}}
                          title={booked ? "Horario no disponible" : "Turno disponible"}
                        >
                          <span>{slot}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="wizard-nav-btns">
                <button type="button" className="btn btn-secondary" onClick={prevStep}>
                  <ArrowLeftIcon size={16} />
                  <span>Atrás</span>
                </button>
                <button type="button" className="btn btn-primary" onClick={nextStep}>
                  <span>Continuar a Tus Datos</span>
                  <ArrowRightIcon size={16} />
                </button>
              </div>
            </div>
          )}

          {/* ================= STEP 4: DATOS DEL CLIENTE ================= */}
          {currentStep === 4 && (
            <div className="step-pane">
              <div className="step-pane-header">
                <span className="step-tag">PASO 04</span>
                <h2 className="step-title">Tus datos de contacto</h2>
                <p className="step-desc">
                  Información para registrar tu cita y comunicarnos contigo para la confirmación.
                </p>
              </div>

              <div className="editorial-form-grid">
                <div className="form-field-group">
                  <label className="editorial-field-label" htmlFor="clientName">
                    Nombre completo <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="clientName"
                    name="clientName"
                    className="editorial-text-input ph-mask"
                    placeholder="Ej. Sofía Hernández"
                    value={bookingData.clientName}
                    onChange={handleFieldChange}
                  />
                </div>

                <div className="form-field-group">
                  <label className="editorial-field-label" htmlFor="clientPhone">
                    Teléfono / WhatsApp (10 dígitos) <span className="req">*</span>
                  </label>
                  <input
                    type="tel"
                    id="clientPhone"
                    name="clientPhone"
                    className="editorial-text-input ph-mask"
                    placeholder="Ej. 899 124 1188"
                    value={bookingData.clientPhone}
                    onChange={handleFieldChange}
                  />
                </div>

                <div className="form-field-group full-width">
                  <label className="editorial-field-label" htmlFor="clientEmail">
                    Correo electrónico (opcional)
                  </label>
                  <input
                    type="email"
                    id="clientEmail"
                    name="clientEmail"
                    className="editorial-text-input ph-mask"
                    placeholder="correo@ejemplo.com"
                    value={bookingData.clientEmail}
                    onChange={handleFieldChange}
                  />
                </div>

                <div className="form-field-group full-width">
                  <label className="editorial-field-label">¿Es tu primera visita a Bellart Salón?</label>
                  <div className="editorial-radio-row">
                    <label className="editorial-radio-item">
                      <input
                        type="radio"
                        name="isFirstTime"
                        value="true"
                        checked={bookingData.isFirstTime === true}
                        onChange={() => setBookingData((prev) => ({ ...prev, isFirstTime: true }))}
                      />
                      <span>Sí, es mi primera visita</span>
                    </label>
                    <label className="editorial-radio-item">
                      <input
                        type="radio"
                        name="isFirstTime"
                        value="false"
                        checked={bookingData.isFirstTime === false}
                        onChange={() => setBookingData((prev) => ({ ...prev, isFirstTime: false }))}
                      />
                      <span>No, ya soy clienta frecuente</span>
                    </label>
                  </div>
                </div>

                <div className="form-field-group full-width">
                  <label className="editorial-field-label" htmlFor="comments">
                    Comentarios opcionales para la estilista
                  </label>
                  <textarea
                    id="comments"
                    name="comments"
                    className="editorial-text-input ph-mask"
                    rows="2"
                    placeholder="Ej. Cabello teñido previamente, preferencia de tono frío, diseño especial de uñas, etc."
                    value={bookingData.comments}
                    onChange={handleFieldChange}
                  ></textarea>
                </div>
              </div>

              {/* Privacy Notice Acceptance */}
              <div className="editorial-privacy-notice">
                <input
                  type="checkbox"
                  id="privacyAccepted"
                  name="privacyAccepted"
                  className="privacy-check-box"
                  checked={bookingData.privacyAccepted}
                  onChange={handleFieldChange}
                />
                <label htmlFor="privacyAccepted" className="privacy-check-label">
                  Acepto el <strong>aviso de privacidad de Bellart Salón</strong>. Los datos registrados serán utilizados exclusivamente para coordinar mi cita y confirmación previa por WhatsApp.
                </label>
              </div>

              <div className="wizard-nav-btns">
                <button type="button" className="btn btn-secondary" onClick={prevStep}>
                  <ArrowLeftIcon size={16} />
                  <span>Atrás</span>
                </button>
                <button type="button" className="btn btn-primary" onClick={nextStep}>
                  <span>Continuar a Anticipo</span>
                  <ArrowRightIcon size={16} />
                </button>
              </div>
            </div>
          )}

          {/* ================= STEP 5: ANTICIPO DEMO ================= */}
          {currentStep === 5 && (
            <div className="step-pane">
              <div className="step-pane-header">
                <span className="step-tag">PASO 05</span>
                <h2 className="step-title">Anticipo y Resumen</h2>
                <p className="step-desc">
                  Puedes registrar un anticipo para asegurar tu horario con la estilista seleccionada.
                </p>
              </div>

              {/* Financial Breakdown Card with Demo Mode Badge */}
              <div className="editorial-deposit-card">
                <div className="deposit-card-top-badge">
                  <span className="demo-mode-pill">MODO DEMOSTRACIÓN</span>
                </div>

                <div className="deposit-details-list">
                  <div className="deposit-item-row">
                    <span className="item-lbl">Servicio seleccionado:</span>
                    <strong className="item-val">{bookingData.serviceName} ({bookingData.serviceDuration})</strong>
                  </div>
                  <div className="deposit-item-row">
                    <span className="item-lbl">Profesional / Estilista:</span>
                    <strong className="item-val">{bookingData.professionalName}</strong>
                  </div>
                  <div className="deposit-item-row">
                    <span className="item-lbl">Fecha y hora:</span>
                    <strong className="item-val">{bookingData.date} — {bookingData.time}</strong>
                  </div>
                  <div className="deposit-item-row">
                    <span className="item-lbl">Costo estimado:</span>
                    <strong className="item-val">${serviceCost} MXN</strong>
                  </div>

                  <div className="deposit-card-divider"></div>

                  <div className="deposit-item-row highlight-row">
                    <span className="item-lbl">Anticipo sugerido:</span>
                    <strong className="item-val highlight-val">
                      {bookingData.hasDeposit ? `$${bookingData.suggestedDeposit} MXN` : "$0 MXN"}
                    </strong>
                  </div>

                  <div className="deposit-item-row balance-row">
                    <span className="item-lbl">Saldo a liquidar en salón:</span>
                    <strong className="item-val balance-val">
                      ${remainingBalance} MXN
                    </strong>
                  </div>
                </div>
              </div>

              {/* Toggle Anticipo Demo vs Sin Anticipo */}
              <div className="deposit-toggle-container">
                <label className="editorial-field-label" style={{ marginBottom: "0.85rem", display: "block" }}>
                  Selecciona la modalidad de reserva:
                </label>

                <div className="deposit-toggle-cards">
                  <div 
                    className={`toggle-option-card ${bookingData.hasDeposit ? "selected" : ""}`}
                    onClick={() => setBookingData((prev) => ({ ...prev, hasDeposit: true }))}
                  >
                    <div className="toggle-card-radio">
                      {bookingData.hasDeposit && <div className="radio-inner-dot"></div>}
                    </div>
                    <div>
                      <strong>Registrar anticipo demo (${bookingData.suggestedDeposit} MXN)</strong>
                      <p>Simula el pago previo para apartar tu horario garantizado.</p>
                    </div>
                  </div>

                  <div 
                    className={`toggle-option-card ${!bookingData.hasDeposit ? "selected" : ""}`}
                    onClick={() => setBookingData((prev) => ({ ...prev, hasDeposit: false }))}
                  >
                    <div className="toggle-card-radio">
                      {!bookingData.hasDeposit && <div className="radio-inner-dot"></div>}
                    </div>
                    <div>
                      <strong>Reservar sin anticipo</strong>
                      <p>Liquidarás el total de ${serviceCost} MXN directamente al acudir al salón.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Payment Methods */}
              {bookingData.hasDeposit && (
                <div className="visual-methods-wrap">
                  <label className="editorial-field-label" style={{ marginBottom: "0.6rem", display: "block" }}>
                    Método de demostración visual:
                  </label>

                  <div className="editorial-methods-grid">
                    {[
                      { id: "Tarjeta demo", label: "Tarjeta", icon: <CreditCardIcon size={17} /> },
                      { id: "Transferencia demo", label: "Transferencia", icon: <SparklesIcon size={17} /> },
                      { id: "Efectivo en salón", label: "Efectivo en salón", icon: <ClockIcon size={17} /> }
                    ].map((method) => (
                      <button
                        type="button"
                        key={method.id}
                        className={`editorial-method-btn ${bookingData.paymentMethod === method.id ? "active" : ""}`}
                        onClick={() => setBookingData((prev) => ({ ...prev, paymentMethod: method.id }))}
                      >
                        {method.icon}
                        <span>{method.label}</span>
                      </button>
                    ))}
                  </div>

                  <div className="demo-disclaimer-box">
                    ℹ️ <strong>Simulación comercial:</strong> No se efectúa ningún cobro financiero real. La versión final puede vincularse a pasarelas bancarias o cobro con terminal en salón.
                  </div>
                </div>
              )}

              {/* Navigation & Final Submit */}
              <div className="wizard-nav-btns">
                <button type="button" className="btn btn-secondary" onClick={prevStep}>
                  <ArrowLeftIcon size={16} />
                  <span>Atrás</span>
                </button>
                <button 
                  type="button" 
                  className="btn btn-primary btn-submit-reserve" 
                  onClick={handleSubmitAppointment}
                >
                  <CheckIcon size={19} />
                  <span>Confirmar mi Reserva</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
