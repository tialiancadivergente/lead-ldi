"use client";

import { useParams } from "next/navigation";
import SplashScreenOro from "@/app/components/SplashScreen/SplashScreenOro";
import Formv1 from "@/app/ldi/[version]/v1";
import Formv2 from "@/app/ldi/[version]/v2";

export default function Home() {
  const { version } = useParams();

  if (version === "v2") {
    return (
      <SplashScreenOro>
        <Formv2 />
      </SplashScreenOro>
    );
  }

  return (
    <SplashScreenOro>
      <Formv1 />
    </SplashScreenOro>
  );
}
