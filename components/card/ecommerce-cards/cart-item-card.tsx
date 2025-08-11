"use client"

import { useState } from "react"
import Image from "next/image"
import { AppCard } from "@/components/layout/app-card"
import { Minus, Plus, X } from 'lucide-react'

interface CartItemCardProps {
  imageUrl: string
  name: string
  attributes: string
  price: string
}

export function CartItemCard({ imageUrl, name, attributes, price }: CartItemCardProps) {
  const [quantity, setQuantity] = useState(1)
  return (
    <AppCard className="p-3">
      <div className="flex items-center gap-3">
        <div className="w-16 h-16 relative flex-shrink-0 overflow-hidden rounded-md">
          <Image src={imageUrl || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <div className="flex-1 space-y-1">
          <h4 className="font-semibold text-sm truncate" style={{ color: "var(--card-title-color)" }}>
            {name}
          </h4>
          <p className="text-xs" style={{ color: "var(--card-text-color)" }}>
            {attributes}
          </p>
          <p className="text-sm font-bold" style={{ color: "var(--card-title-color)" }}>
            {price}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex items-center gap-1 p-0.5 bg-gray-100/80 rounded-full">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="w-5 h-5 flex items-center justify-center rounded-full hover:bg-gray-200/80 transition-colors"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="text-sm font-semibold w-5 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="w-5 h-5 flex items-center justify-center rounded-full hover:bg-gray-200/80 transition-colors"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
           <button className="p-1 text-xs text-gray-400 hover:text-red-500 transition-colors">
            Remove
          </button>
        </div>
      </div>
    </AppCard>
  )
}
