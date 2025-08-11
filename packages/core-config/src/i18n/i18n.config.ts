// This is the critical file that was missing or not found.
// It defines the supported locales for the entire application.
export const i18n = {
  defaultLocale: "en",
  locales: ["en", "zh"],
} as const

export type Locale = (typeof i18n)["locales"][number]
