"use client";

import React from "react";
import Image from "next/image";
import { handleScroll } from "@/lib/utils";

export default function FiveSection() {
  return (
    <section
      className="
				w-full
				min-h-[778px]
				md:min-h-[440px]
				bg-[#006D71]
				flex
				flex-col
				justify-center
			"
    >
      <div className="w-full max-w-[1060px] mx-auto flex items-center justify-center gap-16">
        <div className="flex flex-col items-center justify-center gap-7 w-full max-w-[340px]">
          <Image
            src="/images/v2/Logo-LDI.png"
            alt="Logo O Levante dos Improváveis"
            width={339}
            height={96}
            className="w-full mx-auto"
          />
          <div className="bg-[#104448] py-2 px-5 uppercase text-[#CA9A63] font-spectral font-bold text-[14px]">
            É online, ao vivo e gratuito.
          </div>
          <p className="font-spectral font-bold text-[22.47px] leading-[33.7px] tracking-[0%] text-center align-middle text-[#F4F0E1]">
            06 a 08 de abril, às 20h
          </p>
          <Image
            src="/images/v2/Logo-Alianca.png"
            alt="Logo Aliança Divergente"
            width={340}
            height={44}
            className="w-full mx-auto mt-10"
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-4">
          <p className="font-spectral font-normal not-italic text-[16px] leading-[24px] tracking-[0] align-middle text-[#F4F0E1]">
            Não é sobre as pessoas mais talentosas. <br /> Não é sobre as mais preparadas.
          </p>
          <p className="font-spectral font-bold not-italic text-[16px] leading-[24px] tracking-[0] align-middle text-[#F4F0E1]">
            É um processo prático para destravar sua vida financeira depois dos 30 e corrigir relacionamentos que impedem sua permissão de ir mais longe.
          </p>
          <button className="w-full max-w-[380px] h-[50px] bg-[#C0964B] text-white text-base uppercase font-bold mt-8 transition-all duration-200 hover:bg-[#e9cb84] hover:text-black">
            ACESSAR O LEVANTE DOS IMPROVÁVEIS
          </button>
          <p className="mt-[65px] font-spectral font-normal not-italic text-[12px] leading-[120%] tracking-[0] align-middle uppercase text-[#F4F0E1]">
            <span className="font-bold">Copyright 2026666666</span> © Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section >
  );
}
