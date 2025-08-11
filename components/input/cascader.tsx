"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { locationData } from "@/config/location-data"
import { useChartTheme } from "@/components/providers/chart-theme-provider"

interface CascaderProps {
  placeholder: string
}

export function Cascader({ placeholder }: CascaderProps) {
  const { palette } = useChartTheme()
  const primaryColor = palette[0] || "#3b82f6"

  const [isOpen, setIsOpen] = useState(false)
  const [selectedProvince, setSelectedProvince] = useState(locationData[0])
  const [selectedValue, setSelectedValue] = useState("")
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [wrapperRef])

  const handleSelectCity = (city: string) => {
    if (selectedProvince) {
      setSelectedValue(`${selectedProvince.name} - ${city}`)
    }
    setIsOpen(false)
  }

  if (!locationData || locationData.length === 0) {
    return (
      <div className="relative w-full max-w-sm">
        <button
          disabled
          className="w-full flex items-center justify-between px-3.5 py-2.5 bg-gray-100/60 backdrop-blur-lg rounded-xl shadow-sm border border-gray-200/80 text-gray-400 cursor-not-allowed text-sm"
        >
          <span>{placeholder}</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </button>
      </div>
    )
  }

  return (
    <div className="relative w-full max-w-sm" ref={wrapperRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full flex items-center justify-between px-3.5 py-2.5 bg-white/70 backdrop-blur-lg rounded-xl shadow-sm border border-white/80 transition-all duration-300 text-sm",
          isOpen && "ring-2 shadow-lg",
        )}
        style={{ "--tw-ring-color": primaryColor } as React.CSSProperties}
      >
        <span className={selectedValue ? "text-gray-900" : "text-gray-400"}>{selectedValue || placeholder}</span>
        <ChevronDown
          className={cn("w-4 h-4 text-gray-400 transition-transform duration-300", isOpen && "rotate-180")}
        />
      </button>

      {isOpen && (
        <div className="absolute z-10 top-full mt-2 w-full bg-white/80 backdrop-blur-xl rounded-xl shadow-xl border border-white/60 overflow-hidden">
          <div className="flex h-48">
            <div className="w-1/2 border-r border-gray-200/70 overflow-y-auto">
              {locationData.map((province) => (
                <button
                  key={province.name}
                  onClick={() => setSelectedProvince(province)}
                  className={cn(
                    "w-full text-left px-4 py-2 text-xs transition-colors",
                    selectedProvince?.name !== province.name && "hover:bg-gray-500/10",
                  )}
                  style={
                    selectedProvince?.name === province.name
                      ? { backgroundColor: `${primaryColor}33`, color: primaryColor } // 20% opacity
                      : {}
                  }
                >
                  {province.name}
                </button>
              ))}
            </div>
            <div className="w-1/2 overflow-y-auto">
              {(selectedProvince?.cities || []).map((city) => (
                <button
                  key={city}
                  onClick={() => handleSelectCity(city)}
                  className="w-full text-left px-4 py-2 text-xs hover:bg-gray-500/10 transition-colors"
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
