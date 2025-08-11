"use client"
import Image from "next/image"
import { BaseCard } from "../../base/base-card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

interface ProductListCardProps {
  imageUrl: string
  title: string
  description: string
  price: number
  rating: number
  reviewCount: number
}

export function ProductListCard({ imageUrl, title, description, price, rating, reviewCount }: ProductListCardProps) {
  return (
    <BaseCard className="p-4 flex gap-4 items-center">
      <div className="w-24 h-24 relative flex-shrink-0 overflow-hidden rounded-md">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="flex-1 flex flex-col justify-between self-stretch">
        <div>
          <h3 className="font-semibold text-card-title text-base">{title}</h3>
          <div className="flex items-center text-xs text-card-text/80 my-1">
            <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400 mr-1" />
            <span>{rating}</span>
            <span className="mx-1">·</span>
            <span>{reviewCount} reviews</span>
          </div>
          <p className="text-sm mt-1 line-clamp-2 text-card-text">{description}</p>
        </div>
        <div className="flex justify-between items-center mt-2">
          <p className="text-lg font-bold text-card-title">${price.toFixed(2)}</p>
          <Button size="sm">Add to Cart</Button>
        </div>
      </div>
    </BaseCard>
  )
}
