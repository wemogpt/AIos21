"use client"

import { GraduationCap, BookOpen } from 'lucide-react'
import { AppCard } from "@/components/layout/app-card"
import { useDataChartTheme } from "@/components/providers/data-chart-theme-provider"

interface EducationBackgroundCardProps {
  title?: string
  educationRequirement?: string
  majors?: string[]
}

const defaultMajors = [
  "计算机科学",
  "人工智能", 
  "数据科学",
  "心理学",
  "语言学"
]

export function EducationBackgroundCard({
  title = "学历及专业背景",
  educationRequirement = "本科及以上",
  majors = defaultMajors
}: EducationBackgroundCardProps) {
  const { palette } = useDataChartTheme()
  const educationColor = palette[2] || "#3b82f6"
  const majorColor = palette[0] || "#10b981"

  return (
    <AppCard className="p-6">
      <div className="space-y-6">
        {/* Title */}
        <h3 className="text-lg font-bold" style={{ color: "var(--card-title-color)" }}>
          {title}
        </h3>

        {/* Education Requirement */}
        <div className="flex items-center gap-3">
          <div 
            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${educationColor}20` }}
          >
            <GraduationCap className="w-4 h-4" style={{ color: educationColor }} />
          </div>
          <div>
            <span className="text-sm font-medium" style={{ color: "var(--card-title-color)" }}>
              学历要求: {educationRequirement}
            </span>
          </div>
        </div>

        {/* Related Majors */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div 
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${majorColor}20` }}
            >
              <BookOpen className="w-4 h-4" style={{ color: majorColor }} />
            </div>
            <span className="text-sm font-medium" style={{ color: "var(--card-title-color)" }}>
              相关专业:
            </span>
          </div>

          {/* Major Tags */}
          <div className="flex flex-wrap gap-3 ml-11">
            {majors.map((major, index) => (
              <div
                key={index}
                className="px-3 py-1.5 rounded-full text-sm font-medium"
                style={{ 
                  backgroundColor: `${majorColor}15`,
                  color: "var(--card-title-color)"
                }}
              >
                {major}
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppCard>
  )
}
