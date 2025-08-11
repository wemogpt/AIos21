"use client"

import { AppCard } from "@/components/layout/app-card"
import { useDataChartTheme } from "@/components/providers/data-chart-theme-provider"

interface CityData {
  rank: number
  city: string
  jobCount: number
  averageSalary: number
  competitiveness: number // 0-100
}

const cityData: CityData[] = [
  { rank: 1, city: "武汉市", jobCount: 8, averageSalary: 16500, competitiveness: 75 },
  { rank: 2, city: "北京市", jobCount: 5, averageSalary: 22900, competitiveness: 85 },
  { rank: 3, city: "福州市", jobCount: 5, averageSalary: 8800, competitiveness: 60 },
]

interface CircularProgressProps {
  percentage: number
  size?: number
  strokeWidth?: number
  color?: string
}

function CircularProgress({ percentage, size = 32, strokeWidth = 3, color = "#10b981" }: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-300 ease-in-out"
        />
      </svg>
    </div>
  )
}

interface CityRankingCardProps {
  title?: string
}

export function CityRankingCard({ title = "工作城市排名" }: CityRankingCardProps) {
  const { palette } = useDataChartTheme()
  const progressColor = palette[1] || "#10b981"

  return (
    <AppCard className="p-6">
      <div className="space-y-6">
        {/* Title */}
        <h3 className="text-lg font-bold" style={{ color: "var(--card-title-color)" }}>
          {title}
        </h3>

        {/* Table */}
        <div className="space-y-4">
          {/* Table Header */}
          <div className="grid grid-cols-4 gap-4 pb-3 border-b border-gray-200/50">
            <div className="text-xs font-medium" style={{ color: "var(--card-text-color)" }}>
              城市
            </div>
            <div className="text-xs font-medium text-center" style={{ color: "var(--card-text-color)" }}>
              职位数
            </div>
            <div className="text-xs font-medium text-center" style={{ color: "var(--card-text-color)" }}>
              平均月薪
            </div>
            <div className="text-xs font-medium text-center" style={{ color: "var(--card-text-color)" }}>
              竞争力
            </div>
          </div>

          {/* Table Rows */}
          <div className="space-y-4">
            {cityData.map((city) => (
              <div key={city.rank} className="grid grid-cols-4 gap-4 items-center py-2">
                {/* City Name with Rank */}
                <div className="flex items-center">
                  <span className="text-sm font-semibold" style={{ color: "var(--card-title-color)" }}>
                    {city.rank}. {city.city}
                  </span>
                </div>

                {/* Job Count */}
                <div className="text-center">
                  <span className="text-sm font-medium" style={{ color: "var(--card-title-color)" }}>
                    {city.jobCount}
                  </span>
                </div>

                {/* Average Salary */}
                <div className="text-center">
                  <span className="text-sm font-medium" style={{ color: "var(--card-title-color)" }}>
                    ¥{city.averageSalary.toLocaleString()}
                  </span>
                </div>

                {/* Competitiveness Progress */}
                <div className="flex justify-center">
                  <CircularProgress 
                    percentage={city.competitiveness} 
                    color={progressColor}
                    size={36}
                    strokeWidth={4}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppCard>
  )
}
