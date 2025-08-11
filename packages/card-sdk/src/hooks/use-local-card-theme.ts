"use client"

import { useState, useCallback, useContext } from "react"
import { CardThemeContext } from "@/components/providers/card-theme-provider"
import type { CardThemeConfig } from "@ipollo/core-config"

export function useLocalCardTheme() {
  const globalTheme = useContext(CardThemeContext)
  if (!globalTheme) {
    throw new Error("useLocalCardTheme must be used within a CardThemeProvider")
  }

  const [localTheme, setLocalTheme] = useState<CardThemeConfig>(globalTheme.theme)

  const updateLocalTheme = useCallback((newTheme: Partial<CardThemeConfig>) => {
    setLocalTheme((prev) => ({ ...prev, ...newTheme }))
  }, [])

  const resetToGlobal = useCallback(() => {
    setLocalTheme(globalTheme.theme)
  }, [globalTheme.theme])

  // Effect to sync with global changes if needed could be added here
  // For now, it initializes to global and can be reset.

  return {
    localTheme,
    updateLocalTheme,
    resetToGlobal,
  }
}
