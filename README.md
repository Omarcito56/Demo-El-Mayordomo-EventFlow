# BS EventFlow — El Mayordomo Banquetes & Catering

Propuesta comercial interactiva desarrollada por **BS Code** para digitalizar la consulta de paquetes, cotización inicial, selección de fecha, número de invitados, servicios adicionales, solicitud de disponibilidad, registro de cliente, simulación de anticipo demo y administración completa de eventos para **El Mayordomo Banquetes & Catering**.

---

## 1. Arquitectura Técnica Estable

- **Framework**: React 19 + Vite
- **Lenguaje**: JavaScript (ES Modules)
- **Enrutamiento**: React Router DOM (v7)
- **Estilos**: CSS Puro (con variables de diseño editorial, gradientes y micro-interacciones)
- **Almacenamiento Local**: `localStorage` reactivo (`useEventData`) con persistencia sincronizada y folios secuenciales (`EVT-000126+`)
- **Despliegue**: Optimizado para Vercel con `vercel.json` (SPA fallback)
- **Analítica de Producto**: Vercel Web Analytics + PostHog Product Analytics & Session Replay

---

## 2. Experiencia de Usuario & Flujos

### Web Pública
- **Landing Page Editorial**:
  - Hero asimétrico con fotografía de alta gama e indicadores de propuesta demo.
  - Sección conceptual: *"Celebra. Nosotros organizamos."*
  - Catálogo de 3 paquetes demostrativos: **Esencial**, **Celebración** y **Premium** (con aviso visible de precios demostrativos).
  - Selector visual por formatos de evento: Bodas, XV Años, Cumpleaños, Corporativo, Graduaciones y Privado.
  - Flujo de 5 pasos: *"Del primer mensaje al gran día"*.
  - Pitch comercial del sistema: *"Menos conversaciones dispersas. Más eventos organizados."*
  - Calendario público interactivo *"Consulta una fecha"* con disponibilidad demostrativa (sin datos personales).
  - Sección de contacto oficial (`elmayordomo.banquetes@gmail.com`) y llamada a la acción principal.
- **Cotizador Central (`/cotizar`)**:
  - Stepper guiado de 7 pasos:
    1. **01 Evento**: Selección de tipo de celebración.
    2. **02 Invitados**: Control numérico y rangos sugeridos (1-50, 51-100, 101-150, 151-200, 200+).
    3. **03 Paquete**: Elección de propuesta gastronómica.
    4. **04 Extras**: Activación independiente de servicios adicionales demo con precio.
    5. **05 Fecha**: Date picker validado contra fechas pasadas + disponibilidad demostrativa en vivo.
    6. **06 Datos**: Formulario de contacto protegido con `.ph-mask`.
    7. **07 Resumen**: Desglose formal de cotización y envío de solicitud.
  - Barra de cálculo dinámico permanente con desglose de paquete base, ajuste por invitados y extras en tiempo real.
- **Confirmación (`/confirmacion`)**:
  - Folio generado correlativo (`EVT-000128+`) y estado inicial *"Solicitud recibida"*.
  - Simulador *"Aparta tu fecha"* con cálculo de anticipo demo ($5,000 MXN), restante estimado, simulación de método (Transferencia demo / Tarjeta demo) y badge explícito de **SIMULACIÓN**.

### Panel de Administración (`/admin` / `EventFlow Admin`)
1. **Resumen (`/admin/dashboard`)**: Métricas clave en tiempo real, solicitudes recientes y eventos próximos.
2. **Solicitudes (`/admin/solicitudes`)**: Tabla interactiva con búsqueda, filtro por estado (`Nueva`, `Contactado`, `Cotización enviada`, `Esperando anticipo`, `Confirmada`, `Descartada`), cambio rápido de estado y conversión a evento.
3. **Calendario (`/admin/calendario`)**: Vista mensual de montajes y disponibilidad con código de color por estado.
4. **Eventos (`/admin/eventos`)**: Control de eventos confirmados, montos cobrados, saldos pendientes y registro de abonos demo.
5. **Clientes (`/admin/clientes`)**: Directorio con historial de solicitudes y presupuestos estimados.
6. **Cotizaciones (`/admin/cotizaciones`)**: Registro de cotizaciones emitidas con vista de detalle.
7. **Pagos (`/admin/pagos`)**: Control de anticipos, segundos pagos y liquidaciones registradas.
8. **Paquetes Demo (`/admin/paquetes`)**: Edición de precios base, capacidades y descripciones en `localStorage`.
9. **Configuración (`/admin/configuracion`)**: Ajustes comerciales de la propuesta y botón de reinicio demo de fábrica.

---

## 3. Configuración de Analytics y Telemetría

La demo reporta automáticamente al proyecto central de PostHog de BS Code (**"BS Code Demos"**):
- **`demoId`**: `el_mayordomo_eventflow`
- **`prospectId`**: `el_mayordomo`
- **`projectType`**: `bs_code_demo`
- **`projectName`**: `BS Code Demos`

Archivo de configuración central:
👉 `src/analytics/analyticsConfig.js`

### Eventos Instrumentados
- `quote_started`
- `quote_event_type_selected`
- `quote_package_selected`
- `quote_extras_selected`
- `quote_date_selected`
- `quote_completed`
- `availability_checked`
- `deposit_demo_viewed`
- `deposit_demo_registered`
- `admin_requests_opened`
- `admin_quotes_opened`
- `admin_calendar_opened`
- `admin_events_opened`
- `admin_payments_opened`
- `request_status_changed`
- `quote_status_changed`
- `event_created`
- `admin_login_opened`
- `admin_login_success`
- `$pageview`

### Políticas de Privacidad y Session Replay
- Enmascaramiento total de entradas (`maskAllInputs: true`).
- Selectores de privacidad: `.ph-mask, [data-ph-mask]`.
- Filtro estricto que elimina nombres, teléfonos, correos, domicilios y notas personales antes de enviar telemetría.
- Rangos agregados (`guest_range`, `estimated_total_range`) para evitar vincular montos o datos exactos a personas individuales.

---

## 4. Instrucciones para Ejecución Local

1. Instalar dependencias (si no están instaladas):
   ```bash
   npm install
   ```

2. Iniciar servidor de desarrollo:
   ```bash
   npm run dev
   ```

3. Compilar para producción:
   ```bash
   npm run build
   ```

4. Credenciales de acceso al panel administrativo demo:
   - **Ruta**: `/admin/login`
   - **Usuario**: `admin@eventflow.demo`
   - **Contraseña**: `demo123`
   - (Cuenta con botón de autocompletado en pantalla).
