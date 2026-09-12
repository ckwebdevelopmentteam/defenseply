"use client";
import { useState } from "react";
export function BrandEclos() {
  const [preview, setPreview] = useState<{ image: string; alt: string } | null>(
    null,
  );
  return (
    <div className="inner-container">
      <div className="main-col column-1">
        <div className="link-wrapper">
          <h4 className="sm-title">{"About Eclos"}</h4>
          <ul>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Eclos_WhatisEclos.jpg",
                  alt: "What is Eclos?",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Eclos_WhatisEclos.jpg",
                  alt: "What is Eclos?",
                })
              }
            >
              <a href="#">{"What is Eclos?"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Eclos_Maintenance.jpg",
                  alt: "Maintenance ",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Eclos_Maintenance.jpg",
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
                  image: "/assets/Eclos_Warranty.jpg",
                  alt: "Warranty",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Eclos_Warranty.jpg",
                  alt: "Warranty",
                })
              }
            >
              <a href="#">{"Warranty"}</a>
            </li>
          </ul>
        </div>
        <a href="#" className="submenu-btn submenu-btn-primary">
          <span>{"Eclos Colors"}</span>
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
          <h4 className="sm-title">{"Eclos Applications"}</h4>
          <ul>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/eclos-f0f6de.png",
                  alt: "Kitchen countertops",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/eclos-f0f6de.png",
                  alt: "Kitchen countertops",
                })
              }
            >
              <a href="#">{"Kitchen countertops"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/eclos-5181eb.png",
                  alt: "Kitchen cladding",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/eclos-5181eb.png",
                  alt: "Kitchen cladding",
                })
              }
            >
              <a href="#">{"Kitchen cladding"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/eclos-89c21a.png",
                  alt: "Bathroom countertops",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/eclos-89c21a.png",
                  alt: "Bathroom countertops",
                })
              }
            >
              <a href="#">{"Bathroom countertops"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/eclos-675f3a.png",
                  alt: "Bathroom claddings",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/eclos-675f3a.png",
                  alt: "Bathroom claddings",
                })
              }
            >
              <a href="#">{"Bathroom claddings"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/eclos-08fc21.png",
                  alt: "Interior Cladding",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/eclos-08fc21.png",
                  alt: "Interior Cladding",
                })
              }
            >
              <a href="#">{"Interior Cladding"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/eclos-5befa6.png",
                  alt: "Interior furniture",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/eclos-5befa6.png",
                  alt: "Interior furniture",
                })
              }
            >
              <a href="#">{"Interior furniture"}</a>
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
