"use client";
import { useState } from "react";
export function Footer() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const toggle = (id: string) =>
    setExpanded((current) => ({ ...current, [id]: !current[id] }));
  return (
    <footer id="site-footer" className="pt-l">
      <div className="site-info container">
        <div className="row">
          <div className="col-12 text-center text-md-left footer-logo">
            <img
              className="mb-0 align-baseline"
              src="/assets/logo-cosentino-white.svg"
              alt="Cosentino"
              loading="lazy"
              width={143.0}
              height={18.0}
            />
          </div>
        </div>
        <div className="row mt-xxl" id="columnas-footer">
          <div className="col-12 col-sm-6 col-lg-3">
            <button
              type="button"
              className="footer-menu-title"
              id="titulo-menu-1"
              aria-expanded={!!expanded["1"]}
              aria-controls="collapse-menu-1"
              onClick={() => toggle("1")}
            >
              <span className="icon float-right d-inline d-sm-none">
                {expanded["1"] ? "−" : "+"}
              </span>
              Corporate
            </button>
            <div
              id="collapse-menu-1"
              className={`collapse dont-collapse-sm mb-l ${expanded["1"] ? "show" : ""}`}
              aria-labelledby="titulo-menu-1"
            >
              <div className="menu-company-container">
                <ul id="menu-company" className="menu">
                  <li
                    id="menu-item-92290"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-92290"
                  >
                    <a href="#">{"About us"}</a>
                  </li>
                  <li
                    id="menu-item-31221"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-31221"
                  >
                    <a href="#">{"R&D and Innovation"}</a>
                  </li>
                  <li
                    id="menu-item-31220"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-31220"
                  >
                    <a href="#">{"Safety at Cosentino"}</a>
                  </li>
                  <li
                    id="menu-item-15335"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-15335"
                  >
                    <a href="#" rel="nofollow noopener">
                      {"Cosentino Safety Space"}
                    </a>
                  </li>
                  <li
                    id="menu-item-31222"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-31222"
                  >
                    <a href="#" rel="nofollow noopener">
                      {"Sustainability Report 2023"}
                    </a>
                  </li>
                  <li
                    id="menu-item-34129"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-34129"
                  >
                    <a href="#" rel="nofollow noopener">
                      {"EINF 2025"}
                    </a>
                  </li>
                  <li
                    id="menu-item-127938"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-127938"
                  >
                    <a href="#">{"CT Quarry"}</a>
                  </li>
                  <li
                    id="menu-item-15339"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-15339"
                  >
                    <a href="#" rel="nofollow noopener">
                      {"Silestone Institute"}
                    </a>
                  </li>
                  <li
                    id="menu-item-15340"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-15340"
                  >
                    <a href="#" rel="nofollow noopener">
                      {"Eduarda Justo Foundation"}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <button
              type="button"
              className="footer-menu-title"
              id="titulo-menu-2"
              aria-expanded={!!expanded["2"]}
              aria-controls="collapse-menu-2"
              onClick={() => toggle("2")}
            >
              <span className="icon float-right d-inline d-sm-none">
                {expanded["2"] ? "−" : "+"}
              </span>
              Customer Support
            </button>
            <div
              id="collapse-menu-2"
              className={`collapse dont-collapse-sm mb-l ${expanded["2"] ? "show" : ""}`}
              aria-labelledby="titulo-menu-2"
            >
              <div className="menu-customer_support-container">
                <ul id="menu-customer_support" className="menu">
                  <li
                    id="menu-item-129111"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-129111"
                  >
                    <a href="#">{"Contact"}</a>
                  </li>
                  <li
                    id="menu-item-112000"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-112000"
                  >
                    <a href="#">{"Warranty | Silestone"}</a>
                  </li>
                  <li
                    id="menu-item-19913"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-19913"
                  >
                    <a href="#">{"Warranty | Dekton"}</a>
                  </li>
                  <li
                    id="menu-item-132010"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-132010"
                  >
                    <a href="#">{"Warranty | Eclos"}</a>
                  </li>
                  <li
                    id="menu-item-19915"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-19915"
                  >
                    <a href="#">{"Warranty | Sensa"}</a>
                  </li>
                  <li
                    id="menu-item-32321"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-32321"
                  >
                    <a href="#">{"General Conditions of Sale"}</a>
                  </li>
                  <li
                    id="menu-item-68169"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-68169"
                  >
                    <a href="#">{"Ethics & Compliance"}</a>
                  </li>
                  <li
                    id="menu-item-84004"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-84004"
                  >
                    <a href="#">{"Ethics Channel"}</a>
                  </li>
                </ul>
              </div>
            </div>
            <button
              type="button"
              className="footer-menu-title"
              id="titulo-menu-5"
              aria-expanded={!!expanded["5"]}
              aria-controls="collapse-menu-5"
              onClick={() => toggle("5")}
            >
              <span className="icon float-right d-inline d-sm-none">
                {expanded["5"] ? "−" : "+"}
              </span>
              Service Provider
            </button>
            <div
              id="collapse-menu-5"
              className={`collapse dont-collapse-sm mb-l ${expanded["5"] ? "show" : ""}`}
              aria-labelledby="titulo-menu-5"
            >
              <div className="menu-suppliers-container">
                <ul id="menu-suppliers" className="menu">
                  <li
                    id="menu-item-70587"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-70587"
                  >
                    <a href="#" rel="nofollow noopener">
                      {"Supplier Portal"}
                    </a>
                  </li>
                  <li
                    id="menu-item-70596"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-70596"
                  >
                    <a href="#" rel="nofollow noopener">
                      {"General Purchase Conditions"}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <button
              type="button"
              className="footer-menu-title"
              id="titulo-menu-3"
              aria-expanded={!!expanded["3"]}
              aria-controls="collapse-menu-3"
              onClick={() => toggle("3")}
            >
              <span className="icon float-right d-inline d-sm-none">
                {expanded["3"] ? "−" : "+"}
              </span>
              Professional Area
            </button>
            <div
              id="collapse-menu-3"
              className={`collapse dont-collapse-sm mb-l ${expanded["3"] ? "show" : ""}`}
              aria-labelledby="titulo-menu-3"
            >
              <div className="menu-area_profesional-container">
                <ul id="menu-area_profesional" className="menu">
                  <li
                    id="menu-item-83313"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-83313"
                  >
                    <a href="#">{"Designers – CTOP"}</a>
                  </li>
                  <li
                    id="menu-item-83310"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-83310"
                  >
                    <a href="#">{"Architects"}</a>
                  </li>
                  <li
                    id="menu-item-83314"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-83314"
                  >
                    <a href="#">{"Fabricators"}</a>
                  </li>
                  <li
                    id="menu-item-83311"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-83311"
                  >
                    <a href="#">{"Kitchen & bath studios"}</a>
                  </li>
                  <li
                    id="menu-item-83312"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-83312"
                  >
                    <a href="#">{"Installers reformers"}</a>
                  </li>
                  <li
                    id="menu-item-31719"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-31719"
                  >
                    <a href="#">{"Cosentino Center"}</a>
                  </li>
                  <li
                    id="menu-item-60333"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-60333"
                  >
                    <a href="#">{"Cosentino City"}</a>
                  </li>
                  <li
                    id="menu-item-57649"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-57649"
                  >
                    <a href="#" rel="nofollow noopener">
                      {"Service Provider"}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <button
              type="button"
              className="footer-menu-title mt-l"
              id="titulo-menu-4"
              aria-expanded={!!expanded["4"]}
              aria-controls="collapse-menu-4"
              onClick={() => toggle("4")}
            >
              <span className="icon float-right d-inline d-sm-none">
                {expanded["4"] ? "−" : "+"}
              </span>
              Resources
            </button>
            <div
              id="collapse-menu-4"
              className={`collapse dont-collapse-sm mb-l ${expanded["4"] ? "show" : ""}`}
              aria-labelledby="titulo-menu-4"
            >
              <div className="menu-recursos-container">
                <ul id="menu-recursos" className="menu">
                  <li
                    id="menu-item-17999"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17999"
                  >
                    <a href="#">{"C Magazine"}</a>
                  </li>
                  <li
                    id="menu-item-18000"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-18000"
                  >
                    <a href="#">{"C-Top Magazine"}</a>
                  </li>
                  <li
                    id="menu-item-68272"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-68272"
                  >
                    <a href="#">{"Technical documentation"}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <button
              type="button"
              className="footer-menu-title"
              id="titulo-menu-7"
              aria-expanded={!!expanded["7"]}
              aria-controls="collapse-menu-7"
              onClick={() => toggle("7")}
            >
              <span className="icon float-right d-inline d-sm-none">
                {expanded["7"] ? "−" : "+"}
              </span>
              Employment
            </button>
            <div
              id="collapse-menu-7"
              className={`collapse dont-collapse-sm mb-l ${expanded["7"] ? "show" : ""}`}
              aria-labelledby="titulo-menu-7"
            >
              <div className="menu-employment-container">
                <ul id="menu-employment" className="menu">
                  <li
                    id="menu-item-15357"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-15357"
                  >
                    <a href="#" rel="nofollow noopener">
                      {"Join Cosentino"}
                    </a>
                  </li>
                  <li
                    id="menu-item-129108"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-129108"
                  >
                    <a href="#" rel="nofollow noopener">
                      {"Transparency in Coverage"}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <button
              type="button"
              className="footer-menu-title"
              id="titulo-menu-8"
              aria-expanded={!!expanded["8"]}
              aria-controls="collapse-menu-8"
              onClick={() => toggle("8")}
            >
              <span className="icon float-right d-inline d-sm-none">
                {expanded["8"] ? "−" : "+"}
              </span>
              Press Room
            </button>
            <div
              id="collapse-menu-8"
              className={`collapse dont-collapse-sm mb-l ${expanded["8"] ? "show" : ""}`}
              aria-labelledby="titulo-menu-8"
            >
              <div className="menu-press_room-container">
                <ul id="menu-press_room" className="menu">
                  <li
                    id="menu-item-74920"
                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-74920"
                  >
                    <a href="#">{"News"}</a>
                  </li>
                  <li
                    id="menu-item-100630"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-100630"
                  >
                    <a href="#">{"Media Contact"}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-menu-title mt-l">{"Follow us:"}</div>
            <p className="social-networks">
              <a
                className="icon-rrss d-inline-block align-middle"
                rel="nofollow"
                href="#"
              >
                <img
                  className="mb-0 align-baseline"
                  src="/assets/facebook-icon.svg"
                  alt="Facebook"
                  loading="lazy"
                  width={32.0}
                  height={32.0}
                />
              </a>
              <a
                className="icon-rrss d-inline-block align-middle"
                rel="nofollow"
                href="#"
              >
                <img
                  className="mb-0 align-baseline"
                  src="/assets/instagram-icon.svg"
                  alt="Instagram"
                  loading="lazy"
                  width={32.0}
                  height={32.0}
                />
              </a>
              <a
                className="icon-rrss d-inline-block align-middle"
                rel="nofollow"
                href="#"
              >
                <img
                  className="mb-0 align-baseline"
                  src="/assets/pinterest-icon.svg"
                  alt="Pinterest"
                  loading="lazy"
                  width={32.0}
                  height={32.0}
                />
              </a>
              <a
                className="icon-rrss d-inline-block align-middle"
                rel="nofollow"
                href="#"
              >
                <img
                  className="mb-0 align-baseline"
                  src="/assets/linkedin-icon.svg"
                  alt="Linkedin"
                  loading="lazy"
                  width={32.0}
                  height={32.0}
                />
              </a>
              <a
                className="icon-rrss d-inline-block align-middle"
                rel="nofollow"
                href="#"
              >
                <img
                  className="mb-0 align-baseline"
                  src="/assets/twitter-icon.svg"
                  alt="X"
                  loading="lazy"
                />
              </a>
              <a
                className="icon-rrss d-inline-block align-middle"
                rel="nofollow"
                href="#"
              >
                <img
                  className="mb-0 align-baseline"
                  src="/assets/youtube-icon.svg"
                  alt="Youtube"
                  loading="lazy"
                  width={32.0}
                  height={32.0}
                />
              </a>
            </p>
          </div>
        </div>
        <div className="row sub-footer">
          <div className="col-12">
            <p>{"Cosentino Global, S.L.U. All rights reserved"}</p>
          </div>
          <div className="col-12 col-md-9">
            <p>
              <a rel="nofollow" href="#">
                {"Legal Notice"}
              </a>
              {" | "}
              <a rel="nofollow" href="#">
                {"Privacy Policy"}
              </a>
              {" | "}
              <a rel="nofollow" href="#">
                {"Cookie Policy"}
              </a>
            </p>
          </div>
          <div className="col-12 col-md-3">
            <p>
              <a href="#">{"Sitemap"}</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
