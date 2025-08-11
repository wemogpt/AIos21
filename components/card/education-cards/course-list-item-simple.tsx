"use client"

import { PlayCircle } from 'lucide-react'
import { useDataChartTheme } from "@/components/providers/data-chart-theme-provider"

interface CourseListItemSimpleProps {
  title: string
  duration: string
  isCompleted: boolean
}

export function CourseListItemSimple({ title, duration, isCompleted }: CourseListItemSimpleProps) {
  const { palette } = useDataChartTheme()
  const primaryColor = palette[0] || "#3b82f6"
  const textColor = isCompleted ? primaryColor : "var(--card-title-color)"
  const iconColor = isCompleted ? primaryColor : "var(--card-text-color)"

  return (
    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-500/5 transition-colors">
      <div className="flex items-center gap-4">
        <PlayCircle className="w-5 h-5" style={{ color: iconColor }} />
        <span className="font-medium" style={{ color: textColor }}>
          {title}
        </span>
      </div>
      <span className="text-xs" style={{ color: "var(--card-text-color)" }}>
        {duration}
      </span>
    </div>
  )
}
