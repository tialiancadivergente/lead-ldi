"use client";

import React from "react";
import Image from "next/image";
import { handleScroll } from "@/lib/utils";

export default function FourthSection() {
  return (
    <section
      className="
				w-full
				min-h-[1206px]
				md:min-h-[956px]
				bg-[#071117]
				bg-[url('/images/v1/bg-ramon-mobile.webp')]
				md:bg-[url('/images/v2/bg-ramon.webp')]
				bg-cover
				bg-center
				bg-no-repeat
				flex
				flex-col
        justify-center
			"
    >
      <div className="w-full max-w-[1060px] mx-auto flex justify-end">
        <div className="font-spectral max-w-[520px] w-full flex flex-col">
          <p className="font-spectral font-extrabold text-[40px] leading-[56px] tracking-[0] text-[#F4F0E1]">
            Quem vai ser o seu mentor nessa jornada?
          </p>
          <p className="font-[Teramo] font-bold text-[#C0964B] text-[24px] leading-[145%] tracking-[0] my-6">
            Ramon Galimberti
          </p>
          <div className="font-spectral font-normal not-italic text-[18px] leading-[24px] tracking-[0] align-middle text-white flex flex-col gap-7">
            <p>
              Mentor da Aliança Divergente, comunidade com mais de 200 mil aliados no Brasil e no mundo. Formado em Engenharia, Ramon descobriu depois dos 30 que assumir controle financeiro e multiplicar ganhos não é questão de capacidade, mas de corrigir as relações que geram padrões nocivos.
            </p>
            <p>
              Com mais de 500K seguidores no Instagram e 46.9K no YouTube, Ramon desenvolveu um método sistemático para identificar e corrigir os padrões bloqueadores de permissão para você ter controle total sobre os acontecimentos da sua vida e ganhar mais dinheiro.
            </p>
            <p>
              A missão de Ramon é clara: apoiar pessoas a corrigirem sua base interna para terem Permissão de multiplicar seus ganhos e oportunidades de sucesso. Se você quer destravar sua vida,
              O Levante dos Improváveis é o primeiro passo.
            </p>
            <button className="w-full max-w-[380px] h-[50px] bg-[#C0964B] text-white text-base uppercase font-bold mt-8 transition-all duration-200 hover:bg-[#e9cb84] hover:text-black">
              PARTICIPAR GRATUITAMENTE
            </button>
          </div>
        </div>
      </div>
    </section >
  );
}
