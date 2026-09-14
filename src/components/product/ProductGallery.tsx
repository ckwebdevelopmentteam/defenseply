"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ProductGalleryProps {
  gallery: GalleryImage[];
  title: string;
  badge?: string;
}

export function ProductGallery({ gallery, title, badge }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = gallery[activeIndex] || gallery[0];

  return (
    <div className="product-gallery">
      {/* Main Preview */}
      <div className="product-gallery__main">
        {badge && <span className="product-gallery__badge">{badge}</span>}
        <div className="product-gallery__image-wrap">
          <img
            src={activeImage.src}
            alt={activeImage.alt || title}
            className="product-gallery__image"
          />
        </div>
        {activeImage.caption && (
          <p className="product-gallery__caption">{activeImage.caption}</p>
        )}
      </div>

      {/* Thumbnails */}
      {gallery.length > 1 && (
        <div className="product-gallery__thumbs" role="tablist" aria-label="Product image gallery">
          {gallery.map((item, idx) => (
            <button
              key={item.src + idx}
              type="button"
              role="tab"
              aria-selected={activeIndex === idx}
              aria-label={`View image ${idx + 1}: ${item.alt}`}
              className={`product-gallery__thumb ${
                activeIndex === idx ? "product-gallery__thumb--active" : ""
              }`}
              onClick={() => setActiveIndex(idx)}
            >
              <img src={item.src} alt="" aria-hidden="true" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
