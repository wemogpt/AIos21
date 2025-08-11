"use client"

import { useState, useEffect } from "react"
import { AppCard } from "@/components/layout/app-card"
import { PillButton } from "@/components/basic/pill-button"
import { Video, User, Calendar } from 'lucide-react'
import { useDataChartTheme } from "@/components/providers/data-chart-theme-provider"

interface UpcomingLiveSessionCardProps {
  title: string
  instructorName: string
  startTime: Date
  buttonText: string
}

export function UpcomingLiveSessionCard({
  title,
  instructorName,
  startTime,
  buttonText,
}: UpcomingLiveSessionCardProps) {
  const { palette } = useDataChartTheme()
  const primaryColor = palette[0] || "#3b82f6"

  const calculateTimeLeft = () => {
    const difference = +startTime - +new Date()
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }
    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearTimeout(timer)
  })

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div
        className="w-12 h-12 flex items-center justify-center rounded-lg text-xl font-bold"
        style={{ backgroundColor: `${primaryColor}20`, color: primaryColor }}
      >
        {String(value).padStart(2, '0')}
      </div>
      <span className="text-[10px] mt-1.5" style={{ color: "var(--card-text-color)" }}>{label}</span>
    </div>
  )

  return (
    <AppCard className="p-6">
      <div className="flex items-center gap-3 mb-4">
        <Video className="w-5 h-5" style={{ color: primaryColor }} />
        <h3 className="text-lg font-semibold" style={{ color: "var(--card-title-color)" }}>
          {title}
        </h3>
      </div>
      <div className="space-y-2 text-sm mb-6" style={{ color: "var(--card-text-color)" }}>
        <div className="flex items-center gap-2">
          <User className="w-4 h-4" />
          <span>主讲人: {instructorName}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>时间: {startTime.toLocaleString('zh-CN')}</span>
        </div>
      </div>
      <div className="flex justify-around items-center mb-6">
        <TimeBlock value={timeLeft.days} label="天" />
        <TimeBlock value={timeLeft.hours} label="小时" />
        <TimeBlock value={timeLeft.minutes} label="分钟" />
        <TimeBlock value={timeLeft.seconds} label="秒" />
      </div>
      <PillButton variant="primary" className="w-full">{buttonText}</PillButton>
    </AppCard>
  )
}
