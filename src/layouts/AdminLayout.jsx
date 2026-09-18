import React, { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { AdminSidebar } from "../components/admin/AdminSidebar";
import { AdminHeader } from "../components/admin/AdminHeader";

export const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const isAuth = localStorage.getItem("beautyflow_auth") || localStorage.getItem("clinicflow_auth");
    if (!isAuth) {
      navigate("/admin/login");
    }
  }, [navigate]);

  // Determine header title based on current route
  const getHeaderTitle = () => {
    const path = location.pathname;
    if (path.includes("/dashboard")) return "Resumen de Bellart Salón";
    if (path.includes("/agenda")) return "Agenda de Citas";
    if (path.includes("/citas")) return "Gestión de Citas";
    if (path.includes("/clientes") || path.includes("/pacientes")) return "Directorio de Clientes";
    if (path.includes("/servicios")) return "Catálogo de Servicios";
    if (path.includes("/pagos")) return "Anticipos y Pagos";
    if (path.includes("/configuracion")) return "Configuración del Salón";
    return "Panel de Administración";
  };

  return (
    <div className="admin-wrapper">
      <AdminSidebar />
      <div className="admin-main">
        <AdminHeader title={getHeaderTitle()} />
        <main className="admin-body">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
