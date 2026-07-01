import { t } from "@/lib/translations";

const LINKS = [
  { href: "/#services", label: "nav.services" },
  { href: "/#profile", label: "nav.profile" },
  { href: "/#team", label: "nav.team" },
  { href: "/#news", label: "nav.news" },
  { href: "/#contact", label: "nav.contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#e7e2d8] px-6 py-14 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <span className="font-serif text-base font-semibold tracking-[0.25em] text-[#1b1a17]">
              {t("nav.brand")}
            </span>
            <p className="mt-3 text-sm text-[#6b6760]">{t("footer.brand")}</p>
            <p className="mt-1 text-sm text-[#a49f93]">{t("footer.tagline")}</p>
          </div>

          <nav className="flex flex-wrap gap-x-7 gap-y-3">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#6b6760] transition-colors hover:text-[#1b1a17]"
              >
                {t(link.label)}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-[#e7e2d8] pt-6 text-sm text-[#a49f93]">
          {t("footer.copyright")}
        </div>
      </div>
    </footer>
  );
}
