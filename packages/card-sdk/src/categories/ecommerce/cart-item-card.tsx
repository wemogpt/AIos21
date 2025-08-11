"use client"
import Image from "next/image"
import { BaseCard } from "../../base/base-card"
import { Button } from "@/components/ui/button"
import { Minus, Plus } from "lucide-react"

interface CartItemCardProps {
  imageUrl: string
  title: string
  attributes: Record<string, string>
  price: number
  quantity: number
  onQuantityChange: (newQuantity: number) => void
}

export function CartItemCard({ imageUrl, title, attributes, price, quantity, onQuantityChange }: CartItemCardProps) {
  const attributesString = Object.entries(attributes)
    .map(([key, value]) => `${key}: ${value}`)
    .join(" | ")

  return (
    <BaseCard className="p-4">
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 relative flex-shrink-0 overflow-hidden rounded-md">
          <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
        <div className="flex-1 space-y-1">
          <h4 className="font-semibold text-sm text-card-title truncate">{title}</h4>
          <p className="text-xs text-card-text">{attributesString}</p>
          <p className="text-base font-bold text-card-title">${price.toFixed(2)}</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 bg-transparent"
              onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
            >
              <Minus className="w-4 h-4" />
            </Button>
            <span className="text-base font-semibold w-6 text-center">{quantity}</span>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 bg-transparent"
              onClick={() => onQuantityChange(quantity + 1)}
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
          <Button variant="link" className="p-0 h-auto text-xs text-red-500">
            Remove
          </Button>
        </div>
      </div>
    </BaseCard>
  )
}
