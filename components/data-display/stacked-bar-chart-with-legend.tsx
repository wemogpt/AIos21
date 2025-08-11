"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"
import { useDataChartTheme } from "@/components/providers/data-chart-theme-provider"
import { ChartCard } from "./chart-card"

const data = [
  { name: "Mon", desktop: 186, mobile: 80, tablet: 45 },
  { name: "Tue", desktop: 305, mobile: 200, tablet: 120 },
  { name: "Wed", desktop: 237, mobile: 120, tablet: 80 },
  { name: "Thu", desktop: 173, mobile: 190, tablet: 95 },
  { name: "Fri", desktop: 209, mobile: 130, tablet: 70 },
  { name: "Sat", desktop: 214, mobile: 140, tablet: 85 },
  { name: "Sun", desktop: 180, mobile: 160, tablet: 90 },
]

export function StackedBarChartWithLegend() {
  const { palette } = useDataChartTheme()

  return (
    <ChartCard>
      <h3 className="text-lg font-semibold" style={{ color: "var(--card-title-color)" }}>
        Device Usage by Day
      </h3>
      <p className="text-sm text-gray-500 mb-4" style={{ color: "var(--card-text-color)" }}>
        Desktop, Mobile & Tablet traffic
      </p>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barCategoryGap="30%" margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip
              cursor={{ fill: "transparent" }}
              contentStyle={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(12px)",
                borderRadius: "0.75rem",
                border: "1px solid rgba(230, 230, 230, 0.8)",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
              }}
            />
            <Legend wrapperStyle={{ fontSize: "12px", paddingTop: "16px" }} iconType="rect" />
            <Bar dataKey="mobile" stackId="a" fill={palette[2]} radius={[0, 0, 8, 8]} />
            <Bar dataKey="tablet" stackId="a" fill={palette[1]} radius={[0, 0, 0, 0]} />
            <Bar dataKey="desktop" stackId="a" fill={palette[0]} radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  )
}
