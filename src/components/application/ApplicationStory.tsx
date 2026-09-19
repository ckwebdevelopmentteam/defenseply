import type { Application } from "@/types/application";
import { Droplets, ShieldCheck, Layers, Sparkles } from "lucide-react";
import { ActionLink } from "@/components/ui/ActionLink";

const PERFORMANCE_PILLARS = [
  {
    icon: Droplets,
    title: "100% Waterproof",
    detail: "Zero swelling or delamination in high-humidity zones.",
  },
  {
    icon: ShieldCheck,
    title: "Termite & Borer Proof",
    detail: "Inorganic composite core immune to pest and fungal decay.",
  },
  {
    icon: Layers,
    title: "Calibrated Core",
    detail: "Even density throughout for tight screw holding and joinery.",
  },
  {
    icon: Sparkles,
    title: "Precision CNC Detailing",
    detail: "Crisp routing edges without splintering or frayed fibers.",
  },
];

export function ApplicationStory({
  application,
}: {
  application: Application;
}) {
  return (
    <section
      id="story"
      className="mx-auto max-w-[1600px] px-[5%] py-[clamp(40px,4.5vw,64px)] scroll-mt-24"
    >
      <div className="grid grid-cols-1 items-start gap-10 desktop:grid-cols-[1.1fr_0.9fr] desktop:gap-16">
        {/* Editorial Narrative */}
        <div className="max-w-2xl">
          <p className="mb-3 text-xs tracking-[.2em] uppercase text-muted font-medium">
            Materials meet possibility
          </p>
          <h2 className="text-[clamp(26px,2.6vw,42px)] leading-[1.18] font-light text-ink tracking-tight uppercase">
            {application.storyTitle}
          </h2>
          <p className="mt-5 text-base font-light leading-relaxed text-ink/85">
            {application.description}
          </p>
          <p className="mt-3 text-sm font-light leading-relaxed text-muted">
            {application.story}
          </p>
          <div className="mt-7">
            <ActionLink href="#inspiration">
              Explore the inspiration spaces
            </ActionLink>
          </div>
        </div>

        {/* Architectural Performance Pillars */}
        <div className="grid grid-cols-2 gap-3.5 max-phone:grid-cols-1">
          {PERFORMANCE_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group flex flex-col justify-between rounded-xs border border-line/60 bg-stone/20 p-5 transition-all duration-300 hover:border-ink/40 hover:bg-stone/40"
              >
                <div>
                  <div className="mb-3 flex size-8 items-center justify-center rounded-xs bg-ink/5 text-ink transition-colors group-hover:bg-ink group-hover:text-white">
                    <Icon className="size-4" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-sm font-normal text-ink tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="mt-1.5 text-xs font-light leading-relaxed text-muted">
                    {pillar.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
