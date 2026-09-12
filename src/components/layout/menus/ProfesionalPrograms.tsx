"use client";
import { useState } from "react";
export function ProfesionalPrograms() {
  const [preview, setPreview] = useState<{ image: string; alt: string } | null>(
    null,
  );
  return (
    <div className="inner-container">
      <div className="main-col column-alt">
        <div className="inner-col inner-col-1">
          <h4 className="sm-title">{"Programs"}</h4>
        </div>
        <div className="inner-col inner-col-2">
          <ul>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Kitchen-Bath.jpg",
                  alt: "Kitchen & Bath Studios",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Kitchen-Bath.jpg",
                  alt: "Kitchen & Bath Studios",
                })
              }
            >
              <a href="#">{"Kitchen & Bath Studios"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Interior_Designers.jpg",
                  alt: "Interior designers",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Interior_Designers.jpg",
                  alt: "Interior designers",
                })
              }
            >
              <a href="#">{"Interior designers"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Architects.jpg",
                  alt: "Architects",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Architects.jpg",
                  alt: "Architects",
                })
              }
            >
              <a href="#">{"Architects"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Fabricators.jpg",
                  alt: "Fabricators",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Fabricators.jpg",
                  alt: "Fabricators",
                })
              }
            >
              <a href="#">{"Fabricators"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Installers.jpg",
                  alt: "Installers / Remodelers",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Installers.jpg",
                  alt: "Installers / Remodelers",
                })
              }
            >
              <a href="#">{"Installers / Remodelers"}</a>
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
