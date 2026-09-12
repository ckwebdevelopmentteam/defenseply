"use client";
import { useState } from "react";
export function EspaciosInteriores() {
  const [preview, setPreview] = useState<{ image: string; alt: string } | null>(
    null,
  );
  return (
    <div className="inner-container">
      <div className="main-col column-alt">
        <div className="inner-col inner-col-1">
          <h4 className="sm-title">{"Other interiors applications"}</h4>
        </div>
        <div className="inner-col inner-col-2">
          <ul>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Spaces_Other_Ineriors_Cosentino.jpg",
                  alt: "Other interiors",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Spaces_Other_Ineriors_Cosentino.jpg",
                  alt: "Other interiors",
                })
              }
            >
              <a href="#">{"Other interiors"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Spaces_Other_Ineriors_Furniture.jpg",
                  alt: "Furniture",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Spaces_Other_Ineriors_Furniture.jpg",
                  alt: "Furniture",
                })
              }
            >
              <a href="#">{"Furniture"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Spaces_Other_Ineriors_Flooring.jpg",
                  alt: "Flooring",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Spaces_Other_Ineriors_Flooring.jpg",
                  alt: "Flooring",
                })
              }
            >
              <a href="#">{"Flooring"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Spaces_Other_Ineriors_Claddings.jpg",
                  alt: "Cladding",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Spaces_Other_Ineriors_Claddings.jpg",
                  alt: "Cladding",
                })
              }
            >
              <a href="#">{"Cladding"}</a>
            </li>
            <li
              className="sb-link red-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/free-power.jpg",
                  alt: "Freepower Charger",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/free-power.jpg",
                  alt: "Freepower Charger",
                })
              }
            >
              <a href="#">{"Freepower Charger"}</a>
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
