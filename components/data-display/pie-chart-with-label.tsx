"use client"

import { Pie, PieChart, ResponsiveContainer, Cell, Legend } from "recharts"
import { useDataChartTheme } from "@/components/providers/data-chart-theme-provider"
import { ChartCard } from "./chart-card"

const data = [
  { name: "Mobile", value: 400, color: "#0088FE" },
  { name: "Desktop", value: 300, color: "#00C49F" },
  { name: "Tablet", value: 300, color: "#FFBB28" },
  { name: "Other", value: 200, color: "#FF8042" },
]

export function PieChartWithLabel() {
  const { palette } = useDataChartTheme()

  return (
    <ChartCard>
      <h3 className="text-lg font-semibold" style={{ color: "var(--card-title-color)" }}>
        Device Usage
      </h3>
      <p className="text-sm text-gray-500 mb-4" style={{ color: "var(--card-text-color)" }}>
        Distribution of user devices
      </p>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              dataKey="value"
              cornerRadius={20}
              paddingAngle={5}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={palette[index % palette.length]} />
              ))}
            </Pie>
            <Legend wrapperStyle={{ fontSize: "12px" }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  )
}
