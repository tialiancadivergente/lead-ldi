"use client";

import { handleScroll } from "@/lib/utils";
import Image from "next/image";

// Lista de objetos conforme detalhes da imagem fornecida
const itemsToResolve = [
  {
    number: 1,
    text: "Porque pessoas com menos talento do que você, avançam – e o que elas enxergam que você ainda não viu.",
  },
  {
    number: 2,
    text: "O padrão relacional de bloqueio que trava dinheiro, carreira e crescimento depois dos 30.",
  },
  {
    number: 3,
    text: "Como reorganizar suas relações sem depender de anos de terapia ou análises intermináveis.",
  },
  {
    number: 4,
    text: "Como se tornar mais um improvável que deu certo, com permissão para construir liberdade real e destravar sua vida.",
  },
];

export default function SecondSection() {
  return (
    <section
      className={`
				w-full
				min-h-[459px]
				h-[459px]
				md:h-[1150px]
				md:min-h-[1150px]
				bg-[url('/images/v1/bg-two-mobile.webp')]
				md:bg-[url('/images/v2/bg-second-fold.webp')]
				bg-no-repeat
				bg-center
				bg-cover
				flex
        flex-col
				justify-center
				items-start
				md:items-center
			`}
    >
      <div className="w-full max-w-[1060px] mx-auto">
        <div className="text-[#F4F0E1] font-spectral max-w-[667px] w-full">
          <p className="font-spectral font-extrabold text-[40px] leading-[56px] tracking-[0%]">
            O que elas fizeram de diferente?
          </p>
          <p className="font-spectral font-normal not-italic text-[18px] leading-[24px] tracking-[0%] align-middle my-8">
            <span className="font-bold">Identificaram e corrigiram</span> um tipo de relação que a maioria das pessoas nem sabe que existe – mas controla silenciosamente a forma como você lida com dinheiro, oportunidades e crescimento.
          </p>
          <p className="font-spectral font-normal not-italic text-[40px] leading-[56px] tracking-[0%]">
            O que você vai resolver durante <br /> <span className="font-extrabold">O Levante dos Improváveis:</span>
          </p>
          <div className="mt-8 flex flex-col gap-4">
            {itemsToResolve.map((item) => (
              <div
                key={item.number}
                className="bg-[url('/images/v2/bg-list.webp')] bg-no-repeat bg-center bg-cover w-[661px] h-[108px] py-7 px-12 flex items-center gap-8"
              >
                <p className="font-spectral font-semibold text-[58px] text-center text-[#006D71]">{item.number}</p>
                <p className="font-spectral font-normal not-italic text-[18px] leading-[24px] tracking-[0%] align-middle text-[#104448]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center mt-24">
          <button className="w-full max-w-[300px] h-[50px] bg-[#C0964B] text-white text-sm font-bold mt-8 transition-all duration-200 hover:bg-[#e9cb84] hover:text-black">
            PARTICIPAR GRATUITAMENTE
          </button>
        </div>
      </div>
    </section>
  );
}
