"use client";
import { useState } from "react";
export function EspaciosCocinas() {
  const [preview, setPreview] = useState<{ image: string; alt: string } | null>(
    null,
  );
  return (
    <div className="inner-container">
      <div className="main-col column-alt">
        <div className="inner-col inner-col-1">
          <h4 className="sm-title">{"Kitchen Applications"}</h4>
        </div>
        <div className="inner-col inner-col-2">
          <ul>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Spaces_Kitchens_Cosentino_Kitchens.jpg",
                  alt: "Kitchens",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Spaces_Kitchens_Cosentino_Kitchens.jpg",
                  alt: "Kitchens",
                })
              }
            >
              <a href="#">{"Kitchens"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Spaces_Kitchens_Countertop.jpg",
                  alt: "Countertops",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Spaces_Kitchens_Countertop.jpg",
                  alt: "Countertops",
                })
              }
            >
              <a href="#">{"Countertops"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Spaces_Kitchens_Flooring.jpg",
                  alt: "Flooring",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Spaces_Kitchens_Flooring.jpg",
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
                  image: "/assets/Spaces_Kitchens_Claddings.jpg",
                  alt: "Cladding",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Spaces_Kitchens_Claddings.jpg",
                  alt: "Cladding",
                })
              }
            >
              <a href="#">{"Cladding"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Spaces_Kitchens_Sinks.jpg",
                  alt: "Sinks",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Spaces_Kitchens_Sinks.jpg",
                  alt: "Sinks",
                })
              }
            >
              <a href="#">{"Sinks"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Spaces_Kitchens_Furniture.jpg",
                  alt: "Furniture",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Spaces_Kitchens_Furniture.jpg",
                  alt: "Furniture",
                })
              }
            >
              <a href="#">{"Furniture"}</a>
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
