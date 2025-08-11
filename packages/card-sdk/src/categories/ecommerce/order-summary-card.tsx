"use client"
import { BaseCard } from "../../base/base-card"
import { Button } from "@/components/ui/button"

interface OrderSummaryCardProps {
  subtotal: number
  shipping: number
  tax: number
}

export function OrderSummaryCard({ subtotal, shipping, tax }: OrderSummaryCardProps) {
  const total = subtotal + shipping + tax
  const formatPrice = (p: number) => `$${p.toFixed(2)}`

  return (
    <BaseCard className="p-5">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-card-title">Order Summary</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-card-text">Subtotal</span>
            <span className="font-medium text-card-title">{formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-card-text">Shipping</span>
            <span className="font-medium text-card-title">{formatPrice(shipping)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-card-text">Tax</span>
            <span className="font-medium text-card-title">{formatPrice(tax)}</span>
          </div>
        </div>
        <div className="border-t border-dashed border-card-border my-4" />
        <div className="flex justify-between items-center text-lg">
          <span className="font-bold text-card-title">Total</span>
          <span className="font-bold text-card-title">{formatPrice(total)}</span>
        </div>
        <Button size="lg" className="w-full mt-4">
          Proceed to Checkout
        </Button>
      </div>
    </BaseCard>
  )
}
