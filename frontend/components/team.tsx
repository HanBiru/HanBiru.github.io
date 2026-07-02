import Image from "next/image";
import { t } from "@/lib/translations";

const MEMBERS = [
  { key: "kendal", image: "/images/team/kendal.jpg" },
  { key: "hans", image: "/images/team/hans.jpg" },
];

export function Team() {
  return (
    <section id="team" className="border-t border-[#e7e2d8] px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl font-medium tracking-wide text-[#1b1a17] sm:text-4xl">
            {t("team.title")}
          </h2>
          <p className="mt-4 text-[#6b6760]">{t("team.subtitle")}</p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 sm:gap-10">
          {MEMBERS.map((member) => (
            <div key={member.key}>
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-[#e7e2d8] bg-[#f2efe7]">
                <Image
                  src={member.image}
                  alt={t(`team.${member.key}.name`)}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, 400px"
                />
              </div>
              <h3 className="mt-5 text-base font-bold text-[#1b1a17]">
                {t(`team.${member.key}.name`)}
              </h3>
              <p className="mt-1 text-sm text-[#a49f93]">{t(`team.${member.key}.role`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
