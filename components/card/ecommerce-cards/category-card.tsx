"use client"

import Image from "next/image"
import { AppCard } from "@/components/layout/app-card"

interface CategoryCardProps {
  imageUrl: string
  name: string
}

export function CategoryCard({ imageUrl, name }: CategoryCardProps) {
  return (
    <AppCard className="p-0 overflow-hidden group relative aspect-square">
      <Image
        src={imageUrl || "/placeholder.svg"}
        alt={name}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-0 left-0 p-4">
        <h3 className="text-white text-lg font-bold">{name}</h3>
      </div>
    </AppCard>
  )
}
