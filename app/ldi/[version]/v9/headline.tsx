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
        LIVRE-SE DOS PADRÕES QUE ATROFIAM SUA VIDA FINANCEIRA, MESMO COM TODO SEU
        ESFORÇO, CAPACIDADE E DEDICAÇÃO.

        <p className="mt-4">
          OU IGNORE ESTE MOVIMENTO E REPITA O MESMO ERRO POR MAIS 10 ANOS…
        </p>
      </>
    ),

    text: <></>,
  },
];
