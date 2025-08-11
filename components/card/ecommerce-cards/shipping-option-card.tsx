"use client"

import { AppCard } from "@/components/layout/app-card"
import { cn } from "@/lib/utils"

interface ShippingOptionCardProps {
  name: string
  eta: string
  price: string
  selected: boolean
  onSelect: () => void
}

export function ShippingOptionCard({ name, eta, price, selected, onSelect }: ShippingOptionCardProps) {
  return (
    <AppCard
      className={cn(
        "p-3 cursor-pointer transition-all duration-200",
        selected ? "ring-2 ring-offset-2 ring-offset-background" : "hover:bg-gray-500/5",
        "ring-blue-500"
      )}
      onClick={onSelect}
    >
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-semibold text-sm" style={{ color: "var(--card-title-color)" }}>{name}</h4>
          <p className="text-xs" style={{ color: "var(--card-text-color)" }}>{eta}</p>
        </div>
        <p className="font-bold text-sm" style={{ color: "var(--card-title-color)" }}>{price}</p>
      </div>
    </AppCard>
  )
}
