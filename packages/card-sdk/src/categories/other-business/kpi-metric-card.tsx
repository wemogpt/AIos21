"use client"

import { ArrowUp } from "lucide-react"
import { BaseCard } from "../../base/base-card"
import { cn } from "@/lib/utils"

interface KpiMetricCardProps {
  title: string
  metric: string
  change: string
  changeType: "positive" | "negative"
  className?: string
}

export function KpiMetricCard({ title, metric, change, changeType, className }: KpiMetricCardProps) {
  return (
    <BaseCard className={cn("p-6", className)}>
      <p className="text-sm font-medium text-card-text/80 mb-1">{title}</p>
      <p className="text-3xl font-bold text-card-title mb-2">{metric}</p>
      <div
        className={cn("flex items-center text-sm", {
          "text-green-500": changeType === "positive",
          "text-red-500": changeType === "negative",
        })}
      >
        <ArrowUp
          className={cn("h-4 w-4 mr-1", {
            "transform rotate-180": changeType === "negative",
          })}
        />
        <span>{change}</span>
        <span className="text-card-text/60 ml-1">vs last month</span>
      </div>
    </BaseCard>
  )
}
