import { BaseCard } from "@/packages/card-sdk/src/base/base-card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

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

export function GridStyle({ courses }: CourseListGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {courses.map((course, index) => (
        <BaseCard key={index} className="overflow-hidden">
          <Image
            src={course.imageUrl || "/placeholder.svg"}
            alt={course.title}
            width={400}
            height={225}
            className="w-full object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold text-[var(--card-title-color)]">{course.title}</h3>
            <div className="flex items-center gap-2 text-sm text-[var(--card-text-color)] mt-2">
              <Image
                src={course.instructorAvatarUrl || "/placeholder.svg"}
                alt={course.instructorName}
                width={24}
                height={24}
                className="rounded-full"
              />
              <span>{course.instructorName}</span>
              <span className="text-gray-400 dark:text-gray-500">•</span>
              <span>{course.lessonCount} lessons</span>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="text-lg font-semibold text-[var(--card-title-color)]">{course.price}</span>
              <Button size="sm">{course.buttonText}</Button>
            </div>
          </div>
        </BaseCard>
      ))}
    </div>
  )
}
