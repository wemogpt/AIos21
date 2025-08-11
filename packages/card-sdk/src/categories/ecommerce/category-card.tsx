"use client"
import Image from "next/image"
import { BaseCard } from "../../base/base-card"

interface CategoryCardProps {
  imageUrl: string
  categoryName: string
}

export function CategoryCard({ imageUrl, categoryName }: CategoryCardProps) {
  return (
    <BaseCard className="p-0 overflow-hidden group relative aspect-square">
      <Image
        src={imageUrl || "/placeholder.svg"}
        alt={categoryName}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 p-4">
        <h3 className="text-white text-xl font-bold">{categoryName}</h3>
      </div>
    </BaseCard>
  )
}
