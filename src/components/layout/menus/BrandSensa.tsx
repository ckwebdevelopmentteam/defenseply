"use client";
import { useState } from "react";
export function BrandSensa() {
  const [preview, setPreview] = useState<{ image: string; alt: string } | null>(
    null,
  );
  return (
    <div className="inner-container">
      <div className="main-col column-1">
        <div className="link-wrapper">
          <h4 className="sm-title">{"About Sensa"}</h4>
          <ul>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Sensa_WhatisSensa.jpg",
                  alt: "What is Sensa?",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Sensa_WhatisSensa.jpg",
                  alt: "What is Sensa?",
                })
              }
            >
              <a href="#">{"What is Sensa?"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Sensa_Maintenance.jpg",
                  alt: "Maintenance ",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Sensa_Maintenance.jpg",
                  alt: "Maintenance ",
                })
              }
            >
              <a href="#">{"Maintenance"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Sensa_Warranty.jpg",
                  alt: "Warranty",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Sensa_Warranty.jpg",
                  alt: "Warranty",
                })
              }
            >
              <a href="#">{"Warranty"}</a>
            </li>
          </ul>
        </div>
        <a href="#" className="submenu-btn submenu-btn-primary">
          <span>{"Sensa colors"}</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13 5.5L20 12L13 18.5" stroke="currentColor"></path>
            <line x1="20" y1="12" x2="4" y2="12" stroke="currentColor"></line>
          </svg>
        </a>
      </div>
      <div className="main-col column-2">
        <div className="inner-col inner-col-1">
          <h4 className="sm-title">{"Sensa Applications"}</h4>
          <ul>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Sensa_Countertops.jpg",
                  alt: "Countertops",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Sensa_Countertops.jpg",
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
                  image: "/assets/Sensa_KitchenCladding.jpg",
                  alt: "Cladding",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Sensa_KitchenCladding.jpg",
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
                  image: "/assets/Sensa_Furniture.jpg",
                  alt: "Furniture",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Sensa_Furniture.jpg",
                  alt: "Furniture",
                })
              }
            >
              <a href="#">{"Furniture"}</a>
            </li>
          </ul>
        </div>
        <div className="inner-col inner-col-2"></div>
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
