"use client";
import { useState } from "react";
export function ProfesionalServices() {
  const [preview, setPreview] = useState<{ image: string; alt: string } | null>(
    null,
  );
  return (
    <div className="inner-container">
      <div className="main-col column-alt">
        <div className="inner-col inner-col-1">
          <h4 className="sm-title">{"Services"}</h4>
        </div>
        <div className="inner-col inner-col-2">
          <ul>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Cosentino_City.jpg",
                  alt: "Cosentino City",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Cosentino_City.jpg",
                  alt: "Cosentino City",
                })
              }
            >
              <a href="#">{"Cosentino City"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Cosentino_Center.jpg",
                  alt: "Cosentino Center",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Cosentino_Center.jpg",
                  alt: "Cosentino Center",
                })
              }
            >
              <a href="#">{"Cosentino Center"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Integral_Services.jpg",
                  alt: "Integrated Services for International Projects",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Integral_Services.jpg",
                  alt: "Integrated Services for International Projects",
                })
              }
            >
              <a href="#">{"Integrated Services for International Projects"}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={`column-3 hover-preview ${preview ? "is-visible" : ""}`}>
        {preview && (
          <div className="img-wrapper">
            <img
              className="preview-img"
              src={preview.image}
              alt={preview.alt}
            />
          </div>
        )}
      </div>
    </div>
  );
}
