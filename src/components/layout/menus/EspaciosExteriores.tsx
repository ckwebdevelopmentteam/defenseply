"use client";
import { useState } from "react";
export function EspaciosExteriores() {
  const [preview, setPreview] = useState<{ image: string; alt: string } | null>(
    null,
  );
  return (
    <div className="inner-container">
      <div className="main-col column-alt">
        <div className="inner-col inner-col-1">
          <h4 className="sm-title">{"Outdoor applications"}</h4>
        </div>
        <div className="inner-col inner-col-2">
          <ul>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Spaces_Outdoor_Cosentino_Outdoors.jpg",
                  alt: "Outdoor",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Spaces_Outdoor_Cosentino_Outdoors.jpg",
                  alt: "Outdoor",
                })
              }
            >
              <a href="#">{"Outdoor"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Spaces_Outdoor_Cosentino_Facades.jpg",
                  alt: "Facades",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Spaces_Outdoor_Cosentino_Facades.jpg",
                  alt: "Facades",
                })
              }
            >
              <a href="#">{"Facades"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Spaces_Outdoor_Outdoor_Kitchens.jpg",
                  alt: "Kitchen",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Spaces_Outdoor_Outdoor_Kitchens.jpg",
                  alt: "Kitchen",
                })
              }
            >
              <a href="#">{"Kitchen"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Spaces_Outdoor_Swimming_Pools.jpg",
                  alt: "Swimming pools",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Spaces_Outdoor_Swimming_Pools.jpg",
                  alt: "Swimming pools",
                })
              }
            >
              <a href="#">{"Swimming pools"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Spaces_Outdoor_Flooring-88da5c.jpg",
                  alt: "Flooring",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Spaces_Outdoor_Flooring-88da5c.jpg",
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
                  image: "/assets/Spaces_Outdoor_Furniture-9534d0.jpg",
                  alt: "Furniture",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Spaces_Outdoor_Furniture-9534d0.jpg",
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
