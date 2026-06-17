export const TEMPERATURE_MAP: Record<string, string> = {
  'q': 'q',
  'm': 'm',
  'f': 'f',
  't': 't',
  'o': 'o',
  'org': 'org'
};

export const TEMPERATURE_TAG_MAP: Record<string, number> = {
  'q': 120900,
  'm': 120900,
  'f': 120900,
  't': 120900,
  'o': 120899,
  'org': 120899
};

export const NORMALIZED_TEMPERATURE_VALUES = ["q", "f", "m", "org", "t"] as const;

export type NormalizedTemperature =
  (typeof NORMALIZED_TEMPERATURE_VALUES)[number];

export const TEMPERATURE_TAG_MAP_ORO: Record<string, string> = {
  'q': '[LDI] JUN26',
  'm': '[LDI] JUN26',
  'f': '[LDI] JUN26',
  't': '[LDI] JUN26',
  'o': '[LDI] JUN26 ORG',
  'org': '[LDI] JUN26 ORG'
};

export const getTagIdByTemperature = (
  temperature: string | null | undefined
): number => {
  if (temperature && temperature in TEMPERATURE_TAG_MAP) {
    return TEMPERATURE_TAG_MAP[temperature];
  }
  return TEMPERATURE_TAG_MAP["f"];
};

export function buildLdiLandingPath(
  routeParams: {
    version: string;
    headline: string;
    theme: string;
    slug?: string | string[];
  },
  temperatureSegment: string
): string {
  const { version, headline, theme, slug } = routeParams;
  const slugSegments = Array.isArray(slug)
    ? slug.filter(Boolean)
    : slug
      ? [String(slug)]
      : [];
  const slugPath =
    slugSegments.length > 0 ? `/${slugSegments.join("/")}` : "";
  return `/ldi/${version}/${headline}/${theme}/${temperatureSegment}${slugPath}`;
}

export function redirectIfUrlTemperatureNotInMap(
  temperatureParam: string | string[] | undefined,
  routeParams: {
    version: string;
    headline: string;
    theme: string;
    slug?: string | string[];
  },
  searchParamsToString: string,
  replace: (href: string) => void
): boolean {
  const raw = Array.isArray(temperatureParam)
    ? temperatureParam[0]
    : temperatureParam;
  if (!raw) return false;
  if (raw in TEMPERATURE_MAP) return false;

  const pathname = buildLdiLandingPath(routeParams, "f");
  const qs = searchParamsToString ? `?${searchParamsToString}` : "";
  replace(`${pathname}${qs}`);
  return true;
}

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
    rawValue === "org" ||
    rawValue === "t"
  ) {
    return rawValue;
  }

  return undefined;
};
