"use client"

import { useState } from "react"
import { Tabs } from "@/components/navigation/tabs"
import { AppCard } from "@/components/layout/app-card"

import { StackedAreaChart } from "@/components/data-display/stacked-area-chart"
import { SimpleBarChart } from "@/components/data-display/simple-bar-chart"
import { SimpleLineChart } from "@/components/data-display/simple-line-chart"
import { PieChartWithLabel } from "@/components/data-display/pie-chart-with-label"
import { SkillsRadarChart } from "@/components/data-display/skills-radar-chart"
import { ProgressRadialBarChart } from "@/components/data-display/progress-radial-bar-chart"

interface DashboardClientViewProps {
  dict: {
    basicCharts: string
    compositeCharts: string
    comingSoon: string
  }
}

export default function DashboardClientView({ dict }: DashboardClientViewProps) {
  const mainTabs = [dict.basicCharts, dict.compositeCharts]
  const [activeMainTab, setActiveMainTab] = useState(mainTabs[0])

  return (
    <main className="p-4 space-y-6">
      <div className="w-full">
        <Tabs tabs={mainTabs} activeTab={activeMainTab} onTabChange={setActiveMainTab} />
      </div>

      {activeMainTab === dict.basicCharts && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-500">
          <SimpleLineChart />
          <SimpleBarChart />
          <PieChartWithLabel />
          <SkillsRadarChart />
          <StackedAreaChart />
          <ProgressRadialBarChart />
        </div>
      )}

      {activeMainTab === dict.compositeCharts && (
        <div className="animate-in fade-in duration-500">
          <AppCard className="flex justify-center items-center p-16">
            <p className="text-gray-500">{dict.comingSoon}</p>
          </AppCard>
        </div>
      )}
    </main>
  )
}
