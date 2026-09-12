"use client";
import { useState } from "react";
export function EspaciosBanos() {
  const [preview, setPreview] = useState<{ image: string; alt: string } | null>(
    null,
  );
  return (
    <div className="inner-container">
      <div className="main-col column-alt">
        <div className="inner-col inner-col-1">
          <h4 className="sm-title">{"Bathroom applications"}</h4>
        </div>
        <div className="inner-col inner-col-2">
          <ul>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Spaces_Bathroom_Cosentino_Bathrooms.jpg",
                  alt: "Bathrooms",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Spaces_Bathroom_Cosentino_Bathrooms.jpg",
                  alt: "Bathrooms",
                })
              }
            >
              <a href="#">{"Bathrooms"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Spaces_Bathroom_Sinks.jpg",
                  alt: "Bathroom sinks",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Spaces_Bathroom_Sinks.jpg",
                  alt: "Bathroom sinks",
                })
              }
            >
              <a href="#">{"Bathroom sinks"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Spaces_Bathroom_Sower_Trays.jpg",
                  alt: "Shower Trays",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Spaces_Bathroom_Sower_Trays.jpg",
                  alt: "Shower Trays",
                })
              }
            >
              <a href="#">{"Shower Trays"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Spaces_Bathroom_Countertops.jpg",
                  alt: "Countertops",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Spaces_Bathroom_Countertops.jpg",
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
                  image: "/assets/Spaces_Bathroom_Claddings2.jpg",
                  alt: "Cladding",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Spaces_Bathroom_Claddings2.jpg",
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
                  image: "/assets/Spaces_Bathroom_Flooring.jpg",
                  alt: "Flooring",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Spaces_Bathroom_Flooring.jpg",
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
                  image: "/assets/Spaces_Bathroom_Furniture_crop.jpg",
                  alt: "Furniture",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Spaces_Bathroom_Furniture_crop.jpg",
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
