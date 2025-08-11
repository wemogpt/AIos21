"use client"

import Image from "next/image"
import { AppCard } from "@/components/layout/app-card"
import { PillButton } from "@/components/basic/pill-button"
import { Star, ShoppingCart } from 'lucide-react'

interface ProductGridCardProps {
  imageUrl: string
  name: string
  price: string
  rating: number
}

export function ProductGridCard({ imageUrl, name, price, rating }: ProductGridCardProps) {
  return (
    <AppCard className="p-0 overflow-hidden group relative">
      <div className="aspect-[4/5] relative">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <PillButton variant="primary" className="h-10 w-10 p-0 backdrop-blur-sm bg-white/20 hover:bg-white/30 border-none">
            <ShoppingCart className="w-5 h-5" />
          </PillButton>
        </div>
      </div>
      <div className="p-3 space-y-1.5">
        <h3 className="text-sm font-semibold truncate" style={{ color: "var(--card-title-color)" }}>
          {name}
        </h3>
        <div className="flex justify-between items-center">
          <p className="text-base font-bold" style={{ color: "var(--card-title-color)" }}>
            {price}
          </p>
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" />
            <span className="text-xs" style={{ color: "var(--card-text-color)" }}>
              {rating}
            </span>
          </div>
        </div>
      </div>
    </AppCard>
  )
}
