import { getApplications } from "@/data/applications";
import { Heading } from "@/components/ui/Heading";
import { ApplicationTabs } from "@/components/application/ApplicationTabs";
export function Applications() {
  return (
    <section
      id="applications"
      data-section="applications"
      className="relative bg-white pt-6 pb-2 mb-20 max-md:mb-16 max-phone:mb-12 max-phone:pt-4 max-md:pt-4"
    >
      <span id="product" className="absolute top-0" aria-hidden="true" />
      <div className="mx-auto flex max-w-[1000px] flex-col gap-3 pb-6 max-phone:pb-4">
        <p className="text-center text-fluid">Architectural Applications</p>
        <Heading className="mx-auto font-semibold max-w-[800px] text-center">
          High-Performance Composite Solutions for Built Environments
        </Heading>
      </div>
      <ApplicationTabs categories={getApplications()} />
    </section>
  );
}
