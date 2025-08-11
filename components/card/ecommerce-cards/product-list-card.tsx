"use client"

import Image from "next/image"
import { AppCard } from "@/components/layout/app-card"
import { PillButton } from "@/components/basic/pill-button"

interface ProductListCardProps {
  imageUrl: string
  name: string
  description: string
  price: string
  buttonText: string
}

export function ProductListCard({ imageUrl, name, description, price, buttonText }: ProductListCardProps) {
  return (
    <AppCard className="p-3">
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 relative flex-shrink-0 overflow-hidden rounded-lg">
          <Image src={imageUrl || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <div className="flex-1 flex flex-col justify-between self-stretch py-1">
          <div>
            <h3 className="font-semibold text-base" style={{ color: "var(--card-title-color)" }}>
              {name}
            </h3>
            <p className="text-xs mt-1 line-clamp-2" style={{ color: "var(--card-text-color)" }}>
              {description}
            </p>
          </div>
          <div className="flex justify-between items-center mt-1">
            <p className="text-lg font-bold" style={{ color: "var(--card-title-color)" }}>
              {price}
            </p>
            <PillButton variant="primary" className="text-xs px-4 py-1.5 h-auto">
              {buttonText}
            </PillButton>
          </div>
        </div>
      </div>
    </AppCard>
  )
}
