"use client"

import type React from "react"
import { Card, type CardProps } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useLocalCardTheme } from "@/hooks/use-local-card-theme"
import { LocalCardThemeEditor } from "@/components/theme/local-card-theme-editor"

// Optimal values for the "frosted glass" effect
const FROSTED_OPACITY = 0.6
const FROSTED_BLUR_PX = 20

function hexToRgba(hex: string, alpha: number): string {
  if (!hex.startsWith("#")) return hex
  const r = Number.parseInt(hex.slice(1, 3), 16)
  const g = Number.parseInt(hex.slice(3, 5), 16)
  const b = Number.parseInt(hex.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export function BaseCard({ className, children, ...props }: CardProps) {
  const { localTheme, updateLocalTheme, resetToGlobal } = useLocalCardTheme()

  const isFrosted = localTheme.backgroundStyle === "frosted"
  const isSolid = localTheme.backgroundStyle === "solid"
  const isNone = localTheme.backgroundStyle === "none"

  const cardStyle: React.CSSProperties = {
    // @ts-ignore
    "--card-title-color": localTheme.titleColor,
    "--card-text-color": localTheme.textColor,
    fontFamily: localTheme.fontFamily,
    backgroundColor: isNone ? "transparent" : hexToRgba(localTheme.background, isFrosted ? FROSTED_OPACITY : 1),
    backdropFilter: isFrosted ? `blur(${FROSTED_BLUR_PX}px)` : "none",
  }

  return (
    <Card
      style={cardStyle}
      className={cn(
        "relative group transition-all duration-300",
        {
          "border border-white/20 shadow-[0_12px_48px_0_rgba(31,38,135,0.12)]": isFrosted,
          "border shadow-2xl": isSolid,
          "border-none shadow-none": isNone,
        },
        className,
      )}
      {...props}
    >
      {children}
      <LocalCardThemeEditor theme={localTheme} setTheme={updateLocalTheme} resetToGlobal={resetToGlobal} />
    </Card>
  )
}
