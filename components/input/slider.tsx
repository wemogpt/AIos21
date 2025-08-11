"use client"

import type React from "react"
import { useChartTheme } from "@/components/providers/chart-theme-provider"

interface SliderProps {
  label: string
  value: number
  onValueChange: (value: number) => void
  min?: number
  max?: number
  step?: number
}

export function Slider({ label, value, onValueChange, min = 0, max = 100, step = 1 }: SliderProps) {
  const { palette } = useChartTheme()
  const primaryColor = palette[0] || "#3b82f6"

  const percentage = ((value - min) / (max - min)) * 100

  return (
    <div className="w-full max-w-sm">
      <div className="flex justify-between items-center mb-2">
        <label className="block text-xs font-medium text-gray-600">{label}</label>
        <span className="text-sm font-semibold" style={{ color: primaryColor }}>
          {value}
        </span>
      </div>
      <div className="relative h-5 flex items-center">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onValueChange(Number(e.target.value))}
          className="w-full h-1.5 bg-gray-200 rounded-full appearance-none cursor-pointer slider-thumb"
          style={
            {
              "--thumb-color": primaryColor,
              background: `linear-gradient(to right, ${primaryColor} ${percentage}%, #e5e7eb ${percentage}%)`,
            } as React.CSSProperties
          }
        />
      </div>
    </div>
  )
}
