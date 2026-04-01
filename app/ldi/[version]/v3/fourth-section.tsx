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
				<div className="flex flex-col gap-4 max-w-[517px] w-full">

					<p className="text-[#D3CAC0] font-spectral text-[25px] md:text-[35px] text-center md:text-left leading-[125%] font-bold">
						QUEM VAI SER O SEU MENTOR NESSA JORNADA?
					</p>

					<div className="mt-[450px] md:mt-0 w-full max-w-[350px] mx-auto flex flex-col gap-4 md:max-w-[517px]">

						<p className="text-[#C0964B] font-spectral text-[30px] text-left leading-[125%] font-bold md:mt-0">
							Ramon Galimberti
						</p>

						<p className="text-[#F4F0E1] font-mulish text-[12px] text-left leading-[135%] font-semibold">
							Engenheiro, mestre e mentor de desenvolvimento humano. Durante muito tempo, viveu a frustração de se esforçar, tentar, insistir — e mesmo assim ver a vida parar no quase. O dinheiro não permanecia, os planos não se firmavam, o relacionamento não deu certo e ele chegou a usar o ticket do pai para fazer compra no mercado e virar o mês. Era divorciado, estava travado em várias áreas da vida e carregava a sensação de que fazia muito, mas avançava pouco.
						</p>

						<p className="text-[#F4F0E1] font-mulish text-[12px] text-left leading-[135%] font-semibold">
							Foi na busca por entender por que isso acontecia que Ramon encontrou uma resposta que mudou sua história. A partir daí, uniu sua base lógica em engenharia, seu olhar para o comportamento humano e sua experiência prática para desenvolver uma forma própria de identificar e corrigir os padrões invisíveis que travam dinheiro, relacionamentos, decisões e liberdade.
						</p>

						<p className="text-[#F4F0E1] font-mulish text-[12px] text-left leading-[135%] font-semibold">
							<span className="text-[#C0964B]">
								Por que pessoas capazes continuam presas no quase.
							</span>{" "}
							Hoje, Ramon é casado, construiu uma nova história, tornou-se o primeiro brasileiro autorizado a aplicar a Teoria da Permissão e tem mais de 160 mil pessoas acompanhando seu trabalho. Já foi convidado para compartilhar essa mensagem em emissoras como SBT, Band e Record porque fala de algo que muita gente vive, mas quase ninguém sabe explicar.
						</p>

						<p className="text-[#F4F0E1] font-mulish text-[12px] text-left leading-[135%] font-semibold">
							No Levante dos Improváveis, Ramon conduz uma experiência para quem está cansado de repetir estagnação e quer entender o que realmente precisa ser corrigido para avançar.
						</p>

						<button
							onClick={handleScroll}
							className="mt-[12px] mb-[12px] w-full h-[64px] md:h-[64px] rounded-[8px] font-mulish font-extrabold text-[14px] md:text-[16px] leading-[145%] uppercase text-black transition-all hover:brightness-110 border border-[#FCF3D4] [background:linear-gradient(90deg,_#DFD2A7_0%,_#FCF3D4_100%)] shadow-[0px_6px_18.9px_0px_#F7EDCC85]">
							PARTICIPAR GRATUITAMENTE
						</button>

					</div>
				</div>
			</div>
		</section>
	);
}
