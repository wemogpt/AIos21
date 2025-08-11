"use client"

import Image from "next/image"
import { BaseCard } from "../../base/base-card"
import type { CardProps } from "../../types"

interface OverlayTitleImageCardProps extends CardProps {
  imageUrl: string
  altText: string
  title: string
}

export function OverlayTitleImageCard({ imageUrl, altText, title, ...props }: OverlayTitleImageCardProps) {
  return (
    <BaseCard className="p-0 overflow-hidden aspect-[4/3] relative" {...props}>
      <Image
        src={imageUrl || "/placeholder.svg"}
        alt={altText}
        width={400}
        height={300}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">{title}</h3>
    </BaseCard>
  )
}
