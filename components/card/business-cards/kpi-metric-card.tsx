"use client"

import { AppCard } from "@/components/layout/app-card"
import { ResponsiveContainer, AreaChart, Area } from "recharts"
import { ArrowUp, ArrowDown } from 'lucide-react'

interface KpiMetricCardProps {
  title: string
  value: string
  change: number
  changePeriod: string
  icon: React.ReactNode
  chartData: { value: number }[]
}

export function KpiMetricCard({ title, value, change, changePeriod, icon, chartData }: KpiMetricCardProps) {
  const isPositive = change >= 0

  return (
    <AppCard className="p-4 relative">
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-sm" style={{ color: "var(--card-text-color)" }}>
            {icon}
            <span>{title}</span>
          </div>
          <p className="text-2xl font-bold" style={{ color: "var(--card-title-color)" }}>{value}</p>
          <div className="flex items-center gap-1 text-xs">
            <span className={isPositive ? "text-green-500" : "text-red-500"}>
              {isPositive ? <ArrowUp className="w-3 h-3 inline" /> : <ArrowDown className="w-3 h-3 inline" />}
              {` ${Math.abs(change)}%`}
            </span>
            <span style={{ color: "var(--card-text-color)" }}>{changePeriod}</span>
          </div>
        </div>
        <div className="w-20 h-10 -mx-2 flex-shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id={`colorChange-${isPositive ? 'positive' : 'negative'}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={isPositive ? "#10B981" : "#EF4444"} stopOpacity={0.4}/>
                  <stop offset="95%" stopColor={isPositive ? "#10B981" : "#EF4444"} stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke={isPositive ? "#10B981" : "#EF4444"} 
                strokeWidth={2} 
                fill={`url(#colorChange-${isPositive ? 'positive' : 'negative'})`} 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </AppCard>
  )
}
