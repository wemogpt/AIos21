"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { AppCard } from "@/components/layout/app-card"
import { PillButton } from "@/components/basic/pill-button"
import { useTheme } from "@/components/providers/theme-provider"

interface PromotionCardProps {
  title: string
  subtitle: string
  buttonText: string
  imageUrl: string
  endDate: Date
}

export function PromotionCard({ title, subtitle, buttonText, imageUrl, endDate }: PromotionCardProps) {
  const { gradientStyle } = useTheme()

  const calculateTimeLeft = () => {
    const difference = +endDate - +new Date()
    let timeLeft = { hours: 0, minutes: 0, seconds: 0 }
    if (difference > 0) {
      timeLeft = {
        hours: Math.floor(difference / (1000 * 60 * 60)),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }
    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000)
    return () => clearTimeout(timer)
  })

  return (
    <AppCard className="p-0 overflow-hidden relative aspect-[2/1] text-white">
      <div className="absolute inset-0" style={gradientStyle} />
      <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-contain object-right mix-blend-overlay opacity-40" />
      <div className="relative z-10 p-5 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-xs opacity-80 mt-1">{subtitle}</p>
        </div>
        <div className="flex justify-between items-end">
          <div className="flex gap-1.5 items-baseline">
            <div className="text-center">
              <div className="text-2xl font-mono font-bold">{String(timeLeft.hours).padStart(2, "0")}</div>
              <div className="text-[10px] opacity-70">Hours</div>
            </div>
            <div className="text-2xl font-mono font-bold -translate-y-1">:</div>
            <div className="text-center">
              <div className="text-2xl font-mono font-bold">{String(timeLeft.minutes).padStart(2, "0")}</div>
              <div className="text-[10px] opacity-70">Mins</div>
            </div>
            <div className="text-2xl font-mono font-bold -translate-y-1">:</div>
            <div className="text-center">
              <div className="text-2xl font-mono font-bold">{String(timeLeft.seconds).padStart(2, "0")}</div>
              <div className="text-[10px] opacity-70">Secs</div>
            </div>
          </div>
          <PillButton variant="default" className="text-sm px-4 py-1.5 h-auto">{buttonText}</PillButton>
        </div>
      </div>
    </AppCard>
  )
}
