import type { ReactNode } from "react";

interface IHeadline {
  id: number | string;
  isPicture: boolean;
  isLogo: boolean;
  title: ReactNode;
  text: ReactNode;
}

export const Headline: IHeadline[] = [
  {
    id: "h1",
    isPicture: false,
    isLogo: true,

    title: (
      <>
        CONHEÇA O PLANO QUE "IMPROVÁVEIS" ESTÃO USANDO PARA DESTRAVAR A VIDA FINANCEIRA DEPOIS DOS 30 – <span className="text-[#C0964B] md:text-[#0A3740]">CORRIGINDO OS PADRÕES QUE IMPEDEM DE AVANÇAR.</span>
      </>
    ),

    text: (
      <>
        Segunda-feira, 23/03, às 20h &nbsp; • &nbsp; Ao vivo e sem replay
      </>
    ),
  },
  {
    id: "h2",
    isPicture: false,
    isLogo: true,

    title: (
      <>
        UM PROCESSO PRÁTICO PARA DESTRAVAR SUA VIDA FINANCEIRA DEPOIS DOS 30. <span className="text-[#C0964B] md:text-[#0A3740]">CORRIGINDO OS PADRÕES DE CONVÍVIO QUE FREIAM SEUS RESULTADOS SEM VOCÊ PERCEBER.</span>
      </>
    ),

    text: (
      <>
        Segunda-feira, 23/03, às 20h &nbsp; • &nbsp; Ao vivo e sem replay
      </>
    ),
  },
  {
    id: "h3",
    isPicture: false,
    isLogo: true,

    title: (
      <>
        <span className="text-[#C0964B] md:text-[#0A3740]">Livre-se dos padrões que travam sua vida financeira,</span> mesmo com todo seu esforço, capacidade e dedicação.
        <p className="mt-4">Ou ignore este movimento e repita o mesmo erro por <span className="text-[#C0964B] md:text-[#0A3740]">mais 10 anos…</span></p>
      </>
    ),

    text: (
      <>
        Segunda-feira, 23/03, às 20h &nbsp; • &nbsp; Ao vivo e sem replay
      </>
    ),
  },
];
