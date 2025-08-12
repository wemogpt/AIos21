"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useCardTheme } from "@/components/providers/card-theme-provider"
import type { CardThemeConfig } from "@/types"

export function useLocalCardTheme() {
  const { theme: globalTheme } = useCardTheme()
  const [localTheme, setLocalTheme] = useState<CardThemeConfig>({
    ...globalTheme,
    frostedOpacity: globalTheme.frostedOpacity || "normal",
  })
  const [isCustomized, setIsCustomized] = useState(false)

  useEffect(() => {
    if (!isCustomized) {
      setLocalTheme({
        ...globalTheme,
        frostedOpacity: globalTheme.frostedOpacity || "normal",
      })
    }
  }, [globalTheme, isCustomized])

  const updateLocalTheme = (updater: React.SetStateAction<CardThemeConfig>) => {
    if (!isCustomized) setIsCustomized(true)
    setLocalTheme(updater)
  }

  const resetToGlobal = () => {
    setIsCustomized(false)
    setLocalTheme({
      ...globalTheme,
      frostedOpacity: globalTheme.frostedOpacity || "normal",
    })
  }

  return { localTheme, updateLocalTheme, resetToGlobal }
}
