import React from "react";

export const BeautyStrip = () => {
  const items = ["MANICURE", "GEL", "ACRYLIC", "NAIL ART", "PEDICURE", "BEAUTY"];

  return (
    <div className="beauty-strip-container" aria-hidden="true">
      <div className="beauty-strip-track">
        {[...items, ...items, ...items, ...items].map((word, idx) => (
          <span key={idx} className="beauty-strip-item">
            <span className="strip-text">{word}</span>
            <span className="strip-dot">•</span>
          </span>
        ))}
      </div>
    </div>
  );
};
