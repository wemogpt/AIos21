"use client"
import type React from "react"
import type { CardThemeConfig } from "@/types"
import { useLocalCardTheme } from "@/hooks/use-local-card-theme"
import { FrostedEffectProvider } from "@/components/providers/frosted-effect-provider"

interface BaseCardProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  theme?: Partial<CardThemeConfig>
}

export function BaseCard({ children, className = "", style = {}, theme = {} }: BaseCardProps) {
  const { effectiveTheme } = useLocalCardTheme(theme)

  const cardStyle: React.CSSProperties = {
    backgroundColor: effectiveTheme.frosted ? "transparent" : effectiveTheme.backgroundColor,
    borderColor: effectiveTheme.borderColor,
    borderRadius: effectiveTheme.borderRadius,
    boxShadow: effectiveTheme.boxShadow,
    color: effectiveTheme.textColor,
    fontFamily: effectiveTheme.fontFamily,
    fontSize: effectiveTheme.fontSize,
    padding: effectiveTheme.padding,
    borderWidth: "1px",
    borderStyle: "solid",
    position: "relative",
    overflow: "hidden",
    ...style,
  }

  return (
    <div className={`transition-all duration-300 ${className}`} style={cardStyle}>
      {effectiveTheme.frosted && (
        <FrostedEffectProvider
          backgroundColor={effectiveTheme.backgroundColor}
          opacity={effectiveTheme.frostedOpacity}
          blur={effectiveTheme.frostedBlur}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
