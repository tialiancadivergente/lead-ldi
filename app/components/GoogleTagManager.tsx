"use client";

import { Suspense, useEffect } from "react";
import TagManager from "react-gtm-module";
import { useParams, usePathname, useSearchParams } from "next/navigation";

const GoogleTagManagerInner = () => {
  const { temperature } = useParams();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const defaultGtmId = "GTM-WKPB8M8L";
    const oroOrgGtmId = "GTM-MF9LVRFF";
    const oraOrgGtmId = "";
    const routeTemperature = Array.isArray(temperature)
      ? temperature[0]
      : temperature || "";
    const queryTemperature = searchParams?.get("temperature") || "";
    const normalizedTemperature = (
      routeTemperature || queryTemperature
    ).toLowerCase();
    const normalizedPathname = (pathname || "").toLowerCase();
    const shouldSkipTagManager =
      normalizedPathname.startsWith("/redo");

    if (shouldSkipTagManager) {
      return;
    }

    const getGtmIdByPathname = (currentPathname: string) => {
      const isOraRoute = currentPathname.includes("/ora");
      const isEligibleTemperature =
        normalizedTemperature === "o" || normalizedTemperature === "org";

      if (isOraRoute) {
        return oraOrgGtmId;
      }

      if (isEligibleTemperature) {
        return oroOrgGtmId;
      }

      return defaultGtmId;
    };
    const gtmIdByPath = getGtmIdByPathname(normalizedPathname);
    const gtmId = gtmIdByPath !== defaultGtmId ? gtmIdByPath : defaultGtmId;

    console.log("gtmId ===>", gtmId);

    TagManager.initialize({ gtmId });
  }, [pathname, temperature, searchParams]);

  return null;
};

const GoogleTagManager = () => {
  return (
    <Suspense fallback={null}>
      <GoogleTagManagerInner />
    </Suspense>
  );
};

export default GoogleTagManager;
