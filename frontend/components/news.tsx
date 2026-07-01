import { t } from "@/lib/translations";

type NewsItem = {
  month: string;
  entries: { text: string; href: string }[];
};

type NewsYear = {
  year: string;
  items: NewsItem[];
};

const NEWS: NewsYear[] = [
  {
    year: "2025年",
    items: [
      {
        month: "10月",
        entries: [
          {
            text: "レックステック株式会社　東北大学発スタートアップとして設立",
            href: "https://startup.tohoku.ac.jp/",
          },
          {
            text: "メディアインタビュー",
            href: "https://note.com/mitohoku/n/nd3348f5cabb2",
          },
        ],
      },
      {
        month: "9月",
        entries: [
          {
            text: "SOCIAL IMPACT BOOSTER 2025　採択者",
            href: "https://tohoku-socialimpactbooster.jp/",
          },
        ],
      },
      {
        month: "7月",
        entries: [
          { text: "MiTOHOKU Program　採択者", href: "https://mitohoku.jp/" },
        ],
      },
      {
        month: "6月",
        entries: [
          {
            text: "宮城県スタートアップ加速化支援事業　採択者",
            href: "https://www.joho-miyagi.or.jp/business-menu/startup",
          },
        ],
      },
      {
        month: "2月",
        entries: [
          {
            text: "Miyagi Pitch Contest　ファイナリスト",
            href: "https://www.pref.miyagi.jp/soshiki/sangyod/miyagipitchcontest2025.html",
          },
        ],
      },
    ],
  },
  {
    year: "2024年",
    items: [
      {
        month: "2月",
        entries: [
          {
            text: "Academia in Action　優勝",
            href: "https://www.ggi.tohoku.ac.jp/academia-in-action/",
          },
        ],
      },
    ],
  },
];

export function News() {
  return (
    <section id="news" className="border-t border-[#e7e2d8] px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#a49f93]">
          {t("news.eyebrow")}
        </p>
        <h2 className="mt-5 font-serif text-3xl font-medium tracking-wide text-[#1b1a17] sm:text-4xl">
          {t("news.title")}
        </h2>

        <div className="mt-12">
          {NEWS.map((group) => (
            <div key={group.year} className="mb-10 last:mb-0">
              <h3 className="mb-6 text-sm font-bold tracking-wide text-[#a49f93]">
                {group.year}
              </h3>

              <div className="divide-y divide-[#e7e2d8] border-t border-[#e7e2d8]">
                {group.items.map((item) => (
                  <div key={item.month} className="flex gap-5 py-4 sm:gap-8">
                    <span className="shrink-0 w-12 text-sm text-[#a49f93]">
                      {item.month}
                    </span>
                    <div className="space-y-2">
                      {item.entries.map((entry) => (
                        <a
                          key={entry.href}
                          href={entry.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block leading-relaxed text-[#1b1a17] underline decoration-[#d8d2c6] underline-offset-4 transition-colors hover:decoration-[#1b1a17]"
                        >
                          {entry.text}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
