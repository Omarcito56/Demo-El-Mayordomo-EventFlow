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
      title: "Estilizado & Brillo",
      sizeClass: "gallery-card-tall"
    },
    {
      id: 2,
      image: gallery2,
      category: "NAILS",
      title: "Nail Art Minimalista",
      sizeClass: "gallery-card-wide"
    },
    {
      id: 3,
      image: gallery3,
      category: "MAKEUP",
      title: "Maquillaje Editorial",
      sizeClass: "gallery-card-square"
    },
    {
      id: 4,
      image: gallery4,
      category: "HAIR",
      title: "Ondas Naturales & Textura",
      sizeClass: "gallery-card-square"
    },
    {
      id: 5,
      image: gallery5,
      category: "NAILS",
      title: "Manicure Delicado",
      sizeClass: "gallery-card-wide"
    },
    {
      id: 6,
      image: gallery6,
      category: "COLOR",
      title: "Colorimetría & Balayage",
      sizeClass: "gallery-card-tall"
    }
  ];

  return (
    <section id="galeria" className="gallery-section">
      <div className="container">
        <div className="section-header-editorial text-center">
          <span className="editorial-eyebrow">NUESTRO ESTILO</span>
          <h2 className="editorial-title">Un poco de inspiración</h2>
          <p className="editorial-subtext">
            Cabello, color, uñas y belleza en una experiencia pensada para ti.
          </p>
        </div>

        <div className="gallery-masonry-grid">
          {galleryItems.map((item) => (
            <div key={item.id} className={`gallery-item-card ${item.sizeClass}`}>
              <div className="gallery-image-wrapper">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="gallery-image"
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <span className="gallery-tag">{item.category}</span>
                  <h4 className="gallery-item-title">{item.title}</h4>
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
