"use client"
import { createContext, useContext, useState, useMemo, type ReactNode } from "react"
import { dataChartPalettes } from "@/config/data-chart-palettes"

interface DataChartThemeContextType {
  palette: string[]
  activePaletteName: string
  applyPalette: (paletteName: string) => void
}

const DataChartThemeContext = createContext<DataChartThemeContextType | undefined>(undefined)

export function DataChartThemeProvider({ children }: { children: ReactNode }) {
  const [activePaletteName, setActivePaletteName] = useState<string>(dataChartPalettes[0].name)

  const applyPalette = (paletteName: string) => {
    const newPalette = dataChartPalettes.find((p) => p.name === paletteName)
    if (newPalette) {
      setActivePaletteName(paletteName)
    }
  }

  const palette = useMemo(() => {
    const activePalette = dataChartPalettes.find((p) => p.name === activePaletteName)
    return activePalette ? activePalette.colors : dataChartPalettes[0].colors
  }, [activePaletteName])

  const value = useMemo(
    () => ({
      palette,
      activePaletteName,
      applyPalette,
    }),
    [palette, activePaletteName],
  )

  return <DataChartThemeContext.Provider value={value}>{children}</DataChartThemeContext.Provider>
}

export function useDataChartTheme() {
  const context = useContext(DataChartThemeContext)
  if (context === undefined) {
    throw new Error("useDataChartTheme must be used within a DataChartThemeProvider")
  }
  return context
}
