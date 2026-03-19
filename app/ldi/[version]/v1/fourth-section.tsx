"use client";

import React from "react";
import Image from "next/image";
import { handleScroll } from "@/lib/utils";

export default function FourthSection() {
	return (
		<section
			className="
				w-full
				min-h-[1180px]
				md:min-h-[862px]
				bg-[#071117]
				bg-[url('/images/ora/v1/quarta_dobra_mobile_teste.webp')]
				md:bg-[url('/images/v1/bg-ramon.webp')]
				bg-cover
				bg-center
				bg-no-repeat
				flex
				flex-col
				justify-center
				px-2
				pt-36
				pb-6
				md:px-4
				md:pt-16
				md:pb-8
			"
		>
			<div className="w-full max-w-[1156px] mx-auto flex items-start justify-end">
				<div className="flex flex-col gap-4 max-w-[517px] w-full">
					<p className="text-[#D3CAC0] font-spectral text-[35px] text-left leading-[125%] font-bold">
						QUEM VAI SER O SEU MENTOR NESSA JORNADA?
					</p>
					<p className="text-[#C0964B] font-spectral text-[30px] text-left leading-[125%] font-bold">
						Ramon Galimberti
					</p>
					<p className="text-[#F4F0E1] font-mulish text-[16px] text-left leading-[135%] font-semibold">
						Mentor da Aliança Divergente, comunidade com mais de 200 mil aliados no Brasil e no mundo. Formado em Engenharia, Ramon descobriu depois dos 30 que assumir controle financeiro e multiplicar ganhos não é questão de capacidade, mas de corrigir as relações que geram padrões nocivos.
					</p>
					<p className="text-[#F4F0E1] font-mulish text-[16px] text-left leading-[135%] font-semibold">
						<span className="text-[#C0964B]">Com 46.9K seguidores no YouTube e 280 vídeos,</span> Ramon desenvolveu um método sistemático para identificar e corrigir os padrões bloqueadores de permissão para você ter controle total sobre os acontecimentos da sua vida e ganhar mais dinheiro.
					</p>
					<p className="text-[#F4F0E1] font-mulish text-[16px] text-left leading-[135%] font-semibold">
						A missão de Ramon é clara: ajudar pessoas a corrigirem sua base interna para terem permissão de multiplicar seus ganhos e oportunidades de sucesso. Se você quer destravar sua vida, O Levante dos Improváveis é o primeiro passo.
					</p>
					<button
						onClick={handleScroll}
						className="mt-[12px] mb-[12px] w-full h-[64px] md:h-[64px] rounded-[8px] font-mulish font-extrabold text-[14px] md:text-[16px] leading-[145%] uppercase text-black transition-all hover:brightness-110 border border-[#FCF3D4] [background:linear-gradient(90deg,_#DFD2A7_0%,_#FCF3D4_100%)] shadow-[0px_6px_18.9px_0px_#F7EDCC85]">
						PARTICIPAR GRATUITAMENTE
					</button>
				</div>
			</div>
		</section >
	);
}