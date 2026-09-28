import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getApplication, getApplications } from "@/data/applications";
import { products } from "@/data/products";
import { ApplicationHero } from "@/components/application/ApplicationHero";
import { ApplicationStory } from "@/components/application/ApplicationStory";
import { ApplicationGallery } from "@/components/application/ApplicationGallery";
import { ApplicationMaterials } from "@/components/application/ApplicationMaterials";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return getApplications().map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const application = getApplication((await params).slug);
  return application
    ? {
        title: `${application.title} Applications | Defenseply`,
        description: application.description,
      }
    : { title: "Application not found | Defenseply" };
}
export default async function ApplicationPage({ params }: Props) {
  const application = getApplication((await params).slug);
  if (!application) notFound();
  const materials = products.filter((product) =>
    application.products.includes(product.slug),
  );
  return (
    <>
      <main id="main-content" className="overflow-x-clip bg-white text-ink">
        <ApplicationHero application={application} />
        <ApplicationStory application={application} />
        <ApplicationGallery application={application} />
        <ApplicationMaterials products={materials} />
      </main>
    </>
  );
}
