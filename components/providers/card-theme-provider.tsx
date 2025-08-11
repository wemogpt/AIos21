"use client"

import type React from "react"
import { createContext, useContext, useState, useMemo } from "react"
import { type CardThemeConfig, defaultCardTheme } from "@ipollo/core-config"

interface CardThemeContextType {
  theme: CardThemeConfig
  setTheme: (theme: CardThemeConfig) => void
}

const CardThemeContext = createContext<CardThemeContextType | undefined>(undefined)

export const CardThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<CardThemeConfig>(defaultCardTheme)

  const value = useMemo(() => ({ theme, setTheme }), [theme])

  return <CardThemeContext.Provider value={value}>{children}</CardThemeContext.Provider>
}

export const useCardTheme = () => {
  const context = useContext(CardThemeContext)
  if (context === undefined) {
    throw new Error("useCardTheme must be used within a CardThemeProvider")
  }
  return context
}
