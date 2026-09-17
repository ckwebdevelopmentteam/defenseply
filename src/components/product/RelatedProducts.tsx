import type { ProductDetail } from "@/types/product";
import { ApplicationMaterials } from "@/components/application/ApplicationMaterials";

export function RelatedProducts({
  relatedProducts,
}: {
  relatedProducts: ProductDetail[];
}) {
  return (
    <ApplicationMaterials
      products={relatedProducts}
      title="Explore Related Surfaces"
      description="Discover complementary composite grades, moisture-resistant boards, and specialized profiles engineered for seamless architectural coordination."
    />
  );
}
