"use client"

import type React from "react"
import { createContext, useContext, useState, useMemo, useCallback, type ReactNode } from "react"
import type { CardThemeConfig } from "@/types"
import { cardThemePresets } from "@/config/card-theme"

interface CardThemeContextType {
  theme: CardThemeConfig
  setTheme: React.Dispatch<React.SetStateAction<CardThemeConfig>>
  applyPreset: (preset: CardThemeConfig) => void
}

const CardThemeContext = createContext<CardThemeContextType | undefined>(undefined)

export function CardThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<CardThemeConfig>(cardThemePresets[0].config)

  const applyPreset = useCallback((presetConfig: CardThemeConfig) => {
    setTheme(presetConfig)
  }, [])

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      applyPreset,
    }),
    [theme, applyPreset],
  )

  return <CardThemeContext.Provider value={value}>{children}</CardThemeContext.Provider>
}

export function useCardTheme() {
  const context = useContext(CardThemeContext)
  if (context === undefined) {
    throw new Error("useCardTheme must be used within a CardThemeProvider")
  }
  return context
}
