import { t } from "@/lib/translations";

// Real credentials in place of client logos until there are logos to show.
const CREDENTIALS = [
  "東北大学発スタートアップ",
  "MiTOHOKU Program 採択",
  "SOCIAL IMPACT BOOSTER 2025 採択",
  "宮城県スタートアップ加速化支援事業 採択",
  "マルメ大学 Göran Bredinger 奨学金2025 受賞",
];

export function Clients() {
  return (
    <section className="border-t border-[#e7e2d8] px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-xs font-medium uppercase tracking-[0.25em] text-[#a49f93]">
          {t("clients.title")}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {CREDENTIALS.map((item) => (
            <span
              key={item}
              className="font-serif text-sm font-medium tracking-wider text-[#6b6760]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
