"use client";
import { useState } from "react";
import { X } from "lucide-react";
import { Dialog } from "@/components/ui/Dialog";
import regions from "@/data/regions.json";

type Continent = keyof typeof regions;
const defaults: Record<string, string> = {
  ca: "en-ca",
  be: "nl-be",
  ch: "de-ch",
};

export function CountryDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [saved] = useState(() => {
    if (typeof window === "undefined") return null;
    try {
      return JSON.parse(localStorage.getItem("cosentino-region") || "null") as {
        continent: Continent;
        country: string;
        language: string;
      } | null;
    } catch {
      return null;
    }
  });
  const [continent, setContinent] = useState<Continent | "">(
    saved?.continent ?? "",
  );
  const [country, setCountry] = useState(saved?.country ?? "");
  const [language, setLanguage] = useState(saved?.language ?? "");
  const [remember, setRemember] = useState(false);
  const countries = continent ? regions[continent] : [];
  const languages =
    countries.find((item) => item.code === country)?.languages ?? [];
  function chooseCountry(code: string, area = continent) {
    const options = area
      ? (regions[area].find((item) => item.code === code)?.languages ?? [])
      : [];
    setCountry(code);
    setLanguage(
      options.find(
        (item) => defaults[code] && item.url.includes(defaults[code]),
      )?.url ??
        options[0]?.url ??
        "",
    );
  }
  function continueToRegion() {
    if (!language) return;
    if (remember)
      localStorage.setItem(
        "cosentino-region",
        JSON.stringify({ continent, country, language }),
      );
    // Region selection stays inside this local clone.
    onClose();
  }
  return (
    <Dialog open={open} onClose={onClose} label="Choose your country or region">
      <div className="country-dialog">
        <div className="flex items-center justify-between gap-8">
          <h2>Choose Your Country or Region</h2>
          <button onClick={onClose} aria-label="Close country selector">
            close <X size={20} />
          </button>
        </div>
        <label className="sr-only" htmlFor="continent">
          Continent
        </label>
        <select
          id="continent"
          value={continent}
          onChange={(event) => {
            const area = event.target.value as Continent | "";
            setContinent(area);
            chooseCountry(area === "International" ? "int" : "", area);
          }}
        >
          <option value="">Continent</option>
          {(Object.keys(regions) as Continent[]).map((area) => (
            <option key={area}>{area}</option>
          ))}
        </select>
        <label className="sr-only" htmlFor="region">
          Country
        </label>
        <select
          id="region"
          disabled={!continent || continent === "International"}
          value={country}
          onChange={(event) => chooseCountry(event.target.value)}
        >
          <option value="">Country</option>
          {countries.map((item) => (
            <option key={item.code} value={item.code}>
              {item.name}
            </option>
          ))}
        </select>
        <label className="sr-only" htmlFor="language">
          Language
        </label>
        <select
          id="language"
          disabled={languages.length < 2 || continent === "International"}
          value={language}
          onChange={(event) => setLanguage(event.target.value)}
        >
          <option value="">Language</option>
          {languages.map((item) => (
            <option key={item.url} value={item.url}>
              {item.name}
            </option>
          ))}
        </select>
        <button
          className="btn btn-negro-azul"
          disabled={!language}
          onClick={continueToRegion}
        >
          Continue <span className="arrow-link" />
        </button>
        <label className="remember">
          <input
            type="checkbox"
            checked={remember}
            onChange={(event) => setRemember(event.target.checked)}
          />{" "}
          Remember my selection
        </label>
      </div>
    </Dialog>
  );
}
