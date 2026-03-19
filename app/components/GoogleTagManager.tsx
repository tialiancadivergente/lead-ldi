"use client";

import { useEffect } from "react";
import TagManager from "react-gtm-module";
import useUserIP from "../hooks/useUserIP";
import { useParams } from "next/navigation";


const GoogleTagManager = () => {
    const { temperature } = useParams();
    console.log('temperature =>', temperature);
    const userIp = useUserIP(); // Captura o IP no carregamento
    console.log('meu ip =>', userIp);
    useEffect(() => {
        const defaultGtmId = 'GTM-T6FPRPPT';
        const oroOrgGtmId = '';
        const normalizedTemperature = (Array.isArray(temperature) ? temperature[0] : temperature || '').toLowerCase();
        const shouldSkipTagManager = normalizedTemperature === 'o' || normalizedTemperature === 'org';

        if (shouldSkipTagManager) return;

        const getGtmIdByPathname = (pathname: string) => {
            const normalizedPath = pathname.toLowerCase();
            const isOroRoute = normalizedPath.includes('/ora');
            const isEligibleTemperature = normalizedTemperature === 'o' || normalizedTemperature === 'org';
            if (isOroRoute && isEligibleTemperature) return oroOrgGtmId;
            return defaultGtmId;
        };

        
        const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
        const gtmIdByPath = getGtmIdByPathname(pathname);
        const gtmId = gtmIdByPath !== defaultGtmId
            ? gtmIdByPath
            : defaultGtmId;

        console.log('gtmId =====> ', gtmId)
        TagManager.initialize({ gtmId });
    }, [temperature]);

    return null;
};

export default GoogleTagManager;
