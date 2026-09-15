import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getApplication, getApplications } from "@/data/applications";
import { products } from "@/data/products";
import { ApplicationHero } from "@/components/application/ApplicationHero";
import { ApplicationNavigation } from "@/components/application/ApplicationNavigation";
import { ApplicationStory } from "@/components/application/ApplicationStory";
import { ApplicationGallery } from "@/components/application/ApplicationGallery";
import { ApplicationMaterials } from "@/components/application/ApplicationMaterials";
import { ContactProject } from "@/components/sections/contact/ContactProject";
import { FloatingActions } from "@/components/ui/FloatingActions";

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
      <main id="main-content" className="overflow-hidden bg-white text-ink">
        <ApplicationHero application={application} />
        <ApplicationNavigation
          categories={getApplications()}
          active={application.slug}
        />
        <ApplicationStory application={application} />
        <ApplicationGallery application={application} />
        <ApplicationMaterials products={materials} />
        <ContactProject
          key={application.slug}
          context={`${application.title} application`}
        />
      </main>
      <FloatingActions quoteHref="#project-form" />
    </>
  );
}
