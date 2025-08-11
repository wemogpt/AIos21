"use client"

import { GraduationCap } from 'lucide-react'
import { AppCard } from "@/components/layout/app-card"
import { useDataChartTheme } from "@/components/providers/data-chart-theme-provider"

interface SalaryData {
  level: string
  range: string
  minSalary: number
  maxSalary: number
  icon?: string
}

const salaryData: SalaryData[] = [
  { level: "专科", range: "3k-5k", minSalary: 3000, maxSalary: 5000 },
  { level: "本科", range: "6k-9k", minSalary: 6000, maxSalary: 9000 },
  { level: "不限学历", range: "4k-6k", minSalary: 4000, maxSalary: 6000 },
]

interface SalaryComparisonCardProps {
  title?: string
}

export function SalaryComparisonCard({
  title = "不同学历的收入差距",
}: SalaryComparisonCardProps) {
  const { palette } = useDataChartTheme()
  const primaryColor = palette[0] || "#10b981"
  
  // Calculate the maximum salary for scaling
  const maxSalary = Math.max(...salaryData.map(item => item.maxSalary))
  const scale = 10000 // Scale to 10k for display

  return (
    <AppCard className="p-6">
      <div className="space-y-6">
        {/* Title */}
        <h3 className="text-lg font-bold" style={{ color: "var(--card-title-color)" }}>
          {title}
        </h3>

        {/* Salary Chart */}
        <div className="space-y-6">
          {/* Chart Area */}
          <div className="relative h-32 bg-gray-50/50 rounded-lg p-4">
            {/* Education levels and their salary ranges */}
            <div className="space-y-4">
              {/* 专科 */}
              <div className="flex items-center relative">
                <span className="text-sm font-medium w-20" style={{ color: "var(--card-title-color)" }}>
                  专科
                </span>
                <div className="flex-1 relative ml-4">
                  <div 
                    className="absolute px-3 py-1 rounded text-xs font-medium"
                    style={{ 
                      backgroundColor: `${primaryColor}20`,
                      color: primaryColor,
                      left: '30%',
                      border: `2px solid ${primaryColor}`
                    }}
                  >
                    3k-5k
                  </div>
                </div>
              </div>

              {/* 本科 */}
              <div className="flex items-center relative">
                <span className="text-sm font-medium w-20" style={{ color: "var(--card-title-color)" }}>
                  本科
                </span>
                <div className="flex-1 relative ml-4">
                  <div 
                    className="absolute px-3 py-1 rounded text-xs font-medium"
                    style={{ 
                      backgroundColor: `${primaryColor}20`,
                      color: primaryColor,
                      left: '60%',
                      border: `2px solid ${primaryColor}`
                    }}
                  >
                    6k-9k
                  </div>
                </div>
              </div>

              {/* 不限学历 */}
              <div className="flex items-center relative">
                <span className="text-sm font-medium w-20" style={{ color: "var(--card-title-color)" }}>
                  不限学历
                </span>
                <div className="flex-1 relative ml-4">
                  <div 
                    className="absolute px-3 py-1 rounded text-xs font-medium"
                    style={{ 
                      backgroundColor: `${primaryColor}20`,
                      color: primaryColor,
                      left: '40%',
                      border: `2px solid ${primaryColor}`
                    }}
                  >
                    4k-6k
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scale */}
          <div className="flex justify-between items-center px-4">
            <span className="text-xs" style={{ color: "var(--card-text-color)" }}>0</span>
            <span className="text-xs" style={{ color: "var(--card-text-color)" }}>2k</span>
            <span className="text-xs" style={{ color: "var(--card-text-color)" }}>5k</span>
            <span className="text-xs" style={{ color: "var(--card-text-color)" }}>8k</span>
            <span className="text-xs" style={{ color: "var(--card-text-color)" }}>10k</span>
          </div>
        </div>
      </div>
    </AppCard>
  )
}
