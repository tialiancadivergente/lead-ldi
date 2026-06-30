"use client";

import { useParams } from "next/navigation";
import SplashScreenOro from "@/app/components/SplashScreen/SplashScreenOro";
import Formv1 from "@/app/ldi/[version]/v1";
import Formv2 from "@/app/ldi/[version]/v2";
import Formv3 from "@/app/ldi/[version]/v3";
import Formv4 from "@/app/ldi/[version]/v4";
import Formv5 from "@/app/ldi/[version]/v5";
import Formv6 from "@/app/ldi/[version]/v6";
import Formv7 from "@/app/ldi/[version]/v7";
import Formv8 from "@/app/ldi/[version]/v8";
import Formv9 from "@/app/ldi/[version]/v9";
import Formv10 from "@/app/ldi/[version]/v10";

export default function Home() {
  const { version } = useParams();

  if (version === "v2") {
    return (
      <SplashScreenOro>
        <Formv2 />
      </SplashScreenOro>
    );
  }

    if (version === "v3") {
    return (
      <SplashScreenOro>
        <Formv3 />
      </SplashScreenOro>
    );
  }

      if (version === "v4") {
    return (
      <SplashScreenOro>
        <Formv4 />
      </SplashScreenOro>
    );
  }

      if (version === "v5") {
    return (
      <SplashScreenOro>
        <Formv5 />
      </SplashScreenOro>
    );
  }

        if (version === "v6") {
    return (
      <SplashScreenOro>
        <Formv6 />
      </SplashScreenOro>
    );
  }

        if (version === "v7") {
    return (
      <SplashScreenOro>
        <Formv7 />
      </SplashScreenOro>
    );
  }

        if (version === "v8") {
    return (
      <SplashScreenOro>
        <Formv8 />
      </SplashScreenOro>
    );
  }

  if (version === "v9") {
    return (
      <SplashScreenOro>
        <Formv9 />
      </SplashScreenOro>
    );
  }

  if (version === "v10") {
    return (
      <SplashScreenOro>
        <Formv10 />
      </SplashScreenOro>
    );
  }

  return (
    <SplashScreenOro>
      <Formv1 />
    </SplashScreenOro>
  );
}
