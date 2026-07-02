import Image from "next/image";
import { t } from "@/lib/translations";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[min(100svh,70rem)] items-center justify-center overflow-hidden px-6"
    >
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[68%_center] sm:object-center"
      />
      {/* Soften the art behind the copy; fade the bottom into the page background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/5 to-[#faf8f3]" />

      <div className="relative mx-auto w-full min-w-0 max-w-4xl pb-24 pt-28 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#6b6760]">
          {t("hero.eyebrow")}
        </p>
        <h1 className="mt-8 whitespace-pre-line break-words font-serif text-[1.6rem] font-medium leading-[1.5] tracking-wide text-[#1b1a17] sm:text-5xl sm:leading-[1.35] lg:text-[3.4rem]">
          {t("hero.title")}
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-base leading-loose text-[#4c4841] sm:text-lg">
          {t("hero.subtitle")}
        </p>
        <div className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="/#contact"
            className="inline-flex w-full items-center justify-center rounded-full bg-[#1b1a17] px-8 py-3 text-sm font-medium text-[#faf8f3] transition-colors hover:bg-[#34322c] sm:w-auto"
          >
            {t("hero.ctaPrimary")}
          </a>
          <a
            href="/#services"
            className="inline-flex w-full items-center justify-center rounded-full border border-[#1b1a17]/40 px-8 py-3 text-sm font-medium text-[#1b1a17] transition-colors hover:border-[#1b1a17] sm:w-auto"
          >
            {t("hero.ctaSecondary")}
          </a>
        </div>
      </div>
    </section>
  );
}
