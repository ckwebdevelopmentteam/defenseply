"use client";
import { useState } from "react";
export function InspiracionGaleria() {
  const [preview, setPreview] = useState<{ image: string; alt: string } | null>(
    null,
  );
  return (
    <div className="inner-container">
      <div className="main-col column-alt">
        <div className="inner-col inner-col-1">
          <h4 className="sm-title">{"Projects and Galleries"}</h4>
        </div>
        <div className="inner-col inner-col-2">
          <ul>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Inspiration_Gallery_Bathrooms.jpg",
                  alt: "Bathrooms",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Inspiration_Gallery_Bathrooms.jpg",
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
                  image: "/assets/Inspiration_Gallery_Kitchens.jpg",
                  alt: "Kitchens",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Inspiration_Gallery_Kitchens.jpg",
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
                  image: "/assets/Inspiration_Gallery_Outdoor.jpg",
                  alt: "Outdoor",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Inspiration_Gallery_Outdoor.jpg",
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
                  image: "/assets/Inspiration_Gallery_OtherInteriors.jpg",
                  alt: "Other interiors",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Inspiration_Gallery_OtherInteriors.jpg",
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
                  image: "/assets/Inspiration_Gallery_Facades.jpg",
                  alt: "Facades",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Inspiration_Gallery_Facades.jpg",
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
                  image: "/assets/Inspiration_Gallery_Contract.jpg",
                  alt: "Commercial",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Inspiration_Gallery_Contract.jpg",
                  alt: "Commercial",
                })
              }
            >
              <a href="#">{"Commercial"}</a>
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
