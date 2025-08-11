"use client"

import { BaseCard } from "../../base/base-card"
import type { CardProps } from "../../types"

interface CourseListItemSimpleProps extends CardProps {
  title: string
  duration: string
  isCompleted: boolean
  primaryColor?: string
}

export function CourseListItemSimple({
  title,
  duration,
  isCompleted,
  primaryColor = "#3b82f6",
  ...props
}: CourseListItemSimpleProps) {
  const textColor = isCompleted ? primaryColor : "var(--card-title-color)"
  const iconColor = isCompleted ? primaryColor : "var(--card-text-color)"

  return (
    <BaseCard
      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-500/5 transition-colors"
      {...props}
    >
      <div className="flex items-center gap-4">
        <i className="i-lucide-play-circle w-5 h-5" style={{ color: iconColor }} />
        <span className="font-medium" style={{ color: textColor }}>
          {title}
        </span>
      </div>
      <span className="text-xs" style={{ color: "var(--card-text-color)" }}>
        {duration}
      </span>
    </BaseCard>
  )
}
