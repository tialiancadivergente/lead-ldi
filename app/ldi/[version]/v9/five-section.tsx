"use client";

import React from "react";
import Image from "next/image";
import { handleScroll } from "@/lib/utils";
import FooterLdi from "@/app/components/footer-ldi/footer";

export default function FiveSection() {
  return (
    <section
      aria-labelledby="cta-section-title"
      className="
        w-full
        min-h-[701px]
        md:min-h-[707px]
        bg-[#071117]
        bg-[url('/images/v8/bg_mobile_sesta_dobra.webp')]
        md:bg-[url('/images/v8/bg_desktop_sesta_dobra.webp')]
        bg-cover
        bg-center
        bg-no-repeat
        flex
        flex-col
        justify-start
        px-6
        pt-0
        pb-6
        md:px-4
        md:pt-16
        md:pb-8
      "
    >
      <div className="w-full md:max-w-[1024px] max-w-[350px] mx-auto flex flex-col items-center justify-center">
        <Image
          src="/images/v8/logo_footer_mobile.png"
          alt="Logo do evento O Levante dos Improváveis"
          width={348}
          height={103}
          className="w-full max-w-[250px] md:hidden mx-auto mt-8"
          priority
        />

        <Image
          src="/images/v8/logo_footer_desktop.png"
          alt="Logo do evento O Levante dos Improváveis"
          width={512}
          height={152}
          className="hidden md:block w-full max-w-[350px] mx-auto"
          priority
        />

        <h2
          id="cta-section-title"
          className="text-[#31737D] font-spectral text-[20px] md:text-[25px] text-center leading-[125%] font-extrabold w-full max-w-[667px] mx-auto my-10"
        >
          Um processo prático para destravar sua vida financeira depois dos 30.
          Corrigindo os padrões de convívio que podam o seu crescimento e freiam
          os seus resultados sem você perceber.
        </h2>

        <p className="text-[#31737D] font-mulish text-[16px] md:text-[18px] text-center leading-[135%] font-semibold w-full max-w-[667px] mx-auto">
          Chegou a hora de se levantar contra tudo isso e ser o próximo
          improvável que deu certo na vida.{" "}
          <strong>Inscreva-se agora gratuitamente.</strong>
        </p>

        <div className="bg-transparent border-2 my-10 border-[#0A3740] text-[#0A3740] rounded-[16px] px-4 py-2 w-[353px] h-[71px] flex items-center justify-center gap-2">
          <Image
            src="/images/v8/video_mobile.png"
            alt=""
            aria-hidden="true"
            width={42}
            height={42}
            className="md:hidden"
          />

          <Image
            src="/images/v8/video_desktop.png"
            alt=""
            aria-hidden="true"
            width={42}
            height={42}
            className="hidden md:block"
          />

          <span>É online, ao vivo e gratuito.</span>
        </div>

        <button
          type="button"
          aria-label="Acessar o evento O Levante dos Improváveis gratuitamente"
          onClick={handleScroll}
          className="mt-[12px] mb-[12px] w-full max-w-[457px] h-[64px] md:h-[64px] rounded-[8px] font-mulish font-extrabold text-[14px] md:text-[16px] leading-[145%] uppercase text-[#F6F1D9] transition-all hover:brightness-110 bg-[#0A3740]"
        >
          ACESSAR O LEVANTE DOS IMPROVÁVEIS
        </button>

        <FooterLdi className="md:mt-28 mt-12" />
      </div>
    </section>
  );
}
