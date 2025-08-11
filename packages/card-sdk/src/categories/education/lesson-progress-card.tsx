"use client"

import type React from "react"
import { BaseCard } from "../../base/base-card"
import type { CardProps } from "../../types"
import { Button } from "@/components/ui/button"

interface LessonProgressCardProps extends CardProps {
  icon: React.ReactNode
  courseTitle: string
  currentLesson: string
  progress: number
  buttonText: string
  primaryColor?: string
  secondaryColor?: string
}

export function LessonProgressCard({
  icon,
  courseTitle,
  currentLesson,
  progress,
  buttonText,
  primaryColor = "#3b82f6",
  secondaryColor = "#8b5cf6",
  ...props
}: LessonProgressCardProps) {
  return (
    <BaseCard className="p-6" {...props}>
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
      <Button variant="default" className="w-full">
        {buttonText}
      </Button>
    </BaseCard>
  )
}
