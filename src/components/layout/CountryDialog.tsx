"use client";
import { useState } from "react";
import { X } from "lucide-react";
import { Dialog } from "@/components/ui/Dialog";
import { ArrowIcon } from "@/components/ui/ActionLink";
const selectClass = "border-0 border-b border-[#999] bg-white p-3.5";
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
      <div className="flex flex-col gap-[26px] p-[42px] max-phone:gap-5 max-phone:p-6">
        <div className="flex items-center justify-between gap-8">
          <h2 className="text-[32px] font-light max-phone:text-[25px]">
            Choose Your Country or Region
          </h2>
          <button
            className="flex items-center gap-3"
            onClick={onClose}
            aria-label="Close country selector"
          >
            close <X size={20} />
          </button>
        </div>
        <label className="sr-only" htmlFor="continent">
          Continent
        </label>
        <select
          className={selectClass}
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
          className={selectClass}
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
          className={selectClass}
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
          className="flex items-center gap-3 border border-ink bg-ink px-[23px] py-[11px] text-sm text-white hover:bg-aqua hover:text-ink"
          disabled={!language}
          onClick={continueToRegion}
        >
          Continue <ArrowIcon className="h-[17px] w-[18px]" />
        </button>
        <label className="flex items-center gap-2 text-sm">
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
