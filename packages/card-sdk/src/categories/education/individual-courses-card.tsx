import type React from "react"
import { BaseCard } from "../../base/base-card"
import type { CardProps } from "../../types"

interface Course {
  title: string
  provider: string
  badge: React.ReactNode
  duration: string
}

interface IndividualCoursesCardProps extends CardProps {
  courses: Course[]
}

export function IndividualCoursesCard({ courses, ...baseProps }: IndividualCoursesCardProps) {
  return (
    <BaseCard
      {...baseProps}
      className="bg-white/50 backdrop-blur-sm border border-gray-200/40 shadow-lg overflow-hidden rounded-xl p-4"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-0.5 h-8 bg-green-600 rounded-full shadow-sm" />
        <div>
          <h5 className="font-semibold text-gray-900 text-sm flex items-center gap-1.5">
            单独课程
            <span className="text-xs bg-green-50 border border-green-200 text-green-700 rounded-md px-1.5 py-0.5">
              {courses.length}门
            </span>
          </h5>
          <p className="text-xs text-gray-500">名校公开课程</p>
        </div>
      </div>
      <div className="space-y-3">
        {courses.map((course, index) => (
          <div key={index} className="bg-white/70 backdrop-blur-sm rounded-lg p-3 border border-gray-200/50 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="w-8 h-10 bg-green-100 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-bold text-green-700">🎓</span>
              </div>
              <div className="flex-1 min-w-0">
                <h6 className="font-medium text-gray-900 text-xs mb-1">{course.title}</h6>
                <p className="text-xs text-gray-500 mb-2">{course.provider}</p>
                <div className="flex items-center gap-2">
                  {course.badge}
                  <span className="text-xs text-gray-400">• {course.duration}</span>
                </div>
              </div>
              <button className="bg-green-600 hover:bg-green-700 text-white border-0 shadow-sm h-7 px-3 text-xs rounded-md">
                学习
              </button>
            </div>
          </div>
        ))}
      </div>
    </BaseCard>
  )
}
