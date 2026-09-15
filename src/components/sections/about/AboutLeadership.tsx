const leaders = [
  {
    name: "Mr. A.P. Azad",
    title: "Chairman",
    description:
      "Chairman of the AP Group of Companies, bringing decades of executive leadership, corporate governance, and strategic direction across multi-industry portfolios.",
  },
  {
    name: "Mr. Azeem P.",
    title: "Designated Partner",
    description:
      "Architectural professional with 15 years of international manufacturing and business management expertise across the Middle East, leading facility optimisation and product innovation.",
  },
  {
    name: "Mr. Imthihas Rahman",
    title: "Designated Partner",
    description:
      "Plywood manufacturing and distribution expert with over 20 years of experience via the National Group, driving national trade network expansion and market positioning.",
  },
  {
    name: "Mr. P.K. Yashir",
    title: "Designated Partner",
    description:
      "Over a decade of operational trade experience in building materials and metal supply chains, managing procurement efficiency and operational reliability.",
  },
];

export function AboutLeadership() {
  return (
    <section
      id="about-leadership"
      aria-label="Leadership and management"
      className="w-full bg-white py-24 max-[768px]:py-16"
    >
      <div className="w-full px-[38px] max-[768px]:px-6">
        <p className="mb-4 text-[10px] font-medium tracking-[.22em] uppercase text-[#979793]">
          Leadership & Management
        </p>
        <h2 className="mb-14 max-w-[600px] text-[clamp(28px,2.5vw,44px)] leading-[1.14] font-light uppercase text-[#1a1a1a] max-[768px]:mb-10">
          The Team Behind DefensePly
        </h2>

        <div className="grid grid-cols-4 gap-px bg-black/8 border border-black/8 max-[1024px]:grid-cols-2 max-[520px]:grid-cols-1">
          {leaders.map((person) => (
            <article
              key={person.name}
              className="flex flex-col bg-[#f7f8f9] px-7 py-9 max-[768px]:px-6 max-[768px]:py-8"
            >
              {/* Typographic avatar */}
              <div
                className="mb-7 flex size-14 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white text-[18px] font-light text-[#1a1a1a]"
                aria-hidden="true"
              >
                {person.name
                  .split(" ")
                  .slice(1, 3)
                  .map((n) => n[0])
                  .join("")}
              </div>

              <p className="mb-1 text-[10px] font-medium tracking-[.18em] uppercase text-[#979793]">
                {person.title}
              </p>
              <h3 className="mb-5 text-[16px] font-medium text-[#1a1a1a]">
                {person.name}
              </h3>
              <p className="text-[13px] leading-[1.7] text-[#666]">
                {person.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
