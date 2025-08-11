import type { CardThemePreset } from "@/types"

export const cardThemePresets: CardThemePreset[] = [
  {
    name: "默认",
    config: {
      background: "#ffffff",
      backgroundStyle: "frosted",
      titleColor: "#1f2937",
      textColor: "#4b5563",
      fontFamily: "system-ui, sans-serif",
    },
  },
  {
    name: "深色",
    config: {
      background: "#111827",
      backgroundStyle: "frosted",
      titleColor: "#f9fafb",
      textColor: "#d1d5db",
      fontFamily: "system-ui, sans-serif",
    },
  },
  {
    name: "经典",
    config: {
      background: "#f5f5f4",
      backgroundStyle: "solid",
      titleColor: "#44403c",
      textColor: "#57534e",
      fontFamily: "Georgia, serif",
    },
  },
  {
    name: "透明",
    config: {
      background: "#ffffff",
      backgroundStyle: "none",
      titleColor: "#1f2937",
      textColor: "#4b5563",
      fontFamily: "system-ui, sans-serif",
    },
  },
]
