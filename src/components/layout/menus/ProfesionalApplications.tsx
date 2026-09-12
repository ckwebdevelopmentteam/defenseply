"use client";
import { useState } from "react";
export function ProfesionalApplications() {
  const [preview, setPreview] = useState<{ image: string; alt: string } | null>(
    null,
  );
  return (
    <div className="inner-container">
      <div className="main-col column-alt">
        <div className="inner-col inner-col-1">
          <h4 className="sm-title">{"Applications"}</h4>
        </div>
        <div className="inner-col inner-col-2">
          <ul>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({ image: "/assets/Facades.jpg", alt: "Facades" })
              }
              onFocus={() =>
                setPreview({ image: "/assets/Facades.jpg", alt: "Facades" })
              }
            >
              <a href="#">{"Facades"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({ image: "/assets/Bathrooms.jpg", alt: "Bathrooms" })
              }
              onFocus={() =>
                setPreview({ image: "/assets/Bathrooms.jpg", alt: "Bathrooms" })
              }
            >
              <a href="#">{"Bathrooms"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Countertop.jpg",
                  alt: "Countertop",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Countertop.jpg",
                  alt: "Countertop",
                })
              }
            >
              <a href="#">{"Countertop"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Interior_Flooring.jpg",
                  alt: "Flooring",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Interior_Flooring.jpg",
                  alt: "Flooring",
                })
              }
            >
              <a href="#">{"Flooring"}</a>
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
