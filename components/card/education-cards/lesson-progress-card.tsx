"use client"

import type React from "react"
import { AppCard } from "@/components/layout/app-card"
import { PillButton } from "@/components/basic/pill-button"
import { useDataChartTheme } from "@/components/providers/data-chart-theme-provider"

interface LessonProgressCardProps {
  icon: React.ReactNode
  courseTitle: string
  currentLesson: string
  progress: number
  buttonText: string
}

export function LessonProgressCard({
  icon,
  courseTitle,
  currentLesson,
  progress,
  buttonText,
}: LessonProgressCardProps) {
  const { palette } = useDataChartTheme()
  const primaryColor = palette[0] || "#3b82f6"
  const secondaryColor = palette[1] || "#8b5cf6"

  return (
    <AppCard className="p-6">
      <div className="flex items-center gap-4 mb-4">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: `${primaryColor}20`, color: primaryColor }}
        >
          {icon}
        </div>
        <div>
          <h3 className="font-bold" style={{ color: "var(--card-title-color)" }}>
            {courseTitle}
          </h3>
          <p className="text-sm mt-1" style={{ color: "var(--card-text-color)" }}>
            {currentLesson}
          </p>
        </div>
      </div>
      <div className="space-y-2 mb-4">
        <div className="flex justify-between items-center text-xs">
          <span style={{ color: "var(--card-text-color)" }}>学习进度</span>
          <span className="font-semibold" style={{ color: primaryColor }}>
            {progress}%
          </span>
        </div>
        <div className="relative w-full h-2 bg-gray-200/50 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-700 ease-out"
            style={{
              width: `${progress}%`,
              background: `linear-gradient(90deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
            }}
          />
        </div>
      </div>
      <PillButton variant="primary" className="w-full">
        {buttonText}
      </PillButton>
    </AppCard>
  )
}
