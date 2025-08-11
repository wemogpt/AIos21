"use client"

import { BaseCard } from "../../base/base-card"
import type { CardProps } from "../../types"
import { CourseListItemSimple } from "./course-list-item-simple"

interface Lesson {
  title: string
  duration: string
  isCompleted: boolean
}

interface CourseListSimpleProps extends CardProps {
  title: string
  lessons: Lesson[]
}

export function CourseListSimple({ title, lessons, ...props }: CourseListSimpleProps) {
  return (
    <BaseCard className="p-4" {...props}>
      <h3 className="text-lg font-bold mb-2 px-3" style={{ color: "var(--card-title-color)" }}>
        {title}
      </h3>
      <div className="space-y-1">
        {lessons.map((lesson, index) => (
          <CourseListItemSimple key={index} {...lesson} />
        ))}
      </div>
    </BaseCard>
  )
}
