"use client"

import { AppCard } from "@/components/layout/app-card"
import { CourseListItemSimple } from "./course-list-item-simple"

interface CourseListSimpleProps {
  title: string
  lessons: { title: string; duration: string; isCompleted: boolean }[]
}

export function CourseListSimple({ title, lessons }: CourseListSimpleProps) {
  return (
    <AppCard className="p-4">
      <h3 className="text-lg font-bold mb-2 px-3" style={{ color: "var(--card-title-color)" }}>
        {title}
      </h3>
      <div className="space-y-1">
        {lessons.map((lesson, index) => (
          <CourseListItemSimple key={index} {...lesson} />
        ))}
      </div>
    </AppCard>
  )
}
