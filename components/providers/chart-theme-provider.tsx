"use client"
import { createContext, useContext, useState, useMemo, type ReactNode } from "react"
import { chartPalettes } from "@/packages/core-config/src"

interface ChartThemeContextType {
  palette: string[]
  activePaletteName: string
  applyPalette: (paletteName: string) => void
}

const ChartThemeContext = createContext<ChartThemeContextType | undefined>(undefined)

export function ChartThemeProvider({ children }: { children: ReactNode }) {
  const [activePaletteName, setActivePaletteName] = useState<string>(chartPalettes[0].name)

  const applyPalette = (paletteName: string) => {
    setActivePaletteName(paletteName)
  }

  const palette = useMemo(() => {
    const activePalette = chartPalettes.find((p) => p.name === activePaletteName)
    return activePalette ? activePalette.colors : chartPalettes[0].colors
  }, [activePaletteName])

  const value = useMemo(
    () => ({
      palette,
      activePaletteName,
      applyPalette,
    }),
    [palette, activePaletteName],
  )

  return <ChartThemeContext.Provider value={value}>{children}</ChartThemeContext.Provider>
}

export function useChartTheme() {
  const context = useContext(ChartThemeContext)
  if (context === undefined) {
    throw new Error("useChartTheme must be used within a ChartThemeProvider")
  }
  return context
}
