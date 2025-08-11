import "server-only"
import type { Locale } from "@ipollo/core-config"

const dictionaries = {
  en: () => import("@/lib/dictionaries/en.json").then((module) => module.default),
  zh: () => import("@/lib/dictionaries/zh.json").then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => {
  const loader = dictionaries[locale] || dictionaries.en
  return loader()
}
