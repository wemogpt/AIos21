"use client"

import Image from "next/image"
import { Star } from 'lucide-react'
import { AppCard } from "@/components/layout/app-card"
import { PillButton } from "@/components/basic/pill-button"
import { useDataChartTheme } from "@/components/providers/data-chart-theme-provider"

interface ProductDisplayCardProps {
  imageUrl: string
  name: string
  price: string
  rating: number
  tags: string[]
  buttonText: string
}

export function ProductDisplayCard({
  imageUrl,
  name,
  price,
  rating,
  tags,
  buttonText,
}: ProductDisplayCardProps) {
  const { palette } = useDataChartTheme()
  const ratingColor = palette[4] || "#f59e0b"

  return (
    <AppCard className="p-0 overflow-hidden">
      <div className="aspect-square relative">
        <Image src={imageUrl || "/placeholder.svg"} alt={name} fill className="object-cover" />
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-semibold text-white rounded-full backdrop-blur-md"
              style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-4 space-y-3">
        <h3 className="text-base font-bold truncate" style={{ color: "var(--card-title-color)" }}>
          {name}
        </h3>
        <div className="flex justify-between items-center">
          <p className="text-lg font-bold" style={{ color: "var(--card-title-color)" }}>
            {price}
          </p>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4"
                fill={i < Math.round(rating) ? ratingColor : "none"}
                style={{ color: ratingColor }}
              />
            ))}
            <span className="text-xs ml-1" style={{ color: "var(--card-text-color)" }}>
              ({rating})
            </span>
          </div>
        </div>
        <PillButton variant="primary" className="w-full">
          {buttonText}
        </PillButton>
      </div>
    </AppCard>
  )
}
