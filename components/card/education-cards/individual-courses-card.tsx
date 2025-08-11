"use client"

import { AppCard } from "@/components/layout/app-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const courses = [
  {
    title: "CS229: Machine Learning",
    provider: "Stanford University - Andrew Ng",
    badge: <Badge variant="outline" className="text-xs bg-blue-50 border-blue-200 text-blue-700">斯坦福</Badge>,
    duration: "20讲 约40小时",
  },
  {
    title: "Deep Learning Specialization",
    provider: "Coursera - deeplearning.ai",
    badge: <Badge variant="outline" className="text-xs bg-indigo-50 border-indigo-200 text-indigo-700">专项课程</Badge>,
    duration: "5门课程 约60小时",
  },
]

export function IndividualCoursesCard() {
  return (
    <AppCard className="bg-white/50 backdrop-blur-sm border border-gray-200/40 shadow-lg overflow-hidden">
      <div className="p-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-0.5 h-8 bg-green-600 rounded-full shadow-sm" />
          <div>
            <h5 className="font-semibold text-gray-900 text-sm flex items-center gap-1.5">单独课程<Badge variant="outline" className="text-xs bg-green-50 border-green-200 text-green-700">2门</Badge></h5>
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
                <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white border-0 shadow-sm h-7 px-3 text-xs">学习</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppCard>
  )
}
