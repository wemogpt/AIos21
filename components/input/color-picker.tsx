"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import { useChartTheme } from "@/components/providers/chart-theme-provider"

interface ColorPickerProps {
  label: string
}

const presetColors = [
  "#ef4444",
  "#f97316",
  "#eab308",
  "#84cc16",
  "#22c55e",
  "#14b8a6",
  "#06b6d4",
  "#3b82f6",
  "#8b5cf6",
  "#d946ef",
]

export function ColorPicker({ label }: ColorPickerProps) {
  const { palette } = useChartTheme()
  const primaryColor = palette[0] || "#3b82f6"
  const [selectedColor, setSelectedColor] = useState(primaryColor)
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setSelectedColor(primaryColor)
  }, [primaryColor])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [wrapperRef])

  return (
    <div className="relative w-full max-w-sm" ref={wrapperRef}>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-8 h-8 rounded-full border-2 border-white shadow-md"
          style={{ backgroundColor: selectedColor }}
        />
      </div>
      {isOpen && (
        <div className="absolute z-10 top-full right-0 mt-2 bg-white/80 backdrop-blur-xl rounded-xl shadow-xl border border-white/60 p-3">
          <div className="grid grid-cols-5 gap-2">
            {presetColors.map((color) => (
              <button
                key={color}
                onClick={() => {
                  setSelectedColor(color)
                  setIsOpen(false)
                }}
                className={cn(
                  "w-6 h-6 rounded-full transition-transform hover:scale-110",
                  selectedColor === color && "ring-2 ring-offset-2 ring-offset-white/50",
                )}
                style={{ backgroundColor: color, "--tw-ring-color": primaryColor } as React.CSSProperties}
              />
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-gray-200/70">
            <div className="relative flex items-center justify-center">
              <span className="text-xs text-gray-600">Custom</span>
              <input
                type="color"
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
