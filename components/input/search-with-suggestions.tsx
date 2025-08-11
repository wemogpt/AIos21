"use client"

import type React from "react"

import { useState, useEffect, useRef, useCallback } from "react"
import { Search, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import { useChartTheme } from "@/components/providers/chart-theme-provider"

interface SearchWithSuggestionsProps {
  suggestions: string[]
  placeholder?: string
}

export function SearchWithSuggestions({ suggestions, placeholder = "Search..." }: SearchWithSuggestionsProps) {
  const { palette } = useChartTheme()
  const primaryColor = palette[0] || "#3b82f6"

  const [query, setQuery] = useState("")
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([])
  const [isFocused, setIsFocused] = useState(false)
  const searchContainerRef = useRef<HTMLDivElement>(null)

  const handleFilter = useCallback(
    (searchQuery: string) => {
      if (searchQuery.length > 0) {
        const filtered = suggestions.filter((suggestion) =>
          suggestion.toLowerCase().includes(searchQuery.toLowerCase()),
        )
        setFilteredSuggestions(filtered)
      } else {
        setFilteredSuggestions([])
      }
    },
    [suggestions],
  )

  useEffect(() => {
    handleFilter(query)
  }, [query, handleFilter])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsFocused(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const showSuggestions = isFocused && query.length > 0 && filteredSuggestions.length > 0

  return (
    <div className="relative w-full max-w-md" ref={searchContainerRef}>
      <div
        className={cn(
          "flex items-center w-full bg-white/70 backdrop-blur-lg rounded-full shadow-sm border border-white/80 transition-all duration-300",
          isFocused && "shadow-lg ring-2",
        )}
        style={{ "--tw-ring-color": primaryColor } as React.CSSProperties}
      >
        <Search className="h-4 w-4 text-gray-400 ml-3.5" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          placeholder={placeholder}
          className="w-full p-2.5 pl-2 bg-transparent outline-none text-gray-900 placeholder:text-gray-400 text-sm"
        />
        {query && (
          <button onClick={() => setQuery("")} className="p-1 rounded-full hover:bg-gray-200/50 mr-1.5">
            <X className="h-4 w-4 text-gray-500" />
          </button>
        )}
      </div>

      {showSuggestions && (
        <div className="absolute top-full mt-2 w-full">
          <Card className="bg-white/90 backdrop-blur-xl shadow-xl border border-white/60 rounded-2xl overflow-hidden">
            <ul>
              {filteredSuggestions.map((suggestion, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      setQuery(suggestion)
                      setIsFocused(false)
                    }}
                    className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-500/10 transition-colors"
                  >
                    {suggestion}
                  </button>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      )}
    </div>
  )
}
