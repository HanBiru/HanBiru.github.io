"use client";

import { useState } from "react";
import { t } from "@/lib/translations";

export function Contact() {
  const [email, setEmail] = useState<string | null>(null);

  // Simple obfuscation: assemble the address only when the user asks for it.
  const revealEmail = () => {
    setEmail(`info@${"rextec"}.co.jp`);
  };

  return (
    <section id="contact" className="bg-[#1b1a17] px-6 py-28 sm:py-36 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-medium tracking-wide text-[#faf8f3] sm:text-4xl">
            {t("contact.title")}
          </h2>
          <p className="mx-auto mt-5 max-w-md leading-relaxed text-[#b3ada1]">
            {t("contact.body")}
          </p>

          <div className="mt-10">
            {email ? (
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center justify-center rounded-full bg-[#faf8f3] px-8 py-3 text-sm font-medium text-[#1b1a17] transition-colors hover:bg-white"
              >
                {email}
              </a>
            ) : (
              <button
                onClick={revealEmail}
                className="inline-flex items-center justify-center rounded-full bg-[#faf8f3] px-8 py-3 text-sm font-medium text-[#1b1a17] transition-colors hover:bg-white"
              >
                {t("contact.reveal")}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
