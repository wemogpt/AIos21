"use client"

import { DollarSign, MapPin, GraduationCap, Briefcase, Clock } from 'lucide-react'
import { AppCard } from "@/components/layout/app-card"
import { useDataChartTheme } from "@/components/providers/data-chart-theme-provider"

interface JobDetail {
  icon: React.ReactNode
  text: string
  color?: string
}

interface AIProductManagerCardProps {
  title?: string
  salary?: string
  location?: string
  education?: string
  experience?: string
  jobType?: string
}

export function AIProductManagerCard({
  title = "AI 产品经理",
  salary = "25k-45k",
  location = "北京·北京市·海淀区",
  education = "本科",
  experience = "3-5年",
  jobType = "全职"
}: AIProductManagerCardProps) {
  const { palette } = useDataChartTheme()
  const salaryColor = palette[2] || "#3b82f6"
  const locationColor = palette[0] || "#10b981"
  const educationColor = palette[1] || "#8b5cf6"
  const experienceColor = palette[3] || "#f59e0b"
  const jobTypeColor = palette[4] || "#6b7280"

  const jobDetails: JobDetail[] = [
    { icon: <DollarSign className="w-4 h-4" />, text: salary, color: salaryColor },
    { icon: <MapPin className="w-4 h-4" />, text: location, color: locationColor },
    { icon: <GraduationCap className="w-4 h-4" />, text: education, color: educationColor },
    { icon: <Briefcase className="w-4 h-4" />, text: experience, color: experienceColor },
    { icon: <Clock className="w-4 h-4" />, text: jobType, color: jobTypeColor },
  ]

  return (
    <AppCard className="p-6">
      <div className="space-y-6">
        {/* Job Title */}
        <h3 className="text-xl font-bold" style={{ color: "var(--card-title-color)" }}>
          {title}
        </h3>

        {/* Job Details Grid */}
        <div className="grid grid-cols-2 gap-4">
          {jobDetails.map((detail, index) => (
            <div key={index} className="flex items-center gap-3">
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${detail.color}20` }}
              >
                <div style={{ color: detail.color }}>
                  {detail.icon}
                </div>
              </div>
              <span className="text-sm font-medium" style={{ color: "var(--card-title-color)" }}>
                {detail.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </AppCard>
  )
}
