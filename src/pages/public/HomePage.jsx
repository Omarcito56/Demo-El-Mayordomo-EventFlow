import React, { useEffect } from "react";
import { Hero } from "../../components/landing/Hero";
import { BeautyStrip } from "../../components/landing/BeautyStrip";
import { ServicesSection } from "../../components/landing/ServicesSection";
import { ExperienceSection } from "../../components/landing/ExperienceSection";
import { GallerySection } from "../../components/landing/GallerySection";
import { RemindersSection } from "../../components/landing/RemindersSection";
import { StylistsSection } from "../../components/landing/StylistsSection";
import { ClinicPitch } from "../../components/landing/ClinicPitch";
import { BookingBanner } from "../../components/landing/BookingBanner";
import { LocationContact } from "../../components/landing/LocationContact";
import { useTrackOnMount } from "../../analytics/analytics";

export const HomePage = () => {
  useTrackOnMount("demo_viewed", {
    view_type: "landing_home",
    route: "/"
  });

  useEffect(() => {
    // Handle hash scroll if arriving with hash like #servicios or #galeria or #contacto or #experiencia
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const elem = document.getElementById(id);
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: "smooth" });
        }, 150);
      }
    }
  }, []);

  return (
    <div className="homepage-editorial-wrap">
      <Hero />
      <BeautyStrip />
      <ServicesSection />
      <ExperienceSection />
      <GallerySection />
      <RemindersSection />
      <StylistsSection />
      <ClinicPitch />
      <BookingBanner />
      <LocationContact />
    </div>
  );
};
