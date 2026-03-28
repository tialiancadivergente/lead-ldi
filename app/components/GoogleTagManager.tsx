"use client";

import { useEffect } from "react";
import TagManager from "react-gtm-module";
import { useParams, usePathname } from "next/navigation";

const GoogleTagManager = () => {
  const { temperature } = useParams();
  const pathname = usePathname();

  useEffect(() => {
    const defaultGtmId = "GTM-WKPB8M8L";
    const oroOrgGtmId = "";
    const normalizedTemperature = (
      Array.isArray(temperature) ? temperature[0] : temperature || ""
    ).toLowerCase();
    const normalizedPathname = (pathname || "").toLowerCase();
    const shouldSkipTagManager =
      normalizedTemperature === "o" ||
      normalizedTemperature === "org" ||
      normalizedPathname.startsWith("/redo");

    if (shouldSkipTagManager) {
      return;
    }

    const getGtmIdByPathname = (currentPathname: string) => {
      const isOroRoute = currentPathname.includes("/ora");
      const isEligibleTemperature =
        normalizedTemperature === "o" || normalizedTemperature === "org";

      if (isOroRoute && isEligibleTemperature) {
        return oroOrgGtmId;
      }

      return defaultGtmId;
    };

    const gtmIdByPath = getGtmIdByPathname(normalizedPathname);
    const gtmId = gtmIdByPath !== defaultGtmId ? gtmIdByPath : defaultGtmId;

    TagManager.initialize({ gtmId });
  }, [pathname, temperature]);

  return null;
};

export default GoogleTagManager;
