"use client"

import { useState } from "react"
import { Pie, PieChart, ResponsiveContainer, Cell } from "recharts"
import { useDataChartTheme } from "@/components/providers/data-chart-theme-provider"
import { AppCard } from "@/components/layout/app-card"

const experienceData = [
  { name: "不限经验", value: 50, color: "#6366f1" },
  { name: "3-5年", value: 40, color: "#f97316" },
  { name: "1-3年", value: 10, color: "#eab308" },
]

interface AITrainerJobCardProps {
  title?: string
  description?: string
  salary?: string
  dataSource?: string
}

export function AITrainerJobCard({
  title = "人工智能训练师",
  description = "人工智能训练师是一种非常重要的职位，主要负责指导和帮助用户以及其他相关人员更好地掌握人工智能相关技术和技能。训练师将为客户提供实践经验，并利用人工智能技术和工具来协助客户实现其业务目标。",
  salary = "¥15900",
  dataSource = "来自全网10份数据"
}: AITrainerJobCardProps) {
  const { palette } = useDataChartTheme()
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  // Use theme colors for the chart
  const chartData = experienceData.map((item, index) => ({
    ...item,
    color: palette[index] || item.color
  }))

  const handleLegendClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <AppCard className="p-6">
      <div className="space-y-6">
        {/* Title */}
        <h3 className="text-lg font-bold" style={{ color: "var(--card-title-color)" }}>
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs leading-relaxed" style={{ color: "var(--card-text-color)" }}>
          {description}
        </p>

        {/* Salary and Chart Section */}
        <div className="flex items-start justify-between gap-6">
          {/* Salary Info */}
          <div className="flex-1">
            <p className="text-xs mb-2" style={{ color: "var(--card-text-color)" }}>
              平均月薪
            </p>
            <p className="text-3xl font-bold mb-1" style={{ color: palette[0] || "#6366f1" }}>
              {salary}
            </p>
            <p className="text-[10px]" style={{ color: "var(--card-text-color)" }}>
              {dataSource}
            </p>
          </div>

          {/* Chart and Legend Container */}
          <div className="flex flex-col items-center gap-3">
            {/* Budget Allocation Chart */}
            <div className="relative w-40 h-40 flex-shrink-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={70}
                    dataKey="value"
                    cornerRadius={8}
                    paddingAngle={2}
                  >
                    {chartData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.color}
                        fillOpacity={activeIndex === null || activeIndex === index ? 1 : 0.3}
                        stroke={activeIndex === index ? entry.color : "none"}
                        strokeWidth={activeIndex === index ? 3 : 0}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              {/* Center text overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <p className="text-xs font-medium" style={{ color: "var(--card-title-color)" }}>
                  年限分布
                </p>
              </div>
            </div>

            {/* Interactive Legend */}
            <div className="flex flex-col gap-1">
              {chartData.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleLegendClick(index)}
                  className={`flex items-center gap-2 px-2 py-1 rounded transition-all duration-200 ${
                    activeIndex === index ? 'bg-gray-100/50' : 'hover:bg-gray-50/30'
                  }`}
                >
                  <div 
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0" 
                    style={{ 
                      backgroundColor: item.color,
                      opacity: activeIndex === null || activeIndex === index ? 1 : 0.3
                    }}
                  />
                  <span 
                    className="text-[10px] font-medium"
                    style={{ 
                      color: "var(--card-title-color)",
                      opacity: activeIndex === null || activeIndex === index ? 1 : 0.5
                    }}
                  >
                    {item.name} {item.value}%
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppCard>
  )
}
