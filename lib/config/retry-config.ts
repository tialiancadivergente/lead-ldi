export type RetrySource = "traffic" | "organic";

export interface RetryChannelConfig {
  source: RetrySource;
  label: string;
  activeCampaignTag: string;
  activeCampaignTagId: string;
  whatsappUrl: string;
  metaPixelId: string;
  gtmId: string | null;
}

export const RETRY_CHANNEL_CONFIG: Record<RetrySource, RetryChannelConfig> = {
  traffic: {
    source: "traffic",
    label: "Traffic",
    activeCampaignTag: "[LDI] ABR26",
    activeCampaignTagId: "120693",
    whatsappUrl: "https://redirects.aliancadivergente.com.br/ldi",
    metaPixelId: "2197480187447654",
    gtmId: "GTM-WKPB8M8L",
  },
  organic: {
    source: "organic",
    label: "Organic",
    activeCampaignTag: "[LDI] ABR26 ORG",
    activeCampaignTagId: "120700",
    whatsappUrl: "https://redirects.aliancadivergente.com.br/ldi-org",
    metaPixelId: "1748628899086420",
    gtmId: null,
  },
};

export function resolveRetrySource(
  value: string | null | undefined
): RetrySource {
  const normalizedValue = (value ?? "").toLowerCase().trim();

  if (
    normalizedValue === "organic" ||
    normalizedValue === "org" ||
    normalizedValue === "o"
  ) {
    return "organic";
  }

  return "traffic";
}

export function getRetryChannelConfig(
  value: string | null | undefined
): RetryChannelConfig {
  return RETRY_CHANNEL_CONFIG[resolveRetrySource(value)];
}
