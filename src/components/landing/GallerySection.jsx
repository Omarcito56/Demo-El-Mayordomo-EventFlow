import React from "react";
import galleryGel from "../../assets/images/nails/gallery-gel.jpg";
import galleryAcrylic from "../../assets/images/nails/gallery-acrylic.jpg";
import galleryNailArt from "../../assets/images/nails/gallery-nailart.jpg";
import galleryNude from "../../assets/images/nails/gallery-nude.jpg";
import galleryChrome from "../../assets/images/nails/gallery-chrome.jpg";
import gallerySpa from "../../assets/images/nails/gallery-spa.jpg";

export const GallerySection = () => {
  const inspirationItems = [
    {
      id: 1,
      image: galleryGel,
      category: "GEL",
      title: "Gel Polish Glaseado",
      aspectClass: "aspect-tall"
    },
    {
      id: 2,
      image: galleryAcrylic,
      category: "ACRYLIC",
      title: "Escultural Almond Set",
      aspectClass: "aspect-regular"
    },
    {
      id: 3,
      image: galleryNailArt,
      category: "NAIL ART",
      title: "Fine Art & Minimal Lines",
      aspectClass: "aspect-tall"
    },
    {
      id: 4,
      image: galleryNude,
      category: "NUDE",
      title: "Clean Girl Nude Nails",
      aspectClass: "aspect-regular"
    },
    {
      id: 5,
      image: galleryChrome,
      category: "CHROME",
      title: "Efecto Espejo & Silver Foil",
      aspectClass: "aspect-tall"
    },
    {
      id: 6,
      image: gallerySpa,
      category: "SPA",
      title: "Pedicura & Cuidado Sensorial",
      aspectClass: "aspect-regular"
    }
  ];

  return (
    <section id="inspiracion" className="gallery-boutique-section">
      <div className="container">
        <div className="section-header-editorial text-center">
          <span className="editorial-eyebrow">MOODBOARD & TENDENCIAS</span>
          <h2 className="editorial-title">Tu próxima inspiración</h2>
          <p className="editorial-subtext">
            Explora estilos de gel, acrílico, chrome, nail art y spa pensados para inspirar el diseño de tu siguiente cita.
          </p>
        </div>

        {/* Editorial Masonry-Style Grid */}
        <div className="gallery-boutique-grid">
          {inspirationItems.map((item) => (
            <div key={item.id} className={`gallery-boutique-card ${item.aspectClass}`}>
              <div className="gallery-boutique-img-frame">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="gallery-boutique-photo"
                  loading="lazy"
                />
                <div className="gallery-boutique-badge">
                  <span>{item.category}</span>
                </div>
                <div className="gallery-boutique-overlay">
                  <h4 className="gallery-overlay-title">{item.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Small Demonstrative Disclaimer */}
        <div className="gallery-disclaimer-wrap">
          <p className="gallery-disclaimer-text">
            * Imágenes de inspiración utilizadas únicamente para esta propuesta demostrativa.
          </p>
        </div>
      </div>
    </section>
  );
};
