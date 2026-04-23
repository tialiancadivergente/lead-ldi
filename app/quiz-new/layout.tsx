import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "O Levante dos Improváveis",
  description:
    "Não é sobre as pessoas mais talentosas. Não é sobre as mais preparadas. É um processo prático para destravar sua vida financeira depois dos 30 e corrigir relacionamentos que impedem sua permissão de ir mais longe.",
}

export default function QuizLayout({ children }: { children: ReactNode }) {
  return (
    <div className={inter.className}>
      <main>{children}</main>
      <Analytics />
    </div>
  );
}
