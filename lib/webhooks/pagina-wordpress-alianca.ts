import type { NormalizedTemperature } from "@/lib/temperature-utils";

export const PAGINA_WORDPRESS_ALIANCA_WEBHOOK_URL =
  "https://n8n-dev.awsales.io/webhook/pagina-wordpress-alianca";

export type PaginaWordpressAliancaWebhookPayload = {
  event: "custom_action";
  timestamp: string;
  source: { id: string; name: string };
  lead: { phone: string; email: string; name: string };
  utm: {
    source: string;
    campaign: string;
    medium: string;
    content: string;
    term: string;
  };
  metadata: {
    action_details: string;
    engagement_level: string;
    intent_level: string;
    emotional_tone: string;
    context_notes: string;
  };
};

export function formatBrDateTime(date: Date = new Date()): string {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

export function buildPaginaWordpressAliancaSourceKey(
  launch: string,
  season: string,
  temperatura: NormalizedTemperature | undefined
): string {
  return [launch, season, temperatura].filter(Boolean).join("-");
}

export function buildPaginaWordpressAliancaSourceName(
  launch: string,
  season: string
): string {
  return `[${launch}] ${season} - captura`;
}

export function buildPaginaWordpressAliancaPayload(input: {
  launch: string;
  season: string;
  temperatura: NormalizedTemperature | undefined;
  lead: { phone: string; email: string; name?: string };
  getUtmValue: (key: string) => string;
}): PaginaWordpressAliancaWebhookPayload {
  const sourceKey = buildPaginaWordpressAliancaSourceKey(
    input.launch,
    input.season,
    input.temperatura
  );
  const sourceName = buildPaginaWordpressAliancaSourceName(
    input.launch,
    input.season
  );

  return {
    event: "custom_action",
    timestamp: formatBrDateTime(),
    source: { id: sourceKey, name: sourceName },
    lead: {
      phone: input.lead.phone,
      email: input.lead.email,
      name: input.lead.name ?? "",
    },
    utm: {
      source: input.getUtmValue("utm_source"),
      campaign: input.getUtmValue("utm_campaign"),
      medium: input.getUtmValue("utm_medium"),
      content: input.getUtmValue("utm_content"),
      term: input.getUtmValue("utm_term"),
    },
    metadata: {
      action_details: "",
      engagement_level: "",
      intent_level: "",
      emotional_tone: "",
      context_notes: "",
    },
  };
}
