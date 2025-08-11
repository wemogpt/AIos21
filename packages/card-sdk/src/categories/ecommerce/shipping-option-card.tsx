"use client"
import { BaseCard } from "../../base/base-card"
import { cn } from "@/lib/utils"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface ShippingOptionCardProps {
  method: string
  deliveryEstimate: string
  price: number
  isSelected: boolean
  onSelect: () => void
}

export function ShippingOptionCard({ method, deliveryEstimate, price, isSelected, onSelect }: ShippingOptionCardProps) {
  return (
    <BaseCard
      className={cn(
        "p-4 cursor-pointer transition-all duration-200 flex items-center justify-between",
        isSelected ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : "hover:bg-muted/50",
      )}
      onClick={onSelect}
    >
      <div className="flex items-center gap-4">
        <RadioGroup value={isSelected ? method : ""}>
          <RadioGroupItem value={method} id={method} />
        </RadioGroup>
        <div>
          <Label htmlFor={method} className="font-semibold text-sm text-card-title cursor-pointer">
            {method}
          </Label>
          <p className="text-xs text-card-text">{deliveryEstimate}</p>
        </div>
      </div>
      <p className="font-bold text-sm text-card-title">${price.toFixed(2)}</p>
    </BaseCard>
  )
}
