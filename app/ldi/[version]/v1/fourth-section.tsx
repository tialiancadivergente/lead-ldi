"use client";

import React from "react";
import { handleScroll } from "@/lib/utils";

export default function FourthSection() {
  return (
    <section
      aria-labelledby="mentor-section-title"
      className="
        w-full
        min-h-[1108px]
        md:min-h-[916px]
        bg-[#071117]
        bg-[url('/images/v1/bg-ramon-mobile_novo.webp')]
        md:bg-[url('/images/v1/bg-ramon_novo.webp')]
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
        <div className="flex flex-col gap-4 max-w-[517px] w-full md:mt-[20px]">
          <h2
            id="mentor-section-title"
            className="text-[#D3CAC0] font-spectral text-[25px] md:text-[35px] text-center md:text-left leading-[125%] font-bold relative -top-[5px] md:top-0"
          >
            QUEM VAI SER O SEU MENTOR NESSA JORNADA?
          </h2>

          <div className="mt-[400px] md:mt-0 w-full max-w-[350px] mx-auto flex flex-col gap-4 md:max-w-[517px]">
            <h3 className="text-[#C0964B] font-spectral text-[30px] text-left leading-[125%] font-bold md:mt-0">
              Ramon Galimberti
            </h3>

            <p className="text-[#F4F0E1] font-mulish text-[16px] text-left leading-[135%] font-semibold">
              Engenheiro, mestre e mentor de desenvolvimento humano. Ramon passou anos estudando{" "}
              <span className="text-[#C0964B]">
                por que pessoas com capacidade e esforço continuam presas em padrões
              </span>{" "}
              que se repetem nas escolhas, nos relacionamentos, nas decisões que nunca saem do lugar.
            </p>

            <p className="text-[#F4F0E1] font-mulish text-[16px] text-left leading-[135%] font-semibold">
              No Levante dos Improváveis, Ramon conduz uma experiência educacional para quem quer identificar esses padrões e entender como eles operam nas diferentes áreas da vida.
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