"use client";

import { useState, useMemo } from "react";
import {
  Search,
  X,
  SlidersHorizontal,
  Sparkles,
  List,
  ScrollText,
} from "lucide-react";
import type { ProductDetail } from "@/types/product";
import { ProductShowcaseCard } from "./ProductShowcaseCard";
import { ProductStoryRow } from "./ProductStoryRow";
import { ProductInquiryForm } from "./ProductInquiryForm";

interface ProductsCatalogClientProps {
  products: ProductDetail[];
}

const CATEGORIES = [
  { id: "all", label: "All Products" },
  { id: "foam", label: "PVC Foam Boards" },
  { id: "wpc", label: "WPC Solutions" },
  { id: "3layer", label: "3-Layer Composites" },
  { id: "doors", label: "Doors & Frames" },
];

export function ProductsCatalogClient({ products }: ProductsCatalogClientProps) {
  const [viewMode, setViewMode] = useState<"stories" | "list">("stories");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [enquiringProduct, setEnquiringProduct] = useState<ProductDetail | null>(
    null
  );

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Search filter
      const matchesSearch =
        searchQuery.trim() === "" ||
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.badges.some((b) =>
          b.toLowerCase().includes(searchQuery.toLowerCase())
        );

      if (!matchesSearch) return false;

      // Category filter
      if (selectedCategory === "all") return true;
      if (selectedCategory === "foam") {
        return (
          product.slug.includes("foam") ||
          product.slug === "pvc-colour-boards" ||
          product.category.toLowerCase().includes("foam")
        );
      }
      if (selectedCategory === "wpc") {
        return (
          product.slug === "wpc-boards" ||
          product.slug === "3-layer-wpc-board" ||
          product.slug === "3-layer-wpc-colour-board"
        );
      }
      if (selectedCategory === "3layer") {
        return product.slug.includes("3-layer");
      }
      if (selectedCategory === "doors") {
        return (
          product.slug.includes("door") || product.slug.includes("frame")
        );
      }

      return true;
    });
  }, [products, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1a1a1a]">
      {/* Top Banner */}
      <div className="pt-28 sm:pt-32 pb-6 px-4 sm:px-8 lg:px-12 border-b border-[#E8E5DC] bg-[#FAF9F5]">
        <div className="mx-auto max-w-[1440px]">
          {/* Page Heading & Intro */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#163326]/10 px-3 py-1 text-xs font-semibold text-[#163326] tracking-wider uppercase mb-3">
              <Sparkles className="size-3.5" />
              <span>Full Product Collection</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#163326] font-sans uppercase">
              Our Products
            </h1>
            <p className="mt-3 text-[15px] sm:text-[16px] text-[#4d5952] leading-relaxed">
              Calibrated cellular composite boards, waterproof polymer formulations, and precision-moulded architectural profiles engineered for demanding interior, commercial, and structural environments.
            </p>
          </div>

          {/* Filter Tabs & Search Bar */}
          <div className="mt-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Category Filter Tabs */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`whitespace-nowrap rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-[#163326] text-white shadow-sm"
                        : "bg-[#EFECE3] text-[#4d5952] hover:bg-[#E5E1D5] hover:text-[#163326]"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-72 shrink-0">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-[#888]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products or specs..."
                className="w-full rounded-full border border-[#DCD7CE] bg-white py-2 pl-10 pr-9 text-[13.5px] text-[#1a1a1a] placeholder-[#888] outline-none transition-colors focus:border-[#163326]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#888] hover:text-[#111]"
                  aria-label="Clear search"
                >
                  <X className="size-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12 py-10 sm:py-12">
        {/* Results Counter & View Mode Switcher */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 text-sm text-[#718076]">
          <div className="flex items-center gap-3">
            <span>
              Showing <strong className="text-[#163326]">{filteredProducts.length}</strong> of {products.length} Products
            </span>
            {(selectedCategory !== "all" || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="text-xs font-semibold text-[#1c3f21] hover:underline"
              >
                Reset Filters
              </button>
            )}
          </div>

          {/* View Mode Toggle Switcher - Only Stories and List */}
          <div className="flex items-center gap-1 rounded-full border border-[#DCD7CE] bg-[#EFECE3]/70 p-1 shadow-2xs">
            <button
              onClick={() => setViewMode("stories")}
              aria-label="Editorial Stories view"
              className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                viewMode === "stories"
                  ? "bg-[#163326] text-white shadow-xs"
                  : "text-[#555] hover:text-[#163326]"
              }`}
            >
              <ScrollText className="size-3.5" />
              <span>Stories</span>
            </button>
            <button
              onClick={() => setViewMode("list")}
              aria-label="Detailed List view"
              className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                viewMode === "list"
                  ? "bg-[#163326] text-white shadow-xs"
                  : "text-[#555] hover:text-[#163326]"
              }`}
            >
              <List className="size-3.5" />
              <span>List</span>
            </button>
          </div>
        </div>

        {/* Product Cards Rendering (Stories or List) */}
        {filteredProducts.length > 0 ? (
          viewMode === "stories" ? (
            /* Alternating Zig-Zag Architectural Stories Mode */
            <div className="flex flex-col gap-10 sm:gap-14">
              {filteredProducts.map((product, idx) => (
                <ProductStoryRow
                  key={product.slug}
                  product={product}
                  index={idx}
                  onEnquire={(p) => setEnquiringProduct(p)}
                />
              ))}
            </div>
          ) : (
            /* Detailed Showcase Cards List Mode */
            <div className="flex flex-col gap-8 sm:gap-10">
              {filteredProducts.map((product) => (
                <ProductShowcaseCard
                  key={product.slug}
                  product={product}
                  onEnquire={(p) => setEnquiringProduct(p)}
                />
              ))}
            </div>
          )
        ) : (
          <div className="rounded-2xl border border-dashed border-[#DCD7CE] bg-white p-12 text-center">
            <SlidersHorizontal className="mx-auto size-10 text-[#aaa]" />
            <h3 className="mt-4 text-lg font-semibold text-[#1a1a1a]">
              No products found
            </h3>
            <p className="mt-1 text-sm text-[#666]">
              No products match your current search or category filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="mt-5 inline-flex items-center rounded-full bg-[#163326] px-5 py-2 text-xs font-semibold text-white shadow-sm transition-transform hover:scale-105 active:scale-95"
            >
              Show All Products
            </button>
          </div>
        )}
      </div>

      {/* Quick Enquiry Modal */}
      {enquiringProduct && (
        <div className="fixed inset-0 z-[2147483647] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setEnquiringProduct(null)}
          />

          {/* Modal Box */}
          <div className="relative z-10 w-full max-w-lg rounded-2xl bg-[#FAF9F5] p-6 sm:p-8 shadow-2xl border border-[#E5E2D8] animate-fade-in max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setEnquiringProduct(null)}
              aria-label="Close modal"
              className="absolute right-4 top-4 rounded-full p-2 text-[#777] hover:bg-black/5 hover:text-[#111] transition-colors"
            >
              <X className="size-5" />
            </button>

            <div className="mb-4">
              <span className="text-[11px] font-bold tracking-widest text-[#1c3f21] uppercase">
                Product Inquiry
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#163326] font-sans">
                {enquiringProduct.title}
              </h2>
              <p className="text-xs text-[#666] mt-0.5">
                Send your requirements for quotes, technical datasheets, and sample kits.
              </p>
            </div>

            <ProductInquiryForm productTitle={enquiringProduct.title} />
          </div>
        </div>
      )}
    </div>
  );
}
