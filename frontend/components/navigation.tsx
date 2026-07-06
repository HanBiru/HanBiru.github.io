"use client";

import { useEffect, useState } from "react";
import { t } from "@/lib/translations";

const LINKS = [
  { href: "/#services", label: "nav.services" },
  { href: "/#profile", label: "nav.profile" },
  { href: "/#team", label: "nav.team" },
  { href: "/#news", label: "nav.news" },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Transparent over the hero artwork; solid once the page scrolls.
  const solid = scrolled || mobileMenuOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        solid
          ? "border-b border-[#e7e2d8]/70 bg-[#faf8f3]/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a
            href="/"
            className="font-serif text-lg font-semibold tracking-[0.25em] text-[#1b1a17]"
          >
            {t("nav.brand")}
          </a>

          <div className="hidden items-center gap-9 md:flex">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#55524b] transition-colors hover:text-[#1b1a17]"
              >
                {t(link.label)}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="/#contact"
              className={`inline-flex items-center rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                solid
                  ? "bg-[#1b1a17] text-[#faf8f3] hover:bg-[#34322c]"
                  : "border border-[#1b1a17]/50 text-[#1b1a17] hover:border-[#1b1a17]"
              }`}
            >
              {t("nav.cta")}
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1b1a17] md:hidden"
            aria-label="メニュー"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-[#e7e2d8] py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#6b6760] hover:text-[#1b1a17]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t(link.label)}
                </a>
              ))}
              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#1b1a17] px-5 py-2.5 font-medium text-[#faf8f3]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.cta")}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
