import { t } from "@/lib/translations";

type NewsItem = {
  month: string;
  entries: { text: string; href?: string }[];
};

type NewsYear = {
  year: string;
  items: NewsItem[];
};

const NEWS: NewsYear[] = [
  {
    year: "2026年",
    items: [
      {
        month: "5月",
        entries: [
          {
            text: "エージェント型AIコンサルティング事業を開始",
          },
        ],
      },
      {
        month: "3月",
        entries: [
          {
            text: "SENDAI Global Loungeにて、ゲーム障害・ネット依存をテーマにワークショップを開催",
            href: "https://sendaigloballounge.jp/meetup6-report/",
          },
        ],
      },
      {
        month: "1月",
        entries: [
          {
            text: "マルメ大学（スウェーデン）「ヨーラン・ブレディンガー奨学金2025」受賞　自治体向けAI基盤「SchaktFlow」の開発に対して",
            href: "https://mau.se/nyheter/klimatsmart-innovation-prisas-med-malmo-universitets-goran-bredinger-stipendium-2025/",
          },
        ],
      },
    ],
  },
  {
    year: "2025年",
    items: [
      {
        month: "12月",
        entries: [
          {
            text: "SENDAI Global Lounge　創業者インタビュー「Why we chose Sendai」掲載",
            href: "https://sendaigloballounge.jp/why-we-chose-sendai/",
          },
        ],
      },
      {
        month: "11月",
        entries: [
          {
            text: "ノーショーピン市（スウェーデン）にて自治体向けAI基盤「SchaktFlow」の実証を開始",
            href: "https://schaktflow.se/",
          },
        ],
      },
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
        <h2 className="font-serif text-3xl font-medium tracking-wide text-[#1b1a17] sm:text-4xl">
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
                      {item.entries.map((entry) =>
                        entry.href ? (
                          <a
                            key={entry.text}
                            href={entry.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block leading-relaxed text-[#1b1a17] underline-offset-4 hover:underline hover:decoration-[#d8d2c6]"
                          >
                            {entry.text}
                          </a>
                        ) : (
                          <p key={entry.text} className="leading-relaxed text-[#1b1a17]">
                            {entry.text}
                          </p>
                        )
                      )}
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
