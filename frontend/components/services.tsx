import { t } from "@/lib/translations";

const PILLARS = [
  { key: "office", index: "01" },
  { key: "custom", index: "02" },
  { key: "secure", index: "03" },
];

export function Services() {
  return (
    <section id="services" className="border-t border-[#e7e2d8] px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#a49f93]">
            {t("services.eyebrow")}
          </p>
          <h2 className="mt-5 font-serif text-3xl font-medium leading-snug tracking-wide text-[#1b1a17] sm:text-4xl">
            {t("services.title")}
          </h2>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border border-[#e7e2d8] bg-[#e7e2d8] sm:grid-cols-3">
          {PILLARS.map((pillar) => (
            <div key={pillar.key} className="bg-[#faf8f3] p-8 lg:p-10">
              <span className="font-mono text-sm text-[#a49f93]">{pillar.index}</span>
              <h3 className="mt-6 text-lg font-bold text-[#1b1a17]">
                {t(`services.${pillar.key}.title`)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#6b6760]">
                {t(`services.${pillar.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
