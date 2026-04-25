"use client";

import React from "react";
import { handleScroll } from "@/lib/utils";

export default function FourthSection() {
  return (
    <section
      aria-labelledby="mentor-section-title"
      className="
        w-full
        min-h-[1400px]
        md:min-h-[862px]
        bg-[#071117]
        bg-[url('/images/v1/bg-ramon-mobile.webp')]
        md:bg-[url('/images/v1/bg-ramon.webp')]
        bg-cover
        bg-center
        bg-no-repeat
        flex
        flex-col
        md:justify-center
        justify-start
        px-6
        pt-6
        pb-6
        md:px-4
        md:pt-16
        md:pb-8
      "
    >
      <div className="w-full max-w-[1156px] mx-auto flex items-start justify-end">
        <div className="flex flex-col gap-4 max-w-[517px] w-full md:mt-[80px]">
          <h2
            id="mentor-section-title"
            className="text-[#D3CAC0] font-spectral text-[25px] md:text-[35px] text-center md:text-left leading-[125%] font-bold relative -top-[10px] md:top-0"
          >
            QUEM VAI SER O SEU MENTOR NESSA JORNADA?
          </h2>

          <div className="mt-[450px] md:mt-0 w-full max-w-[350px] mx-auto flex flex-col gap-4 md:max-w-[517px]">
            <h3 className="text-[#C0964B] font-spectral text-[30px] text-left leading-[125%] font-bold md:mt-0">
              Ramon Galimberti
            </h3>

            <p className="text-[#F4F0E1] font-mulish text-[16px] text-left leading-[135%] font-semibold">
              Engenheiro, mestre e mentor de desenvolvimento humano. Durante
              muito tempo, Ramon viveu a frustração de se esforçar muito e ver a
              vida parar no quase. O dinheiro não permanecia, os planos não se
              firmavam, o relacionamento não deu certo e ele usava o ticket do
              pai para virar o mês.
            </p>

            <p className="text-[#F4F0E1] font-mulish text-[16px] text-left leading-[135%] font-semibold">
              Travado na vida, buscou resposta do porquê isso acontecia. E
              assim, ele uniu seus conhecimentos em engenharia, comportamento
              humano e sua experiência prática para identificar e corrigir os
              padrões invisíveis que travam dinheiro, relacionamentos, decisões
              e liberdade.
            </p>

            <p className="text-[#F4F0E1] font-mulish text-[16px] text-left leading-[135%] font-semibold">
              Hoje, Ramon é casado, construiu uma nova história e tornou-se o
              primeiro brasileiro autorizado a aplicar a Teoria da Permissão.
              Com mais de 160 mil seguidores e passagens por emissoras como
              SBT, Band e Record, vem falando de algo que muita gente vive, mas
              quase ninguém sabe explicar:{" "}
              <span className="text-[#C0964B]">
                por que pessoas capazes continuam presas no quase?
              </span>
            </p>

            <p className="text-[#F4F0E1] font-mulish text-[16px] text-left leading-[135%] font-semibold">
              No Levante dos Improváveis, Ramon conduz uma experiência para quem
              está cansado de repetir estagnação e quer entender o que realmente
              precisa ser corrigido para avançar.
            </p>

            <button
              type="button"
              aria-label="Participar gratuitamente do evento O Levante dos Improváveis"
              onClick={handleScroll}
              className="mt-[12px] mb-[12px] w-full h-[64px] md:h-[64px] rounded-[8px] font-mulish font-extrabold text-[14px] md:text-[16px] leading-[145%] uppercase text-black transition-all hover:brightness-110 border border-[#FCF3D4] [background:linear-gradient(90deg,_#DFD2A7_0%,_#FCF3D4_100%)] shadow-[0px_6px_18.9px_0px_#F7EDCC85]"
            >
              PARTICIPAR GRATUITAMENTE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}