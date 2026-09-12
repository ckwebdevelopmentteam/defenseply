"use client";
import { useState } from "react";
export function BrandScalea() {
  const [preview, setPreview] = useState<{ image: string; alt: string } | null>(
    null,
  );
  return (
    <div className="inner-container">
      <div className="main-col column-1">
        <div className="link-wrapper">
          <h4 className="sm-title">{"About Scalea"}</h4>
          <ul>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Scalea_WhatisScalea.jpg",
                  alt: "What is Scalea?",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Scalea_WhatisScalea.jpg",
                  alt: "What is Scalea?",
                })
              }
            >
              <a href="#">{"What is Scalea?"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Scalea_Maintenance.jpg",
                  alt: "Maintenance ",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Scalea_Maintenance.jpg",
                  alt: "Maintenance ",
                })
              }
            >
              <a href="#">{"Maintenance"}</a>
            </li>
          </ul>
        </div>
        <a href="#" className="submenu-btn submenu-btn-primary">
          <span>{"Scalea Colors"}</span>
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
          <h4 className="sm-title">{"Scalea Applications"}</h4>
          <ul>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Scalea_KitchenCountertops.jpg",
                  alt: "Countertops",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Scalea_KitchenCountertops.jpg",
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
                  image: "/assets/Scalea_KitchenFlooring.jpg",
                  alt: "Flooring",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Scalea_KitchenFlooring.jpg",
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
                  image: "/assets/Scalea_Cladding.jpg",
                  alt: "Cladding",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Scalea_Cladding.jpg",
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
                  image: "/assets/Scalea_KitchenFurniture_crop.jpg",
                  alt: "Furniture",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Scalea_KitchenFurniture_crop.jpg",
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
