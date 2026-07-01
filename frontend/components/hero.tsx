import { t } from "@/lib/translations";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[min(94svh,56rem)] items-center justify-center overflow-hidden px-6"
    >
      {/* Painterly backdrop — replace with the Midjourney artwork at /images/hero.jpg
          (nihonga-style coastal landscape, muted indigo/cream palette). */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #7e93a8 0%, #93a5b3 22%, #b3bdba 46%, #cfc9b8 68%, #e6ddc9 88%, #ede5d2 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(130% 55% at 50% 112%, rgba(250,248,243,0.75), transparent 62%), radial-gradient(90% 40% at 18% 30%, rgba(255,255,255,0.14), transparent 70%)",
        }}
      />
      {/* Grain so the gradient reads as canvas, not CSS */}
      <div
        className="absolute inset-0 opacity-[0.35] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative mx-auto max-w-4xl pb-20 pt-28 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-white/70">
          {t("hero.eyebrow")}
        </p>
        <h1 className="mt-8 whitespace-pre-line break-words font-serif text-3xl font-medium leading-[1.45] tracking-wide text-white sm:text-5xl sm:leading-[1.35] lg:text-[3.4rem]">
          {t("hero.title")}
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-base leading-loose text-white/85 sm:text-lg">
          {t("hero.subtitle")}
        </p>
        <div className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="/#contact"
            className="inline-flex w-full items-center justify-center rounded-full bg-[#faf8f3] px-8 py-3 text-sm font-medium text-[#1b1a17] transition-colors hover:bg-white sm:w-auto"
          >
            {t("hero.ctaPrimary")}
          </a>
          <a
            href="/#services"
            className="inline-flex w-full items-center justify-center rounded-full border border-white/50 px-8 py-3 text-sm font-medium text-white transition-colors hover:border-white sm:w-auto"
          >
            {t("hero.ctaSecondary")}
          </a>
        </div>
      </div>
    </section>
  );
}
