"use client"

import { AppCard } from "@/components/layout/app-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useDataChartTheme } from "@/components/providers/data-chart-theme-provider"
import { Briefcase, Calendar } from 'lucide-react'

interface ProjectExperienceCardProps {
  title?: string
  role?: string
  description?: string
  progress?: number
  teamAvatars?: string[]
  tags?: string[]
  startDate?: string
  endDate?: string
}

const defaultAvatars = [
  "/generic-user-avatar.png",
  "/generic-user-avatar.png",
  "/generic-user-avatar.png",
]

const defaultTags = ["AI", "推荐系统", "React", "Node.js", "Python"]

export function ProjectExperienceCard({
  title = "AI智能推荐系统",
  role = "项目负责人",
  description = "负责设计和开发一个基于机器学习的个性化内容推荐引擎，旨在提高用户参与度和平台留存率。项目涉及数据处理、模型训练和API开发。",
  progress = 75,
  teamAvatars = defaultAvatars,
  tags = defaultTags,
  startDate = "2023-01",
  endDate = "2023-12"
}: ProjectExperienceCardProps) {
  const { palette } = useDataChartTheme()
  const primaryColor = palette[0] || "#3b82f6"
  const secondaryColor = palette[1] || "#8b5cf6"

  return (
    <AppCard className="p-6">
      <div className="space-y-6">
        {/* Header: Title and Role */}
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold" style={{ color: "var(--card-title-color)" }}>
              {title}
            </h3>
            <div className="flex items-center gap-2 mt-1 text-sm" style={{ color: "var(--card-text-color)" }}>
              <Briefcase className="w-4 h-4" />
              <span>{role}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs" style={{ color: "var(--card-text-color)" }}>
            <Calendar className="w-3 h-3" />
            <span>{startDate} - {endDate}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed" style={{ color: "var(--card-text-color)" }}>
          {description}
        </p>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium" style={{ color: "var(--card-title-color)" }}>
              项目进度
            </span>
            <span className="text-sm font-bold" style={{ color: primaryColor }}>
              {progress}%
            </span>
          </div>
          <div className="relative w-full h-2.5 bg-gray-200/50 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-700 ease-out"
              style={{
                width: `${progress}%`,
                background: `linear-gradient(90deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
              }}
            />
          </div>
        </div>

        {/* Team and Tags */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Team Avatars */}
          <div className="flex items-center">
            <div className="flex -space-x-3">
              {teamAvatars.map((src, index) => (
                <Avatar key={index} className="w-8 h-8 border-2 border-white">
                  <AvatarImage src={src || "/placeholder.svg"} alt={`Team member ${index + 1}`} />
                  <AvatarFallback>T{index + 1}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <span className="ml-3 text-sm" style={{ color: "var(--card-text-color)" }}>
              +5 more
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag) => (
              <div
                key={tag}
                className="px-2.5 py-1 rounded-full text-xs font-medium"
                style={{ 
                  backgroundColor: `${primaryColor}1A`, // ~10% opacity
                  color: primaryColor 
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppCard>
  )
}
