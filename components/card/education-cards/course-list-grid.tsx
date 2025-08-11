"use client"

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

interface CourseListGridProps {
  courses: Course[]
}

export function CourseListGrid({ courses }: CourseListGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {courses.map((course, index) => (
        <CourseOverviewCard key={index} {...course} />
      ))}
    </div>
  )
}
