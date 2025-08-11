"use client"

import { AppCard } from "@/components/layout/app-card"
import { useDataChartTheme } from "@/components/providers/data-chart-theme-provider"

interface SkillData {
  name: string
  percentage: number
}

const skillsData: SkillData[] = [
  { name: "Photoshop", percentage: 70 },
  { name: "ComfyUI / Stable Diffusion", percentage: 85 },
  { name: "Python", percentage: 60 },
  { name: "数据标注工具", percentage: 90 },
]

interface SkillsMasteryCardProps {
  title?: string
  skills?: SkillData[]
}

export function SkillsMasteryCard({ 
  title = "核心技能掌握",
  skills = skillsData 
}: SkillsMasteryCardProps) {
  const { palette } = useDataChartTheme()
  const primaryColor = palette[0] || "#3b82f6"
  const secondaryColor = palette[1] || "#8b5cf6"

  return (
    <AppCard className="p-6">
      <div className="space-y-6">
        {/* Title */}
        <h3 className="text-lg font-bold" style={{ color: "var(--card-title-color)" }}>
          {title}
        </h3>

        {/* Skills List */}
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={skill.name} className="space-y-2">
              {/* Skill Name and Percentage */}
              <div className="flex justify-between items-center">
                <span className="text-base font-medium" style={{ color: "var(--card-title-color)" }}>
                  {skill.name}
                </span>
                <span className="text-sm" style={{ color: "var(--card-text-color)" }}>
                  掌握度: {skill.percentage}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="relative w-full h-3 bg-gray-200/50 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700 ease-out"
                  style={{
                    width: `${skill.percentage}%`,
                    background: `linear-gradient(90deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppCard>
  )
}
