"use client";

import React from "react";
import { handleScroll } from "@/lib/utils";

export default function FourthSection() {
  return (
    <section
      aria-labelledby="mentor-section-title"
      className="
        w-full
        min-h-[1291px]
        md:min-h-[804px]
        bg-[#071117]
        bg-[url('/images/v8/bg_mobile_quinta_dobra.webp')]
        md:bg-[url('/images/v8/bg_desktop_quinta_dobra.webp')]
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
      <div className="flex flex-col gap-4 md:gap-8 max-w-[517px] w-full md:mt-[80px]">
          <h2
            id="mentor-section-title"
            className="
              text-[#D3CAC0]
              font-teramo
              text-[24px]
              md:text-[35px]
              text-left
              md:text-left
              leading-[125%]
              tracking-[-0.02em]
              uppercase
              font-bold
              relative
              top-[500px]
              md:top-0
            "
          >
            <>
              QUEM VAI SER O SEU
              <br className="md:hidden" />
              <span className="hidden md:inline"> </span>
              MENTOR NESSA JORNADA?
            </>
          </h2>

          <div className="mt-[520px] md:mt-0 w-full max-w-[350px] mx-auto flex flex-col gap-4 md:gap-8 md:max-w-[517px]">
            <h3 className="text-[#C0964B] font-spectral text-[30px] text-left leading-[125%] font-bold md:mt-0">
              Ramon Galimberti
            </h3>

            <p className="text-[#F4F0E1] font-mulish text-[16px] text-left leading-[135%] font-semibold">
              Engenheiro, mestre e mentor de desenvolvimento humano. Ramon
              passou anos estudando para descobrir por que pessoas com muita
              capacidade e esforço continuam presas em padrões nocivos que se
              repetem nas escolhas e nos relacionamentos, mantendo sua vida
              financeira atrofiada sem nunca sair do lugar.
            </p>

            <p className="text-[#F4F0E1] font-mulish text-[16px] text-left leading-[135%] font-semibold">
              No Levante dos Improváveis, ele vai te conduzir por uma
              experiência educacional para você identificar esses padrões,
              entender como eles operam nas diferentes áreas da sua vida e
              corrigir tudo isso para você voltar a crescer dar certo na vida.
            </p>

            <button
              type="button"
              aria-label="Participar gratuitamente do evento O Levante dos Improváveis"
              onClick={handleScroll}
              className="mt-[32px] md:mt-[12px] mb-[12px] w-full h-[64px] md:h-[64px] rounded-[8px] font-mulish font-extrabold text-[14px] md:text-[16px] leading-[145%] uppercase text-[#F6F1D9] transition-all hover:brightness-110 bg-[#91430E]"
            >
              PARTICIPAR GRATUITAMENTE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
