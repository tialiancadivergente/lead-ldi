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
        min-h-[778px]
        md:min-h-[905px]
        bg-[#071117]
        bg-[url('/images//v1/bg-five-mobile.webp')]
        md:bg-[url('/images/v1/bg-five.webp')]
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
      <div className="w-full md:max-w-[1024px] max-w-[350px] mx-auto flex flex-col items-center justify-center -mt-[80px] md:mt-0">
        
        <Image
          src="/images/v1/LOGO-OLDI.png"
          alt="Logo do evento O Levante dos Improváveis"
          width={300}
          height={85}
          className="w-full md:max-w-[350px] max-w-[250px] mx-auto"
          priority
        />

        <h2
          id="cta-section-title"
          className="text-[#D3CAC0] font-spectral md:block hidden text-[20px] md:text-[25px] text-center leading-[125%] font-extrabold w-full max-w-[667px] mx-auto my-10"
        >
          Não é sobre talento. <br /> Não é sobre preparo técnico.
        </h2>

        <h2 className="text-[#D3CAC0] font-spectral md:hidden text-[20px] md:text-[25px] text-center leading-[125%] font-extrabold w-full max-w-[667px] mx-auto my-10">
          Não é sobre talento. Não é sobre preparo técnico.
        </h2>

        <p className="text-[#F4F0E1] font-mulish text-[16px] md:text-[18px] text-center leading-[135%] font-semibold w-full max-w-[667px] mx-auto">
          É um processo educacional para identificar os padrões que limitam decisões, relacionamentos e a forma como se toma as decisões em todas as áreas da vida.
        </p>

        <div className="bg-transparent border-2 my-10 border-[#C0964B] text-[#F4F0E1] rounded-[16px] px-4 py-2 w-[353px] h-[71px] flex items-center justify-center gap-2">
          <Image
            src="/images/v1/video-on-fill.png"
            alt=""
            aria-hidden="true"
            width={42}
            height={42}
          />
          <span>É online, ao vivo e gratuito.</span>
        </div>

        <button
          type="button"
          aria-label="Acessar o evento O Levante dos Improváveis gratuitamente"
          onClick={handleScroll}
          className="mt-[12px] mb-[12px] w-full max-w-[457px] h-[64px] md:h-[64px] rounded-[8px] font-mulish font-extrabold text-[14px] md:text-[16px] leading-[145%] uppercase text-black transition-all hover:brightness-110 border border-[#FCF3D4] [background:linear-gradient(90deg,_#DFD2A7_0%,_#FCF3D4_100%)] shadow-[0px_6px_18.9px_0px_#F7EDCC85]"
        >
          ACESSAR O LEVANTE DOS IMPROVÁVEIS
        </button>

        <FooterLdi className="md:mt-28 mt-12" />
      </div>
    </section>
  );
}