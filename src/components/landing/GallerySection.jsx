import React from "react";
import gallery1 from "../../assets/images/beauty/gallery-1.jpg";
import gallery2 from "../../assets/images/beauty/gallery-2.jpg";
import gallery3 from "../../assets/images/beauty/gallery-3.jpg";
import gallery4 from "../../assets/images/beauty/gallery-4.jpg";
import gallery5 from "../../assets/images/beauty/gallery-5.jpg";
import gallery6 from "../../assets/images/beauty/gallery-6.jpg";

export const GallerySection = () => {
  const galleryItems = [
    {
      id: 1,
      image: gallery1,
      category: "HAIR",
      title: "Estilizado & Movimiento",
      aspectClass: "aspect-tall"
    },
    {
      id: 2,
      image: gallery2,
      category: "COLOR",
      title: "Balayage & Luminosidad",
      aspectClass: "aspect-regular"
    },
    {
      id: 3,
      image: gallery3,
      category: "MAKEUP",
      title: "Maquillaje Radiante",
      aspectClass: "aspect-tall"
    },
    {
      id: 4,
      image: gallery4,
      category: "BEAUTY",
      title: "Cuidado & Armonía",
      aspectClass: "aspect-regular"
    },
    {
      id: 5,
      image: gallery5,
      category: "COLOR",
      title: "Tonos & Textura",
      aspectClass: "aspect-tall"
    },
    {
      id: 6,
      image: gallery6,
      category: "MAKEUP",
      title: "Acabado Impecable",
      aspectClass: "aspect-regular"
    }
  ];

  return (
    <section id="galeria" className="gallery-boutique-section">
      <div className="container">
        <div className="section-header-editorial text-center">
          <span className="editorial-eyebrow">INSPIRACIÓN & ESTILO</span>
          <h2 className="editorial-title">Beauty inspiration</h2>
          <p className="editorial-subtext">
            Ideas de cabello, color, maquillaje y belleza pensadas para inspirar tu próxima cita.
          </p>
        </div>

        {/* Alternated vertical photo composition with gentle rounded corners and cream spacing */}
        <div className="gallery-boutique-grid">
          {galleryItems.map((item) => (
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

        <div className="gallery-disclaimer-wrap">
          <p className="gallery-disclaimer-text">
            * Imágenes de inspiración utilizadas únicamente para esta propuesta demostrativa.
          </p>
        </div>
      </div>
    </section>
  );
};
