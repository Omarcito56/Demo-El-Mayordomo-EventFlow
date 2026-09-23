import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop
 * Restablece automáticamente el scroll al inicio de la ventana (0, 0)
 * cada vez que cambia la ruta de navegación (SPA), evitando que el usuario
 * aterrice en la parte inferior o footer de una nueva página.
 */
export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Si no hay ancla hash específica, desplaza la ventana a la cima
    if (!hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
      });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
