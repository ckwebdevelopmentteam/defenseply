"use client";
import { useState } from "react";
export function InspiracionHerramientas() {
  const [preview, setPreview] = useState<{ image: string; alt: string } | null>(
    null,
  );
  return (
    <div className="inner-container">
      <div className="main-col column-alt">
        <div className="inner-col inner-col-1">
          <h4 className="sm-title">{"Design Tools"}</h4>
        </div>
        <div className="inner-col inner-col-2">
          <ul>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Inspiration_DesignTools_Kitchens.jpg",
                  alt: "Kitchen visualizer",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Inspiration_DesignTools_Kitchens.jpg",
                  alt: "Kitchen visualizer",
                })
              }
            >
              <a href="#">{"Kitchen visualizer"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Inspiration_DesignTools_Bathrooms.jpg",
                  alt: "Bathroom visualizer",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Inspiration_DesignTools_Bathrooms.jpg",
                  alt: "Bathroom visualizer",
                })
              }
            >
              <a href="#">{"Bathroom visualizer"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Inspiration_DesignTools_OtherInteriors.jpg",
                  alt: "Other Spaces",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Inspiration_DesignTools_OtherInteriors.jpg",
                  alt: "Other Spaces",
                })
              }
            >
              <a href="#">{"Other Spaces"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Inspiration_DesignTools_Moodboards.jpg",
                  alt: "Moodboards generator",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Inspiration_DesignTools_Moodboards.jpg",
                  alt: "Moodboards generator",
                })
              }
            >
              <a href="#">{"Moodboards generator"}</a>
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
