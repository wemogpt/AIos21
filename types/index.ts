import type React from "react"
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
  frostedOpacity?: "normal" | "high"
  titleColor: string
  textColor: string
  fontFamily: string
}

export interface CardThemePreset {
  name: string
  config: CardThemeConfig
}

export interface CardAction {
  type: "navigate" | "modal" | "custom"
  target?: string
  data?: any
}

export interface CardConfig {
  name: string
  category: string
  component: React.ComponentType<any>
  // 业务流配置
  businessFlow?: {
    hasDetailPage?: boolean
    hasModal?: boolean
    actions?: string[]
  }
  // 开发者信息
  developer?: {
    name: string
    version: string
    description: string
  }
}

export interface BusinessCardProps {
  data?: any
  onAction?: (action: string, data: any) => void
  [key: string]: any
}
