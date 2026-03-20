export const TEMPERATURE_TAG_MAP: Record<string, number> = {
  'q': 120693,
  'm': 120693,
  'f': 120693,
  'o': 120700,
  'org': 120700
};

export const NORMALIZED_TEMPERATURE_VALUES = ["q", "f", "m", "org"] as const;

export type NormalizedTemperature =
  (typeof NORMALIZED_TEMPERATURE_VALUES)[number];

export const TEMPERATURE_TAG_MAP_ORO: Record<string, string> = {
  'q': '[LDI] ABR26 Quente',
  'm': '[LDI] ABR26 Morno',
  'f': '[LDI] ABR26 FRIO',
  'o': '[LDI] ABR26 ORGANICO',
  'org': '[LDI] ABR26 ORGANICO'
};

export const getTagIdByTemperature = (temperature: string): number | null => {
  return TEMPERATURE_TAG_MAP[temperature] || null;
};

export const getTagByTemperatureOro = (temperature: string): string | null => {
  return TEMPERATURE_TAG_MAP_ORO[temperature] || null;
};

export const isValidTemperature = (temperature: string): boolean => {
  return temperature in TEMPERATURE_TAG_MAP;
};

export const getValidTemperatures = (): string[] => {
  return Object.keys(TEMPERATURE_TAG_MAP);
};

export const normalizeTemperature = (
  value: string | string[] | undefined
): NormalizedTemperature | undefined => {
  const rawValue = Array.isArray(value) ? value[0] : value;
  if (!rawValue) return undefined;

  if (rawValue === "o") {
    return "org";
  }

  if (
    rawValue === "q" ||
    rawValue === "f" ||
    rawValue === "m" ||
    rawValue === "org"
  ) {
    return rawValue;
  }

  return undefined;
};
