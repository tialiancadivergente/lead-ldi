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
    id: "h0",
    isPicture: false,
    isLogo: true,

    title: (
      <>
        CONHEÇA O PLANO QUE "IMPROVÁVEIS" ESTÃO USANDO PARA DESTRAVAR A VIDA FINANCEIRA DEPOIS DOS 30 – <span className="text-[#0A3740]">CORRIGINDO OS PADRÕES QUE IMPEDEM DE AVANÇAR.</span>
      </>
    ),

    text: (
      <>
        Segunda-feira, 23/03, às 20h &nbsp; • &nbsp; Ao vivo e sem replay
      </>
    ),
  },
];