import { t } from "@/lib/translations";

const PROOFS = ["society", "shadow", "work"] as const;

export function Mission() {
  return (
    <section id="mission" className="border-t border-[#e7e2d8] px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#a49f93]">
            {t("mission.eyebrow")}
          </p>
          <h2 className="mt-5 whitespace-pre-line font-serif text-3xl font-medium leading-snug tracking-wide text-[#1b1a17] sm:text-4xl">
            {t("mission.title")}
          </h2>
          <p className="mt-8 leading-loose text-[#4c4841]">{t("mission.body1")}</p>
          <p className="mt-4 leading-loose text-[#4c4841]">{t("mission.body2")}</p>
          {/* The name reveal — the brand moment of the page. */}
          <p className="mt-8 border-l-2 border-[#1b1a17] pl-5 font-serif leading-loose text-[#1b1a17]">
            {t("mission.origin")}
          </p>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-3">
          {PROOFS.map((key) => (
            <div key={key}>
              <h3 className="text-lg font-bold text-[#1b1a17]">
                {t(`mission.proofs.${key}.title`)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#6b6760]">
                {t(`mission.proofs.${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
