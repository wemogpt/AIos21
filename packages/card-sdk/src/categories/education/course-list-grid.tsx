"use client"

import { BaseCard } from "../../base/base-card"
import type { CardProps } from "../../types"
import { CourseOverviewCard } from "./course-overview-card"

interface Course {
  imageUrl: string
  title: string
  instructorName: string
  instructorAvatarUrl: string
  lessonCount: number
  price: string
  buttonText: string
}

interface CourseListGridProps extends CardProps {
  courses: Course[]
}

export function CourseListGrid({ courses, ...props }: CourseListGridProps) {
  return (
    <BaseCard tag="div" className="grid grid-cols-1 md:grid-cols-2 gap-6" {...props}>
      {courses.map((course, index) => (
        <CourseOverviewCard key={index} {...course} />
      ))}
    </BaseCard>
  )
}
