"use client"

import { BaseCard } from "../../base/base-card"
import type { CardProps } from "../../types"
import { Button } from "@/components/ui/button"

interface UpcomingLiveSessionCardProps extends CardProps {
  title: string
  instructorName: string
  startTime: Date
  buttonText: string
  primaryColor?: string
  timeLeft: {
    days: number
    hours: number
    minutes: number
    seconds: number
  }
}

const TimeBlock = ({ value, label, primaryColor }: { value: number; label: string; primaryColor: string }) => (
  <div className="flex flex-col items-center">
    <div
      className="w-12 h-12 flex items-center justify-center rounded-lg text-xl font-bold"
      style={{ backgroundColor: `${primaryColor}20`, color: primaryColor }}
    >
      {String(value).padStart(2, "0")}
    </div>
    <span className="text-[10px] mt-1.5" style={{ color: "var(--card-text-color)" }}>
      {label}
    </span>
  </div>
)

export function UpcomingLiveSessionCard({
  title,
  instructorName,
  startTime,
  buttonText,
  primaryColor = "#3b82f6",
  timeLeft,
  ...props
}: UpcomingLiveSessionCardProps) {
  return (
    <BaseCard className="p-6" {...props}>
      <div className="flex items-center gap-3 mb-4">
        <i className="i-lucide-video w-5 h-5" style={{ color: primaryColor }} />
        <h3 className="text-lg font-semibold" style={{ color: "var(--card-title-color)" }}>
          {title}
        </h3>
      </div>
      <div className="space-y-2 text-sm mb-6" style={{ color: "var(--card-text-color)" }}>
        <div className="flex items-center gap-2">
          <i className="i-lucide-user w-4 h-4" />
          <span>主讲人: {instructorName}</span>
        </div>
        <div className="flex items-center gap-2">
          <i className="i-lucide-calendar w-4 h-4" />
          <span>时间: {startTime.toLocaleString("zh-CN")}</span>
        </div>
      </div>
      <div className="flex justify-around items-center mb-6">
        <TimeBlock value={timeLeft.days} label="天" primaryColor={primaryColor} />
        <TimeBlock value={timeLeft.hours} label="小时" primaryColor={primaryColor} />
        <TimeBlock value={timeLeft.minutes} label="分钟" primaryColor={primaryColor} />
        <TimeBlock value={timeLeft.seconds} label="秒" primaryColor={primaryColor} />
      </div>
      <Button variant="default" className="w-full">
        {buttonText}
      </Button>
    </BaseCard>
  )
}
