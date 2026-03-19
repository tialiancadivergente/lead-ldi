export const TEMPERATURE_TAG_MAP: Record<string, number> = {
  'q': 120681,
  'm': 120681,
  'f': 120681,
  'o': 120695,
  'org': 120695
};

export const NORMALIZED_TEMPERATURE_VALUES = ["q", "f", "m", "org"] as const;

export type NormalizedTemperature =
  (typeof NORMALIZED_TEMPERATURE_VALUES)[number];

export const TEMPERATURE_TAG_MAP_ORO: Record<string, string> = {
  'q': '[ORA] MAR26 Quente',
  'm': '[ORA] MAR26 Morno',
  'f': '[ORA] MAR26 FRIO',
  'o': '[ORA] MAR26 ORGANICO',
  'org': '[ORA] MAR26 ORGANICO'
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
