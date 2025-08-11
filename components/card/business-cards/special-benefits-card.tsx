"use client"

import { Check } from 'lucide-react'
import { AppCard } from "@/components/layout/app-card"
import { useDataChartTheme } from "@/components/providers/data-chart-theme-provider"

interface Benefit {
  text: string
}

const defaultBenefits: Benefit[] = [
  { text: "周末双休" },
  { text: "五险一金" },
  { text: "定期体检" },
  { text: "带薪年假" },
  { text: "餐饮补贴" },
]

interface SpecialBenefitsCardProps {
  title?: string
  benefits?: Benefit[]
}

export function SpecialBenefitsCard({ 
  title = "特色待遇",
  benefits = defaultBenefits 
}: SpecialBenefitsCardProps) {
  const { palette } = useDataChartTheme()
  const primaryColor = palette[0] || "#10b981"

  return (
    <AppCard className="p-6">
      <div className="space-y-6">
        {/* Title */}
        <h3 className="text-lg font-bold" style={{ color: "var(--card-title-color)" }}>
          {title}
        </h3>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-3">
              <div 
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${primaryColor}20` }}
              >
                <Check className="w-3 h-3" style={{ color: primaryColor }} />
              </div>
              <span className="text-sm font-medium" style={{ color: "var(--card-title-color)" }}>
                {benefit.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </AppCard>
  )
}
