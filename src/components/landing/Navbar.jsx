import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SparklesIcon, CalendarIcon, MenuIcon, XIcon, UserIcon, WhatsAppIcon } from "../common/Icons";
import { trackEvent } from "../../analytics/analytics";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const scrollToSection = (id) => {
    closeMenu();
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCtaClick = (locationTag) => {
    closeMenu();
    trackEvent("demo_cta_clicked", {
      cta_location: locationTag,
      cta_text: "Reservar cita"
    });
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : "navbar-transparent"}`}>
      <div className="container navbar-inner">
        {/* Brand Logo */}
        <Link to="/" className="navbar-brand" onClick={() => { closeMenu(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
          <span className="navbar-brand-editorial">Bellart Salón</span>
          <span className="navbar-brand-tagline">BEAUTY & STYLE</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="navbar-nav-desktop">
          <ul className="navbar-nav">
            <li>
              <Link 
                to="/" 
                className={`nav-link ${location.pathname === "/" && !location.hash ? "active" : ""}`} 
                onClick={() => { closeMenu(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link 
                to="/servicios" 
                className={`nav-link ${location.pathname === "/servicios" ? "active" : ""}`}
                onClick={closeMenu}
              >
                Servicios
              </Link>
            </li>
            <li>
              <button className="nav-link nav-btn-link" onClick={() => scrollToSection("galeria")}>
                Galería
              </button>
            </li>
            <li>
              <Link 
                to="/agendar" 
                className={`nav-link ${location.pathname === "/agendar" ? "active" : ""}`}
                onClick={closeMenu}
              >
                Agenda
              </Link>
            </li>
            <li>
              <button className="nav-link nav-btn-link" onClick={() => scrollToSection("contacto")}>
                Contacto
              </button>
            </li>
          </ul>
        </nav>

        {/* Right Actions */}
        <div className="navbar-actions">
          <a
            href="https://wa.me/528991241188?text=Hola%20Bellart%20Sal%C3%B3n%2C%20quisiera%20pedir%20informes."
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-whatsapp-link"
            title="Escríbenos por WhatsApp"
          >
            <WhatsAppIcon size={16} />
            <span className="desktop-only">WhatsApp</span>
          </a>

          {/* Reservar Cita Primary Button */}
          <Link 
            to="/agendar" 
            className="btn btn-primary btn-sm btn-nav-reserve"
            onClick={() => handleCtaClick("navbar_desktop")}
          >
            <CalendarIcon size={15} />
            <span>Reservar cita</span>
          </Link>

          {/* Discrete Admin Link */}
          <Link to="/admin/login" className="admin-quicklink" title="Acceso demo administración">
            <UserIcon size={14} />
            <span className="desktop-only">Panel</span>
          </Link>

          {/* Mobile Hamburger Button */}
          <button 
            className="mobile-toggle-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menú móvil"
          >
            {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMenu}>
          <div className="mobile-menu-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <span className="navbar-brand-editorial">Bellart Salón</span>
              <button className="drawer-close-btn" onClick={closeMenu} aria-label="Cerrar menú">
                <XIcon size={22} />
              </button>
            </div>

            <div className="mobile-drawer-nav">
              <Link 
                to="/" 
                className="mobile-nav-link" 
                onClick={() => { closeMenu(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              >
                Inicio
              </Link>
              <Link to="/servicios" className="mobile-nav-link" onClick={closeMenu}>
                Servicios
              </Link>
              <button className="mobile-nav-link" onClick={() => scrollToSection("galeria")}>
                Galería
              </button>
              <Link to="/agendar" className="mobile-nav-link" onClick={closeMenu}>
                Agenda en línea
              </Link>
              <button className="mobile-nav-link" onClick={() => scrollToSection("contacto")}>
                Contacto
              </button>
            </div>

            <div className="mobile-menu-actions">
              <Link 
                to="/agendar" 
                className="btn btn-primary btn-block" 
                onClick={() => handleCtaClick("navbar_mobile")}
              >
                <CalendarIcon size={18} />
                <span>Reservar cita</span>
              </Link>

              <a
                href="https://wa.me/528991241188?text=Hola%20Bellart%20Sal%C3%B3n%2C%20quisiera%20pedir%20informes."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-block"
                onClick={closeMenu}
              >
                <WhatsAppIcon size={18} />
                <span>Contactar por WhatsApp</span>
              </a>

              <Link to="/admin/login" className="btn btn-outline btn-block" onClick={closeMenu}>
                <UserIcon size={15} />
                <span>Panel de Administración (Demo)</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
