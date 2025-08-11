"use client"

import { useState } from "react"
import { Tabs } from "@/components/navigation/tabs"

// Import all chart components
import { PieChartWithLabel } from "@/components/data-display/pie-chart-with-label"
import { DonutChartActive } from "@/components/data-display/donut-chart-active"
import { DonutChartWithText } from "@/components/data-display/donut-chart-with-text"
import { DonutChartWithLabels } from "@/components/data-display/donut-chart-with-labels"
import { PieChartInteractive } from "@/components/data-display/pie-chart-interactive"
import { SimpleBarChart } from "@/components/data-display/simple-bar-chart"
import { ExpenseBubbleChart } from "@/components/data-display/expense-bubble-chart"
import { StackedBarChart } from "@/components/data-display/stacked-bar-chart"
import { HorizontalBarChart } from "@/components/data-display/horizontal-bar-chart"
import { StackedBarChartWithLegend } from "@/components/data-display/stacked-bar-chart-with-legend"
import { BarChartWithLabel } from "@/components/data-display/bar-chart-with-label"
import { NegativeBarChart } from "@/components/data-display/negative-bar-chart"
import { SimpleLineChart } from "@/components/data-display/simple-line-chart"
import { StackedAreaChart } from "@/components/data-display/stacked-area-chart"
import { SkillsRadarChart } from "@/components/data-display/skills-radar-chart"
import { ProgressRadialBarChart } from "@/components/data-display/progress-radial-bar-chart"
import type { Locale } from "@/lib/dictionaries"

interface DataDisplayClientViewProps {
  pageDict: {
    pieChart: string
    barChart: string
    abstractCharts: string
    lineChart: string
    areaChart: string
    radarChart: string
    radialBarChart: string
  }
  locale: Locale
}

export function DataDisplayClientView({ pageDict }: DataDisplayClientViewProps) {
  const tabs = [
    pageDict.pieChart,
    pageDict.barChart,
    pageDict.abstractCharts,
    pageDict.lineChart,
    pageDict.areaChart,
    pageDict.radarChart,
    pageDict.radialBarChart,
  ]
  const [activeTab, setActiveTab] = useState(tabs[0])

  const renderContent = () => {
    switch (activeTab) {
      case pageDict.pieChart:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PieChartWithLabel />
            <DonutChartActive />
            <DonutChartWithText />
            <DonutChartWithLabels />
            <PieChartInteractive />
          </div>
        )
      case pageDict.barChart:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SimpleBarChart />
            <HorizontalBarChart />
            <StackedBarChart />
            <StackedBarChartWithLegend />
            <BarChartWithLabel />
            <NegativeBarChart />
          </div>
        )
      case pageDict.abstractCharts:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ExpenseBubbleChart />
            <HorizontalBarChart />
          </div>
        )
      case pageDict.lineChart:
        return (
          <div className="flex justify-center">
            <SimpleLineChart />
          </div>
        )
      case pageDict.areaChart:
        return (
          <div className="flex justify-center">
            <StackedAreaChart />
          </div>
        )
      case pageDict.radarChart:
        return (
          <div className="flex justify-center">
            <SkillsRadarChart />
          </div>
        )
      case pageDict.radialBarChart:
        return (
          <div className="flex justify-center">
            <ProgressRadialBarChart />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="space-y-8">
      <div className="w-full">
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      <div className="animate-in fade-in duration-500">{renderContent()}</div>
    </div>
  )
}
