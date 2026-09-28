import { ProductSection, ProductSectionHeading } from "./ProductSection";
import type { ProductDetail } from "@/data/products";
export function ProductSpecifications({ product }: { product: ProductDetail }) {
  const rows = [
    {
      label: "Thickness Options",
      value: (
        <>
          <strong>{product.specs.thickness}</strong>
        </>
      ),
    },
    { label: "Density Range", value: <>{product.specs.density}</> },
    { label: "Standard Dimensions", value: <>{product.specs.standardSize}</> },
    {
      label: "Available Finishes",
      value: (
        <>
          <div className="flex flex-wrap gap-1.5">
            {product.specs.finishes.map((f) => (
              <span
                key={f}
                className="inline-block py-[3px] px-2.5 bg-[#ebe7e0] rounded-full text-xs text-[#2b2b2a]"
              >
                {f}
              </span>
            ))}
          </div>
        </>
      ),
    },
    {
      label: "Custom Colors",
      value: (
        <>
          <div className="flex flex-wrap gap-1.5">
            {product.specs.colors.map((c) => (
              <span
                key={c}
                className="inline-block py-[3px] px-2.5 bg-[#ebe7e0] rounded-full text-xs text-[#2b2b2a]"
              >
                {c}
              </span>
            ))}
          </div>
        </>
      ),
    },
    {
      label: "Water & Moisture Rating",
      value: <>{product.specs.waterResistance}</>,
    },
    { label: "Fire Resistance", value: <>{product.specs.fireRating}</> },
    {
      label: "Screw Holding & Fastening",
      value: <>{product.specs.screwHolding}</>,
    },
  ];
  return (
    <ProductSection aria-label="Technical Specifications">
      <ProductSectionHeading eyebrow="Technical Parameters">
        Fits Into Your Vision
      </ProductSectionHeading>

      <div className="bg-white border border-[#ebe8e2] rounded overflow-x-auto shadow-[0_4px_20px_rgba(0,0,0,0.02)] reveal-on-scroll">
        <table className="w-full border-collapse text-left min-w-[320px]">
          <tbody>
            {rows
              .filter(
                (row) =>
                  row.label !== "Fire Resistance" || product.specs.fireRating,
              )
              .map((row) => (
                <tr
                  key={row.label}
                  className="border-b border-[#f0ece5] last:border-b-0 even:bg-[#faf9f6]"
                >
                  <th
                    scope="row"
                    className="py-4 px-5 text-xs uppercase tracking-[1px] text-[#706b65] font-semibold w-[36%] align-top font-sans max-sm:py-3 max-sm:px-3.5 max-sm:text-[10px] max-sm:whitespace-nowrap"
                  >
                    {row.label}
                  </th>
                  <td className="py-4 px-5 text-[14.5px] leading-[1.5] text-[#1a1a1a] align-top max-sm:py-3 max-sm:px-3.5 max-sm:text-[13px]">
                    {row.value}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </ProductSection>
  );
}
