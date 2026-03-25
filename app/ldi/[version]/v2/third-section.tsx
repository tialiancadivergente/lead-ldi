"use client";

import * as React from "react";
import { CheckCircle2 } from "lucide-react";

const listaEncontro = [
  "Já investiu em cursos, mentorias ou terapias e ainda sente a vida travada",
  "Sabe que tem capacidade de sobra, mas o resultado financeiro não acompanha",
  "Quer entender o que realmente está te segurando e corrigir isso",
  "Decidiu parar de tentar as mesmas soluções e se levantar contra tudo que te bloqueia",
];

export default function ThirdSection() {
  return (
    <section
      className={`
        w-full
        min-h-[523px]
        h-[523px]
        md:h-[758px]
        md:min-h-[758px]
        bg-[#104448]
        flex
        justify-center
        items-center
      `}
    >
      <div className="w-full max-w-[640px] mx-auto">
        <p className="text-[#F4F0E1] font-spectral text-[20px] md:text-[40px] text-center leading-[125%] font-extrabold max-w-[667px] w-full mx-auto my-6">
          Esse encontro é para quem:
        </p>
        <div className="flex flex-col gap-4 mt-[72px]">
          {listaEncontro.map((frase, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <CheckCircle2 size={40} className="text-[#C0964B]" />
              <p className="text-[#F4F0E1] font-spectral font-bold text-[24px] leading-[32px] tracking-[0%] flex-1">{frase}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-16">
          <button className="w-full max-w-[380px] h-[50px] bg-[#C0964B] text-white text-base uppercase font-bold mt-8 transition-all duration-200 hover:bg-[#e9cb84] hover:text-black">
            Quero fazer meu diagnóstico
          </button>
        </div>
      </div>
    </section>
  );
}
