"use client"

import { useMemo } from "react"
import { cn } from "@/lib/utils"
import { useChartTheme } from "@/components/providers/chart-theme-provider"

interface TabsProps {
  tabs: string[]
  activeTab: string
  onTabChange: (tab: string) => void
  className?: string
}

function getContrastColor(hexColor: string): string {
  if (!hexColor.startsWith("#")) return "#000000"
  const r = Number.parseInt(hexColor.slice(1, 3), 16)
  const g = Number.parseInt(hexColor.slice(3, 5), 16)
  const b = Number.parseInt(hexColor.slice(5, 7), 16)
  const yiq = (r * 299 + g * 587 + b * 114) / 1000
  return yiq >= 128 ? "#000000" : "#ffffff"
}

export function Tabs({ tabs, activeTab, onTabChange, className }: TabsProps) {
  const { palette } = useChartTheme()
  const primaryColor = palette[0] || "#1f2937" // Default to a dark gray
  const textColorForPrimary = useMemo(() => getContrastColor(primaryColor), [primaryColor])

  return (
    <div className={cn("w-full overflow-x-auto hide-scrollbar", className)}>
      <div className="inline-flex items-center space-x-2 p-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap",
              activeTab === tab
                ? "shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-100/80 shadow-sm border border-gray-200/90",
            )}
            style={
              activeTab === tab
                ? {
                    backgroundColor: primaryColor,
                    color: textColorForPrimary,
                  }
                : {}
            }
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  )
}
