"use client";
import { useState } from "react";
export function BrandSilestone() {
  const [preview, setPreview] = useState<{ image: string; alt: string } | null>(
    null,
  );
  return (
    <div className="inner-container">
      <div className="main-col column-1">
        <div className="link-wrapper">
          <h4 className="sm-title">{"About Silestone"}</h4>
          <ul>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Silestone_WhatisSilestone.jpg",
                  alt: "What is Silestone?",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Silestone_WhatisSilestone.jpg",
                  alt: "What is Silestone?",
                })
              }
            >
              <a href="#">{"What is Silestone?"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Silestone_Claddings.jpg",
                  alt: "SILESTONE XM",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Silestone_Claddings.jpg",
                  alt: "SILESTONE XM",
                })
              }
            >
              <a href="#">{"SILESTONE XM"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Silestone_Maintenance.jpg",
                  alt: "Maintenance ",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Silestone_Maintenance.jpg",
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
                  image: "/assets/Silestone_Warranty.jpg",
                  alt: "Warranty",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Silestone_Warranty.jpg",
                  alt: "Warranty",
                })
              }
            >
              <a href="#">{"Warranty"}</a>
            </li>
          </ul>
        </div>
        <a href="#" className="submenu-btn submenu-btn-primary">
          <span>{"Silestone Colors"}</span>
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
          <h4 className="sm-title">{"Silestone Applications"}</h4>
          <ul>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Silestone_Countertops.jpg",
                  alt: "Kitchen countertops",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Silestone_Countertops.jpg",
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
                  image: "/assets/Silestone_Sinks.jpg",
                  alt: "Kitchen sinks",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Silestone_Sinks.jpg",
                  alt: "Kitchen sinks",
                })
              }
            >
              <a href="#">{"Kitchen sinks"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Silestone_Claddings.jpg",
                  alt: "Kitchen cladding",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Silestone_Claddings.jpg",
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
                  image: "/assets/Silestone_Furniture.jpg",
                  alt: "Furniture",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Silestone_Furniture.jpg",
                  alt: "Furniture",
                })
              }
            >
              <a href="#">{"Furniture"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Silestone_BathroomCountertops.jpg",
                  alt: "Bathroom countertops",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Silestone_BathroomCountertops.jpg",
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
                  image: "/assets/Silestone_BathroomSink.jpg",
                  alt: "Bathroom sinks",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Silestone_BathroomSink.jpg",
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
                  image: "/assets/Silestone_BathroomCladding.jpg",
                  alt: "Bathroom claddings",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Silestone_BathroomCladding.jpg",
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
                  image: "/assets/Silestone_SowerTrays.jpg",
                  alt: "Shower Trays",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Silestone_SowerTrays.jpg",
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
                  image: "/assets/Silestone_InteriorCladdings.jpg",
                  alt: "Interior Cladding",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Silestone_InteriorCladdings.jpg",
                  alt: "Interior Cladding",
                })
              }
            >
              <a href="#">{"Interior Cladding"}</a>
            </li>
          </ul>
        </div>
        <div className="inner-col inner-col-2">
          <h4 className="sm-title">{"Silestone News"}</h4>
          <ul>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/New_Silestone_Suma.jpg",
                  alt: "Suma Color Series",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/New_Silestone_Suma.jpg",
                  alt: "Suma Color Series",
                })
              }
            >
              <a href="#">{"Suma Color Series"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/New_Silestone_LeChicBoheme.jpg",
                  alt: "Le Chic Bohème",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/New_Silestone_LeChicBoheme.jpg",
                  alt: "Le Chic Bohème",
                })
              }
            >
              <a href="#">{"Le Chic Bohème"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Silestone_Furniture.jpg",
                  alt: "SILESTONE XM",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Silestone_Furniture.jpg",
                  alt: "SILESTONE XM",
                })
              }
            >
              <a href="#">{"SILESTONE XM"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/new_silestone_ukiyo.jpg",
                  alt: "Silestone Ukiyo",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/new_silestone_ukiyo.jpg",
                  alt: "Silestone Ukiyo",
                })
              }
            >
              <a href="#">{"Silestone Ukiyo"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/new_silestone_earthic.jpg",
                  alt: "Earthic",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/new_silestone_earthic.jpg",
                  alt: "Earthic",
                })
              }
            >
              <a href="#">{"Earthic"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/New_Silestone_LeChic.jpg",
                  alt: "Silestone Le Chic",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/New_Silestone_LeChic.jpg",
                  alt: "Silestone Le Chic",
                })
              }
            >
              <a href="#">{"Silestone Le Chic"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/New_Silestone_UrbanCrush.jpg",
                  alt: "Silestone Urban Crush",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/New_Silestone_UrbanCrush.jpg",
                  alt: "Silestone Urban Crush",
                })
              }
            >
              <a href="#">{"Silestone Urban Crush"}</a>
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
