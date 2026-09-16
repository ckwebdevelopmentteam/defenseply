import { getApplications } from "@/data/applications";
import { Heading } from "@/components/ui/Heading";
import { ApplicationTabs } from "@/components/application/ApplicationTabs";
export function Applications() {
  return (
    <section
      id="applications"
      data-section="applications"
      className="relative bg-white py-20 max-phone:py-12"
    >
      <span id="product" className="absolute top-0" aria-hidden="true" />
      <div className="mx-auto flex max-w-[1000px] flex-col gap-4 pb-8 max-phone:pb-6">
        <p className="text-center text-fluid">Defenseply Applications</p>
        <Heading className="mx-auto max-w-[800px] text-center">
          Meaningful design for the spaces we live in
        </Heading>
      </div>
      <ApplicationTabs categories={getApplications()} />
    </section>
  );
}
