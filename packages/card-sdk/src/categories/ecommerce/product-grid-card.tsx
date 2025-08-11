"use client"

import Image from "next/image"
import { Star, Heart } from "lucide-react"
import { BaseCard } from "../../base/base-card"
import { Button } from "@/components/ui/button"

interface ProductGridCardProps {
  imageUrl: string
  title: string
  price: number
  rating: number
  reviewCount: number
  isNew?: boolean
}

export function ProductGridCard({ imageUrl, title, price, rating, reviewCount, isNew = false }: ProductGridCardProps) {
  return (
    <BaseCard className="p-4 relative group">
      {isNew && (
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">NEW</div>
      )}
      <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-8 w-8 rounded-full">
        <Heart className="h-4 w-4" />
      </Button>
      <div className="aspect-square overflow-hidden rounded-md mb-4">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          width={200}
          height={200}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="font-semibold text-card-title text-base truncate mb-1">{title}</h3>
      <div className="flex items-center text-sm text-card-text/80 mb-2">
        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
        <span>{rating}</span>
        <span className="mx-1">·</span>
        <span>{reviewCount} reviews</span>
      </div>
      <p className="text-lg font-bold text-card-title">${price.toFixed(2)}</p>
    </BaseCard>
  )
}
