export const SUPPORTED_LANGS = {
  en: "English",
  az: "Azerbaijani",
} as const;

export type ISupportedLangs = keyof typeof SUPPORTED_LANGS;
