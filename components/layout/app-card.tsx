"use client"

import type React from "react"

import type { HTMLAttributes } from "react"
import { useCardTheme } from "@/components/providers/card-theme-provider"
import { cn } from "@/lib/utils"
import { useLocalCardTheme } from "@/hooks/use-local-card-theme"
import { LocalCardThemeEditor } from "@/components/theme/local-card-theme-editor"

interface AppCardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  disableLocalTheme?: boolean
}

export function AppCard({ className, children, disableLocalTheme = false, ...props }: AppCardProps) {
  const { localTheme, updateLocalTheme, resetToGlobal } = useLocalCardTheme()
  const { theme: globalTheme } = useCardTheme()
  const theme = disableLocalTheme ? globalTheme : localTheme

  const cardStyle: React.CSSProperties = {
    "--card-title-color": theme.titleColor,
    "--card-text-color": theme.textColor,
    "--card-background": theme.background,
    fontFamily: theme.fontFamily,
    color: theme.textColor, // 直接应用文本颜色
    ...props.style,
  }

  const backgroundStyle: React.CSSProperties = {}
  if (theme.backgroundStyle === "solid") {
    backgroundStyle.backgroundColor = theme.background
  } else if (theme.backgroundStyle === "frosted") {
    const hex = theme.background.replace("#", "")
    const r = Number.parseInt(hex.substring(0, 2), 16)
    const g = Number.parseInt(hex.substring(2, 4), 16)
    const b = Number.parseInt(hex.substring(4, 6), 16)

    const opacity = theme.frostedOpacity || "normal"
    let bgOpacity: number
    let blurAmount: string
    let borderOpacity: number

    switch (opacity) {
      case "high":
        bgOpacity = 0.2
        blurAmount = "blur(20px)"
        borderOpacity = 0.1
        break
      default: // normal
        bgOpacity = 0.6
        blurAmount = "blur(16px)"
        borderOpacity = 0.2
        break
    }

    backgroundStyle.backgroundColor = `rgba(${r}, ${g}, ${b}, ${bgOpacity})`
    backgroundStyle.backdropFilter = `${blurAmount} saturate(180%)`
    backgroundStyle.WebkitBackdropFilter = `${blurAmount} saturate(180%)`
    backgroundStyle.border = `1px solid rgba(255, 255, 255, ${borderOpacity})`
    backgroundStyle.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.1)"
  } else {
    backgroundStyle.backgroundColor = "transparent"
    backgroundStyle.border = "none"
    backgroundStyle.boxShadow = "none"
    backgroundStyle.backdropFilter = "none"
    backgroundStyle.WebkitBackdropFilter = "none"
  }

  return (
    <div
      className={cn(
        "relative group rounded-xl transition-all duration-300 flex flex-col",
        theme.backgroundStyle !== "none" && "bg-card text-card-foreground shadow-sm border",
        className,
      )}
      style={{ ...cardStyle, ...backgroundStyle }}
      {...props}
    >
      <div
        className="flex flex-col h-full"
        style={{
          color: theme.textColor,
        }}
      >
        {/* 标题样式应用 */}
        <style jsx>{`
          .group [data-slot="card-title"],
          .group h1, .group h2, .group h3, .group h4, .group h5, .group h6 {
            color: ${theme.titleColor} !important;
          }
          .group [data-slot="card-description"],
          .group p, .group span:not(.button *) {
            color: ${theme.textColor} !important;
          }
        `}</style>
        {children}
      </div>
      {!disableLocalTheme && (
        <LocalCardThemeEditor theme={localTheme} setTheme={updateLocalTheme} resetToGlobal={resetToGlobal} />
      )}
    </div>
  )
}
