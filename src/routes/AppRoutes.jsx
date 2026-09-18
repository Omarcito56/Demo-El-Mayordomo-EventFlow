import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Layouts
import { PublicLayout } from "../layouts/PublicLayout";
import { AdminLayout } from "../layouts/AdminLayout";

// Public Pages
import { HomePage } from "../pages/public/HomePage";
import { ServicesPage } from "../pages/public/ServicesPage";
import { BookingPage } from "../pages/public/BookingPage";
import { ConfirmationPage } from "../pages/public/ConfirmationPage";

// Admin Pages
import { AdminLoginPage } from "../pages/admin/AdminLoginPage";
import { AdminDashboardPage } from "../pages/admin/AdminDashboardPage";
import { AdminAgendaPage } from "../pages/admin/AdminAgendaPage";
import { AdminAppointmentsPage } from "../pages/admin/AdminAppointmentsPage";
import { AdminPatientsPage } from "../pages/admin/AdminPatientsPage";
import { AdminServicesPage } from "../pages/admin/AdminServicesPage";
import { AdminPaymentsPage } from "../pages/admin/AdminPaymentsPage";
import { AdminSettingsPage } from "../pages/admin/AdminSettingsPage";

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Client Routes */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/agendar" element={<BookingPage />} />
        <Route path="/confirmacion" element={<ConfirmationPage />} />
      </Route>

      {/* Admin Login */}
      <Route path="/admin/login" element={<AdminLoginPage />} />

      {/* Admin Protected Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboardPage />} />
        <Route path="agenda" element={<AdminAgendaPage />} />
        <Route path="citas" element={<AdminAppointmentsPage />} />
        <Route path="clientes" element={<AdminPatientsPage />} />
        <Route path="pacientes" element={<Navigate to="/admin/clientes" replace />} />
        <Route path="servicios" element={<AdminServicesPage />} />
        <Route path="pagos" element={<AdminPaymentsPage />} />
        <Route path="configuracion" element={<AdminSettingsPage />} />
      </Route>

      {/* Fallback route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
