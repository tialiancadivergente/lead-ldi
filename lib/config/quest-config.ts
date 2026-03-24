export const DEFAULT_QUEST_FORM_VERSION_ID =
  "2228a3ba-b79e-41b0-90a0-47cac5816209";

const QUEST_WHATSAPP_URL_BY_TEMPERATURE = {
  f: "https://redirects.aliancadivergente.com.br/ldi",
  org: "https://sendflow.click/i/ldi-org",
  o: "https://sendflow.click/i/ldi-org",
  m: "https://redirects.aliancadivergente.com.br/ldi",
  q: "https://redirects.aliancadivergente.com.br/ldi",
} as const;

type QuestTesteTemperatureKey = keyof typeof QUEST_WHATSAPP_URL_BY_TEMPERATURE;

export function resolveQuestTesteWhatsappUrl(temperature: string): string {
  const normalizedTemperature = temperature.toLowerCase().trim();
  const validKeys = Object.keys(
    QUEST_WHATSAPP_URL_BY_TEMPERATURE
  ) as QuestTesteTemperatureKey[];

  const resolvedKey = validKeys.includes(normalizedTemperature as QuestTesteTemperatureKey)
    ? (normalizedTemperature as QuestTesteTemperatureKey)
    : "f";

  return QUEST_WHATSAPP_URL_BY_TEMPERATURE[resolvedKey];
}
