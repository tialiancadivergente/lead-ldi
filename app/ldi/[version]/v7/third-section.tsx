"use client";

import Image from "next/image";

export default function ThirdSection() {
  return (
    <section
      aria-labelledby="third-section-title"
      className="
        w-full
        min-h-[1321px]
        md:min-h-[1154px]
        bg-[url('/images/v1/bg-three-mobile.webp')]
        md:bg-[url('/images/v4_ldi/bg-three.webp')]
        bg-no-repeat
        bg-center
        bg-cover
        px-5
        py-8
        md:py-14
        flex
        justify-center
      "
    >
      <div className="w-full max-w-[1090px] mx-auto md:py-10">
        <h2
          id="third-section-title"
          className="text-[#F4F0E1] font-spectral text-[20px] md:text-[35px] text-center leading-[125%] font-bold max-w-[667px] w-full mx-auto my-6"
        >
          O que elas fizeram de diferente?
        </h2>

        <p className="text-[#F4F0E1] font-mulish text-[16px] md:text-[18px] text-center leading-[125%] font-semibold w-full max-w-[667px] mx-auto my-6">
          Identificaram e corrigiram um tipo de relação que a maioria das
          pessoas nem sabe que existe – mas controla silenciosamente a forma
          como você lida com dinheiro, oportunidades e crescimento.
        </p>

        <h3 className="text-[#F4F0E1] font-spectral text-[20px] md:text-[35px] text-center leading-[125%] font-bold max-w-[667px] w-full mx-auto my-6">
          O que você vai resolver durante <br />O Levante dos Improváveis:
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-1 place-items-center">
          <div className="bg-[url('/images/v1/frame-mobile.png')] md:bg-[url('/images/v1/frame.png')] bg-no-repeat bg-center bg-cover w-full max-w-[194px] md:max-w-[270px] h-[276px] md:h-[290px]">
            <div className="flex items-center justify-center rounded-full font-bold font-spectral text-[32px] shadow-md mx-auto pt-4 md:pt-10">
              <span className="bg-gradient-to-b from-[#FFF1D8] to-[#C0964B] text-transparent bg-clip-text">
                01
              </span>
            </div>
            <p className="text-[#F4F0E1] font-mulish text-[16px] md:text-[18px] leading-[135%] font-semibold w-full md:px-8 px-4 mt-2 md:mt-4">
              Porque pessoas com menos talento do que você, avançam – e o que
              elas enxergam que você ainda não viu.
            </p>
          </div>

          <div className="bg-[url('/images/v1/frame-mobile.png')] md:bg-[url('/images/v1/frame.png')] bg-no-repeat bg-center bg-cover w-full max-w-[194px] md:max-w-[270px] h-[276px] md:h-[290px]">
            <div className="flex items-center justify-center rounded-full font-bold font-spectral text-[32px] shadow-md mx-auto pt-4 md:pt-10">
              <span className="bg-gradient-to-b from-[#FFF1D8] to-[#C0964B] text-transparent bg-clip-text">
                02
              </span>
            </div>
            <p className="text-[#F4F0E1] font-mulish text-[16px] md:text-[18px] leading-[135%] font-semibold w-full md:px-8 px-4 mt-2 md:mt-4">
              O padrão relacional de bloqueio que trava dinheiro, carreira e
              crescimento depois dos 30.
            </p>
          </div>

          <div className="bg-[url('/images/v1/frame-mobile.png')] md:bg-[url('/images/v1/frame.png')] bg-no-repeat bg-center bg-cover w-full max-w-[194px] md:max-w-[270px] h-[276px] md:h-[290px]">
            <div className="flex items-center justify-center rounded-full font-bold font-spectral text-[32px] shadow-md mx-auto pt-4 md:pt-10">
              <span className="bg-gradient-to-b from-[#FFF1D8] to-[#C0964B] text-transparent bg-clip-text">
                03
              </span>
            </div>
            <p className="text-[#F4F0E1] font-mulish text-[16px] md:text-[18px] leading-[135%] font-semibold w-full md:px-8 px-4 mt-2 md:mt-4">
              Como reorganizar suas relações sem depender de anos de tentativa
              e erro ou de respostas que nunca chegam depois dos 30.
            </p>
          </div>

          <div className="bg-[url('/images/v1/frame-mobile.png')] md:bg-[url('/images/v1/frame.png')] bg-no-repeat bg-center bg-cover w-full max-w-[194px] md:max-w-[270px] h-[276px] md:h-[290px]">
            <div className="flex items-center justify-center rounded-full font-bold font-spectral text-[32px] shadow-md mx-auto pt-4 md:pt-10">
              <span className="bg-gradient-to-b from-[#FFF1D8] to-[#C0964B] text-transparent bg-clip-text">
                04
              </span>
            </div>
            <p className="text-[#F4F0E1] font-mulish text-[16px] md:text-[18px] leading-[135%] font-semibold w-full md:px-8 px-4 mt-2 md:mt-4">
              Como se tornar mais um improvável que deu certo, com permissão
              para construir liberdade real e destravar sua vida.
            </p>
          </div>
        </div>

        <Image
          src="/images/v1/risk.png"
          alt=""
          aria-hidden="true"
          width={609}
          height={2}
          className="w-full max-w-[609px] mx-auto my-16 md:block hidden"
        />

        <h3 className="text-[#C0964B] font-spectral text-[20px] md:text-[35px] text-center leading-[125%] font-bold max-w-[667px] w-full mx-auto mt-10 md:mt-0">
          Esse encontro é para quem:
        </h3>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-between md:gap-4 gap-8 md:mt-16 mt-10">
          {[
            "Já investiu em muita capacitação e ainda sente a vida travada",
            "Sabe que tem capacidade de sobra, mas o resultado financeiro não acompanha",
            "Quer entender o que realmente está te segurando e corrigir isso",
            "Decidiu parar de tentar as mesmas soluções e se levantar contra tudo que te bloqueia",
          ].map((item, index) => (
            <div
              key={index}
              className={`flex md:flex-col flex-row items-start justify-start md:gap-1 gap-4 w-full ${
                index === 3 ? "max-w-[270px]" : "max-w-[250px]"
              }`}
            >
              <Image
                src="/images/v1/icon-check.png"
                alt=""
                aria-hidden="true"
                width={31}
                height={31}
              />
              <p className="text-[#F4F0E1] font-mulish text-[16px] md:text-[18px] leading-[135%] font-semibold w-full md:mt-4 mt-0">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}