"use client"

import { BaseCard } from "../../base/base-card"
import type { CardProps } from "../../types"
import { CourseListItemDetailed } from "./course-list-item-detailed"

interface Course {
  imageUrl: string
  title: string
  description: string
  instructorName: string
  instructorAvatarUrl: string
  buttonText: string
}

interface CourseListDetailedProps extends CardProps {
  courses: Course[]
}

export function CourseListDetailed({ courses, ...props }: CourseListDetailedProps) {
  return (
    <BaseCard tag="div" className="space-y-4" {...props}>
      {courses.map((course, index) => (
        <CourseListItemDetailed key={index} {...course} />
      ))}
    </BaseCard>
  )
}
