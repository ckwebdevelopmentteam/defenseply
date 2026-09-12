"use client";
import { useState } from "react";
export function BrandDekton() {
  const [preview, setPreview] = useState<{ image: string; alt: string } | null>(
    null,
  );
  return (
    <div className="inner-container">
      <div className="main-col column-1">
        <div className="link-wrapper">
          <h4 className="sm-title">{"About Dekton"}</h4>
          <ul>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Dekton_WhatisDekton.jpg",
                  alt: "What is Dekton?",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Dekton_WhatisDekton.jpg",
                  alt: "What is Dekton?",
                })
              }
            >
              <a href="#">{"What is Dekton?"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Dekton_Maintenance.jpg",
                  alt: "Maintenance ",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Dekton_Maintenance.jpg",
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
                  image: "/assets/Dekton_Warranty.jpg",
                  alt: "Warranty",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Dekton_Warranty.jpg",
                  alt: "Warranty",
                })
              }
            >
              <a href="#">{"Warranty"}</a>
            </li>
          </ul>
        </div>
        <a href="#" className="submenu-btn submenu-btn-primary">
          <span>{"Dekton Colors"}</span>
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
          <h4 className="sm-title">{"Dekton Applications"}</h4>
          <ul>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Dekton_Countertops.jpg",
                  alt: "Kitchen countertops",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Dekton_Countertops.jpg",
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
                  image: "/assets/Dekton_Floors.jpg",
                  alt: "Kitchen flooring",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Dekton_Floors.jpg",
                  alt: "Kitchen flooring",
                })
              }
            >
              <a href="#">{"Kitchen flooring"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Dekton_Claddings.jpg",
                  alt: "Kitchen cladding",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Dekton_Claddings.jpg",
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
                  image: "/assets/Dekton_Furniture.jpg",
                  alt: "Kitchen furniture",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Dekton_Furniture.jpg",
                  alt: "Kitchen furniture",
                })
              }
            >
              <a href="#">{"Kitchen furniture"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Dekton_BathroomCountertops.jpg",
                  alt: "Bathroom countertops",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Dekton_BathroomCountertops.jpg",
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
                  image: "/assets/Dekton_BathroomFlooring.jpg",
                  alt: "Bathroom Flooring ",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Dekton_BathroomFlooring.jpg",
                  alt: "Bathroom Flooring ",
                })
              }
            >
              <a href="#">{"Bathroom Flooring"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Dekton_BathroomCladding.jpg",
                  alt: "Bathroom claddings",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Dekton_BathroomCladding.jpg",
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
                  image: "/assets/Dekton_BathroomFurniture.jpg",
                  alt: "Bathroom furniture",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Dekton_BathroomFurniture.jpg",
                  alt: "Bathroom furniture",
                })
              }
            >
              <a href="#">{"Bathroom furniture"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Dekton_SowerTrays.jpg",
                  alt: "Shower Trays",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Dekton_SowerTrays.jpg",
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
                  image: "/assets/Dekton_InteriorFlooring.jpg",
                  alt: "Interior floors",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Dekton_InteriorFlooring.jpg",
                  alt: "Interior floors",
                })
              }
            >
              <a href="#">{"Interior floors"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Dekton_InteriorSidings.jpg",
                  alt: "Interior Cladding",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Dekton_InteriorSidings.jpg",
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
                  image: "/assets/Dekton_InteriorFurniture.jpg",
                  alt: "Interior furniture",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Dekton_InteriorFurniture.jpg",
                  alt: "Interior furniture",
                })
              }
            >
              <a href="#">{"Interior furniture"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Spaces_Outdoor_Flooring.jpg",
                  alt: "Outdoor Flooring",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Spaces_Outdoor_Flooring.jpg",
                  alt: "Outdoor Flooring",
                })
              }
            >
              <a href="#">{"Outdoor Flooring"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Dekton_Facades.jpg",
                  alt: "Facades",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Dekton_Facades.jpg",
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
                  image: "/assets/Spaces_Outdoor_Swimming_Pools-128104.jpg",
                  alt: "Swimming pools",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Spaces_Outdoor_Swimming_Pools-128104.jpg",
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
                  image: "/assets/Spaces_Outdoor_Outdoor_Kitchens-f53c4b.jpg",
                  alt: "Outdoor kitchens",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Spaces_Outdoor_Outdoor_Kitchens-f53c4b.jpg",
                  alt: "Outdoor kitchens",
                })
              }
            >
              <a href="#">{"Outdoor kitchens"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/Spaces_Outdoor_Furniture.jpg",
                  alt: "Outdoor furniture",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/Spaces_Outdoor_Furniture.jpg",
                  alt: "Outdoor furniture",
                })
              }
            >
              <a href="#">{"Outdoor furniture"}</a>
            </li>
          </ul>
        </div>
        <div className="inner-col inner-col-2">
          <h4 className="sm-title">{"Dekton News"}</h4>
          <ul>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/new-dekton-artic.jpg",
                  alt: "Dekton Artik Nodes",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/new-dekton-artic.jpg",
                  alt: "Dekton Artik Nodes",
                })
              }
            >
              <a href="#">{"Dekton Artik Nodes"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/new_dekton_nomak-2.jpg",
                  alt: "Dekton Nomak",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/new_dekton_nomak-2.jpg",
                  alt: "Dekton Nomak",
                })
              }
            >
              <a href="#">{"Dekton Nomak"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/New_Dekton_Amazonik.jpg",
                  alt: "Dekton Amazonik",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/New_Dekton_Amazonik.jpg",
                  alt: "Dekton Amazonik",
                })
              }
            >
              <a href="#">{"Dekton Amazonik"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/New_Dekton_PietraEdition.jpg",
                  alt: "Dekton Pietra Edition",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/New_Dekton_PietraEdition.jpg",
                  alt: "Dekton Pietra Edition",
                })
              }
            >
              <a href="#">{"Dekton Pietra Edition"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/new_dekton_ukiyo-2.jpg",
                  alt: "Dekton Ukiyo",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/new_dekton_ukiyo-2.jpg",
                  alt: "Dekton Ukiyo",
                })
              }
            >
              <a href="#">{"Dekton Ukiyo"}</a>
            </li>
            <li
              className="sb-link"
              onMouseEnter={() =>
                setPreview({
                  image: "/assets/New_Dekton_PietraCode.jpg",
                  alt: "Dekton Pietra Kode",
                })
              }
              onFocus={() =>
                setPreview({
                  image: "/assets/New_Dekton_PietraCode.jpg",
                  alt: "Dekton Pietra Kode",
                })
              }
            >
              <a href="#">{"Dekton Pietra Kode"}</a>
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
