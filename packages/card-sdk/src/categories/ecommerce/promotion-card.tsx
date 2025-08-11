"use client"
import Image from "next/image"
import { BaseCard } from "../../base/base-card"
import { Button } from "@/components/ui/button"

interface TimeLeft {
  hours: number
  minutes: number
  seconds: number
}

interface PromotionCardProps {
  title: string
  description: string
  promoCode: string
  imageUrl: string
  timeLeft: TimeLeft
}

export function PromotionCard({ title, description, promoCode, imageUrl, timeLeft }: PromotionCardProps) {
  return (
    <BaseCard className="p-0 overflow-hidden relative aspect-video text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600" />
      <Image
        src={imageUrl || "/placeholder.svg"}
        alt={title}
        fill
        className="object-cover mix-blend-soft-light opacity-30"
      />
      <div className="relative z-10 p-6 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-sm opacity-80 mt-1 max-w-xs">{description}</p>
        </div>
        <div className="flex justify-between items-end">
          <div className="flex gap-2 items-baseline">
            <div className="text-center">
              <div className="text-3xl font-mono font-bold">{String(timeLeft.hours).padStart(2, "0")}</div>
              <div className="text-xs opacity-70">Hours</div>
            </div>
            <div className="text-3xl font-mono font-bold -translate-y-1.5">:</div>
            <div className="text-center">
              <div className="text-3xl font-mono font-bold">{String(timeLeft.minutes).padStart(2, "0")}</div>
              <div className="text-xs opacity-70">Mins</div>
            </div>
            <div className="text-3xl font-mono font-bold -translate-y-1.5">:</div>
            <div className="text-center">
              <div className="text-3xl font-mono font-bold">{String(timeLeft.seconds).padStart(2, "0")}</div>
              <div className="text-xs opacity-70">Secs</div>
            </div>
          </div>
          <Button variant="secondary">{`Code: ${promoCode}`}</Button>
        </div>
      </div>
    </BaseCard>
  )
}
