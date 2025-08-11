export interface ColorConfig {
  id: number
  name: string
  value: string
  enabled: boolean
}

export interface PresetConfig {
  name: string
  colors: [string, string, string]
}

export interface ChartPaletteConfig {
  name: string
  colors: string[]
}

export interface CardThemeConfig {
  background: string
  backgroundStyle: "solid" | "frosted" | "none"
  titleColor: string
  textColor: string
  fontFamily: string
}

export interface CardThemePreset {
  name: string
  config: CardThemeConfig
}
