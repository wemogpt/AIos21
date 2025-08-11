import type React from "react"
// Re-exporting core types for convenience within the SDK
export type { CardThemeConfig, CardThemePreset } from "@ipollo/core-config"

// In the future, any types that are exclusively used within the card-sdk
// can be defined here.

import type { CardThemeConfig } from "@ipollo/core-config"

export interface BaseCardProps {
  className?: string
  children: React.ReactNode
  style?: React.CSSProperties
  theme?: Partial<CardThemeConfig>
}

// Add other card-specific types here
export interface AiLearningCardProps {
  title: string
  description: string
  imageUrl: string
  tags: string[]
  dict: Record<string, any>
}
