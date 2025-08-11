import type { ChartPaletteConfig } from "@/types"

export const chartPalettes: ChartPaletteConfig[] = [
  {
    name: "商务灰",
    colors: ["#1f2937", "#4b5563", "#6b7280", "#9ca3af", "#d1d5db"],
  },
  {
    name: "默认",
    colors: ["#3b82f6", "#10b981", "#ef4444", "#8b5cf6", "#f97316"],
  },
  {
    name: "科技蓝",
    colors: ["#0369a1", "#0ea5e9", "#7dd3fc", "#e0f2fe", "#0c4a6e"],
  },
  {
    name: "活力橙",
    colors: ["#f97316", "#fb923c", "#fdba74", "#fed7aa", "#c2410c"],
  },
  {
    name: "柔和",
    colors: ["#a5b4fc", "#7dd3fc", "#6ee7b7", "#fde047", "#fca5a5"],
  },
]

export const chartThemes = {
  zinc: {
    name: "商务灰",
    colors: ["#1f2937", "#4b5563", "#6b7280", "#9ca3af", "#d1d5db"],
  },
  default: {
    name: "默认",
    colors: ["#3b82f6", "#10b981", "#ef4444", "#8b5cf6", "#f97316"],
  },
  blue: {
    name: "科技蓝",
    colors: ["#0369a1", "#0ea5e9", "#7dd3fc", "#e0f2fe", "#0c4a6e"],
  },
  orange: {
    name: "活力橙",
    colors: ["#f97316", "#fb923c", "#fdba74", "#fed7aa", "#c2410c"],
  },
  soft: {
    name: "柔和",
    colors: ["#a5b4fc", "#7dd3fc", "#6ee7b7", "#fde047", "#fca5a5"],
  },
}

export const chartColors = {
  light: {
    primary: "#3b82f6",
    secondary: "#93c5fd",
    tertiary: "#dbeafe",
  },
  dark: {
    primary: "#60a5fa",
    secondary: "#3b82f6",
    tertiary: "#1e40af",
  },
}

export const chartTheme = {
  grid: {
    stroke: "#e0e0e0",
    strokeDasharray: "3 3",
  },
  axis: {
    label: {
      fill: "#666666",
      fontSize: 12,
    },
    tick: {
      fill: "#999999",
      fontSize: 10,
    },
  },
  tooltip: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    textColor: "#ffffff",
    borderRadius: "4px",
  },
}

export type ChartTheme = (typeof chartThemes)["zinc"]
export type ChartThemeConfig = {
  name: string
  theme: ChartTheme
}
