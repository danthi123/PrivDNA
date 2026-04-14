const comparisons = [
  {
    price: "$99 - $229",
    label: "Consumer SNP genotyping (23andMe, Ancestry)",
    detail: "Tests ~0.02% of your genome. Database is the business model.",
  },
  {
    price: "$5,000 - $11,000 / year",
    label: "Mayo Clinic Executive Physical",
    detail: "Annual recurring. Doesn't include genome sequencing.",
  },
  {
    price: "$2,500 - $3,000 / year",
    label: "Concierge medicine retainer",
    detail: "Annual recurring. Care relationship, not data ownership.",
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      aria-label="Pricing"
      className="px-6 md:px-16 lg:px-24 py-24 md:py-32"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[clamp(2rem,4vw,4rem)] font-bold mb-12 text-center">
          What it costs
        </h2>

        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-accent text-[clamp(3rem,9vw,8rem)] font-bold leading-none tabular-nums">
            $3,500
          </span>
          <p className="text-text-secondary text-lg md:text-xl mt-4 max-w-xl">
            per whole genome. One-time. Nothing recurring.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:gap-4 mb-12">
          {comparisons.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-1 md:grid-cols-[minmax(0,14rem)_1fr] gap-2 md:gap-8 py-5 border-t border-bg-elevated"
            >
              <div className="text-text-primary font-semibold md:text-right tabular-nums">
                {row.price}
              </div>
              <div>
                <p className="text-text-primary">{row.label}</p>
                <p className="text-text-secondary text-sm mt-1">{row.detail}</p>
              </div>
            </div>
          ))}
          <div className="border-t border-bg-elevated" />
        </div>

        <p className="text-text-primary text-lg md:text-xl text-center max-w-2xl mx-auto">
          <span className="text-accent font-semibold">$3,500 once.</span> No
          subscription. No data resale. No recurring exposure.
        </p>

        <p className="text-text-secondary text-xs md:text-sm text-center mt-6 max-w-xl mx-auto italic">
          Pricing for the first cohort. Subject to change at general availability.
        </p>
      </div>
    </section>
  );
}
