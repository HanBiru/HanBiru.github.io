import { t } from "@/lib/translations";

const ROW_KEYS = ["name", "address", "ceo", "business", "capital", "founded"] as const;

export function Profile() {
  return (
    <section id="profile" className="border-t border-[#e7e2d8] px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#a49f93]">
          {t("profile.eyebrow")}
        </p>
        <h2 className="mt-5 font-serif text-3xl font-medium tracking-wide text-[#1b1a17] sm:text-4xl">
          {t("profile.title")}
        </h2>

        <dl className="mt-12 divide-y divide-[#e7e2d8] border-y border-[#e7e2d8]">
          {ROW_KEYS.map((key) => (
            <div key={key} className="py-5 sm:grid sm:grid-cols-3 sm:gap-6">
              <dt className="text-sm text-[#a49f93]">{t(`profile.rows.${key}.label`)}</dt>
              <dd className="mt-1 whitespace-pre-line font-medium leading-relaxed text-[#1b1a17] sm:col-span-2 sm:mt-0">
                {t(`profile.rows.${key}.value`)}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
