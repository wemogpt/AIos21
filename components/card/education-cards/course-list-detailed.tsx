"use client"

import { CourseListItemDetailed } from "./course-list-item-detailed"

interface Course {
  imageUrl: string
  title: string
  description: string
  instructorName: string
  instructorAvatarUrl: string
  buttonText: string
}

interface CourseListDetailedProps {
  courses: Course[]
}

export function CourseListDetailed({ courses }: CourseListDetailedProps) {
  return (
    <div className="space-y-4">
      {courses.map((course, index) => (
        <CourseListItemDetailed key={index} {...course} />
      ))}
    </div>
  )
}
