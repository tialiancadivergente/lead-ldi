"use client";

import { useEffect } from "react";
import TagManager from "react-gtm-module";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: (...args: unknown[]) => void;
  }
}

type FqbShim = ((...args: unknown[]) => void) & {
  queue: unknown[][];
  loaded?: boolean;
  version?: string;
};

interface RedoTrackingProps {
  source: string;
  gtmId: string | null;
  metaPixelId: string;
}

function ensureMetaPixelScript(): void {
  if (typeof window === "undefined" || document.getElementById("meta-pixel-base")) {
    return;
  }

  const script = document.createElement("script");
  script.id = "meta-pixel-base";
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);
}

function ensureMetaPixelBootstrap(): void {
  if (typeof window === "undefined" || window.fbq) {
    return;
  }

  const fbqShim = ((...args: unknown[]) => {
    fbqShim.queue.push(args);
  }) as FqbShim;

  fbqShim.queue = [];
  fbqShim.loaded = true;
  fbqShim.version = "2.0";

  window.fbq = fbqShim;
  window._fbq = fbqShim;
}

export default function RedoTracking({
  source,
  gtmId,
  metaPixelId,
}: RedoTrackingProps) {
  useEffect(() => {
    if (gtmId) {
      TagManager.initialize({ gtmId });
    }
  }, [gtmId]);

  useEffect(() => {
    if (typeof window === "undefined" || !metaPixelId) {
      return;
    }

    ensureMetaPixelBootstrap();
    ensureMetaPixelScript();

    if (!window.fbq) {
      return;
    }

    window.fbq("init", metaPixelId);
    window.fbq("track", "PageView");
    window.fbq("trackCustom", "RedoPageView", {
      source,
      path: window.location.pathname,
    });
  }, [metaPixelId, source]);

  return null;
}
